export default function gameReducer(
  // this is probably going to break something, changing default to loading true
    state = {dungeons: [], loading: true, player_name: "Scott",
    player_health: 20, player_attack: 5
   }, action) {
    switch (action.type) {
      case "GOT_DUNGEONS":
        console.log(action.payload)
        console.log("fetched")
        return {loading: false, dungeons: action.payload}
      case "FETCHING_DUNGEONS":
        return {...state, loading: true}
      case "FETCHING_DUNGEON":
        return {...state, loading: true}
      default:
        return state;
    }
  }