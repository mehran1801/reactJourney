import React from "react";
import {Props, PropsExample} from "./props/PropsExample"
import { Pizza } from "./useState/Pizza";
import { GroceryCart } from "./useState/GroceryCart";
import { SandBox } from "./useState/SandBox";
import { ToggleWord } from "./useState/ToggleWord";
import { Login } from "./useState/Login";
import { EditProfile } from "./useState/EditProfile";
import { Counter } from "./useState/Counter";
import { ColorPicker } from "./useState/ColorPicker";
import { EmailTextInput } from "./useState/EmailTextInput";
import { TodoList1 } from "./useState/TodoList1";
import { PageTitle } from "./useEffect/PageTitle";
import { TodoList } from "./useState/TodoList";
import { Counter2 } from "./useEffect/Counter";
import { Timer } from "./useEffect/Timer";


export function App() {

  const divStyle = { backgroundColor: "lightblue"  };
  return (
    <>
      {<div
        // style={(divStyle, { backgroundColor: "#e5acd9" })}
      >
        <SandBox />
        <hr></hr>
      </div>
      }
      <div style={(divStyle, { backgroundColor: "#e5eaf5" })}>
        <EmailTextInput />
        <hr></hr>
      </div>



      {/* <div style={(divStyle, { backgroundColor: "#e5eac8" })}>
        <PropsExample name="iPhone" color="gold" price={2000} />
        <hr></hr>
      </div> */}

      {/* <div style={(divStyle, { backgroundColor: "khaki" })}>
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
      </div>  */}
    </>
  );
}
