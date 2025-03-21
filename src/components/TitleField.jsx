
const TitleField = ({eventTitle,  onChange}) =>{
  return(
    <div class='form-1'>
      <label>Event Title</label>
      <input
        className='input-1'
        placeholder="Title"
        type="text"
        id="titleField"
        name="titleField"
        value={eventTitle}
        onChange={onChange}
      />
    </div>
  )
} 




export default TitleField