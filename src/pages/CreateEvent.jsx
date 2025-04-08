import { Calendar } from "../components/Calendar";
import { useState } from "react";
import DescriptionField from "../components/DescriptionField";
import TitleField from "../components/TitleField";
import NavBar from "../components/Navbar";


const CreateEvent = () => {
  const [finalEventSlots, setFinalEventSlot] = useState([])
  const [eventTitle, setEventTitle] = useState('')
  const [eventDescription, setEventDescription] = useState('')

  let tempEventSlots = [];
  let eventSlotCounter = 1;
  let currentSlotName = "Slot " + eventSlotCounter;
 

  
  const handleEventSelected = (event) => {
    
    console.log(event.eventSlotCounter)
    console.log(event.start)
    console.log(event.end)

    event.title = currentSlotName;

    //This renders to the calendar
    const newEventSlot =
    {
      slotId: eventSlotCounter,
      start: event.start,
      end: event.end, 
    }

    tempEventSlots.push(JSON.stringify(newEventSlot));
    console.log(tempEventSlots)
    eventSlotCounter++;
  };



  const handleSubmit = async () => {

    setFinalEventSlot([...finalEventSlots, tempEventSlots])
    console.log("final event slots: ", finalEventSlots)
    console.log("temp event slots: ", tempEventSlots)


    const newEvent =
    {
      title: eventTitle,
      description: eventDescription,
      eventSlot: tempEventSlots,
      start: newEvent.start, 
      end: newEvent.end
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
    <NavBar />
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