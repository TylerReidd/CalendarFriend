import { Calendar } from "../components/Calendar";
import { useState } from "react";
import LongField from "../components/LongField";
import ShortField from "../components/ShortField";
import Login from "../components/Login";


const CreateEvent = () => {

  const [fieldText, setFieldText] = useState("default")

  
  return (
    <div class='form-1'>
      <h1>Create Event</h1>

      <ShortField 
  
      />
      
      <LongField />

      <Calendar 

      />
    </div>
  );
};

export default CreateEvent;