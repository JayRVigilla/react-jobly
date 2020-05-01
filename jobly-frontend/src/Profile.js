import React, { useState, useEffect } from "react";
import JoblyApi from "./JoblyAPI";



/** Renders User Profile with a form to edit 
*/
function Profile() {
  const [formData, setFormData] = useState({
    first_name: "", last_name: "", email: "", photo_url: ""
  });
  const[currUser, setCurrUser] = useState(localStorage.currentUser)

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let updatedUser = async () => await JoblyApi.updateUser(formData, localStorage.currentUser);
    setCurrUser(updatedUser);
    ;
  }

  useEffect(() => {
    async function beginningUserData() {
      let resp = await JoblyApi.getUser(localStorage.currentUser);
      setCurrUser(resp.user);
    }
    beginningUserData();
  }, [localStorage]);

  return (
    <div>

      <h1>YOU GOT TO Profile!</h1>

      <form onSubmit={handleSubmit}>

        <label htmlFor="first_name">First Name</label>
        <input type="text"
          id="first_name"
          name="first_name"
          value={formData.first_name}
          placeholder={currUser.first_name}
          onChange={handleChange}
          className="mr-sm-2">
        </input>

        <label htmlFor="last_name">Last Name</label>
        <input type="text"
          id="last_name"
          name="last_name"
          value={formData.last_name}
          placeholder={currUser.last_name}
          onChange={handleChange}
          className="mr-sm-2">
        </input>

        <label htmlFor="email">Email</label>
        <input type="text"
          id="email"
          name="email"
          value={formData.email}
          placeholder={currUser.email}
          onChange={handleChange}
          className="mr-sm-2">
        </input>

        <label htmlFor="photo_url">Photo URL</label>
        <input type="text"
          id="photo_url"
          name="photo_url"
          value={formData.photo_url}
          placeholder={currUser.photo_url}
          onChange={handleChange}
          className="mr-sm-2">
        </input>

        <label htmlFor="password">Re-enter Password</label>
        <input type="text"
          id="password"
          name="password"
          value={formData.password}
          placeholder=""
          onChange={handleChange}
          className="mr-sm-2">
        </input>
      </form>
    </div>
  )
}

export default Profile;