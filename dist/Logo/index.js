import PropTypes from 'prop-types';
import React from 'react';
import './Logo.scss';

const Logo = ({
  linkUrl = '/',
  tagline
}) => React.createElement("a", {
  className: "k-logo k-logo--stacked",
  href: linkUrl
}, React.createElement("p", {
  className: "k-logo__title"
}, "Kaleido"), tagline && React.createElement("p", {
  className: "k-logo__tagline"
}, "A ConsenSys Business"));

Logo.defaultProps = {
  tagline: false
};
Logo.propTypes = {
  siteUrl: PropTypes.string,
  tagline: PropTypes.bool
};
export default Logo;