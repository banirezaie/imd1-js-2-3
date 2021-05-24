const btn = document.querySelector("#v3")
// btn.addEventListener('click', function() {})
btn.addEventListener("dblclick", () => alert("v3 clicked"))

// function twist() {
//   console.log("twist")
// }

// function shout() {
//   console.log("shout")
// }

// const tasButton = document.querySelector("#tas")

// tasButton.onclick = twist
// tasButton.onclick = shout

// tasButton.addEventListener("click", twist)
// tasButton.addEventListener("click", shout)
// tasButton.addEventListener("click", twist, { once: true })

document.querySelector("#tas").addEventListener("click" , function twist(){console.log("twist")})