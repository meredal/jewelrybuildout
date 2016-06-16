'use strict';

import React from 'react';
import SlideComponent from './SlideComponent.js';

require('styles/slideshow/Reel.scss');

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

let renderSlides = function() {
  return slideData.map(
    (slideProps) => (<SlideComponent {...slideProps} />)
  );
}


let ReelComponent = () => (
  <div className="reel-component">
    {renderSlides()}
  </div>
);

ReelComponent.displayName = 'SlideshowReelComponent';

// Uncomment properties you need
// ReelComponent.propTypes = {};
ReelComponent.defaultProps = {
  activeSlide: React.PropTypes.number.isRequired
};

export default ReelComponent;
