//use addEventListener()
//add a click listener to each button, so when you click on each button console log hello and goodbye

document
  .getElementById("hello")
  .addEventListener("click", () => console.log("Hello"))

document.querySelector("#goodbye").addEventListener("click", function () {
  console.log("goodbye")
})