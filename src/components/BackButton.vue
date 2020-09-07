<template>
  <button @click="$emit('reShowModal')">
  </button>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  button{
    margin-top: 14px;
    background: url("../assets/back.png");
    height: 32px;
    width: 32px;
    box-sizing: border-box;
    border:none;
  }
  button:focus{
    outline: none;
  }
</style>