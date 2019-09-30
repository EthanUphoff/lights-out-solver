let sudoku = require('sudoku')
let children = []
let sudokumap = {1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9}
let sudokutest = sudoku.makepuzzle().map(x => x === null ? sudokumap : x+1)

const depthfirst = (children) => {
    children.unshift(children)
}

const solve = () => {
    for (i = 0; i < sudokutest.length; i++){
        if ((typeof x) !== 'number'){
            
        }
    }
    console.log(sudokutest)
}

const checkrowsandcolumns = (index, node) => {
    const rowpos = index - (index % 9)
}

solve()