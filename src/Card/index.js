import PropTypes from 'prop-types';
import React from 'react';

import './Card.scss';

const Card = ({ title, text, icon }) => (
    <div className="k-card">
        <img src={ icon } />
        <h5 className="k-h5 k-mt-4">{ title }</h5>
        <p className="k-mt-2">{ text }</p>
    </div>
);

Card.propTypes = {
    /** Card Title */
    title: PropTypes.string.isRequired,
    /** Description text */
    text: PropTypes.string,
    /** Icon URL */
    icon: PropTypes.string
};

export default Card;