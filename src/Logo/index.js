import PropTypes from 'prop-types'
import React from 'react'

import './Logo.scss';

const Logo = ({ linkUrl = '/', tagline }) => (
    <a className="k-logo k-logo--stacked" href={linkUrl}>
        <p className="k-logo__title">Kaleido</p>
        { tagline && <p className="k-logo__tagline">A ConsenSys Business</p> }
    </a>
)

Logo.defaultProps = {
    tagline: false
}

Logo.propTypes = {
    siteUrl: PropTypes.string,
    tagline: PropTypes.bool
}

export default Logo