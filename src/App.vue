<template>
  <div>
    <div class="lebensmittelliste">
      <h2>Lebensmittelliste</h2>
      <ul>
        <li v-for="lebensmittel in lebensmittelListe" :key="lebensmittel.name">
          {{ lebensmittel.name }} - {{ lebensmittel.kalorien }} kcal
        </li>
      </ul>
    </div>
    <div class="gesamtkalorien">
      <h2>Gesamtkalorien</h2>
      <p>{{ totalKalorien }} kcal</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lebensmittelListe: [
        { name: "Apfel", kalorien: 52 },
        { name: "Banane", kalorien: 89 },
        { name: "Kartoffel", kalorien: 77 },
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

<style scoped>
.lebensmittelliste, .gesamtkalorien {
  margin-bottom: 20px;
}
.lebensmittelliste {
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}
</style>
