"use strict";
z.View.SliderView = z.View.ButtonView.extend({
    "holder": null,
    "input": null,
    "display": null,
    "errors": null,
    "render": function () {
        if (this.holder == null) {
            this.holder = this.createHolder();
            this.holder.append(
                this.createLabel()
            ).append(
                this.input = this.createInput()
            ).append(
                this.display = this.createDisplay()
            ).addClass("vertical-slider-holder");
            this.setActions();
            this.input.trigger("input");
        }

        this._super();
        return this.holder;
    },
    "validate": function () {
        this.errors = [];
        if (parseInt(this.display.val(), 10) != this.display.val()) {
            this.errors.push(new z.Error("Invalid " + this.entity.name + " value", this.display));
            return false;
        }
        return true;
    },
    "setActions": function () {
        var self = this;
        this.input.on("input", function () {
            self.display.val(self.input.val());
            self.entity.value = self.input.val();
            self.input.trigger("change");
        });
        this.display.on("keyup", function (e) {
            var val = this.value;
            if (!self.validate()) {
                self.display.val(self.entity.value);
                self.input.val(self.entity.value);
                self.displayErrors();
                return false;
            }
            self.input.val(this.value).trigger("change");
        });
        this.input.change(function (e) {
            self.entity.value = this.value;
            var event = document.createEvent("Event");
            event.initEvent("buttonChange", true, true);
            event.button = self.entity;
            self.input[0].dispatchEvent(event);
        });
    },
    "createHolder": function () {
        return $(document.createElement("div"))
            .addClass("button-holder");
    },
    "createLabel": function () {
        return $(document.createElement("label"))
            .addClass("slider-label")
            .text(this.entity.name);
    },
    "createInput": function () {
        var el = $(document.createElement("input"))
            .addClass("cp-vertical-slider")
            .attr({
                "type": "range",
                "name": this.entity.name,
                "min": this.entity.min,
                "max": this.entity.max,
                "step": this.entity.step ? this.entity.step : 1,
                "orient": "vertical"
            })
            .val(this.entity.min);
        return el;
    },
    "createDisplay": function () {
        return $(document.createElement("input"))
            .addClass("cp-vertical-slider-display")
            .attr({
                "type": "number",
                "min": this.entity.min,
                "max": this.entity.max
            });
    },
    "displayErrors": function () {
        var view = new z.View.ErrorView();
        for (var i in this.errors) {
            view.setEntity(this.errors[i]).render();
        }
    }
});
