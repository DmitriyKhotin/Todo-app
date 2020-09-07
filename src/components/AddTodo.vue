<template>
  <button @click="$emit('add')"/>
</template>

<script>
  export default {
    name: "AddButton"
  }
</script>

<style scoped>
  button {
    background: url("../assets/addTodo.png");
    height: 32px;
    width: 32px;
    box-sizing: border-box;
    border:none;
    margin: auto 3px;
    margin-left: 120px;
  }
  button:focus{
    outline: none;
  }
</style>