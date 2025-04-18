import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const EventCard = ({title, host}) => {

  const navigate = useNavigate();
  const navigateToEventDetails = () => {
    navigate("/eventdetails", {
      state:
      {
        title: title,
        host: host,
      }
    });
  };

  return (
    <>
    <div className="eventCard">

      <div>
        <div className="eventCardInfo">
          <h3>Event Title:</h3>
          <p>{title}</p>
        </div>

        <div className="eventCardInfo">
          <h3>Event Host:</h3>
          <p>{host}</p>
        </div>
      </div>

      <button onClick={() => navigateToEventDetails()} class="eventCardViewDetailsButton">View Event Details</button>

    </div>
    </>
  )
}

export default EventCard