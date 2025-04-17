import { useState } from 'react';

const InviteList = ({ onChange }) => {
  const [people, setPeople] = useState([]);
  const [input, setInput] = useState('');

  const addPerson = () => {
    if (input.trim() !== '')
    {
      const updated = [...people, input.trim()];
      setPeople(updated);
      onChange(updated);
      setInput('');
    }
  };

  const removePerson = (indexToRemove) => {
    const updated = people.filter((_, index) => index !== indexToRemove);
    setPeople(updated);
    onChange(updated);
  };

  return(
    <div className = "input-with-label">
      <div className="">
        <input
          className="text-input-1" 
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter email..."
        />
        <button
          className="btn-1"
          onClick={addPerson}
        >
          Add
        </button>
    </div>

      <ul>
        {people.map((person, index) => (
          <li
            key={index}
            className=""
          >
            <span>{person}</span>
            <button
              className="text-red-500 hover:text-red-700 font-bold"
              onClick={() => removePerson(index)}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InviteList;
