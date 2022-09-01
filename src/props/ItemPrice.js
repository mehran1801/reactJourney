import React from 'react'

export function ItemPrice({name,price}) {
  return (
    <div>
      <p>This subComponent is gonna take only name and price.</p>
      <ul>
        <li>Name in SubComponent is: {name}</li>
        <li>Price in SubComponent is:{price}</li>
          </ul>
          <p>Remember it is top down, you cant pass the prop "name" back to the app from this level because we went downwards. </p>
    </div>
  );
}

