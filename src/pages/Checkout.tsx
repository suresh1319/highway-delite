import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { promoService } from '../services/api';

const Checkout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { experience, date, time, quantity, subtotal, taxes } = location.state || {};
  
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePromoApply = async () => {
    if (!promoCode) return;
    try {
      const response = await promoService.validate(promoCode);
      if (response.data.valid) {
        setPromoDiscount(response.data.discount);
      } else {
        alert('Invalid promo code');
      }
    } catch (error) {
      alert('Invalid promo code');
    }
  };

  const finalTotal = Math.round((subtotal + taxes) * (1 - promoDiscount / 100));

  const handlePayAndConfirm = async () => {
    if (!fullName || !email || !agreeTerms) {
      alert('Please fill all required fields and agree to terms');
      return;
    }

    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    navigate('/result', { state: { success: true } });
    setLoading(false);
  };

  if (!experience) {
    navigate('/');
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 mb-6 hover:text-gray-800"
      >
        ← Checkout
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Your name"
                className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="flex space-x-2">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Promo code"
              className="flex-1 px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              onClick={handlePromoApply}
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
            >
              Apply
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="rounded"
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the terms and safety policy
            </label>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600">Experience</span>
              <span className="font-medium">{experience.title}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date</span>
              <span>{new Date(date).toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Time</span>
              <span>{time}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Qty</span>
              <span>{quantity}</span>
            </div>
          </div>

          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Taxes</span>
              <span>₹{taxes}</span>
            </div>
            {promoDiscount > 0 && (
              <div className="flex justify-between text-green-600">
                <span>Discount ({promoDiscount}%)</span>
                <span>-₹{Math.round((subtotal + taxes) * promoDiscount / 100)}</span>
              </div>
            )}
            <div className="flex justify-between font-semibold text-lg border-t pt-2">
              <span>Total</span>
              <span>₹{finalTotal}</span>
            </div>
          </div>

          <button
            onClick={handlePayAndConfirm}
            disabled={loading || !fullName || !email || !agreeTerms}
            className="w-full bg-primary text-black py-3 rounded-lg font-medium mt-6 hover:bg-yellow-400 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            {loading ? 'Processing...' : 'Pay and Confirm'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;