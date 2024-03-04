function solution(players, callings) {
    const keyPlayers = {}
    const keyRanks = {}
    players.forEach((player,idx)=>{
        const rank = idx+1
        keyPlayers[player] = rank
        keyRanks[rank] = player
    })

    callings.forEach((calling)=>{
        const callingPlayerRank = keyPlayers[calling];
        const frontPlayer = keyRanks[callingPlayerRank - 1]
        const frontPlayerRank = keyPlayers[frontPlayer];
        
        keyRanks[frontPlayerRank] = calling
        keyRanks[callingPlayerRank] = frontPlayer        
        
        keyPlayers[frontPlayer] += 1
        keyPlayers[calling] -= 1
    })


    return Object.values(keyRanks)
}