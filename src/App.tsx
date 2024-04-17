import { Outlet } from 'react-router-dom';
import './App.css'; // TODO: test 용도
import React from 'react';

function App() {
  return (
    <div className="main-page">
      <Outlet />
    </div>
  );
}

export default App;
