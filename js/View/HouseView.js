"use strict";
z.View.HouseView = z.View.extend({
    "kitchenElement": null,
    "livingElement": null,
    "init": function () {
        this.kitchenElement = $("#house .kitchen");
        this.livingElement = $("#house .living");
    },
    "render": function () {
        if (!this.entity.values) {
            return;
        }
        this.renderKitchen();
        this.renderLiving();
    },
    "renderKitchen": function () {
        if (this.entity.values.kitchen["Ceiling light"] == "1") {
            this.kitchenElement.addClass("light-on");
        } else {
            this.kitchenElement.removeClass("light-on");
        }
        if (this.entity.values.kitchen["Wall light"] == "1") {
            this.kitchenElement.addClass("wall-light-on");
        } else {
            this.kitchenElement.removeClass("wall-light-on");
        }
    },
    "renderLiving": function () {
        if (this.entity.values.living["Ceiling light"] == "1") {
            this.livingElement.addClass("light-on wall-light-on");
        } else {
            this.livingElement.removeClass("light-on wall-light-on");
        }
        if (!this.livingElement.hasClass("light-on")) {
            this.livingElement.css({
                "background": "rgba(255, 255, 0, " + (parseInt(this.entity.values.living["Dimmer light"], 10) / 100) + ")"
            });
        } else {
            this.livingElement.removeAttr("style");
        }
    }
});
