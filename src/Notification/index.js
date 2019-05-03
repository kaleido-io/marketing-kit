import React from "react"
import PropTypes from "prop-types"

import './Notification.scss'

const Notification = ({ label, text, link, className }) => (
    <div className={`k-notification ${ className }`}>
        <div className="k-notification__wrapper">
            <h5 className="k-h5 k-notification__label">{ label }</h5>
            <p>
                { text }
                { link && <a href={ link } className="k-notification__link">Learn More</a> }
            </p>
            
        </div>
    </div>
)

Notification.defaultProps = {
    label: 'Notice'
}

Notification.propTypes = {
    label: PropTypes.string,
    text: PropTypes.string.isRequired,
    link: PropTypes.string
}

export default Notification