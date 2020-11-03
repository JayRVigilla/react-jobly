import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import JoblyApi from "./JoblyAPI";


/** Component that allows New User sign up */
function NewUserForm() {


  const [formData, setFormData] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
    photo_url: "",
  });
  const history = useHistory();

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  function signUpUser(fData) {
    async function signUpUserAPI() {
      const res = await JoblyApi.createNewUser({fData}); // EDIT
      localStorage.setItem("_token", res.token);
      localStorage.setItem("currentUser", formData.username);
    }
    signUpUserAPI();
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    signUpUser(formData);
    history.push("/jobs");
  }

  return (
    <div>
      <h1>Sign Up</h1>
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

        <label htmlFor="first_name">First Name</label>
        <input type="text"
          id="first_name"
          name="first_name"
          value={formData.first_name}
          placeholder=""
          onChange={handleChange}>
        </input>

        <label htmlFor="last_name">Last Name</label>
        <input type="text"
          id="last_name"
          name="last_name"
          value={formData.last_name}
          placeholder=""
          onChange={handleChange}>
        </input>

        <label htmlFor="email">Email</label>
        <input type="text"
          id="email"
          name="email"
          value={formData.email}
          placeholder=""
          onChange={handleChange}>
        </input>

        <label htmlFor="photo_url">Photo URL</label>
        <input type="text"
          id="photo_url"
          name="photo_url"
          value={formData.photo_url}
          placeholder=""
          onChange={handleChange}>
        </input>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default NewUserForm;