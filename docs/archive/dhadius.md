[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsImage">
        ![PC Portrait for Dhadius](images/reworks/dhadius.png)Portait
    </span>
</span>

# Dhadius

Dhadius is a mage of legendary status and acclaim (at least, in his own mind), who sees everyone else as intellectual worms. Being an egomaniac, he seeks out esoteric lore and rare magical secrets so he may know things that the 'common fools' do not. Dhadius hails from Luskan in the north, where he is a member of the Arcane Brotherhood, an infamous group of wizards. He joined them only recently and hasn't been taken as seriously by the others as he thinks he should be. He's determined to let it be known far and wide that he is a wizard to be respected and feared.

# Changes

Dhadius is potentially a reworked champion in the Festival of Fools event on 5 March 2025.

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Chromatic Orb - Frost** (Guess)
> Dhadius tosses a Chromatic orb with a random element at the nearest enemy.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 740,
    "name": "Chromatic Orb",
    "description": "Dhadius tosses a Chromatic orb with a random element at the nearest enemy.",
    "long_description": "",
    "graphic_id": 0,
    "target": "front",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 3.5,
    "animations": [
        {
            "type": "ranged_attack",
            "projectile": "pd_generic_projectile",
            "update_base_attack_after_random": [
                740,
                741,
                742
            ],
            "shoot_offset_x": 40,
            "shoot_frame": 23,
            "shoot_sound": 149,
            "hit_sound": 133,
            "projectile_details": {
                "hash": "chromatic_orb_frost",
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
**Base Attack: Chromatic Orb - Acid** (Guess)
> Dhadius tosses a Chromatic orb with a random element at the nearest enemy.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 741,
    "name": "Chromatic Orb",
    "description": "Dhadius tosses a Chromatic orb with a random element at the nearest enemy.",
    "long_description": "",
    "graphic_id": 0,
    "target": "front",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 3.5,
    "animations": [
        {
            "type": "ranged_attack",
            "projectile": "pd_generic_projectile",
            "update_base_attack_after_random": [
                740,
                741,
                742
            ],
            "shoot_offset_x": 40,
            "shoot_frame": 23,
            "shoot_sound": 149,
            "hit_sound": 133,
            "projectile_details": {
                "hash": "chromatic_orb_acid",
                "projectile_speed": 1600,
                "projectile_graphic_id": 1699,
                "projectile_hit_graphic_id": 1698,
                "trail": {
                    "particle_graphic_ids": [
                        1699
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
**Base Attack: Chromatic Orb - Fire** (Guess)
> Dhadius tosses a Chromatic orb with a random element at the nearest enemy.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 742,
    "name": "Chromatic Orb",
    "description": "Dhadius tosses a Chromatic orb with a random element at the nearest enemy.",
    "long_description": "",
    "graphic_id": 0,
    "target": "front",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 3.5,
    "animations": [
        {
            "type": "ranged_attack",
            "projectile": "pd_generic_projectile",
            "update_base_attack_after_random": [
                740,
                741,
                742
            ],
            "shoot_offset_x": 40,
            "shoot_frame": 23,
            "shoot_sound": 149,
            "hit_sound": 133,
            "projectile_details": {
                "hash": "chromatic_orb_fire",
                "projectile_speed": 1600,
                "projectile_graphic_id": 1702,
                "projectile_hit_graphic_id": 1701,
                "trail": {
                    "particle_graphic_ids": [
                        1702
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
> Increases Dhadius' damage and the damage of Champions with 14 or more intelligence within 2 slots of Dhadius by 100% for each Champion in the formation affected by this ability, stacking multiplicatively.
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
                "desc": "Increases Dhadius' damage and the damage of Champions with 12 or more intelligence within 2 slots of Dhadius by $(not_buffed amount)% for each Champion in the formation affected by this ability, stacking multiplicatively."
            },
            {
                "desc": "Increases Dhadius' damage and the damage of Champions with 14 or more intelligence within 2 slots of Dhadius by $(not_buffed amount)% for each Champion in the formation affected by this ability, stacking multiplicatively."
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
            "amount_func": "mult",
            "stack_func": "per_upgrade_targets",
            "stack_func_data": {
                "upgrade_id": 14553,
                "only_slots_with_heroes": true
            },
            "stacks_multiply": true,
            "show_bonus": true,
            "amount_updated_listeners": [
                "slot_changed",
                "feat_changed",
                "ability_score_changed"
            ],
            "retarget_when_ability_score_changed": [
                "int"
            ],
            "slot_change_updates_targets": true,
            "formation_arrows_for_effected_only": true,
            "use_computed_amount_for_description": true,
            "active_graphic_id": 1704,
            "active_graphic_under": true
        },
        {
            "effect_string": "expression_on_trigger,area_complete",
            "per_trigger_expr": "AppendToSaveStat(`dhadius_smart_companions`, false, trigger_count * as_int(GetUpgradeStacks(14553, 0) == num_formation_slots))"
        }
    ],
    "requirements": "",
    "graphic_id": 1645,
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
> Enemies hit by a Chromatic Orb are debuffed based on the orb's type (acid, frost, or fire). Each debuff increases the damage of subsequent orbs of the same type by 400%, stacking multiplicatively. Enemies can have up to 5 debuffs of each type; debuffs do not expire.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1880,
    "flavour_text": "",
    "description": {
        "desc": "Enemies hit by a Chromatic Orb are debuffed based on the orb's type (acid, frost, or fire). Each debuff increases the damage of subsequent orbs of the same type by $(amount)%, stacking multiplicatively. Enemies can have up to $(debuff_max_stacks) debuffs of each type; debuffs do not expire."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "pre_stack_amount,400",
            "debuff_max_stacks": 5
        },
        {
            "off_when_benched": true,
            "effect_string": "dhadius_practice_makes_perfect_v2",
            "debuff_base_amount": 400,
            "debuff_max_stacks": 5,
            "debuffing_attack_ids": [
                740
            ],
            "debuff_effects": [
                {
                    "effect_string": "increase_monster_damage_if_from_attacks,0,740",
                    "amount_expr": "upgrade_amount(14554,0)",
                    "active_graphic_id": 22709,
                    "active_graphic_x": 0,
                    "active_graphic_y": -60,
                    "use_stack_as_frame": true,
                    "overlay_play_mode": "stopped",
                    "stacks_on_reapply": true,
                    "manual_stacking": true,
                    "default_stacks": 1,
                    "stack_as_frame_offset": -1,
                    "max_stacks": "$debuff_max_stacks",
                    "stacks_multiply": true,
                    "use_collection_source": false
                }
            ]
        },
        {
            "off_when_benched": true,
            "effect_string": "dhadius_practice_makes_perfect_v2",
            "debuff_max_stacks": 5,
            "debuffing_attack_ids": [
                741
            ],
            "debuff_effects": [
                {
                    "effect_string": "increase_monster_damage_if_from_attacks,0,741",
                    "amount_expr": "upgrade_amount(14554,0)",
                    "active_graphic_id": 22707,
                    "active_graphic_x": -20,
                    "active_graphic_y": -85,
                    "use_stack_as_frame": true,
                    "overlay_play_mode": "stopped",
                    "stacks_on_reapply": true,
                    "manual_stacking": true,
                    "default_stacks": 1,
                    "stack_as_frame_offset": -1,
                    "max_stacks": "$debuff_max_stacks",
                    "stacks_multiply": true,
                    "use_collection_source": false
                }
            ]
        },
        {
            "off_when_benched": true,
            "effect_string": "dhadius_practice_makes_perfect_v2",
            "debuff_max_stacks": 5,
            "debuffing_attack_ids": [
                742
            ],
            "debuff_effects": [
                {
                    "effect_string": "increase_monster_damage_if_from_attacks,0,742",
                    "amount_expr": "upgrade_amount(14554,0)",
                    "active_graphic_id": 22708,
                    "active_graphic_x": 20,
                    "active_graphic_y": -85,
                    "use_stack_as_frame": true,
                    "overlay_play_mode": "stopped",
                    "stacks_on_reapply": true,
                    "manual_stacking": true,
                    "default_stacks": 1,
                    "stack_as_frame_offset": -1,
                    "max_stacks": "$debuff_max_stacks",
                    "stacks_multiply": true,
                    "use_collection_source": false
                }
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 1646,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "retain_on_slot_changed": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Chromatic Wonder** (Guess)
> Dhadius keeps track of the total number of sets of all three orb types he has cast in the current area. Dhadius increases the effect of Skill Empowerment by 100% for each set, stacking multiplicatively and capping at 20 stacks.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1881,
    "flavour_text": "",
    "description": {
        "desc": "Dhadius keeps track of the total number of sets of all three orb types he has cast in the current area. Dhadius increases the effect of Skill Empowerment by $(amount___4)% for each set, stacking multiplicatively and capping at $(max_stacks___4) stacks."
    },
    "effect_keys": [
        {
            "effect_string": "do_nothing",
            "stacks_multiply": false,
            "show_stacks": true,
            "stack_title": "Frost Stacks",
            "stacks_on_trigger": "owner_attack_with_id,740",
            "more_triggers": [
                {
                    "trigger": "area_changed",
                    "action": {
                        "type": "reset"
                    }
                }
            ],
            "desc_forced_order": 1,
            "stack_string_newline": true
        },
        {
            "effect_string": "do_nothing",
            "stacks_multiply": false,
            "show_stacks": true,
            "stack_title": "Acid Stacks",
            "stacks_on_trigger": "owner_attack_with_id,741",
            "more_triggers": [
                {
                    "trigger": "area_changed",
                    "action": {
                        "type": "reset"
                    }
                }
            ],
            "desc_forced_order": 2,
            "stack_string_newline": true
        },
        {
            "effect_string": "do_nothing",
            "stacks_multiply": false,
            "show_stacks": true,
            "stack_title": "Fire Stacks",
            "stacks_on_trigger": "owner_attack_with_id,742",
            "more_triggers": [
                {
                    "trigger": "area_changed",
                    "action": {
                        "type": "reset"
                    }
                }
            ],
            "desc_forced_order": 3
        },
        {
            "effect_string": "buff_upgrade,100,14553",
            "amount_func": "mult",
            "stack_func": "per_other_stack_count",
            "other_stack_count_expr": "min(min(min(upgrade_stacks(14555,0),upgrade_stacks(14555,1)),upgrade_stacks(14555,2)),max_stacks)",
            "max_stacks": 20,
            "amount_updated_listeners": [
                "stacks_changed"
            ],
            "changing_stack_upgade_ids": [
                14555
            ],
            "stack_title": "Orb Sets",
            "show_bonus": true,
            "desc_forced_order": 4
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 3,
        "retain_on_slot_changed": true,
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Together In Magic** (Guess)
> The effect of Skill Empowerment is increased by 100% for each Champion in the formation with a Magic base attack, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1882,
    "flavour_text": "",
    "description": {
        "desc": "The effect of Skill Empowerment is increased by $(amount)% for each Champion in the formation with a Magic base attack, stacking multiplicatively."
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
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1883,
    "flavour_text": "",
    "description": {
        "desc": "The effect of Skill Empowerment is increased by $(amount)% for each Champion in the formation that does not have a Magic base attack, stacking multiplicatively."
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
> Chromatic Orbs now deal 400% more damage in an area.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1884,
    "flavour_text": "",
    "description": {
        "desc": "Chromatic Orbs now deal $(amount___4)% more damage in an area."
    },
    "effect_keys": [
        {
            "effect_string": "add_attack_aoe_targets,100,100,740"
        },
        {
            "effect_string": "add_attack_aoe_targets,100,100,741"
        },
        {
            "effect_string": "add_attack_aoe_targets,100,100,742"
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
                        "hero_expr": "hero_id == 17 || (is_qa && hero_id == 108) || GetStat(`int`) >= 12"
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

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Dhadius" fill="#aaa" data-formationName="Dhadius" data-campaignName="Festival of Fools" width="287" height="160"><circle cx="135" cy="45" r="15"/><circle cx="135" cy="125" r="15"/><circle cx="95" cy="25" r="15"/><circle cx="95" cy="65" r="15"/><circle cx="95" cy="105" r="15"/><circle cx="95" cy="145" r="15"/><circle cx="55" cy="45" r="15"/><circle cx="55" cy="125" r="15"/><circle cx="15" cy="65" r="15"/><circle cx="15" cy="105" r="15"/><text x="165" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Dhadius</text><text x="165" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Festival of Fools</text></svg>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*