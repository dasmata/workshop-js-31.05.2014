"use strict";
z.Renderer.Button = z.Renderer.extend({
	"input" : null,
	"setElement": function(el){
		if(!(el instanceof z.Button)){
			throw "Invalid button element";
		}
		return this._super(el);
	},
	"setActions": function(){
		var self = this;
	},
	"disableInput": function(){
		this.input.attr("disabled", true).addClass("disabled");
	},
	"enableInput": function(){
		this.input.attr("disabled", false).removeClass("disabled");
	}
});
