<template>
  <div>
    <div class="header">
      <BackButton @reShowModal="reShowModalForBack"/>
      <DeleteNote class="deleteNote" @deleteNote="reShowModalForDelete"/>
      <ChangeTitle :index="getIndex()"/>
      <AddTodo @add="addTodo"/>
    </div>
    <div class="main">
      <div id="todo" >
        <!--Список Todo-->
        <FullTodo v-for="todo in this.$store.getters.allNotes[getIndex()].list"
                  :key="todo.id"
                  :todo="todo"
                  :idNote="getIndex()"
                  @deleteTodo="deleteTodo"
        />
      </div>
    </div>
    <div class="undo-redo">
      <!--отменить действие-->
      <button class="undo" :class="{undoShow: this.$store.getters.undo}" @click="undo">
      </button>
      <!--повторить отмененное действие-->
      <button class="redo" :class="{redoShow: this.$store.getters.redo}" @click="redo">
      </button>
    </div>
    <!--окно подтвержения для ухода со страницы-->
    <ConfirmDialog v-if="showModalForBack"
                   @Yes="back"
                   @No="reShowModalForBack"
    />
    <!--окно подтвержения для удаления заметки-->
    <ConfirmDialog v-if="showModalForDelete"
                   @Yes="deleteNote"
                   @No="reShowModalForDelete"
    />
  </div>
</template>

<script>
  import BackButton from "../components/BackButton";
  import ConfirmDialog from "../components/ConfirmDialog";
  import router from "../router";
  import ChangeTitle from "../components/ChangeTitle";
  import FullTodo from "../components/FullTodo";
  import AddTodo from "../components/AddTodo";
  import DeleteNote from "../components/DeleteNote";

  export default {
    components: {
      AddTodo,
      FullTodo,
      BackButton,
      ConfirmDialog,
      ChangeTitle,
      DeleteNote
    },
    data() {
      return {
        showModalForBack: false,
        showModalForDelete: false
      }
    },
    mounted() {
      if (localStorage.copyTodos) this.$store.commit('undoState');
      if (localStorage.todos && localStorage.undo === 'true') this.$store.dispatch('unloadLocalStorage');
    },
    methods: {
      undo() {
        this.$store.dispatch('undoState');
      },
      redo() {
        this.$store.dispatch('redoState');
      },
      back() {
        router.push({name:'home'});
      },
      reShowModalForBack() {
        this.showModalForBack = !this.showModalForBack;
      },
      reShowModalForDelete() {
        this.showModalForDelete = !this.showModalForDelete;
      },
      addTodo() {
        let id;
        if (this.$store.getters.allNotes[this.getIndex()].list[0] != undefined)
          this.$store.getters.allNotes[this.getIndex()].list.forEach(function (t) {
            id = t.id;
          });
        else id = 0;
        this.$store.dispatch('addTodo', {id: id + 1, index: this.getIndex()});
        this.$nextTick(function() {
          let element = document.getElementById('todo');
          element.scrollTop = element.scrollHeight;
        });
      },
      deleteTodo(id) {
        this.$store.dispatch('deleteTodo',{id: id, index: this.getIndex()});
      },
      deleteNote() {
        this.$store.dispatch('deleteNote', this.getIndex());
        this.back();
      },
      getIndex() {
        let number;
        let id = Number(this.$route.params.id);
        this.$store.getters.allNotes.findIndex(function(element, index){
          if (element.id === id) number = index;
        });
        return number;
      }
    }
  }
</script>

<style scoped>
  #todo{
    overflow-Y: auto;
    height: 450px;
    width: 450px;
    box-sizing: border-box;
  }
  .deleteNote{
    margin: auto;
    margin-left: 165px;
  }
  .undo-redo{
    display:flex;
    position: absolute;
    bottom: 28px;
    left: 275px;

  }
  .undo, .redo{
    height: 32px;
    width: 32px;
    margin: 5px;
    border-radius: 50%;
    border: none;
  }
  .undo, .redo:focus {
    outline: none;
  }
  .undo{
    background: url("../assets/undo.png");
    display: none;
  }
  .redo{
    background: url("../assets/redo.png");
    display: none;
  }
  .undoShow{
    display: unset;
  }
  .redoShow{
    display: unset;
  }
</style>