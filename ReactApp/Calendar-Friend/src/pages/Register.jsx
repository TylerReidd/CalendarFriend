import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import RegistrationForm from '../components/RegistrationForm';

const Register = () => {

  const navigate = useNavigate();


  const handleBackToLogin = () => {
    navigateToLogin();
  }
  
  const navigateToLogin = () => {
    navigate("/Login", {
      state:
      {
      }
    });
  };

  const [errorMessage, setErrorMessage] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();

    if(password != confirmPassword) 
    {
      setErrorMessage("Passwords Do Not Match!")
    }
    else if(firstName === "" || lastName === "" || email === "" || password === ""|| confirmPassword === "")
    {
      setErrorMessage("Missing Fields")
    }
    else {
      fetch("http://localhost:3000/CreateUser", {
        method: "POST",
        headers: {
          "Content-Type":"application/json" },
          body: JSON.stringify({ firstName, lastName, email, password })
      })
      .then(response => response.json())
      .then(data=> {
        if (data.success)
        {
          navigateToLogin();
        } else {
          setErrorMessage("Error creating account")
        }
      })
      .catch(error => console.error("Error:", error));

    }

  }

  return (

    <div className="form-1">
      <RegistrationForm 
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        firstName={firstName}
        setFirstName={setFirstName}
        setLastName={setLastName}
        lastName={lastName}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        handleSubmit={handleSubmit}
        errorMessage={errorMessage}
      />
      <button onClick={handleBackToLogin}>Back to Login</button>

    </div>
  )
}

export default Register;