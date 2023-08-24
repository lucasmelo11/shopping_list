// FUNÇÃO QUE ADICIONA ITEM
function addItem() {
  const fieldIsertItem = document.getElementById("insert-item");
  // contador que cria um id para cada elemento da lista
  var countId = document.getElementById("item-list").childElementCount + 1;

  // cria novo item da lista
  var newItem = document.createElement("li");
  newItem.id = "item-" + countId;

  // adiciona a lista de itens no elemento <ul> da página
  var list = document.getElementById("item-list");
  list.appendChild(newItem);

  // adiciona um checkbox para cada item da lista
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  newItem.appendChild(checkbox);

  // adiciona o nome digitado no campo fieldIsertItem como label do item
  var textItem = document.createTextNode(fieldIsertItem.value);
  newItem.appendChild(textItem);

  // adiciona botão para excluir o item da lista
  var btnDelItem = document.createElement("button");
  btnDelItem.id = "delete-item-btn-" + countId;
  btnDelItem.classList.add("delete-btn");
  btnDelItem.innerHTML = '<i class="fa-solid fa-trash"></i>';
  newItem.appendChild(btnDelItem);
  btnDelItem.addEventListener("click", function () {
    newItem.remove();
  });

  // adiciona botão para editar o item da lista
  var btnEditItem = document.createElement("button");
  btnEditItem.classList.add("edit-btn");
  btnEditItem.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
  newItem.appendChild(btnEditItem);

  // Habilita edição do item
  btnEditItem.addEventListener("click", function () {
    // cria uma classe para verificar se o campo está em edição
    if (newItem.classList.contains("editing")) {
      return;
    }
    newItem.classList.add("editing");
    
    // cria um campo de input para editar o elemento
    var inputEditItem = document.createElement("input");
    inputEditItem.type = "text";
    inputEditItem.value = textItem.textContent;
    newItem.replaceChild(inputEditItem, textItem);

    // colocar o cursor no campo criado
    inputEditItem.focus();

    // insere o valor do input criado ao apertar ENTER
    inputEditItem.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        var newTextItem = document.createTextNode(inputEditItem.value);
        newItem.replaceChild(newTextItem, inputEditItem);
        newItem.classList.remove("editing");
      }
    });
  });

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
  } else {
    this.parentNode.classList.remove("item-checked");
  }
}
