import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Navbar from '../navbar';



export default function ShowDetail({cardDeatail}) {


  return (
    <>
    <Navbar/>
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            😎
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={cardDeatail.name}
        subheader={cardDeatail.email}
        Price={cardDeatail.id}
      />
      <CardMedia
        component="img"
        height=""
        image={cardDeatail.img}
        alt="Paella dish"
      />
      <CardContent>
      <Typography variant="h3" color="text.secondary">
         {cardDeatail.Price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {cardDeatail.details}
        </Typography>
      </CardContent>
    </Card>
    </>
  );
}
