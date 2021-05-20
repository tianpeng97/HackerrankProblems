function climbingLeaderboard(ranked, player) {
    ranked = Array.from(new Set(ranked));
    const result = [];
    
    for (const score of player) {
        while (ranked.length != 0 && score >= ranked[ranked.length - 1])
            ranked.pop();
        result.push(ranked.length + 1);
    }
    
    return result;
}
