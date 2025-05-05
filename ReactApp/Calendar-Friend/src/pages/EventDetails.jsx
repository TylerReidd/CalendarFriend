import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Dropdown from "../components/Dropdown";

const EventDetails = ({eventId}) => {
  const [availableSlots, setAvailableSlots] = useState([])
  const [userSelections, setUserSelections] = useState([])


  const location = useLocation();
  const { event, host } = location.state || {};


  useEffect(() => {
    const fetchSlots = async () => {
      const response = await fetch(`http://localhost:3000/api/events/${eventId}`)
      const data = await response.json()
      setAvailableSlots(data.events);
    }
    fetchSlots()
   
  }, [eventId]);

  const handleSelection = (slot) => {
    setUserSelections([...userSelections, slot]);
  }

  const submitAvailability = async () => {
    await fetch("http://localhost:3000/api/availability", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ eventId, availableTimes: userSelections }),
    })
  }

  return (
    <div>
      <h1> Event Title: {event} </h1>
      <h1> Event Host: {host} </h1>

      <h2>Select Available Times</h2>

      {availableSlots.map((slot, index) => {
        <button key={index} onClick={() => handleSelection(slot)}>
          {new Date(slot.start).toLocaleString()} - {new Date(slot.end).toLocaleString()}
        </button>
      })}

      <Dropdown slots={availableSlots} />

      <button onClick={submitAvailability}>Submit Availability</button>
    </div>
  )
}

export default EventDetails;