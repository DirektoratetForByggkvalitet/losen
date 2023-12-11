export * as state from "./state";

export { default as Wizard } from "./components/Wizard";
export { StyleProvider } from "./components/StyleProvider";
export { track, trackEvent } from "./utils/tracking";

export * as dsl from "./utils/dsl";
export * as Primitives from "./primitives";

import { Expression, ValidationError, ValidationResult } from "./utils/dsl";

export type NodeTitles = Record<string, string>;

export type Metadata = {
  title: string;
  name: string;
  footer?: string;
  pdfServiceUrl?: string;
  localStorageKey?: string;
};

/**
 * The known node types
 */
export type NodeType =
  | "Page"
  | "Result"
  | "Error"
  | "ErrorOk"
  | "Group"
  | "Result"
  | "Answer"
  | "Image"
  | "Text"
  | "Branch"
  | "Reference"
  | "Checkbox"
  | "Radio"
  | "Select"
  | "Input"
  | "Number"
  | "Textarea"
  | "Cell"
  | "Heading"
  | "Table"
  | "FetchOrg"
  | "Evaluation"
  | "Information"
  | "Signature"
  | "Sum";

type ImageSrc = { url: string; alt: string; text?: string };

/**
 * Properties common to all nodes that support visibility filters by use of show/hide expressions
 */
type VisibilityFilter = {
  show?: Expression;
  hide?: Expression;

  /**
   * @deprecated Use `hide` instead
   */
  hidden?: Expression;
};

type CommonOptions = {
  heading: string;
  text?: string;
  image?: ImageSrc;
};

export type NodeBase<T extends NodeType, I extends boolean = true> = {
  type: T;
} & (I extends true ? { id: string } : {}) &
  VisibilityFilter;

export type InputNodeBase<T extends NodeType> = NodeBase<T> &
  CommonOptions & {
    id: string;
    property: string;
    summary?: string;
    details?: string;
  };

export type Answer = NodeBase<"Answer"> & {
  heading: string;
  text?: string;
  value: any;
  disabled?: Expression;
  messages?: Array<{
    message: string;
    warning?: boolean;
    hide?: Expression;
    show?: Expression;
    hidden?: Expression;
  }>;
  image?: ImageSrc;
};

export type Page = NodeBase<"Page"> & {
  type: "Page";
  heading: string;
  lead?: string;
  details?: string;
  children: Node[];
};

export type Result = NodeBase<"Result"> & {
  type: "Result";
  children?: Node[];
  exporter?: string;
  heading:
    | string
    | {
        complete: string;
        completeWithError: string;
        incomplete: string;
        incompleteWithError: string;
      };
  lead?:
    | string
    | {
        complete: string;
        completeWithError: string;
        incomplete: string;
        incompleteWithError: string;
      };
};

export type Error = NodeBase<"Error"> & {
  heading?: string;
  lead?: string;
  children: Node[];
};

export type ErrorOk = NodeBase<"ErrorOk"> & {
  heading: string;
  lead?: string;
  children: Node[];
};

export type BranchNode = {
  test: Expression;
  children: Node[];
};

export type Branch = NodeBase<"Branch"> & {
  branches: BranchNode[];
};

export type Checkbox = InputNodeBase<"Checkbox"> & {
  allMandatory?: boolean;
  disabled?: Expression;
  optional?: boolean;
  options: Array<Answer | Reference>;
  grid?: boolean;

  /**
   * List of options to clear when the value of this checkbox group changes
   */
  update?: string[];
};

export type Radio = InputNodeBase<"Radio"> & {
  disabled?: Expression;
  options: Array<Answer | Reference>;
  grid?: boolean;

  /**
   * List of options to clear when the value of this radio group changes
   */
  clear?: string[];
};

export type Select = InputNodeBase<"Select"> & {
  options: Array<Answer | Reference>;
  autocomplete?: string;
  defaultOption?: string;
};

export type Group = NodeBase<"Group"> &
  VisibilityFilter & {
    heading?: string;
    text?: string;
    children: Node[];
  };

type WithValidator = {
  validator?: (
    | {
        test?: undefined;
        pattern: string;

        object?: string;
      }
    | {
        test: Expression;
      }
  ) & { error: string };
};

export type Text = NodeBase<"Text"> & {
  heading?: string;
  text?: string;

  warning?: boolean;

  /**
   * Show only when printing
   */
  printonly?: boolean;

  /**
   * Hide when printing
   */
  printhide?: boolean;
};

