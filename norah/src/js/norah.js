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

    layerSpecs: [
        {
            url: "{that}.options.layerURLs.1",
            targetModelPath: "opacities.0.0",
            clip: {
                outTime: 18
            }
        },
        {
            url: "{that}.options.layerURLs.2",
            targetModelPath: "opacities.0.1",
            clip: {
                inTime: 10,
                outTime: 60
            }
        },
        {
            url: "{that}.options.layerURLs.2",
            targetModelPath: "opacities.0.2",
            clip: {
                inTime: 20,
                outTime: 60
            }
        },
        {
            url: "{that}.options.layerURLs.2",
            targetModelPath: "opacities.0.3",
            clip: {
                inTime: 34,
                outTime: 60
            }
        },
        {
            url: "{that}.options.layerURLs.2",
            targetModelPath: "opacities.0.4",
            clip: {
                inTime: 38,
                outTime: 60
            }
        },
        {
            url: "{that}.options.layerURLs.2",
            targetModelPath: "opacities.0.5",
            clip: {
                inTime: 47,
                outTime: 60
            }
        },
        {
            url: "{that}.options.layerURLs.3",
            targetModelPath: "opacities.0.6",
            clip: {
                inTime: 3,
                outTime: 14
            }
        },
        {
            url: "{that}.options.layerURLs.3",
            targetModelPath: "opacities.0.7",
            clip: {
                outTime: 14
            }
        },
        {
            url: "{that}.options.layerURLs.4",
            targetModelPath: "opacities.0.8",
            clip: {
                inTime: 2,
                outTime: 10
            }
        },
        {
            url: "{that}.options.layerURLs.4",
            targetModelPath: "opacities.0.9",
            clip: {
                outTime: 10
            }
        }
    ],

    components: {
        glRenderer: {
            type: "timeAddsUp.norah.glRenderer"
        }
    }
});
