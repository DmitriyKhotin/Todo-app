<template>
  <button @click="$emit('delete')"/>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  button {
    background: url("../assets/deleteTodo.png");
    height: 16px;
    width: 16px;
    box-sizing: border-box;
    border:none;
  }
  button:focus{
    outline: none;
  }
</style>