import React from 'react'
import {ItemPrice} from './ItemPrice'

export function PropsExample({name,color,price}) {
  
  return (
    <div>
      <p className="red">
        we are going to have 4 different products and each one is gonna have
        different name, price and description. but we will write only one
        component and use it again and again uring props.
      </p>
      <p className="green">
        props gets passed in as paramenter to functional component. Its an
        object.
      </p>
      <p className="skyblue">
        props are passed in just as html attributes. So in the App components
        where you gonna render this component, just add the props there. If its
        not string dont forget to put in <i>curly braces</i>.
      </p>
      <p>
        Use destructuring (pull apart props object) and instead of writing props as parameter, write the
        props name in curly braces as parameter or alternatively use props.name,
        props.color etc.
      </p>
      <p>Lets use those props now</p>
      <ul>
        <li>Product Name: {name}</li>
        <li>Color: {color}</li>
        <li>Price: ${price}</li>
      </ul>
      <p className="red">
        Now I want to use this "product" prop on a child component underneath it and pass the props down to them. Thats called tree structure.
      </p>
      <ItemPrice name={name} price={price} />
    </div>
  );
}

