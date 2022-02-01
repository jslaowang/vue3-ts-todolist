<template>
  <div class="add-wrap">
    <h1>{{ msg }}</h1>
    <div class="input-wrap">
      <a-input-search v-model:value="inputValue" size="large" @search="onAdd">
        <template #enterButton>
          <a-button type="primary">Add</a-button>
        </template>
      </a-input-search>
    </div>
  </div>
</template>

<script setup lang="ts">
import { setTimeout } from "timers";
import { ref, defineEmits } from "vue";
defineProps<{ msg: string }>();

let inputValue = ref<string>("");
const emit = defineEmits(['onAdd'])
const onAdd = (): void => {
  if (inputValue.value.trim()) {
    emit('onAdd', inputValue)
  }
  // inputValue.value = ""
}

</script>

<style scoped>
.input-wrap {
  display: flex;
}
</style>
