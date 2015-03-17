"use strict";
z.View.ErrorView = z.View.extend({
    "render": function () {
        var tmp;
        this.entity.element[0].setCustomValidity(this.entity.message);
        this.entity.element.parents("form").append(
            tmp = $(document.createElement("input")).attr("type", "submit")
        );
        tmp.click().remove();
    }
});
