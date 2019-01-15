import PropTypes from 'prop-types';
import React from 'react';

import './GridItem.scss';

const GridItem = ({ children, colSpan, alignTop, alignLeft, row }) => (
    <div className={`
        k-grid-item 
        ${ colSpan && 'k-grid-item--' + colSpan }
        ${ alignTop && 'k-grid-item--top' }
        ${ alignLeft && 'k-grid-item--left' }
        ${ row && 'k-grid-item--row' }
    `}>
        { children }
    </div>
)

GridItem.defaultProps = {
    alignTop: false
}

GridItem.propTypes = {
    /** Elements to be wrapped */
    children: PropTypes
        .oneOfType([
            PropTypes.element, 
            PropTypes.arrayOf(PropTypes.element)
        ]).isRequired,
    /** Number of columns in the grid to span */
    colSpan: PropTypes.string,
    /** Align content to the top */
    alignTop: PropTypes.bool,
    /** Aligg content to the left */
    alignLeft: PropTypes.bool,
    /** Flex direction row */
    row: PropTypes.bool
}

export default GridItem;