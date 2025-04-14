<template>
  <q-form @submit.prevent="handleSubmit">
    <div class="row q-gutter-md">
      <q-input v-model="form.title" label="Title" required />
      <q-input v-model="form.description" label="Description" />
      <q-btn type="submit" label="Add Task" color="primary" />
    </div>
  </q-form>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const emit = defineEmits<{
  (e: 'submit', task: { title: string; description?: string }): void;
}>();

const form = reactive({
  title: '',
  description: '',
});

const handleSubmit = () => {
  emit('submit', { ...form });
  form.title = '';
  form.description = '';
};
</script>
