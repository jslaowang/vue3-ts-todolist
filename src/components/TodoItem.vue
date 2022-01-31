<template>
  <div class="item-wrap">
    <!-- eslint-disable-next-line vue/no-mutating-props -->
    <a-checkbox v-model:checked="status">{{ name }}</a-checkbox>
    <a-button type="primary" danger size="small" @click="$emit('onDelete', index)">delete</a-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
defineProps<{ name: string, status: boolean, index: number }>();
</script>

<style scoped>
.item-wrap {
  margin-top: 16px;
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
::v-deep .ant-checkbox-wrapper {
  width: 80%;
}
</style>
