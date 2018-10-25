import React from 'react';
import { storiesOf } from '@storybook/react';
import Location from './location';

storiesOf('Location', module)
  .add('with text minsk', () => (
    <Location city = "minsk"/>
  ))
  .add('with text brest', () => (
    <Location city = "brest"/>
  ))
  .add('with text grodno', () => (
    <Location city = "grodno"/>
  ))
