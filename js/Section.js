"use strict";
z.Section = z.Renderable.extend({
	"buttons": null,
	"name": null,

	"init": function(name){
		this.buttons = [];
		this.name = name;
		this.setActions();
	},
	"setActions": function(){
		var self = this;
		document.addEventListener("buttonChange", function(e){
			var found = false;
			self.buttons.forEach(function(button, value){
				if(button.enabledBy == e.button.name){
					button.enable(parseInt(e.button.value, 10));
					return false; //break;
				}
			});
		});
	},
	"addButton": function(btn){
		if(!(btn instanceof z.Button)){
			throw "Invalid button";
		}
		this.buttons.push(btn);
	},
	"getName": function(){
		return this.name;
	},
	"val": function(){
		var values = {};

		for(var i in this.buttons){
			values[this.buttons[i].name] = this.buttons[i].val();
		}
		return values;
	}
});
