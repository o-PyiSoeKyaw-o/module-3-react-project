import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Invoice({ cartItems }) {
  const navigate = useNavigate();

  return (
    <Container>
      <Typography variant="h4">Invoice</Typography>
      <Typography>Thank you for your purchase!</Typography>
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
        onClick={() => navigate('/')}
      >
        Back to Home
      </Button>
    </Container>
  );
}

export default Invoice;