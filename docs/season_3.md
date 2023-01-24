[Back to Main](index.md)

# Season 3

Season 2 will be ending on 1 March 2023 - and Season 3 is likely to start around 2-4 weeks later depending on CNE's schedule. Mid-to-late March is a safe guess.

The season 3 skins are currently dated 8 March 2023 - which means the season 3 preview could start at the same time the season 2 'cooling off' week ends. If that's the case then the *speculative* Season 3 start date will be 15 March 2023.

{% comment %}
The champion changes and time gate cost reduction will all be going live on #DATEPREVIEW - while the actual Season 2 start date will be #DATEACTUAL.
{% endcomment %}

# Theme

![Season 3 Portrait](images/portrait_s3.png)

Spurt Hew Maan and Barrowin have all received "new" abilities in the data that suggest they are all part of season 3. Given that they are getting `Lawbringer` and `Ancient` skins at the same time as Birdsong and Turiel - it seems to be that this new season will be a "Lawful" themed season. This tracks with some of the "new" abilities and specialisations these champions are getting.

# Changes

The information below is raw data on the "new" abilities that the champions might be getting. Some may be complete reworks - some may look copy-paste from old abilities that haven't seen reworks yet (and might not get reworked).

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. Making assumptions on how the champions will turn out based on this information would be premature.

# Spurt

![Spurt Portrait](images/season_spurt.png)

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
> Spurt increases the damage of adjacent Champions by `$amount%`.
> 
> While in Spirit form:  
> - This effect is increased by 2% for each second of Ultimate cooldown that Spurt has, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "off_when_benched": true,
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
            "desc": "^^({Spirit:}#99C7F7 This effect is increased by 2% for each second of Ultimate cooldown that Spurt has, stacking multiplicatively)"
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
> 
> While in Spirit form:  
> - Wa-spiration stacks are gained when an adjacent Champion attacks and the base multipliers of the invented effects are increased by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "wasp_scale": 1,
        "wasp_y_offset": -85,
        "wasp_y_offset_when_spirit": -110,
        "stacks_until_effect": 10,
        "min_wasp_speed": 3,
        "wasp_radius": 60,
        "effect_string": "spurt_waspiration_v2",
        "wasp_float_speed": 10,
        "max_effect_stacks": 5,
        "effects": [
            {
                "base_amount": 200,
                "effect_id": 1433,
                "buffed_amount": 400
            },
            {
                "base_amount": 200,
                "effect_id": 1434,
                "buffed_amount": 400
            },
            {
                "base_amount": 0.1,
                "effect_id": 1435,
                "buffed_amount": 0.2
            }
        ],
        "max_wasp_speed": 6,
        "wasp_graphic": 18378,
        "wasp_max_float_radius": 20
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
            "desc": "^^({Spirit:}#99C7F7 Wa-spiration stacks are gained when an adjacent Champion attacks and the base multipliers of the invented effects are increased by 100%)"
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
> Increases the damage of all Champions by `$amount%`.
> 
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
> Increases the damage of all Champions by 100% for every Kobold in the formation, including Spurt.
> 
> While in Spirit form:  
> - Base multiplier increased by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stack_title": "Kobolds in the formation",
        "stacks_multiply": true,
        "off_when_benched": true,
        "effect_string": "global_dps_mult_by_tag_mult,100,kobold"
    }],
    "requirements": [],
    "description": {
        "pre": {"conditions": [
            {
                "condition": "upgrade_purchased 10683",
                "desc": "Increases the damage of all Champions by $(not_buffed amount)% for every Kobold and Unaffiliated Non-Kobold in the formation, including Spurt."
            },
            {"desc": "Increases the damage of all Champions by $(not_buffed amount)% for every Kobold in the formation, including Spurt."}
        ]},
        "post": {"conditions": [{
            "condition": "spurt_is_spirit_v2",
            "desc": "^^({Spirit:}#99C7F7 Base multiplier increased by 100%)"
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
> Increases the base multiplier of Pack Tactics by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "data": {"amount": 200},
        "effect_string": "change_upgrade_data,10680"
    }],
    "requirements": [],
    "description": {"desc": "Increases the base multiplier of Pack Tactics by 100%."},
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
> Champions that attack with melee attacks deal 200% additional damage.
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
> Enemies that approach the party take an extra 200% damage.
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
> All Champions' base attack cooldowns are reduced by 0.1 seconds.
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

**Specialisation: Unknown** (Guess)
> Increases the effect of Pack Tactics by 400%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{"effect_string": "buff_upgrade,400,10680"}],
    "requirements": [],
    "description": {"desc": "Increases the effect of Pack Tactics by $amount%"},
    "id": 1436,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": []
}
</pre>
</p>
</details>
<br />

