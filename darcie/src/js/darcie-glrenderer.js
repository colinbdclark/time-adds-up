fluid.defaults("timeAddsUp.darcie.glRenderer", {
    gradeNames: "aconite.glRenderer",

    shaders: {
        fragment: "src/shaders/darcie.frag",
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

        tenSampler: {
            type: "1i",
            values: 9
        },

        elevenSampler: {
            type: "1i",
            values: 10
        }

        // Uniforms for processing variables.
    }
});
