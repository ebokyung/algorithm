/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const lossCnt = new Array(100001).fill(0);
    for(let [winner, loser] of matches) {
        lossCnt[winner] = lossCnt[winner] === 0 ? -1 : lossCnt[winner]
        lossCnt[loser] = lossCnt[loser] === -1 ? 1 : lossCnt[loser]+1;
    };

    const zeroLoss = [];
    const oneLoss = [];
    lossCnt.forEach((player, index) =>  {
        if(player === -1) zeroLoss.push(index);
        else if(player === 1) oneLoss.push(index);
    })

    return [zeroLoss, oneLoss]
};