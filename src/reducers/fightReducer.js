export default function fightReducer(
      state = {loading: true, action_outcome: {log: "Awaiting New Action"}, player: {player_name: "Scott", player_health: 100, player_attack: 15}, monster_stats: {monster_health: 20, monster_attack: 10}}, action) {
      switch (action.type) {
        case "REDUCE_PLAYER_HEALTH":
          let player_stuff = {player_name: state.player.player_name, player_attack: state.player.player_attack}
          return {...state, player: {...player_stuff, player_health: state.player.player_health - state.monster_stats.monster_attack}, loading: false}

        case "REDUCE_MONSTER_HEALTH":
          let monster_stuff = {monster_attack: state.monster_stats.monster_attack}
          return {...state, monster_stats: {...monster_stuff, monster_health: state.monster_stats.monster_health - state.player.player_attack}, loading: false}

        case "NEW_MONSTER": 
          return {...state, action_outcome: {log: "Awaiting New Action"}, loading: false, monster_stats: {monster_health: action.payload.data.attributes.monsters[0].health, monster_attack: action.payload.data.attributes.monsters[0].attack}}

          case "TWO ATTTACK":
            return {...state, action_outcome: {log:"You both attack, no one takes damage"}}
          case "TWO DEFEND":
            return {...state, action_outcome: {log:"You both defend, no one takes damage"}}
          case "TWO SPELL":
            return {...state, action_outcome: {log:"You both cast spells, no one takes damage"}}
          case "ATK DEF":
            return {...state, action_outcome: {log:"You attack, and it defends. You take damage!"}}
          case "ATK SPELL":
              return {...state, action_outcome: {log:"You attack, and it casts a spell. Monster takes damage!"}}
          case "DEF ATK":
            return {...state, action_outcome: {log:"You defend and it attacks. Monster takes damage!"}}
          case "DEF SPELL":
            return {...state, action_outcome: {log:"You defend and it casts a spell. You take damage!"}}
          case "SPELL ATK":
            return {...state, action_outcome: {log:"You cast a spell and it attacks. You take damage!"}}
          case "SPELL DEF":
            return {...state, action_outcome: {log:"You cast a spell and it defends. Monster takes damage!"}}
        default:
          return state;
      }

    }



