import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import NewUserForm from './NewUserForm'
import LoginForm from './LoginForm'
import JoblyApi from "./JoblyAPI";


/** Component that allows users to Login */
function Login() {


  // const [formData, setFormData] = useState({ username: "", password: ""});
  const [mode, setMode] = useState('');
  // const history = useHistory();

  // const handleChange = evt => {
  //   const { name, value } = evt.target;
  //   setFormData(fData => ({
  //     ...fData,
  //     [name]: value
  //   }));
  // }

  const handleRadioChange = evt => {
    const newMode = evt.target.id
    setMode(newMode)
  }

  // function logInUser(username, password) {
  //   async function logInreq() {
  //     const res = await JoblyApi.logIn({username, password}); // EDIT
  //     localStorage.setItem("_token", res.token);
  //     localStorage.setItem("currentUser", username);
  //   }
  //   logInreq();
  // }

  // const handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   logInUser(formData.username, formData.password);
  //   history.push("/jobs");
  // }

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

      {/* < LoginForm />
      <NewUserForm /> */}
      {renderFormOnState()}
    </div>
  )
}

export default Login;