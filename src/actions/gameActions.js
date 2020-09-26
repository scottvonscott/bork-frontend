
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



// export const fetchHighScores(){
//     return (dispatch) => {
//         dispatch({type: 'STARTD_ADDING_HIGHSCORES_REQUEST'});
//         fetch('http://localhost:3000/games')
//         .then(response => response.json())
//         .then(high_scores => dispatch({type: "ADD_HIGHSCORES", high_scores}))
//     }
// }