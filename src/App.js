import React from 'react';
import './App.css';
import Navigation from './CSS/Navigation';
import Home from './CSS/Home';
import Signup from './CSS/Signup';
import Registration from './CSS/Registration';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="container">
      <Router>
        <div>
          <Navigation />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/registration' element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
