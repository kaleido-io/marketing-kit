import PropTypes from 'prop-types';
import React from 'react';
import Logo from '../Logo';
import Wrapper from '../Wrapper';
import './Footer.scss';

const Footer = ({
  menus
}) => React.createElement("footer", {
  className: "k-footer"
}, React.createElement(Wrapper, null, React.createElement("div", {
  className: "k-footer__left"
}, React.createElement("div", null, React.createElement(Logo, null), React.createElement("ul", {
  className: "k-social-links"
}, React.createElement("li", null, React.createElement("a", {
  href: "https://www.facebook.com/kaleido.io/"
}, React.createElement("i", {
  className: "k-icon ion-logo-facebook"
}))), React.createElement("li", null, React.createElement("a", {
  href: "https://twitter.com/Kaleido_io"
}, React.createElement("i", {
  className: "k-icon ion-logo-twitter"
}))), React.createElement("li", null, React.createElement("a", {
  href: "https://www.linkedin.com/company/kaleido-io/"
}, React.createElement("i", {
  className: "k-icon ion-logo-linkedin"
}))), React.createElement("li", null, React.createElement("a", {
  href: "https://www.youtube.com/channel/UC731wSTQEwqZG36As_qfzPg"
}, React.createElement("i", {
  className: "k-icon ion-logo-youtube"
})))), React.createElement("address", null, "16 W. Martin Street", React.createElement("br", null), "Raleigh, NC 27601")), menus.map(menu => React.createElement("dl", {
  key: menu.title
}, React.createElement("dt", null, menu.title), menu.items.map((item, index) => React.createElement("dd", {
  key: 'item-' + index
}, item))))), React.createElement("div", {
  className: "k-footer__right"
}, React.createElement("p", null, "\xA9 Kaleido ", new Date().getFullYear()), React.createElement("ul", null, React.createElement("li", null, React.createElement("a", {
  href: "/terms-of-service"
}, "Terms of Use & License")), React.createElement("li", null, React.createElement("a", {
  href: "/privacy-policy"
}, "Privacy Policy"))))));

Footer.propTypes = {
  /** Menus to be displayed in footer */
  menus: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.element)
  })).isRequired
};
export default Footer;