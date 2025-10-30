import { Router, Request, Response } from 'express';

const router = Router();

interface PromoCode {
  discount: number;
  valid: boolean;
  type?: string;
}

interface PromoCodes {
  [key: string]: PromoCode;
}

const promoCodes: PromoCodes = {
  'SAVE10': { discount: 10, valid: true },
  'FLAT100': { discount: 100, valid: true, type: 'flat' },
  'WELCOME20': { discount: 20, valid: true }
};

// POST /api/promo/validate - Validate promo code
router.post('/validate', (req: Request<{}, {}, { code: string }>, res: Response) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ error: 'Promo code is required' });
  }

  const promo = promoCodes[code.toUpperCase() as keyof typeof promoCodes];

  if (!promo || !promo.valid) {
    return res.json({ valid: false, discount: 0 });
  }

  res.json({ valid: true, discount: promo.discount });
});

export default router;