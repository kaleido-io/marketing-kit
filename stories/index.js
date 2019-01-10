import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import Alert from '../src/Alert';
import Button from '../src/Button';
import Grid from '../src/Grid';
import GridItem from '../src/GridItem';
import Header from '../src/Header';
import Footer from '../src/Footer';
import Banner from '../src/Banner';
import Infographic from '../src/Infographic';
import PieChart from '../src/PieChart';
import Quote from '../src/Quote';
import Section from '../src/Section';
import Wrapper from '../src/Wrapper';
import CallToAction from '../src/CallToAction';

import '../src/styles/reset.scss';
import '../src/styles/spacing.scss';
import '../src/styles/typography.scss';

storiesOf('Alert', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Alert 
            message={text('message', 'This is my alert message.')}  
            dismissText={text('dissmissText', 'Dismiss')} 
        />
     ) );   

storiesOf('Button', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add('Default', () => <Button text={ text('text', 'Button Text') } color={ select('color', ['purple', 'white', 'outline-purple', 'outline-white']) }/> );

storiesOf('Grid', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add('Default', () => {

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

storiesOf('Header', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add('Default', () => (
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

storiesOf('Footer', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add('Default', () => (
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

storiesOf('Banner', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add('Default', () => (
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

storiesOf('Infographic', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Infographic 
            fill={ number('fill', 100) } 
            title={ text('title', 'Statistic') } 
            text={ text('description', 'Description Text') } 
            color={ select('color', ['green', 'orange', 'purple'], 'green')} 
            />
    ))

storiesOf('PieChart', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <PieChart 
            text={ text('text', undefined) }
                />
    ))

storiesOf('Quote', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Quote 
            text={ text('text', 'This is the quote text.') }
            headshot={ text('headshot', '//placehold.it/150x150') }
            person={{
                name: text('name', 'Jane Q. Public'),
                title: text('title', 'CEO'),
                org: text('org', 'Conglomo')
            }}
            isLarge={ boolean('isLarge', false) }
            border={ boolean('border', false) }
            noPadding={ boolean('noPadding', false) }
        
        />
    ))

storiesOf('Section', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Section>
            <Wrapper>
                <h1 class="k-h1">This is a header</h1>
                <p class="k-py-8">This is some text.</p>
                <Button text="Button" />
            </Wrapper>
        </Section>
    ))

storiesOf('Call To Action', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add('Default', () => (
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