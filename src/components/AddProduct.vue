<template>
  <div class="add-product">
    <h1>Produkt hinzufügen</h1>
    <form @submit.prevent="addProduct">
      <label>
        Name:
        <input v-model="name" placeholder="Produktname eingeben" required />
      </label>
      <label>
        Kalorien:
        <input
          type="number"
          v-model.number="kalorien"
          placeholder="Kalorienzahl eingeben"
          required
        />
      </label>
      <button type="submit">Hinzufügen</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'AddProduct',
  setup() {
    const name = ref('');
    const kalorien = ref(0);
    const apiEndpoint = import.meta.env.VITE_APP_BACKEND_BASE_URL + '/api/lebensmittel';

    const addProduct = () => {
      axios
        .post(apiEndpoint, { name: name.value, kalorien: kalorien.value })
        .then(() => {
          name.value = '';
          kalorien.value = 0;
          alert('Produkt erfolgreich hinzugefügt!');
        })
        .catch((error) => {
          console.error('Fehler beim Hinzufügen des Produkts:', error);
          alert('Fehler beim Hinzufügen des Produkts.');
        });
    };

    return {
      name,
      kalorien,
      addProduct,
    };
  },
});
</script>

<style scoped>
.add-product {
  margin: 16px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

label {
  font-weight: bold;
}

button {
  background-color: #007bff;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
