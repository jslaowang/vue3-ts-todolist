<template>
  <div class="filter-wrap">
    <a-radio-group v-model:value="status" button-style="solid">
      <a-radio-button :value="0">全部</a-radio-button>
      <a-radio-button :value="1">已完成</a-radio-button>
      <a-radio-button :value="2">未完成</a-radio-button>
    </a-radio-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const status = ref<number>(0);

</script>

<style scoped>
.filter-wrap {
  margin-top: 16px;
}
</style>
