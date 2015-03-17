"use strict";
z.ControlPanel = z.Entity.extend({
    "sections": null,

    "init": function () {
        this.sections = [];
        this.initSections();
    },
    "initSections": function () {
        var section;

        for (var i in z.config.buttons) {
            section = new z.Section(i);
            this.sections.push(section);
            this.initSectionButtons(section);

        }
    },
    "initSectionButtons": function (section) {
        var btn;
        var sectionName = section.getName();

        for (var i in z.config.buttons[sectionName]) {
            btn = new z.Button(z.config.buttons[sectionName][i]);
            section.addButton(btn);
        }
    },
    "val": function () {
        var values = {}, sectionName;
        for (var i in this.sections) {
            values[this.sections[i].name] = this.sections[i].val();
        }
        return values;
    }
});