**Specialisation: Unknown** (Guess)
> Centipede Net instead affects champions who are 2 formation slots away from Spurt and its effect is increased by 600%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "data": {"targets": [{
                "comparison": "<=",
                "distance": 2,
                "self": false,
                "type": "distance"
            }]},
            "effect_string": "change_upgrade_data,10678"
        },
        {"effect_string": "buff_upgrade,600,10678"}
    ],
    "requirements": [],
    "description": {"desc": "Centipede Net instead affects champions who are 2 formation slots away from Spurt and its effect is increased by $amount%"},
    "id": 1437,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": []
}
</pre>
</p>
</details>
<br />

**Specialisation: Unknown** (Guess)
> Unaffiliated Non-Kobold Champions count as Kobolds for the purposes of Pack Tactics.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "data": {
                "stack_title": "Kobolds and Unaffiliated Non-Kobolds in the formation",
                "tag": "kobold|unaffiliated"
            },
            "effect_string": "change_upgrade_data,10680"
        },
        {
            "stack_func": "per_hero",
            "dev_note": "this effect key is just for getting the number of champions targetted in the formation for the spec option post apply info",
            "effect_string": "do_nothing,0",
            "tag": "unaffiliated^!kobold"
        }
    ],
    "requirements": [],
    "description": {"desc": "Unaffiliated Non-Kobold Champions count as Kobolds for the purposes of Pack Tactics"},
    "id": 1438,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "indexed_effect_properties": true,
        "spec_option_post_apply_info": "Unaffiliated Non-Kobold Champions: $num_stacks___2",
        "default_bonus_index": 0,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
<br />

# Hew Maan

![Hew Maan Portrait](images/season_hewmaan.png)

**Unknown**
> The Hello, Fellow Humans ability now uses the number of Lawful Champions in the formation instead of Humans.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "off_when_benched": true,
        "effect_string": "hewmaan_law_maan,0"
    }],
    "requirements": "",
    "description": {
        "pre": "The Hello, Fellow Humans ability now uses the number of Lawful Champions in the formation instead of Humans.",
        "post": {"conditions": [{
            "condition": "not static_desc",
            "desc": "^^$(hewmaan_lawful_champions_count)"
        }]}
    },
    "id": 1404,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<br />

**Unknown**
> The Hello, Fellow Humans ability now uses the most populous race in your formation instead of Humans.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "off_when_benched": true,
        "effect_string": "hewmaan_did_we_say_humans,0"
    }],
    "requirements": "",
    "description": {
        "pre": "The Hello, Fellow Humans ability now uses the most populous race in your formation instead of Humans.",
        "post": {"conditions": [{
            "condition": "not static_desc",
            "desc": "^^$(hewmaan_most_populous_race_and_count)"
        }]}
    },
    "id": 1403,
    "flavour_text": "",
    "graphic_id": 9768,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<br />

**Unknown**
> The Hello, Fellow Humans ability now uses the number of unaffiliated Champions in the formation instead of Humans.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "off_when_benched": true,
        "effect_string": "hewmaan_hello_fellow_mercenaries,0"
    }],
    "requirements": "",
    "description": {
        "pre": "The Hello, Fellow Humans ability now uses the number of unaffiliated Champions in the formation instead of Humans",
        "post": {"conditions": [{
            "condition": "not static_desc",
            "desc": "^^$(hewmaan_unaffiliated_champions_count)"
        }]}
    },
    "id": 1405,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<br />

# Barrowin

![Barrowin Portrait](images/season_barrowin.png)

**Might Hammer**
> Barrowin smashes the nearest enemy with her mighty warhammer.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
	"description": "Barrowin smashes the nearest enemy with her mighty warhammer.",
	"long_description": "",
	"damage_modifier": 1,
	"damage_types": ["melee"],
	"graphic_id": 0,
	"target": "front",
	"aoe_radius": 0,
	"tags": ["melee"],
	"num_targets": 1,
	"animations": [{
		"damage_frame": 6,
		"sound_frames": {"2": 199},
		"target_offset_x": -60,
		"type": "melee_attack"
	}],
	"name": "Might Hammer",
	"cooldown": 4.6,
	"id": 606
}
</pre>
</p>
</details>
<br />

