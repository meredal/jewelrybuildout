require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import ArrowComponent from './slideshow/ArrowComponent.js';
import SlideComponent from './slideshow/SlideComponent.js';

const slideData = [
  {
    key: 'slide1',
    imagePath: 'images/ring.jpg',
    imageAlt: 'Diamond Ring',
    title: 'Mercury'
  },
  {
    key: 'slide2',
    imagePath: 'http://placeimg.com/400/400/nature/grayscale',
    imageAlt: 'Dummy Image 1',
    title: 'Venus'
  },
  {
    key: 'slide3',
    imagePath: 'http://placeimg.com/400/400/nature/grayscale',
    imageAlt: 'Dummy Image 2',
    title: 'Jupiter'
  }
]

class AppComponent extends React.Component {
  renderSlides() {
    return slideData.map(
      (slideProps) => (<SlideComponent {...slideProps} />)
    );
  }

  render() {
    return (
      <div id="work" className="slideshow">
        <ArrowComponent direction="left" />
        <ArrowComponent direction="right" />
        <div className="reel">
          {this.renderSlides()}
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
