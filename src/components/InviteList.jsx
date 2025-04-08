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
    <div className="inviteList">
      <div className="inviteListContainer">
        <input
          className="input-1"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter email address to invite..."
        />
        <button
          className="btn-1"
          onClick={addPerson}
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {people.map((person, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100 p-2 rounded"
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
