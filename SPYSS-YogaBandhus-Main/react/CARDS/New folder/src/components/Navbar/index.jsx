import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='transparent'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 ,position:"absolute"}}
          >
            <ShoppingCartIcon />
          </IconButton>
          <Typography variant="h6" component="div" textAlign={"center"} fontWeight="bold" sx={{ flexGrow: 1 }}>
            Home 
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
