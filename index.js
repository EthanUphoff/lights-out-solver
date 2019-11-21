// false = on
const helloWorld = [[false, false, false, false, false], [false, false, false, false, false], [false, false, false, false, false], [false, false, false, false, false], [false, false, false, false, false]]
// const lightout = [[false, true, false, true, false], [false, true, false, true, true], [true, false, true, false, true], [true, false, false, true, false], [false, true, true, false, true]]
const posarr = [[0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0]]
//let clicked = []
const solution = [];

validate = (l) => {
  let i = 0;
  do {
    if(l[i].includes(true)){
      return false
    }
    i++
  } while (i < 5)
  return true
}

// for every true, check the number of trues around it, prioritize trues with more values around them.
// return negative if x < y, positive x > y, 0 x=y
comparator = (x, y) => {

}

solve = (Parent) => {
  console.log(Parent)
  let posToCareAbout = [];
  for (let i = 0; i < Parent[1].length; i++) {
    for (let j = 0; j < Parent[1][i].length; j++) {
      posToCareAbout = insertIntoPosArr(posToCareAbout, generateVal(i, j, Parent[1]))
    }
  }
  let children = genChildren(posToCareAbout, Parent)
  for (let i = 0; i < children.length; i++) {
    solution.push(children[i]);
    console.log(children[i])
    if (validate(children[i][1]) || solve(children[i])) {
      return true;
    } else {
      solution.pop()
    }
  }
  return false;
}

genChildren = (switchArr, Parent) => {
  let children = [];
  for (let i = 0; i < switchArr.length; i++) {
    let valid = true
    for (let j = 0; j < Parent[2].length; j++) {
      for (let k = 0; k < Parent[2][j].length; k++) {
        if (switchArr[i][0] == Parent[2][j] && switchArr[i][1] == Parent[2][j][k]) {
          valid = false;
          break;
        }
      }
      if (!valid) {
        break;
      }
    }
    if (valid) {
      children.push(switchArr[i]);
    }
  }
  return children
}

insertIntoPosArr = (arr, pos) => {
  let returnArr = [];
  if (arr.length == 0) {
    //console.log("H")
    returnArr[0] = pos;
    return returnArr;
  }
  let i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i][1] < pos[1]) {
      returnArr.push(pos)
      break
    } else {
      returnArr.push(arr[i])
    }
  }
  for (i = i; i < arr.length; i++) {
    returnArr.push(arr[i])
  }
  return returnArr
}

generateVal = (i, j, lightout) => {
  let val = 1;
  lightout[i] && lightout[i][j] ? val++ : undefined
  lightout[i-1] && lightout[i-1][j] ? val++ : undefined
  lightout[i+1] && lightout[i+1][j] ? val++ : undefined
  lightout[i] && lightout[i][j-1] ? val++ : undefined
  lightout[i] && lightout[i][j+1] ? val++ : undefined
  return val
}

switching = (i, j) => {
  lightout[i-1] && lightout[i-1][j] ? lightout[i-1][j] = !lightout[i-1][j] : undefined
  lightout[i+1] && lightout[i+1][j] ? lightout[i+1][j] = !lightout[i+1][j] : undefined
  lightout[i] && lightout[i][j-1]  ? lightout[i][j-1] = !lightout[i][j-1] : undefined
  lightout[i] && lightout[i][j+1] ? lightout[i][j+1] = !lightout[i][j+1] : undefined
  lightout[i][j] = !lightout[i][j]
  //clicked.push([i,j])
  //console.log(clicked)
}

solve([0, helloWorld, []])

validate(lightout)
//validate(truearr)