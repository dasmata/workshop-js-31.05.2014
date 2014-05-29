"use strict";
z.Renderer.Slider = z.Renderer.Button.extend({
	"holder": null,
	"input": null,
	"display": null,
	"errors": null,
	"render": function(prevElement){
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
		if(this.element.disabled){
			this.disableInput();
		}

		return this.holder;
	},
	"validate": function(){
		this.errors = [];
		if(parseInt(this.display.val(),10) != this.display.val()){
			this.errors.push(new z.Error("Invalid "+this.element.name+" value", this.display));
			return false;
		}
		return true;
	},
	"setActions": function(){
		var self = this;
		this.input.on("input", function(){
			self.display.val(self.input.val());
			self.element.value = self.input.val();
			self.input.trigger("change");
		});
		this.display.on("keyup", function(e){
			var val = this.value;
			if(!self.validate()){
				self.display.val(self.element.value);
				self.input.val(self.element.value);
				self.displayErrors();
				return false;
			}
			self.input.val(this.value).trigger("change");
		});
		this.input.change(function(e){
			self.element.value = this.value;
			self.input.trigger({
				"type": "buttonChange",
				"button": self.element
			});
		});
	},
	"createHolder": function(){
		return $(document.createElement("div"))
			.addClass("button-holder");
	},
	"createLabel": function(){
		return $(document.createElement("label"))
			.addClass("slider-label")
			.text(this.element.name);
	},
	"createInput": function(){
		var el = $(document.createElement("input"))
			.addClass("cp-vertical-slider")
			.attr({
				"type": "range",
				"name": this.element.name,
				"min": this.element.min,
				"max": this.element.max,
				"step": this.element.step ? this.element.step : 1,
				"orient": "vertical"
			})
			.val(this.element.min);
		return el;
	},
	"createDisplay": function(){
		return $(document.createElement("input"))
			.addClass("cp-vertical-slider-display")
			.attr({
				"type": "number",
				"min": this.element.min,
				"max": this.element.max
			});
	},
	"displayErrors": function(){
		var renderer = new z.Renderer.ErrorRenderer();
		for(var i in this.errors){
			this.errors[i].addRenderer(renderer).render();
		}
	}
});
