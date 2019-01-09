import PropTypes from 'prop-types'
import React from 'react'

import './Logo.scss';

const Logo = () => (
    <a className="k-logo k-logo--stacked" href="/">
        <p className="k-logo__title">Kaleido</p>
        <p className="k-logo__tagline">A ConsenSys Business</p>
    </a>
)

Logo.propTypes = {
    siteUrl: PropTypes.string
}

export default Logo