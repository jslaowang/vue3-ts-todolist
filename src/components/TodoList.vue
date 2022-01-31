<template>
  <div class="list-wrap">
    <TodoItem
      v-for="(item, index) in todoList"
      :key="item.name"
      :index="index"
      :name="item.name"
      :status="item.status"
      @onDelete="onDelete"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import TodoItem from './TodoItem.vue'

interface Todo {
  name: string,
  status: boolean,
}
let todoList = reactive<Todo[]>([
  { name: 'todo-1', status: true },
  { name: 'todo-2', status: false },
  { name: 'todo-3', status: false },
])

const onDelete = (index: number): void => {
  todoList.splice(index, 1)
}
</script>

<style scoped>
.list-wrap {
  margin-top: 16px;
}
</style>
