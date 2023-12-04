import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ReactModal from "react-modal";

import { NAME } from "../../state";
import { resetData } from "../../state/actions";

import { H1 } from "../../primitives/Heading";
import { Lead } from "../../primitives/Paragraphs";
import { MainButton, SecondaryButton } from "../../primitives/Button";
import ModalBox from "../../primitives/ModalBox";
import { State } from "../../index";

const customStyle: any = {
  overlay: {
    position: "fixed",
    zIndex: "1002",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 48, 69, 0.4)",
    display: "flex",
    flexDirection: "column",
    overflowY: "scroll",
  },
  content: {
    position: "static",
    inset: "0",
    overflow: "visible",
    background: "transparent",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    outline: "none",
  },
};

type Props = {
  data: any,
  resetData: () => void,
  showIntro: () => void,
}

function Modal(props: Props) {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => setShowModal(false)

  const handleRestart = () => {
    setShowModal(false);

    setTimeout(() => {
      props.resetData();
      props.showIntro();
    }, 0);
  };

  return (
    <ReactModal
      aria={{
        labelledby: "heading",
        describedby: "full_description",
      }}
      ariaHideApp={false}
      isOpen={
        showModal && Object.keys(props.data).length !== 0
      }
      role="dialog"
      shouldCloseOnEsc
      onRequestClose={handleCloseModal}
      style={customStyle}
    >
      <ModalBox>
        <H1 id="heading">Vil du fortsette der du slapp?</H1>
        <Lead id="full_description">
          Veiviseren husker svarene fra ditt forrige besøk.
        </Lead>
        <MainButton type="button" onClick={handleCloseModal}>
          Fortsett
        </MainButton>
        <SecondaryButton type="button" onClick={handleRestart}>
          Start på nytt
        </SecondaryButton>
      </ModalBox>
    </ReactModal>
  );
}

export default connect(
  (state: State) => ({ data: state[NAME] }),
  (dispatch) => bindActionCreators({ resetData }, dispatch)
)(Modal);
