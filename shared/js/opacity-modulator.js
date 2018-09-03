fluid.defaults("timeAddsUp.opacityModulator", {
    gradeNames: "timeAddsUp.modelUpdatingSynth",

    fps: "{compositor}.options.fps",

    targetModelPath: "{layer}.options.targetModelPath",

    components: {
        target: "{compositor}"
    },

    synthDef: {
        ugen: "flock.ugen.lfNoise",
        freq: 1/10,
        mul: 1/12,
        add: 1/18,
        options: {
            interpolation: "linear"
        }
    }
});
