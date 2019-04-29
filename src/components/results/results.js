import React from 'react';

class Results extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="column-container hide">
        <section>
          <h3>Results from the Dark Sky API</h3>
          <ul className="weather-results"></ul>
        </section>

        <section className="yelp-container">
          <h3>Results from the Yelp API</h3>
          <ul className="yelp-results"></ul>
        </section>

        <section>
          <h3>Results from the Meetup API</h3>
          <ul className="meetups-results"></ul>
        </section>

        <section className="movie-container">
          <h3>Results from The Movie DB API</h3>
          <ul className="movies-results"></ul>
        </section>

        <section>
          <h3>Results from the Hiking Project API</h3>
          <ul className="trails-results"></ul>
        </section>
      </div>
    );
  }
}

export default Results;