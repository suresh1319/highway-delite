import { Router } from 'express';
import Experience from '../models/Experience';

const router = Router();

// GET /api/experiences - Get all experiences
router.get('/', async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch experiences' });
  }
});

// GET /api/experiences/:id - Get experience by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const experience = await Experience.findById(id);
    
    if (!experience) {
      return res.status(404).json({ error: 'Experience not found' });
    }
    
    res.json(experience);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch experience' });
  }
});

export default router;