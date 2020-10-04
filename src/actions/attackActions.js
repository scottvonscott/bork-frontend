export const playerDmg = () => ({type: "REDUCE_PLAYER_HEALTH"})
export const monsterDmg = () => ({type: "REDUCE_MONSTER_HEALTH"})

export const outcome = (id) => {
    debugger
    switch(id) {
        case 1:
        return {type: "TWO ATTACK"}
        case 2:
        return {type: "TWO DEFEND"}
        case 3:
        return {type: "TWO SPELL"}
        case 4:
        return {type: "ATK DEF"}
        case 5:
        return {type: "ATK SPELL"}
        case 6:
        return {type: "DEF ATK"}
        case 7:
        return {type: "DEF SPELL"}
        case 8:
        return {type: "SPELL ATK"}
        case 9:
        return {type: "SPELL DEF"}
        default:
            return {type: ""}
        
    }
}
