import React, { useState, useEffect } from 'react';

const Dropdown = ( {slots} ) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="dropdown-1">
      <select className="dropwdown1-content" value={selectedOption} onChange={handleChange}>
        <option value="">Choose</option>
        {slots.map((option) => (
          <option key={option} value={option}>
            {option.dateFormatted}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
