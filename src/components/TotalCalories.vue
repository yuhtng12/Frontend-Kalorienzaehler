<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TotalCalories',
  data() {
    return {
      foods: [
        { name: 'Apfel', kalorien: 52 },
        { name: 'Banane', kalorien: 89 },
        { name: 'Kartoffel', kalorien: 77 },
      ],
    };
  },
  computed: {
    totalCalories(): number {
      return this.foods.reduce((sum, food) => sum + food.kalorien, 0);
    },
  },
});
</script>

<template>
  <div class="total-calories">
    <h2>Gesamtkalorien</h2>
    <p>{{ totalCalories }} kcal</p>
  </div>
</template>

<style scoped>
.total-calories {
  font-size: 1.2em;
  margin: 16px 0;
}
</style>
