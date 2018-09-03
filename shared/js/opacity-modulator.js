fluid.defaults("timeAddsUp.opacityModulator", {
    gradeNames: "timeAddsUp.modelUpdatingSynth",

    fps: "{compositor}.options.fps",

    targetModelPath: "{layer}.options.targetModelPath",

    components: {
        target: "{compositor}"
    },

    synthDef: {
        ugen: "flock.ugen.value",
        value: 1/9
    }
});
