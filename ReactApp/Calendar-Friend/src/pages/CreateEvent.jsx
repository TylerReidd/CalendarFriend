import { Calendar } from "../components/Calendar";
import { useState } from "react";
import LongField from "../components/LongField";
import ShortField from "../components/ShortField";

const CreateEvent = () => {
  const [selectedEvents, setSelectedEvents] = useState([])

  const handleEventSelected = (event) => {
    setSelectedEvents([...selectedEvents, event])
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/CreateEvent", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({events: selectedEvents}),
      })

      if (response.ok)
      {
        console.log("Event created successfuly")
      }
      else
      {
        console.error("Failed to create event")
      }
    } catch (error) {
      console.error("Error", error)
    }
  }
  return(
    <div class='form-1'>

      <h1>Create Event</h1>

      <ShortField/>
      
      <LongField/>

      <Calendar 
        onEventSelected={handleEventSelected}
      />

      <button onClick={handleSubmit}>Submit Event</button>

    </div>
  );
};

export default CreateEvent;