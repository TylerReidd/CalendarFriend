import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Form from '../components/Form';

const Login = () => {

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:3000/AuthenticateUser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                navigate('/createevent');
            } else {
                setErrorMessage("Invalid credentials!");
            }
        })
        .catch(error => console.error("Error:", error));
    };

  return (
      <div>
        <Form 
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
          errorMessage={errorMessage}
          />
        
      </div>

    )
  }
export default Login;