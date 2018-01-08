<template lang="html">
  <div class="container-tdb">
    <h2>Tableau De Bord</h2>
    <evolution-mensuration></evolution-mensuration>
    <carnet-musculation></carnet-musculation>
    <programtion-entrainement></programtion-entrainement>
    <scheduler></scheduler>
  </div>
</template>

<script>
import EvolutionMensuration from './EvolutionMensuration.vue'
import CarnetMusculation from './CarnetMusculation.vue'
import ProgramtionEntrainement from './ProgramtionEntrainement.vue'
import Scheduler from './Scheduler.vue'
export default {
  name: 'TableauDeBord',
  components : {
    EvolutionMensuration,
    CarnetMusculation,
    ProgramtionEntrainement,
    Scheduler
  },
}
</script>

<style lang="css">
</style>
