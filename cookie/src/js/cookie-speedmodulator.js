fluid.defaults("timeAddsUp.cookie.speedModulator", {
    gradeNames: "timeAddsUp.speedModulator",

    synthDef: {
        ugen: "flock.ugen.triOsc",
        freq: {
            ugen: "flock.ugen.lfNoise",
            mul: 1/30,
            options: {
                interpolation: "linear"
            }
        },
        mul: 0.2,
        add: 0.7
    }
})
