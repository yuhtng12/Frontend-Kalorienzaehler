<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

const lebensmittelListe = ref<{ kalorien: number }[]>([]);
const apiEndpoint = import.meta.env.VITE_APP_BACKEND_BASE_URL + '/api/lebensmittel';

const totalCalories = computed(() =>
  lebensmittelListe.value.reduce((sum, item) => sum + item.kalorien, 0)
);

onMounted(() => {
  axios
    .get(apiEndpoint)
    .then((res) => {
      lebensmittelListe.value = res.data;
    })
    .catch((err) => {
      console.error('Fehler beim Abrufen der Daten:', err);
      alert('Kalorien konnten nicht geladen werden.');
    });
});
</script>

<template>
  <div>
    <h1>Kalorienübersicht</h1>
    <p v-if="!lebensmittelListe.length">Noch keine Daten vorhanden.</p>
    <p v-else>Gesamtkalorien: {{ totalCalories }} kcal</p>
  </div>
</template>

<style scoped>
p {
  font-size: 1.2em;
}
</style>
