import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { //todos - массив заметок, поле show используется для показа заметки. todos.list - список подпунктов заметки.
          // Использовал повторения заметок для того, чтобы показать разметку под заметки(Sidebar) на странице HomePage.
    todos: [
      {id: 1, name: 'Убрать квартиру', list: [
          { id: 1, name: 'Пропылесосить', completed: false},
          { id: 2, name: 'Помыть полы', completed: false},
          { id: 3, name: 'Стереть пыль', completed: false} ],
        show:true
      },
      {id: 2, name: 'Сделать уроки', list: [
          { id: 1, name: 'Сделать алгебру', completed: false},
          { id: 2, name: 'Сделать физику', completed: false},
          { id: 3, name: 'Сделать литературу', completed: false},
          { id: 4, name: 'Сделать геометрию', completed: false},
          { id: 5, name: 'Сделать дискретную математику', completed: false},
          { id: 6, name: 'Сделать информатику', completed: false},
          { id: 7, name: 'Сделать обж', completed: false},
          { id: 8, name: 'Сделать химию', completed: false},
          { id: 9, name: 'Сделать английский', completed: false},
          { id: 10, name: 'Сделать французский', completed: false},
          { id: 11, name: 'Сделать риторику', completed: false},
          { id: 12, name: 'Сделать начертательную геометрию', completed: false},
          { id: 13, name: 'Сделать программирование', completed: false},
          { id: 14, name: 'Сделать русский язык', completed: false} ],
        show:false
      },
      {id: 3, name: 'Физкультура', list: [
          { id: 1, name: 'Жим лежа', completed: false},
          { id: 2, name: 'Гантели', completed: false},
          { id: 3, name: 'Приседания', completed: false},
          { id: 4, name: 'Спина', completed: false},
          { id: 5, name: 'Пресс', completed: false} ],
        show:false
      },
      {id: 4, name: 'Убрать квартиру', list: [
          { id: 1, name: 'Пропылесосить', completed: false},
          { id: 2, name: 'Помыть полы', completed: false},
          { id: 3, name: 'Стереть пыль', completed: false} ],
        show:false
      },
      {id: 5, name: 'Убрать квартиру', list: [
          { id: 1, name: 'Пропылесосить', completed: false},
          { id: 2, name: 'Помыть полы', completed: false},
          { id: 3, name: 'Стереть пыль', completed: false} ],
        show:false
      },
      {id: 6, name: 'Убрать квартиру', list: [
          { id: 1, name: 'Пропылесосить', completed: false},
          { id: 2, name: 'Помыть полы', completed: false},
          { id: 3, name: 'Стереть пыль', completed: false} ],
        show:false
      },
      {id: 7, name: 'Убрать квартиру', list: [
          { id: 1, name: 'Пропылесосить', completed: false},
          { id: 2, name: 'Помыть полы', completed: false},
          { id: 3, name: 'Стереть пыль', completed: false} ],
        show:false
      },
      {id: 8, name: 'Убрать квартиру', list: [
          { id: 1, name: 'Пропылесосить', completed: false},
          { id: 2, name: 'Помыть полы', completed: false},
          { id: 3, name: 'Стереть пыль', completed: false} ],
        show:false
      },
      {id: 9, name: 'Убрать квартиру', list: [
          { id: 1, name: 'Пропылесосить', completed: false},
          { id: 2, name: 'Помыть полы', completed: false},
          { id: 3, name: 'Стереть пыль', completed: false} ],
        show:false
      },
      {id: 10, name: 'Убрать квартиру', list: [
          { id: 1, name: 'Пропылесосить', completed: false},
          { id: 2, name: 'Помыть полы', completed: false},
          { id: 3, name: 'Стереть пыль', completed: false} ],
        show:false
      },
      {id:11, name: 'Убрать квартиру', list: [
          { id: 1, name: 'Пропылесосить', completed: false},
          { id: 2, name: 'Помыть полы', completed: false},
          { id: 3, name: 'Стереть пыль', completed: false} ],
        show:false
      },
      {id:12, name: 'Убрать квартиру', list: [
          { id: 1, name: 'Пропылесосить', completed: false},
          { id: 2, name: 'Помыть полы', completed: false},
          { id: 3, name: 'Стереть пыль', completed: false} ],
        show:false
      },
      {id: 13, name: 'Убрать квартиру', list: [
          { id: 1, name: 'Пропылесосить', completed: false},
          { id: 2, name: 'Помыть полы', completed: false},
          { id: 3, name: 'Стереть пыль', completed: false} ],
        show:false
      },
      {id: 14, name: 'Убрать квартиру', list: [
          { id: 1, name: 'Пропылесосить', completed: false},
          { id: 2, name: 'Помыть полы', completed: false},
          { id: 3, name: 'Стереть пыль', completed: false} ],
        show:false
      }
    ],
    undoShow: false,
    redoShow: false
  },
  actions: {
    updateUndoStorage(context) {
      context.commit('updateUndoStorage');
    },
    updateRedoStorage(context) {
      context.commit('updateRedoStorage');
    },
    undoState(context) {
      context.commit('reRedo');
      context.commit('undoState');
    },
    redoState(context) {
      context.commit('reUndo');
      context.commit('redoState');
    },
    updateNote(context, todo) {
      context.commit('reUndo');
      context.commit('updateUndoStorage');
      context.commit('updateNote', todo);
      context.commit('updateRedoStorage');
    },
    unloadLocalStorage(context) {
      context.commit('unloadLocalStorage')
    },
    changeShow(context, id) {
      context.commit('changeShow', id)
    },
    deleteNote(context, index) {
      context.commit("deleteNote", index);
      context.commit('updateRedoStorage')
    },
    addNote(context, todo) {
      context.commit('addNote', todo)
    },
    updateTodo(context, todo) {
      context.commit('reUndo');
      context.commit('updateUndoStorage');
      context.commit('updateTodo', todo);
      context.commit('updateRedoStorage');
    },
    addTodo(context, todo) {
      context.commit('reUndo');
      context.commit('updateUndoStorage');
      context.commit("addTodo", todo);
      context.commit('updateRedoStorage');
    },
    deleteTodo(context, todo) {
      context.commit('reUndo');
      context.commit('updateUndoStorage');
      context.commit("deleteTodo",todo);
      context.commit('updateRedoStorage');
    },
    changeCheckbox(context, todo) {
      context.commit('reUndo');
      context.commit('updateUndoStorage');
      context.commit('changeCheckbox', todo);
      context.commit('updateRedoStorage');
    }
  },
  mutations: {
    updateUndoStorage(state) { //copyTodos - state.todos без последнего обновления состояния. Используется для отмены действия
      localStorage.setItem('copyTodos', JSON.stringify(state.todos));
    },
    updateRedoStorage(state) { //todos - state.todos. Используется для сохранения данных при обновлении и для возврата отмененного действия
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    undoState(state) { //обновление состояния при отмене действия
      state.todos = JSON.parse(localStorage.getItem('copyTodos'));
    },
    redoState(state) {
      state.todos = JSON.parse(localStorage.getItem('todos'));
    },
    reUndo(state) {
      state.undoShow = true;
      state.redoShow = false;
      localStorage.setItem('undo', JSON.stringify(state.undoShow));
      localStorage.setItem('redo', JSON.stringify(state.redoShow));
    },
    reRedo(state) {
      state.redoShow = true;
      state.undoShow = false;
      localStorage.setItem('undo', JSON.stringify(state.undoShow));
      localStorage.setItem('redo', JSON.stringify(state.redoShow));
    },
    updateNote(state, todo) {
      state.todos[todo.index].name = todo.value;
    },
    unloadLocalStorage(state) {
      state.todos = JSON.parse(localStorage.getItem('todos'));
    },
    changeShow(state, id) {
      if (id === 0) {
        state.todos.forEach(function (t) {
          t.show = false;
        });
        state.todos[0].show = true;
      } else {
        state.todos.forEach(function (t) {
          t.show = t.id === id;
        })
      }
    },
    deleteNote(state, index) {
      state.todos.splice(index, 1);
      state.todos[0].show = true;
    },
    addNote(state, todo) {
      state.todos.push({id: todo.id, name: todo.name, list: [], show:true});
    },
    updateTodo(state, todo) {
      state.todos[todo.index].list[todo.id].name = todo.value;
    },
    addTodo(state, todo) {
      state.todos[todo.index].list.push({id: todo.id, name: '', completed: false});
    },
    deleteTodo(state, todo) {
      state.todos[todo.index].list = state.todos[todo.index].list.filter(t => t.id !== todo.id);
    },
    changeCheckbox(state, todo) {
      let ind;
      state.todos[todo.index].list.findIndex(function (element, index) {
        if (element.id === todo.id) ind = index;
      });
      state.todos[todo.index].list[ind].completed = !state.todos[todo.index].list[ind].completed;
    }
  },
  getters: {
    allNotes(state) {
      return state.todos;
    },
    undo(state) {
      return state.undoShow;
    },
    redo(state) {
      return state.redoShow;
    }
  }
})