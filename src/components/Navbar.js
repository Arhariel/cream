import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import logo from './logo.webp'; 

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#8a2be2' }}>
      <Toolbar>
        <img src={logo} alt="Ice Cream Shop Logo" style={{ width: '100px', marginRight: '10px', marginTop: '10px',marginBottom: '10px', borderRadius: '50%' }} />
        <Typography variant="h6" style={{ flexGrow: 1 }}>
        Icicle
        </Typography>
        <Button color="inherit" component={Link} to="/">Главная</Button>
        <Button color="inherit" component={Link} to="/add-icecream">Добавить мороженое</Button>
        <Button color="inherit" component={Link} to="/details">Управление</Button>
        <Button color="inherit" component={Link} to="/about">О нас</Button>
        <Button color="inherit" component={Link} to="/partner">Партнерство</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
