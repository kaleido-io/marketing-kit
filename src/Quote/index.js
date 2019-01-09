import PropTypes from 'prop-types'
import React from 'react'

import './Quote.scss'

const Quote = ({ text, headshot, person, border, link, isLarge, noPadding, extraClasses }) => (
    <div className={`k-quote ${ noPadding ? "k-py-0" : "" } ${ isLarge ? "k-quote--large" : "" } ${ border ? 'k-quote--bordered' : '' } ${ extraClasses }`}>
    
        <p className={`k-quote__text ${ is_large ? "k-quote__text--large" : "" }`}>{ text }</p>

        <div className="k-quote__credit">

        { headshot && <img class="k-quote__headshot" src={ headshot } /> }

            <div className="k-quote__person">
                <p className="k-quote__name">{ person.name }</p>
                <p className="k-quote__title">{ person.title }</p>
                <p className="k-quote__org">{ person.org }</p>
                { link && <div className="k-mt-4 k-text--bold"><a href={ link.url } target={ link.target }>{ link.title }</a></div> }
            </div>
        </div>
    </div>
)

Quote.propTypes = {
    text: PropTypes.string.isRequired,
    headshot: PropTypes.string.isRequired,
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        org: PropTypes.string.isRequired
    }).isRequired,
    link: PropTypes.shape({
        title: PropTypes.string.isRequired,
        target: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    }),
    border: PropTypes.bool,
    isLarge: PropTypes.bool,
    noPadding: PropTypes.bool,
    extraClasses: PropTypes.string
}