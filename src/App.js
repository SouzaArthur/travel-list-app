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
  return (
    <div className="add-form">
      <h3>What do you need for your trip?</h3>
    </div>
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