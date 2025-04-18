import React, {useState} from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'


export function MonthCalendar({}) {
  const [events, setEvents] = useState([])


  return (
    <div className="month-calendar">
      <FullCalendar 
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        allDaySlot={false}
        weekends={true}
        selectable={true}
        events={events}
        height={650}
        aspectRatio={2}
        eventContent={(eventInfo) => (
          <>
            <b>{eventInfo.timeText}</b> <i>{eventInfo.event.title}</i>
          </>
        )}
      />
    </div>
  )
}

