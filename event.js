// document.querySelector("button").addEventListener("click", function (evt) {
  //check out what you have on you console
  // console.log(evt)
// })


const input = document.querySelector("input")
// input.addEventListener("keyup", () => {
//   console.log("keyup")
// })


// input.addEventListener("keydown", e => {
  // console.log(e)
  //importent
  // console.log(e.key)
  // console.log(e.code)
  // console.log("keydown")
// })





input.addEventListener("keydown", e => {
  switch (e.code) {
    case "ArrowUp":
      console.log("UP!")
      break
    case "ArrowDown":
      console.log("DOWN!")
      break
    case "ArrowLeft":
      console.log("Left!")
      break
    case "ArrowRight":
      console.log("Right!")
      break
    default:
      console.log("IGNORED")
  }
})
