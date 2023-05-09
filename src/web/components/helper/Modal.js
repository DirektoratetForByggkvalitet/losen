import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactModal from 'react-modal';

import { NAME } from '../../state';
import { resetData } from '../../state/actions';

import { H1 } from '../../primitives/Heading';
import { Lead } from '../../primitives/Paragraphs';
import { MainButton, SecondaryButton } from '../../primitives/Button';
import ModalBox from '../../primitives/ModalBox';

const customStyle = {
  overlay: {
    position: 'fixed',
    zIndex: '1002',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'scroll',
  },
  content: {
    position: 'static',
    inset: '0',
    overflow: 'visible',
    background: 'transparent',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    outline: 'none',
  },
};

class Modal extends Component {
  state = {
    showModal: true,
  };

  handleCloseModal = () => this.setState({ showModal: false });

  handleRestart = () => {
    this.setState({ showModal: false });

    setTimeout(() => {
      this.props.resetData();
      this.props.showIntro();
    }, 0);
  }

  render() {
    return (
      <ReactModal
        aria={{
          labelledby: 'heading',
          describedby: 'full_description',
        }}
        ariaHideApp={false}
        isOpen={
          this.state.showModal && Object.keys(this.props.data).length !== 0
        }
        role="dialog"
        shouldCloseOnEsc
        onRequestClose={this.handleCloseModal}
        style={customStyle}
      >
        <ModalBox>
          <H1 id="heading">Vil du starte på nytt?</H1>
          <Lead id="full_description">
            Veiviseren husker svarene fra ditt forrige besøk.
          </Lead>
          <MainButton type="button" onClick={this.handleCloseModal}>Fortsett</MainButton>
          <br />
          <SecondaryButton type="button" onClick={this.handleRestart}>
            Start på nytt
          </SecondaryButton>
        </ModalBox>
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
