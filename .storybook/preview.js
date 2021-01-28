
import {withInfo} from '@storybook/addon-info';
import { withKnobs} from '@storybook/addon-knobs';
export const parameters = {
  actions: { 
    argTypesRegex: "^on[A-Z].*" ,
    actions: {
      handles: ['change']
    }

  }
}


export const decorators = [
  withKnobs(),
  (Story) => <div style={{ margin: '3em' }}><Story/></div>
];

/*
 withInfo({
    inline: true
  })*/
  
// other options in parameters
// layout: 'centered'
//   docs: { page: null } 
// background where component is placed.
/* backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
    ],
  }*/

// decorators can be added global or local
// in this file, decorators apply changes to
// all components.
// import { ThemeProvider } from 'styled-components';

/* export const decorators = [
  (Story) => (
    <ThemeProvider theme="default">
      <Story />
    </ThemeProvider>
  ),
]; */

// local form
// decorators: [(Story) => <div style={{ margin: '3em' }}><Story/></div>]

 
