fluid.defaults("timeAddsUp.cookie.compositor", {
    gradeNames: "timeAddsUp.compositor",

    layerURLs: [
        "videos/1080x720/1.m4v",
        "videos/1080x720/2.m4v",
        "videos/1080x720/3.m4v",
        "videos/1080x720/4.m4v",
        "videos/1080x720/5.m4v"
    ],

    layerSpecs: [
        {
            url: "{that}.options.layerURLs.0",
            targetModelPath: "opacities.0.0"
        },
        {
            url: "{that}.options.layerURLs.0",
            targetModelPath: "opacities.0.1",
            clip: {
                inTime: 10
            }
        },
        {
            url: "{that}.options.layerURLs.0",
            targetModelPath: "opacities.0.2",
            clip: {
                inTime: 20
            }
        },
        {
            url: "{that}.options.layerURLs.0",
            targetModelPath: "opacities.0.3",
            clip: {
                inTime: 30
            }
        },
        {
            url: "{that}.options.layerURLs.0",
            targetModelPath: "opacities.0.4",
            clip: {
                inTime: 40
            }
        },
        {
            url: "{that}.options.layerURLs.0",
            targetModelPath: "opacities.0.5",
            clip: {
                inTime: 50
            }
        },
        {
            url: "{that}.options.layerURLs.0",
            targetModelPath: "opacities.0.6",
            clip: {
                inTime: 60
            }
        },
        {
            url: "{that}.options.layerURLs.0",
            targetModelPath: "opacities.0.7",
            clip: {
                inTime: 70
            }
        },
        {
            url: "{that}.options.layerURLs.0",
            targetModelPath: "opacities.0.8",
            clip: {
                inTime: 80
            }
        },
        {
            url: "{that}.options.layerURLs.0",
            targetModelPath: "opacities.0.9",
            clip: {
                inTime: 90
            }
        },
        {
            url: "{that}.options.layerURLs.0",
            targetModelPath: "opacities.0.10",
            clip: {
                inTime: 100
            }
        },
        {
            url: "{that}.options.layerURLs.0",
            targetModelPath: "opacities.0.11",
            clip: {
                inTime: 110
            }
        },
        {
            url: "{that}.options.layerURLs.0",
            targetModelPath: "opacities.0.12",
            clip: {
                inTime: 120
            }
        },
        {
            url: "{that}.options.layerURLs.0",
            targetModelPath: "opacities.0.13",
            clip: {
                inTime: 130
            }
        },
        {
            url: "{that}.options.layerURLs.0",
            targetModelPath: "opacities.0.14",
            clip: {
                inTime: 140
            }
        },
        {
            url: "{that}.options.layerURLs.0",
            targetModelPath: "opacities.0.15",
            clip: {
                inTime: 150
            }
        }
    ],

    // TODO: DistributeOptions.
    dynamicComponents: {
        layer: {
            options: {
                components: {
                    speedModulator: {
                        type: "timeAddsUp.cookie.speedModulator"
                    },

                    opacityModulator: {
                        type: "timeAddsUp.cookie.opacityModulator"
                    }
                }
            }
        }
    },

    components: {
        glRenderer: {
            type: "timeAddsUp.cookie.glRenderer"
        }
    }
});
