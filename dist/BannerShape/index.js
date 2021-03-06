import PropTypes from 'prop-types';
import React from 'react';
import './BannerShape.scss';

const BannerShape = ({
  id,
  shape,
  color,
  size,
  opacity
}) => React.createElement("i", {
  id: `shape-${id}`,
  className: `k-banner__shape k-banner__shape--${shape} k-banner__shape--${color} k-banner__shape--${size} k-banner__shape--o-${opacity}`
});

BannerShape.propTypes = {
  id: PropTypes.string,
  shape: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  opacity: PropTypes.string
};
export default BannerShape;