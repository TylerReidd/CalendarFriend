


const LoginForm = ({ email, setEmail, password, setPassword, handleSubmit, errorMessage }) => {
  return (

    <form className="form-1" id="LoginForm" onSubmit={handleSubmit}>

      <div className = "input-with-label">
        <label>Enter Email:</label>
        <input 
          className="text-input-1"  
          placeholder="Enter Email" 
          type="text" 
          id="emailField" 
          name="emailField" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className = "input-with-label">
        <label>Enter Password:</label> 
        <input 
          className="text-input-1" 
          placeholder="Enter Password" 
          type="password" 
          id="passwordField" 
          name="passwordField" 
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
        />
      </div>
      
      
        <button className="btn-1" type="submit" id="submit" name="submit" >Login</button>
    
        {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}

    </form>
  )
}

export default LoginForm;