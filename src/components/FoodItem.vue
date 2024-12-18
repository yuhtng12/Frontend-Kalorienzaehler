<template>
  <div class="food-item">
    <p v-if="lebensmittel">{{ lebensmittel.name }} ({{ lebensmittel.kalorien }} kcal)</p>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    lebensmittel: {
      type: Object, // Erwartet ein Lebensmittel-Objekt
      required: true,
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
</style>
