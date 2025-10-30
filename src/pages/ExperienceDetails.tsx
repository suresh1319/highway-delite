import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Experience } from '../types';
import { experienceService } from '../services/api';

const ExperienceDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [experience, setExperience] = useState<Experience | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperience = async () => {
      if (!id) return;
      try {
        const response = await experienceService.getById(id);
        setExperience(response.data);
        if (response.data.availableDates.length > 0) {
          setSelectedDate(response.data.availableDates[0]);
        }
      } catch (error) {
        console.error('Failed to fetch experience:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchExperience();
  }, [id]);

  const handleConfirm = () => {
    if (!experience || !selectedDate || !selectedTime) return;
    
    navigate('/checkout', {
      state: {
        experience,
        date: selectedDate,
        time: selectedTime,
        quantity,
        subtotal: experience.price * quantity,
        taxes: Math.round(experience.price * quantity * 0.06),
        total: Math.round(experience.price * quantity * 1.06)
      }
    });
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (!experience) {
    return <div className="flex justify-center items-center min-h-screen">Experience not found</div>;
  }

  const subtotal = experience.price * quantity;
  const taxes = Math.round(subtotal * 0.06);
  const total = subtotal + taxes;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate('/')}
        className="flex items-center text-gray-600 mb-6 hover:text-gray-800"
      >
        ← Details
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <img
            src={experience.image}
            alt={experience.title}
            className="w-full h-80 object-cover rounded-lg mb-6"
          />
          
          <h1 className="text-3xl font-bold mb-4">{experience.title}</h1>
          <p className="text-gray-600 mb-6">{experience.description}</p>

          <div className="mb-6">
            <h3 className="font-semibold mb-3">Choose date</h3>
            <div className="flex space-x-2">
              {experience.availableDates.map((date) => (
                <button
                  key={date}
                  onClick={() => setSelectedDate(date)}
                  className={`px-4 py-2 rounded-lg border ${
                    selectedDate === date
                      ? 'bg-primary border-primary'
                      : 'bg-white border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-3">Choose time</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {experience.timeSlots.map((slot) => (
                <button
                  key={slot.time}
                  onClick={() => slot.available && setSelectedTime(slot.time)}
                  disabled={!slot.available}
                  className={`px-4 py-2 rounded-lg border text-sm ${
                    selectedTime === slot.time
                      ? 'bg-primary border-primary'
                      : slot.available
                      ? 'bg-white border-gray-300 hover:border-gray-400'
                      : 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {slot.time} {slot.spotsLeft && `${slot.spotsLeft} left`}
                  {!slot.available && 'Sold out'}
                </button>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-2">All times are in IST (GMT +5:30)</p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-3">About</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Scenic routes, trained guides, and safety briefing. Minimum age 10.</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg h-fit">
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Starts at</span>
              <span className="font-semibold text-lg">₹{experience.price}</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600">Quantity</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                >
                  -
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                >
                  +
                </button>
              </div>
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
            <div className="flex justify-between font-semibold text-lg border-t pt-2">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>

          <button
            onClick={handleConfirm}
            disabled={!selectedDate || !selectedTime}
            className="w-full bg-primary text-black py-3 rounded-lg font-medium mt-6 hover:bg-yellow-400 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetails;