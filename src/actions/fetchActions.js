export function fetchHighScores(){
    return (dispatch) => {
        dispatch({type: 'STARTD_ADDING_HIGHSCORES_REQUEST'});
        fetch('http://localhost:3000/games')
        .then(response => response.json())
        .then(high_scores => dispatch({type: "ADD_HIGHSCORES", high_scores}))
    }
}