<script setup lang="ts">
import { onMounted, ref } from 'vue';
import FoodItem from '@/components/FoodItem.vue';
import axios from 'axios';

const apiEndpoint = import.meta.env.VITE_APP_BACKEND_BASE_URL + '/api/lebensmittel';
const inputData = ref('');
const lebensmittelListe = ref<{ name: string; kalorien: number }[]>([]);

function addFood(): void {
  axios
    .post(apiEndpoint, { name: inputData.value, kalorien: 0 }) // Beispiel: Kalorien als 0 für neue Einträge
    .then((res) => {
      inputData.value = '';
      lebensmittelListe.value.push(res.data);
    })
    .catch((err) => logError(err));
}

async function removeFood(name: string): Promise<void> {
  try {
    await axios.delete(`${apiEndpoint}/${name}`);
    lebensmittelListe.value = lebensmittelListe.value.filter((food) => food.name !== name);
  } catch (err) {
    logError(err);
  }
}

function logError(err: unknown): void {
  alert('Etwas ist schief gelaufen ... überprüfe die Konsole für weitere Details.');
  console.error(err);
}

onMounted(() => {
  axios
    .get(apiEndpoint)
    .then((res) => (lebensmittelListe.value = res.data))
    .catch((err) => logError(err));
});
</script>

<template>
  <main>
    <h1>Lebensmittelliste</h1>

    <form @submit.prevent="addFood()">
      <input v-model="inputData" placeholder="Neues Lebensmittel hinzufügen" />
      <button :disabled="!inputData.trim().length">Hinzufügen</button>
    </form>

    <p v-if="!lebensmittelListe.length">Noch keine Lebensmittel vorhanden.</p>
    <div id="food-container" v-else>
      <FoodItem
        v-for="food in lebensmittelListe"
        :key="food.name"
        :food="food"
        @delete="removeFood(food.name)"
      />
    </div>
  </main>
</template>

<style scoped>
form {
  display: flex;
  margin: -4px;

  input {
    flex-grow: 1;
  }

  * {
    margin: 4px;
  }
}

#food-container,
p {
  margin-top: 8px;
}

#food-container {
  margin-left: -8px;
  margin-right: -8px;
}
</style>
