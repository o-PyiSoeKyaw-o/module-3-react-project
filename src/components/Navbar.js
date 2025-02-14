import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Navbar({ cartItems }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('user'));

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle} sx={{ display: { md: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
            The-One
          </Typography>
          <Button color="inherit" component={Link} to="/" sx={{ display: { xs: 'none', md: 'inline' } }}>Home</Button>
          <Button color="inherit" component={Link} to="/cart" sx={{ display: { xs: 'none', md: 'inline' } }}>Cart ({cartItems ? cartItems.length : 0})</Button>
          <Button color="inherit" component={Link} to="/checkout" sx={{ display: { xs: 'none', md: 'inline' } }}>Checkout</Button>
          <Button color="inherit" onClick={handleMenuClick} sx={{ display: { xs: 'none', md: 'inline' } }}>Categories</Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem component={Link} to="/categories/electronics" onClick={handleMenuClose}>Electronics</MenuItem>
            <MenuItem component={Link} to="/categories/jewelery" onClick={handleMenuClose}>Jewelery</MenuItem>
            <MenuItem component={Link} to="/categories/men-clothing" onClick={handleMenuClose}>Men's Clothing</MenuItem>
            <MenuItem component={Link} to="/categories/women-clothing" onClick={handleMenuClose}>Women's Clothing</MenuItem>
          </Menu>
          {isAuthenticated ? (
            <Button color="inherit" onClick={handleLogout} sx={{ display: { xs: 'none', md: 'inline' } }}>Logout</Button>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/login" sx={{ display: { xs: 'none', md: 'inline' } }}>Login</Button>
              <Button color="inherit" component={Link} to="/register" sx={{ display: { xs: 'none', md: 'inline' } }}>Register</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        <List>
          <ListItem button component={Link} to="/" onClick={handleDrawerToggle}><ListItemText primary="Home" /></ListItem>
          <ListItem button component={Link} to="/cart" onClick={handleDrawerToggle}><ListItemText primary={`Cart (${cartItems ? cartItems.length : 0})`} /></ListItem>
          <ListItem button component={Link} to="/checkout" onClick={handleDrawerToggle}><ListItemText primary="Checkout" /></ListItem>
          {!isAuthenticated && (
            <>
              <ListItem button component={Link} to="/login" onClick={handleDrawerToggle}><ListItemText primary="Login" /></ListItem>
              <ListItem button component={Link} to="/register" onClick={handleDrawerToggle}><ListItemText primary="Register" /></ListItem>
            </>
          )}
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
