<template>
  <div>
    <button
      @click="$emit('changeShow', item.id)"
      :class="{selected: item.show}"
    >
      {{item.name}}
    </button>
  </div>
</template>

<script>
  export default {
    props: ['item']
  }
</script>

<style scoped>
  button{
    width: 20vh;
    min-height: 5vh;
    display: block;
    border-radius: 10px;
    border: 1px solid gray;
    margin-bottom: 2px;
    background-color: #ffffff;
    text-align: left;
    padding: 5px;
  }
  button:focus{
    outline: none;
  }
  .selected{
    border: 2px solid black;
  }
</style>