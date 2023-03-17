function addItem() {
  let fieldItem = document.getElementById("insert-item");

  let elInput = document.createElement("input");
  elInput.setAttribute("type", "checkbox");
  elInput.setAttribute("id", "item");

  let elLabel = document.createElement("label");
  elLabel.setAttribute("for", "item");
  elLabel.innerText = fieldItem.value;

  let elDiv = document.getElementsByClassName("item-list")[0];
  elDiv.appendChild(elInput);
  elDiv.appendChild(elLabel);

  fieldItem.value = "";

  console.log("clicou");
}

// terminar função de remover item da lista

let item = document.getElementById("item");
let div = document.getElementsByClassName("item-list");

item.addEventListener("change", function () {
  if (item.checked) {
    item.remove();
  }
});
