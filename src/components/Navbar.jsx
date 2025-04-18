import { useNavigate } from 'react-router-dom';

function NavBar({ email }) {
  
  const navigate = useNavigate();
  const navigateToDashboard = () => {
    navigate("/Dashboard", {
      state:
      {
        email: email
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
        email: email
      }
    });
  };

  return (
  <nav class="navbar">
    <div class="logo">Calendar Friend | Welcome, <span id="email">{email}</span>! </div>
    
    <ul class="nav-links">
        <li><a onClick={() => navigateToDashboard()}>My Dashboard</a></li>
        <li><a onClick={() => navigateToCreateEvent()}>Create Event</a></li>
        <li><a onClick={() => navigateToLogin()}>Sign Out</a></li>
    </ul>
</nav>
  )
}

export default NavBar;