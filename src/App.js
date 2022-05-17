import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { AuthEnd, Login, Register } from './components';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registerend" element={<AuthEnd />} />
        <Route path="/loginend" element={<AuthEnd />} />
      </Routes>
    </div>
  );
};
