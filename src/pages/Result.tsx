import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Result: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { booking, success } = location.state || {};

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="px-4 pt-16">
      <div className="text-center">
        {success ? (
          <>
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed</h1>
            <p className="text-gray-600 mb-8">
              Ref ID: {booking?.id || 'HUF56&SO'}
            </p>
          </>
        ) : (
          <>
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Booking Failed</h1>
            <p className="text-gray-600 mb-8">
              Something went wrong. Please try again.
            </p>
          </>
        )}
        
        <button
          onClick={handleBackToHome}
          className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Result;