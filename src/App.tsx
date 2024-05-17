import React from 'react';
import MapShow from './Components/MapShow'
import classes from './App.module.css'

function App() {
  return (
    <div className={classes['main_form']}>
    <div className={classes.form}>
      <div>Map</div>
      <MapShow/>
    </div>
    </div>
  );
}

export default App;
