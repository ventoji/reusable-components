import React from 'react';

import HelloWorld from '../components/HelloWorld/index';

export default {
  title: 'Example/HelloWord',
  component: HelloWorld,
};

const Template = (args) => <HelloWorld {...args} />;

export const HelloWordExample = Template.bind({});
HelloWordExample.args = {
  message: 'World',
};
