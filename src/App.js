import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/login';
import SignUp from './components/signup';
import Table from './components/table'
function App() {
  return (    
    <>
   
    <Router> 
      <Routes>    
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/table" element={<Table />} /> 
      </Routes>
    </Router>
    </>

  );
}
export default App;
