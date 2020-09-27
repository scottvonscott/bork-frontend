
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


export const fetchDungeon = (level) => {
    return (dispatch) => {
        dispatch({type: "FETCHING_DUNGEON"})
        fetch(`http://localhost:3000/dungeon_levels/${level}`)
        .then((res) => res.json())
        .then((data) => {
            dispatch(gotDungeons(data))
            
        })
    }
}


