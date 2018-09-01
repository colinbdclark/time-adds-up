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

        oneLayer: {
            type: "timeAddsUp.layer",
            options: {
                url: "{compositor}.options.layerURLs.0",
                textureNum: 0,
                model: {
                    inTime: 6,
                    outTime: 22
                }
            }
        },

        twoLayer: {
            type: "timeAddsUp.layer",
            options: {
                url: "{compositor}.options.layerURLs.0",
                textureNum: 1,
                model: {
                    inTime: 8,
                    outTime: 18
                }
            }
        },

        threeLayer: {
            type: "timeAddsUp.layer",
            options: {
                url: "{compositor}.options.layerURLs.0",
                textureNum: 2
            }
        },

        fourLayer: {
            type: "timeAddsUp.layer",
            options: {
                url: "{compositor}.options.layerURLs.1",
                textureNum: 3
            }
        },

        fiveLayer: {
            type: "timeAddsUp.layer",
            options: {
                url: "{compositor}.options.layerURLs.2",
                textureNum: 4
            }
        },

        sixLayer: {
            type: "timeAddsUp.layer",
            options: {
                url: "{compositor}.options.layerURLs.2",
                textureNum: 5,
                model: {
                    inTime: 20
                }
            }
        },

        sevenLayer: {
            type: "timeAddsUp.layer",
            options: {
                url: "{compositor}.options.layerURLs.3",
                textureNum: 6
            }
        },

        eightLayer: {
            type: "timeAddsUp.layer",
            options: {
                url: "{compositor}.options.layerURLs.3",
                textureNum: 7,
                model: {
                    inTime: 25
                }
            }
        },

        nineLayer: {
            type: "timeAddsUp.layer",
            options: {
                url: "{compositor}.options.layerURLs.5",
                textureNum: 8,
                model: {
                    inTime: 10
                }
            }
        },

        tenLayer: {
            type: "timeAddsUp.layer",
            options: {
                url: "{compositor}.options.layerURLs.5",
                textureNum: 9
            }
        },

        elevenLayer: {
            type: "timeAddsUp.layer",
            options: {
                url: "{compositor}.options.layerURLs.5",
                textureNum: 10,
                model: {
                    inTime: 30,
                    outTime: 69
                }
            }
        }
    }
});
