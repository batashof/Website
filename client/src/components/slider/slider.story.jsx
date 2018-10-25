import React from 'react';
import { storiesOf } from '@storybook/react';
import Slider from './slider';
import FeatureTile from '../feature-tile/feature-tile.jsx';

storiesOf('Slider', module)
  .add('slider with large slides', () => (
    <Slider >
     <FeatureTile />
     <FeatureTile />
    </Slider>
  ))
