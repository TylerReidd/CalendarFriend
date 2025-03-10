

function Register() {
  return (
    <div class="form-1">
        <form id="RegisterForm">
    
            <label>Enter First Name:</label>
            <input class="input-1" type="text" id="firstNameField" name="firstNameField" /> 
    
            <label>Enter Last Name:</label> 
            <input class="input-1"  type="text" id="lastNameField" name="lastNameField" /> 
    
            <label>Enter Email:</label> 
            <input class="input-1"  type="text" id="emailField" name="emailField" /> 
    
            <label>Enter Password:</label> 
            <input class="input-1"  type="password" id="passwordField" name="passwordField" /> 
    
            <label>Confirm Password:</label>
            <input class="input-2" type="password" id="confirmPasswordField" name="confirmPasswordField" /> 
    
           
            <div>
                <button class="btn-1" type="submit" id="submit" name="submit">Create Account</button>
            </div>
            <div>
                <a style="display: flex; justify-content: center; align-items: center; padding-top: 6px;" href="Login.html"> Return to Login Page </a>
            </div>
        </form>
    </div>
  )
}