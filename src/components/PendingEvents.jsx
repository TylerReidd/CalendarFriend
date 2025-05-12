import React from 'react'
import EventCard from './EventCard'

const PendingEvents = ({events}) => {
  if (events.length === 0) {
    return <p>No pending invitations</p>
  }

  return (
    <div className="space-y-4">
      {events.map(event => (
        <EventCard key={event.id} event={event} type="pending" />
      ))}
    </div>
  );
 }

 export default PendingEvents;