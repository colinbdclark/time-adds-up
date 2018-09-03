fluid.defaults("timeAddsUp.norah.glRenderer", {
    gradeNames: "aconite.glRenderer",

    shaders: {
        fragment: "src/shaders/norah.frag",
        vertex: "../node_modules/aconite/src/shaders/stageVertexShader.vert"
    },

    uniforms: {
        // Samplers for each layer.
        // TODO: These should be generated programmatically.
        oneSampler: {
            type: "1i",
            values: 0
        },

        twoSampler: {
            type: "1i",
            values: 1
        },

        threeSampler: {
            type: "1i",
            values: 2
        },

        fourSampler: {
            type: "1i",
            values: 3
        },

        fiveSampler: {
            type: "1i",
            values: 4
        },

        sixSampler: {
            type: "1i",
            values: 5
        },

        sevenSampler: {
            type: "1i",
            values: 6
        },

        eightSampler: {
            type: "1i",
            values: 7
        },

        nineSampler: {
            type: "1i",
            values: 8
        },

        // Uniforms for modulating layer opacity.
        oneOpacity: {
            type: "1f",
            values: 1/9
        },

        twoOpacity: {
            type: "1f",
            values: 1/9
        },

        threeOpacity: {
            type: "1f",
            values: 1/9
        },

        fourOpacity: {
            type: "1f",
            values: 1/9
        },

        fiveOpacity: {
            type: "1f",
            values: 1/9
        },

        sixOpacity: {
            type: "1f",
            values: 1/9
        },

        sevenOpacity: {
            type: "1f",
            values: 1/9
        },

        eightOpacity: {
            type: "1f",
            values: 1/9
        },

        nineOpacity: {
            type: "1f",
            values: 1/9
        }
    }
});
