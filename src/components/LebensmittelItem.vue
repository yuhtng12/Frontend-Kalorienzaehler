<template>
  <div v-if="lebensmittel">
    <h3>{{ lebensmittel.name }}</h3>
    <p>{{ lebensmittel.kalorien }} kcal</p>
  </div>
</template>

<script>
export default {
  props: {
    lebensmittel: {
      type: Object,
      required: true,
    },
  },
};
</script>
