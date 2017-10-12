import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactModal from 'react-modal';
import autobind from 'react-autobind';

import { resetData } from '../../state/actions';
import { NAME } from '../../state';
import { MainButton, SecondaryButton } from '../../primitives/Button';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true,
    };
    autobind(this);
  }

  componentDidMount() {
    this.state.showModal = false;
  }

  handleCloseModal = () => this.setState({ showModal: false });

  handleRestart = () => {
    this.props.resetData();
    this.setState({ showModal: false });
    this.props.showIntro();
  };

  render() {
    /* shouldCloseOnEsc will work on next version of React Modal for UU */
    return (
      <ReactModal
        isOpen={
          this.state.showModal && Object.keys(this.props.data).length !== 0
        }
        contentLabel="Vil du starte på nytt?"
        role="dialog"
        shouldCloseOnEsc
      >
        <h1>Vil du starte på nytt?</h1>
        <SecondaryButton onClick={this.handleRestart}>
          Start på nytt
        </SecondaryButton>
        <MainButton onClick={this.handleCloseModal}>Behold data</MainButton>
      </ReactModal>
    );
  }
}

Modal.propTypes = {
  resetData: PropTypes.func.isRequired,
  showIntro: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default connect(
  state => ({
    data: state[NAME],
  }),
  dispatch => bindActionCreators({ resetData }, dispatch),
)(Modal);
