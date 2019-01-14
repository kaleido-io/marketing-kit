import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import Alert from '../src/Alert';
import BackTo from '../src/BackTo';
import BannerShape from '../src/BannerShape';
import Button from '../src/Button';
import Card from '../src/Card';
import Grid from '../src/Grid';
import GridItem from '../src/GridItem';
import Infographic from '../src/Infographic';
import PieChart from '../src/PieChart';
import Quote from '../src/Quote';
import Wrapper from '../src/Wrapper';

storiesOf('Components', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add('Alert', () => 
        <Alert 
            message={text('message', 'This is my alert message.')}  
            dismissText={text('dissmissText', 'Dismiss')} 
            />
    )
    .add('BackTo', () =>
        <Wrapper>
            <BackTo
                text={ text('text', 'Back to Previous') }            
                url={ text('url', 'https://google.com') }
            />
        </Wrapper>
    )
    .add('BannerShape', () =>
        <BannerShape
            id="what"
            shape={ select('shape', ['circle', 'triangle', 'square'], 'circle') }
            color={ select('color', ['blue', 'purple', 'green', 'orange'], 'blue') }
            size={ select('size', ['xsmall', 'small', 'medium', 'large', 'xlarge'], 'medium') }
            opacity={ select('opacity', ['15', '30', '100'], '100') }
        />
    )
    .add('Button', () => 
        <Button 
            text={ text('text', 'Button Text') } 
            color={ select('color', ['purple', 'white', 'outline-purple', 'outline-white']) }
            /> 
    )
    .add('Card', () => 
        <Wrapper>
        <Grid columnCount="4">
            <GridItem>
                <Card 
                    icon={ text('icon', '//placehold.it/150x150')}
                    title={ text('text', 'Card Title') } 
                    text={ text('text', 'Card description text lorem ipsum...') }
                    meta={ <div>Meta</div> }
                /> 
            </GridItem>
            <GridItem>
                <Card 
                    icon={ text('icon', '//placehold.it/150x150')}
                    title={ text('text', 'Card Title') } 
                    text={ text('text', 'Card description text lorem ipsum...') }
                    meta={ <div>Meta</div> }
                /> 
            </GridItem>
            <GridItem>
                <Card 
                    icon={ text('icon', '//placehold.it/150x150')}
                    title={ text('text', 'Card Title') } 
                    text={ text('text', 'Card description text lorem ipsum...') }
                    meta={ <div>Meta</div> }
                /> 
            </GridItem>
            <GridItem>
                <Card 
                    icon={ text('icon', '//placehold.it/150x150')}
                    title={ text('text', 'Card Title') } 
                    text={ text('text', 'Card description text lorem ipsum...') }
                    meta={ <div>Meta</div> }
                /> 
            </GridItem>
        </Grid></Wrapper>
    )
    .add('Infographic', () => 
        <Infographic 
            fill={ number('fill', 100) } 
            title={ text('title', 'Statistic') } 
            text={ text('description', 'Description Text') } 
            color={ select('color', ['green', 'orange', 'purple'], 'green')} 
            />
    )
    .add('PieChart', () => 
        <PieChart 
            text={ text('text', 'Chart Text') }
            values={[{
                title: text('title 1', 'Data 1'),
                text: text('text 1', 'this is some text'),
                value: text('value 1', '35')
            },{
                title: text('title 2', 'Data 2'),
                text: text('text 2', 'this is some text'),
                value: text('value 2', '15')
            },{
                title: text('title 3', 'Data 3'),
                text: text('text 3', 'this is some text'),
                value: text('value 3', '50')
            }]}
            />
    )
    .add('Quote', () => 
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
    );


