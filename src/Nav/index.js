import React from 'react';

const Nav = ({ currentLocation }) => (
<>
    <ul class="k-nav">
        <li><a href="https://kaleido.io/product/">Product</a></li>
        <li><a href="https://kaleido.io/pricing/">Pricing</a></li>
        <li><a href="https://kaleido.io/solutions/">Solutions</a></li>
        <li className="k-header__nav-dropdown">
            <span>Resources</span>
            <ul className="k-header__nav-dropdown-menu">
                <li>
                    <a href="https://docs.kaleido.io">Documentation</a>
                    <span>Guides, walkthroughs, faqs</span>
                </li>
                <li>
                    <a href="https://kaleido.io/blog">Blog</a>
                    <span>News you can use</span>
                </li>
                <li>
                    <a href="https://api.kaleido.io">API Reference</a>
                    <span>Automate Kaleido via API</span>    
                </li>
                <li>
                    <a href="https://kaleido.io/partners">Partnerships</a>
                    <span>Embed, empower, go to market</span>
                </li>
            </ul>
        </li>
        <li><a href="https://marketplace.kaleido.io">Marketplace</a></li>
        <li><a href="https://kaleido.io/about">About</a>
        </li>
    </ul>
    <ul>
        <li><a href={`https://console.kaleido.io/login?refAction=${currentLocation}-top-nav`}>Login</a></li>
        <li><a href={`https://console.kaleido.io/login/signup?refAction=${currentLocation}-top-nav`} className="k-button k-button--outline-white">Get Started</a></li>
    </ul>
</>
)

export default Nav;