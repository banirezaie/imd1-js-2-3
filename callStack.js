// copy this code in:
// http://latentflip.com/loupe
// and chrome debugger!!!
/* 1.the mechanism the js interperter users to keep track of its place in a script
that calls multiple functions

2. how js knows what function is currently being run and what functions are 
called from whith in that function, ect.*/


function multiply(x, y) {
  return x * y
}

function square(x) {
  return multiply(x, x)
}

function isRightTriangle(a, b, c) {
  return square(a) + square(b) === square(c)
}
// console.log("before")

isRightTriangle(3, 4, 5)

// console.log("done!!!")
