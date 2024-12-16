<script setup lang="ts">
import { ref } from 'vue';
import FoodItem from '@/components/FoodItem.vue';
import axios from 'axios';

const apiEndpoint = import.meta.env.VITE_APP_BACKEND_BASE_URL + '/api/lebensmittel';
const lebensmittelListe = ref<{ name: string; kalorien: number }[]>([]);
const searchQuery = ref('');

async function loadFoods() {
  try {
    const response = await axios.get(apiEndpoint);
    lebensmittelListe.value = response.data;
  } catch (err) {
    console.error('Fehler beim Laden der Lebensmittel:', err);
    alert('Daten konnten nicht geladen werden.');
  }
}

loadFoods();

const filteredFoods = computed(() =>
  lebensmittelListe.value.filter((food) =>
    food.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);
</script>

<template>
  <main>
    <h1>Lebensmittelliste</h1>

    <input
      v-model="searchQuery"
      type="text"
      placeholder="Lebensmittel suchen"
    />

    <div v-if="!filteredFoods.length">Keine passenden Lebensmittel gefunden.</div>
    <ul v-else>
      <FoodItem
        v-for="food in filteredFoods"
        :key="food.name"
        :food="food"
      />
    </ul>
  </main>
</template>

<style scoped>
input {
  margin-bottom: 16px;
  padding: 8px;
  width: 100%;
  font-size: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>
