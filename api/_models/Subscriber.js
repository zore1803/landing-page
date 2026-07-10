import mongoose from 'mongoose';

const subscriberSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    source: { type: String, default: 'blog-newsletter' },
    subscribedAt: { type: Date, default: Date.now },
  },
  { collection: 'subscribers', timestamps: true }
);

// Guard against OverwriteModelError when the module is re-evaluated on a warm lambda.
export default mongoose.models.Subscriber ||
  mongoose.model('Subscriber', subscriberSchema);
