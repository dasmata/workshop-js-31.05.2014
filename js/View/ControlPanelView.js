"use strict";
z.View.ControlPanelView = z.View.extend({
    "htmlHolder": null,
    "render": function () {
        this.createHolder();
        this.setActions();
        var sectionView = new z.View.SectionView(), sectionEl;
        for (var i in this.entity.sections) {
            sectionView.setEntity(this.entity.sections[i]);
            sectionEl = sectionView.render();

            this.htmlHolder.append(sectionEl);
        }
        $('#' + z.config.cpHolder).append(this.htmlHolder);
    },
    "createHolder": function () {
        this.htmlHolder = $(document.createElement("form"))
            .addClass("control-panel-form");
    }
});
