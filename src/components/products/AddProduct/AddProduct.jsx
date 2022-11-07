import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../../contexts/ProductContextProvider';
import { TextField, Button, Box, Paper, Autocomplete } from '@mui/material';
import { Sports, TypeSpecimen } from '@mui/icons-material';

const AddProduct = () => {
  const navigate = useNavigate();

  const { addProduct } = useProducts();

  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    picture: '',
    type: '',
  });

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
          <h2>Add Product</h2>
          <Box
            sx={{
              marginBottom: '25px',
            }}
          >
            <TextField
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
              name="type"
              id="input-with-sx"
              label="Type"
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
              addProduct(product);
              navigate('/products');
            }}
          >
            Save
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default AddProduct;
