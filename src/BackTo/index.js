import PropTypes from 'prop-types';
import React from 'react';

import './BackTo.scss';

const BackTo = ({ text, url, Link }) => (
    <>
    { Link ? 
        <Link to={ url } className="k-back-to">
            <span className="k-back-to__arrow">&larr;</span>
            { text }
        </Link> :
        <a href={ url } className="k-back-to">
            <span className="k-back-to__arrow">&larr;</span>
            { text }
        </a>
    }
    </>
);

BackTo.propTypes = {
    /** Text for link */
    text: PropTypes.string.isRequired,
    /** URL for link */
    url: PropTypes.string.isRequired,
    /** Link from Gatsby, if available */
    Link: PropTypes.element
}

export default BackTo;