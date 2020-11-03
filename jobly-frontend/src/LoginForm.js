import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import JoblyApi from "./JoblyAPI";


/** Component that allows New User sign up */
function LoginForm() {
  const [formData, setFormData] = useState({ username: "", password: ""});
  const history = useHistory();

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  function logInUser(username, password) {
    async function logInreq() {
      const res = await JoblyApi.logIn({username, password}); // EDIT
      localStorage.setItem("_token", res.token);
      localStorage.setItem("currentUser", username);
    }
    logInreq();
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    logInUser(formData.username, formData.password);
    history.push("/jobs");
  }

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit} className="form-inline">

        <label htmlFor="username">Username</label>
        <input type="text"
          id="username"
          name="username"
          value={formData.username}
          placeholder=""
          onChange={handleChange}
          className="mr-sm-2">
        </input>

        <label htmlFor="password">Password</label>
        <input type="text"
          id="password"
          name="password"
          value={formData.password}
          placeholder=""
          onChange={handleChange}>
          </input>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default LoginForm;