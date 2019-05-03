import PropTypes from 'prop-types';
import React from 'react';
import './Card.scss';

const Card = ({
  children,
  title,
  text,
  image,
  meta
}) => React.createElement("div", {
  className: "k-card"
}, image && React.createElement("div", {
  className: "k-card__image"
}, image), React.createElement("div", {
  className: "k-card__content"
}, title && React.createElement("h5", {
  className: "k-h5"
}, title), text && React.createElement("p", {
  className: "k-mt-2"
}, text), children), meta && React.createElement("div", {
  className: "k-card__meta"
}, meta));

Card.propTypes = {
  /** Card Title */
  title: PropTypes.string.isRequired,

  /** Description text */
  text: PropTypes.string,

  /** Icon Markup */
  icon: PropTypes.element,

  /** Container for meta content */
  meta: PropTypes.element
};
export default Card;