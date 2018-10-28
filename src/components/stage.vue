<template>
  <g>
  <g id="instruction">
    <polygon fill="#1C1C1C" points="118.737,213.492 110.468,221.551 107.623,210.36 	"/>
    <path fill="none" stroke="#1C1C1C" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M98,169.25
      c0,0,8.5,4.005,13.25,17.005s1.674,26.369,1.674,26.369"/>
    <text transform="matrix(1 0 0 1 95.6667 156.166)"><tspan x="0" y="0" font-size="8">Click on the spoke</tspan><tspan x="0" y="9.6" font-size="8">to activate the infographic</tspan></text>
  </g>
    <g class="cycleBody">
      		<path d="M439.868,166.682v8.865c17.967,0,32.505-14.656,32.505-32.505c0-10.638-5.319-20.094-13.237-26.477
			c0.354-0.473,0.71-1.773,0.71-2.364c0-1.182-0.946-2.364-1.655-3.31c2.364-3.546,4.256-7.683,5.318-12.293
			c0.592-3.191,0.592-6.146,0.474-9.219c0,0-1.182-1.773-4.02-2.364c-2.718-0.473-4.728,0.591-4.728,0.591
			c0.355,3.546,0.355,6.619,0,9.456c-1.182,4.728-3.31,9.102-6.501,11.82h-63.828c-2.718,0-5.082,2.364-5.082,5.555
			c0,5.555,11.348,10.047,3.31,14.657c-40.896,14.184-129.074,30.259-157.56,33.096l-14.184-42.552l16.311,0.591
			c4.965,0,8.865-2.364,9.456-7.329c0.237-4.964-3.546-7.683-8.274-8.038l-54.963-2.364c-4.964,0-8.865,2.364-9.456,7.328
			c0,4.964,3.546,7.564,8.983,7.919l18.203,1.182l23.64,65.364l-83.094,102.834h-0.591c-5.201,0-9.811,4.729-9.811,10.401
			c0,5.2,4.019,9.811,9.456,9.811c2.719,0,5.319-1.182,7.092-2.601c0,0,144.204,22.458,146.804,22.458
			c6.619,0,11.583-2.01,15.957-8.628L401.573,178.62l55.554,122.218c0.946,3.546,4.729,5.201,8.274,3.783
			c3.546-1.183,5.438-5.202,4.137-8.748c0,0-76.83-175.289-77.54-176.353h47.28c13.238,0,23.877,10.638,23.877,23.994
			c0,13.002-10.639,23.64-23.641,23.64h-0.354l0.592-0.354L439.868,166.682z M141.768,296.348c0-1.772-0.591-3.546-1.773-4.965
			l79.903-91.84l49.644,112.526l-127.655-15.838h-0.237L141.768,296.348z M229.709,179.331l158.625-35.459l8.509,22.458
			c-0.472,5.674-88.058,119.382-109.925,143.021L229.709,179.331L229.709,179.331z"/>
    </g>

    <g id="rear-wheel">
      <circle id="circle_1_" fill="none" class="wheel"
             stroke="#3F51B5" stroke-width="5" 
             cx="129.859" cy="296.569" r="100"/>
      <g id="rear-spoke" class="stage"
        v-for="stage in stages"
         @click="[setActiveData(stage.ID), goAnimate()]"
         :class="activeStageDetail.ID == stage.ID ? 'active' : ''">
        <rect x="130" y="295" class="spoke"
             width="95" height="2" />
        <text transform="matrix(1 0 0 1 189 291)">
          {{stage.NAME}}
        </text>
      </g>
    </g>
    <stagedetail />
  </g>
</template>
<script>
import { map, find } from 'underscore'; 
import { mapGetters, mapActions } from 'vuex'
import stagedetail from './stagedetail.vue'
import mixin from '../mixin.js'
export default {
  name: 'stage',
  components: { stagedetail },
  mixins: [mixin],
  computed: {
    ...mapGetters({
        stages: 'getStages',
        teams: 'getTeams',
        activeStageDetail: 'getActiveStage',
        activeTeam: 'getActiveTeam'
    })
  },
  watch: {
    stages(newValue) {
      this.$nextTick(function() {
         this.setStageSpokes()
      })
    }
  }, 
  methods: {
    ...mapActions({
        fetchStages: 'fetchStages',
        fetchTeams: 'fetchTeams',
        setActiveData: 'setActiveData'
    })
  } // end of methods
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wheel { fill:#FFF; fill-opacity: 0.3; stroke-opacity: 0.7; stroke-dasharray: 100 2; stroke-width: 4; stroke: #3F51B5; }
#instruction { opacity: 0 }
.svgStyle {  background-color: #a4d6d4; padding: 20px; border-radius: 10px; }
.stage { font-size: 8px; cursor: pointer; fill: #3F51B5; }
.spoke {  fill: transparent; stroke: #3F51B5; stroke-width: 0.5; stroke-dasharray: 1 1; }
.active { font-weight: bold;  fill: #E91E63; }
.cycleBody { fill:#2196F3; fill-opacity: 1; stroke: none;  }
</style>