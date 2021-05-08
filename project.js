const button = document.querySelector("button")
const h1 = document.querySelector("h1")

// these are same:
// document.querySelector('body')
// document.body
// rgb(0, 255, ??? )

button.addEventListener("click", () => {
  //   console.log("clicked me")
  // document.body.style.backgroundColor = "olive";
  const newColor = randomColor()
  document.body.style.backgroundColor = newColor
  h1.innerText = newColor
})

const randomColor = () => {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)
  return (newColor = `rgb(${r}, ${g}, ${b})`)
}
