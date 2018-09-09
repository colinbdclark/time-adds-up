fluid.defaults("timeAddsUp.darcie.compositor", {
    gradeNames: "timeAddsUp.compositor",

    layerURLs: [
        "videos/1080x720/2.m4v",
        "videos/1080x720/3.m4v",
        "videos/1080x720/4.m4v",
        "videos/1080x720/5.m4v",
        "videos/1080x720/6.m4v"
    ],

    layerSpecs: [
        {
            url: "{that}.options.layerURLs.0"
        },
        {
            url: "{that}.options.layerURLs.1"
        },
        {
            url: "{that}.options.layerURLs.1",
            clip: {
                inTime: 20
            }
        },
        {
            url: "{that}.options.layerURLs.2"
        },
        {
            url: "{that}.options.layerURLs.2",
            clip: {
                inTime: 25
            }
        },
        {
            url: "{that}.options.layerURLs.3"
        },
        {
            url: "{that}.options.layerURLs.4"
        },
        {
            url: "{that}.options.layerURLs.4",
            clip: {
                inTime: 3
            }
        },
        {
            url: "{that}.options.layerURLs.4",
            clip: {
                inTime: 7
            }
        },
        {
            url: "{that}.options.layerURLs.4",
            clip: {
                inTime: 10
            }
        },
        {
            url: "{that}.options.layerURLs.4",
            clip: {
                inTime: 21
            }
        },
        {
            url: "{that}.options.layerURLs.4",
            clip: {
                inTime: 30,
                outTime: 69
            }
        }
    ],

    components: {
        glRenderer: {
            type: "timeAddsUp.darcie.glRenderer"
        }
    }
});
