import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, List, ListItem, ListItemText } from '@mui/material';

function Checkout({ cartItems, clearCart }) {
  const navigate = useNavigate();

  const handleCheckout = () => {
    clearCart();
    navigate('/invoice');
  };

  return (
    <Container>
      <Typography variant="h4">Checkout</Typography>
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
              </ListItem>
            ))}
          </List>
          <Typography variant="h6">
            Total: $
            {cartItems.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            ).toFixed(2)}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCheckout}
          >
            Confirm and Pay
          </Button>
        </>
      )}
    </Container>
  );
}

export default Checkout;
