[Back to Main](index.md)

# Season 3

Season 2 will be ending on 1 March 2023 - and Season 3 is likely to start around 2-4 weeks later depending on CNE's schedule. Mid-to-late March is a safe guess.

{% comment %}
The champion changes and time gate cost reduction will all be going live on #DATEPREVIEW - while the actual Season 2 start date will be #DATEACTUAL.
{% endcomment %}

# Theme

{% comment %}
![Season 3 Profile](images/portrait_s3.png)
{% endcomment %}

Spurt recently saw some changes in the data that could suggest he'll be in Season 3. This is just speculation at this point.

# Changes

The information below is raw data on the "new" abilities that the champions might be getting. Some may be complete reworks - some may look copy-paste from old abilities that haven't seen reworks yet (and might not get reworked).

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. Making assumptions on how the champions will turn out based on this information would be premature.

# Spurt

**You Dead!**
> Spurt tosses a wasp nest at a stalking giant, and then is immediately killed by a giant hammer, which damages all Enemies on screen. Spurt then comes back as a spirit, increasing the effects of his abilities until he revives.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
	"description": "Spurt tosses a wasp nest at a stalking giant, and then is immediately killed.",
	"long_description": "Spurt tosses a wasp nest at a stalking giant, and then is immediately killed by a giant hammer, which damages all Enemies on screen. Spurt then comes back as a spirit, increasing the effects of his abilities until he revives.",
	"damage_modifier": 0.03,
	"damage_types": ["ranged"],
	"graphic_id": 5454,
	"target": "all",
	"aoe_radius": 0,
	"tags": [
		"ranged",
		"ultimate"
	],
	"num_targets": 1,
	"animations": [{
		"powerup_after_jump": true,
		"damage_frame": 80,
		"effect_frames": {"jump_back": {
			"activate_on_animation_cancelled": true,
			"apply_to_hero": true,
			"effect_string": "effect_def,1429"
		}},
		"fade_back_in": true,
		"visual_effect_frames": {"-22": {
			"effect": "animated_clip",
			"scale": 1.15,
			"graphic_id": 5490
		}},
		"power_up_sequence": {
			"visual_effect_frames": {"19": {
				"projectile_details": {"projectile_graphic_id": 5476},
				"effect": "projectile",
				"offset_x": 1600,
				"projectile": "wasp_bag",
				"offset_y": -200
			}},
			"animation_sequence_name": "attack"
		},
		"jump_center": true,
		"require_targets_to_start": false,
		"refresh_damage_targets_at_hit": true,
		"type": "melee_attack"
	}],
	"name": "You Dead!",
	"cooldown": 120,
	"id": 605
}
</pre>
</p>
</details>
<br />

**Centipede Net** (Guess)
> Spurt increases the damage of adjacent Champions by 100%.
> While Spurt is a spirit, this effect is increased by 2% for each second of Ultimate cooldown that Spurt has, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
	"effect_keys": [{
		"effect_string": "hero_dps_multiplier_mult,100",
		"targets": ["adj"]
	}],
	"requirements": [],
	"description": {
		"pre": {"conditions": [
			{
				"condition": "upgrade_purchased 10682",
				"desc": "Spurt Increases the damage of Champions within two slots by $amount%"
			},
			{"desc": "Spurt increases the damage of adjacent Champions by $amount%"}
		]},
		"post": {"conditions": [{
			"condition": "spurt_is_spirit_v2",
			"desc": "^^(While Spurt is a spirit, this effect is increased by 2% for each second of Ultimate cooldown that Spurt has, stacking multiplicatively)"
		}]}
	},
	"id": 1426,
	"flavour_text": "",
	"graphic_id": 5448,
	"properties": []
}
</pre>
</p>
</details>
<br />

