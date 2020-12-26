export const armor = (loot) => ({type: "INCREASE_PLAYER_HEALTH", payload: loot})
export const weapon = (loot) => ({type: "INCREASE_PLAYER_DMG", payload: loot})