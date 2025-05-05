import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const EventCard = ({event, host, email}) => {

  const navigate = useNavigate();
  const navigateToEventDetails = () => {
    navigate("/eventdetails", {
      state:
      {
        event: event,
        host: host,
        email: email
      }
    });
  };

  const navigateBackToDashboard = () => {
    navigate("/dashboard", {
      state:
      {
        email: email
      }
    });
  };

  const declineEvent = () =>
  {
    fetch("http://localhost:3000/DeclineEvent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify( { event, email } )
    })
    .then(response => response.json())
    .then(data =>
    {
      if (data.success)
      {
        navigateBackToDashboard();
      }
      else
      {
        console.log("Could not delete event.");
      }
    })
  }

  return (
    <>
    <div className="eventCard">

      <div>
        <div className="eventCardInfo">
          <h3>Event Title:</h3>
          <p>{event}</p>
        </div>

        <div className="eventCardInfo">
          <h3>Event Host:</h3>
          <p>{host}</p>
        </div>
      </div>

      <button onClick={() => navigateToEventDetails()} class="eventCardViewDetailsButton">View Event Details</button>

      <button onClick={() => declineEvent()} class="eventCardViewDetailsButton"> Decline Event </button>

    </div>
    </>
  )
}

export default EventCard