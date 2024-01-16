/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const rankTable = {};
    matches.forEach((match) => {
        const winner = match[0];
        const loser = match[1];
        rankTable[winner] = { ...rankTable[winner] }
        rankTable[loser] = { ...rankTable[loser]}
        rankTable[winner]["won"] = ~~rankTable[winner]["won"] + 1;
        rankTable[loser]["lost"] = ~~rankTable[loser]["lost"] + 1;
    });

    const firstPlace = [];
    const secondPlace = [];
    Object.entries(rankTable).forEach(([player, rank]) =>  {
        if(rank.won > 0 && !rank.lost) firstPlace.push(player);
        else if(rank.lost === 1) secondPlace.push(player);
    })

    return [firstPlace, secondPlace]
};