"use strict";
z.House = z.Entity.extend({
	"values": null,
	"init": function(){
		var self = this;
	},
	"setValues": function(values){
		this.values = values;
		return this;
	}
});
