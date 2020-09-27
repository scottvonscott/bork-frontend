export default function fightReducer(
      state = {loading: true, player_health: 20, monster_game_health: 10, player_attack: 5, monster_attack: 5} , action) {
      switch (action.type) {
        case "REDUCE_PLAYER_HEALTH":
          return {...state, player_health: state.player_health - state.monster_attack, loading: false}
        case "REDUCE_MONSTER_HEALTH":
          return {...state, monster_health: state.monster_health - state.player_attack, loading: false}
        default:
          return state;
      }
    }