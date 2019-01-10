import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Logo from '../Logo';
import Wrapper from '../Wrapper';
import './Header.scss';
/** Global header for all Kaleido web properties */

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    console.log('toggle');
    this.setState(state => {
      return {
        isOpen: !state.isOpen
      };
    });
  }

  render() {
    return React.createElement("header", {
      className: `k-header ${this.props.isFilled ? 'is-filled' : ''} ${this.state.isOpen ? 'is-open' : ''}`,
      id: "site-header"
    }, React.createElement(Wrapper, null, React.createElement(Logo, null), React.createElement("nav", {
      className: "k-header__nav"
    }, this.props.children), React.createElement("button", {
      className: `hamburger k-header__nav-toggler hamburger--squeeze ${this.state.isOpen ? 'is-active' : ''}`,
      type: "button",
      "aria-label": "Menu",
      "aria-controls": "navigation",
      onClick: this.toggleMenu
    }, React.createElement("span", {
      className: "hamburger-box"
    }, React.createElement("span", {
      className: "hamburger-inner"
    })))));
  }

}

Header.defaultProps = {
  isFilled: false
};
Header.propTypes = {
  /** Determines if header has background color  */
  isFilled: PropTypes.bool,

  /** Children for header should be navigation items */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired
};
export default Header;