import React, { useState, useEffect } from 'react';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, onSearchChange }) => {
  const [logo, setLogo] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api/logo')
      .then(res => res.json())
      .then(data => setLogo(data.logo))
      .catch(() => {});
  }, []);

  return (
    <header className="bg-white shadow-sm px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {logo ? (
            <img src={logo} alt="Highway Delite" className="h-12" />
          ) : (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">hd</span>
              </div>
              <span className="font-semibold text-lg">highway delite</span>
            </div>
          )}
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search experiences"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="bg-gray-100 px-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button className="bg-primary text-black px-6 py-2 rounded-lg font-medium hover:bg-yellow-400">
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;