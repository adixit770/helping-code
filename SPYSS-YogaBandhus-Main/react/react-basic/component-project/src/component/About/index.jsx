import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
class About extends React.Component{
   
    render()
    {
        return(
            <>
            <Card sx={{ maxWidth: 345 }} style={{position:"absolute",left:"67rem"}}>
      <CardMedia
        component="img"
        height="140"
        image="https://i.ytimg.com/vi/Tcl-ADtiww8/maxresdefault.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lamborghini Aventador
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus amet minima, maxime a voluptatem unde veritatis voluptatibus repellendus laudantium reiciendis veniam, nulla quaerat commodi, laboriosam quidem dicta. Quia, commodi sit?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }} style={{position:"absolute",left:"38rem"}}>
      <CardMedia
        component="img"
        height="140"
        image="https://www.99images.com/download-image/1020669/2560x1600"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lamborghini Aventador
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus amet minima, maxime a voluptatem unde veritatis voluptatibus repellendus laudantium reiciendis veniam, nulla quaerat commodi, laboriosam quidem dicta. Quia, commodi sit?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }} style={{position:"absolute",left:"8rem"}}>
      <CardMedia
        component="img"
        height="140"
        image="https://imgd.aeplcdn.com/0x0/ec/79/85/9802/img/ol/Lamborghini-Aventador-Right-Front-Three-Quarter-52645.jpg?v=201711021421"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lamborghini Aventador
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus amet minima, maxime a voluptatem unde veritatis voluptatibus repellendus laudantium reiciendis veniam, nulla quaerat commodi, laboriosam quidem dicta. Quia, commodi sit?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }} style={{position:"absolute",left:"67rem",top:"83rem"}}>
      <CardMedia
        component="img"
        height="140"
        image="data:image/jpeg;base64,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"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lamborghini Aventador
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus amet minima, maxime a voluptatem unde veritatis voluptatibus repellendus laudantium reiciendis veniam, nulla quaerat commodi, laboriosam quidem dicta. Quia, commodi sit?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }} style={{position:"absolute",left:"38rem",top:"83rem"}}>
      <CardMedia
        component="img"
        height="140"
        image="data:image/jpeg;base64,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"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lamborghini Aventador
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus amet minima, maxime a voluptatem unde veritatis voluptatibus repellendus laudantium reiciendis veniam, nulla quaerat commodi, laboriosam quidem dicta. Quia, commodi sit?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }} style={{position:"absolute",left:"8rem",top:"83rem"}}>
      <CardMedia
        component="img"
        height="140"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8z14plhbJj_8D0gxqErUO1TIWNzY8iijBoA&usqp=CAU"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lamborghini Aventador
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus amet minima, maxime a voluptatem unde veritatis voluptatibus repellendus laudantium reiciendis veniam, nulla quaerat commodi, laboriosam quidem dicta. Quia, commodi sit?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </>
    
  );


       
    }
}

export default About;