import { createRouter, createWebHistory } from 'vue-router';
import ProjectList from '@/components/ProjectList.vue';
import ProjectDropdown from '@/components/ProjectDropdown.vue';
import ProjectCounter from '@/components/ProjectCounter.vue';
import ProjectTable from '@/components/ProjectTable.vue';
import Hello from '@/components/HelloWorld.vue';

const routes = [
  { path: '/', name: 'ProjectList', component: ProjectList },
  { path: '/dropdown', name: 'ProjectDropdown', component: ProjectDropdown },
  { path: '/counter', name: 'ProjectCounter', component: ProjectCounter },
  { path: '/table', name: 'ProjectTable', component: ProjectTable },
  { path: '/hello', name: 'Hello', component: Hello }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;