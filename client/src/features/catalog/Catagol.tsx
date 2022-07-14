import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Product } from "../../app/models/product";

interface Props {
   products: Product[];
   handleProducts: () => void;
}

export default function Catalog({ products, handleProducts }: Props) {
   return (
      <>
         <List>
            {products.map((product) => (
               <ListItem key={product.id}>
                  <ListItemAvatar>
                     <Avatar src={product.pictureUrl}></Avatar>
                  </ListItemAvatar>
                  <ListItemText>
                     {product.name} : {product.price}
                  </ListItemText>
               </ListItem>
            ))}
         </List>
         <Button variant="contained" onClick={handleProducts}>
            Add product
         </Button>
      </>
   );
}
