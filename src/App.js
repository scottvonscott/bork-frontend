import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import GameContainer from './containers/GameContainer';
import HighScoreContainer from './containers/HighScoreContainer';
import { MDBContainer } from 'mdbreact'

const App = () => {
  return (
    <Router>
      <MDBContainer >
      <div className="App">
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/game' component={GameContainer} />
        <Route exact path='/high_scores' component={HighScoreContainer}/>
      </div>
      </MDBContainer>
    </Router>
  );
};

export default App;