**Wa-spiration** (Guess)
> Spurt gains a stack of Wa-aspiration every time he attacks. Every 2 Wa-aspiration stacks, Spurt invents a random effect. Effects can stack up to 5 times each and persist until the area changes.
> While Spurt is a spirit, he gains a Wa-spiration stack when an adjacent Champion attacks and the base multipliers of the invented effects are increased by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
	"effect_keys": [{
		"effect_ids": [
			1433,
			1434,
			1435
		],
		"max_effect_stacks": 5,
		"stacks_until_effect": 2,
		"effect_string": "spurt_waspiration_v2"
	}],
	"requirements": [],
	"description": {
		"pre": "Spurt gains a stack of Wa-aspiration every time he attacks. Every $(stacks_until_effect) Wa-aspiration stacks, Spurt invents a random effect. Effects can stack up to $(max_effect_stacks) times each and persist until the area changes.",
		"post": {"conditions": [{
			"condition": "not static_desc",
			"desc": "^^$(spurt_waspiration_v2_desc)"
		}]},
		"desc": {"conditions": [{
			"condition": "spurt_is_spirit_v2",
			"desc": "^(While Spurt is a spirit, he gains a Wa-spiration stack when an adjacent Champion attacks and the base multipliers of the invented effects are increased by 100%)"
		}]}
	},
	"id": 1428,
	"flavour_text": "",
	"graphic_id": 5451,
	"properties": {
		"use_outgoing_description": true,
		"is_formation_ability": true,
		"show_incoming": false
	}
}
</pre>
</p>
</details>
<br />

**Spurt's Spirit** (Guess)
> Increases the damage of all Champions by $amount%.
> While in Spirit form:
> - Centipede Net: Buffed by 2% for each second of ultimate cooldown that Spurt has.
> - Wa-spiration: Stacks are gained every time an adjacent Champion attacks and the base multipliers of the invented effects are increased by 100%.
> - Pack Tactics: The base multiplier is increased by 100%
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
	"effect_keys": [
		{
			"spurt_ult_attack_id": 605,
			"pack_tactics_buff_effect_id": 1431,
			"centipede_net_buff_effect_id": 1432,
			"effect_string": "spurt_spirit_v2",
			"centipede_net_upgrade_id": 10678,
			"seconds_left_on_ult_to_remove_spirit": 10,
			"spirit_graphic_id": 5477,
			"pack_tactics_upgrade_id": 10680
		},
		{"effect_string": "global_dps_multiplier_mult,400"},
		{
			"effect_string": "change_base_attack,201",
			"targets": ["self"]
		}
	],
	"requirements": [],
	"description": {"desc": "Increases the damage of all Champions by $amount%^^While in Spirit form:^Centipede Net: Buffed by 2% for each second of ultimate cooldown that Spurt has^Wa-spiration: Stacks are gained every time an adjacent Champion attacks and the base multipliers of the invented effects are increased by 100%^Pack Tactics: The base multiplier is increased by 100%"},
	"id": 1429,
	"flavour_text": "",
	"graphic_id": 0,
	"properties": {
		"use_outgoing_description": true,
		"is_formation_ability": true,
		"effect_name": "Spurt's Spirit",
		"show_incoming": false
	}
}
</pre>
</p>
</details>
<br />

**Pack Tactics** (Guess)
> Increases the damage of all Champions by `$(not_buffed amount)%` for every Kobold in the formation, including Spurt.
> Base multiplier increased by 100% while Spurt is a spirit.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
	"effect_keys": [{
		"stacks_multiply": true,
		"effect_string": "global_dps_mult_by_tag_mult,100,kobold"
	}],
	"requirements": [],
	"description": {
		"pre": "Increases the damage of all Champions by $(not_buffed amount)% for every Kobold in the formation, including Spurt.",
		"post": {"conditions": [{
			"condition": "spurt_is_spirit_v2",
			"desc": "^^(Base multiplier increased by 100% while Spurt is a spirit)"
		}]}
	},
	"id": 1430,
	"flavour_text": "",
	"graphic_id": 5450,
	"properties": {
		"use_outgoing_description": true,
		"is_formation_ability": true,
		"show_incoming": false
	}
}
</pre>
</p>
</details>
<br />

