// True means a light is on.
const lightOut = [[[false, true, false, true, false], [false, true, false, true, true], [true, false, true, false, true], [true, false, false, true, false], [false, true, true, false, true]], 0, []]

solve = (parent, children) => {
    let child = children.concat(generateChildren(parent)).sort(comparator)
    console.log(child)
    //children = children.concat(generateChildren(parent, clicked)).sort((child1, child2) => countLightsOn(child1) - countLightsOn(child2));
}

/*generateChildren(parent) {
    let children = [];
    for (let i = 0; i < posToCareAbout.length; i++) {
        let valid = true;
        for (let j = 0; i < clicked.length; j++) {
            if (posToCareAbout[i][0] == clicked[j][0] && posToCareAbout[i][1] == clicked[j][1]) {
                valid = false;
                break;
            }
        }
        if (valid) {
            children.push(clickPos(parent, posToCareAbout[i]));
        }
    }
    return children;
}*/

generateChildren = (parent) => {
    let newchildren = []
    console.log(parent)
    for (let i = 0; i < 5; i++){
        for (let j = 0; j < 5; j++) {
            let valid = true
            for(let k = 0; k < parent[2].length; k++){
                if(parent[2][k][0] == i && parent[2][k][1] == j){
                    valid = false
                }
            }
            if (valid) {
                const child = clickPos(parent[0], [i, j])
                newchildren.push([child, parent[1] + countLightsOn(child), parent[2].concat([i, j]) ])
            }
        }
    }
    return newchildren;
}

comparator = (i, j) => {
    return i[1] - j[1]
}

clickPos = (parent, pos) => {
    let result = parent;
    parent[pos[0]] != undefined && parent[pos[0]][pos[1]] != undefined  ? result[pos[0]][pos[1]] = !parent[pos[0]][pos[1]] : undefined;
    parent[pos[0]-1] != undefined  && parent[pos[0]-1][pos[1]] != undefined  ? result[pos[0]-1][pos[1]] = !parent[pos[0]-1][pos[1]] : undefined;
    parent[pos[0]+1] != undefined  && parent[pos[0]+1][pos[1]] != undefined  ? result[pos[0]+1][pos[1]] = !parent[pos[0]+1][pos[1]] : undefined;
    parent[pos[0]] != undefined  && parent[pos[0]][pos[1]-1] != undefined  ? result[pos[0]][pos[1]-1] = !parent[pos[0]][pos[1]-1] : undefined;
    parent[pos[0]] != undefined  && parent[pos[0]][pos[1]+1] != undefined  ? result[pos[0]][pos[1]+1] = !parent[pos[0]][pos[1]+1] : undefined;
    //console.log(pos)
    //console.log(result)
    //console.log(!parent[pos[0]][pos[1]])
    return result;
}

countLightsOn = (child) => {
    let lightsOn = 0;
    for (let i = 0; i < child.length; i++) {
        for (let j = 0; j < child[i].length; j++) {
            if (child[i][j]) lightsOn++;
        }
    }
    return lightsOn;
}

solve(lightOut, [])