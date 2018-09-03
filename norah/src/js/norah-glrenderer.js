fluid.defaults("timeAddsUp.norah.glRenderer", {
    gradeNames: "aconite.glRenderer",

    shaders: {
        fragment: "src/shaders/norah.frag",
        vertex: "../node_modules/aconite/src/shaders/stageVertexShader.vert"
    },

    uniforms: {
        samplers: {
            type: "1iv",
            values: [
                [0, 1, 2, 3, 4, 5, 6, 7, 8]
            ]
        },

        opacities: {
            type: "1fv",
            values: [[1/9, 1/9, 1/9, 1/9, 1/9, 1/9, 1/9, 1/9, 1/9]]
        }
    }
});
