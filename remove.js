function removeItem() {
  const item = document.querySelectorAll('input[type="checkbox"]'); 
  if (item.checked) {
    console.log("existe");
  } else {
    console.log("não existe");
  }
}

// itemCheckbox.forEach(function (checkbox) {
//   if (checkbox.checked) {
//     const itemAtual = checkbox;
//     const divItemsList = item.parentNode;

//     itemAtual.remove();
//     divItemsList.removeChild(document.querySelector('label[for="item"]'));
//     console.log("Checkbox marcado");
//   } else {
//     console.log("Checkbox desmarcado");
//   }
// });
