# Why Use useEffect?
Before Hooks, function components were only used to accept data in the form of props and return some JSX to be rendered. However, as we learned in the last lesson, the State Hook allows us to manage dynamic data, in the form of component state, within our function components.

In this lesson, we’ll use the Effect Hook to run some JavaScript code after each render, such as:

fetching data from a backend service
subscribing to a stream of data
managing timers and intervals
reading from and making changes to the DOM
Why after each render?
Most interesting components will re-render multiple times throughout their lifetime and these key moments present the perfect opportunity to execute these “side effects”.

There are three key moments when the Effect Hook can be utilized:

When the component is first added, or mounted, to the DOM and renders
When the state or props change, causing the component to re-render
When the component is removed, or unmounted, from the DOM.
Later on in this lesson, we’ll learn how to further fine-tune exactly when this code executes.

# The Effect Hook is used to call another function that does something for us so there is nothing returned when we call the useEffect() function.

# The first argument passed to the useEffect() function is the callback function that we want React to call after each time this component renders. We will refer to this callback function as our effect.