import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const Html = injectStyles(styled.div`
    display: ${props => (props.inline ? 'inline' : 'block')};
`);

export default Html;
