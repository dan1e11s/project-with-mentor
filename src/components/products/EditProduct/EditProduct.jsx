import React, { useState, useEffect } from 'react';
import { useProducts } from '../../../contexts/ProductContextProvider';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, TextField, Button, Paper } from '@mui/material';

const EditProduct = () => {
  const { getProductDetails, productDetails, saveEditedProduct } =
    useProducts();

  const [product, setProduct] = useState(productDetails);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  const handleInp = (e) => {
    if (e.target.name === 'price') {
      let obj = {
        ...product,
        price: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  return (
    <>
      {product ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh',
          }}
        >
          <Paper
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40%',
              borderRadius: '15px',
              backgroundColor: '#fff',
              height: '75vh',
              textAlign: 'center',
            }}
          >
            <div>
              <h2>Edit Product</h2>

              <Box
                sx={{
                  marginBottom: '25px',
                }}
              >
                <TextField
                  value={product.name}
                  name="name"
                  id="input-with-sx"
                  label="Title"
                  variant="standard"
                  onChange={handleInp}
                />
              </Box>
              <Box
                sx={{
                  marginBottom: '25px',
                }}
              >
                <TextField
                  value={product.description}
                  name="description"
                  id="input-with-sx"
                  label="Description"
                  variant="standard"
                  onChange={handleInp}
                />
              </Box>
              <Box
                sx={{
                  marginBottom: '25px',
                }}
              >
                <TextField
                  value={product.price}
                  name="price"
                  id="input-with-sx"
                  label="Price"
                  variant="standard"
                  onChange={handleInp}
                />
              </Box>
              <Box
                sx={{
                  marginBottom: '25px',
                }}
              >
                <TextField
                  value={product.picture}
                  name="picture"
                  id="input-with-sx"
                  label="Picture"
                  variant="standard"
                  onChange={handleInp}
                />
              </Box>
              <Box
                sx={{
                  marginBottom: '25px',
                }}
              >
                <TextField
                  value={product.type}
                  name="picture"
                  id="input-with-sx"
                  label="Picture"
                  variant="standard"
                  onChange={handleInp}
                />
              </Box>
              <Button
                variant="contained"
                style={{
                  width: '150px',
                  backgroundColor: '#272727',
                }}
                onClick={() => {
                  saveEditedProduct(product);
                  navigate('/products');
                }}
              >
                Save Changes
              </Button>
            </div>
          </Paper>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
};

export default EditProduct;
