import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const EventCard = ({email, firstName, lastName, eventId, eventTitle, host}) => {

  const navigate = useNavigate();

  const navigateToEventDetails = () => {
    navigate("/eventdetails", {
      state:
      {
        email: email,
        firstName: firstName,
        lastName: lastName,
        eventId: eventId,
        eventTitle: eventTitle,
        host: host,
      }
    });
  };

  const navigateBackToDashboard = () => {
    navigate("/dashboard", {
      state:
      {
        email: email,
        firstName: firstName,
        lastName: lastName
      }
    });
  };

  const declineEvent = () =>
  {
    fetch("http://localhost:3000/DeclineEvent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify( { eventID, email } )
    })
    .then(response => response.json())
    .then(data =>
    {
      if (data.success)
      {
        navigateBackToDashboard();
        location.reload();
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
          <p>{eventTitle}</p>
        </div>

        <div className="eventCardInfo">
          <h3>Event Host:</h3>
          <p>{host}</p>
        </div>
      </div>

      <div className="eventCardButtons" id="eventCardButtons">
        <button onClick={() => navigateToEventDetails()} className="eventCardViewDetailsButton">Accept/View Event</button>

        <button onClick={() => declineEvent()} className="eventCardViewDetailsButton"> Decline Event </button>
      </div>

      

    </div>
    </>
  )
}

export default EventCard