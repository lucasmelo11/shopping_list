function addItem() {
  let fieldItem = document.getElementById("insert-item");

  let elInput = document.createElement("input");
  elInput.setAttribute("type", "checkbox");
  elInput.setAttribute("id", "item");
  elInput.addEventListener("change", removeItem);

  let elLabel = document.createElement("label");
  elLabel.setAttribute("for", "item");
  elLabel.innerText = fieldItem.value;

  let elDiv = document.getElementsByClassName("item-list")[0];
  elDiv.appendChild(elInput);
  elDiv.appendChild(elLabel);

  fieldItem.value = "";

  console.log("clicou");
}
