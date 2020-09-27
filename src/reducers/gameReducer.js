export default function gameReducer(
  // this is probably going to break something, changing default to loading true
    state = {dungeons: {}, monster: {}, monster_game_health: 0, loading: true, player: {player_name: "Scott",
    player_health: 20, player_attack: 5}
   }, action) {
    switch (action.type) {
      case "GOT_DUNGEONS":
        console.log(action.payload)
        console.log("fetched")
        return {...state, loading: false, dungeon: action.payload.data, monster: action.payload.data.attributes.monsters[0], 
          monster_game_health: action.payload.data.attributes.monsters[0].health
        }
      case "FETCHING_DUNGEONS":
        return {...state, loading: true}
      case "FETCHING_DUNGEON":
        return {...state, loading: true}
      default:
        return state;
    }
  }