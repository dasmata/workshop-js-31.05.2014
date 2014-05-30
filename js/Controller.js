"use strict";
z.Controller = Class.extend({
	"init" : function(){
		this.controlPanelHolder = $('#'+z.config.cpHolder);
		this.setActions();
	},
	"controlPanel" : null,
	"controlPanelHolder" : null,
	"house" : null,
	"initControlPanel" : function(){
		this.controlPanel = new z.ControlPanel(this.controlPanelHolder);
		this.controlPanel.addRenderer(new z.Renderer.ControlPanel()).render();
	},
	"initHouse": function(){
		this.house = new z.House();
		this.house.addRenderer(new z.Renderer.HTMLHouse("house")).render();
		this.setInitValues();
	},
	"setInitValues": function(){
		this.house.setValues(this.controlPanel.val()).render();
	},
	"setActions": function(){
		var self = this;
		document.addEventListener("buttonChange", function(e){
			self.house.setValues(self.controlPanel.val()).render();
		});
	}
});
