import styled from 'styled-components';
import defaultStyles from '../styles';

const defaultProps = {
  styles: defaultStyles,
};

export const InputCheckbox = styled.input`
  display: none;
`;

InputCheckbox.defaultProps = { ...defaultProps, small: false };
