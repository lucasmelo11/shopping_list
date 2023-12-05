<template>
    <div class="container-items">
        <ul id="item-list">
            <ItemModel/>
            <ItemModel/>
            <ItemModel/>
            <ItemModel/>
            <ItemModel/>
            <ItemModel/>
            <ItemModel/>
        </ul>
    </div>  
</template>

<script>
    import ItemModel from './Item.vue'
    export default {
        name: 'ItemList',
        components:{
            ItemModel
        }
    };
</script>

<style>

.container-items {
  height: auto;
  width: 430px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-radius: 10px;
  margin: 0px 10px 10px 10px;
  padding: 10px;
  /* background: var(--color-main) */
}

#item-list {
  width: 100%;
  height: auto;
  padding: 10px;
  margin: 0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  background-color: var(--color-alternative);
  list-style-position: outside;
  list-style-type: none;
}
</style>