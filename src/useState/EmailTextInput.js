import React, { useState } from "react";


// regex to match numbers between 1 and 10 digits long
const validPhoneNumber = /^\d{1,10}$/;


export function EmailTextInput() {
    const [email, setEmail] = useState('');
    // setting states for valid phone component
    const [phone, setPhone] = useState('');
    const handleChange = (({ target })=> {
        const updatedEmail = target.value;
        setEmail(updatedEmail) 
    })
    //  handleChange2 for phone component
    const handleChange2 = ((target) => {
      const updatedPhone = target.value;
      //  before I call state setter function, I will only call if entered phone number is valid.
      const isValid = validPhoneNumber.test(updatedPhone);
      if (isValid) {
        setPhone(updatedPhone);
      }
      // just ignore the event, when new value is invalid
    })
    return (
      <div>
        <label for="email-input">Email:</label>
        <input
          type="text"
          value={email}
          id="email-input"
          onChange={handleChange}
        />
        <div>
          <div>
            <label for="phone-input">Phone:</label>
            <input
              type="text"
              value={phone}
              id="phone-input"
              onChange={handleChange2}
            />
          </div>
          <h5>
            Lets see how to manage the changing value of a string as a user
            types into a text input field:
          </h5>
          <ul>
            <li>
              The local variable named email is assigned the current state value
              at index 0 from the array returned by useState()
            </li>
            <li>
              The local variable named setEmail() is assigned a reference to the
              "state setter function" at index 1 from the array returned by
              useState()
            </li>
            <li>
              Its convention to name this variable using the current state
              variable (email) with “set” prepended
            </li>
            <li>
              The JSX input tag has an event listener called "onChange". This
              event listener calls an event handler each time the user types
              something in this element, and we write separate event handler
              calling "handleChange".
            </li>
          </ul>
        </div>
      </div>
    );
}