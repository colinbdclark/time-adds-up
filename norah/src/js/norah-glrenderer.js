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
        }

        // Uniforms for processing variables.
    }
});
