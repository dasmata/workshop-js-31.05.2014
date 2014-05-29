"use strict";
z.Renderer.Section = z.Renderer.extend({
	"htmlHolder": null,

	"render": function(prevElement){
		var renderedElements = [];
		var switches = [];
		this.createHolder(prevElement);
		for(var i in this.element.buttons){
			var btnHtml = this.element.buttons[i].render();
			if(this.isSwitch(this.element.buttons[i])){
				switches.push(btnHtml);
				continue;
			}
			renderedElements.push(btnHtml);
		}
		
		var switchesHolder = this.renderSwitches(switches);

		this.htmlHolder.append(renderedElements);
		this.htmlHolder.append(switchesHolder);
		return this.htmlHolder;
	},
	"createSegment" : function(){
		return $(document.createElement("div"))
			.addClass("section-segment");
	},
	"renderSwitches": function(switches){
		var segments, segment, self;
		var self = this;
		segments = [];
		segment = this.createSegment();
		var added = false;
		switches.forEach(function(sw,key){
			segment.append(sw);
			added = false;
			if(key != 0 && key % 7 == 0){
				segments.push(segment);
				segment = self.createSegment();
				added = true;
			}
		});
		if(!added){
			segments.push(segment);
		}
		return segments;
	},
	"isSwitch": function(button){
		var found = false;
		button.renderers.forEach(function(renderer, key){
			if(renderer instanceof z.Renderer.Switch){
				found = true;
				return false;
			}
		});
		return found;
	},
	"createHolder": function(prevElement){
		this.htmlHolder = prevElement ? prevElement : $(document.createElement("fieldset"))
			.append(
				$(document.createElement("legend"))
					.text(this.element.name)
			);
	}
});
