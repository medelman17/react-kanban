import React from 'react';

export const BigButton = props => (
  <button
    className="input-reset w-100 dim pa2 mb2 tracked"
    {...props}
  >
    {props.children}
  </button>
);

export const TinyButton = props => (
  <button
    className="input-reset ba link dim ph2 pv1 dib f6 tracked"
    {...props}
  >
    {props.children}
  </button>
);
