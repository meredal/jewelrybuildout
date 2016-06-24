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


let ReelComponent = (props) => {
  // if on slide 1, should be 0vw
  // if you click right arrow
  // - should go to slide2
  // - should set left to -100vw
  //
  // if you click left arrow while on slide3, should be -200vw
  // - should go to slide2
  // - should set left to -100vw
  //
  // slide 1 => 0
  // slide 2 => -100vw
  // slide 3 => -200vw
  const myStyles = {
    left: `${props.activeSlide * -100 + 100}vw`,
    width: `${slideData.length * 100}vw`
  };
  return (
    <div className="reel-component" style={myStyles}>
      {renderSlides()}
    </div>
  );
};

ReelComponent.displayName = 'SlideshowReelComponent';

// Uncomment properties you need
// ReelComponent.propTypes = {};
ReelComponent.defaultProps = {
  activeSlide: React.PropTypes.number.isRequired
};

export default ReelComponent;