**Holy Weapon**
> Barrowin infuses her hammer with holy energy and throws it at a random enemy, stunning it for 5 seconds. For the next 15 seconds, the base effect of Blessed Hammer is increased by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
	"description": "Barrowin infuses her hammer with holy energy, stunning a random enemy and buffing Blessed Hammer.",
	"long_description": "Barrowin infuses her hammer with holy energy and throws it at a random enemy, stunning it for 5 seconds. For the next 15 seconds, the base effect of Blessed Hammer is increased by 100%.",
	"damage_modifier": 0.03,
	"damage_types": ["ranged"],
	"graphic_id": 1872,
	"target": "random",
	"aoe_radius": 0,
	"tags": [
		"melee",
		"ultimate"
	],
	"num_targets": 1,
	"animations": [{
		"barrowin_bonus_effect": 1445,
		"effect_frames": {"projectile": {"effect_string": "barrowin_ultimate_action_v2"}},
		"hit_sound": 133,
		"shoot_sound": 149,
		"stun_on_hit": 5,
		"projectile_graphic_id": 1,
		"type": "ranged_attack",
		"projectile": "holy_weapon",
		"hold_shoot_frame": true,
		"shoot_frame": 28
	}],
	"name": "Holy Weapon",
	"cooldown": 360,
	"id": 607
}
</pre>
</p>
</details>
<br />

**Blessed Hammer** (Guess)
> Barrowin increases the damage of Champions behind her by 400% for each Champion in the formation who has an equal or higher base attack cooldown, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
	"effect_keys": [{
		"amount_updated_listeners": [
			"slot_changed",
			"attack_changed",
			"base_attack_cooldown_changed"
		],
		"stacks_multiply": true,
		"off_when_benched": true,
		"show_bonus": true,
		"amount_func": "mult",
		"stack_func": "per_hero",
		"use_computed_amount_for_description": true,
		"effect_string": "hero_dps_multiplier_mult,400",
		"stack_func_data": {"target_filters": [{
			"comparison": ">=",
			"type": "attack_cooldown",
			"value": {"base_attack_cooldown_from_hero_id": 130}
		}]},
		"targets": ["behind"]
	}],
	"requirements": [],
	"description": {"desc": "Barrowin increases the damage of Champions behind her by $(not_buffed amount)% for each Champion in the formation who has an equal or higher base attack cooldown, stacking multiplicatively."},
	"id": 1439,
	"flavour_text": "",
	"graphic_id": 1867,
	"properties": {"is_formation_ability": true}
}
</pre>
</p>
</details>
<br />

**Unknown**
> Barrowin has a number of Vigilance stacks equal to the number of Champions in the formation that are either lawful or dwarves. Increase the health of other Champions in the formation by 5% of Barrowin's max health for each Vigilance stack.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
	"effect_keys": [{
		"amount_updated_listeners": [
			"max_health_changed",
			"slot_changed"
		],
		"stacks_multiply": false,
		"total_title": "Bonus Health",
		"amount_func": "add",
		"stack_func": "per_hero",
		"use_computed_amount_for_description": true,
		"effect_string": "increase_health_by_source_percent,5",
		"targets": ["other"],
		"stack_title": "Vigilance Stacks",
		"show_bonus": true,
		"percent_values": false,
		"stack_func_data": {"target_filters": [{
			"type": "tags",
			"tags": "lawful|dwarf"
		}]},
		"show_current_value_bonus_desc": false,
		"round_bonus_value": true
	}],
	"requirements": [],
	"description": {"desc": "Barrowin has a number of Vigilance stacks equal to the number of Champions in the formation that are either lawful or dwarves. Increase the health of other Champions in the formation by $amount% of Barrowin's max health for each Vigilance stack."},
	"id": 1440,
	"flavour_text": "",
	"graphic_id": 0,
	"properties": {"is_formation_ability": true}
}
</pre>
</p>
</details>
<br />

