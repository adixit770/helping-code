import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='transparent'>
        <Toolbar>
       
          <Typography variant="h6" component="div" textAlign={"center"} fontWeight="bold" sx={{ flexGrow: 1 }}>
            Footer 
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
