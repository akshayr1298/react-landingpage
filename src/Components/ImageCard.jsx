import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Collapse, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
  root:{
    maxWidth:645,
    background:"transparent !important",
    margin:'20px'
  },

  media:{
    height:440,
  },
  title:{
    fontWeight:"bold",
    fontSize:"2rem",
    color:'#fff'
    
   
  },
  content:{
    background:'rgba(0, 0, 0, 0.54)',
  },
  desc:{
    fontSize:"1.1rem",
    color:'#ddd'
  }
})
export default function ImageCard({place,checked}) {
  const classes = useStyles()

  return (
    <Collapse in={checked} {...(checked ? {timeout:1000} :{})}>
    <Card className={classes.root} >
      <CardMedia
        className={classes.media}
        
        image={place.imageUrl}
        alt="green iguana"
      />
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" component="h1" className={classes.title}>
          {place.title}
        </Typography>
        <Typography variant="body2"  className={classes.desc}>
          {place.desc}
        </Typography>
      </CardContent>
     
    </Card>
    </Collapse>

  );
}
