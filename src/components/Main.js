require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import ArrowComponent from './slideshow/ArrowComponent.js';
import ReelComponent from './slideshow/ReelComponent.js';

class AppComponent extends React.Component {
  render() {
    return (
      <div id="work" className="slideshow">
        <ArrowComponent direction="left" />
        <ArrowComponent direction="right" />
        <ReelComponent />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
