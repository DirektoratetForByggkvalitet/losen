import { Component } from 'react';
import PropTypes from 'prop-types';

class ScrollToTop extends Component {
  static propTypes = {
    children: PropTypes.nodes,
    page: PropTypes.string,
  };

  static defaultProps = {
    children: null,
    page: '',
  };

  componentDidUpdate(prevProps) {
    if (this.props.page !== prevProps.page) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default ScrollToTop;
