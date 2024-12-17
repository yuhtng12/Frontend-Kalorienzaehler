<template>
  <div class="food-item">
    <p>{{ lebensmittel.name }} ({{ lebensmittel.kalorien }} kcal)</p>
    <button @click="deleteItem">Löschen</button>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    lebensmittel: {
      type: Object,
      required: true, // Validierung hinzugefügt
    },
  },
  methods: {
    deleteItem() {
      this.$emit('delete', this.lebensmittel.id);
    },
  },
};
</script>

<style scoped>
.food-item {
  margin: 8px;
  border: 2px solid var(--color-border, #ccc); /* Fallback hinzugefügt */
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

button:hover {
  background: red;
}
</style>
