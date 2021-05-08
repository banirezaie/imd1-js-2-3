const btn = document.querySelector("#v2")
console.dir(btn)
// in browser you can see what you have with console.dir(btn) and you can see all event start with "on" like
//onclick , onmouseenter ,

btn.onclick = function () {
  console.log("you clicked me")
}

function scream() {
  console.log(`AAAAAAAAAAHHHHHHH`)
}

btn.onmouseenter = scream

//it doesn't work:
//this code just execute right away,
// document.querySelector("h1").onclick = alert("you clicked the h1")

//it does work:
//this code means when you click on h1, then you execute the function
document.querySelector("h1").onclick = () => alert("you clicked me")