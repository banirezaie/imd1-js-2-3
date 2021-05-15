const button = document.querySelector("button");
const h1 = document.querySelector("h1");

const randColor = () => (newColor = `rgb(${randNum()}, ${randNum()}, ${randNum()})`);
const randNum = () => Math.floor(Math.random() * 256);

button.addEventListener("click", () => {
	const newColor = randColor();
	document.body.style.backgroundColor = newColor;
	h1.innerText = newColor;
});
