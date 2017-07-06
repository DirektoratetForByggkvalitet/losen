import styled from 'styled-components';
import defaultStyles from '../styles';

const Wizard = styled.div`
  background-color: ${({ styles }) => styles.color.secondary};
  font-family: ${({ styles }) => styles.font.primary};
`;

Wizard.defaultProps = {
  styles: defaultStyles,
};

export default Wizard;
