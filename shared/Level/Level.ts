export const getLevel = function(xp: number): number {
    return Math.floor((Math.sqrt(100 * (2 * xp+25))+50)/100)
}