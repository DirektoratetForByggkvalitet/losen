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

const customStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    position: 'static',
    maxWidth: '666px',
    margin: '0 auto',
    border: '1px solid #ccc',
    background: '#fff',
    borderRadius: '0',
    outline: 'none',
    padding: '40px 60px',
    textAlign: 'center',
  },
};

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
        style={customStyle}
        shouldCloseOnEsc
      >
        <H1>Vil du starte på nytt?</H1>
        <Lead>Veiviseren husker svarene fra ditt forrige besøk.</Lead>
        <MainButton onClick={this.handleCloseModal}>Fortsett</MainButton><br />
        <SecondaryButton onClick={this.handleRestart}>
          Start på nytt
        </SecondaryButton>
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
