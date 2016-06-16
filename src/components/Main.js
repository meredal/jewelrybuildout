require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import ArrowComponent from './slideshow/ArrowComponent.js';
import ReelComponent from './slideshow/ReelComponent.js';

class AppComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      activeSlide: 1
    };
  }

  handleClick(direction) {
    // get activeSlide from state, let's say it's 1
    let activeSlide = this.state.activeSlide;

    // if direction is right, then increment activeSlide + 1
    if (direction === 'right') {
      activeSlide = activeSlide + 1;
    }
    // if direction is left, then increment activeSlide - 1
    else if (direction === 'left') {
      activeSlide = activeSlide - 1;
    }

    // if activeSlide is less than 1, set activeSlide to 1
    if (activeSlide < 1) {
      activeSlide = 1;
    }
    // if activeSlide is greater than 3, set activeSLide to 3
    else if (activeSlide > 3) {
      activeSlide = 3;
    }
    console.log(activeSlide);
    this.setState({activeSlide: activeSlide});
  }

  render() {
    return (
      <div id="work" className="slideshow">
        <ArrowComponent direction="left" onClick={() => this.handleClick('left')} />
        <ArrowComponent direction="right" onClick={() => this.handleClick('right')} />
        <ReelComponent activeSlide={this.state.activeSlide} />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
