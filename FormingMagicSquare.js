function formingMagicSquare(s) {
    // Write your code here
    // Here we note 2 things : center is always 5 and magic sum is always 15, therefore
    // in corners we have 2/8 and 4/6 always in the corners, rest can be filled
    // so 8 possible magic squares
    const arr = s.flat();
    
    const magicSquares = [
        [8, 1, 6, 3, 5, 7, 4, 9, 2],
        [6, 1, 8, 7, 5, 3, 2, 9, 4],
        [4, 9, 2, 3, 5, 7, 8, 1, 6],
        [2, 9, 4, 7, 5, 3, 6, 1, 8],
        [8, 3, 4, 1, 5, 9, 6, 7, 2],
        [4, 3, 8, 9, 5, 1, 2, 7, 6],
        [6, 7, 2, 1, 5, 9, 8, 3, 4],
        [2, 7, 6, 9, 5, 1, 4, 3, 8]
    ];
    
    let costs = [];
    
    for (let i = 0; i < 8; i++) {
        let cost = 0;
        for (let j = 0; j < 9; j++) {
            cost += Math.abs(magicSquares[i][j] - arr[j]);
        }
        costs.push(cost);
    }
    
    return Math.min.apply(null, costs);
}
