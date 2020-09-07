<template >
    <div v-if="todo.show">
        <router-link class="change" :to="'/change/' + todo.id" tag="button"/>
    </div>
</template>

<script>
  export default {
      props: ['todo']
  }
</script>

<style scoped>
  .change{
    background: url("../assets/edit.png");
    height: 32px;
    width: 32px;
    box-sizing: border-box;
    border:none;
  }
  .change:focus{
    outline: none;
  }
</style>