import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CompanyListing from './components/CompanyListing';
import Header from './components/Header';
import './assets/styles/App.css';  // Import the main CSS for global styles
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <Router>

      <div className="App">
      <Navbar />
        <Routes>
          {/* Define the route for the company listing page */}
          <Route path="/" element={<CompanyListing />} />
          {/* If you have other pages, you can add them as additional routes */}
          {/* Example: */}
          {/* <Route path="/services" element={<ServicePage />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
