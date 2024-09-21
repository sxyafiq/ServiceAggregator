
import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// eslint-disable-next-line
import HomePage from './pages/HomePage';
// eslint-disable-next-line
import ServicePage from './pages/ServicePage';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/service/:name" element={<ServicePage />} />
          </Routes>

        </main> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;