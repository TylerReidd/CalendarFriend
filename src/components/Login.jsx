
function Login() {
  return (
      <div>
        <form class="form-1" id="LoginForm">
            <label>Enter Email:</label>
            <input class="input-1"  placeholder="Enter Email" type="text" id="emailField" name="emailField" />
    
            <label >Enter Password:</label> 
            <input class="input-2" placeholder="Enter Password" type="password" id="passwordField" name="passwordField" />
            
            
                <button class="btn-1" type="submit" id="submit" name="submit" >Login</button>
            

        </form>
      </div>

  )
    
    
}

export default Login;