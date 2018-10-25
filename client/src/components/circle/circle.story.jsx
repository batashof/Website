import React from 'react';
import { storiesOf } from '@storybook/react';
import Circle from './circle';

storiesOf('Circle', module)
  .add('size m', () => (
    <Circle size = "m">
    Bla-bla-bla
    </Circle>
  ))
