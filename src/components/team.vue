<template>
  <g>

    <g id="front-wheel">

	    <circle class="wheel" fill="none" 
             stroke="#E91E63" stroke-width="5" 
             cx="463.859" cy="296.569" r="100"/>

      <g id="front-spoke" v-for="team in teams" class="team">

        <rect x="369" y="295" class="spoke"
        width="95" height="2" 
        stroke="#E91E63" stroke-width="2"/>

        <text v-if="hasWon(team.UCI_CODE)" 
             @click="[setActiveData(team.UCI_CODE), goAnimate()]" 
             :class = "[{ 'active': isActive(team.ID) }]"
        transform="matrix(1 0 0 1 370 291)">
          {{ team.UCI_CODE }}
        </text>

        <text v-else="hasWon(team.UCI_CODE)" 
            class="noWin"
            transform="matrix(1 0 0 1 370 291)">
          {{ team.UCI_CODE }}
        </text>

      </g>

    </g>

    <teamdetail/>

  </g>
</template>
<script>
    import { map, find } from 'underscore'; 
    import { mapGetters, mapActions } from 'vuex'
    import teamdetail from './teamdetail.vue'
    import mixin from '../mixin.js'
    export default {
        name: 'team',
        components: { teamdetail },
        mixins: [mixin],
         computed: {
            ...mapGetters({
                teams: 'getTeams',
                stages: 'getStages',
                team: 'getActiveTeam' // activeTeam
            })
        }, // end of computed
        watch: {
            teams(newValue) {
                this.$nextTick(function() {
                    this.setTeamSpokes()
                })
            }
        }, 
        methods: {
            ...mapActions({
                setActiveData: 'setActiveData'
            }),
            // this could go a state variable
            isActive(team_id) {
                return team_id == this.team.ID
            }, // end of isActive()

            hasWon (team_UCI_CODE) {
                let k = find(this.stages, (stage) => {
                    return stage.UCI_CODE == team_UCI_CODE
                })
                return k ? true : false  
            } // end of hasWon
        } // end of methods 
    }
</script>
<style scoped>
.wheel { fill:#FFF; fill-opacity: 0.3; stroke-opacity: 0.7; stroke-dasharray: 100 2;stroke-width: 4; stroke: #E91E63; }
.team { font-size: 10px; fill: #E91E63; opacity: 0; cursor: pointer;}
.spoke { fill: transparent; fill-opacity: 0.5; stroke: #E91E63; stroke-width: 0.5; stroke-dasharray: 1 1; }
.active { font-weight: bold;  fill: #3F51B5; }
.noWin { cursor: not-allowed; fill:"black" !important; }
</style>