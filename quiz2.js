/*
Make a shopping list with their quantity:

you should follow the below steps:

 - Listen for the for submission
 - When the form is submitted, prevent the default behaviour
 - Grab the quantity input value and the product input value
 - Create a new <li> element. Set the text in the new <li></li> to include the 
   quantity and product name from the form
 - Append the new <li></li> to the <ul></ul> on the page
 - Reset inputs

*/

document.querySelector("form").addEventListener("submit", (event) => {
	event.preventDefault();
	const form = document.querySelector("form");
	const list = document.querySelector("#list");
	const product = form.elements.product.value;
	const qty = form.elements.qty.value;

	const li = document.createElement("li");
	const b = document.createElement("b");

	b.append(product);
	li.append(b);
	li.append(` - #${qty}`);
	list.appendChild(li);

	form.elements.product.value = "";
	form.elements.qty.value = "";
});
