import React from 'react';

import { Field } from '../Field';
import { Provider } from './provider';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Form', module)
  .addDecorator(story => <Provider story={story()}/>)
  .add('Email', () => (
      <Field label='email' id='email' name='Email' component='input' type='email'/>
    )
  );
