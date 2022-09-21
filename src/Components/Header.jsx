import { AppBar, Collapse, IconButton, makeStyles, Toolbar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll'

const useStyle = makeStyles((theme)=>({
    root:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontFamily: 'Poppins',
        height:'100vh'

    },
    appbar:{
        background:"none",
        color:'black'


    },
    appbarTitle:{
        flexGrow:'1',
        color:"#fff"
    },
    appbarWrapper:{
        width:'80%',
        margin:'0 auto'

    },
    icon:{
        color:'#fff',
        fontSize:'2rem'  
    },
    colorText:{
        color:"#5AFF3D"
    },
    container:{
        textAlign:'center'
    },
    title:{
        color:'#fff',
        fontSize:'4.5rem'
    },
    goDown:{
        color:'#5AFF3D',
        fontSize:"4rem"
    }
}))

function Header() {
    const classes = useStyle()
    const [checked,setChecked] = useState(false)
    useEffect(()=>{
        setChecked(true);

    },[])
  return (
    <div className={classes.root} id="header">
      <AppBar className = {classes.appbar} elevation={0}>
        <Toolbar className = {classes.appbarWrapper}>
        <h1 className={classes.appbarTitle}>My<span className={classes.colorText}>Island</span></h1>
        <IconButton>
        <SortIcon className={classes.icon}/>     
        </IconButton>
        </Toolbar>
      </AppBar>

      <Collapse in={checked} {...(checked ? {timeout:1000} :{})} collapsedHeight={50}>
      <div className={classes.container}>
        <h1 className={classes.title}>
        Welcome to <br /> My<span className={classes.colorText}> Island</span> 
        </h1>
        <Scroll to="place-to-visit" smooth={true}>
        <IconButton>
            <ExpandMoreIcon className={classes.goDown}/>
        </IconButton>
        </Scroll>
      </div>
      </Collapse>
    </div>
  )
}

export default Header
