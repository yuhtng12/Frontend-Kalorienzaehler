<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

const lebensmittelListe = ref([]);
const apiEndpoint = import.meta.env.VITE_APP_BACKEND_BASE_URL + '/api/lebensmittel';

onMounted(() => {
  axios
    .get(apiEndpoint)
    .then((res) => {
      lebensmittelListe.value = res.data;
    })
    .catch((err) => {
      console.error('Fehler beim Abrufen der Daten:', err);
      alert('Daten konnten nicht geladen werden.');
    });
});
</script>

<template>
  <div>
    <h1>Lebensmittelliste</h1>
    <ul>
      <li v-for="item in lebensmittelListe" :key="item.name">
        {{ item.name }} - {{ item.kalorien }} kcal
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 8px 0;
  font-size: 1.2em;
}
</style>
