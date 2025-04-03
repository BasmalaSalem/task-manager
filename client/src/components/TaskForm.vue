<template>
  <q-form @submit.prevent="handleSubmit" class="q-gutter-md">
    <q-input v-model="form.title" label="Title" :rules="[(val) => !!val || 'Title is required']" />
    <q-input v-model="form.description" label="Description" type="textarea" />
    <div class="row justify-end">
      <q-btn label="Submit" type="submit" color="primary" />
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
