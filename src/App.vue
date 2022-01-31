<script setup lang="ts">
import TodoAdd from "./components/TodoAdd.vue";
import TodoFilter from "./components/TodoFilter.vue";
</script>

<template>
  <div class="todo-wrap">
    <TodoAdd msg="Hello Vue3-TS-Todolist" />
    <TodoFilter />
    <TodoList />
  </div>
</template>

<style>
#app {
  display: flex;
  justify-content: center;
  background: #c6cbef;
  height: 100%;
  padding: 16px;
}
.todo-wrap {
  width: 500px;
  background: #f4f4fd;
  padding: 50px 30px;
  border-radius: 20px;
}
</style>
