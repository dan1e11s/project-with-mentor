import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../../contexts/ProductContextProvider';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import { useCart } from '../../../contexts/CartContextProvider';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import IconButton from '@mui/material/IconButton';

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const { deleteProduct } = useProducts();
  const { addProductToCart, checkProductInCart } = useCart();

  return (
    <Card
      style={{
        width: '30%',
        height: '33vh',
        textAlign: 'center',
        display: 'flex',
        marginBottom: '30px',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <div
          style={{
            margin: '0 auto',
          }}
        >
          <Button size="small" onClick={() => navigate(`/details/${item.id}`)}>
            Details
          </Button>
          <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
            Edit
          </Button>
          <Button size="small" onClick={() => deleteProduct(item.id)}>
            Delete
          </Button>
          <IconButton>
            <AddShoppingCartOutlinedIcon
              color={checkProductInCart(item.id) ? 'primary' : ''}
              size="small"
              onClick={() => addProductToCart(item)}
            />
          </IconButton>
          {/* <Button size="small" onClick={() => addProductToCart(item)}>
            Add To Cart
          </Button> */}
        </div>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
