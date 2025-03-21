import { Calendar } from "../components/Calendar";
import { useState } from "react";
import DescriptionField from "../components/DescriptionField";
import TitleField from "../components/TitleField";



const CreateEvent = () => {
  const [selectedEvents, setSelectedEvents] = useState([])
  const [eventTitle, setEventTitle] = useState('')
  const [eventDescription, setEventDescription] = useState('')

  
  const handleEventSelected = (event) => {
    console.log(event.start)
    console.log(event.end)

    // 0, 2025-03-17T00:30:00-04:00, 2025-03-21T06:00:00-04:00
    // 1, 2025-03-17T00:30:00-04:00, 2025-03-21T06:00:00-04:00
    const eventSlot = {
      slotId: 0,
      start: event.start,
      end: event.end, 
    }
    const newEvent = {
      title: eventTitle,
      description: eventDescription,
      eventSlot: [],
      start: null , 
      end: null
    }

    setSelectedEvents([...selectedEvents, newEvent])
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

      <TitleField
        eventTitle={eventTitle}
        onChange={(e) => setEventTitle(e.target.value)}
      />
      
      <DescriptionField
        eventDescription={eventDescription}
        onChange={(e) => setEventDescription(e.target.value)} 
      />

      <Calendar 
        events={selectedEvents}
        onEventSelected={handleEventSelected}
        eventTitle={eventTitle}
        eventDescription={eventDescription}
      />

      <button onClick={handleSubmit}>Submit Event</button>

    </div>
  );
};

export default CreateEvent;