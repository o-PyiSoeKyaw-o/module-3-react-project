import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
import axios from 'axios';

function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  if (!product) return <Typography>Loading...</Typography>;

  return (
    <Container>
      <Typography variant="h4">{product.title}</Typography>
      <img src={product.image} alt={product.title} style={{ width: '100%', maxWidth: '300px' }} />
      <Typography variant="h6">${product.price}</Typography>
      <Typography>{product.description}</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </Button>
    </Container>
  );
}

export default ProductDetails;