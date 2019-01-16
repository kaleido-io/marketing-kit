import PropTypes from 'prop-types';
import React from 'react'
import './Wrapper.scss';

/** Wrappers contain their children to the appropriate width of the page */
const Wrapper = ({ children, className }) => (
    <div className={`k-wrapper ${className}`}>
        { children }
    </div>
)

Wrapper.propTypes = {
    /** Elements to wrap in Wrapper **/
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]),
    /** Optional classes to pass to Wrapper element **/
    className: PropTypes.string
}

export default Wrapper