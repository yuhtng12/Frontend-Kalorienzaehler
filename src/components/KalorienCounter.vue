<template>
  <div>
    <h2>Gesamtkalorien</h2>
    <p>{{ totalKalorien }} kcal</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lebensmittelListe: [
        { name: "Apfel", kalorien: 52 },
        { name: "Banane", kalorien: 89 },
        { name: "Kartoffel", kalorien: 77 }
      ],
    };
  },
  computed: {
    totalKalorien() {
      return this.lebensmittelListe.reduce((sum, item) => sum + item.kalorien, 0);
    },
  },
};
</script>
