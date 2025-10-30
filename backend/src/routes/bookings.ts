import { Router } from 'express';
import Booking from '../models/Booking';

const router = Router();

// POST /api/bookings - Create a new booking
router.post('/', async (req, res) => {
  try {
    const { experienceId, date, time, quantity, fullName, email, promoCode, total } = req.body;

    // Basic validation
    if (!experienceId || !date || !time || !quantity || !fullName || !email || !total) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Check for duplicate booking
    const existingBooking = await Booking.findOne({
      experienceId,
      date,
      time,
      email
    });

    if (existingBooking) {
      return res.status(409).json({ error: 'Booking already exists for this slot' });
    }

    const booking = new Booking({
      experienceId,
      date,
      time,
      quantity,
      fullName,
      email,
      promoCode,
      total
    });

    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create booking' });
  }
});

export default router;