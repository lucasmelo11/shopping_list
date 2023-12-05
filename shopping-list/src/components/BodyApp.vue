<template>
  <div>
    <section>
      <div class="title-list">
        <h1>Shopping List</h1>
      </div>
    </section>

    <section id="section-main">
      <div class="container-main">
        <div class="container-input">
          <div class="container-add-item">
            <input type="text" id="insert-item" placeholder="insira um item" />
            <div class="container-btn">
              <button id="btn-add-item">+</button>
            </div>  
          </div>
        </div>
        <div class="container-item-list">
          <ItemList />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ItemList from './ItemList.vue';

export default {
        name: 'BodyApp',
        components:{
            ItemList,
        }
    }
</script>

<style>
:root {
  font-family: "Inter", sans-serif;
  font-family: "Montserrat", sans-serif;
  --color-bg-default: #ffff;
  --color-main: #12538e;
  --color-secondary: #0c2d48;
  --color-tertiary: #2e8bc0;
  --color-alternative: #b1d4e0;
  --color-success: #2e9e38;
  --color-alert: #c83c3c;
  --color-text: #494848;
  --color-item-check: rgb(116, 116, 116);
}

.title-list {
  margin: auto;
  width: 30vh;
  height: 20%;
  padding: 0px 20px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-bg-default);
  background-color: var(--color-main);
}

.container-main {
  margin: 10px auto 0 auto;
  width: 30vw;
  height: auto;
  min-height: 50vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  background-color: var(--color-secondary);
}
@media (max-width: 768px) {
  .container-main {
    width: 100%;
  }
}
.container-item-list {
  display: flex;
  justify-content: center;
  /* background: purple; */
}
.container-add-item {
  height: 35px;
  width: auto;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  /* background-color: #bc3908; */
}

#insert-item {
  height: 25px;
  width: 80%;
  padding-left: 10px;
  border-radius: 5px;
  border-style: none;
}

.container-btn {
  height: auto;
  width: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

#btn-add-item {
  width: 200px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-bg-default);
  border-style: none;
  border-radius: 20px;
}
</style>