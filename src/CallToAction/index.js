import PropTypes from 'prop-types';
import React from 'react';
import BannerShape from '../BannerShape'
import Wrapper from '../Wrapper'

const CallToAction = ({ title, text, link, }) => (
    <div className="k-banner--bottom">    
        <div className="k-banner__shapes">
            <BannerShape id="1" shape="triangle" color="green" size="small" opacity="30" />
            <BannerShape id="2" shape="triangle" color="orange" size="large" opacity="30" />
            <BannerShape id="3" shape="square" color="blue" size="xsmall" opacity="30" />
            <BannerShape id="4" shape="square" color="green" size="large" opacity="30" />
            <BannerShape id="5" shape="circle" color="blue" size="xsmall" opacity="15" />
            <BannerShape id="6" shape="circle" color="orange" size="large" />
        </div>
        <Wrapper>
            { title && <h3 className="k-h4">{ title }</h3> }
            { text && <p className="k-h6 k-u-mt-16">{ text }</p> }
            { link.url && <a href={link.url} target={link.target} className="k-u-mt-32 k-button k-button--white">{link.title}</a> }
        </Wrapper>
    </div>
);

CallToAction.propTypes = {
    /**  CTA Title */
    title: PropTypes.string.isRequired,
    /** CTA text */
    text: PropTypes.string.isRequired,
    /** Link object */
    link: PropTypes.shape({
        /** Link URL */
        url: PropTypes.string.isRequired,
        /** Link text */
        title: PropTypes.string.isRequired,
        /** Target for link */
        target: PropTypes.string
    }).isRequired
};

export default CallToAction