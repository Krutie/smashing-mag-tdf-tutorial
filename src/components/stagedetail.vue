<template>
  <g>

<path id="rear-text-path-outer" fill="none" stroke="none" stroke-miterlimit="10" d="M48.545,377.883
		c-44.914-44.914-44.914-117.715,0-162.628c44.914-44.914,117.715-44.914,162.628,0c44.914,44.913,44.914,117.715,0,162.628
		c-42.107,42.107-108.724,44.737-153.894,7.895"/>

    <text>
          <textPath xlink:href="#rear-text-path-outer" startOffset="0%" class="stageDetail" fill="#673AB7" >
              {{ stage.WINNER }} wins {{ stage.NAME }} - {{ stage.KEY_MOMENT }}
          </textPath>
    </text>
    


    <text id="title" class="title" transform="matrix(1 0 0 1 13.6172 31.4097)" fill="#673AB7" font-family="'MyriadPro-Regular'" font-size="21">
    TOUR DE FRANCE 2017 * 104th Edition * 3540 Kilometres</text>
    <text id="route-detail" class="route" transform="matrix(1 0 0 1 15.6172 56.3921)" fill="#E91E63" font-family="'MyriadPro-Regular'" font-size="14">
      {{ stage.DISTANCE }} KM * {{ stage.ROUTE }} * {{ stage.TYPE }} Route 
    </text>

  <text id="date" class="date" transform="matrix(1 0 0 1 15.6172 80.8945)" fill="#79CDF7" font-family="'MyriadPro-Regular'" font-size="14">
  {{ stage.DATE }}
  </text>

    <rect x="15" y="65" class="distance" :width="stage.DISTANCE" height="2" rx="1" fill="#59b9f5" />
  </g>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'stagedetail',
  computed: {
    ...mapGetters({
        stage: 'getActiveStage'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title { fill: #673AB7; }
text { fill:#232321; font-size: 12px; }
.route, .date, .stageDetail { opacity: 0; font-size: 10px;}
</style>