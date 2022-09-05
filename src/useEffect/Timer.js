import { React, useState, useEffect } from "react";

//  Control When Effects Are Called
// The useEffect() function calls its first argument (the effect) after each time a component renders. We’ve learned how to return a cleanup function so that we don’t create performance issues and other bugs, but sometimes we want to skip calling our effect on re-renders altogether.

// It is common, when defining function components, to run an effect only when the component mounts (renders the first time), but not when the component re-renders. The Effect Hook makes this very easy for us to do! If we want to only call our effect after the first render, we pass an empty array to useEffect() as the second argument. This second argument is called the dependency array.

// The dependency array is used to tell the useEffect() method when to call our effect and when to skip it. Our effect is always called after the first render but only called again if something in our dependency array has changed values between renders.

// We will continue to learn more about this second argument over the next few exercises, but for now, we’ll focus on using an empty dependency array to call an effect when a component first mounts, and if a cleanup function is returned by our effect, calling that when the component unmounts.

// useEffect(() => {
//   alert("component rendered for the first time");
//   return () => {
//     alert("component is being removed from the DOM");
//   };
// }, []); 
// Without passing an empty array as the second argument to the useEffect() above, those alerts would be displayed before and after every render of our component, which is clearly not when those messages are meant to be displayed. Simply, passing [] to the useEffect() function is enough to configure when the effect and cleanup functions are called!






export function Timer() {}
