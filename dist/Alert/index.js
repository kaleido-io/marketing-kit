import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button';

import './Alert.scss';

/** Alert component displays text pinned to the bottom of the viewport */
const Alert = ({ message, dismissText }) => React.createElement(
    'div',
    { className: 'k-alert k-py-4 if-js' },
    React.createElement(
        'div',
        { className: 'k-wrapper' },
        React.createElement(
            'div',
            { className: 'k-grid k-grid--3 k-grid-row-gap-sm--2' },
            React.createElement(
                'p',
                { className: 'k-grid-item k-grid-item--2' },
                message
            ),
            React.createElement(
                'div',
                { className: 'k-grid-item k-grid-item--center' },
                React.createElement(Button, { text: dismissText })
            )
        )
    )
);

Alert.defaultProps = {
    dismissText: 'Dismiss'
};

Alert.propTypes = {
    /** Message to be displayed inside the alert */
    message: PropTypes.string.isRequired,
    /** Text to be displayed on the dismiss button */
    dismissText: PropTypes.string
};

export default Alert;