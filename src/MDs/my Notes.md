In React, hooks are functions that allow you to hook into React state and lifecycle features from function components. This allows you to use React without classes.

When you take an initial look at the React Hooks documentation, you’ll see that there are several Hooks that we can use for our applications. You can even create your own. Some of the popular ones include:

    useState: returns a stateful value
    useEffect: perform side effects from function components
    useContext: accepts a context objects and returns current context value
    useCallback: pass an inline callback and an array of dependencies

    Some benefits of hooks are:

        Isolating stateful logic, making it easier to test
        Sharing stateful logic without render props or higher-order components
        Separating your app’s concerns based on logic
        Avoiding ES6 classes

# You can also create an object with styling information
and refer to it in the style attribute, I will use it in component only. so every component has his own styles.


# like ListOfThings , have two states, one having array, other will be used to grab the value and use it onChange event listener e.g input. 
If one state is object, then you don't need this second state for values. check it out mate.

- In a input field, onChange event listener will grab the value that is entered and set it to state. 

# UUID package to generate random id for key in li.