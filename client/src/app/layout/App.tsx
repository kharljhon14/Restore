import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/product";
import Header from "./Header";

function App() {
   const [products, setProducts] = useState<Product[]>([]);
   const [darkMode, setDarkMode] = useState(false);
   const palleteType = darkMode ? "dark" : "light";

   const theme = createTheme({ palette: { mode: palleteType } });

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

   function changeTheme() {
      setDarkMode(!darkMode);
   }

   function handleThemeChange() {
      changeTheme();
   }

   return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
         <Header darkMode={darkMode} handleThemeChange={handleThemeChange  } />
         <Container>
            <Catalog products={products} handleProducts={handleProducts} />
         </Container>
      </ThemeProvider>
   );
}

export default App;
