import { combineReducers } from 'redux'
import fightReducer from './fightReducer'
import dungeonReducer from './dungeonReducer'

export default combineReducers({
    fightReducer,
    dungeonReducer
})