const p = document.createElement("p");
p.style.color = "red";
p.textContent = "Hey I'm red!"
container.appendChild(p);

const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!"
container.appendChild(h3);

const div = document.createElement("div");
const h1 = document.createElement("h1");
const divP = document.createElement("p");
h1.textContent = "I'm in a div";
divP.textContent = "ME TOO!";
div.appendChild(h1);
div.appendChild(divP);
div.style.borderColor = "black";
div.style.backgroundColor = "pink";
container.appendChild(div);
