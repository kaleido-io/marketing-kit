import React from 'react';
import './Section.scss';
/** Sections divide content on a single page */

const Section = ({
  children
}) => React.createElement("div", {
  className: "k-section"
}, children);

export default Section;