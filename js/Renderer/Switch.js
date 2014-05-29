"use strict";
z.Renderer.Switch = z.Renderer.Button.extend({
	"holder": null,
	"input": null,
	"display": null,
	"render": function(prevElement){
		this.holder = this.createHolder();
		this.holder.append(
			this.createLabel()
		).append(
			this.input = this.createInput()
		);
		this.setActions();
		this.input.click();
		return this.holder;
	},
	"createLabel": function(){
		return $(document.createElement("label"))
			.text(this.element.name);
	},
	"setActions": function(){
		var self = this;
		this.input.on("click", function(e){
			if(self.element.value == self.input.val()){
				self.input.val(self.input.val() == "1" ? 0 : 1);
			}
			self.element.value = this.value;
			var event = document.createEvent("Event");
			event.initEvent("buttonChange", true, true);
			event.button = self.element;
			self.input[0].dispatchEvent(event);
		});
	},
	"createHolder": function(){
		return $(document.createElement("div"))
			.addClass("button-holder switch-range");
	},
	"createInput": function(){
		return $(document.createElement("input"))
			.addClass("cp-switch")
			.attr({
				"type": "range",
				"name": this.element.name,
				"min": 0,
				"max": 1,
			})
			.val(0);
	}
});