type Information = Omit<Text, "type"> & { type: "Information" };

export type Textarea = InputNodeBase<"Textarea"> &
  WithValidator & {
    information?: string;
    placeholder?: string;
    optional?: boolean;
    autocomplete?: string;
  };

export type Input = InputNodeBase<"Input"> &
  WithValidator & {
    placeholder?: string;
    optional?: boolean;
    disabled?: Expression;
    autocomplete?: string;
    inputType?: string;
  };

export type Number = InputNodeBase<"Number"> &
  WithValidator & {
    text?: string;
    placeholder?: string;
    disabled?: Expression;
    optional?: boolean;
    minimum?: number;
    maximum?: number;
    step?: number;
    autocomplete?: string;
    unit?: string;
  };

export type FetchOrg = InputNodeBase<"FetchOrg"> &
  WithValidator & {
    source: string;
    text?: string;
    placeholder?: string;
    information?: string;
    invalidapproval?: string;
    invalidOrg?: string;
    SGheading?: string;
    SGsource?: string;
    SGtext?: string;
    optional?: boolean;
    fetchSG?: boolean;
    autocomplete?: string;
  };

export type Evaluation = NodeBase<"Evaluation"> & {
  /**
   * The id of the node, or two nodes, to evaluate
   */
  testing?: string | [string, string];

  /**
   * The text string to be used when sad state
   */
  sad: string;

  /**
   * The text string to be used when happy state
   */
  happy: string;

  final: boolean;

  showValue?: boolean;
  unit?: string;
  optional?: boolean;
  groupedSimple?: boolean;
};

export type Image = NodeBase<"Image"> & {
  text?: string;
  image: ImageSrc;
};

type Cell = NodeBase<"Cell"> & {
  text: string;
  rowSpan?: number;
  colSpan?: number;
  test?: Expression;
};

type Heading = NodeBase<"Heading"> & {
  text: string;
  rowSpan?: number;
  colSpan?: number;
  test?: Expression;
};

export type Table = NodeBase<"Table"> &
  CommonOptions & {
    cells: Array<Array<Cell | Heading>>;
    simple?: boolean;
  };

export type Sum = InputNodeBase<"Sum"> &
  CommonOptions & {
    values: Array<string | number>;
    operations: Array<"+" | "-" | "*" | "/" | "-/" | "%">;
    details?: string;
    final?: boolean;
    minimum?: number;
    summary?: string;
    unit?: string;
    groupedSimple?: boolean;
  };

export type Reference = NodeBase<"Reference", false> & {
  nodeId: string;
};

type Signature = NodeBase<"Signature">;

export type Node =
  | Page
  | Result
  | Error
  | ErrorOk
  | Group
  | Checkbox
  | Radio
  | Select
  | Input
  | Number
  | Textarea
  | Answer
  | Image
  | Cell
  | Heading
  | Table
  | Branch
  | FetchOrg
  | Reference
  | Text
  | Evaluation
  | Information
  | Signature
  | Sum;

/**
 * Renderable answer type has a boolean for the disabled prop
 * (after evaluation of the expression)
 */
export type RenderableAnswer = WithError<
  Omit<Answer, "disabled"> & {
    disabled?: boolean;
  }
>;

/**
 * The renderable branch node has its children replaced with
 * renderable children
 */
type RenderableBranchNode = WithError<
  Omit<BranchNode, "children"> & {
    children: RenderableNode[];
  }
>;

export type RenderableError = WithError<
  Omit<Error, "children" | "heading"> & {
    children: RenderableNode[];
    heading: string;
  }
>;
export type RenderableErrorOk = WithError<
  Omit<ErrorOk, "children" | "heading"> & {
    children: RenderableNode[];
    heading: string;
  }
>;
export type RenderableResult = WithError<
  Omit<Result, "children" | "heading"> & {
    children: RenderableNode[];
    heading: string;
  }
>;
export type RenderablePage = WithError<
  Omit<Page, "children" | "heading"> & {
    children: RenderableNode[];
    heading: string;
  }
>;
type RenderableGroup = WithError<
  Omit<Group, "children"> & { children: RenderableNode[] }
>;
type RenderableBranch = WithError<
  Omit<Branch, "branches"> & {
    branches: RenderableBranchNode[];
  }
