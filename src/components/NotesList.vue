<template>
  <div class="notes">
    <NotesItem v-for="todo in todos" :key="todo.id" :item="todo"
               @changeShow="changeShow"/>
  </div>
</template>

<script>
  import NotesItem from "./NotesItem";
  export default {
    props: ['todos'],
    components: {
      NotesItem
    },
    methods: {
      changeShow(id) {
        this.$emit('changeShow', id)
      }
    }
  }
</script>

<style scoped>
  .notes{
    overflow-Y: auto;
    height: 536px;
    box-sizing: border-box;
  }
</style>