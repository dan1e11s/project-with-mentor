import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../../contexts/ProductContextProvider';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const ProductDetails = () => {
  const [like, setLike] = useState(false);

  const { id } = useParams();
  const { getProductDetails, productDetails } = useProducts();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
      }}
    >
      {productDetails ? (
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            title={productDetails.name}
            subheader={`Price: ${productDetails.price}`}
          />
          <CardMedia
            component="img"
            height="250"
            image={productDetails.picture}
            alt=""
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {productDetails.description}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton onClick={() => setLike(!like)}>
              <FavoriteIcon style={{ color: `${like ? 'red' : ''}` }} />
            </IconButton>
            <IconButton>
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default ProductDetails;
