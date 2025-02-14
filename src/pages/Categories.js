import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { fetchProductsByCategory } from '../api/api.js';
import Masonry from '@mui/lab/Masonry';

function Categories({ addToCart }) {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductsByCategory = async () => {
      const data = await fetchProductsByCategory(category);
      setProducts(data);
    };
    getProductsByCategory();
  }, [category]);

  return (
    <Masonry columns={4} spacing={3}>
      {products.map((product) => (
        <Card key={product.id} sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardMedia
            component="img"
            image={product.image}
            alt={product.title}
            xs={{
              objectFit: 'cover',
              height: {sx: '200px',sm: '250px' , md: '400px'},
            }}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h6">{product.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              ${product.price}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => addToCart(product)}
              sx={{ marginTop: 'auto' }}
            >
              Add to Cart
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              component={Link}
              to={`/product/${product.id}`}
            >
              View Details
            </Button>
          </CardContent>
        </Card>
      ))}
    </Masonry>
  );
}

export default Categories;