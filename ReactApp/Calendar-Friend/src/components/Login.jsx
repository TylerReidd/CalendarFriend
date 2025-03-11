import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'


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
        <form className="form-1" id="LoginForm" onSubmit={handleSubmit}>
            <label>Enter Email:</label>
            <input 
              className="input-1"  
              placeholder="Enter Email" 
              type="text" 
              id="emailField" 
              name="emailField" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
    
            <label >Enter Password:</label> 
            <input 
              className="input-2" 
              placeholder="Enter Password" 
              type="password" 
              id="passwordField" 
              name="passwordField" 
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              />
            
            
                <button className="btn-1" type="submit" id="submit" name="submit" >Login</button>
            

        </form>
        {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
      </div>

    )
  }
export default Login;