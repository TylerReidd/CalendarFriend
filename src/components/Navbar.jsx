import { useNavigate } from 'react-router-dom';
import React from 'react';

function NavBar({ email, firstName, lastName }) {

  const fullName = "" + firstName + " " + lastName;
  const navigate = useNavigate();

  const navigateToDashboard = () => {
    navigate("/Dashboard", {
      state:
      {
        email: email,
        firstName: firstName,
        lastName: lastName
      }
    });
  };

  const navigateToLogin = () => {
    navigate("/Login", {
      state:
      {
      }
    });
  };

  const navigateToCreateEvent = () => {
    navigate("/CreateEvent", {
      state:
      {
        email: email,
        firstName: firstName,
        lastName: lastName
      }
    });
  };

  return (
  <nav className="navbar">

    <div className="logo">Calendar Friend | Welcome, <span>{fullName}</span>! </div>

    <ul className="nav-links">

      <li><a onClick={() => navigateToDashboard()}>My Dashboard</a></li>
      <li><a onClick={() => navigateToCreateEvent()}>Create Event</a></li>
      <li><a onClick={() => navigateToLogin()}>Sign Out</a></li>

    </ul>

  </nav>
  )
}

export default NavBar;