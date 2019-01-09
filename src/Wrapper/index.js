import React from 'react'
import './Wrapper.scss';

const Wrapper = ({ children }) => (
    <div className="k-wrapper">
        {children}
    </div>
)

export default Wrapper