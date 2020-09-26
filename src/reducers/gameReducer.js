export default function gameReducer(
    state = {dungeons: [], loading: false }, action) {
    switch (action.type) {
      case "GOT_DUNGEONS":
        return {...state, loading: false, dungeons: action.payload}
      case "FETCHING_DUNGEONS":
        return {...state, loading: true}
      default:
        return state;
    }
  }