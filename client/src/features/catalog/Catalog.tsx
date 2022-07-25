import { Button } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

interface Props {
   products: Product[];
   handleProducts: () => void;
}

export default function Catalog({ products, handleProducts }: Props) {
   return (
      <>
         <ProductList products={products} />
         <Button variant="contained" onClick={handleProducts}>
            Add product
         </Button>
      </>
   );
}
