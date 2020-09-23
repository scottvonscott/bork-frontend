import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Game from './components/Game';
import HighScores from './components/HighScores';
import { MDBContainer } from 'mdbreact'

const App = (props) => {
  return (
    <Router>
      <MDBContainer>
      <div className="App">
      
        <NavBar />
      <Route exact path='/' component={Home} />
      <Route exact path='/game' component={Game} />
      <Route exact path='/high_scores' component={HighScores}/>
      
      </div>
      </MDBContainer>
    </Router>
  );
};

export default App;