import PropTypes from 'prop-types';
import React from 'react';

import './Button.scss';

const Button = ({ color, text }) => (
    <button className={'k-button k-button--' + color}>
        { text }
    </button>
)

Button.defaultProps = {
    color: 'purple'
};

Button.propTypes = {
    /** Button text */
    text: PropTypes.string.isRequired,
    /** Possible values: purple, white, outline-purple, outline-white */
    color: PropTypes.string
}

export default Button;