fluid.defaults("timeAddsUp.cookie.glRenderer", {
    gradeNames: "aconite.glRenderer",

    shaders: {
        fragment: "src/shaders/cookie.frag",
        vertex: "../node_modules/aconite/src/shaders/stageVertexShader.vert"
    },

    uniforms: {
        samplers: {
            type: "1iv",
            values: [
                // TODO: Generate this based on the compositor's
                // number of layerSpecs.
                [
                    0, 1, 2, 3,
                    4, 5, 6, 7,
                    8, 9, 10, 11,
                    12, 13, 14, 15
                ]
            ]
        },

        opacities: {
            type: "1fv",
            values: [
                // TODO: Generate this based on the compositor's
                // number of layerSpecs.
                [
                    1/16, 1/16, 1/16, 1/16,
                    1/16, 1/16, 1/16, 1/16,
                    1/16, 1/16, 1/16, 1/16,
                    1/16, 1/16, 1/16, 1/16
                ]
            ]
        }
    }
});
