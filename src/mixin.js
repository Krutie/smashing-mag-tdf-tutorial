import { map, find } from "underscore";

export default {
  methods: {
    setStageSpokes() {
      let state = this.$store.state;
      let degrees = document.querySelectorAll(".stage");
      let angle = 360 / state.stages.length;
      map(degrees, (index, key) => {
        TweenMax.to(
          index,
          2,
          {
            rotation: angle * key,
            transformOrigin: "0% 100%",
            opacity: 0.9
          },
          1
        );
      });
      TweenLite.to("#instruction", 2, { opacity: 1 });
    }, // end of setStageSpokes()

    setTeamSpokes() {
      let state = this.$store.state;
      let degrees = document.querySelectorAll(".team");
      let angle = 360 / state.teams.length;
      map(degrees, (index, key) => {
        TweenMax.to(
          index,
          2,
          {
            rotation: angle * key,
            transformOrigin: "100% 100%",
            opacity: 0.9
          },
          1
        );
      });
    }, // end of setTeamSpokes()
    goAnimate() {
      // remove instruction
      TweenLite.to("#instruction", 1, { opacity: 0 });

      // get state from store
      let state = this.$store.state;

      // get DOM Elements for stages
      let stageSpokes = document.querySelectorAll(".stage");
      let stageAngle = 360 / state.stages.length;

      // get DOM Elements for teams
      let teamSpokes = document.querySelectorAll(".team");
      let teamAngle = 360 / state.teams.length;

      let tl = new TimelineMax();
      tl.add("start");

      this.arrangeSpokes(
        state.activeStage.ID,
        stageSpokes,
        stageAngle,
        "0% 100%"
      );

      tl.fromTo(
        ".wheel",
        2,
        { strokeDashoffset: 1500 },
        { strokeDashoffset: 0 },
        0.1,
        "start+=1"
      );

      // Opacity 0 to 1
      tl.staggerFromTo(
        [".route", ".date", ".text4", ".text5"],
        1,
        { opacity: 0 },
        { opacity: 1 },
        0.3,
        "start+=1"
      );
      tl.fromTo(
        ".stageDetail",
        1,
        {
          opacity: 0,
          attr: { startOffset: "0%" }
        },
        {
          opacity: 1,
          attr: { startOffset: "10%" }
        },
        0.5
      );

      tl.fromTo(
        ".teamDetail",
        1,
        {
          opacity: 0,
          attr: { startOffset: "0%" }
        },
        {
          opacity: 1,
          attr: { startOffset: "33%" }
        },
        0.5
      );

      // increase route distance - with 0 to distance
      tl.staggerFromTo(
        ".distance",
        1,
        { width: 0, opacity: 0 },
        { width: state.activeStage.DISTANCE, opacity: 1 },
        0.6,
        "start+=1"
      );

      this.arrangeSpokes(
        state.activeTeam.ID,
        teamSpokes,
        teamAngle,
        "100% 100%"
      );
    }, // end of hello

    arrangeSpokes(activeId, spokes, angle, TransformOrigin, Delay) {
      let tl = new TimelineMax();
      tl.add("start");

      map(spokes, (index, key) => {
        if (activeId == key + 1) {
          tl.to(
            index,
            1,
            {
              rotation: 0 + "_short",
              transformOrigin: TransformOrigin,
              opacity: 0.9
            },
            "start+=1"
          );
        } else if (key == 0) {
          tl.to(
            index,
            1.5,
            {
              rotation: (activeId - 1) * angle + "_short",
              transformOrigin: TransformOrigin,
              opacity: 0.9
            },
            "start+=1"
          );
        } else {
          tl.to(
            index,
            2,
            {
              rotation: key * angle + "_short",
              transformOrigin: TransformOrigin,
              opacity: 0.9
            },
            "start+=1"
          );
        } // end of if statement
      });
    }
  } // end of methods
};
