[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Lazaapz](images/lazaapz/portrait.png)
        </span>
        <span>
        Portrait
        </span>
    </span>
</span>

# Lazaapz

Born in The Cogs beneath Sharn's Lower City, Lazaapz's remarkable intellect elevated her to the Tradefair district, where her mechanical genius became highly sought after by the Dragonmarked Houses. Lazaapz's first invention was a functional mechanical arm to replace the one she was born without; now she leads an elite team of engineers in cutting edge research and development. Following the discovery of a mysterious Eldritch Machine, Lazaapz was brought in by House Cannith to ascertain the purpose of the device. Shortly after, both Lazaapz and the machine disappeared, never to be seen again.

# Changes

Lazaapz will be a reworked champion in the Ahghairon's Day event on 13 August 2025 (expected a week after event start due to Worst the Wait).

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Attacks

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Stunning Gauntlet** (Guess)
> Lazaapz attacks and stuns the nearest enemy. Every fifth attack, she uses her Grappling Fist to pull an enemy closer to her instead.  
> Cooldown: 4.5s (Cap 1.125s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 888,
    "name": "Stunning Gauntlet",
    "description": "Lazaapz attacks and stuns the nearest enemy. Every fifth attack, she uses her Grappling Fist to pull an enemy closer to her instead.",
    "long_description": "",
    "graphic_id": 0,
    "target": "front",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 4.5,
    "animations": [
        {
            "type": "melee_attack",
            "stun_on_hit": 0.5,
            "stun_graphic": 1509,
            "stun_chance": 100,
            "power_up_sequence": {
                "start_frame": 0,
                "end_frame": 1
            },
            "sequences": [
                {
                    "start_frame": 1,
                    "end_frame": 11,
                    "damage_frame": 3
                }
            ]
        }
    ],
    "tags": [
        "melee"
    ],
    "damage_types": [
        "melee"
    ]
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Repair Mode** (Guess)
> Lazaapz is currently repairing her armor and will not attack until she is finished.  
> Cooldown: 4.5s (Cap 1.125s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 889,
    "name": "Repair Mode",
    "description": "Lazaapz is currently repairing her armor and will not attack until she is finished.",
    "long_description": "",
    "graphic_id": 0,
    "target": "front",
    "num_targets": 0,
    "aoe_radius": 0,
    "damage_modifier": 0,
    "cooldown": 4.5,
    "animations": [
        {
            "type": "melee_attack",
            "no_damage_display": true,
            "no_jump": true,
            "no_cooldown_display": true
        }
    ],
    "tags": [
        "melee"
    ],
    "damage_types": [
        "melee"
    ]
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Gauntlet Launcher** (Guess)
>   
> Cooldown: 4.5s (Cap 1.125s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 890,
    "name": "Gauntlet Launcher",
    "description": "",
    "long_description": "",
    "graphic_id": 0,
    "target": "back",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 0,
    "cooldown": 4.5,
    "animations": [
        {
            "type": "ranged_attack",
            "projectile": "pd_generic_projectile",
            "animation_sequence_name": "attack_b",
            "shoot_offset_x": 62,
            "shoot_offset_y": -15,
            "shoot_frame": 10,
            "hold_shoot_frame": true,
            "shoot_sound": 149,
            "hit_sound": 133,
            "bonus_damage_from": {
                "type": "seconds_of_bud",
                "amount": 15,
                "bud_override_upgrade_id": 17487,
                "bud_override_index": 4
            },
            "force_count_for_bud": false,
            "projectile_details": {
                "hash": "669349bf350cfaad7ed8d982a6d531a8",
                "target_offset_y": -60,
                "projectile_speed": 1200,
                "projectile_graphic_id": 8610,
                "projectile_graphic_skin_property": "closed_fist_graphic_id",
                "tween_func": "quad_in",
                "hit_monsters_moved_through": true,
                "push_monsters_moved_through": true,
                "move_across_entire_screen": true,
                "line_thickness": 200,
                "trail": {
                    "show_t": 0,
                    "particle_graphic_ids": [
                        692,
                        694,
                        695
                    ],
                    "initial_rotation": 180,
                    "match_projectile_rotation": true,
                    "lifespan": 0.3,
                    "spawn_rate": 150,
                    "spawn_shape_scale": {
                        "x": 10,
                        "y": 10
                    },
                    "initial_velocity": {
                        "x": 0,
                        "y": 0
                    },
                    "velocity_jitter": {
                        "x": 0,
                        "y": 0
                    },
                    "rotation_jitter": 10,
                    "alpha_lerp": {
                        "0": 0,
                        "0.1": 1,
                        "1": 0
                    },
                    "scale_lerp": {
                        "0": {
                            "x": 0.45,
                            "y": 0.45
                        },
                        "0.5": {
                            "x": 0.45,
                            "y": 0.45
                        },
                        "1": {
                            "x": 0.17,
                            "y": 0.17
                        }
                    },
                    "tint_lerp": {
                        "0": "#FFFFFF",
                        "0.3": "#FFFFFF",
                        "1": "#444444"
                    }
                }
            }
        }
    ],
    "tags": [
        "ranged"
    ],
    "damage_types": [
        "ranged"
    ]
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Flash of Genius** (Guess)
> Cazrin fires 2 magic missiles at random enemies, preferring different targets if possible  
> Cooldown: 4.5s (Cap 1.125s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 891,
    "name": "Magic Missile",
    "description": "Cazrin fires 2 magic missiles at random enemies, preferring different targets if possible",
    "long_description": "",
    "graphic_id": 27105,
    "target": "random",
    "num_targets": 2,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 4.5,
    "animations": [
        {
            "type": "ranged_attack",
            "projectile": "magic_missile",
            "shoot_frame": 10,
            "shoot_offset_x": 55,
            "shoot_offset_y": -155,
            "projectile_delay": 0.1,
            "projectile_count": 2,
            "shoot_sound": 149,
            "hit_sound": 133,
            "projectile_details": {
                "projectile_graphic_id": 27105,
                "impact_offset_y": -45,
                "trail_tint": "#c999c3",
                "impact_tint": "#c999c3"
            }
        }
    ],
    "tags": [
        "ranged",
        "multitarget"
    ],
    "damage_types": [
        "magic"
    ]
}
</pre>
</p>
</details>
</div></div>

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Fury of the Small** (Guess)
> Lazaapz's posse is Champions that are from smaller species: dwarves, fairies, gnomes, goblins, halflings, kobolds, and/or plasmoids. Lazaapz increases the damage of her posse by 100% for each posse member in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2394,
    "flavour_text": "",
    "description": {
        "desc": "Lazaapz's posse is Champions that are from smaller species: dwarves, fairies, gnomes, goblins, halflings, kobolds, and/or plasmoids. Lazaapz increases the damage of her posse by $amount% for each posse member in the formation, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,100",
            "off_when_benched": true,
            "retarget_when_any_hero_slot_changed": true,
            "retarget_when_hero_tags_changed": true,
            "retarget_when_upgrade_purchased_ids": [
                17484,
                17485,
                17486
            ]
        },
        {
            "effect_string": "hero_dps_multiplier_mult,0",
            "off_when_benched": true,
            "amount_expr": "upgrade_amount(17479,0)",
            "targets": [
                "all"
            ],
            "filter_targets": [
                {
                    "type": "hero_expr",
                    "hero_expr": "HasTag(`dwarf`) || HasTag(`gnome`) || HasTag(`goblin`) || HasTag(`halfling`) || HasTag(`kobold`) || HasTag(`plasmoid`) || HasTag(`fairy`) || HasTag(`fakesmallrace`) || (GetUpgradeUnlocked(17484) && HasAttackDamageType(`melee`)) || (GetUpgradeUnlocked(17485) && HasTag(`evil`)) || (GetUpgradeUnlocked(17486) && HasTag(`control`))"
                }
            ],
            "formation_arrows_for_effected_only": true,
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasTag(`dwarf`) || HasTag(`gnome`) || HasTag(`goblin`) || HasTag(`halfling`) || HasTag(`kobold`) || HasTag(`plasmoid`) || HasTag(`fairy`) || HasTag(`fakesmallrace`) || (GetUpgradeUnlocked(17484) && HasAttackDamageType(`melee`)) || (GetUpgradeUnlocked(17485) && HasTag(`evil`)) || (GetUpgradeUnlocked(17486) && HasTag(`control`))",
            "amount_updated_listeners": [
                "slot_changed",
                "hero_tags_changed",
                "upgrade_unlocked"
            ],
            "show_bonus": true,
            "use_computed_amount_for_description": true
        }
    ],
    "requirements": "",
    "graphic_id": 8654,
    "large_graphic_id": 8649,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 1
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Power Armour** (Guess)
> Lazaapz has a set of Artificer Power Armor. She starts each area with 100 stacks of Power Armor. Damage taken by Lazaapz is decreased by a percentage equal to her current Power Armor stacks, but the armor consumes 1 stack of Power Armor each time she would take damage. Can not be decreased below 0.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2395,
    "flavour_text": "",
    "description": {
        "desc": "Lazaapz has a set of Artificer Power Armor. She starts each area with $lazaapz_max_power_armour_stacks stacks of Power Armor. Damage taken by Lazaapz is decreased by a percentage equal to her current Power Armor stacks, but the armor consumes 1 stack of Power Armor each time she would take damage. Can not be decreased below 0.",
        "post": {
            "conditions": [
                {
                    "condition": "not static_desc",
                    "desc": "^^$lazaapz_power_armour_desc"
                }
            ]
        }
    },
    "effect_keys": [
        {
            "effect_string": "max_power_armour_stacks,100",
            "show_bonus": false
        },
        {
            "effect_string": "damage_reduction,1",
            "manual_stacking": true
        },
        {
            "effect_string": "lazaapz_power_armour_v2"
        }
    ],
    "requirements": "",
    "graphic_id": 8656,
    "large_graphic_id": 8650,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": false,
        "retain_on_slot_changed": true,
        "show_outgoing_desc_when_benched": false,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Contigency Plan** (Guess)
> When Lazaapz's Power Armor stacks reach 0, her armor sends out a massive shockwave, dealing 120 seconds of BUD damage to all enemies and pushing them back to the far side of the screen. Lazaapz then drops her shield and retreats to behind the formation, her armor shuts down, and she begins to repair it, taking 10 seconds for each time the armor has shut down in the current area (including this time). Upon finishing her work, she leaps back to her original location, knocking back any enemies that she encounters on her way, grabbing her shield, and refilling her Power Armor stacks to full.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2396,
    "flavour_text": "",
    "description": {
        "desc": "When Lazaapz's Power Armor stacks reach 0, her armor sends out a massive shockwave, dealing $amount___2 seconds of BUD damage to all enemies and pushing them back to the far side of the screen. Lazaapz then drops her shield and retreats to behind the formation, her armor shuts down, and she begins to repair it, taking $repair_time___2 seconds for each time the armor has shut down in the current area (including this time). Upon finishing her work, she leaps back to her original location, knocking back any enemies that she encounters on her way, grabbing her shield, and refilling her Power Armor stacks to full."
    },
    "effect_keys": [
        {
            "effect_string": "change_base_attack,889",
            "apply_manually": true
        },
        {
            "effect_string": "lazaapz_contingency_plan,120",
            "repair_time": 10,
            "push_amount": 1000,
            "shockwave_graphic": 26953,
            "shield_graphic": 26955,
            "drone_graphic": 26981,
            "repair_pos": [
                50,
                536
            ],
            "gem_glow_graphic": 27130,
            "gem_glow_offset_x": -9
        }
    ],
    "requirements": "",
    "graphic_id": 27011,
    "large_graphic_id": 27004,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": false,
        "retain_on_slot_changed": true,
        "show_outgoing_desc_when_benched": false,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 1
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Artificier Infusion** (Guess)
> Lazaapz infuses the equipment of other Champions in the formation with her Artificer powers. Infused equipment has its item level increased by 125. The equipment slot that is affected is equal to each Champions' exact distance from Lazaapz, so for example adjacent Champions (1 slot away) have their slot 1 equipment infused, while Champions 2 slots away have their slot 2 equipment infused, and so on.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2397,
    "flavour_text": "",
    "description": {
        "desc": "Lazaapz infuses the equipment of other Champions in the formation with her Artificer powers. Infused equipment has its item level increased by $amount. The equipment slot that is affected is equal to each Champions' exact distance from Lazaapz, so for example adjacent Champions (1 slot away) have their slot 1 equipment infused, while Champions 2 slots away have their slot 2 equipment infused, and so on."
    },
    "effect_keys": [
        {
            "effect_string": "add_base_item_levels_to_slot,125",
            "off_when_benched": true,
            "targets": [
                "other"
            ],
            "slot_expr": "distance_from_source",
            "retarget_when_any_hero_slot_changed": true,
            "override_key_desc": "Increases the item level of $target's slot $target_distance_from_source equipment by $amount"
        }
    ],
    "requirements": "",
    "graphic_id": 27010,
    "large_graphic_id": 27003,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Shield of Sharn** (Guess)
> Lazaapz increases the max health of all other Champions by 25% of her base max health and healing effects on all Champions are increased by 25%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2398,
    "flavour_text": "",
    "description": {
        "desc": "Lazaapz increases the max health of all other Champions by $amount% of her base max health and healing effects on all Champions are increased by $amount___2%."
    },
    "effect_keys": [
        {
            "effect_string": "increase_health_by_source_percent,25",
            "off_when_benched": true,
            "targets": [
                "other"
            ]
        },
        {
            "effect_string": "healing_add_mult,25",
            "off_when_benched": true,
            "targets": [
                "all"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 8657,
    "large_graphic_id": 8653,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "indexed_effect_properties": true
    }
}
</pre>
</p>
</details>
</div></div>

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Fury of the Brawl** (Guess)
> Lazaapz's posse now also includes Champions with a melee base attack and is buffed by 100% (post-stack).
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2399,
    "flavour_text": "",
    "description": {
        "desc": "Lazaapz's posse now also includes Champions with a melee base attack and is buffed by $amount% (post-stack)."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,100,17479",
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 27018,
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
**Specialisation: Fury of the Cabal** (Guess)
> Lazaapz's posse now also includes Evil Champions and is buffed by 150% (post-stack).
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2400,
    "flavour_text": "",
    "description": {
        "desc": "Lazaapz's posse now also includes Evil Champions and is buffed by $amount% (post-stack)."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,150,17479",
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 27019,
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
**Specialisation: Fury of the Stall** (Guess)
> Lazaapz's posse now also includes Champions with the Control role and is buffed by 150% (post-stack).
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2401,
    "flavour_text": "",
    "description": {
        "desc": "Lazaapz's posse now also includes Champions with the Control role and is buffed by $amount% (post-stack)."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,150,17479",
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 27020,
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
**Specialisation: Guardian** (Guess)
> Lazaapz gains the Debuff role. Power Armor's max stacks are additively increased by 25. Whenever her Power Armor stacks loses a multiple of 25 Lazaapz engages her Gauntlet Launcher, blasting her armor's gauntlet through all enemies in a line. The gauntlet deals 15 seconds of BUD damage to each enemy, knocks them back and to the side, and causes them to take 1000% extra damage from all sources until defeated. The debuff stacks multiplicatively for each Gauntlet Launcher an enemy is hit by, up to a max of 5 stacks.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2402,
    "flavour_text": "",
    "description": {
        "desc": "Lazaapz gains the Debuff role. Power Armor's max stacks are additively increased by $amount___2. Whenever her Power Armor stacks loses a multiple of $frequency___4 Lazaapz engages her Gauntlet Launcher, blasting her armor's gauntlet through all enemies in a line. The gauntlet deals $amount___5 seconds of BUD damage to each enemy, knocks them back and to the side, and causes them to take $(not_buffed amount___4)% extra damage from all sources until defeated. The debuff stacks multiplicatively for each Gauntlet Launcher an enemy is hit by, up to a max of 5 stacks."
    },
    "effect_keys": [
        {
            "effect_string": "add_hero_tags,0,debuff"
        },
        {
            "effect_string": "buff_upgrade_add_flat_amount,25,17480,0"
        },
        {
            "effect_string": "change_base_attack,890",
            "apply_manually": true
        },
        {
            "effect_string": "lazaapz_guardian,1000",
            "frequency": 25,
            "debuffing_attack_ids": [
                890
            ],
            "debuff_before_damage": true,
            "debuff_effects": [
                {
                    "effect_string": "increase_monster_damage,1000",
                    "manual_stacking": true,
                    "max_stacks": 5,
                    "stacks_multiply": true,
                    "use_collection_source": true,
                    "stacks_on_reapply": true
                }
            ]
        },
        {
            "effect_string": "launcher_bud_damage,15"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 27021,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": false,
        "retain_on_slot_changed": true,
        "show_outgoing_desc_when_benched": false,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 3
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Infiltrator** (Guess)
> The effect of Fury of the Small is increased by 5% for each missing stack of Power Armor, stacking multiplicatively, and when an enemy is defeated Lazaapz regains one stack of Power Armor. Can not go over her maximum stacks.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2403,
    "flavour_text": "",
    "description": {
        "desc": "The effect of Fury of the Small is increased by $(not_buffed amount)% for each missing stack of Power Armor, stacking multiplicatively, and when an enemy is defeated Lazaapz regains one stack of Power Armor. Can not go over her maximum stacks."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,5,17479",
            "off_when_benched": true,
            "amount_func": "mult",
            "stack_func": "per_lazaapz_missing_power_armour",
            "amount_updated_listeners": [
                "lazaapz_power_armour_changed"
            ],
            "show_bonus": true
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 27022,
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

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unlock Adventure: Brightly into Darkness (Lazaapz)** (Complete Area 50)
> Help the Harpells track down a lost artifact.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Lolth's Army Icon](images/lazaapz/8643.png) **Variant 1: Lolth's Army** (Complete Area 75)
> Additional Drow Fighters spawn in each wave. Whenever you kill any drow enemy, Lolth grows angry and tracks your transgressions. For every drow killed during this adventure, the damage and movement speed of every other drow enemy goes up by 0.1% (additively)
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![I Got This...? Icon](images/lazaapz/8644.png) **Variant 2: I Got This...?** (Complete Area 125)
> Only Champions with INT 14 or lower, plus Lazaapz, can be used.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Short Force Leader Icon](images/lazaapz/8645.png) **Variant 3: Short Force Leader** (Complete Area 175)
> A roving band of Ogres have joined the enemies waves during this adventure! Let's show 'em what Lazaapz and her crew can do!  
> Lazaapz starts in the formation. She cannot be moved, removed, or swapped. All enemies have their damage and movement speed increased by 100% for each Ogre Battering Ram on screen (additive). Champions in the two columns behind Lazaapz become part of her posse. Everyone's smaller than an ogre, right?
</div></div>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Lazaapz" fill="#aaa" data-formationName="Lazaapz" data-campaignName="Feast of the Moon" width="378" height="160"><circle cx="215" cy="85" r="15"/><circle cx="175" cy="65" r="15"/><circle cx="175" cy="105" r="15"/><circle cx="135" cy="45" r="15"/><circle cx="135" cy="85" r="15"/><circle cx="135" cy="125" r="15"/><circle cx="95" cy="25" r="15"/><circle cx="95" cy="145" r="15"/><circle cx="55" cy="45" r="15"/><circle cx="15" cy="65" r="15"/><text x="245" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Lazaapz</text><text x="245" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Feast of the Moon</text></svg>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*