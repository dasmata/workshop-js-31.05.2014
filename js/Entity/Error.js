"use strict";
z.Error = z.Entity.extend({
	"message": null,
	"element": null,
	"init": function(msg,el){
		this.message = msg;
		if(el !== undefined){
			this.element = el;
		}
	}
})
