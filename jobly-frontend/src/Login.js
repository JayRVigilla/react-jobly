import React, { useState } from "react";
import NewUserForm from './NewUserForm'
import LoginForm from './LoginForm'
// import JoblyApi from "./JoblyAPI";


/** Component that allows users to Login */
function Login() {
  const [mode, setMode] = useState('');

  const handleRadioChange = evt => {
    const newMode = evt.target.id
    setMode(newMode)
  }

  const renderFormOnState = () => mode === "signup" ? <NewUserForm /> : <LoginForm />

  return (
    <div>

        <label htmlFor="login">Log In</label>
          <input
            type="radio"
            name='mode'
            id='login'
            onChange={handleRadioChange}
            />

        <label htmlFor="signup">Sign up</label>
          <input
            type="radio"
            name='mode'
            id='signup'
            onChange={handleRadioChange}
            />

      {renderFormOnState()}
    </div>
  )
}

export default Login;