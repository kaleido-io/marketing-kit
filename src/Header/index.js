import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Logo from '../Logo'
import Wrapper from '../Wrapper'
import './Header.scss'

/** Global header for all Kaleido web properties */
class Header extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        console.log('toggle');
        this.setState( (state) => {
            return {
                isOpen: !state.isOpen
            }
        })
    }
    
    render() {
        return (
            <header className={`k-header ${ this.props.isFilled ? 'is-filled' : '' } ${ this.state.isOpen ? 'is-open' : '' }`} id="site-header">
        <Wrapper>
            <Logo />

            <nav className="k-header__nav">
                { this.props.children }
            </nav>

            <button 
                className={`hamburger k-header__nav-toggler hamburger--squeeze ${ this.state.isOpen ? 'is-active' : '' }`} 
                type="button" 
                aria-label="Menu" 
                aria-controls="navigation"
                onClick={ this.toggleMenu }>
              
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
        </Wrapper>
    </header>
        )
    }
}

Header.defaultProps = {
    isFilled: false
}

Header.propTypes = {
    /** Determines if header has background color  */
    isFilled: PropTypes.bool,
    /** Children for header should be navigation items */
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired
}

export default Header
