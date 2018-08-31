fluid.defaults("timeAddsUp.layer", {
    gradeNames: "aconite.compositableVideo",

    textureNum: 0,

    bindToTextureUnit: {
        expander: {
            funcName: "timeAddsUp.layer.makeTextureUnitString",
            args: ["{that}.options.textureNum"]
        }
    },

    model: {
        url: "{that}.options.url",
        loop: true
    }
});

timeAddsUp.layer.makeTextureUnitString = function (textureNum) {
    return "TEXTURE" + textureNum;
};
