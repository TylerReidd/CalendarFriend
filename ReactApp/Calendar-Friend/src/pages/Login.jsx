import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import LoginForm from '../components/LoginForm';


const Login = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const navigateToDashboard = () => {
    navigate("/dashboard", {
      state:
      {
        email: email
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:3000/AuthenticateUser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success)
            {
              navigateToDashboard();
            }
            else
            {
              setErrorMessage("Invalid credentials!");
            }
        })
        .catch(error => console.error("Error:", error));
    };

  return (
      <div>

        <h1 class="calendar-friend-title">Calendar Friend</h1>

        <div class="login-box">

          <LoginForm 
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleSubmit={handleSubmit}
            errorMessage={errorMessage}
          />

          <div>
            <p>Dont have an account?</p>
            <a href='/register'>Sign-Up</a>
          </div>

        </div>

      </div>
    )
  }
export default Login;