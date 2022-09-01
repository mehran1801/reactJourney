Awesome work, we can now build “stateful” function components using the useState React Hook!

Let’s review what we learned and practiced in this lesson:

    With React, we feed static and dynamic data models to JSX to render a view to the screen

    Use Hooks to “hook into” internal component state for managing dynamic data in function components

    We employ the State Hook by using the code below:

        currentState to reference the current value of state

        stateSetter to reference a function used to update the value of this state

        the initialState argument to initialize the value of state for the component’s first render

        const [currentState, stateSetter] = useState( initialState );

    Call state setters in event handlers

    Define simple event handlers inline with our JSX event listeners and define complex event handlers outside of our JSX

    Use a state setter callback function when our next value depends on our previous value

    Use arrays and objects to organize and manage related data that tends to change together

    Use the spread syntax on collections of dynamic data to copy the previous state into the next state like so: setArrayState((prev) => [ ...prev ]) and setObjectState((prev) => ({ ...prev }))

    Split state into multiple, simpler variables instead of throwing it all into one state object

