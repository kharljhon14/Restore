import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "../../features/about/AboutPage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import ContactPage from "../../features/contact/ContactPage";
import HomePage from "../../features/home/HomePage";
import { Product } from "../models/product";
import Header from "./Header";

function App() {
   const [products, setProducts] = useState<Product[]>([]);
   const [darkMode, setDarkMode] = useState(false);
   const palleteType = darkMode ? "dark" : "light";

   const theme = createTheme({ palette: { mode: palleteType, background: { default: palleteType === "light" ? "#eaeaea" : "#121212" } } });

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
         <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
         <Container>
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/catalog" element={<Catalog products={products} handleProducts={handleProducts} />} />
               <Route path="/catalog/:id" element={<ProductDetails />} />
               <Route path="/about" element={<AboutPage />} />
               <Route path="/contact" element={<ContactPage />} />
            </Routes>
         </Container>
      </ThemeProvider>
   );
}

export default App;
