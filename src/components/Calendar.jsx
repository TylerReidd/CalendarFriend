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


import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

const events = [
  {title: 'Meeting', start: new Date()}
]

export function Calendar() {
  return (
    <div class='form-1'>
      <FullCalendar 
        plugins={[timeGridPlugin, interactionPlugin]}
        initialView='timeGridWeek'
        allDaySlot={false}
        weekends={true}
        selectable={true}
        // selectMirror={true}
        events={events}
        eventContent={renderEventContent}
      />
    </div>
  )
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}