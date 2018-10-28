<template>
  <div id="app">
    <svg version="1.1"
    class="svgStyle" xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" 
    x="0px" y="0px" 
    width="595px" height="426px" 
    viewBox="0 0 595 426" 
    enable-background="new 0 0 595 426"
     xml:space="preserve">
      <stage/>
      <team />
      <chainwheel />
      <navigation />
    </svg>
  </div>
</template>

<script>
import stage from './components/stage'
import team from './components/team.vue'
import chainwheel from './components/chainwheel.vue'
import navigation from './components/navigation.vue'
import { mapActions } from 'vuex'


export default {
  name: 'app',
  components: {
    stage, team, chainwheel, navigation
  },
  created(){
    this.fetchStages()
    this.fetchTeams()
  },
  methods: {
    ...mapActions({
        fetchStages: 'fetchStages',
        fetchTeams: 'fetchTeams'
    })
  } // end of methods
}
</script>

<style>
body { 
  font-family: 'Comfortaa', cursive;
  background-color: #FFF; text-align: center; 
}
svg {
  height: 95vh;
  width: 100vw; 
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
 .fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>