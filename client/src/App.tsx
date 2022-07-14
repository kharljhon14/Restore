import { useEffect, useState } from "react";
import { Product } from "./product";

function App() {
   const [products, setProducts] = useState<Product[]>([]);

   useEffect(() => {
      fetch("http://localhost:5000/api/products")
         .then((response) => response.json())
         .then((data) => setProducts(data));
   }, []);

   function addProducts() {
      setProducts((prevState) => [
         ...prevState,
         {
            id: prevState.length + 101,
            name: `Product ${prevState.length + 1}`,
            price: prevState.length * 100 + 100,
            brand: "Somebrand",
            description: "LOREM",
            pictureUrl: "http://picsum.photos/200",
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
            {products.map((product) => (
               <li key={product.id}>
                  {product.name} : {product.price}
               </li>
            ))}
         </ul>
         <button onClick={handleProducts}>Add product</button>
      </div>
   );
}

export default App;
