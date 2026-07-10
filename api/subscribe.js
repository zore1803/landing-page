import sgMail from '@sendgrid/mail';
import connectDB from './_db.js';
import Subscriber from './_models/Subscriber.js';

// Configured via environment variables (set these in Vercel Project Settings):
//   SENDGRID_API_KEY  - your SendGrid API key
//   SENDGRID_FROM     - verified sender (defaults to no-reply@datacircles.in)
//   NOTIFY_EMAIL      - internal notification recipient (defaults to rohit.zore@datacircles.in)
//   MONGODB_URI       - same connection string as the portal (subscribers are stored here)
const FROM_EMAIL = process.env.SENDGRID_FROM || 'no-reply@datacircles.in';
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || 'rohit.zore@datacircles.in';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body || {};

  if (!email || typeof email !== 'string' || !EMAIL_RE.test(email.trim())) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  if (!process.env.SENDGRID_API_KEY) {
    console.error('SENDGRID_API_KEY is not set');
    return res.status(500).json({ error: 'Email service is not configured.' });
  }

  const subscriber = email.trim().toLowerCase();
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  // Persist the subscriber in the shared MongoDB (best-effort — a DB hiccup
  // must not block the confirmation flow). Upsert so repeat sign-ups don't
  // create duplicates or throw on the unique email index.
  try {
    await connectDB();
    await Subscriber.updateOne(
      { email: subscriber },
      { $setOnInsert: { email: subscriber, source: 'blog-newsletter', subscribedAt: new Date() } },
      { upsert: true }
    );
  } catch (dbErr) {
    console.error('Mongo error:', dbErr.message);
  }

  const thankYou = {
    to: subscriber,
    from: { email: FROM_EMAIL, name: 'Copper Studio' },
    subject: 'Thank you for subscribing to The Copper Journal',
    text:
      'Thank you for subscribing!\n\n' +
      'We\'re glad to have you with us. We\'ll keep you updated with practical insights ' +
      'on branding, UI/UX, web design, and digital strategy — straight to your inbox.\n\n' +
      '— The Copper Studio Team',
    html: `
      <div style="font-family: Arial, Helvetica, sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
        <h2 style="color: #F69049; margin-bottom: 8px;">Thank you for subscribing!</h2>
        <p style="font-size: 15px; line-height: 1.6;">
          We're glad to have you with us. We'll keep you updated with practical insights on
          branding, UI/UX, web design, and digital strategy — delivered straight to your inbox.
        </p>
        <p style="font-size: 15px; line-height: 1.6;">
          Stay tuned for more from <strong>The Copper Journal</strong>.
        </p>
        <p style="font-size: 14px; color: #666; margin-top: 24px;">— The Copper Studio Team</p>
      </div>
    `,
  };

  const notify = {
    to: NOTIFY_EMAIL,
    from: { email: FROM_EMAIL, name: 'Copper Studio Portal' },
    subject: `New blog subscription: ${subscriber}`,
    text: `The email "${subscriber}" has been subscribed to our portal (The Copper Journal blog).`,
    html: `
      <div style="font-family: Arial, Helvetica, sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
        <p style="font-size: 15px; line-height: 1.6;">
          The email <strong>${subscriber}</strong> has been subscribed to our portal
          (The Copper Journal blog).
        </p>
      </div>
    `,
  };

  try {
    // The notification to the internal address is mandatory; send both.
    await Promise.all([sgMail.send(thankYou), sgMail.send(notify)]);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('SendGrid error:', err?.response?.body || err.message);
    return res.status(502).json({ error: 'Could not complete subscription. Please try again.' });
  }
}
