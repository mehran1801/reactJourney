import React, { useState } from "react";

// When we work with a set of related variables, it can be very helpful to group them in an object. Let’s look at an example!

export function Login() {
  const [formState, setFormState] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <>
      <h4>Login Form</h4>
      <form>
        <input
          value={formState.firstName}
          onChange={handleChange}
          name="firstName"
          type="text"
        />
        <input
          value={formState.password}
          onChange={handleChange}
          type="password"
          name="password"
        />
      </form>
    </>
  );
}
