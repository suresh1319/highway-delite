import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Experience } from '../types';
import { experienceService } from '../services/api';
import ExperienceCard from '../components/ExperienceCard';

interface HomeProps {
  searchTerm: string;
}

const Home: React.FC<HomeProps> = ({ searchTerm }) => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await experienceService.getAll();
        setExperiences(response.data);
      } catch (error) {
        console.error('Failed to fetch experiences:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  const handleViewDetails = (id: string) => {
    navigate(`/experience/${id}`);
  };

  const filteredExperiences = experiences.filter(experience =>
    experience.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    experience.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg">Loading experiences...</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredExperiences.map((experience) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>
      {filteredExperiences.length === 0 && searchTerm && (
        <div className="text-center py-8">
          <p className="text-gray-500">No experiences found for "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
};

export default Home;