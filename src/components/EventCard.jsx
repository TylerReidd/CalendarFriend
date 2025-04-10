import React from 'react'

const EventCard = ({title, host}) => {
  return (
    <>
    <div className="eventCard">

      <div className="eventCardInfo">
        <h3>Event Title:</h3>
        <p>{title}</p>
      </div>

      <div className="eventCardInfo">
        <h3>Event Host:</h3>
        <p>{host}</p>
      </div>

      <button class="eventCardViewDetailsButton" >View Event Details</button>

    </div>
    </>
  )
}

export default EventCard