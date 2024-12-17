<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import FoodItem from '@/components/FoodItem.vue';

const lebensmittelListe = ref([]);
const newFoodName = ref('');
const newFoodCalories = ref(0);
const apiEndpoint = import.meta.env.VITE_APP_BACKEND_BASE_URL + '/api/lebensmittel';

function loadFoods() {
  axios
    .get(apiEndpoint)
    .then((res) => {
      lebensmittelListe.value = res.data;
    })
    .catch((err) => {
      console.error('Fehler beim Abrufen der Daten:', err);
      alert('Daten konnten nicht geladen werden.');
    });
}

function addFood() {
  if (!newFoodName.value.trim()) {
    return alert('Lebensmittelname darf nicht leer sein!');
  }
  axios
    .post(apiEndpoint, { name: newFoodName.value, kalorien: newFoodCalories.value || 0 })
    .then((res) => {
      lebensmittelListe.value.push(res.data);
      newFoodName.value = '';
      newFoodCalories.value = 0;
    })
    .catch((err) => {
      console.error('Fehler beim Hinzufügen:', err);
      alert('Lebensmittel konnte nicht hinzugefügt werden.');
    });
}

function deleteFood(id: number) {
  axios
    .delete(`${apiEndpoint}/${id}`)
    .then(() => {
      lebensmittelListe.value = lebensmittelListe.value.filter((food) => food.id !== id);
    })
    .catch((err) => {
      console.error('Fehler beim Löschen:', err);
      alert('Lebensmittel konnte nicht gelöscht werden.');
    });
}

onMounted(() => {
  loadFoods();
});
</script>

<template>
  <div>
    <h1>Lebensmittelliste</h1>
    <form @submit.prevent="addFood">
      <input v-model="newFoodName" placeholder="Lebensmittelname" />
      <input v-model.number="newFoodCalories" type="number" placeholder="Kalorien" />
      <button>Hinzufügen</button>
    </form>
    <ul>
      <li v-for="food in lebensmittelListe" :key="food.id">
        <FoodItem :food="food" @delete="deleteFood(food.id)" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

form {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

li {
  margin-bottom: 8px;
}
</style>
