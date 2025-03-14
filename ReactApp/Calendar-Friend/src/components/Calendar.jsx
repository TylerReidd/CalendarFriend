// import { Calendar } from "@fullcalendar/core";
// import interactionPlugin from '@fullcalendar/interaction';
// import dayGridPlugin from '@fullcalendar/daygrid';

// const calendarEl = document.getElementById('calendar')
// const calendar = new Calendar(calendarEl, {
//   plugins: [
//     interactionPlugin,
//     dayGridPlugin
//   ],
//   initialView: 'timeGridWeek',
//   editable: true,
//   events: [
//     {title: 'Meeting', start: new Date()}
//   ]
// });

// calendar.render()

import React, {useState} from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'


export function Calendar({onEventSelected}) {
  const [events, setEvents] = useState([
    {title: "Meeting", start: new Date() },
  ])

  const handleSelect = (selectInfo) => {
    let title = prompt("Enter Event Title:");
    if (title) {
      const newEvent = {
        title, 
        start: selectInfo.startStr,
        end: selectInfo.endStr,
      }

      setEvents([...events, newEvent])
      selectInfo.view.calendar.addEvent(newEvent);

      if(onEventSelected) {
        onEventSelected(newEvent)
      }
    }
  };


  return (
    <div className='form-1'>
      <FullCalendar 
        plugins={[timeGridPlugin, interactionPlugin]}
        initialView='timeGridWeek'
        allDaySlot={false}
        weekends={true}
        selectable={true}
        select={handleSelect}
        // selectMirror={true}
        events={events}
        eventContent={(eventInfo) => (
          <>
            <b>{eventInfo.timeText}</b> <i>{eventInfo.event.title}</i>
          </>
        )}
      />
    </div>
  )
}

