<template>
  <div class="todo-wrap">
    <TodoAdd msg="Hello Vue3-TS-Todolist" @onAdd="onAdd" />
    <TodoFilter />
    <TodoList :todoList="todoList" @onDelete="onDelete" />
  </div>
</template>

<script setup lang="ts">
import TodoAdd from "./components/TodoAdd.vue";
import TodoFilter from "./components/TodoFilter.vue";
import { reactive } from "vue";

interface Todo {
  name: string,
  status: boolean,
}

let todoList = reactive<Todo[]>([
  { name: 'todo-1', status: true },
  { name: 'todo-2', status: false },
  { name: 'todo-3', status: false },
])

const onAdd = (inputValue: string): void => {
  console.log(inputValue);
  todoList.push({ name: inputValue, status: false },)
};

const onDelete = (index: number): void => {
  todoList.splice(index, 1)
}
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  background: #ff4d4dab;
  height: 100%;
  padding: 16px;
}
.todo-wrap {
  width: 500px;
  background: #fdf8f4;
  padding: 50px 30px;
  border-radius: 20px;
}
</style>
