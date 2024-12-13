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
import axios from "axios";

export default {
  data() {
    return {
      lebensmittelListe: [],
    };
  },
  mounted() {
    axios
      .get("https://webtech-backend.onrender.com/api/lebensmittel")
      .then((response) => {
        this.lebensmittelListe = response.data;
      })
      .catch((error) => {
        console.error("Fehler beim Abrufen der Lebensmittel:", error);
      });
  },
};
</script>
