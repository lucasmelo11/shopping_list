let item = document.getElementById("item");

function addItem() {
  let elInput = document.createElement("input");
  elInput.setAttribute("type", "text");

  let elLabel = document.createElement("label");
  elLabel.setAttribute("for", "my-item");
  elLabel.innerText = "my input";
  elLabel.appendChild(elInput);

  let elDiv = document.getElementsByClassName("item-list")[0];
  elDiv.appendChild(elInput);

  console.log("clicou");
}
