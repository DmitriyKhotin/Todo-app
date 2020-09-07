<template>
  <div>
    <div class="header">
      <div class="title">
        <h1>Todo</h1>
      </div>
      <!--Добавление заметки-->
      <AddNotesItem @addNotesItem="addNotesItem" />
    </div>
    <hr>
    <div class="main" >
      <!--Sidebar с заметками-->
      <NotesList id="NotesList" v-if="allNotes.length" :todos="allNotes" @changeShow="changeShow"/>
      <p v-else> Список заметок пуст.</p>
      <!--Список Todo-->
      <TodoList v-for="todo in allNotes" :key="todo.id" :item="todo" class="todoList"/>
      <!--Изменение заметки (переход на ChangePage), :key="'0' + todo.id" для исключения ошибки о дублированном ключе-->
      <ChangeNotesItem class="change" v-for="todo in allNotes" :key="'0' + todo.id" :todo="todo" />
      <!--Удаление заметки-->
      <DeleteNotesItem class="delete" @reShowModal="reShowModal"/>
    </div>
    <!--Модальное окно для подтверждения-->
    <ConfirmDialog v-if="showModal" @Yes="deleteNotesItem" @No="reShowModal"/>
  </div>
</template>

<script>
  import NotesList from "../components/NotesList";
  import TodoList from "../components/TodoList";
  import AddNotesItem from "../components/AddNotesItem";
  import ChangeNotesItem from "../components/ChangeNotesItem";
  import DeleteNotesItem from "../components/DeleteNotesItem";
  import ConfirmDialog from "../components/ConfirmDialog";
  import {mapGetters} from "vuex"
  export default {
    components: {
      ConfirmDialog,
      DeleteNotesItem,
      ChangeNotesItem,
      AddNotesItem,
      TodoList,
      NotesList
    },
    computed: mapGetters(["allNotes"]),
    mounted() {
      if (localStorage.todos)
        this.$store.dispatch("unloadLocalStorage"); //Если localStorage.todos существует, то качаем состояние из localStorage
      else
        this.$store.dispatch("updateRedoStorage"); //Если localStorage.todos не существует, то загружаем состояние в localStorage
    },
    beforeUpdate() {
      this.$store.dispatch("updateRedoStorage");
    },
    data() {
      return {
        showModal: false,
      }
    },
    methods:{
      changeShow(id) {
        this.$store.dispatch("changeShow", id); //При нажатии на заметку показываем ее
      },
      deleteNotesItem() {
       let index = this.allNotes.findIndex(function (element, index) { // Высчитываем индекс заметки, которая показывается
         if (element.show === true) return index;
        });
        this.reShowModal(); // убираем окно подтверждения
        this.$store.dispatch("deleteNote", index); // удаление заметки
        this.changeShow(0); // показываем первую заметку
      },
      reShowModal() {
        this.showModal = !this.showModal;
      },
      addNotesItem(noteName) {
        let id;
        this.allNotes.forEach(function (t) {
          id = t.id;
        }); //получение id последней заметки
        this.$store.dispatch("addNote", {id: id + 1, name: noteName}); //добавляем заметку
        this.changeShow(id + 1); //показываем добавленую заметку
        this.$nextTick(function() { // после обновления дерева перемещаем scroll максимально вниз
          let element = document.getElementById('NotesList');
          element.scrollTop = element.scrollHeight;
        });
      }
    }
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .header{
    justify-content: flex-end;
  }
  .title{
    margin: auto 60px;
  }
  .main{
    display: flex;
  }
  .todoList{
    margin-left: 5px;
    width: 430px;
  }
  .change{
    position: absolute;
    left:calc(100% - 80px);
    top:calc(100% - 40px);
  }
  .delete{
    position: absolute;
    top:calc(100% - 40px);
    left: calc(100% - 40px);
  }
</style>