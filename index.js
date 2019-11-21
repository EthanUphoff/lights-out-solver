// false = on
// const lightout = [[false, false, false, false, false], [false, false, false, false, false], [false, false, false, false, false], [false, false, false, false, false], [false, false, false, false, false]]
const lightout = [[false, true, false, true, false], [false, true, false, true, true], [true, false, true, false, true], [true, false, false, true, false], [false, true, true, false, true]]
const posarr = [[0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0]]
let clicked = []

validate = (l) => {
  let i = 0;
  do {
    if(l[i].includes(false)){
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

solve = () => {
  let posToCareAbout = [];
  for (i = 0; i < lightout.length; i ++) {
    for (j = 0; j < lightout[i].length; j++) {
        posToCareAbout = insertIntoPosArr(posToCareAbout, [[i, j], generateVal(i, j)])
        posToCareAbout.forEach(pos => {
          //console.log(clicked)
          //console.log([pos[0][0],pos[0][1]])
          //console.log(!clicked.includes([pos[0][0], pos[0][1]]))
          //console.log([[0,0]].includes([0,0]))
          let include = true
          clicked.forEach(click => {
            if(click[0] == pos[0][0] && click[1] == pos[0][1]){
              include = false
            }
          })
          if (include) {
            switching(pos[0][0], pos[0][1])
            console.log(lightout)
          }
        }
        )
    }
  }
  if(!validate(lightout)){
    solve()
  } else {
    console.log(lightout)
  }
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

generateVal = (i, j) => {
  let val = 1;
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
  clicked.push([i,j])
  //console.log(clicked)
}

solve()

validate(lightout)
//validate(truearr)