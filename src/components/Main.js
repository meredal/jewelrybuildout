require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import ArrowComponent from './slideshow/ArrowComponent.js';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div id="work" className="slideshow">
        <div className="reel">
          <ArrowComponent />
          <div className="slide">
            <img src="images/ring.jpg" alt="Diamond Ring" />
            <div className="slide-text">
              <h3>Mercury</h3>
              <h5>Movie buff Tony Chou (Tony Zhou) published in his Vimeo video review with an analysis of the demonstration set of SMS and other text messages in modern cinema.</h5>
              <button type="button" name="button" className="learn-more-btn">Learn more.</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
