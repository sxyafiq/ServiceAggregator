import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServiceDetail from './src/pages/ServicePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/service/:id" component={ServiceDetail} />
      </Switch>
    </Router>
  );
}

export default App;
