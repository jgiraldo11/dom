const bodyElement = document.body;

// Append 
bodyElement.append("Hello Universe");

// Append Child
const divElement = document.createElement("div");
const strongElement = document.createElement("strong");
strongElement.textContent = "  Hello Div  "
divElement.append(strongElement);
//divElement.innerText = "    <strong>Hello Div</strong>  ";
//divElement.textContent = "<strong>Hello Div!!</strong><script>alert('you've been hacked');</script>"
bodyElement.appendChild(divElement);

divElement.remove();
divElement.append(strongElement);


