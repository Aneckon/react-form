import React from 'react';

import './button.css';

export const Button = ({ children, disabled, onSubmit }) => {
  return (
    <button className={!disabled ? 'button disabled' : 'button'} onClick={disabled ? onSubmit : null}>
      {children}
    </button>
  );
};
