import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button';

import './Alert.scss'

/** Alert component displays text pinned to the bottom of the viewport */
const Alert = ({ message, dismissText}) => (
    <div className="k-alert io-py-4 if-js">
        <div className="io-wrapper">
            <div className="io-grid io-grid--3 io-grid-row-gap-sm--2">
                <p className="io-grid-item io-grid-item--2">{message}</p>
                <div className="io-grid-item io-grid-item--center">
                    <Button text={ dismissText } />
                </div>
            </div>
        </div>
    </div>
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