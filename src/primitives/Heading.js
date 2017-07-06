import styled from 'styled-components';
import defaultStyles from '../styles';

const defaultProps = {
  styles: defaultStyles,
};

export const H1 = styled.h1`
  font-family: ${({ styles }) => styles.font.secondary};
  font-size: ${props => props.small ? '20px' : '38px'};
  color: ${({ styles }) => styles.color.primary};
`;

H1.defaultProps = { ...defaultProps, small: false };

export const H2 = styled.h2`
  font-size: ${props => props.small ? '20px' : '28px'};
  color: ${({ styles }) => styles.color.primary};
`;

H2.defaultProps = { ...defaultProps, small: false };
