import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catagol";
import { Product } from "../models/product";

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
      <>
         <Typography variant="h1">Re-Store</Typography>
         <Catalog products={products}  handleProducts={handleProducts}/>
      </>
   );
}

export default App;
