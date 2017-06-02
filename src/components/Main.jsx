require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Container from './GoogleApiWrapper';
// import InfoWindow from 'google-maps-react';

// let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className='index'>
        <h3>My Google Maps Demo</h3>
        <Container />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
