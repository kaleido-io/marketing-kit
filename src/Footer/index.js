import PropTypes from 'prop-types';
import React from 'react';
import Logo from '../Logo';
import Wrapper from '../Wrapper';

import './Footer.scss';

const Footer = ({ menus }) => (
    <footer className="k-footer">
    
        <Wrapper>

           <div className="k-footer__left">

               <div>
                   <Logo />
                   <ul className="k-social-links">
                       <li><a href="https://www.facebook.com/kaleido.io/"><i className="k-icon ion-logo-facebook"></i></a></li>
                       <li><a href="https://twitter.com/Kaleido_io"><i className="k-icon ion-logo-twitter"></i></a></li>
                       <li><a href="https://www.linkedin.com/company/kaleido-io/"><i className="k-icon ion-logo-linkedin"></i></a></li>
                       <li><a href="https://www.youtube.com/channel/UC731wSTQEwqZG36As_qfzPg"><i className="k-icon ion-logo-youtube"></i></a></li>
                   </ul>
                   <address>
                       16 W. Martin Street<br/>
                       Raleigh, NC 27601
                   </address>
               </div>
               
               { menus.map( menu => (

                    <dl key={menu.title}>
                        <dt>{ menu.title }</dt>
                        { menu.items.map((item, index) => (
                            <dd key={'item-' + index}>{ item }</dd>
                        ))}
                    </dl>

               )) }

           </div>
    
           <div className="k-footer__right">

               <p>&copy; Kaleido {new Date().getFullYear()}</p>

               <ul>
                   <li><a href="/terms-of-service">Terms of Use &amp; License</a></li>
                   <li><a href="/privacy-policy">Privacy Policy</a></li>
               </ul>

           </div>
           
        </Wrapper>
    </footer>
);

Footer.propTypes = {
    /** Menus to be displayed in footer */
    menus: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.element)
    })).isRequired
}
   
export default Footer;