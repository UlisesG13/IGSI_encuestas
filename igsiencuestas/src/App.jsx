import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DepartamentosDashboard from './Administrador/components/pages/departamentosDashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DepartamentosDashboard />} />
    </Routes>
  );
}

export default App;
