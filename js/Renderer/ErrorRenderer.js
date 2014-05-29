"use strict";
z.Renderer.ErrorRenderer = z.Renderer.extend({
	"render": function(){
		var tmp;
		this.element.element[0].setCustomValidity(this.element.message);
		this.element.element.parents("form").append(
			tmp = $(document.createElement("input")).attr("type", "submit")
		);
		tmp.click().remove();
	}
});
