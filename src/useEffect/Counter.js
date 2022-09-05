import { React, useState, useEffect } from "react";
export function Counter2() {
//   const [count, setCount] = useState(0);
//   // Sometimes, we want to run some additional code after React has updated the DOM.
//   useEffect(() => {
//     // return alert(count);
//       console.log(count);
//   });
//   const handleClick = (_) => {
//     setCount((prev) => prev + 1);
//   };
    const [count, setCount] = useState(0);
    useEffect(() => {
    //   console.log(`Count: ${count}`);
        document.addEventListener('mousedown', increment)
        // return () => {
        //     document.removeEventListener('mousedown', increment)
        // }

    });


    const increment = () => {
        setCount(prev=>prev+1);
    }
    const handleClick = () => {
      setCount((prevCount) => prevCount + 1);
    };

  return (
    <div>
      {/* <p>You clicked {count} times.</p>
      <button onClick={handleClick}>Click Me!</button> */}
          
          <h4>Document Clicks : {count} </h4>
    </div>
  );
}