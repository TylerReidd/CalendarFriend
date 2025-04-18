import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PendingEvents from '../components/PendingEvents';
import EventCard from '../components/EventCard';
import NavBar from '../components/Navbar';
import { MonthCalendar } from '../components/MonthCalendar';

const Dashboard = () => { 

  const [allEvents, setAllEvents] = useState([])
  const [pendingEvents, setPendingEvents] = useState([])
  const [confirmedEvents, setConfirmedEvents] = useState([])

  const location = useLocation();
  const { email } = location.state || {};

  const navigate = useNavigate();

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

      <div className="event-sections">

        <div>
          <h1>Pending Events</h1>
          {allEvents.map((event) => (
              <EventCard title={event.eventTitle} host={event.eventHost} />
            ))}
        </div>

        <MonthCalendar/>

      </div>

    </>
  )
}


export default Dashboard