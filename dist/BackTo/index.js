import PropTypes from 'prop-types';
import React from 'react';
import './BackTo.scss';

const BackTo = ({
  text,
  url,
  Link
}) => React.createElement(React.Fragment, null, Link ? React.createElement(Link, {
  to: url,
  className: "k-back-to"
}, React.createElement("span", {
  className: "k-back-to__arrow"
}, "\u2190"), text) : React.createElement("a", {
  href: url,
  className: "k-back-to"
}, React.createElement("span", {
  className: "k-back-to__arrow"
}, "\u2190"), text));

BackTo.propTypes = {
  /** Text for link */
  text: PropTypes.string.isRequired,

  /** URL for link */
  url: PropTypes.string.isRequired,

  /** Link from Gatsby, if available */
  Link: PropTypes.element
};
export default BackTo;