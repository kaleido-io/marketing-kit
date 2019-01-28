import PropTypes from 'prop-types';
import React from 'react';
import './GridItem.scss';

const GridItem = ({
  children,
  colSpan,
  alignTop,
  alignLeft,
  row,
  className
}) => React.createElement("div", {
  className: `
        k-grid-item 
        ${colSpan ? 'k-grid-item--' + colSpan : null}
        ${alignTop ? 'k-grid-item--top' : null}
        ${alignLeft ? 'k-grid-item--left' : null}
        ${row ? 'k-grid-item--row' : null}
        ${className}
    `
}, children);

GridItem.defaultProps = {
  alignTop: false
};
GridItem.propTypes = {
  /** Elements to be wrapped */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,

  /** Number of columns in the grid to span */
  colSpan: PropTypes.string,

  /** Align content to the top */
  alignTop: PropTypes.bool,

  /** Aligg content to the left */
  alignLeft: PropTypes.bool,

  /** Flex direction row */
  row: PropTypes.bool,

  /** Extra classNames */
  className: PropTypes.string
};
export default GridItem;