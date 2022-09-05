# Lets see when does useEffect function gets called with this counter example.

There are two common kinds of side effects in React components: those that don’t require cleanup, and those that do.

it is important to clean up so that we don’t introduce a memory leak!

Clean Up Effects
Some effects require cleanup. For example, we might want to add event listeners to some element in the DOM, beyond the JSX in our component. When we add event listeners to the DOM, it is important to remove those event listeners when we are done with them to avoid memory leaks!

# removeEventListener should be return function inside the same callback function which is first argument, not after that.


Let’s consider the following effect:

useEffect(()=>{
  document.addEventListener('keydown', handleKeyPress);
  return () => {
    document.removeEventListener('keydown', handleKeyPress);
  };
})
If our effect didn’t return a cleanup function, then a new event listener would be added to the DOM’s document object every time that our component re-renders. Not only would this cause bugs, but it could cause our application performance to diminish and maybe even crash!

Because effects run after every render and not just once, React calls our cleanup function before each re-render and before unmounting to clean up each effect call.

If our effect returns a function, then the useEffect() Hook always treats that as a cleanup function. React will call this cleanup function before the component re-renders or unmounts. Since this cleanup function is optional, it is our responsibility to return a cleanup function from our effect when our effect code could create memory leaks.