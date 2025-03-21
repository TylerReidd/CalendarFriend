import { Calendar } from "../components/Calendar";
import { useState } from "react";
import DescriptionField from "../components/DescriptionField";
import TitleField from "../components/TitleField";


const CreateEvent = () => {
  const [finalEventSlots, setFinalEventSlot] = useState([])
  const [eventTitle, setEventTitle] = useState('')
  const [eventDescription, setEventDescription] = useState('')

  let eventSlotCounter = 1;
  let currentSlotName = "Slot " + eventSlotCounter;
  let tempEventSlots = [];

  
  const handleEventSelected = (event) => {
    console.log(event.eventSlotCounter)
    console.log(event.start)
    console.log(event.end)

    event.title = currentSlotName;

    const newEventSlot =
    {
      slotId: eventSlotCounter,
      start: event.start,
      end: event.end, 
    }

    tempEventSlots.push(JSON.stringify(newEventSlot));

    eventSlotCounter++;
  };



  const handleSubmit = async () => {

    setFinalEventSlot([...finalEventSlots, tempEventSlots])

    const newEvent =
    {
      title: eventTitle,
      description: eventDescription,
      eventSlot: tempEventSlots,
      start: "null", 
      end: "null"
    }

    try
    {
      const response = await fetch("http://localhost:3000/CreateEvent", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({event: newEvent}),
      })

      if (response.ok)
      {
        console.log("Event created successfuly")
      }
      else
      {
        console.error("Failed to create event")
      }
    }
    catch (error)
    {
      console.error("Error", error)
    }
  }

  
  return(
    <>
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

        <button onClick={handleSubmit}>Submit Event</button>

      </div>

      <div id="CreateEventCalendar">
        <Calendar
          events={finalEventSlots}
          onEventSelected={handleEventSelected}
          eventTitle={currentSlotName}
          eventDescription={eventDescription}
        />
      </div>

    </>
  );
};

export default CreateEvent;