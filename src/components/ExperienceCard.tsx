import React from 'react';
import { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
  onViewDetails: (id: string) => void;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, onViewDetails }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <img
        src={experience.image}
        alt={experience.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg text-gray-900">{experience.title}</h3>
          <span className="text-sm text-gray-500">{experience.location}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{experience.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-1">
            <span className="text-sm text-gray-500">From</span>
            <span className="font-semibold text-lg">₹{experience.price}</span>
          </div>
          <button
            onClick={() => onViewDetails(experience.id)}
            className="bg-primary text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-400"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;