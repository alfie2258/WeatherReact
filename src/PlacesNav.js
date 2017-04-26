
import React, { Component } from 'react';
import places from './constants/Places'

class PlacesNav extends Component {
  //{/*Every class must have a render function*/}
onClick(value){

  this.props.onPlaceClick(value);
}


renderPlaces(){
  var elements = [];
  for (var place in places){

    //places[place].text
    const { text, value } = places[place];
    elements.push(
        <h2 onClick={this.onClick.bind(this, value)}>
          {text}
        </h2>
    );
  }
  return elements;
}

  render(){
    return(
      <div className="places-nav">
        {this.renderPlaces()}
      </div>
    )
  }
}

export default PlacesNav;
