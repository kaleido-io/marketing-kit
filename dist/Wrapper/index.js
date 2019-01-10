import React from 'react';
import './Wrapper.scss';
/** Wrappers contain their children to the appropriate width of the page */

const Wrapper = ({
  children
}) => React.createElement("div", {
  className: "k-wrapper"
}, children);

export default Wrapper;