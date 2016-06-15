'use strict';

import React from 'react';

require('styles/slideshow/Slide.scss');

let SlideComponent = (props) => (
  <div className="slide-component">
    <img src={props.imagePath} alt={props.imageAlt} />
    <div className="slide-text">
      <h3>{props.title}</h3>
      <h5>Movie buff Tony Chou (Tony Zhou) published in his Vimeo video review with an analysis of the demonstration set of SMS and other text messages in modern cinema.</h5>
      <button type="button" name="button" className="learn-more-btn">Learn more.</button>
    </div>
  </div>
);

SlideComponent.displayName = 'SlideshowSlideComponent';

// Uncomment properties you need
// SlideComponent.propTypes = {};
SlideComponent.defaultProps = {
  imagePath: React.PropTypes.string.isRequired,
  imageAlt: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired
};

export default SlideComponent;
