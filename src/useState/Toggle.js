import React, { useState } from "react";



export function Toggle() {
  const [isLoading, setIsLoading] = useState();
   const [toggle, setToggle] = useState();

  // It is called Styled object variable
    return (
      <div>
        <h3>Toggle Loading Text</h3>

        <p>Data is {isLoading ? "Loading" : "not Loading"}</p>
        <button 
          onClick={() => setIsLoading(true)}
          disabled={isLoading}
        >
          Turn ON
        </button>

        <button onClick={() => setIsLoading(false)}
        disabled={!isLoading}
        >Turn OFF</button>

        {/* Toggle */}
        <hr />
        <div>
          <p>The toggle is {toggle}</p>
          <button
            onClick={() => setToggle("On")}
          >
            On</button>
          
          <button
            onClick={() => setToggle("Off")}>
            Off
          </button>
          
        </div>
        <hr />
        <div>
          <h5>Notes:</h5>
          <p className="overline">
            - useState() is a JavaScript function defined in the React library.
            <br />
            * When we call this function, it returns an array with two values:
            <br />
            - current state - the current value of this state state setter - a
            function that we can use to update the value of this state <br />
            - Calling the state setter signals to React that the component needs
            to re-render, so the whole function defining the component is called
            again. <br />* The magic of useState() is that it allows React to
            keep track of the current value of state from one render to the
            next!
          </p>
          <h6>Instructions:</h6>
          <ul className="list-disc">
            <li>Using Style object Variable</li>
            <li>
              dont put curly braces when using state variable e.g color , gives
              no result
            </li>
            <li>Using Ternary Operator</li>
            <li>
              More on{" "}
              <a
                className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                href="https://blog.logrocket.com/styling-in-react-4-ways-style-react-app/"
              >
                style object variable
              </a>
            </li>
            <li>
              The style objects and the components do not have to be in the same
              file. We can create a separate .js file for our styles, export
              these styles, and then import them into the component where we
              want to use them. Doing this makes styles reusable across multiple
              components. Lets do this for our component.
            </li>
            <li>setColor use inline function</li>
          </ul>
        </div>
      </div>
    );
}