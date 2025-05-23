
const RegistrationForm = ({email, setEmail, firstName, setFirstName, lastName, setLastName, password, setPassword, confirmPassword, setConfirmPassword, handleSubmit, errorMessage}) => {



  return (
        <form
          className="form-1" 
          id="RegisterForm"
          onSubmit={handleSubmit}
          >
            <label>Enter First Name:</label>
            <input 
              className="input-1" 
              type="text" 
              id="firstNameField" 
              name="firstNameField" 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              />

    
            <label>Enter Last Name:</label>
            <input
              className="input-1"  
              type="text" 
              id="lastNameField" 
              name="lastNameField"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              />
    
            <label>Enter Email:</label> 
            <input 
              className="input-1"  
              type="text" 
              id="emailField" 
              name="emailField" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              /> 
    
            <label>Enter Password:</label> 
            <input 
              className="input-1"  
              type="password" 
              id="passwordField" 
              name="passwordField" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
    
            <label>Confirm Password:</label> 
            <input 
              className="input-with-label" 
              type="password" 
              id="confirmPasswordField"
              name="confirmPasswordField" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              /> 
    
           
         
              <button class="btn-1" type="submit" id="submit" name="submit">Create Account</button>

              {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}

        </form>
 
  )
}

export default RegistrationForm;