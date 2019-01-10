import PropTypes from 'prop-types';
import React from 'react';
import './Card.scss';

const Card = ({
  title,
  text,
  icon
}) => React.createElement("div", {
  className: "k-card"
}, React.createElement("img", {
  src: icon
}), React.createElement("h5", {
  className: "k-h5 k-mt-4"
}, title), React.createElement("p", {
  className: "k-mt-2"
}, text));

Card.propTypes = {
  /** Card Title */
  title: PropTypes.string.isRequired,

  /** Description text */
  text: PropTypes.string,

  /** Icon URL */
  icon: PropTypes.string
};
export default Card;