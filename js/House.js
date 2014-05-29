"use strict";
z.House = z.Renderable.extend({
	"values": null,
	"init": function(){
		var self = this;
		document.addEventListener("change", function(e){
			self.setValues(e.cp.val()).render();
		});
	},
	"setValues": function(values){
		this.values = values;
		return this;
	}
});
