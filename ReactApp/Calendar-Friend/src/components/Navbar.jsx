

function NavBar({email}) {
  return (
  <nav class="navbar">
    <div class="logo">Calendar Friend | Welcome, <span id="email">{email}</span>! </div>
    
    <ul class="nav-links">
        <li><a href="#" class="active">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">My Account</a></li>
        <li><a href="Login.html">Sign Out</a></li>
    </ul>
</nav>
  )
}

export default NavBar;