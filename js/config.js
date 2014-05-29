z.config = {
	"buttons": {
		"living": [
			{
				"renderer": "Switch",
				"name": "Ceiling light"
			},
			{
				"renderer": "Slider",
				"name": "AC",
				"min": 16,
				"max": 30
			},
			{
				"renderer": "Slider",
				"name": "Dimmer light",
				"min": 0,
				"max": 100
			}

		],
		"kitchen": [
			{
				"name": "Enable Stuff",
				"renderer": "Switch"
			},

			{
				"renderer": "Switch",
				"name": "Ceiling light"
			},
			{
				"renderer": "Slider",
				"name": "Stuff",
				"min": 0,
				"max": 250,
				"step": 50,
				"disabled": true,
				"enabledBy": "Enable Stuff"
			},
			{
				"renderer": "Switch",
				"name": "Wall light"
			}

		]
	},
	"cpHolder" : "cp-holder"
};
