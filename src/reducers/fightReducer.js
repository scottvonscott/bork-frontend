export default function fightReducer(
      state = {loading: true, action_outcome: {log: "Awaiting New Action"}, player: {player_name: "Scott", player_health: 20, player_attack: 15}, monster_stats: {monster_health: 20, monster_attack: 10}}, action) {
      switch (action.type) {
        case "REDUCE_PLAYER_HEALTH":
          let player_stuff = {player_name: state.player.player_name, player_attack: state.player.player_attack}
          return {...state, action_outcome: {log: "Player takes damage!"}, player: {...player_stuff, player_health: state.player.player_health - state.monster_stats.monster_attack}, loading: false}

        case "REDUCE_MONSTER_HEALTH":
          let monster_stuff = {monster_attack: state.monster_stats.monster_attack}
          return {...state, action_outcome: {log: "Monster takes damage!"}, monster_stats: {...monster_stuff, monster_health: state.monster_stats.monster_health - state.player.player_attack}, loading: false}

        case "NEW_MONSTER": 
          return {...state, action_outcome: {log: "Awaiting New Action"}, loading: false, monster_stats: {monster_health: action.payload.data.attributes.monsters[0].health, monster_attack: action.payload.data.attributes.monsters[0].attack}}
        default:
          return state;
      }

    }