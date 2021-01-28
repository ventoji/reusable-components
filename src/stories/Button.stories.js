import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import Button from '../components/Button/index';

export default {
  title: 'React Library/Buttons/Button',
  component: Button,
  argTypes: {
    backgroundColor: {
      control: 'color',
      table: {
        category: 'Colors',
      },
    },
    color: {
      control: 'color',
      table: {
        category: 'Colors',
      },
    },
    size: {
      control: 'select',
      table: {
        category: 'Sizes',
      },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: action('onClick'),
  label: text('label', 'click me'),
};

export const Alert = Template.bind({});
Alert.args = {
  ...Default.args,
  color: 'black',
  backgroundColor: 'red',
};

// change background not for the component but for storybook container this element
/* Alert.parameters = {
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
    ],
  },
}; */

// Imperative way of write stories
// import { storiesOf } from '@storybook/react';

/* storiesOf('Example/Button', module).add('clicks', () => (

<Button label="click me" onClick={action('my component clicked')} />

)); */
