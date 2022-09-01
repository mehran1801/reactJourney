import React, { useState } from "react";

export function EditProfile() {
  const [profile, setProfile] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;
    // todo Debugging

    console.log("I am in input event listener with name and value variables");
    console.log("name is " + name);
    console.log("and value is " + value);

    // todo Debugging

    // Inside of our state setter callback function, we wrap our curly brackets in parentheses like so: setFormState((prev) => ({ ...prev })). This tells JavaScript that our curly brackets refer to a new object to be returned.

    setProfile((prevProfile) => {
      // todo debugging
      console.log('Now I am in state setter function with prevProfile parameter')
      console.log("prevProfile is " + JSON.stringify(prevProfile));
      // it is very critical to copy over all of the values from our previous profile object otherwise we give profile the value of a new object with the name and value of the input that most recently changed, but we lose the values that were stored for inputs with any other name.
     return (
     {
        ...prevProfile,

        // We use ..., the spread operator, to fill in the corresponding fields from our previous state.Finally, we overwrite the appropriate key with its updated value.

        [name]: value,

        // Did you notice the square brackets around the name? This Computed Property Name allows us to use the string value stored by the name variable as a property key! Remember this onChange fn is for all the inputs so we need name property to update the right one.
        }
     )
    }
    
    )

    console.log("After state setter fn profile object is " +JSON.stringify(profile));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(profile, "", 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Profile</h3>
      <input
        // because name has stored value as string "firstName" , in state setter function when name is add as key , we can also call profile.firstName. check example in md file.

        value={profile.firstName || ""}
        // so because profile.firstName is undefined atm , it does not exist, so it will be empty string.
        onChange={handleChange}
        name="firstName"
        type="text"
        placeholder="First Name"
      />
      {console.log("I just rendered input tag and here profile.firstName is " + profile.firstName)}
      <input
        value={profile.lastName || ""}
        onChange={handleChange}
        type="text"
        name="lastName"
        placeholder="Last Name"
      />
      <input
        value={profile.bday || ""}
        onChange={handleChange}
        type="date"
        name="bday"
      />
      <input
        value={profile.password || ""}
        onChange={handleChange}
        type="password"
        name="password"
        placeholder="Password"
      />
      <button type="submit">Save Profile</button>
    </form>
  );
}
