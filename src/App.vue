<template>
  <div id="app">
    <LebensmittelListe />
    <KalorienCounter />
  </div>
</template>

<script>
import LebensmittelListe from './components/LebensmittelListe.vue';
import KalorienCounter from './components/KalorienCounter.vue';

export default {
  components: {
    LebensmittelListe,
    KalorienCounter,
  },
};
</script>
