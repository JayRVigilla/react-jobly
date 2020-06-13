import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import './Profile.css';
import JoblyApi from "./JoblyAPI";



/** Renders User Profile with a form to edit
*/
function Profile() {
  const [formData, setFormData] = useState({
    first_name: "", last_name: "", email: "", photo_url: ""
  });
  const [currUser, setCurrUser] = useState(localStorage.currentUser)

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
  }, [/**localStorage*/]);

  return (
    <div className="form">
      <h3>Edit your profile</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="first_name">First Name</Label>
          <Input type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            placeholder={currUser.first_name}
            onChange={handleChange}
            className="mr-sm-2">
          </Input>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="last_name">Last Name</Label>
          <Input type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            placeholder={currUser.last_name}
            onChange={handleChange}
            className="mr-sm-2">
          </Input>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="text"
            id="email"
            name="email"
            value={formData.email}
            placeholder={currUser.email}
            onChange={handleChange}
            className="mr-sm-2">
          </Input>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="photo_url">Photo URL</Label>
          <Input type="text"
            id="photo_url"
            name="photo_url"
            value={formData.photo_url}
            placeholder={currUser.photo_url}
            onChange={handleChange}
            className="mr-sm-2">
          </Input>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">Re-enter Password</Label>
          <Input type="text"
            id="password"
            name="password"
            value={formData.password}
            placeholder=""
            onChange={handleChange}
            className="mr-sm-2">
          </Input>
        </FormGroup>
      </Form>
    </div>
  )
}

export default Profile;