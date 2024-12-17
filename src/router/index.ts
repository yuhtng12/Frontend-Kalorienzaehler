import { createRouter, createWebHistory } from 'vue-router';
import FoodListView from '@/views/FoodListView.vue';
import TotalCaloriesView from '@/views/TotalCaloriesView.vue';

const routes = [
  { path: '/', name: 'Home', component: () => import('@/views/HomeView.vue') },
  { path: '/total-calories', name: 'TotalCalories', component: TotalCaloriesView },
  { path: '/food-list', name: 'FoodList', component: FoodListView },
  {
    path: '/add-product',
    name: 'AddProduct',
    component: () => import('@/components/AddProduct.vue'),
  },
  {
    path: '/manage-products',
    name: 'ManageProducts',
    component: () => import('@/components/ManageProducts.vue'),
  },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
