<template lang="html">
  <div class="three3D">
    <h2>Rendu 3D</h2>
    <div ref="container3D">
    </div>
    <p>{{ fullWidth }}</p>
  </div>
</template>

<script>
import * as THREE from 'three'
export default {
  name: 'Three3D',
  data () {
    return {
      scene: {},
      camera: {},
      renderer: {},
      geometry: {},
      material: {},
      cube: {},
      fullWidth: window.innerWidth
    }
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  },
  mounted () {
    window.addEventListener('resize', this.handleResize)
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 )
    this.renderer = new THREE.WebGLRenderer()
    this.geometry = new THREE.BoxGeometry( 1, 1, 1 )
    this.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } )
    this.renderer.setSize( window.innerWidth*0.7, window.innerHeight*0.7)
    this.$refs.container3D.appendChild(this.renderer.domElement)
    this.cube = new THREE.Mesh( this.geometry, this.material )
    this.scene.add( this.cube )
    this.camera.position.z = 5
    this.animate()
  },
  methods: {
    animate: function () {
      requestAnimationFrame( this.animate )
      this.cube.rotation.y += 0.1
      this.renderer.render(this.scene, this.camera)
    },
    handleResize (event) {
      this.fullWidth = window.innerWidth
      this.renderer.setSize( window.innerWidth*0.7, window.innerHeight*0.7)
    }
  }
}
</script>

<style lang="css">
/* canvas { width: 50%; height: 50% } */
</style>
