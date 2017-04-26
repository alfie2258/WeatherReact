import React, { Component } from 'react';
//import logo from './logo.svg';
import sun from './sun.png';
import common from './constants/Common.js';
import './App.css';

import PlacesNav from './PlacesNav';
import WeatherContent from './WeatherContent'

console.log(common.APP_TITLE);

const App = React.createClass({

  getInitialState(){
    return{
      selectedPlace: ''
    }
  },

  onPlaceClick(value){
    console.log(this);


    this.setState({
      selectedPlace: value
    })
  },

  render() {
    return (
      <div className="App">
        <div className="App-header">
        {/*Comments have to be enclosed in {} brackets*/}
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <img src={sun} className="App-logo" alt="logo" />
          <h2>{common.APP_TITLE}</h2>
        </div>
        <PlacesNav onPlaceClick={this.onPlaceClick.bind(this)} />
        <WeatherContent placeName={this.state.selectedPlace}/>
      </div>
    );
  }
})

export default App;
