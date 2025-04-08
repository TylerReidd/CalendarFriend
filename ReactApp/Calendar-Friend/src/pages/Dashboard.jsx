import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import PendingEvents from '../components/PendingEvents';
import EventCard from '../components/EventCard';
import NavBar from '../components/Navbar';


const Dashboard = () => { 
  const [pendingEvents, setPendingEvents] = useState([])
  const [confirmedEvents, setConfirmedEvents] = useState([])
  const navigate = useNavigate();

  const user = {};
  user.userId = "christophersciorti@mail.adelphi.edu";

  useEffect(() => {
    fetch("http://localhost:3000/getEventsByUser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify( {user} )
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                console.log(data);
            } else {
                console.log("data is not successful");
            }
        })
  }, []);

  return (
    <>
    <NavBar />
    <main className='form-1'>
      <section >
        <h2 className=''>Pending Events</h2>
        <PendingEvents events={pendingEvents} />
      </section>

      <section>
        <h2 className=''>Confirmed Events</h2>
        {/* <ConfirmedEvents events={confirmedEvents} />  */}
      </section>

      <button className='btn-1' onClick={() => navigate('/CreateEvent')}>
        Create Event
      </button>
    </main>
    </>
  )
}


export default Dashboard