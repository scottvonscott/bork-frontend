
const gotDungeons = (dungeon) => {
    return {type: "GOT_DUNGEONS", payload: dungeon}
}

const newMonster = (dungeon) => {
    return {type: "NEW_MONSTER", payload: dungeon}
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
            dispatch(newMonster(data))
            
        })
    }
}

export const addScore = (score, player_name) => {
    debugger
    let newGameObj = {
        score,
        player_name
    }
    let configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(newGameObj)
    }
    fetch('http://localhost:3000/games', configObj)
    .then(res => res.json())
    .then(console.log("New Score Created"))
}