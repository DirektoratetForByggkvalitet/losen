import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactModal from 'react-modal';

import { NAME } from '../../state';
import { resetData } from '../../state/actions';

import { MainButton, SecondaryButton } from '../../primitives/Button';

class Modal extends Component {
  state = {
    showModal: true,
  }

  componentDidMount = () => this.state.showModal = false

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
  data: PropTypes.object.isRequired,
  resetData: PropTypes.func.isRequired,
  showIntro: PropTypes.func.isRequired,
};

export default connect(
  state => ({ data: state[NAME] }),
  dispatch => bindActionCreators({ resetData }, dispatch),
)(Modal);
