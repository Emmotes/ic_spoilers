[Back to Main](index.md)

# Campaign

A new campaign was recently added to the defines: `Turn of Fortune's Wheel`. The guesstimated date of release is 1 November 2023 as per the [Content Drops](contentdrops.md) page.

| Logo | Campaign Button |
|---|---|
| ![Fortune's Wheel Campaign Logo](images/campaign_fortuneswheel/logo.png) | ![Favour Icon](images/campaign_fortuneswheel/campaign_button.png) |

## Theme

It seems it will be Planescape / Sigil related - given the reference to the Fortune's Wheel tavern.

## Gimmick

A recent change to the formation data suggests that this campaign will have a very weird gimmick.

It's hard to parse but it *seems* that on z50 (and maybe z100 z150 etc..) - it will forcibly turn on the story dialogue, disable hotkeys, hide the UI and make champions unable to ultimate as well as give them a **massively long** attack cooldown.

This is all - presumably - to offer some kind of message or choice. Then when it's finished whatever that is - it will put everything back to normal and continue on its merry way.

Of course - bear in mind - that's just my interpretation of the data. I've added it below for your own perusal.

<details><summary><em>Raw Data</em></summary><p><pre>
"game_change_data": [
	{
		"by_area": [
			{
				"min_area": 1,
				"force": false
			},
			{
				"min_area": 50,
				"force": true
			}
		],
		"loop_at": 51,
		"type": "force_cinematics"
	},
	{
		"by_area": [
			{
				"min_area": 1,
				"enabled": true
			},
			{
				"min_area": 50,
				"enabled": false
			}
		],
		"loop_at": 51,
		"type": "disable_hotkeys"
	},
	{
		"max_area": 50,
		"min_area": 50,
		"type": "hide_ui"
	},
	{
		"effects": [
			{
				"effect_string": "increase_attack_cooldown,1000000"
			},
			{
				"effect_string": "disable_hero_properties,0,0,0,0,1"
			}
		],
		"loop_at": 51,
		"type": "slot_effects_by_area",
		"area_slot_effects": [
			{
				"max_area": 50,
				"slot_effects": [
					{
						"slots": [
							0,
							1,
							2,
							3,
							4,
							5,
							6,
							7,
							8,
							9
						],
						"effect_index": 0
					}
				],
				"min_area": 50
			}
		]
	},
	{
		"by_area": [
			{
				"max_area": 50,
				"slots": [
					0,
					1,
					2,
					3,
					4,
					5,
					6,
					7,
					8,
					9
				],
				"min_area": 50,
				"locked": true
			}
		],
		"loop_at": 51,
		"type": "locked_slots"
	}
],
</pre></p></details><br/>

## Favour

The campaign favour will be `Fortune's Favor`.

![Favour Icon](images/campaign_fortuneswheel/icon_favour.png)

## Formation

The formation in the spoilers is currently a placeholder and not likely to go live. I will update when it does.


[Back to Top](#top)

*Last Modified: {{ site.time }}*