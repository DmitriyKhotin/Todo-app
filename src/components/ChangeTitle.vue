<template>
  <input v-model="title" @focusout="save">
</template>

<script>
  export default {
    mounted() { //для сохранения заголовка при обновлении
      if (localStorage.todos) this.$store.commit("unloadLocalStorage");
    },
    props: ['index'],
    data() {
      return {
        name: ''
      }
    },
    computed: {
      title: {
        get() {
          return this.$store.state.todos[this.index].name;
        },
        set(value) {
          this.name = value;
          return value;
        }
      }
    },
    methods: {
      save() {
        this.$store.dispatch('updateNote', {index: this.index, value: this.name});
      }
    }
  }
</script>

<style scoped>

  input{
    display: flex;
    margin: auto 5px;
    background-color: #f6e464;
    box-sizing: border-box;
    border:none;
    border-radius: 15px;
    padding: 0 15px;
    font-size: 20px;
    font-weight: bold;
    width: 200px;
  }
  input:focus{
    outline: none;
  }
</style>