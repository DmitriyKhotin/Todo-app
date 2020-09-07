<template>
  <div class="modal-wrapper">
    <div class="modal-container">
      <p>Вы уверены?</p>
      <button @click="$emit('No')">
        Нет
      </button>
      <button  @click="$emit('Yes')">
        Да
      </button>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  .modal-wrapper{
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    background-color: rgba(0, 0, 0, .3);
  }
  .modal-container{
    height: 100px;
    background-color: #ffffff;
    width: 200px;
    display: table;
    margin: 250px auto;
    padding-top: 30px;
    text-align: center;
    font-size: 20px;
  }
  button{
    margin: 22px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: none;
    background-color: rgba(195, 186, 186, 0.99);
  }
  button:focus{
    outline: none;
  }
</style>