<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
  name: 'FoodItem',
  props: {
    food: {
      type: Object as PropType<{ name: string; kalorien: number }>,
      required: true,
    },
  },
  emits: ['delete'], // Event für das Löschen
});
</script>

<template>
  <div class="food-item">
    <p>{{ food.name }} - {{ food.kalorien }} kcal</p>
    <button
      :aria-description="'Lebensmittel ' + food.name + ' löschen'"
      v-on:click="$emit('delete')"
    >
      Löschen
    </button>
  </div>
</template>

<style scoped>
.food-item {
  margin: 8px;
  border: 2px solid var(--color-border);
  padding: 8px;
  display: flex;
  align-items: center;

  p {
    flex-grow: 1;
  }

  &,
  button {
    border-radius: 4px;
  }

  button {
    background: darkred;
    color: white;
    border: none;
    cursor: pointer;
  }
}
</style>
