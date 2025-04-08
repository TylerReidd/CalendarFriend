import React from 'react'



const EventCard = ({event,type}) => {
  return (
    <>
    <div className='rounded-2xl shadow p-4 border border-gray-200'>
      <h3 className='text-lg font-semibold'>{event.title}</h3>
      <p className='text-sm text-gray-600'>{event.host}</p>
      <p className='text-sm text-gray-600'>{event.dateRange}</p>

      {type === 'pending' ? (
        <Button className="mt-2">Respond</Button>
      ) : (
        <Button varient='outline' className="mt-2">View Details</Button>
      )}
    </div>
    </>
  )
}


export default EventCard