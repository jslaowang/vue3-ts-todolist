<template>
  <div class="add-wrap">
    <h1>{{ msg }}</h1>
    <div class="input-wrap">
      <a-input-search :model="inputValue" size="large" @search="onAdd">
        <template #enterButton>
          <a-button type="primary">Add</a-button>
        </template>
      </a-input-search>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
defineProps<{ msg: string }>();

const inputValue = ref<string>("");
const onAdd = () => {
  console.log(11);
};
</script>

<style scoped>
.input-wrap {
  display: flex;
}
</style>
