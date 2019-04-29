import React from 'react';

import Header from './components/header/header.js';
import Main from './components/main/main.js';
import Scripts from './components/scripts/scripts.js';
// import "./design/reset.scss";
// import './design/app.scss';


class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Scripts />
      </>  
    );
  }
}

export default App;
