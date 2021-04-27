import React from 'react';
import Header from './components/Header';
import {makeStyles} from '@material-ui/core/styles';


function App() {

  const classes = useStyles();
  return (
    <div>
      <Header/>
      <section className={classes.section}/>
      <section className={classes.section}/>
      <section className={classes.section}/>
    </div>
  );
}

export default App;

const useStyles = makeStyles({
  section: {
      height: '100vw',
      width: '100%'
  }})
