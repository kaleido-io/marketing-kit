import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import Footer from '../Footer'
import Nav from '../Nav'

/** Component used to add the header and footer to any layout */
const Layout = ({ className, fillHeader, children }) => {

    const [isFilled, toggleFill] = useState(fillHeader);
  
    const handleScroll = () => {
      const scrollThreshold = 100;
      const isPersistantlyFilled = fillHeader;
      const needsToBeCleared = isFilled && (window.scrollY < scrollThreshold);
      const needsToBeFilled = !isFilled && (window.scrollY > scrollThreshold);
  
      if(!isPersistantlyFilled) {
        if (needsToBeCleared) toggleFill(!isFilled);
        if (needsToBeFilled) toggleFill(!isFilled);
      }
    }
  
    useEffect(() => {
      handleScroll();
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    })
  
  
    return (
        <div className={`k-body ${className}`}>
          <Header isFilled={ fillHeader }>
            <Nav />
          </Header>
          <main>{ children }</main>
          <Footer />
        </div>
    )
}

Layout.propTypes = {
    /** additional class names as string */
    className: PropTypes.string,
    /** children components  */
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]).isRequired,
    /** whether or not header should be filled to start */
    fillHeader: PropTypes.bool
}

export default Layout;