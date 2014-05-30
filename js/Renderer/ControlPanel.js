"use strict";
z.Renderer.ControlPanel = z.Renderer.extend({
	"htmlHolder": null,
	"render": function(){
		this.createHolder();
		this.setActions();
		var sectionRenderer = new z.Renderer.Section(), sectionEl;
		for(var i in this.element.sections){
			sectionEl = this.element.sections[i].addRenderer(sectionRenderer).render();
			this.htmlHolder.append(sectionEl);
		}
		$('#'+z.config.cpHolder).append(this.htmlHolder);
	},
	"createHolder": function(){
		this.htmlHolder = $(document.createElement("form"))
			.addClass("control-panel-form");
	},
	"setActions": function(){
		var self = this;
	}
});
