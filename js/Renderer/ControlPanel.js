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
		$("#cp-holder").append(this.htmlHolder);
	},
	"createHolder": function(){
		this.htmlHolder = $(document.createElement("form"))
			.addClass("control-panel-form");
	},
	"setActions": function(){
		var self = this;
		this.htmlHolder.on("buttonChange", function(e){
			self.element.onButtonChange(e.button);
		});
	}
});
