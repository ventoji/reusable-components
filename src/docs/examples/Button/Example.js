import React from 'react';
import Button from 'ventoji-components/Button';

/** Default button */
export default class Example extends React.Component {
  render() {
    return <Button label="click" onClick={() => console.log('clicked')} />;
  }
}
