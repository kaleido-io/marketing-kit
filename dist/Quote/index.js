import PropTypes from 'prop-types';
import React from 'react';
import './Quote.scss';

const Quote = ({
  text,
  headshot,
  person,
  border,
  link,
  isLarge,
  noPadding,
  extraClasses
}) => React.createElement("div", {
  className: `k-quote ${noPadding ? "k-py-0" : ""} ${isLarge ? "k-quote--large" : ""} ${border ? 'k-quote--bordered' : ''} ${extraClasses}`
}, React.createElement("p", {
  className: `k-quote__text ${isLarge ? "k-quote__text--large" : ""}`
}, text), React.createElement("div", {
  className: "k-quote__credit"
}, headshot && React.createElement("img", {
  class: "k-quote__headshot",
  src: headshot
}), React.createElement("div", {
  className: "k-quote__person"
}, React.createElement("p", {
  className: "k-quote__name"
}, person.name), React.createElement("p", {
  className: "k-quote__title"
}, person.title), React.createElement("p", {
  className: "k-quote__org"
}, person.org), link && React.createElement("div", {
  className: "k-mt-4 k-text--bold"
}, React.createElement("a", {
  href: link.url,
  target: link.target
}, link.title)))));

Quote.defaultProps = {
  border: false,
  isLarge: false,
  noPadding: false
};
Quote.propTypes = {
  /** Quote text */
  text: PropTypes.string.isRequired,

  /** Headshot of quoted person */
  headshot: PropTypes.string.isRequired,

  /** Quoted person info */
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    org: PropTypes.string.isRequired
  }).isRequired,

  /** Optional link to be displayed under quote */
  link: PropTypes.shape({
    title: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }),

  /** Adds border to left of quote */
  border: PropTypes.bool,

  /** Adds larger quote text style */
  isLarge: PropTypes.bool,

  /** Removes vertical padding from quote */
  noPadding: PropTypes.bool,

  /** Slot to add a string of extra classes to extend the component */
  extraClasses: PropTypes.string
};
export default Quote;