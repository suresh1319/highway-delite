import mongoose, { Schema, Document } from 'mongoose';

export interface IExperience extends Document {
  title: string;
  location: string;
  description: string;
  price: number;
  image: string;
  availableDates: string[];
  timeSlots: {
    time: string;
    available: boolean;
    spotsLeft?: number;
  }[];
}

const ExperienceSchema = new Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  availableDates: [{ type: String }],
  timeSlots: [{
    time: { type: String, required: true },
    available: { type: Boolean, default: true },
    spotsLeft: { type: Number }
  }]
});

// Transform _id to id in JSON output
ExperienceSchema.set('toJSON', {
  transform: function(doc: any, ret: any) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  }
});

export default mongoose.model<IExperience>('Experience', ExperienceSchema);