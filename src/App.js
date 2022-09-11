import React from "react";
import styled from "styled-components";
import './index.scss'
// import './my-sass.scss';
import {Props, PropsExample} from "./props/PropsExample"
import { Pizza } from "./useState/Pizza";
import { GroceryCart } from "./useState/GroceryCart";
import { Sandbox } from "./useState/Sandbox";
import { ToggleWord } from "./useState/ToggleWord";
import { Login } from "./useState/Login";
import { LoginForm } from "./useState/LoginForm";
import { EditProfile } from "./useState/EditProfile";
import { Counter } from "./useState/Counter";
import { ColorPicker } from "./useState/ColorPicker";
import { EmailTextInput } from "./useState/EmailTextInput";
import { LessText } from "./useState/LessText";
import { ListOfThings } from "./useState/ListOfThings";
import { TodoList2 } from "./useState/TodoList2";
import { TodoList1 } from "./useState/TodoList1";
import { TodoList_MyVersion } from "./useState/TodoList_MyVersion";


// USE EFFECT
import { PageTitle } from "./useEffect/PageTitle";
import { TodoList } from "./useState/TodoList";
import { Counter2 } from "./useEffect/Counter";
import { Timer } from "./useEffect/Timer";

// styled component , use these instead of divs.

export function App() {

  const divStyle = { backgroundColor: "lightblue" };
  

  return (
    // <StyledContainer>
    <div>
      {/* <Sandbox />
        <TodoList_MyVersion /> */}
      <Sandbox />
      <TodoList2 />
    
    </div>
  );
}




const StyledContainer = styled.div`
  margin: 20% auto;
  text-align: center;

  h1 {
    margin: 0;
  }

  p {
    text-align: center;
  }
`;

const StyledForm = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding-top: 20px;

  input {
    margin: 10px 0;
    width: 220px;
    height: 40px;
    background: #61dafb;
    border: 1px solid #61dafb;
    border-radius: 5px;
    text-align: center;
    font-size: 1.1rem;
  }
`;

