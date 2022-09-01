import { React, useState } from "react";
import data  from '../data.json';

// https://www.educative.io/blog/react-hooks-tutorial-todo-list#overview


const Header = () => {
    return (
        <header>
            <h1>TO DO List</h1>
        </header>
    )
}



export function TodoList1() {
    const [todoList, setToDoList] = useState(data);
    return (
        <div>
            <Header />
            {data.map(item => (
                
                <li
                    className={item.complete ? "strike" : ""
                    
                    }
                onClick={}
                >{item.task}</li>
               
            ))}

        </div>
    )
}