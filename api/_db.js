import mongoose from 'mongoose';

/*
 * Cached Mongoose connection for serverless (Vercel) functions.
 * Each warm invocation reuses the same connection instead of opening a new
 * one, which would otherwise exhaust the MongoDB connection limit under load.
 */
const MONGODB_URI = process.env.MONGODB_URI;

// Reuse across hot reloads / warm lambda invocations via the global object.
let cached = global._mongoose;
if (!cached) {
  cached = global._mongoose = { conn: null, promise: null };
}

export default async function connectDB() {
  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is not set');
  }
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
      // dbName is taken from the URI; set MONGODB_DB to override if needed.
      dbName: process.env.MONGODB_DB || undefined,
    }).then((m) => m);
  }

  try {
    cached.conn = await cached.promise;
  } catch (err) {
    cached.promise = null;
    throw err;
  }
  return cached.conn;
}
