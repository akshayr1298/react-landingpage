import { CssBaseline, makeStyles } from "@material-ui/core";
import Header from "./Components/Header";
import PlaceToVisit from "./Components/PlaceToVisit";

const useStyles = makeStyles((theme)=>({
  root:{
    minHeight:'100vh',
    backgroundImage:`url(${process.env.PUBLIC_URL+"/assets/bg1.jpg"})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover'
  }
}))

function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
     <CssBaseline/>
     <Header/>
     <PlaceToVisit/>
    </div>
  );
}

export default App;
