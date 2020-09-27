export default function fightReducer(
      state = {...state, player_health: 20, monster_health: 10, player_attack: 5, monster_attack: 5} , action) {
      switch (action.type) {
        case "REDUCE_PLAYER_HEALTH":
          return {...state, player_health: state.player_health - state.monster_attack}
        case "REDUCE_MONSTER HEALTH":
          return {...state, monster_health: state.monster_health - state.player_attack}
        default:
          return state;
      }
    }