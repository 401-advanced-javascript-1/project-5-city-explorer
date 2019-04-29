import React from 'react';

class Form extends React.Component {

  constructor(props){
    super(props);
  }
  
  render(){
    return(
      // let location;
      <div>
        <form id="search-form" className="" onSubmit={ this.props.updateLocation }>
          <label htmlFor="search">Search for a location</label>
          <input type="text" name="search" id="input-search" placeholder="Enter a location here" onChange={e => this.props.setLocation(e.target.value)}></input>
          <button type="submit">Explore!</button>
        </form>
        <img id="map" className="hide" src="" alt="Map of search query"></img>
        <h2 className="query-placeholder"></h2>
      </div>
    );
  }
}

export default Form;
