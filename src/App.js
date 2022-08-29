import React from "react";
import { Pizza } from "./useState/Pizza";
import { GroceryCart } from "./useState/GroceryCart";
import { SandBox } from "./useState/SandBox";
import { ToggleWord } from "./useState/ToggleWord";
import { Login } from "./useState/Login";
import { EditProfile } from "./useState/EditProfile";
import { Counter } from "./useState/Counter";
import { ColorPicker } from "./useState/ColorPicker";
import { EmailTextInput } from "./useState/EmailTextInput";


export function App() {
  const divStyle = { height: 100, backgroundColor: "lightblue" };
  return (
    <>
      <div style={(divStyle, { backgroundColor: "#e5eaf5" })}>
        <SandBox />
        <hr></hr>
      </div>

      <div style={(divStyle, { backgroundColor: "#e5eac8" })}>
        <GroceryCart />
        <hr></hr>
      </div>

      {/* <div style={(divStyle, { backgroundColor: "#e5acd9" })}>
        <Login />
        <hr></hr>
      </div>
      <div style={(divStyle, { backgroundColor: "khaki" })}>
        <GroceryCart />
        <hr></hr>
      </div>
      
      <div style={divStyle}>
        <hr></hr>
      </div>
      <div style={divStyle}>
        <Pizza />
        <hr></hr>
      </div>
      <div style={(divStyle, { backgroundColor: "cyan" })}>
        <ToggleWord />
        <hr></hr>
      </div> */}
    </>
  );
}
