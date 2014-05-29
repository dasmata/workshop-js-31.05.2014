"use strict";
z.Renderable = Class.extend({
	"renderers": null,
	"render": function(){
		var self = this;
		var result;
		this.renderers.forEach(function(renderer, key){
			result = renderer.setElement(self).render(result);
		});
		return result;
	},
	"addRenderer": function(obj){
		if(!(obj instanceof z.Renderer)){
			throw "Invalid renderer";
		}
		if(this.renderers === null){
			this.renderers = [];
		}
		this.renderers.push(obj);
		return this;
	}
});
