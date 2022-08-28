import React, { useState } from "react";

const colors = [
  "Aquamarine",
  "BlueViolet",
  "Chartreuse",
  "CornflowerBlue",
  "Thistle",
  "SpringGreen",
  "SaddleBrown",
  "PapayaWhip",
  "MistyRose",
];

export function ColorPicker() {
    const [color, setColor] = useState("white");
    const [isLoading, setIsLoading] = useState();
    const divStyle = {backgroundColor: color, padding:"10px"}
    return (
      <div style={divStyle}>
        <h3
          style={{ display: "flex", justifyContent: "center", padding: "15px" }}
        >
          Color Picker
        </h3>
        {colors.map((color, i) => (
          <button
            value={color}
            onClick={() => setColor(color)}
            key={i}
            style={{ padding: "10px", margin: "3px", backgroundColor: color }}
          >
            {color}
          </button>
        ))}
        <hr></hr>
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "15px",
          }}
        >
          Toggle Loading Text
        </h3>
        {/* ToggleLoading */}
        <h3
          style={{
            color: "red",
          }}
        >
          Data is {isLoading ? "Loading" : "not Loading"}
        </h3>
        <button
          style={{ padding: "10px", margin: "3px" }}
          onClick={() => setIsLoading(true)}
        >
          Turn ON
        </button>

        <button
          style={{ padding: "10px", margin: "3px" }}
          onClick={() => setIsLoading(false)}
        >
          Turn OFF
        </button>
        {/* <button
          style={{ padding: "10px", margin: "3px" }}
          onClick={() => setIsLoading()}
        >
          Reset
        </button> */}
        <div>
          <h5>Notes:</h5>
          <p className="overline">
            useState() is a JavaScript function defined in the React library.
            <br />
            When we call this function, it returns an array with two values:
            <br />
            current state - the current value of this state state setter - a
            function that we can use to update the value of this state <br />
            Calling the state setter signals to React that the component needs
            to re-render, so the whole function defining the component is called
            again. The magic of useState() is that it allows React to keep track
            of the current value of state from one render to the next!
          </p>
          <h6>Instructions:</h6>
          <ul className="list-disc">
            <li>Using Style object Variable</li>
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