import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (username && password) {
      // Simulating a successful registration
      localStorage.setItem('user', JSON.stringify({ username }));
      setMessage('Registration successful!');
      setTimeout(() => navigate('/login'), 2000); // Redirect to login page after 2 seconds
    } else {
      setMessage('Please fill in both fields.');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }} align="center">
      <Typography variant="h4">Register</Typography>
      <TextField
        label="Username"
        fullWidth
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
      />
      {message && <Typography color="error">{message}</Typography>}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleRegister}
      >
        Register
      </Button>
    </Container>
  );
}

export default Register;
