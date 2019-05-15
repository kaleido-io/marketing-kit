import React from 'react';

const Nav = ({
  currentLocation
}) => React.createElement(React.Fragment, null, React.createElement("ul", null, React.createElement("li", null, React.createElement("a", {
  href: "https://kaleido.io/product/"
}, "Product")), React.createElement("li", null, React.createElement("a", {
  href: "https://kaleido.io/pricing/"
}, "Pricing")), React.createElement("li", null, React.createElement("a", {
  href: "https://kaleido.io/solutions/"
}, "Solutions")), React.createElement("li", null, React.createElement("a", {
  href: "https://docs.kaleido.io"
}, "Learn")), React.createElement("li", null, React.createElement("a", {
  href: "https://marketplace.kaleido.io"
}, "Marketplace")), React.createElement("li", {
  className: "k-header__nav-dropdown"
}, React.createElement("a", {
  href: "https://kaleido.io/about"
}, "About"), React.createElement("ul", {
  className: "k-header__nav-dropdown-menu"
}, React.createElement("li", null, React.createElement("a", {
  href: "https://kaleido.io/about"
}, "About Us")), React.createElement("li", null, React.createElement("a", {
  href: "https://kaleido.io/blog/"
}, "Blog")), React.createElement("li", null, React.createElement("a", {
  href: "https://kaleido.io/partnerships"
}, "Partners")), React.createElement("li", null, React.createElement("a", {
  href: "https://kaleido.io/contact/"
}, "Contact Us"))))), React.createElement("ul", null, React.createElement("li", null, React.createElement("a", {
  href: `https://console.kaleido.io/login?refAction=${currentLocation}-top-nav`
}, "Login")), React.createElement("li", null, React.createElement("a", {
  href: `https://console.kaleido.io/login/signup?refAction=${currentLocation}-top-nav`,
  className: "k-button k-button--outline-white"
}, "Get Started"))));

export default Nav;