>;
type RenderableCheckbox = WithError<
  Omit<Checkbox, "disabled" | "options"> & {
    disabled?: boolean;
    options: RenderableAnswer[];
  }
>;
type RenderableRadio = WithError<
  Omit<Radio, "disabled" | "options"> & {
    disabled?: boolean;
    options: RenderableAnswer[];
  }
>;
type RenderableSelect = WithError<
  Omit<Select, "options"> & {
    options: RenderableAnswer[];
  }
>;
type RenderableInput = WithError<
  Omit<Input, "disabled"> & { disabled?: boolean }
>;
type RenderableNumber = WithError<
  Omit<Number, "disabled"> & { disabled?: boolean }
>;
type RenderableFetchOrg = WithError<
  Omit<FetchOrg, "disabled"> & { disabled?: boolean }
>;
type RenderableTable = WithError<
  Omit<Table, "cells"> & {
    cells: Array<Array<Omit<Cell | Heading, "test"> & { inactive?: boolean }>>;
  }
>;
type RenderableTextarea = WithError<Textarea>;
type RenderableImage = WithError<Image>;
type RenderableCell = WithError<Cell>;
type RenderableHeading = WithError<Heading>;
type RenderableText = WithError<Text>;
type RenderableEvaluation = WithError<Evaluation>;
type RenderableInformation = WithError<Information>;
type RenderableSignature = WithError<Signature>;
type RenderableSum = WithError<Sum>;

export type WithError<T> = T & {
  errors?: {
    disabled?: ValidationResult | (ValidationResult | ValidationError)[];
    validation?: { error?: boolean | undefined; message?: string | undefined };
    required?: boolean | undefined;
  };
};

export type RenderableNode =
  | RenderableError
  | RenderableErrorOk
  | RenderableResult
  | RenderablePage
  | RenderableGroup
  | RenderableBranch
  | RenderableCheckbox
  | RenderableRadio
  | RenderableSelect
  | RenderableInput
  | RenderableNumber
  | RenderableFetchOrg
  | RenderableAnswer
  | RenderableTable
  | RenderableTextarea
  | RenderableImage
  | RenderableCell
  | RenderableHeading
  | RenderableText
  | RenderableEvaluation
  | RenderableInformation
  | RenderableSignature
  | RenderableSum;

/**
 * A node that has been validated. If the node has errors, information about the errors will be
 * included on the node on the `errors` property.
 */
export type ValidatedNode<T extends {}> = T & {
  errors?: {
    disabled?: ValidationResult | (ValidationResult | ValidationError)[];
    validation?: { error?: boolean | undefined; message?: string | undefined };
    required?: boolean | undefined;
  };
};

type ResolveDisabled<T extends Node | RenderableNode> = T extends RenderableNode
  ? T
  : Omit<T, "disabled"> &
      (T extends { disabled?: Expression } ? { disabled: boolean } : {});

/**
 * This is a utility type for taking a Node type and converting it to a type that matches
 * what is passed as props to the render components. Ideally this should have been provided
 * as the return type, but due to recursive steps in the schema parsing, this is not at all
 * easy to do..
 */
export type Render<T extends Node | RenderableNode> = ValidatedNode<
  Omit<ResolveDisabled<T>, "show" | "hide" | "test" | "hidden">
> & {
  debug: boolean;
};

/**
 * A node that has been validated and is ready to be rendered. A node wrapped in this type will
 * have the current value of the node's property included on the `currentValue` property, a function
 * to set the value of the node's property on the `setData` property.
 *
 * Also, the `show`, `hide` and `test` properties removed, as well as the `hidden` property.
 */
export type RenderWithData<T extends RenderableNode["type"], V = any> = Render<
  Extract<RenderableNode, { type: T }>
> &
  (Render<Extract<RenderableNode, { type: T }>> extends { property: any }
    ? {
        currentValue?: V;
        setData: <O extends boolean = false>(
          property: string,
          value: O extends true ? any : V,

          /**
           * While something of an anti-pattern it is sometimes necessary to write
           * to other data than the current node. In practice this means passing a
           * property other than the current node's property.
           */
          outsideNode?: O
        ) => void;
      }
    : {}) & { data: State };

export type Schema = Array<Branch | Page | Result | Error>;

export type WizardDefinition = {
  meta: Metadata;
  schema: Schema;
  computed?: Record<string, Expression>;
};

export type State = Record<string, any>;
