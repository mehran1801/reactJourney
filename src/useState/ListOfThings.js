import React, { useState } from "react";


export function ListOfThings () {
const [items, setItems] = useState([]);
const [itemName, setItemName] = useState("");

const addItem = (event) => {
  event.preventDefault();
  setItems([
    ...items,
    {
      id: items.length,
      name: itemName,
    },
  ]);
  setItemName("");
};

return (
  <>
    <form onSubmit={addItem}>
      <h4>Shopping List </h4>
      <label>
        <input
          name="item"
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
      </label>
      {/* <button type="submit">Add</button> */}
    </form>
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  </>
);
  
}

// Sandbox version

// export function Sandbox() {
//   const [items, setItems] = useState([]);
//   const [itemName, setItemName] = useState("");
//   const addItem = (e) => {
//     e.preventDefault();
//     setItems((prev) => {
//       return [...prev, itemName];
//     });
//     setItemName("");
//   };

//   return (
//     <div>
//       <form onSubmit={addItem}>
//         <input
//           name="item"
//           type="text"
//           value={itemName}
//           onChange={(e) => setItemName(e.target.value)}
//         />
//       </form>
//       <ul>
//         {items.map((item) => (
//           <li key={item}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }