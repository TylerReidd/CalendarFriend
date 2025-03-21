


const DescriptionField = ({eventDescription, onChange}) =>  {
 return (

 <div class='form-1'>
    <label>Event Description </label>
    <input
      className="input-1"
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