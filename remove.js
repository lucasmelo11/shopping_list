function removeItem() {
  const item = document.getElementById("item");
  //   const div = document.getElementsByClassName("item-list");
  if (item.checked) {
    item.remove();
    item.parentNode.removeChild(document.querySelector('label[for="item"]'));
    console.log("Checkbox marcado");
  } else {
    console.log("Checkbox desmarcado");
  }
}

// corrigir remoção do label