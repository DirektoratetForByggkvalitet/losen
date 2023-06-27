import React from 'react'
import Style from 'losen/styles';

type Props = {
  fill?: string
}

export default function EditIcon({
  fill = Style.color2.link
}: Props) {

  return (
  <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-label="Endre" style={{ fill: fill }}>
    <path d="M4.25 15.75H5.47917L12.4792 8.75004L11.25 7.52087L4.25 14.5209V15.75ZM16.1875 7.54171L12.4583 3.81254L13.4792 2.79171C13.8264 2.44449 14.2396 2.27087 14.7188 2.27087C15.1979 2.27087 15.6111 2.44449 15.9583 2.79171L17.2083 4.04171C17.5417 4.37504 17.7083 4.78824 17.7083 5.28129C17.7083 5.77435 17.5417 6.18754 17.2083 6.52087L16.1875 7.54171ZM14.9583 8.77087L6.22917 17.5H2.5V13.7709L11.2292 5.04171L14.9583 8.77087Z"/>
  </svg>
  );
}