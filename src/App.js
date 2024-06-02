import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AddIceCreamPage from './pages/AddIceCreamPage';
import About from './pages/About';
import IceCreamDetails from './pages/IceCreamDetails';

import './App.css';
import Partner from './pages/Partner';


function App() {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Container component="main" sx={{ pt: 3, pb: 3 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-icecream" element={<AddIceCreamPage />} />
          <Route path="/details" element={<IceCreamDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/partner" element={<Partner />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
