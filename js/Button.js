z.Button = z.Renderable.extend({
	"min": null,
	"max": null,
	"step": null,
	"name": null,
	"value": null,
	"disabled": false,
	"enabledBy": null,
	"init": function(config){
		for(var i in config){
			if(typeof this[i] !== "undefined"){
				this[i] = config[i];
			}
		}
	},
	"val": function(){
		return this.value;
	},
	"enable": function(enabled){
		this.renderers.forEach(function(renderer, key){
			renderer[enabled ? 'enableInput' : 'disableInput']();
		});
	}
});
