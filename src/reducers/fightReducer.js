export default function fightReducer(
      state = {loading: true, action_outcome: {log: "Awaiting New Action"}, player: {player_health: 100, player_attack: 9}, monster_stats: {monster_health: 20, monster_attack: 10}}, action) {
      switch (action.type) {
        case "REDUCE_PLAYER_HEALTH":
          return {...state, player: {player_attack: state.player.player_attack, player_health: state.player.player_health - state.monster_stats.monster_attack}, loading: false}
        case "INCREASE_PLAYER_HEALTH":
          debugger
          return {...state, player: {player_attack: state.player.player_attack, player_health: state.player.player_health + action.payload.data}}
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
            return {...state, action_outcome: {log:"You attack, but the monster defends and counterattacks! You take damage!"}}
          case "ATK SPELL":
              return {...state, action_outcome: {log:"Monster tries casting a spell, but you attack before it can finish! Monster takes damage!"}}
          case "DEF ATK":
            return {...state, action_outcome: {log:"Monster attacks, but you defend and counterattack! Monster takes damage!"}}
          case "DEF SPELL":
            return {...state, action_outcome: {log:"You try to defend, but it casts a spell on you! You take damage!"}}
          case "SPELL ATK":
            return {...state, action_outcome: {log:"You cast a spell, but the monster attacks before you can finish! You take damage!"}}
          case "SPELL DEF":
            return {...state, action_outcome: {log:"Monster tries to defend, but you cast a spell on it! Monster takes damage!"}}
        default:
          return state;
      }

    }



