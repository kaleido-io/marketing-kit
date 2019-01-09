import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import Alert from '../src/Alert';
import Button from '../src/Button';
import Grid from '../src/Grid';
import GridItem from '../src/GridItem';

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