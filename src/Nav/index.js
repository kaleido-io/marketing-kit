import React from 'react';

const Nav = ({ currentLocation }) => (
<>
    <ul>
        <li><a href="https://kaleido.io/product/">Product</a></li>
        <li><a href="https://kaleido.io/pricing/">Pricing</a></li>
        <li><a href="https://kaleido.io/solutions/">Solutions</a></li>
        <li><a href="https://docs.kaleido.io">Learn</a></li>
        <li><a href="https://marketplace.kaleido.io">Marketplace</a></li>
        <li className="k-header__nav-dropdown"><a href="/about">About</a>
            <ul className="k-header__nav-dropdown-menu">
                <li><a href="https://kaleido.io/about">About Us</a></li>
                <li><a href="https://kaleido.io/blog/">Blog</a></li>
                <li><a href="https://kaleido.io/partnerships">Partners</a></li>
                <li><a href="https://kaleido.io/contact/">Contact Us</a></li>
            </ul>
        </li>
    </ul>
    <ul>
        <li><a href={`https://console.kaleido.io/login?refAction=${currentLocation}-top-nav`}>Login</a></li>
        <li><a href={`https://console.kaleido.io/login/signup?refAction=${currentLocation}-top-nav`} className="k-button k-button--outline-white">Get Started</a></li>
    </ul>
</>
)

export default Nav;