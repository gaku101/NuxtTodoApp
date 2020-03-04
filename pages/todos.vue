<template>
  <v-app>
  <!-- <v-card width="600px" class="mx-auto mt-5"> -->
  <ul>
    <li v-for="todo in todos" :key="todo.id" class="mx-auto mt-5">
      <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
      <span :class="{ done: todo.done }" @click="clickedTodo(todo)">{{ todo.text }}</span>
      <v-btn @click="removeTodo(todo)">remove</v-btn>
    </li>
    <v-text-field class="mt-5" placeholder="Type and Enter to add todo" @keyup.enter="addTodo" v-model="content" />
    <v-btn @click="updateTodo(content)" v-if="flg">update</v-btn>
  </ul>
  <!-- </v-card> -->
  </v-app>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data: function() {
    return {
      content: '',
      flg: false,
    }
  },
  computed: {
    todos () { return this.$store.state.todos.list }
  },
  methods: {
    removeTodo (todo) {
      this.$store.commit('todos/remove', todo);
    },
    addTodo (e) {
      this.$store.commit('todos/add', e.target.value);
      this.content = '';
    },
    clickedTodo(todo){
      this.content = todo.text;
      this.flg = !this.flg;
      this.$store.commit('todos/clicked', todo);
    },
    updateTodo(content){
      this.$store.commit('todos/update', this.content);
      this.content = '';
      this.flg = false
    },
    ...mapMutations({
      toggle: 'todos/toggle'
    })
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
