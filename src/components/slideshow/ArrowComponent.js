'use strict';

import React from 'react';

require('styles/slideshow/Arrow.scss');

let ArrowComponent = (props) => (
  <div className="arrow-component">
    <img
      src={`images/${props.direction}-arrow.png`}
      alt={`${props.direction} arrow`}
      className={`${props.direction}-arrow`}
    />
  </div>
);

ArrowComponent.displayName = 'SlideshowArrowComponent';

// Uncomment properties you need
// ArrowComponent.propTypes = {};
ArrowComponent.defaultProps = {
  direction: React.PropTypes.string.isRequired
};

export default ArrowComponent;
