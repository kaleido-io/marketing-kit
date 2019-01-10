import React from 'react'
import './Wrapper.scss';

/** Wrappers contain their children to the appropriate width of the page */
const Wrapper = ({ children }) => (
    <div className="k-wrapper">
        { children }
    </div>
)

export default Wrapper