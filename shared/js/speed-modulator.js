fluid.defaults("timeAddsUp.speedModulator", {
    gradeNames: "flock.synth.frameRate",

    fps: "{compositor}.options.fps",

    synthDef: {
        ugen: "flock.ugen.value",
        value: 1.0
    },

    components: {
        enviro: "{compositor}.enviro"
    },

    events: {
        onTick: "{clock}.events.onTick"
    },

    listeners: {
        onTick: {
            funcName: "timeAddsUp.speedModulator.modulate",
            args: ["{that}", "{layer}"]
        }
    }
});

timeAddsUp.speedModulator.modulate = function (that, layer) {
    var rate = that.value();
    layer.source.element.playbackRate = rate;
};