import { Schema, model } from 'mongoose';
const BusinessSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  category: { type: String, enum: ['Restaurant', 'Salon', 'Retail', 'Other'] },
  location: { type: { type: String }, coordinates: [Number] },
  paystackAuth: String,
  trialExpires: Date,
  active: Boolean,
  ratings: [{ user: String, rating: Number, comment: String }]
});
BusinessSchema.index({ location: '2dsphere' });
export default model('Business', BusinessSchema);
import User from './User';
import Business from './business.js';