"use strict";
z.ControlPanel = z.Renderable.extend({
	"element": null,
	"sections": null,
	
	"init": function(el){
		this.sections = [];
		this.element = el;
		this.initSections();
	},
	"initSections": function(){
		var section;

		for(var i in z.config.buttons){
			section = new z.Section(i);
			this.sections.push(section);
			this.initSectionButtons(section);
		
		}
	},
	"initSectionButtons": function(section){
		var btn, renderer;
		var sectionName = section.getName();

		for(var i in z.config.buttons[sectionName]){
			btn = new z.Button(z.config.buttons[sectionName][i]);
			renderer = new z.Renderer[z.config.buttons[sectionName][i].renderer]();
			btn.addRenderer(renderer);
			section.addButton(btn);
		}
	},
	"onButtonChange": function(btn){
		var event = document.createEvent("Event");
		event.initEvent("change");
		event.namespace = "cp";
		event.cp = this;
		document.dispatchEvent(event);
	},
	"val": function(){
		var values = {}, sectionName;
		for(var i in this.sections){
			values[this.sections[i].name] = this.sections[i].val();
		}
		return values;
	}
});
