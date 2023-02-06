import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar() {
  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar className='main' position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ textAlign:"right" }}>
            Your Cart
          </Typography>
          <ShoppingCartIcon style={{ cursor: "pointer" }}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
