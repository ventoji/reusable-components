import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function calculateSize(size) {
  let fontSize;

  if (size === 'small') {
    fontSize = '12px';
  }

  if (size === 'medium') {
    fontSize = '14px';
  }

  if (size === 'large') {
    fontSize = '16px';
  }

  return fontSize;
}

const ButtonStyled = styled.button`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  background-color: ${(props) => props.backgroundColor};
  padding: 10px 16px;
  cursor: pointer;
  font-weight: 700;
`;

/** Defautl button  */
function Button({ label, onClick, size, backgroundColor, color, type }) {
  return (
    <ButtonStyled
      type={type}
      onClick={onClick}
      fontSize={calculateSize(size)}
      backgroundColor={backgroundColor}
      color={color}
    >
      {label}
    </ButtonStyled>
  );
}

Button.propTypes = {
  /** Button Contents */
  label: PropTypes.string.isRequired,

  /** Function to call onClick */
  onClick: PropTypes.func.isRequired,

  /** Button type */
  type: PropTypes.oneOf(['button', 'submit']),

  /** Button size */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**  What background color to use */
  backgroundColor: PropTypes.string,

  /**  Font color */
  color: PropTypes.string,
};

Button.defaultProps = {
  color: 'black',
  size: 'small',
  label: 'click',
  type: 'button',
  onClick: () => {},
  backgroundColor: 'DFDFDF',
};

export default Button;
