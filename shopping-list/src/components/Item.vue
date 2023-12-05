<template>
  <div class="container-content">
    <div class="container-check"><input type="checkbox"></div>
    <div class="container-objeto"><p>Este é um objeto</p></div>
    <div class="container-options">
        <img src="../assets/edit_icon.svg" alt="Botão para excluir o item da lista">
        <img src="../assets/delete_icon.svg" alt="Botão para excluir o item da lista">
    </div>
  </div>
</template>

<script>
    export default{
        name: 'ItemModel'
    }
</script>

<style>
.container-content{
  display: flex;
  justify-content: left;
  margin-bottom: 5px;
  /* background: red; */
  /* border-radius: 10px; */
  /* width: 350px; */
  border-radius: 5px;
  background: pink;
}

.container-check{
  display: flex;
  justify-content:center;
  width:10%;
  /* height:fill; */
  /* background: yellow; */
}

.container-objeto{
    width: 65%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container-options{
  display: flex;
  justify-content:center;
  align-items: center;
  width:25%;
  margin-right: 5px;
  /* height:auto; */
  /* background: purple; */
}
img{
    width: 20px;
    height: 18px;
    margin: 0px 2px;
    padding: 5px;
    border-radius: 10px;
    background: var(--color-tertiary)
}
</style>