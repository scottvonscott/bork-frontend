
const gotDungeons = (dungeon) => {
    return {type: "GOT_DUNGEONS", payload: dungeon}
}

export const fetchDungeons = () => {
    return (dispatch) => {
        dispatch({type: "FETCHING_DUNGEONS"})
        fetch("http://localhost:3000/dungeon_levels")
        .then((res) => res.json())
        .then((data) => {
            dispatch(gotDungeons(data))
            
        })
    }
}



