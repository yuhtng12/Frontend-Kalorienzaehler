<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import FoodItem from '@/components/FoodItem.vue';

const lebensmittelListe = ref<{ id: number; [key: string]: any }[]>([]);
const apiEndpoint = import.meta.env.VITE_APP_BACKEND_BASE_URL + '/api/lebensmittel';

const fetchLebensmittel = () => {
  axios
    .get(apiEndpoint)
    .then((res) => {
      lebensmittelListe.value = res.data;
    })
    .catch((err) => {
      console.error('Fehler beim Abrufen der Daten:', err);
      alert('Daten konnten nicht geladen werden.');
    });
};

onMounted(() => {
  fetchLebensmittel();
});
</script>

<template>
  <div>
    <h1>Lebensmittelliste</h1>
    <p v-if="!lebensmittelListe.length">Noch keine Lebensmittel hinzugefügt.</p>
    <ul>
      <li v-for="item in lebensmittelListe" :key="item.id">
        <FoodItem :lebensmittel="item" />
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
