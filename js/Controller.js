"use strict";
z.Controller = Class.extend({
	"init" : function(){
		this.setActions();
	},
	"controlPanel" : null,
	"house" : null,
    "houseView" : null,
	"initControlPanel" : function(){
        var view = new z.View.ControlPanelView();
		this.controlPanel = new z.ControlPanel();
        view.setEntity(this.controlPanel).render();
	},
	"initHouse": function(){
		this.house = new z.House();
        this.setInitValues();

        this.houseView = new z.View.HouseView("house");
        this.houseView.setEntity(this.house);
        this.houseView.render();
	},
	"setInitValues": function(){
		this.house.setValues(this.controlPanel.val());
	},
	"setActions": function(){
		var self = this;
		document.addEventListener("buttonChange", function(e){
			self.house.setValues(self.controlPanel.val());
            self.houseView.render();
		});
	}
});
