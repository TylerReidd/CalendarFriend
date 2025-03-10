import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'


const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {

   

    document.getElementById("LoginForm").addEventListener("submit", function(event)
    {
        event.preventDefault();
    
        const email = document.getElementById("emailField").value;
        const password = document.getElementById("passwordField").value;
    
        fetch("http://localhost:3000/AuthenticateUser",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        })
        .then(response => response.json())
        .then(data =>
        {
            if (data.success)
            {
                navigate('./pages/CreateEvent');
            }
            else
            {
                alert("Invalid credentials!");
            }
        })
        .catch(error => console.error("Error:", error));
    });
  }
  return (
      <div>
        <form class="form-1" id="LoginForm">
            <label>Enter Email:</label>
            <input class="input-1"  placeholder="Enter Email" type="text" id="emailField" name="emailField" />
    
            <label >Enter Password:</label> 
            <input class="input-2" placeholder="Enter Password" type="password" id="passwordField" name="passwordField" />
            
            
                <button onClick={handleClick} class="btn-1" type="submit" id="submit" name="submit" >Login</button>
            

        </form>
      </div>

      

  )


  
    
    
}

export default Login;