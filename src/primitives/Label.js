import styled from 'styled-components';
import defaultStyles from '../styles';

const Label = styled.label`
  padding: ${({ styles }) => styles.padding.large};
  text-transform: uppercase;
`;

Label.defaultProps = {
  styles: defaultStyles,
};

export default Label;
