import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Components
import Checkbox from "./checkbox/Checkbox";
import ErrorIcon from "../graphics/ErrorIcon";
import Evaluation from "./Evaluation";
import FetchOrg from "./FetchOrg";
import Html from "../helper/Html";
import Image from "./Image";
import ImageComponent from "../helper/Image";
import Information from "./Information";
import Input from "./Input";
import Missing from "./Missing";
import Number from "./Number";
import Radio from "./radio/Radio";
import Select from "./select/Select";
import Signature from "./Signature";
import Sum from "./Sum";
import SummaryDetails from "./SummaryDetails";
import Table from "./Table";
import Text from "./Text";
import Textarea from "./Textarea";

// State deps
import { setData } from "losen/state/actions";
import { NAME } from "losen/state";

// Primitives
import { SpecificBlock as StyledBlock } from "losen/primitives/Block";
import StyledErrorBlock from "losen/primitives/ErrorBlock";
import { ErrorMessage } from "losen/primitives/Errors";
import { RenderableNode, State } from "losen";

/**
 * Determine which component to use based on the node type
 */
function getBlock(type: RenderableNode["type"]) {
  switch (type) {
    case "Radio":
      return Radio;

    case "Checkbox":
      return Checkbox;

    case "Number":
      return Number;

    case "Select":
      return Select;

    case "Image":
      return Image;

    case "Text":
      return Text;

    case "Input":
      return Input;

    case "Textarea":
      return Textarea;

    case "Evaluation":
      return Evaluation;

    case "FetchOrg":
      return FetchOrg;

    case "Table":
      return Table;

    case "Signature":
      return Signature;

    case "Sum":
      return Sum;

    case "Information":
      return Information;

    default:
      return null;
  }
}

export function PureBlock(props: any) {
  const SpecificBlock = getBlock(props.type);

  if (props.type === "ErrorOk") {
    return (
      <div>
        {props.children.map((block: any) => (
          <ConnectedBlock
            key={block.id}
            data-id={props.id}
            simple={props.simple}
            setPage={props.setPage}
            errorPages={props.errorPages}
            pages={props.pages}
            {...block}
          />
        ))}
      </div>
    );
  }

  if (props.type === "Group") {
    return (
      <StyledBlock data-id={props.id} debug={props.debug}>
        <Html text={props.heading} h2 />
        <Html text={props.text} margins />

        {props.children.map((block: any) => (
          <ConnectedBlock
            grouped
            key={block.id}
            data-id={props.id}
            simple={props.simple}
            setPage={props.setPage}
            errorPages={props.errorPages}
            pages={props.pages}
            {...block}
          />
        ))}
        {props.summary && (
          <SummaryDetails summary={props.summary} details={props.details} />
        )}
      </StyledBlock>
    );
  }

  if (props.type === "Error") {
    return (
      <StyledErrorBlock role="alert" data-id={props.id} debug={props.debug}>
        <Html text={props.heading} h2 />
        <Html text={props.text} margins />
        {props.children.map((block: any) => (
          <ConnectedBlock
            grouped
            key={block.id}
            data-id={props.id}
            simple={props.simple}
            setPage={props.setPage}
            errorPages={props.errorPages}
            warning
            pages={props.pages}
            {...block}
          />
        ))}
      </StyledErrorBlock>
    );
  }

  if (!SpecificBlock) {
    return <Missing type={props.type} />;
  }

  if (
    props.type === "Image" ||
    props.type === "Text" ||
    props.type === "Signature" ||
    props.type === "Sum" ||
    props.type === "Summary" ||
    props.type === "Information" ||
    props.type === "Evaluation"
  ) {
    return (
      <SpecificBlock
        grouped={props.grouped}
        groupedSimple={props.simple}
        debug={props.debug}
        data-id={props.id}
        {...props}
      />
    );
  }

  return (
    <StyledBlock
      data-id={props.id}
      id={props.property}
      debug={props.debug}
      grouped={props.grouped}
      groupedSimple={props.simple}
      disabled={props.disabled}
      type={props.type}
    >

      <ImageComponent image={props.image} />
      <Html text={props.heading} h2={!props.grouped} h3={props.grouped} />
      <Html text={props.text} margins />
      <SpecificBlock
        debug={props.debug}
        {...{
          ...props,
          validation:
            props.currentValue && props.validator
              ? {
                error: !new RegExp(props.validator.pattern).test(
                  props.currentValue
                ),
                message: props.validator.error,
              }
              : {},
        }}
      />

      {props.disabled && (
        <ErrorMessage role="alert">
          <ErrorIcon /> {props.errorDescription}
        </ErrorMessage>
      )}
      {props.summary && (
        <SummaryDetails summary={props.summary} details={props.details} />
      )}
    </StyledBlock>
  );
}


PureBlock.defaultProps = {
  children: [],
  currentValue: undefined,
  details: "",
  disabled: false,
  errorDescription: null,
  errorPages: [],
  errors: {},
  grouped: false,
  heading: "",
  id: null,
  image: {},
  pages: [],
  property: null,
  setPage: () => { },
  simple: false,
  summary: "",
  text: "",
  validator: false,
};

const ConnectedBlock = connect(
  (state: State, props: any) => ({
    data: state[NAME],
    debug: !!window.location.search.match("debug"),
    disabled:
      props.errors &&
      props.errors.disabled &&
      ((Array.isArray(props.errors.disabled) &&
        props.errors.disabled.length > 0) ||
        (props.errors.disabled.errors &&
          props.errors.disabled.errors.length > 0)),
  }),
  (dispatch) => bindActionCreators({ setData }, dispatch)
)(PureBlock);

export default ConnectedBlock;
