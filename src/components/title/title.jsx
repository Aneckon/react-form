import React from 'react';

import './title.css';

export const Title = ({ children }) => {
  return (
    <div className="title">
      <h1>{children}</h1>
      <p>Введите свои данные</p>
    </div>
  );
};
