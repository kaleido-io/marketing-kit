import PropTypes from 'prop-types';
import React from 'react';
import './Logo.scss';

const Logo = () => React.createElement("a", {
  className: "k-logo k-logo--stacked",
  href: "/"
}, React.createElement("p", {
  className: "k-logo__title"
}, "Kaleido"), React.createElement("p", {
  className: "k-logo__tagline"
}, "A ConsenSys Business"));

Logo.propTypes = {
  siteUrl: PropTypes.string
};
export default Logo;