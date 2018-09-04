fluid.defaults("timeAddsUp.norah.compositor", {
    gradeNames: "timeAddsUp.compositor",

    layerURLs: [
        "videos/1080x720/1.m4v",
        "videos/1080x720/2.m4v",
        "videos/1080x720/3.m4v",
        "videos/1080x720/4.m4v",
        "videos/1080x720/5.m4v"
    ],

    uniformModelMap: {
        opacities: "opacities"
    },

    model: {
        opacities: [
            "{glRenderer}.options.uniforms.opacities.values"
        ]
    },

    components: {
        glRenderer: {
            type: "timeAddsUp.norah.glRenderer"
        },

        // Note: This redundancy is due to
        // problems with the use of dynamicComponents
        // when instantiating these layers.

        oneLayer: {
            type: "timeAddsUp.layer",
            options: {
                url: "{compositor}.options.layerURLs.4",
                textureNum: 0,
                targetModelPath: "opacities.0.0",
                model: {
                    frameRate: 24,
                    outTime: 10
                }
            }
        },

        twoLayer: {
            type: "timeAddsUp.layer",
            options: {
                url: "{compositor}.options.layerURLs.2",
                textureNum: 1,
                targetModelPath: "opacities.0.1",
                model: {
                    frameRate: 24,
                    inTime: 38,
                    outTime: 60
                }
            }
        },

        threeLayer: {
            type: "timeAddsUp.layer",
            options: {
                url: "{compositor}.options.layerURLs.2",
                textureNum: 2,
                targetModelPath: "opacities.0.2",
                model: {
                    frameRate: 24,
                    inTime: 10,
                    outTime: 60
                }
            }
        },

        fourLayer: {
            type: "timeAddsUp.layer",
            options: {
                url: "{compositor}.options.layerURLs.2",
                textureNum: 3,
                targetModelPath: "opacities.0.3",
                model: {
                    frameRate: 24,
                    inTime: 20,
                    outTime: 60
                }
            }
        },

        fiveLayer: {
            type: "timeAddsUp.layer",
            options: {
                url: "{compositor}.options.layerURLs.2",
                textureNum: 4,
                targetModelPath: "opacities.0.4",
                model: {
                    frameRate: 24,
                    inTime: 30,
                    outTime: 60
                }
            }
        },

        sixLayer: {
            type: "timeAddsUp.layer",
            options: {
                url: "{compositor}.options.layerURLs.1",
                textureNum: 5,
                targetModelPath: "opacities.0.5",
                model: {
                    frameRate: 24,
                    outTime: 18
                }
            }
        },

        sevenLayer: {
            type: "timeAddsUp.layer",
            options: {
                url: "{compositor}.options.layerURLs.3",
                textureNum: 6,
                targetModelPath: "opacities.0.6",
                model: {
                    frameRate: 24,
                    outTime: 14
                }
            }
        },

        eightLayer: {
            type: "timeAddsUp.layer",
            options: {
                url: "{compositor}.options.layerURLs.2",
                textureNum: 7,
                targetModelPath: "opacities.0.7",
                model: {
                    frameRate: 24,
                    inTime: 47,
                    outTime: 60
                }
            }
        },

        nineLayer: {
            type: "timeAddsUp.layer",
            options: {
                url: "{compositor}.options.layerURLs.4",
                textureNum: 8,
                targetModelPath: "opacities.0.7",
                model: {
                    frameRate: 24,
                    inTime: 2,
                    outTime: 10
                }
            }
        }
    }
});
