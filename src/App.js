import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar />

        {/* Main Routing */}
        <main>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/service/:id" component={ServicePage} />
            {/* Add more routes as necessary */}
          </Switch>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
