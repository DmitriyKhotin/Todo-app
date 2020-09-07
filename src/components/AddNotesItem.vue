<template>
  <div class="form">
    <input id="input" v-model="name" placeholder="Новая заметка" v-on:keyup.enter="AddNotesItem">
    <button @click="AddNotesItem"/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: ''
      }
    },
    methods: {
      AddNotesItem() {
        if (this.name === '') {
          let input = document.getElementById('input');
          input.placeholder = 'Заметка пустая';
        }
        else {
          this.$emit('addNotesItem', this.name);
          this.name = '';
        }
      }
    }
  }
</script>

<style scoped>
  .form{
    display:flex;
    margin: auto 0;
  }
  input{
    height: 34px;
    width: 150px;
    border-radius: 15px;
    border: none;
    background-color: #f7e895;
    padding-left: 15px;
    margin-right: 5px;
  }
  button {
    background: url("../assets/addNote.png") no-repeat #f8d71c;
    height: 32px;
    width: 32px;
    box-sizing: border-box;
    border:none;
    border-radius: 50%;
    margin: auto 8px;
  }
  button, input:focus{
    outline: none;
  }
</style>