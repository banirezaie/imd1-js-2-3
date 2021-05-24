const randomColor = () =>{
  const r = Math.floor(Math.random()*255)
  const g = Math.floor(Math.random()*255)
  const b = Math.floor(Math.random()*255)
  return `rgb(${r},${g},${b})`
}

//change color of background color of button
// const button =  document.querySelectorAll("button")

// for(let btn of button){
//   btn.addEventListener("click", function() {
//     // console.log(e) //  (mouse event ) show me that where i cilck my mouse on button
//     //e.target => found botten for us
//     btn.style.backgroundColor = randomColor()
//   })
// }

//change background color of h1
// const h1s = document.querySelectorAll("h1")

// for(let h1 of h1s){
//   h1.addEventListener("click", function(){
//     h1.style.backgroundColor = randomColor()
//   })
// }



//change text color of btn and h1

const button =  document.querySelectorAll("button")
for(let btn of button){
  btn.addEventListener("click", colorChange)
}

const h1s = document.querySelectorAll("h1")
for(let h1 of h1s){
  h1.addEventListener("click", colorChange)
}

function colorChange(){
  this.style.backgroundColor = randomColor()
  this.style.color = randomColor()
}





// const texts = document.querySelectorAll("button", "h1")

// for(let text of texts){
//   text.addEventListener("click", ()=>{
//     text.style.color = randomColor()
//   })
// }



// const makeRandColor = () => {
//   const r = Math.floor(Math.random() * 255)
//   const g = Math.floor(Math.random() * 255)
//   const b = Math.floor(Math.random() * 255)
//   return `rgb(${r}, ${g}, ${b})`
// }

// const buttons = document.querySelectorAll("button")

// for (let button of buttons) {
//   button.addEventListener("click", colorize)
// }

// const h1s = document.querySelectorAll("h1")
// for (let h1 of h1s) {
//   h1.addEventListener("click", colorize)
// }

// function colorize() {
//   this.style.backgroundColor = makeRandColor()
//   this.style.color = makeRandColor()
// }
