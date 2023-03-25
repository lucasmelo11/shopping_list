function removeItem() {
  const item = document.querySelectorAll('input[type="checkbox"]'); 
  if (item.checked) {
    console.log("existe");
  } else {
    console.log("não existe");
  }
}