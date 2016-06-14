'use strict';

import React from 'react';

require('styles/slideshow/Arrow.scss');

let ArrowComponent = (props) => (
  <div className="arrow-component">
    <img src="images/left-arrow.png" alt="Left Arrow" className="left-arrow" />
    <img src="images/right-arrow.png" alt="Right Arrow" className="right-arrow" />
  </div>
);

ArrowComponent.displayName = 'SlideshowArrowComponent';

// Uncomment properties you need
// ArrowComponent.propTypes = {};
// ArrowComponent.defaultProps = {};

export default ArrowComponent;
