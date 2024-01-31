[Back to Main](index.md)

# Index

* [Season 8](#season-8)
* [Theme](#theme)
* [Changes](#changes)
* [Dhadius](#dhadius)
<br />

# Season 8

Season 8 is expected to start on 28 February 2024.

# Theme

![Dhadius Season Portrait](images/season_8/dhadius.png)![Unknown Season Champion Portrait](images/general/unknown_champion.png)![Unknown Season Champion Portrait](images/general/unknown_champion.png)![Unknown Season Champion Portrait](images/general/unknown_champion.png)![Unknown Season Champion Portrait](images/general/unknown_champion.png)

We only have data for one seasonal champion so far. That is Dhadius. The rest are as yet unknown.

# Changes

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Dhadius

![Dhadius Portrait](images/season_8/dhadius.png)
<br /><span class="formationTooltip">[formation]
    <span class="formationTooltipContents">
        ![Formation Layout for Dhadius](images/season_8/dhadius_formation.png)
    </span>
</span>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Chromatic Orb - Frost** (Guess)
> 
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 740,
    "name": "Chromatic Orb - Frost",
    "description": "",
    "long_description": "",
    "graphic_id": 0,
    "target": "front",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 250,
    "animations": [
        {
            "type": "ranged_attack",
            "projectile": "pd_generic_projectile",
            "shoot_offset_x": 40,
            "shoot_frame": 23,
            "shoot_sound": 149,
            "hit_sound": 133,
            "projectile_details": {
                "hash": "77a569ca1ee13cb49f38342e9024f6b6",
                "projectile_speed": 1600,
                "projectile_graphic_id": 1696,
                "projectile_hit_graphic_id": 1695,
                "trail": {
                    "particle_graphic_ids": [
                        1696
                    ],
                    "lifespan": 0.25,
                    "spawn_rate": 100,
                    "initial_velocity": {
                        "x": 0,
                        "y": 0
                    },
                    "velocity_jitter": {
                        "x": 0,
                        "y": 0
                    },
                    "rotation_jitter": 0,
                    "alpha_lerp": {
                        "0": 0,
                        "0.1": 0.25,
                        "1": 0
                    },
                    "scale_lerp": [
                        {
                            "x": 1,
                            "y": 1
                        },
                        {
                            "x": 0,
                            "y": 0
                        }
                    ]
                },
                "use_auto_rotation": true,
                "percent_height_offset": 5
            }
        }
    ],
    "tags": [
        "ranged"
    ],
    "damage_types": [
        "magic"
    ]
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Skill Empowerment** (Guess)
> Increases Dhadius's damage and the damage of Champions with 14 or more intelligence within 2 slots of Dhadius by 100% for each Champion in the formation affected by this ability, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1879,
    "flavour_text": "",
    "description": {
        "conditions": [
            {
                "condition": "upgrade_purchased 14560",
                "desc": "Increases Dhadius's damage and the damage of Champions with 12 or more intelligence within 2 slots of Dhadius by $(not_buffed amount)% for each Champion in the formation affected by this ability, stacking multiplicatively."
            },
            {
                "desc": "Increases Dhadius's damage and the damage of Champions with 14 or more intelligence within 2 slots of Dhadius by $(not_buffed amount)% for each Champion in the formation affected by this ability, stacking multiplicatively."
            }
        ]
    },
    "effect_keys": [
        {
            "effect_string": "hero_dps_multiplier_mult,100",
            "targets": [
                {
                    "type": "distance",
                    "distance": 2,
                    "self": true
                }
            ],
            "filter_targets": [
                {
                    "type": "hero_expr",
                    "hero_expr": "GetStat(`int`) >= 14"
                }
            ],
            "amount_func": "add",
            "stack_func": "per_upgrade_targets",
            "stack_func_data": {
                "upgrade_id": 14553,
                "only_slots_with_heroes": true
            },
            "stacks_multiply": false,
            "show_bonus": true,
            "amount_updated_listeners": [
                "slot_changed",
                "stat_changed"
            ],
            "slot_change_updates_targets": true,
            "formation_arrows_for_effected_only": true,
            "use_computed_amount_for_description": true
        },
        {
            "effect_string": "expression_on_trigger,area_complete",
            "per_trigger_expr": "AppendToSaveStat(`dhadius_smart_companions`, false, as_int(GetUpgradeStacks(14553, 0) == num_formation_slots))"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Practice Makes Perfect** (Guess)
> 
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1880,
    "flavour_text": "",
    "description": {
        "desc": ""
    },
    "effect_keys": [
        {
            "effect_string": "do_nothing"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": []
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Chromatic Wonder** (Guess)
> 
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1881,
    "flavour_text": "",
    "description": {
        "desc": ""
    },
    "effect_keys": [
        {
            "effect_string": "do_nothing"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": []
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Together In Magic** (Guess)
> The effect of Skill Empowerment is increased by 100% for each Champion in the formation with a Magic base attack, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability might be prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1882,
    "flavour_text": "",
    "description": {
        "desc": "The effect of Skill Empowerment is increased by $(not_buffed amount)% for each Champion in the formation with a Magic base attack, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack_amount,100"
        },
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,0,14553",
            "amount_expr": "upgrade_amount(14556,0)",
            "amount_func": "mult",
            "show_bonus": true,
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasAttackDamageType(`magic`)",
            "per_hero_targets": [
                "all"
            ],
            "amount_updated_listeners": [
                "slot_changed",
                "feat_changed",
                "attack_changed"
            ],
            "use_computed_amount_for_description": true
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "formation_circle_icon": false,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "spec_option_post_apply_info": "Number of Magic Attackers: $num_stacks___2"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Apart in Magic** (Guess)
> The effect of Skill Empowerment is increased by 100% for each Champion in the formation that does not have a Magic base attack, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability might be prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1883,
    "flavour_text": "",
    "description": {
        "desc": "The effect of Skill Empowerment is increased by $(not_buffed amount)% for each Champion in the formation that does not have a Magic base attack, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack_amount,100"
        },
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,0,14553",
            "amount_expr": "upgrade_amount(14557,0)",
            "amount_func": "mult",
            "show_bonus": true,
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "!HasAttackDamageType(`magic`)",
            "per_hero_targets": [
                "all"
            ],
            "amount_updated_listeners": [
                "slot_changed",
                "feat_changed",
                "attack_changed"
            ],
            "use_computed_amount_for_description": true
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "formation_circle_icon": false,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "spec_option_post_apply_info": "Number of Non-Magic Attackers: $num_stacks___2"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Empowered Orbs** (Guess)
> Chromatic Orbs now do AOE damage and deal 400% more damage.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1884,
    "flavour_text": "",
    "description": {
        "desc": "Chromatic Orbs now do AOE damage and deal $(amount___2)% more damage."
    },
    "effect_keys": [
        {
            "effect_string": "add_attack_aoe_targets,100,100,60"
        },
        {
            "effect_string": "hero_dps_multiplier_mult,400"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "type": "upgrade",
        "formation_circle_icon": false,
        "owner_use_outgoing_description": true,
        "indexed_effect_properties": true,
        "retain_on_slot_changed": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Empowered Empowerment** (Guess)
> Increases the effect of Skill Empowerment by 200%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1885,
    "flavour_text": "",
    "description": {
        "desc": "Increases the effect of Skill Empowerment by $(amount)%"
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,200,14553"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Use Smaller Words** (Guess)
> Dhadius reduces the required Intelligence of Skill Empowerment to 12 and higher.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1886,
    "flavour_text": "",
    "description": {
        "desc": "Dhadius reduces the required Intelligence of Skill Empowerment to 12 and higher."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "change_upgrade_data,14553,0",
            "data": {
                "filter_targets": [
                    {
                        "type": "hero_expr",
                        "hero_expr": "(hero_id == 17 || (is_qa && hero_id == 108) || GetStat(`int`) >= 12)"
                    }
                ]
            }
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "type": "upgrade",
        "formation_circle_icon": false,
        "owner_use_outgoing_description": true,
        "retain_on_slot_changed": true
    }
}
</pre>
</p>
</details>
</div></div>


# Miscellaneous Images

[Back to Top](#top)

*Last Modified: {{ site.time }}*