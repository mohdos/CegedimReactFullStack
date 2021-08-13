import logo from './logo.svg';
import './App.css';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListingScreen from './components/ListingScreen/ListingScreen';


function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> will show every where */}
        <div className="content">
          <Switch>
            <Route exact path="/">
              <WelcomeScreen />
            </Route>
            <Route path="/listings">
              <ListingScreen />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
