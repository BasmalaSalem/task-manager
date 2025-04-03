<template>
  <q-list bordered separator>
    <q-item v-for="task in tasks" :key="task.id">
      <q-item-section>
        <q-item-label>{{ task.title }}</q-item-label>
        <q-item-label caption>{{ task.description }}</q-item-label>
      </q-item-section>
      <q-item-section side top>
        <div class="row q-gutter-sm">
          <q-btn icon="edit" flat round color="blue" @click="emit('edit', task)" />
          <q-btn icon="delete" flat round color="red" @click="emit('delete', task.id)" />
        </div>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup lang="ts">
import type { Task } from './models';

defineProps<{
  tasks: Task[];
}>();

const emit = defineEmits<{
  (e: 'delete', id: number): void;
  (e: 'edit', task: Task): void;
}>();
</script>
