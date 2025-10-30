import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Experience from './models/Experience';
import { experiences } from './data/experiences';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/bookit';

async function seedData() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Experience.deleteMany({});
    console.log('Cleared existing experiences');

    // Insert new data
    await Experience.insertMany(experiences);
    console.log('Seeded experiences data');

    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
}

seedData();