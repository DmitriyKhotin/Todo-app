<template>
    <div class="container">
      <div class="content">
        <input type="checkbox" @change="changeCheckbox" :checked="this.todo.completed">
        <TodoItem class="item" :item="todo" :id="todo.id" :noteId="''"/>
        <DeleteTodo @delete="$emit('deleteTodo', todo.id)"/>
      </div>
      <hr>
    </div>
</template>

<script>
  import TodoItem from "./TodoItem";
  import DeleteTodo from "./DeleteTodo";
  export default {
    components: {
      DeleteTodo,
      TodoItem
    },
    props:['todo', 'idNote'],
    methods: {
      changeCheckbox() {
        this.$store.dispatch("changeCheckbox", {id: this.todo.id, index: this.idNote});
      }
    }
  }
</script>

<style scoped>
  .container{
    margin-top: 10px;
  }
  .content{
    display: flex;
    padding: 5px 10px;
  }
  .item{
    margin-left: 5px;
  }
  input[type=checkbox] {
    transform: scale(1.25);
  }

</style>