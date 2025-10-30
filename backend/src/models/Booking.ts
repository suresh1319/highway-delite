import mongoose, { Schema, Document } from 'mongoose';

export interface IBooking extends Document {
  experienceId: string;
  date: string;
  time: string;
  quantity: number;
  fullName: string;
  email: string;
  promoCode?: string;
  total: number;
  createdAt: Date;
}

const BookingSchema = new Schema({
  experienceId: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  quantity: { type: Number, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  promoCode: { type: String },
  total: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Transform _id to id in JSON output
BookingSchema.set('toJSON', {
  transform: function(doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  }
});

export default mongoose.model<IBooking>('Booking', BookingSchema);