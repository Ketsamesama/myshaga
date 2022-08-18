import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from 'pages/Main';
import './index.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
