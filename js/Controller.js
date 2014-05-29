"use strict";
z.Controller = Class.extend({
	"init" : function(){
		this.controlPanelHolder = $('#'+z.config.cpHolder);
	},
	"controlPanel" : null,
	"controlPanelHolder" : null,
	"initControlPanel" : function(){
		this.controlPanel = new z.ControlPanel(this.controlPanelHolder);
		this.controlPanel.addRenderer(new z.Renderer.ControlPanel()).render();
	},
	"initHouse": function(){
		z.house = new z.House();
		z.house.addRenderer(new z.Renderer.HTMLHouse("house")).render();
		this.setInitValues();
	},
	"setInitValues": function(){
		this.controlPanel.onButtonChange(null);
	}
});
