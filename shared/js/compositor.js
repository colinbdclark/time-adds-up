fluid.defaults("timeAddsUp.compositor", {
    gradeNames: [
        "aconite.compositor.autoPlay"
    ],

    fps: 48,

    layerURLs: [],

    uniformModelMap: {},

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
