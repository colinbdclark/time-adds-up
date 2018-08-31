fluid.defaults("timeAddsUp.darcie.compositor", {
    gradeNames: "timeAddsUp.compositor",

    layerURLs: [
        "videos/1080x720/1.m4v",
        "videos/1080x720/2.m4v",
        "videos/1080x720/3.m4v",
        "videos/1080x720/4.m4v",
        "videos/1080x720/5.m4v",
        "videos/1080x720/6.m4v"
    ],

    components: {
        glRenderer: {
            type: "timeAddsUp.darcie.glRenderer"
        },

        // Note: This redundancy is due to
        // problems with the use of dynamicComponents
        // when instantiating these layers.
        oneLayer: {
            type: "timeAddsUp.layer",
            options: {
                url: "{compositor}.options.layerURLs.0",
                textureNum: 0
            }
        },

        twoLayer: {
            type: "timeAddsUp.layer",
            options: {
                url: "{compositor}.options.layerURLs.1",
                textureNum: 1
            }
        },

        threeLayer: {
            type: "timeAddsUp.layer",
            options: {
                url: "{compositor}.options.layerURLs.2",
                textureNum: 2
            }
        },

        fourLayer: {
            type: "timeAddsUp.layer",
            options: {
                url: "{compositor}.options.layerURLs.3",
                textureNum: 3
            }
        },

        fiveLayer: {
            type: "timeAddsUp.layer",
            options: {
                url: "{compositor}.options.layerURLs.4",
                textureNum: 4,
                model: {
                    inTime: 10
                }
            }
        },

        sixLayer: {
            type: "timeAddsUp.layer",
            options: {
                url: "{compositor}.options.layerURLs.5",
                textureNum: 5
            }
        }
    }
});
