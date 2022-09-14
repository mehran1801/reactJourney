import React, { useState } from "react";



export function Counter() {
  const [counter, setCounter] = useState(0);



  const incrementCounter = () => {
    return setCounter((prev) => prev + 1);
  };


  return (
    <div>
      <p>You have clicked that button {counter} times</p>
      <button onClick={incrementCounter}>Click Here</button>
    </div>
  );
}

