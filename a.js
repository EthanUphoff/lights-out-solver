// True means a light is on.
const lightOut = [[[false, true, true, true], [false, true, true, false], [true, true, false, true], [false, false, false, false]], 0, []]
const lightOut1 = [[[true, false, true, false], [true, false, true, true], [false, false, false, true], [true, false, false, false]], 0, []]
const lightOut2 = [[[true, false, true, true], [false, false, true, true], [false, true, true, false], [false, true, true, false]], 0, []]


solve = (parent, children) => {
    if(validate(parent)){
        console.log(parent)
        return
    }
    let child = children.concat(generateChildren(parent)).sort(comparator)
    //console.log(child)
    const newparent = child.shift()
    solve(newparent, child)
    //children = children.concat(generateChildren(parent, clicked)).sort((child1, child2) => countLightsOn(child1) - countLightsOn(child2));
}

validate = (parent) => {
    for(let i = 0; i < parent[0].length; i++){
        if(parent[0][i].includes(true)){
            return false
        }
    }
    return true
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
    //console.log(parent)
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
                //console.log(newchildren[2])
            }
        }
    }
    return newchildren;
}

comparator = (i, j) => {
    return i[1] - j[1]
}

clickPos = (parent, pos) => {
    let result = JSON.parse(JSON.stringify(parent));
    parent[pos[0]] != undefined && parent[pos[0]][pos[1]] != undefined  ? result[pos[0]][pos[1]] = !parent[pos[0]][pos[1]] : undefined;
    parent[pos[0]-1] != undefined  && parent[pos[0]-1][pos[1]] != undefined  ? result[pos[0]-1][pos[1]] = !parent[pos[0]-1][pos[1]] : undefined;
    parent[pos[0]+1] != undefined  && parent[pos[0]+1][pos[1]] != undefined  ? result[pos[0]+1][pos[1]] = !parent[pos[0]+1][pos[1]] : undefined;
    parent[pos[0]] != undefined  && parent[pos[0]][pos[1]-1] != undefined  ? result[pos[0]][pos[1]-1] = !parent[pos[0]][pos[1]-1] : undefined;
    parent[pos[0]] != undefined  && parent[pos[0]][pos[1]+1] != undefined  ? result[pos[0]][pos[1]+1] = !parent[pos[0]][pos[1]+1] : undefined;
    //console.log("PARENT")
    //console.log(parent)
    //console.log("RESULT")
    //console.log(result)
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
solve(lightOut1, [])
solve(lightOut2, [])