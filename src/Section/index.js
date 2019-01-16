import PropTypes from 'prop-types';
import React from 'react'
import './Section.scss'

/** Sections divide content on a single page */
const Section = ({ children, className }) => (
    <div className={`k-section ${className}`}>
        { children }
    </div>
)

Section.propTypes = {
    /** Elements to wrap in Section **/
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]),
    /** Optional classes to pass to Section element **/
    className: PropTypes.string
}

export default Section