import { Calendar } from "../components/Calendar";
import { useState } from "react";
import DescriptionField from "../components/DescriptionField";
import TitleField from "../components/TitleField";
<<<<<<< HEAD
import NavBar from "../components/Navbar";
=======
import InviteList from "../components/InviteList";
>>>>>>> 995c6d24556c96a3d4223309739eb35bf88de926


const CreateEvent = () => {
  const [eventSlots, setEventSlot] = useState([])
  const [eventTitle, setEventTitle] = useState('')
  const [eventDescription, setEventDescription] = useState('')
  const [eventHost, setEventHost] = useState('')
  const [inviteList, setInviteList] = useState([]);
  let eventSlotCounter = 1;
  let currentSlotName = "Slot ";


  const handleInviteListUpdate = (updatedList) => {
    setInviteList(updatedList);
  };
  
  const handleEventSelected = (event) => {

    currentSlotName = "Slot " + eventSlotCounter;
    
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

    eventSlots.push(JSON.stringify(newEventSlot));

    eventSlotCounter++;
  };



  const handleSubmit = async () => {

    const newEvent =
    {
      title: eventTitle,
      eventHost: "Person",
      description: eventDescription,
      eventSlot: eventSlots,
      eventInviteList: inviteList,
      start: null,
      end: null
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
<<<<<<< HEAD
    <NavBar />
      <div class='form-1'>
=======
      <div class='createEventForm'>
>>>>>>> 995c6d24556c96a3d4223309739eb35bf88de926

        <h1>Create Event</h1>

        <div class="formRow">

          <div class="formColumn">

            <h2>General Event Information</h2>

            <TitleField
              eventTitle={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
            />
            
            <DescriptionField
              eventDescription={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)} 
            />
          </div>
          
          <div class="formColumn">

            <h2>Event Invite List</h2>

            <InviteList onChange={handleInviteListUpdate} />

          </div>

        </div>

        <button class="btn-1" onClick={handleSubmit}>Submit Event</button>

      </div>

      <div id="CreateEventCalendar">
        <Calendar
          events={eventSlots}
          onEventSelected={handleEventSelected}
          eventTitle={currentSlotName}
          eventDescription={eventDescription}
        />
      </div>

    </>
  );
};

export default CreateEvent;