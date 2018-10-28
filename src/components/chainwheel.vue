<template>
    <g class="wheel2">
      <circle v-for="n in num" class="chainwheel" cx="300" cy="315" r="20"/>
    </g>
</template>
<script>
import { map } from 'underscore'
import { mapGetters } from 'vuex'

export default {
  name: 'chainwheel',
  data () {
    return {
      num: 13
    }
  },
  mounted(){
    this.makeChainWheel();
  }, 
  watch: {
    activeStage(newStage) {
        this.rotateWheel(newStage.ID);
    }
  },
  computed: {
    ...mapGetters({
      activeStage: 'getActiveStage',
    })
  },
  methods: {
      makeChainWheel(){
          let spokes = document.querySelectorAll(".chainwheel")
          let angle = 360/this.num;
          map(spokes, (index, key) => {
            TweenMax.fromTo(index, 2, {
              rotation: angle, transformOrigin: "0% 50%", opacity: 0
            }, {
              rotation: angle*key, transformOrigin: "0% 50%", opacity: 0.9
            })
          });
      }, // end of makeWheel
      rotateWheel(_stageId) {
        var angle = 360/this.num;
        TweenMax.to(".wheel2", 3, {
              rotation: 10*_stageId+'_cw', transformOrigin: "50% 50%", opacity: 0.9
            }, 1)
      },
  }, // end of methods
}
</script>
<style scoped>
.chainwheel { fill:none; stroke-width: 0.2; stroke-dasharray: 0; fill-opacity: 0.3; }
.wheel2 { fill:#232321; fill-opacity:0.7; stroke-opacity: 1; stroke: #2e4e4a; stroke-dasharray: .5 2;stroke-width: 7; }
</style>
