<script setup lang="ts">
import { computed, ref } from 'vue';
import axios from 'axios';

const apiEndpoint = import.meta.env.VITE_APP_BACKEND_BASE_URL + '/api/lebensmittel';
const lebensmittelListe = ref<{ name: string; kalorien: number }[]>([]);

const totalCalories = computed(() =>
  lebensmittelListe.value.reduce((sum, item) => sum + item.kalorien, 0)
);

async function loadFoods() {
  try {
    const response = await axios.get(apiEndpoint);
    lebensmittelListe.value = response.data;
  } catch (err) {
    console.error('Fehler beim Laden der Daten:', err);
    alert('Die Kalorien konnten nicht geladen werden.');
  }
}

loadFoods();
</script>

<template>
  <main>
    <h1>Kalorienanzeige</h1>
    <p v-if="!lebensmittelListe.length">Noch keine Lebensmittel hinzugefügt.</p>
    <p v-else>Gesamtkalorien: {{ totalCalories }} kcal</p>
  </main>
</template>

<style scoped>
main {
  margin: 16px;
}

p {
  font-size: 1.2em;
}
</style>
