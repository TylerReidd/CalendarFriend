import React, { useState, useEffect } from 'react';

const Dropdown = ( {slots} ) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select id="drop" value={selectedOption} onChange={handleChange}>
        <option value="">Choose</option>
        {slots.map((option) => (
          <option key={option} value={option.toLowerCase()}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
