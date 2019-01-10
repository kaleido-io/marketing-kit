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
  colGap
}) => React.createElement("div", {
  className: `
            k-grid 
            k-grid--${columnCount} 
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
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  isBordered: PropTypes.bool,
  isCentered: PropTypes.bool,
  columnCount: PropTypes.string.isRequired,
  rowGap: PropTypes.string,
  colGap: PropTypes.string,
  mobileRowGap: PropTypes.string
};
export default Grid;