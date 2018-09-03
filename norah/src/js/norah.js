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
        oneOpacity: "oneOpacity",
        twoOpacity: "twoOpacity",
        threeOpacity: "threeOpacity",
        fourOpacity: "fourOpacity",
        fiveOpacity: "fiveOpacity",
        sixOpacity: "sixOpacity",
        sevenOpacity: "sevenOpacity",
        eightOpacity: "eightOpacity",
        nineOpacity: "nineOpacity"
    },

    // TODO: ever heard of this thing called an array?
    model: {
        oneOpacity: "{glRenderer}.options.uniforms.oneOpacity.values",
        twoOpacity: "{glRenderer}.options.uniforms.twoOpacity.values",
        threeOpacity: "{glRenderer}.options.uniforms.threeOpacity.values",
        fourOpacity: "{glRenderer}.options.uniforms.fourOpacity.values",
        fiveOpacity: "{glRenderer}.options.uniforms.fiveOpacity.values",
        sixOpacity: "{glRenderer}.options.uniforms.sixOpacity.values",
        sevenOpacity: "{glRenderer}.options.uniforms.sevenOpacity.values",
        eightOpacity: "{glRenderer}.options.uniforms.eightOpacity.values",
        nineOpacity: "{glRenderer}.options.uniforms.nineOpacity.values"
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
                targetModelPath: "oneOpacity",
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
                targetModelPath: "twoOpacity",
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
                targetModelPath: "threeOpacity",
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
                targetModelPath: "fourOpacity",
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
                targetModelPath: "fiveOpacity",
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
                targetModelPath: "sixOpacity",
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
                targetModelPath: "sevenOpacity",
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
                targetModelPath: "eightOpacity",
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
                targetModelPath: "nineOpacity",
                model: {
                    frameRate: 24,
                    inTime: 2,
                    outTime: 10
                }
            }
        }
    }
});
