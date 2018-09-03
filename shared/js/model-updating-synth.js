// TODO: Copied directly from the-long-distributed-way.
// It's time to move this to Aconite or Flocking.
// Note all the caveats from there about how this is insane
// and Flocking needs to be fixed to support standard
// Infusion model relays.
fluid.defaults("timeAddsUp.modelUpdatingSynth", {
    gradeNames: "flock.synth.frameRate",

    targetModelPath: "value",

    components: {
        target: {
            type: "fluid.notImplemented"
        }
    },

    events: {
        onTick: "{clock}.events.onTick"
    },

    listeners: {
        onTick: "timeAddsUp.modelUpdatingSynth.updateValue({that})"
    }
});

timeAddsUp.modelUpdatingSynth.updateValue = function (that) {
    var val = that.value();
    that.target.applier.change(that.options.targetModelPath, val);
};
