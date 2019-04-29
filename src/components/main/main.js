import React from 'react';
import Form from '../form/form.js';
import Map from '../map/map.js';
import Error from '../error/error.js';
import Results from '../results/results.js';

class Main extends React.Component{
  constructor(props){
    super(props);
    this.getLocation = this.getLocation.bind(this);
    this.setLocation = this.setLocation.bind(this);
    this.state = {
      location: '',
      latitude: '',
      longitude: '',
    };
  }

  setLocation(location){
    this.setState({ location });
  }

  getLocation(event){
    event.preventDefault();
    fetch(`https://city-explorer-backend.herokuapp.com/location?data=${this.state.location}`, {
      method: 'GET',
      headers: {'Content-Type':'application/json'},
    })
      .then(results => results.json())
      .then(results => this.setState({ latitude: results.latitude, longitude: results.longitude }));
    console.log(this.state);
  }

  render(){
    return(
      <div>
        <Form setLocation={this.setLocation} updateLocation={this.getLocation}/>
        <Map />
        <Error />
        <Results />
      </div>
    );
  }
}

export default Main;