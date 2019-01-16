import PropTypes from 'prop-types';
import React from 'react';

import './Card.scss';

const Card = ({ title, text, icon, meta }) => (
    <div className='k-card'>
        { meta && <div class="k-card__meta">{ meta }</div>}
        { icon }
        <h5 className="k-h5 k-mt-4">{ title }</h5>
        <p className="k-mt-2">{ text }</p>
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