<template>
  <div>
    <h2>Lebensmittelliste</h2>
    <ul>
      <li v-for="lebensmittel in lebensmittelListe" :key="lebensmittel.name">
        {{ lebensmittel.name }} - {{ lebensmittel.kalorien }} kcal
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lebensmittelListe: [
        { name: "Apfel", kalorien: 52 },
        { name: "Banane", kalorien: 89 },
        { name: "Kartoffel", kalorien: 77 } // npm run dev am Ende eingeben in der console
      ]
    };
  }
};
</script>
