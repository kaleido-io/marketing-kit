import PropTypes from 'prop-types';
import React from 'react';
import './Button.scss';

const Button = ({
  color,
  text,
  disabled
}) => React.createElement("button", {
  className: 'k-button k-button--' + color,
  disabled: disabled
}, text);

Button.defaultProps = {
  color: 'purple',
  disabled: false
};
Button.propTypes = {
  /** Button text */
  text: PropTypes.string.isRequired,

  /** Possible values: purple, white, outline-purple, outline-white */
  color: PropTypes.string,

  /** Ability to disabled this button */
  disabled: PropTypes.bool
};
export default Button;