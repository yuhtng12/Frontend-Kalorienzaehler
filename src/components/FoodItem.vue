<template>
  <div class="food-item">
    <p>{{ lebensmittel.name }} ({{ lebensmittel.kalorien }} kcal)</p>
    <button @click="deleteItem">Löschen</button>
  </div>
</template>

<script>
export default {
  props: {
    lebensmittel: Object, // Erwartet ein Lebensmittel-Objekt
  },
  methods: {
    deleteItem() {
      this.$emit('delete', this.lebensmittel.id); // Emit Event mit der ID
    },
  },
};
</script>

<style scoped>
.food-item {
  margin: 8px;
  border: 2px solid var(--color-border);
  padding: 8px;
  display: flex;
  align-items: center;
}

p {
  flex-grow: 1;
}

button {
  background: darkred;
  color: white;
  border-radius: 4px;
  padding: 4px 8px;
  border: none;
  cursor: pointer;
}

button:hover { //test
  background: red;
}
</style>
