<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-card flat bordered>
        <q-card-section>
          <div class="text-h6">Create New Task</div>
          <task-form @submit="handleCreateTask" />

          <TaskList :tasks="taskStore.tasks" @delete="handleDeleteTask" class="q-mt-md" />
        </q-card-section>

        <q-separator />
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useTaskStore } from '../stores/tasks';
import TaskForm from '../components/TaskForm.vue';
import TaskList from '../components/TaskList.vue';

const taskStore = useTaskStore();

onMounted(async () => {
  await taskStore.fetchTasks();
});

const handleCreateTask = async (task: { title: string; description?: string }) => {
  await taskStore.createTask(task);
};

const handleDeleteTask = async (id: number) => {
  await taskStore.deleteTask(id);
};
</script>
