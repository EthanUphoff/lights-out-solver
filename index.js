// false = on
const lightout = [[false, false, false, false, false], [false, false, false, false, false], [false, false, false, false, false], [false, false, false, false, false], [false, false, false, false, false]]
const truearr = [[true, true, true, true, true], [true, true, true, true, true], [true, true, true, true, true], [true, true, true, true, true], [true, true, true, true, true]]
const posarr = [[0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0]]

validate = (l) => {
  let i = 0;
  do {
    if(l[i].includes(false)){
      console.log(false)
      return
    }
    i++
  } while (i < 5)
  console.log(true)
}

// for every true, check the number of trues around it, prioritize trues with more values around them.
// return negative if x < y, positive x > y, 0 x=y
comparator = (x, y) => {

}

solve = () => {
  let posToCareAbout = [];
  for (i = 0; i < lightout.length; i ++) {
    for (j = 0; j < lightout[i].length; j++) {
      if (!lightout[i][j]) {
        insertIntoPosArr(posToCareAbout, [[i, j], generateVal(i, j)])
      }
    }
  }
}

insertIntoPosArr = (arr, pos) => {
  let returnArr = [];
  if (arr.length == 0) {
    arr[0] = pos;
    return;
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
  lightout[i-1] && lightout[i-1][j] && !lightout[i-1][j] ? val++ : undefined
  lightout[i+1] && lightout[i+1][j] && !lightout[i+1][j] ? val++ : undefined
  lightout[i] && lightout[i][j-1] && !lightout[i][j-1] ? val++ : undefined
  lightout[i] && lightout[i][j+1] && !lightout[i][j+1] ? val++ : undefined
  return val
}

switching = (i, j) => {
  lightout[i-1] && lightout[i-1][j] && !lightout[i-1][j] ? val++ : undefined
  lightout[i+1] && lightout[i+1][j] && !lightout[i+1][j] ? val++ : undefined
  lightout[i] && lightout[i][j-1] && !lightout[i][j-1] ? val++ : undefined
  lightout[i] && lightout[i][j+1] && !lightout[i][j+1] ? val++ : undefined
}

validate(lightout)
validate(truearr)