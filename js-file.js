// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const paragraph = document.createElement("p");
paragraph.style.color = "red";
paragraph.textContent = "Hi I'm red";

const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I'm a blue h3, bitch!";

const nestedDiv = document.createElement("div");
nestedDiv.setAttribute("style", "background-color: pink; border-style: solid; border-color: black;");

const innerH1 = document.createElement("h1");
innerH1.textContent = "I'm in a div!";

const innerP = document.createElement("p");
innerP.textContent ="ME TOO!";

nestedDiv.appendChild(innerH1);
nestedDiv.appendChild(innerP);

container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(h3);
container.appendChild(nestedDiv);

function alertFunction() {
  alert("YAY! YOU DID IT!");
}
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => console.log(button.id));
    });

