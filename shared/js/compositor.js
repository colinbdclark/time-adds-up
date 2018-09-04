fluid.defaults("timeAddsUp.compositor", {
    gradeNames: [
        "aconite.compositor.autoPlay"
    ],

    fps: 48,

    layerURLs: [],

    uniformModelMap: {},

    layerSpecs: [],

    dynamicComponents: {
        layer: {
            type: "timeAddsUp.layer",
            sources: "{that}.options.layerSpecs",
            options: {
                targetModelPath: "{source}.targetModelPath",
                url: "{source}.url",
                textureNum: "{sourcePath}",
                inTime: "{source}.clip.inTime",
                outTime: "{source}.clip.outTime",
                duration: "{source}.clip.duration"
            }
        }
    },

    components: {
        enviro: {
            type: "flock.silentEnviro"
        }
    },

    invokers: {
        requestFullScreenStage: {
            funcName: "aconite.ui.playButtonOverlay.fullScreen.requestFullScreen",
            args: ["{that}.dom.stage"]
        }
    },

    listeners: {
        "onCreate.clickFullScreen": {
            "this": "{that}.container",
            method: "click",
            args: ["{that}.requestFullScreenStage"]
        }
    }
});
