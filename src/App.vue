<template>
  <google-youtube>
    <EvolutionMensuration></EvolutionMensuration>
  </google-youtube>
</template>

<script>
import GoogleYoutube from './google-youtube.vue'
import EvolutionMensuration from './EvolutionMensuration.vue'

export default {
  name: 'app',
  components: {
    GoogleYoutube,
    EvolutionMensuration
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
</style>