**Healing Word** (Guess)
> Barrowin heals Champions in her column, including herself, for `$(not_buffed amount)` health per second for each stack of Vigilance she has. After Barrowin attacks, her next Healing Word also applies a temporary health bonus of the same amount.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
	"effect_keys": [
		{
			"amount_updated_listeners": ["slot_changed"],
			"stacks_multiply": false,
			"total_title": "Healing Per Second",
			"amount_func": "add",
			"stack_func": "per_hero",
			"use_computed_amount_for_description": true,
			"effect_string": "heal,2",
			"targets": ["col"],
			"stack_title": "Vigilance Stacks",
			"off_when_benched": true,
			"show_bonus": true,
			"percent_values": false,
			"stack_func_data": {"target_filters": [{
				"type": "tags",
				"tags": "lawful|dwarf"
			}]},
			"show_current_value_bonus_desc": false
		},
		{
			"heal_effect_key_index": 0,
			"off_when_benched": true,
			"effect_string": "barrowin_healing_word"
		}
	],
	"requirements": [],
	"description": {"desc": "Barrowin heals Champions in her column, including herself, for $(not_buffed amount) health per second for each stack of Vigilance she has. After Barrowin attacks, her next Healing Word also applies a temporary health bonus of the same amount."},
	"id": 1441,
	"flavour_text": "",
	"graphic_id": 1868,
	"properties": {
		"indexed_effect_properties": true,
		"is_formation_ability": true,
		"default_bonus_index": 0,
		"owner_use_outgoing_description": true,
		"per_effect_index_bonuses": true
	}
}
</pre>
</p>
</details>
<br />

**Unknown**
> Barrowin attacks 0.25 seconds faster for each stack of Vigilance she has. Additionally, when a Champion that is eligible for Healing Word is hit by an Enemy, Barrowin attacks 1 second faster for her next two attacks.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
	"effect_keys": [
		{
			"amount_updated_listeners": ["slot_changed"],
			"stacks_multiply": false,
			"bonus_is_seconds": true,
			"amount_func": "add",
			"stack_func": "per_hero",
			"effect_string": "reduce_attack_cooldown,0.25",
			"targets": ["col"],
			"stack_title": "Vigilance Stacks",
			"off_when_benched": true,
			"show_bonus": true,
			"percent_values": false,
			"stack_func_data": {"target_filters": [{
				"type": "tags",
				"tags": "lawful|dwarf"
			}]},
			"show_current_value_bonus_desc": false,
			"total_bonus_amount_prefix": "-"
		},
		{
			"buff_attack_count": 2,
			"effect_string": "barrowin_even_temper",
			"buff_effect_string": "reduce_attack_cooldown,1"
		}
	],
	"requirements": [],
	"description": {"desc": "Barrowin attacks $amount seconds faster for each stack of Vigilance she has. Additionally, when a Champion that is eligible for Healing Word is hit by an Enemy, Barrowin attacks 1 second faster for her next two attacks."},
	"id": 1442,
	"flavour_text": "",
	"graphic_id": 4437,
	"properties": {
		"is_formation_ability": true,
		"owner_use_outgoing_description": true
	}
}
</pre>
</p>
</details>
<br />

**Specialisation: Unknown** (Guess)
> Barrowin remembers the largest number of enemies she's had to tank at once in the current area. Blessed Hammer is increased by 100% times that number.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
	"effect_keys": [
		{
			"stacks_multiply": false,
			"effect_string": "buff_upgrade,100,10684",
			"stacks_on_trigger": "will_manually_stack"
		},
		{
			"effect_string": "barrowin_hammer_time",
			"buff_effect_key_index": 0
		}
	],
	"requirements": [],
	"description": {
		"post": {"conditions": [{
			"condition": "not static_desc",
			"desc": "^^$(barrowin_hammer_time_desc)"
		}]},
		"desc": "Barrowin remembers the largest number of enemies she's had to tank at once in the current area. Blessed Hammer is increased by $amount% times that number."
	},
	"id": 1443,
	"flavour_text": "",
	"graphic_id": 0,
	"properties": {
		"is_formation_ability": true,
		"owner_use_outgoing_description": true
	}
}
</pre>
</p>
</details>
<br />

**Specialisation: Unknown** (Guess)
> Barrowin's Blessed Hammer base effect is additively increased by 20% for each Vigilance stack she has.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
	"effect_keys": [{
		"off_when_benched": true,
		"amount_per_stack": 20,
		"effect_string": "barrowin_hammer_of_the_law",
		"blessed_hammer_upg_id": 10684,
		"count_hero_tag_expr": "lawful|dwarf",
		"base_effect_amount": 400
	}],
	"requirements": [],
	"description": {"desc": "Barrowin's Blessed Hammer base effect is additively increased by 20% for each Vigilance stack she has."},
	"id": 1444,
	"flavour_text": "",
	"graphic_id": 0,
	"properties": {"owner_use_outgoing_description": true}
}
</pre>
</p>
</details>
<br />

# Birdsong

![Birdsong Portrait](images/season_birdsong.png)

No changes observed yet.

# Turiel

![Turiel Portrait](images/season_turiel.png)

No changes observed yet.

{% comment %}

# Champion

![Champion Portrait](images/season_champion.png)

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