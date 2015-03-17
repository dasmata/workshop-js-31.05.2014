"use strict";
z.View.SectionView = z.View.extend({
    "htmlHolder": null,
    "buttonViews": null,
    "init": function () {
        this.setActions();
        this.buttonViews = {};
    },
    "render": function (prevElement) {
        var view, type, switches = [], renderedElements = [], btnHtml;

        this.createHolder(prevElement);
        for (var i in this.entity.buttons) {
            type = this.entity.buttons[i].type;
            view = new z.View[type.charAt(0).toUpperCase() + type.slice(1) + "View"]();
            this.buttonViews[this.entity.buttons[i].name] = view;
            btnHtml = view.setEntity(this.entity.buttons[i]).render();
            if (this.isSwitch(this.entity.buttons[i])) {
                switches.push(btnHtml);
                continue;
            }
            renderedElements.push(btnHtml);
        }

        var switchesHolder = this.renderSwitches(switches);
        this.htmlHolder.append(renderedElements);
        this.htmlHolder.append(switchesHolder);
        return this.htmlHolder;
    },

    "setActions": function () {
        var self = this;
        document.addEventListener("buttonChange", function (e) {
            self.entity.buttons.forEach(function (button, value) {
                if (button.enabledBy == e.button.name) {
                    self.buttonViews[button.name].setEntity(button).render();
                    return false;
                }
            });
        });
    },

    "createSegment": function () {
        return $(document.createElement("div"))
            .addClass("section-segment");
    },
    "renderSwitches": function (switches) {
        var segments, segment, self;
        var self = this;
        segments = [];
        segment = this.createSegment();
        var added = false;
        switches.forEach(function (sw, key) {
            segment.append(sw);
            added = false;
            if (key != 0 && key % 7 == 0) {
                segments.push(segment);
                segment = self.createSegment();
                added = true;
            }
        });
        if (!added) {
            segments.push(segment);
        }
        return segments;
    },
    "isSwitch": function (button) {
        return button.type === "switch";
    },
    "createHolder": function (prevElement) {
        this.htmlHolder = prevElement ? prevElement : $(document.createElement("fieldset"))
            .append(
            $(document.createElement("legend"))
                .text(this.entity.name)
        );
    }
});
