import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation  } from 'react-router-dom';
import Header from './components/Header';
import AddEmployee from './components/AddEmployee';
import { ToastContainer } from 'react-toastify';
import { Container } from 'reactstrap';
import AllEmployees from './components/AllEmployees';

function App() {
  return (
    <div>  
      <Router>
        <ToastContainer/>
        <Container>
          <AppRouter />
        </Container>
      </Router>
    </div>
  );
}

const AppRouter = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' && <Header />}
      <Routes>
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/" element={<AllEmployees />} />
      </Routes>
    </>
  );
};

export default App; 