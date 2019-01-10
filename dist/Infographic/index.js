import PropTypes from 'prop-types';
import React from 'react';

import './Infographic.scss';

const Infographic = ({ title, text, fill, color }) => React.createElement(
    'div',
    { className: `k-infographic ${fill ? "k-infographic--fill-" + fill : "k-infographic--fill-100"} ${color ? 'k-infographic--' + color : ''}` },
    React.createElement(
        'h3',
        { className: 'k-infographic__title' },
        title
    ),
    React.createElement(
        'p',
        { className: 'k-infographic__text' },
        text
    ),
    React.createElement(
        'svg',
        { width: '352', height: '352' },
        React.createElement('circle', { r: '171', cx: '176', cy: '176', style: {
                strokeDasharray: 'calc((' + fill + ' / 100 ) * 2 * 3.14 * 171) calc(( 1 - (' + fill + ' / 100)) * 2 * 3.14 * 171)'
            } })
    )
);

Infographic.defaultProps = {
    fill: 100
};

Infographic.propTypes = {
    /** Label for infographic */
    title: PropTypes.string.isRequired,
    /** Description text */
    text: PropTypes.string.isRequired,
    /** Fill percentage */
    fill: PropTypes.number,
    /** Color of fill */
    color: PropTypes.string
};

export default Infographic;