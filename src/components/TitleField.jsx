
const TitleField = ({eventTitle,  onChange}) =>{
  return(
    <div className = "input-with-label">
      <label>Event Title</label>
      <input
        className="text-input-1" 
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