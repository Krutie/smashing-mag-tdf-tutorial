<template>
  <g>
    <transition name="fade">         
       <g v-if="activeStage.ID>1" class="button"
          @click="[setActiveData(activeStage.ID-1), goAnimate()]">
            	<circle fill="#79CDF7" cx="265.806" cy="392.069" r="17.5"/>
	
		<polyline fill="none" stroke="#F8F7F9" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
		268.839,398.27 262.089,392.09 268.668,386.043 	"/>

       </g>
    </transition>

    <transition name="fade">
        <g v-if="activeStage.ID<stageLength" class="button"
          @click="setActiveData(activeStage.ID+1), goAnimate()">
          	<circle fill="#79CDF7" cx="326.383" cy="392.176" r="17.5"/>
	
		<polyline fill="none" stroke="#F8F7F9" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
		323.36,385.975 330.089,392.155 323.511,398.203 	"/>

        </g>
    </transition>
  </g>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex'
    import mixin from '../mixin.js'

    export default{
        name:'navigation',
        mixins: [mixin],
        computed: {
            ...mapGetters({
                activeStage: 'getActiveStage',
                stages: 'getStages'
            }),
            stageLength () {
                return this.stages.length
            }
        }, // end of computed
        methods: {
            ...mapActions({
                setActiveData: 'setActiveData'
            })
        }
    }
</script>
<style scoped>
.button { cursor: pointer; }
.rect {fill: #59b9f5; fill-opacity:1; cursor: pointer; }
.title { fill:black; font-size: 9px; text-transform:uppercase; cursor: pointer;}
</style>