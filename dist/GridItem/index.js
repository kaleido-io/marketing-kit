import PropTypes from 'prop-types';
import React from 'react';

import './GridItem.scss';

const GridItem = ({ children, colSpan, alignTop }) => React.createElement(
    'div',
    { className: `
        k-grid-item 
        ${colSpan && 'k-grid-item--' + colSpan}
        ${alignTop && 'k-grid-item--top'}
    ` },
    children
);

GridItem.defaultProps = {
    alignTop: false
};

GridItem.propTypes = {
    /** Elements to be wrapped */
    children: PropTypes.element.isRequired,
    /** Number of columns in the grid to span */
    colSpan: PropTypes.string,
    /** Align content to the top */
    alignTop: PropTypes.bool
};

export default GridItem;