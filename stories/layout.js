import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import Banner from '../src/Banner';
import Button from '../src/Button';
import CallToAction from '../src/CallToAction';
import Footer from '../src/Footer';
import Grid from '../src/Grid';
import GridItem from '../src/GridItem';
import Header from '../src/Header';
import Section from '../src/Section';
import Wrapper from '../src/Wrapper';

storiesOf('Layout', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add('Banner', () => (
        <Banner 
            shapeColors={[
                select('shapeColor1', ['orange', 'green', 'purple', 'blue'], 'green'),
                select('shapeColor2', ['orange', 'green', 'purple', 'blue'], 'blue'),
                select('shapeColor3', ['orange', 'green', 'purple', 'blue'], 'orange')
            ]}
            title="This is the title"
            description="This is the description" 
            link={{
                url: 'https://google.com',
                target: '_blank',
                title: 'This is the Link'
            }}/>
    ))
    .add('Call to Action', () => (
        <CallToAction 
            title={ text('title', 'Win the Internet') }
            text={ text('text', 'Go to google today.') }
            link={{
                url: text('link url', 'https://google.com'),
                title: text('link title', 'Go to Google'),
                target: '_blank'
            }}
            />
    ))
    .add('Footer', () => (
        <Footer menus={[
            {
                title: 'Menu 1',
                items: [
                    <a href="#">Item 1</a>,
                    <a href="#">Item 2</a>,
                    <a href="#">Item 3</a>
                ]
            },{
                title: 'Menu 2',
                items: [
                    <a href="#">Item 1</a>,
                    <a href="#">Item 2</a>,
                    <a href="#">Item 3</a>
                ]
            }
        ]} />
    ))
    .add('Grid', () => {

        const group = 'Grid Options';
        const itemCount = select('Number of Demo Items', [1,2,3,4,5,6], 3, group); 
        
        const items = new Array(itemCount);
        const itemGroup = 'Item Options';

        items.fill(true, 0, itemCount);
        
        return (
        <Grid 
            columnCount={ select('columnCount', ['2', '3', '4'], '3', group)}
            isBordered={ boolean('isBordered', false, group)}
            colGap={ select('colGap', ['2', '3', '4', '5', '6', '8', '12'], group)}>
            
            { items.map( (item, index) => (
                <GridItem key={index} colSpan={ select('colSpan', ['1','2','3','4'], '1', itemGroup)}>
                    <img src="//placehold.it/300x300" />
                </GridItem>
            ))}
        </Grid>
    )})
    .add('Header', () => (
        <Header isFilled={boolean('isFilled', false)}>
            <ul>
                <li><a href="/product/">Product</a></li>
                <li><a href="/pricing/">Pricing</a></li>  
                <li><a href="/solutions/">Solutions</a></li>
                <li><a href="https://docs.kaleido.io">Learn</a></li>
                <li><a href="https://marketplace.kaleido.io">Marketplace</a></li>
                <li className="k-header__nav-dropdown">
                    <a href="/about">About</a>
                    <ul className="k-header__nav-dropdown-menu">
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/blog/">Blog</a></li>
                        <li><a href="/partnerships">Partners</a></li>
                        <li><a href="/contact/">Contact Us</a></li>
                    </ul>
                </li>
            </ul>
            <ul>
                <li><a href="https://console.kaleido.io/login?refAction=homepage-top-nav">Login</a></li>
                <li><a href="https://console.kaleido.io/login/signup?refAction=homepage-top-nav" className="k-button k-button--outline-white">Get Started</a></li>
            </ul>
        </Header>
    ))
    .add('Section', () => (
        <Section>
            <Wrapper>
                <h1 class="k-h1">This is a header</h1>
                <p class="k-py-8">This is some text.</p>
                <Button text="Button" />
            </Wrapper>
        </Section>
    ))