import React from "react";
import {Props, PropsExample} from "./props/PropsExample"
import { Pizza } from "./useState/Pizza";
import { GroceryCart } from "./useState/GroceryCart";
import { Sandbox } from "./useState/Sandbox";
import { ToggleWord } from "./useState/ToggleWord";
import { Login } from "./useState/Login";
import { EditProfile } from "./useState/EditProfile";
import { Counter } from "./useState/Counter";
import { ColorPicker } from "./useState/ColorPicker";
import { EmailTextInput } from "./useState/EmailTextInput";
import { TodoList1 } from "./useState/TodoList1";
import { LessText } from "./useState/LessText";
import { ListOfThings } from "./useState/ListOfThings";


// USE EFFECT
import { PageTitle } from "./useEffect/PageTitle";
import { TodoList } from "./useState/TodoList";
import { Counter2 } from "./useEffect/Counter";
import { Timer } from "./useEffect/Timer";


export function App() {

  const divStyle = { backgroundColor: "lightblue" };
  

  return (
    <>
      <div style={(divStyle, { backgroundColor: "#e5eaf5" })}>
        <Sandbox />
        {/* text=
        {`Focused, hard work is the real key
        to success. Keep your eyes on the goal, 
        and just keep taking the next step 
        towards completing it.`}{" "}
        maxLength={30} */}
        <hr></hr>
      </div>
    </>
  );
}
