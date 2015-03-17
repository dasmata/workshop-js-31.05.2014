"use strict";
z.Button = z.Entity.extend({
    "min": null,
    "max": null,
    "step": null,
    "name": null,
    "value": null,
    "disabled": false,
    "enabledBy": null,
    "type": null,
    "init": function (config) {
        for (var i in config) {
            if (typeof this[i] !== "undefined") {
                this[i] = config[i];
            }
        }
    },
    "val": function () {
        return this.value;
    },
    "toggleEnabled": function (enabled) {
        this.disabled = !enabled;
    }
});
