function addItem() {
  const fieldItem = document.getElementById("insert-item");

  const elInput = document.createElement("input");
  elInput.setAttribute("type", "checkbox");
  elInput.setAttribute("id", "item");
  elInput.addEventListener("change", removeItem);

  const elLabel = document.createElement("label");
  elLabel.setAttribute("for", "item");
  elLabel.innerText = fieldItem.value;

  const elDiv = document.getElementsByClassName("item-list")[0];
  elDiv.appendChild(elInput);
  elDiv.appendChild(elLabel);

  fieldItem.value = "";

  console.log("clicou");
}
