import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App(){
  return (
    <div className="app">
      <Logo />
      <Form />
      <PickingList />
      <Status/>
    </div>
  );
}

function Logo(){
  return <h1>Travel List ✈️</h1>
}

function Form(){
  const [description, setDescription] = useState("");
  const [numberOfItems, setNumberOfItems] = useState(1);

  function onItemSubmit(e){
    e.preventDefault();

    if (!e.target.value) return;
    
    const newItem = { id: new Date.now(), description: description, quantity: numberOfItems, packed: false };
    console.log(newItem);

    setDescription("");
    setNumberOfItems(1);
  }

  return (
    <form className="add-form" onSubmit={onItemSubmit}>
      <h3>What do you need for your trip?</h3>
      <select value={numberOfItems} onChange={(e) => setNumberOfItems(Number(e.target.value))}>
        {Array.from({length: 20}, (_, i) => i +1).map((num) => {
          return (
          <option value={num} key={num}>
            {num}
          </option>);
        })}
      </select>
      <input value={description} type="text" placeholder="Item ..." onChange={(e) => setDescription(e.target.value)}/>
      <button>Add</button>
    </form>
  );
}

function PickingList(){
  return(
    <div className="list">
      <ul>
        {initialItems.map(item => <Item item={item}/>)}
      </ul>
    </div>
  );
}

function Item({item}){
  return (
      <li>
        <span style={item.packed ? {textDecoration: "line-through"} : {}}>
          {item.quantity} {item.description}
        </span>
        <button>❌</button>
      </li>
  );
}

function Status(){
  return (
    <footer className="stats">You have X items on your list, and you already packed X (X%)</footer>
  );
}

export default App;