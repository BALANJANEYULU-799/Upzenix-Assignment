import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import Success from './components/Success';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
