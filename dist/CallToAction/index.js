import PropTypes from 'prop-types';
import React from 'react';
import BannerShape from '../BannerShape';
import Wrapper from '../Wrapper';

const CallToAction = ({
  title,
  text,
  link
}) => React.createElement("div", {
  className: "k-banner--bottom"
}, React.createElement("div", {
  className: "k-banner__shapes"
}, React.createElement(BannerShape, {
  id: "1",
  shape: "triangle",
  color: "green",
  size: "small",
  opacity: "30"
}), React.createElement(BannerShape, {
  id: "2",
  shape: "triangle",
  color: "orange",
  size: "large",
  opacity: "30"
}), React.createElement(BannerShape, {
  id: "3",
  shape: "square",
  color: "blue",
  size: "xsmall",
  opacity: "30"
}), React.createElement(BannerShape, {
  id: "4",
  shape: "square",
  color: "green",
  size: "large",
  opacity: "30"
}), React.createElement(BannerShape, {
  id: "5",
  shape: "circle",
  color: "blue",
  size: "xsmall",
  opacity: "15"
}), React.createElement(BannerShape, {
  id: "6",
  shape: "circle",
  color: "orange",
  size: "large"
})), React.createElement(Wrapper, null, title && React.createElement("h3", {
  className: "k-h4"
}, title), text && React.createElement("p", {
  className: "k-h6 k-u-mt-16"
}, text), link.url && React.createElement("a", {
  href: link.url,
  target: link.target,
  className: "k-u-mt-32 k-button k-button--white"
}, link.title)));

CallToAction.propTypes = {
  /**  CTA Title */
  title: PropTypes.string.isRequired,

  /** CTA text */
  text: PropTypes.string.isRequired,

  /** Link object */
  link: PropTypes.shape({
    /** Link URL */
    url: PropTypes.string.isRequired,

    /** Link text */
    title: PropTypes.string.isRequired,

    /** Target for link */
    target: PropTypes.string
  }).isRequired
};
export default CallToAction;