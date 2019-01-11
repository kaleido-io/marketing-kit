import PropTypes from 'prop-types';
import React from 'react';

import './BackTo.scss';

const BackTo = ({ text, url }) => (
    <a href={ url } className="k-back-to">
        <span className="k-back-to__arrow">&larr;</span>
        { text }
    </a>
);

BackTo.propTypes = {
    /** Text for link */
    text: PropTypes.string.isRequired,
    /** URL for link */
    url: PropTypes.string.isRequired
}

export default BackTo;