import PropTypes from 'prop-types';
import React from 'react';
import './Button.scss';

const Button = ({
  color,
  text
}) => React.createElement("button", {
  className: 'k-button k-button--' + color
}, text);

Button.defaultProps = {
  color: 'purple'
};
Button.propTypes = {
  /** Button text */
  text: PropTypes.string.isRequired,

  /** Possible values: purple, white, outline-purple, outline-white */
  color: PropTypes.string
};
export default Button;