import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PendingEvents from '../components/PendingEvents';
import EventCard from '../components/EventCard';
import NavBar from '../components/Navbar';

const Dashboard = () => { 

  const [allEvents, setAllEvents] = useState([])
  const [pendingEvents, setPendingEvents] = useState([])
  const [confirmedEvents, setConfirmedEvents] = useState([])

  const location = useLocation();
  const { email } = location.state || {};

  const navigate = useNavigate();
  const navigateToCreateEvent = () => {
    navigate("/CreateEvent", {
      state:
      {
        email: email
      }
    });
  };

  useEffect(() => {
    fetch("http://localhost:3000/GetEventsByEmail", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify( { email } )
        })
        .then(response => response.json())
        .then(data =>
        {
          if (data.success)
          {
            setAllEvents(data.events);
          }
          else
          {
            console.log("data is not successful");
          }
        })
  }, []);

  return (
    <>
    <NavBar email={email} />

    <main className='form-1'>

      <section >
        <h2 className=''>Pending Events</h2>
        {allEvents.map((event) => (
            <EventCard title={event.eventTitle} host={event.eventHost} />
          ))}
      </section>

      <section>
        <h2 className=''>Confirmed Events</h2>
        {/* <ConfirmedEvents events={confirmedEvents} />  */}
      </section>

      <button className='btn-1' onClick={() => navigateToCreateEvent()}>
        Create Event
      </button>

    </main>
    </>
  )
}


export default Dashboard