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
            padding: "15px"
            
          }}
        >
          Toggle Loading Text
        </h3>
        {/* ToggleLoading */}
        <h3
          style={{
            
            color: "red"
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
      </div>
    );
}