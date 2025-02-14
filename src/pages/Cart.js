import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Cart({ cartItems, removeFromCart }) {
  return (
    <Container>
      <Typography variant="h4">Your Cart</Typography>
      {cartItems.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        <>
          <List>
            {cartItems.map((item) => (
              <ListItem key={item.id}>
                <ListItemText
                  primary={item.title}
                  secondary={`Quantity: ${item.quantity} | Price: $${item.price}`}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </ListItem>
            ))}
          </List>
          <Typography variant="h6" style={{ marginTop: '1rem' }}>
            Total: $
            {cartItems.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            ).toFixed(2)}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/checkout"
            style={{ marginTop: '1rem' }}
          >
            Proceed to Checkout
          </Button>
        </>
      )}
    </Container>
  );
}

export default Cart;
