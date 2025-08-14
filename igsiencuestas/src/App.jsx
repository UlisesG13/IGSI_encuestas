<<<<<<< HEAD:igsiencuestas/src/App.jsx
import logo from './logo.svg';
import './App.css';
import DepartamentosDashboard from './Administrador/components/pages/departamentosDashboard';
import Login from './Shared/components/pages/login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DepartamentosDashboard />
        <Login />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
import { Routes, Route } from 'react-router-dom';
import DepartamentosDashboard from './Administrador/components/pages/departamentsDashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DepartamentosDashboard />} />
    </Routes>
>>>>>>> Administrador:igsiencuestas/src/App.js
  );
}

export default App;
