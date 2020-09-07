<template>
  <button @click="$emit('deleteNote')">
  </button>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  button{
    background: url("../assets/deleteNote.png") no-repeat;
    height: 32px;
    width: 32px;
    box-sizing: border-box;
    border:none;
  }
  button:focus{
    outline: none;
  }
</style>