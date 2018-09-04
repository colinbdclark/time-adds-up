fluid.defaults("timeAddsUp.layer", {
    gradeNames: "aconite.compositableVideo",

    textureNum: 0,

    // TODO: Rename this.
    targetModelPath: "opacity",

    bindToTextureUnit: {
        expander: {
            funcName: "timeAddsUp.layer.makeTextureUnitString",
            args: ["{that}.options.textureNum"]
        }
    },

    model: {
        url: "{that}.options.url",
        inTime: "{that}.options.inTime",
        outTime: "{that}.options.outTime",
        duration: "{that}.options.duration",
        loop: true,
        frameRate: 24
    },

    components: {
        speedModulator: {
            type: "timeAddsUp.speedModulator"
        },

        opacityModulator: {
            type: "timeAddsUp.opacityModulator"
        }
    }
});

timeAddsUp.layer.makeTextureUnitString = function (textureNum) {
    return "TEXTURE" + textureNum;
};
