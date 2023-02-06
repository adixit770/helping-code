import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function Footer() {
  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar className='footer' position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
        <HomeIcon style={{ cursor: "pointer",color:"#C4C4C4",width:"65px",height:"65px" }}/>
          <SearchIcon style={{ cursor: "pointer",color:"#C4C4C4",width:"65px",height:"65px" }}/>
          <FavoriteIcon style={{ cursor: "pointer",color:"#C4C4C4",width:"65px",height:"65px" }}/>
          <ShoppingCartIcon style={{ cursor: "pointer",color:"#C4C4C4",width:"65px",height:"65px" }}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
