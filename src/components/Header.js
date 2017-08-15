import React from 'react';
import Header from '../primitives/grid/Header';
import Logo from '../primitives/Logo';

export default function Heading() {
  return (<Header>
    <a href="/"><Logo /></a>
    <div>
      <button>= Menytoggle på mobil</button>
    </div>
  </Header>);
}
