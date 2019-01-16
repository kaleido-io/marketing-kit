import PropTypes from 'prop-types';
import React from 'react';
import './Grid.scss';

const Grid = ({
  children,
  isBordered,
  columnCount,
  isCentered,
  rowGap,
  mobileRowGap,
  colGap,
  className
}) => React.createElement("div", {
  className: `
            k-grid 
            k-grid--${columnCount} 
            ${className}
            ${isCentered ? 'k-grid--center' : ''}
            ${isBordered ? 'k-grid--bordered' : ''}
            ${colGap ? 'k-grid-col-gap--' + colGap : ''}
            ${rowGap ? 'k-grid-row-gap--' + rowGap : ''}
            ${mobileRowGap ? 'k-grid-row-gap-sm--' + mobileRowGap : ''}
        `
}, children);

Grid.defaultProps = {
  isBordered: false,
  isCentered: false,
  columnCount: 3
};
Grid.propTypes = {
  /** Items to wrap in Grid **/
  children: PropTypes.arrayOf(PropTypes.element).isRequired,

  /** Grid divides children with slashes **/
  isBordered: PropTypes.bool,

  /** Grid should center it's content **/
  isCentered: PropTypes.bool,

  /** Number of columns in the grid **/
  columnCount: PropTypes.string.isRequired,

  /** Size of row gap **/
  rowGap: PropTypes.string,

  /** Size of column gap **/
  colGap: PropTypes.string,

  /** Size of row gap on small devices **/
  mobileRowGap: PropTypes.string,

  /** Optional classes to pass to grid element **/
  className: PropTypes.string
};
export default Grid;