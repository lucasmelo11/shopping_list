// FUNÇÃO QUE ADICIONA ITEM
function addItem() {
  // campo para inserir o nome do item
  const fieldIsertItem = document.getElementById("insert-item");
  // contador que cria um id para cada elemento da lista
  var countId = document.getElementById("item-list").childElementCount + 1;

  // cria novo item da lista
  var newItem = document.createElement("li");
  newItem.id = "item-" + countId;

  // adiciona o nome digitado no campo fieldIsertItem como label do item
  var textItem = document.createTextNode(fieldIsertItem.value);
  newItem.appendChild(textItem);

  // adiciona a lista de itens no elemento <ul> da página
  var list = document.getElementById("item-list");
  list.appendChild(newItem);

  // adiciona um checkbox para cada item da lista
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  newItem.appendChild(checkbox);
  newItem.insertBefore(textItem, checkbox.nextSibling);

  // adiciona um evento de click e chama a função para verificar se está marcado
  checkbox.addEventListener("click", testCheckbox);

  // limpa o campo de inserir nome do item
  fieldIsertItem.value = "";

  console.log("clicou");
}

// FUNÇÃO QUE TESTA O CHECKBOX
function testCheckbox() {
  if (this.checked) {
    this.parentNode.classList.add("item-checked");
    console.log("marcou");
  } else {
    this.parentNode.classList.remove("item-checked");
    console.log("desmarcou");
  }
}
