<template>
  <div class="list-wrap">
    <TodoItem
      v-for="(item, index) in todoList"
      :key="item.name"
      :index="index"
      :name="item.name"
      :status="item.status"
      @onDelete="$emit('onDelete', index)"
    />
  </div>
</template>

<script setup lang="ts">

import TodoItem from './TodoItem.vue'

defineProps<{ todoList: any }>();

</script>

<style scoped lang="scss">
.list-wrap {
  margin-top: 16px;
}
</style>
