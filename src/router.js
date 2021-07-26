import { createRouter, createWebHistory } from 'vue-router';

import AddImage from '../src/components/add/AddImage.vue';

const router = createRouter({
   history: createWebHistory(),
   routes: [
      { path: '/', redirect: '/gallery'},
      { path: '/gallery', component: AddImage },
   ]
})

export default router;