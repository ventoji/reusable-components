import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Button from './Button';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

describe('Button component', () => {
  let button; // use shallow
  let tree; // use renderer
  let mockContext = 'small';

  beforeEach(() => {
    button = shallow(
      <Button label="button test" onClick={() => {}} size={mockContext} />,
    );

    tree = renderer.create(<Button />).toJSON();
  });

  it('Should be defined', () => {
    expect(Button).toBeDefined();
  });

  it('Should be button type', () => {
    expect(toJson(button)).toMatchSnapshot();

    expect(button.find({ type: 'button' })).toBeTruthy();
  });

  it('Should be submit type', () => {
    button = shallow(
      <Button
        label="button test"
        onClick={() => {}}
        size={mockContext}
        type="submit"
      />,
    );
    expect(toJson(button)).toMatchSnapshot();

    expect(button.find({ type: 'submit' })).toBeTruthy();
  });

  it('Should render correctly small size button', () => {
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('font-size', '12px');
    expect(tree).toHaveStyleRule('background-color', 'DFDFDF');
  });

  it('Should render correctly medium size button', () => {
    mockContext = 'medium';
    tree = renderer.create(<Button size={mockContext} />).toJSON();

    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('font-size', '14px');
    expect(tree).toHaveStyleRule('background-color', 'DFDFDF');
  });

  it('Should render correctly large size button', () => {
    mockContext = 'large';
    tree = renderer.create(<Button size={mockContext} />).toJSON();

    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('font-size', '16px');
    expect(tree).toHaveStyleRule('background-color', 'DFDFDF');
  });

  it('should call mock function when button is clicked', () => {
    const mockCallBack = jest.fn();

    const button = shallow(
      <Button onClick={mockCallBack} label="Ok" size={mockContext}></Button>,
    );

    //button.find('button').simulate('click');
    button.simulate('click');

    expect(mockCallBack.mock.calls.length).toEqual(1);
    expect(mockCallBack).toHaveBeenCalled();

    // console.log(button.find('button').props());
    // comment code is for a button (not styled-button)
  });
});
