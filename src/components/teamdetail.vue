<template>
  <g>
    <path id="front-text-path-outer" fill="none" stroke="none" stroke-miterlimit="10" d="M382.543,377.884
		c-44.914-44.914-44.913-117.716,0.001-162.63c44.913-44.914,117.716-44.914,162.629-0.001c44.913,44.916,44.913,117.717,0,162.631
		c-41.653,41.648-107.267,44.677-152.41,9.087"/>
      <text>
           <textPath xlink:href="#front-text-path-outer" class="teamDetail" startOffset="0%" fill="#E91E63">
          {{ team.NAME }} - {{ team.COUNTRY }}
           </textPath>
      </text>
  </g>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'teamdetail',
   computed: {
      ...mapGetters({
          team: 'getActiveTeam'
      })
  } // end of computed
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
text { fill:#232321; font-size: 10px; }
.teamDetail { opacity: 0; }
</style>