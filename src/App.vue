<template>
  <google-youtube>
  </google-youtube>
</template>

<script>
import GoogleYoutube from './google-youtube.vue'

export default {
  name: 'app',
  components: {
    GoogleYoutube
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
