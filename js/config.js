z.config = {
	"buttons": {
		"living": [
			{
				"view": "SwitchView",
				"name": "Ceiling light",
                "type" : "switch"
			},
			{
				"view": "SliderView",
				"name": "AC",
				"min": 16,
				"max": 30,
                "type" : "slider"
			},
			{
				"view": "SliderView",
				"name": "Dimmer light",
				"min": 0,
				"max": 100,
                "type" : "slider"
			}

		],
		"kitchen": [
			{
				"name": "Enable Oven",
				"view": "SwitchView",
                "type" : "switch"
			},

			{
				"view": "SwitchView",
				"name": "Ceiling light",
                "type" : "switch"
			},
			{
				"view": "SliderView",
				"name": "Oven",
				"min": 0,
				"max": 250,
				"step": 50,
				"disabled": true,
				"enabledBy": "Enable Oven",
                "type" : "slider"
			},
			{
				"view": "SwitchView",
				"name": "Wall light",
                "type" : "switch"
			}

		]
	},
	"cpHolder" : "cp-holder"
};
