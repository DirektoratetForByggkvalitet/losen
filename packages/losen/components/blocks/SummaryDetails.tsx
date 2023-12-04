import React from 'react';
import { Details, Summary } from "../../primitives/Details";
import Html from "../helper/Html";

type Props = {
  summary: string
  details?: string
}

export default function SummaryDetails({ summary, details }: Props) {
  return (
    <Details>
      <Summary>{summary}</Summary>
      <Html text={details} />
    </Details>
  );
}