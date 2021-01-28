import React from 'react';
import TextInputStyledComponents from '../components/TextInputStyledComponents/index';

export default {
  title: 'React Library/Forms Elements/Input',
  component: TextInputStyledComponents,
};

const Template = (args) => <TextInputStyledComponents {...args} />;

export const TextExample = Template.bind({});
TextExample.args = {
  htmlId: 'example-optional',
  type: 'text',
  label: 'First Name',
  name: 'firstname',
  onChange: () => {},
  required: true,
  error: 'First name is required.',
};
