/*
Time to work with input events

follow these steps:
- the h1 should start with the text "Enter your Username" (it should be already done, just check it)
- Whenever an input event is fired on the input element, update the h1 so that it displays "Welcome, " plus
current value of the form the text input.
- if the input goes back to being empty, update the h1 so that it once gain says "Enter your Username"
*/

const h1 = document.querySelector("h1")
const input = document.querySelector("#username")

input.addEventListener("input", () => {
    h1.innerHTML = `Wellcome! ${input.value}`
})


input.addEventListener("change", () =>{
    if(input.value === ""){h1.innerHTML = "Enter Your Username"}
})
