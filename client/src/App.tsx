import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    { name: "Lorem", price: 100.0 },
    { name: "Lorem2", price: 120.0 },
  ]);

  function addProducts() {
    setProducts((prevState) => [
      ...prevState,
      {
        name: `Product ${prevState.length + 1}`,
        price: (prevState.length * 100) + 100,
      },
    ]);
  }

  function handleProducts() {
    addProducts();
  }

  return (
    <div className="App">
      <h1>Re-Store</h1>
      <ul>
        {products.map((item, index) => (
          <li key={index}>
            {item.name} : {item.price}
          </li>
        ))}
      </ul>
      <button onClick={handleProducts}>Add product</button>
    </div>
  );
}

export default App;
