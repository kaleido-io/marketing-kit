import PropTypes from 'prop-types';
import React from 'react';

import './Card.scss';

const Card = ({ title, text, image, meta }) => (
    <div className='k-card'>
        { image && <div className="k-card__image">{ image }</div> }
        <div className="k-card__content">
            <h5 className="k-h5">{ title }</h5>
            <p className="k-mt-2">{ text }</p>
        </div>
        { meta && <div className="k-card__meta">{ meta }</div>}
    </div>
);

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