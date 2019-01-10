import React from 'react'
import './Section.scss'

/** Sections divide content on a single page */
const Section = ({ children }) => (
    <div className="k-section">
        { children }
    </div>
)

export default Section