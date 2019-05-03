import PropTypes from 'prop-types';
import React from 'react';
import BannerShape from '../BannerShape';
import Wrapper from '../Wrapper';
import './Banner.scss';

const Banner = ({ children, title, description, link, image, bgColor, shapeColors}) => (

    <div className={`k-banner k-banner--small k-banner--${bgColor}`}>
    
        <BannerShape id="1" shape="triangle" color={shapeColors[0]} size="large" />
        <BannerShape id="2" shape="triangle" color={shapeColors[1]} size="small" opacity="30" />
        <BannerShape id="3" shape="triangle" color={shapeColors[2]} opacity="15" />
        <BannerShape id="4" shape="square" color={shapeColors[0]} size="xsmall" />
        <BannerShape id="5" shape="square" color={shapeColors[1]} opacity="15" />
        <BannerShape id="6" shape="circle" color={shapeColors[2]} size="small" opacity="15" />
        <BannerShape id="7" shape="circle" color={shapeColors[2]} size="large" />
        
        <Wrapper>
        
            { title && 
                <div className="k-banner__left u-float-left">
                    <h1 className="k-h2">{ title }</h1>
                    <p className="k-h6">{ description }</p>
                    { link &&
                        <a href={link.url} target={link.target} className="k-button k-button--outline-white k-mt-8">{link.title}</a>
                    }
                </div>
            }

            { image && 
                <div className="k-banner__right u-float-right">
                    <img className="k-banner__image" src={image.sizes['500']} />
                </div>
            }

            { children }
        </Wrapper>

    </div>
)

Banner.defaultProps= {
    bgColor: 'blue',
    shapeColors: [
        'green',
        'purple',
        'orange'
    ]
}

Banner.propTypes = {
    /** Background color */
    bgColor: PropTypes.string,
    /** Colors for shapes */
    shapeColors: PropTypes.arrayOf(PropTypes.string),
    /** Banner title */
    title: PropTypes.string.isRequired,
    /** Banner text */
    description: PropTypes.string.isRequired,
    /** Banner link */
    link: PropTypes.shape({
        url: PropTypes.string,
        target: PropTypes.string,
        title: PropTypes.string
    }),
    /** Image to be displayed in banner */
    image: PropTypes.shape({
        sizes: PropTypes.arrayOf(PropTypes.shape)
    }),
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ])
}

export default Banner