<template>
    <div>
      <!--Так как компонент используется для двух разных страниц, причем в HomePage Todo не должен изменяться,
      а в ChangePage должен, то readonly зависит от path-->
      <textarea class="text"
                :readonly="unchangeable"
                v-model="title"
                @focusout="save"
                :class="{resize: !unchangeable}"
      >
      </textarea>
    </div>
</template>

<script>

  export default {
    props: ['id', 'noteId'],
    data() {
      return {
        unchangeable: this.$route.path === '/',
        name: ''
      }
    },
    computed: {
      title: {
        get() {
          return this.$store.getters.allNotes[this.getIndex(this.noteId)].list[this.getTodoIndex(this.id)].name;
        },
        set(value) {
          this.name = value;
          return value;
        }
      }
    },
    methods: {
      save() {
        this.$store.dispatch('updateTodo', {id: this.getTodoIndex(this.id), index: this.getIndex(this.noteId), value: this.name});
      },
      getIndex(id) { //функция получения индекса заметки
        if (this.$route.path !== '/') id = Number(this.$route.params.id);
        let number;
        let todos = this.$store.getters.allNotes;
        todos.findIndex(function (element, index) {
          if (element.id === id) number = index;
        });
        return number;
      },
      getTodoIndex(id) { //функция получения индекса подпункта заметки
        let ind;
        this.$store.getters.allNotes[this.getIndex(this.noteId)].list.findIndex(function (element, index) {
          if (element.id === id) ind = index;
        })
        return ind;
      }
    }
  }
</script>

<style scoped>
  textarea{
    border: none;
    outline: none;
    resize: none;
    overflow: hidden;
    width: 380px;
  }
  .resize:focus{
    height: 300px;
    z-index: 1;
  }
</style>