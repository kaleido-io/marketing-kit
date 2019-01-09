import { configure, addDecorator } from '@storybook/react';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import React from 'react';

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

addDecorator(story => <div className="k-body">{story()}</div>);

addDecorator(
    withBackgrounds([
        { name: 'White', value: '#ffffff', default: true },
        { name: 'Black', value: '#111111' },
        { name: 'Purple', value: '#3842C1' },
        { name: 'Blue', value: "#51C2FA" },
        { name: 'Grey', value: '#C2C0C0' }
      ])
);

configure(loadStories, module);