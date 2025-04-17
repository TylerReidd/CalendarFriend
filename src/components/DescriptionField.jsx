


const DescriptionField = ({eventDescription, onChange}) =>  {
 return (

  <div className = "input-with-label">
    <label>Event Description </label>
    <input
      className="text-input-1" 
      placeholder="Enter Description"
      type="text"
      id="textfield"
      name="textfield"
      value={eventDescription}
      onChange={onChange}
    ></input>
  </div>

 )
}

export default DescriptionField;