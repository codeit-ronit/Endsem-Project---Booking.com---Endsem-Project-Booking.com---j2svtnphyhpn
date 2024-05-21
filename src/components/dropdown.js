import React, { useState } from 'react';

const Dropdown = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Sort by:');

  const options = [
    'Price (highest first)',
    'Price (lowest first)',
    'Property rating (high to low)',
    'Property rating (low to high)',
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option); 
  };

  return (
    <div className="relative inline-block text-left w-64">
      <div>
        <button
          type="button"
          className="inline-flex justify-between items-center h-[45px] w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-xs font-small text-gray-700 hover:bg-gray-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption}
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option, index) => (
              <button
                key={index}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
