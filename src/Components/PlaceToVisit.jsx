import { makeStyles } from '@material-ui/core'
import React from 'react'
import useWindowPosition from '../Hook/Scroll';
import { places } from '../Static/Place';
import ImageCard from './ImageCard';



const useStyles = makeStyles((theme)=>({
  root:{
    minHeight:'100vh',
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    [theme.breakpoints.down('md')]:{
      flexDirection:"column",
    }
  }

}));

function PlaceToVisit() {
  const classes = useStyles()
  const checked = useWindowPosition('header')
  return (
    <div className={classes.root} id= "place-to-visit">     
      <ImageCard place={places[0]} checked={checked} />
      <ImageCard place={places[1]} checked={checked} />

    </div> 
  )
}

export default PlaceToVisit