**Kobold Family** (Guess)
> Increases the effect of `$(upgrade_name id)` by `$amount%` for ever other Kobold in the formation.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
	"effect_keys": [{"effect_string": "buff_upgrade,100,10680"}],
	"requirements": [],
	"description": {"desc": "Increases the effect of $(upgrade_name id) by $amount% for ever other Kobold in the formation"},
	"id": 1431,
	"flavour_text": "",
	"graphic_id": 0,
	"properties": []
}
</pre>
</p>
</details>
<br />

**Wa-spiration: Stingy** (Guess)
> Champions that attack with melee attacks deal `$amount%` additional damage.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
	"effect_keys": [
		{
			"stacks_multiply": true,
			"effect_string": "increase_monster_damage_from,200,melee",
			"max_stacks": 5,
			"stacks_on_trigger": "will_manually_stack"
		},
		{
			"amount": 200,
			"stacks_multiply": true,
			"show_bonus": true,
			"effect_string": "show_in_spurt_outgoing",
			"max_stacks": 5,
			"stacks_on_trigger": "will_manually_stack",
			"targets": [{
				"hero_ids": [
					43,
					132
				],
				"type": "heroes"
			}]
		}
	],
	"requirements": [],
	"description": {"desc": "Champions that attack with melee attacks deal $amount% additional damage"},
	"id": 1433,
	"flavour_text": "",
	"graphic_id": 5451,
	"properties": {
		"use_outgoing_description": true,
		"is_formation_ability": true,
		"show_in_owner_outgoing": true,
		"effect_name": "Wa-spiration: Stingy"
	}
}
</pre>
</p>
</details>
<br />

**Wa-spiration: Skunky** (Guess)
> Enemies that approach the party take an extra `$amount%` damage.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
	"effect_keys": [
		{
			"stacks_multiply": true,
			"active_graphic_id": 2654,
			"effect_string": "increase_monster_damage_percent_to_party,200,80",
			"max_stacks": 5,
			"stacks_on_trigger": "will_manually_stack"
		},
		{
			"amount": 200,
			"stacks_multiply": true,
			"show_bonus": true,
			"effect_string": "show_in_spurt_outgoing",
			"max_stacks": 5,
			"stacks_on_trigger": "will_manually_stack",
			"targets": [{
				"hero_ids": [
					43,
					132
				],
				"type": "heroes"
			}]
		}
	],
	"requirements": [],
	"description": {"desc": "Enemies that approach the party take an extra $amount% damage"},
	"id": 1434,
	"flavour_text": "",
	"graphic_id": 5451,
	"properties": {
		"use_outgoing_description": true,
		"is_formation_ability": true,
		"show_in_owner_outgoing": true,
		"effect_name": "Wa-spiration: Skunky"
	}
}
</pre>
</p>
</details>
<br />

**Wa-spiration: Grubby** (Guess)
> All Champions' base attack cooldowns are reduced by `$amount` seconds.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
	"effect_keys": [
		{
			"effect_string": "reduce_attack_cooldown,0.1",
			"max_stacks": 5,
			"stacks_on_trigger": "will_manually_stack"
		},
		{
			"amount": 0.1,
			"bonus_is_seconds": true,
			"show_bonus": true,
			"effect_string": "show_in_spurt_outgoing",
			"max_stacks": 5,
			"stacks_on_trigger": "will_manually_stack",
			"targets": [{
				"hero_ids": [
					43,
					132
				],
				"type": "heroes"
			}]
		}
	],
	"requirements": [],
	"description": {"desc": "All Champions' base attack cooldowns are reduced by $amount seconds"},
	"id": 1435,
	"flavour_text": "",
	"graphic_id": 5451,
	"properties": {
		"use_outgoing_description": true,
		"is_formation_ability": true,
		"show_in_owner_outgoing": true,
		"effect_name": "Wa-spiration: Grubby"
	}
}
</pre>
</p>
</details>
<br />

{% comment %}
# Champion

**Unknown**
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
</pre>
</p>
</details>
<br />
{% endcomment %}

[Back to Top](#top)

*Last Modified: {{ site.time }}*