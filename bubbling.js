const button = document.querySelector("#changeColor")
const container = document.querySelector("#container")

button.addEventListener("click", function (e) {
  container.style.backgroundColor = makeRandColor()

  /*stopPropagation() The stopPropagation() method of the Event 
  interface prevents further propagation of the current event in the 
  capturing and bubbling phases. It does not, however, prevent 
  any default behaviors from occurring; for instance, 
  clicks on links are still processed*/
  
  e.stopPropagation() 
})


container.addEventListener("click", function () {
  container.classList.toggle("hide")
})



const makeRandColor = () => {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)
  return `rgb(${r}, ${g}, ${b})`
}
