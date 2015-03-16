"use strict";
z.View.SwitchView = z.View.ButtonView.extend({
	"holder": null,
	"input": null,
	"display": null,
	"render": function(prevElement){
        if(this.holder === null){
            this.holder = this.createHolder();
            this.holder.append(
                this.createLabel()
            ).append(
                this.input = this.createInput()
            );
            this.setActions();
            this.input.click();
        }

        this._super();
		return this.holder;
	},
	"createLabel": function(){
		return $(document.createElement("label"))
			.text(this.entity.name);
	},
	"setActions": function(){
		var self = this;
		this.input.on("click", function(e){
			if(self.entity.value == self.input.val()){
				self.input.val(self.input.val() == "1" ? 0 : 1);
			}
			self.entity.value = this.value;
			var event = document.createEvent("Event");
			event.initEvent("buttonChange", true, true);
			event.button = self.entity;
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
				"name": this.entity.name,
				"min": 0,
				"max": 1,
			})
			.val(0);
	}
});
