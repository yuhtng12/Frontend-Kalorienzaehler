import { createRouter, createWebHistory } from 'vue-router';
import FoodListView from '@/views/FoodListView.vue';
import TotalCaloriesView from '@/views/TotalCaloriesView.vue';

const routes = [
  { path: '/food-list', name: 'FoodList', component: FoodListView },
  { path: '/calorie-overview', name: 'CalorieOverview', component: TotalCaloriesView },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
