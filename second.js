const btn = document.querySelector("#v3")

btn.addEventListener("dblclick", () => alert("v3 clicked"))

function twist() {
  console.log("twist")
}

function shout() {
  console.log("shout")
}

const tasButton = document.querySelector("#tas")

// tasButton.onclick = twist
// tasButton.onclick = shout

// tasButton.addEventListener("click", twist)
// tasButton.addEventListener("click", twist, { once: true })
// tasButton.addEventListener("click", shout)
