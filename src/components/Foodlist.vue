<script lang="ts">
import { defineComponent } from 'vue';
import FoodItem from './FoodItem.vue';

export default defineComponent({
  name: 'FoodList',
  components: { FoodItem },
  data() {
    return {
      foods: [
        { name: 'Apfel', kalorien: 52 },
        { name: 'Banane', kalorien: 89 },
        { name: 'Kartoffel', kalorien: 77 },
      ],
    };
  },
});
</script>

<template>
  <div>
    <h1>Lebensmittelliste</h1>
    <ul>
      <li v-for="food in foods" :key="food.name">
        <FoodItem :food="food" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
</style>
