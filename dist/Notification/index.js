import React from "react";
import PropTypes from "prop-types";
import './Notification.scss';

const Notification = ({
  label,
  text,
  link,
  className
}) => React.createElement("div", {
  className: `k-notification ${className}`
}, React.createElement("div", {
  className: "k-notification__wrapper"
}, React.createElement("h5", {
  className: "k-h5 k-notification__label"
}, label), React.createElement("p", null, text, link && React.createElement("a", {
  href: link,
  className: "k-notification__link"
}, "Learn More"))));

Notification.defaultProps = {
  label: 'Notice'
};
Notification.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string.isRequired,
  link: PropTypes.string
};
export default Notification;