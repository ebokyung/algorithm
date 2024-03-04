function solution(players, callings) {
    const playersMap = new Map();
    const playersRankMap = new Map();

    players.forEach((value, index) => {
        playersMap.set(value, index);
        playersRankMap.set(index, value);
    });

    callings.forEach((value) => {
        const currentPlayerRank = playersMap.get(value);
        const frontPlayerName = playersRankMap.get(currentPlayerRank - 1);

        playersMap.set(value, currentPlayerRank - 1);
        playersRankMap.set(currentPlayerRank - 1, value);
        playersMap.set(frontPlayerName, currentPlayerRank);
        playersRankMap.set(currentPlayerRank, frontPlayerName);
    });

    return [...playersRankMap.values()];
}
