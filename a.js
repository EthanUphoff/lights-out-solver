// True means a light is on.
const lightOut = [[[false, true, true, true], [false, true, true, false], [true, true, false, true], [false, false, false, false]], 0, []]
const lightOut1 = [[[true, false, true, false], [true, false, true, true], [false, false, false, true], [true, false, false, false]], 0, []]
const lightOut2 = [[[true, false, true, true], [false, false, true, true], [false, true, true, false], [false, true, true, false]], 0, []]
// All examples were taken from: http://perfectweb.org/ddo/solver/vale_puzzle.html to prove validity
// We opted to use 4x4 instead of 5x5 because we were running out of memory with 5x5 examples due to it
// having a potential 25! children (supposedly 24!+1 with a-star)

// Recursively searches for the result
solve = (parent, children) => {
    if(validate(parent)){
        console.log(parent)
        return
    }
    let child = children.concat(generateChildren(parent)).sort(comparator)
    const newparent = child.shift()
    solve(newparent, child)
}

// Validates the answer
validate = (parent) => {
    for(let i = 0; i < parent[0].length; i++){
        if(parent[0][i].includes(true)){
            return false
        }
    }
    return true
}

// Generates a child for every node not clicked so far
generateChildren = (parent) => {
    let newchildren = []
    for (let i = 0; i < 4; i++){
        for (let j = 0; j < 4; j++) {
            let valid = true
            for(let k = 0; k < parent[2].length; k++){
                if(parent[2][k][0] == i && parent[2][k][1] == j){
                    valid = false
                }
            }
            if (valid) {
                const child = clickPos(parent[0], [i, j])
                newchildren.push([child, parent[1] + countLightsOn(child), parent[2].concat([[i, j]])])
            }
        }
    }
    return newchildren;
}

// Simple comparator for costs
comparator = (i, j) => {
    return i[1] - j[1]
}

// Switches the lights on/off for a given child 
clickPos = (parent, pos) => {
    let result = JSON.parse(JSON.stringify(parent));
    parent[pos[0]] != undefined && parent[pos[0]][pos[1]] != undefined  ? result[pos[0]][pos[1]] = !parent[pos[0]][pos[1]] : undefined;
    parent[pos[0]-1] != undefined  && parent[pos[0]-1][pos[1]] != undefined  ? result[pos[0]-1][pos[1]] = !parent[pos[0]-1][pos[1]] : undefined;
    parent[pos[0]+1] != undefined  && parent[pos[0]+1][pos[1]] != undefined  ? result[pos[0]+1][pos[1]] = !parent[pos[0]+1][pos[1]] : undefined;
    parent[pos[0]] != undefined  && parent[pos[0]][pos[1]-1] != undefined  ? result[pos[0]][pos[1]-1] = !parent[pos[0]][pos[1]-1] : undefined;
    parent[pos[0]] != undefined  && parent[pos[0]][pos[1]+1] != undefined  ? result[pos[0]][pos[1]+1] = !parent[pos[0]][pos[1]+1] : undefined;
    return result;
}

// Counts the number of lights on in a child to determine the cost
countLightsOn = (child) => {
    let lightsOn = 0;
    for (let i = 0; i < child.length; i++) {
        for (let j = 0; j < child[i].length; j++) {
            if (child[i][j]) lightsOn++;
        }
    }
    return lightsOn;
}

// Tests
solve(lightOut, [])
solve(lightOut1, [])
solve(lightOut2, [])