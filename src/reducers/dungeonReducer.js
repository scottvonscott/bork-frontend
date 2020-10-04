export default function dungeonReducer(
    state = {dungeons: {}, monster: {}, loading: true,}, action) {
    switch (action.type) {
      case "GOT_DUNGEONS":
        return {...state, loading: false, dungeon: action.payload.data, monster: action.payload.data.attributes.monsters[0]
        }
      case "FETCHING_DUNGEONS":
        return {...state, loading: true}
      case "FETCHING_DUNGEON":
        return {...state, loading: true}
      default:
        return state;
    }
  }