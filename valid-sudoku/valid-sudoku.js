/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
const set = new Set()
for(let i=0;i<board.length;i++){
    for(let j=0;j<board[i].length;j++){
        const cell = board[i][j]
        if (cell === ".")continue
        const BoxNum = 3 * Math.floor(i/3) + Math.floor(j/3)
        const row = `row is ${i}, value is ${cell}`
        const cul = `cul is ${j}, value is ${cell}`
        const box = `box is ${BoxNum}, value is ${cell}`
        if (set.has(row)||set.has(cul)||set.has(box)){
            return false
        }
        set.add(row)
        set.add(cul)
        set.add(box)
    }
}
    return true
}