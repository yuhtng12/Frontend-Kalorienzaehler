<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/total-calories">Kalorienübersicht</RouterLink>
      <RouterLink to="/food-list">Lebensmittelliste</RouterLink>
      <RouterLink to="/add-product">Produkt hinzufügen</RouterLink>
      <RouterLink to="/manage-products">Produkte verwalten</RouterLink>

    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: #f0f0f0;
}

nav {
  display: flex;
  gap: 16px;
}

nav a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: #007bff;
}
</style>
