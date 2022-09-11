import React, { useState } from "react";



// export function LoginForm() {
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');
//   const printValues = (e) => {
//     e.preventDefault();
//     console.log(userName, password)
//   }
//   return (
//     <form onSubmit={printValues}>
//       <label>
//         User Name:
//         <input
//           value={userName}
//           onChange={(e) => setUserName(e.target.value)}
//           name="userName"
//           type="text"
//         />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           name="password"
//           type="password"
//         />
//       </label>
//       <br />
//       <button>Submit</button>
//     </form>
//   );
// }

// Let’s look at an example where state is an object. We’ll create the same login form with 2 fields. Compare both ways and pick your favorite.


export function LoginForm() { 
  const [form, setState] = useState({
    username: '',
    password: ''
  });

  const printValues = (e) => {
     e.preventDefault();
    // console.log(form.username, form.password)
    alert(JSON.stringify(form.username, form.password))
  }

  const updateField = ({ target }) => {
    setState( {
      
        ...form,
      [target.name]: target.value
      
    })
    // form[target.name] = "";
   
  }

  return (
    <form onSubmit={printValues}>
      <label>
        UserName:
        <input
          type="text"
          name="username"
          onChange={updateField}
          value={form.username}
        />
      </label>

      <br />

      <label>
        Password:
        <input
          value={form.password}
          type="password"
          name="password"
          onChange={updateField}
        />
      </label>
      <br />
      {/* <button>Submit</button> */}
    </form>
  );
}
// ? alternatively we can do above like this

// function handleChange(e) {
//   const { name, value } = e.target;

//   if (name === "firstName") {
//     setContact({
//       ...contact,
//       firstName: value,
//     });
//   } else if (name === "lastName") {
//     setContact({
//       ...contact,
//       lastName: value,
//     });
//   } else if (name === "email") {
//     setContact({
//       ...contact,
//       email: value,
//     });
//   }
// }