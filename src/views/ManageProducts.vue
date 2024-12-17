<template>
  <div class="manage-products">
    <h1>Produkte verwalten</h1>
    <ul>
      <li v-for="product in products" :key="product.id" class="product-item">
        {{ product.name }} ({{ product.kalorien }} kcal)
        <button @click="deleteProduct(product.id)">Löschen</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'ManageProducts',
  setup() {
    const products = ref([]);
    const apiEndpoint = import.meta.env.VITE_APP_BACKEND_BASE_URL + '/api/lebensmittel';

    // Produkte laden
    const loadProducts = () => {
      axios
        .get(apiEndpoint)
        .then((response) => {
          products.value = response.data;
        })
        .catch((error) => {
          console.error('Fehler beim Laden der Produkte:', error);
          alert('Fehler beim Laden der Produkte.');
        });
    };

    // Produkt löschen
    const deleteProduct = (id: number) => {
      axios
        .delete(`${apiEndpoint}/${id}`)
        .then(() => {
          products.value = products.value.filter((product) => product.id !== id);
          alert('Produkt erfolgreich gelöscht!');
        })
        .catch((error) => {
          console.error('Fehler beim Löschen des Produkts:', error);
          alert('Fehler beim Löschen des Produkts.');
        });
    };

    onMounted(() => {
      loadProducts();
    });

    return {
      products,
      deleteProduct,
    };
  },
});
</script>

<style scoped>
.manage-products {
  margin: 16px;
}

ul {
  list-style: none;
  padding: 0;
}

.product-item {
  margin: 8px 0;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  background: darkred;
  color: white;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: red;
}
</style>
