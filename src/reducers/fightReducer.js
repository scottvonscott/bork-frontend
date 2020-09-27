export default function fightReducer(
      state = {loading: true, player: {player_name: "Scott", player_health: 20, player_attack: 5}, monster: {monster_game_health: 10, monster_attack: 5}}, action) {
      switch (action.type) {
        case "REDUCE_PLAYER_HEALTH":
          // debugger
          let player_stuff = {player_name: state.player.player_name, player_attack: state.player.player_attack}
          return {...state, player: {...player_stuff, player_health: state.player.player_health - state.monster.monster_attack}, loading: false}

        case "REDUCE_MONSTER_HEALTH":
        debugger
          let monster_stuff = {monster_attack: state.monster.monster_attack}
          return {...state, monster: {...monster_stuff, monster_game_health: state.monster.monster_game_health - state.player.player_attack}, loading: false}
        default:
          return state;
      }

    }