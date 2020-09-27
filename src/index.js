import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux'
// import { composeWithDevTools } from "redux-devtools-extension"
import thunk from 'redux-thunk'
import gameReducer from './reducers/dungeonReducer'
import dungeonReducer from './reducers/fightReducer';
import fightReducer from './reducers/fightReducer'

// setting store with Redux's createSTore, and passing in our reducer
const gameReducer = combineReducers({dungeon: dungeonReducer, fight: fightReducer})
const myStore = createStore(gameReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
   {/* Wrapping App in provider allows entire app to access store. passing in store as an opject */}
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
