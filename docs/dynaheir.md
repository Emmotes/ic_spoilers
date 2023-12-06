[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsImage">
        ![PC Portrait for Dynaheir](images/dynaheir/portrait.png)Portait
    </span>
    <span class="championPortraitsImage">
        ![Model GIF of Dynaheir](images/dynaheir/model.gif)Model
    </span>
</span>

# Dynaheir

Dynaheir was a young invoker in the wychlaran of Rashemen who undertook her dajemma to the far off region of the Sword Coast in the mid-14th century DR. She was not alone on this journey, as she accompanied by her berserker companion Minsc and his hamster Boo.

[Dynaheir - FR Fandom Wiki](https://forgottenrealms.fandom.com/wiki/Dynaheir)

# Basic Information

Dynaheir will be the new champion in the Fleetswake event on 21 February 2024.

<span class="champStatsTableColumn">
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Seat**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Unknown</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Race**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Human (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Class**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Wizard (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Roles**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Tanking / Support / Speed (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Age**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Unknown</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Gender**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Female (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Alignment**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Lawful Good (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Affiliation**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Unknown</span>
        </span>
    </span>
</span>

# Formation

<span class="formationBorder">
    ![Formation Layout](images/dynaheir/formation.png)
</span>

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: An Old School Sling** (Ranged)
> Dynaheir attacks the closest enemy with her sling, dealing 1 hit.  
> Cooldown: 7s (Cap 1.75s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 727,
    "name": "An Old School Sling",
    "description": "Dynaheir attacks the closest enemy with her trusty sling.",
    "long_description": "Dynaheir attacks the closest enemy with her sling, dealing 1 hit.",
    "graphic_id": 0,
    "target": "front",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 7,
    "animations": [
        {
            "type": "ranged_attack",
            "projectile": "generic",
            "shoot_frame": 14,
            "shoot_offset_x": 100,
            "shoot_offset_y": -65,
            "projectile_count": 1,
            "projectile_details": {
                "projectile_speed": 2400,
                "has_trail": false,
                "extend_line": true,
                "projectile_graphic_id": 5395
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
**Ultimate Attack: Fireball**
> Dynaheir casts a gigantic fireball that engulfs the entire enemy's side of the screen, dealing 1 ultimate hit to all enemies and knocking them back a short distance.  
> Cooldown: 250s (Cap 62.5s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 728,
    "name": "Fireball",
    "description": "Dynaheir engulfs the enemies with a fireball.",
    "long_description": "Dynaheir casts a gigantic fireball that engulfs the entire enemy's side of the screen, dealing 1 ultimate hit to all enemies and knocking them back a short distance.",
    "graphic_id": 22274,
    "target": "all",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 250,
    "animations": [
        {
            "type": "ultimate_attack",
            "ultimate": "nixie",
            "animation_sequence_name": "attack_b",
            "projectile_data": {
                "type": "ranged_attack",
                "shoot_offset_y": -90,
                "shoot_offset_x": 80,
                "shoot_frame": 18,
                "shoot_sound": 149,
                "hit_sound": 133,
                "fixed_spark_count": 0
            },
            "effects_on_monsters": [
                {
                    "effect_string": "push_back_monster,10",
                    "animation": "hit",
                    "after_damage": true
                }
            ]
        }
    ],
    "tags": [
        "ranged",
        "aoe",
        "ultimate"
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
**Ultimate Attack: Lightning Bolt**
> Dynaheir casts a lightning bolt through the target with the most health remaining, dealing 1 ultimate hit to all creatures in a wide line and stunning them for 5 seconds.  
> Cooldown: 250s (Cap 62.5s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 729,
    "name": "Lightning Bolt",
    "description": "Dynaheir flings a lightning bolt at the toughest monster, damaging all enemies in a line.",
    "long_description": "Dynaheir casts a lightning bolt through the target with the most health remaining, dealing 1 ultimate hit to all creatures in a wide line and stunning them for 5 seconds.",
    "graphic_id": 22275,
    "target": "highest_health",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 250,
    "animations": [
        {
            "type": "ranged_attack",
            "projectile": "dynaheir_lightning_bolt",
            "animation_sequence_name": "attack_c",
            "shoot_frame": 13,
            "shoot_offset_x": -20,
            "shoot_offset_y": -50,
            "shoot_sound": 149,
            "projectile_details": {
                "hash": "dynaheir_lightning_bolt",
                "projectile_speed": 1600,
                "projectile_graphic_id": 22219,
                "projectile_hit_graphic_id": 22218,
                "projectile_hit_tint": [
                    0.5,
                    0.5,
                    1
                ],
                "projectile_hit_additive": true,
                "impact_offset_y": -60,
                "impact_scale_x": -1,
                "projectile_additive": true,
                "projectile_tint": [
                    0.5,
                    0.5,
                    1
                ],
                "move_across_entire_screen": true,
                "hit_monsters_moved_through": true,
                "line_thickness": 200,
                "trail": {
                    "additive": true,
                    "tint": [
                        0.5,
                        0.5,
                        1
                    ],
                    "particle_graphic_ids": [
                        22217,
                        22219
                    ],
                    "lifespan": 0.15,
                    "spawn_rate": 150,
                    "initial_velocity": {
                        "x": 0,
                        "y": 0
                    },
                    "velocity_jitter": {
                        "x": 100,
                        "y": 100
                    },
                    "alpha_lerp": {
                        "0": 1,
                        "0.75": 1,
                        "1": 0
                    },
                    "scale_lerp": {
                        "0": {
                            "x": 1,
                            "y": 0.6
                        },
                        "0.75": {
                            "x": 1,
                            "y": 0.6
                        },
                        "1": {
                            "x": 0,
                            "y": 0
                        }
                    }
                }
            },
            "effects_on_monsters": [
                {
                    "effect_string": "monster_stun,5,1509",
                    "animation": "hit",
                    "after_damage": true
                }
            ]
        }
    ],
    "tags": [
        "ranged",
        "ultimate"
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
**The Resolve of Rashmen** (Guess)
> Dynaheir increases the damage of all Champions in the formation with a CON of 15+ by 400% for each Champion affected by this ability, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability might be prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1849,
    "flavour_text": "",
    "description": {
        "desc": "Dynaheir increases the damage of all Champions in the formation with a CON of 15+ by $amount% for each Champion affected by this ability, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack_amount,400",
            "off_when_benched": true,
            "retarget_when_any_hero_slot_changed": true
        },
        {
            "effect_string": "hero_dps_multiplier_mult,0",
            "amount_expr": "upgrade_amount(13874,0)",
            "off_when_benched": true,
            "targets": [
                "all"
            ],
            "filter_targets": [
                {
                    "type": "stat_score",
                    "stat": "con",
                    "score": 15,
                    "check": ">="
                }
            ],
            "formation_arrows_for_effected_only": true,
            "show_bonus": true,
            "stacks_multiply": true,
            "amount_func": "mult",
            "stack_func": "per_upgrade_targets",
            "stack_func_data": {
                "upgrade_id": 13874,
                "upgrade_index": 1
            },
            "amount_updated_listeners": [
                "slot_changed",
                "ability_score_changed"
            ],
            "use_computed_amount_for_description": true
        }
    ],
    "requirements": "",
    "graphic_id": 22268,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 1,
        "indexed_effect_properties": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Enemy of Thay** (Guess)
> Humanoid enemies are Dynaheir's Favored Foe. There is a 50% chance that an additional Red Wizard spawns with each wave in non-boss areas.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1850,
    "flavour_text": "",
    "description": {
        "desc": "Humanoid enemies are Dynaheir's Favored Foe. There is a $(amount___2)% chance that an additional Red Wizard spawns with each wave in non-boss areas."
    },
    "effect_keys": [
        {
            "effect_string": "favored_foe,humanoid",
            "off_when_benched": true
        },
        {
            "effect_string": "spawn_additional_monsters,50",
            "off_when_benched": true,
            "monster_ids": [
                804,
                805,
                806,
                885,
                886,
                887,
                1946,
                1947,
                1948,
                1949,
                1950,
                1951,
                1952,
                1953,
                1954
            ],
            "spawn_count": 1,
            "boss_areas": false
        }
    ],
    "requirements": "",
    "graphic_id": 22267,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
        "indexed_effect_properties": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Spoils of War** (Guess)
> All Favored Foes have a 50% chance to drop double quest items or count for double quest progress.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1851,
    "flavour_text": "",
    "description": {
        "desc": "All Favored Foes have a $amount% chance to drop double quest items or count for double quest progress."
    },
    "effect_keys": [
        {
            "effect_string": "chance_multiply_favored_foe_quest_rewards,50,2",
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 22269,
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
**Defensive Position** (Guess)
> Dynaheir increases the bonus of The Resolve of Rashemen by 20% each time an ally is attacked, up to a maximum of 100 stacks. Stacks apply multiplicatively and reset when changing areas.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1852,
    "flavour_text": "",
    "description": {
        "desc": "Dynaheir increases the bonus of The Resolve of Rashemen by $(not_buffed amount)% each time an ally is attacked, up to a maximum of $max_stacks stacks. Stacks apply multiplicatively and reset when changing areas."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,20,13874",
            "off_when_benched": true,
            "stacks_multiply": true,
            "max_stacks": 100,
            "show_bonus": true,
            "more_triggers": [
                {
                    "trigger": "hero_attacked",
                    "target": "other",
                    "action": {
                        "type": "add_stack"
                    }
                },
                {
                    "trigger": "area_changed",
                    "action": {
                        "type": "reset_stacks"
                    }
                }
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 22266,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unapproachable East** (Guess)
> Champions in the front-most column of the formation have their Overwhelm increased to 25, if it wasn't already higher.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1853,
    "flavour_text": "",
    "description": {
        "desc": "Champions in the front-most column of the formation have their Overwhelm increased to $amount, if it wasn't already higher."
    },
    "effect_keys": [
        {
            "effect_string": "increase_overwhelm_to,25",
            "off_when_benched": true,
            "targets": [
                "front_column"
            ],
            "use_computed_amount_for_description": true
        }
    ],
    "requirements": "",
    "graphic_id": 22270,
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
**Unknown** (Guess)
> Unlocks Dynaheir's Ultimate Attack. She alternates between casting Fireball and Lightning bolt.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1858,
    "flavour_text": "",
    "description": {
        "desc": "Unlocks Dynaheir's Ultimate Attack. She alternates between casting Fireball and Lightning bolt."
    },
    "effect_keys": [
        {
            "effect_string": "dynaheir_ultimate_handler",
            "lightning_stun_time": 5
        },
        {
            "effect_string": "set_ultimate_attack,728",
            "apply_manually": true
        },
        {
            "effect_string": "set_ultimate_attack,729",
            "apply_manually": true
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "properties": []
}
</pre>
</p>
</details>
</div></div>

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Iron Lords of Justice** (Guess)
> Champions that are adjacent to Dynaheir get +1 CON and the base effect of The Resolve of Rashemen is increased by 10%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1854,
    "flavour_text": "",
    "description": {
        "desc": "Champions that are adjacent to Dynaheir get +1 CON and the base effect of The Resolve of Rashemen is increased by $amount%."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,10,13874,0",
            "off_when_benched": true
        },
        {
            "effect_string": "increase_ability_score,con,1",
            "off_when_benched": true,
            "targets": [
                "adj"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 22272,
    "properties": {
        "is_formation_ability": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "indexed_effect_properties": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Circle of Magic** (Guess)
> Champions deal 1000% more damage against all Favored Foes.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1855,
    "flavour_text": "",
    "description": {
        "desc": "Champions deal $amount% more damage against all Favored Foes."
    },
    "effect_keys": [
        {
            "effect_string": "increase_monster_damage_if_favored_foe,1000",
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Loyal Bodyguard** (Guess)
> Minsc gains the Tanking role and is now eligible for this adventure regardless of other restrictions. Dynaheir increases Minsc's base health by 200%, and then further increases his health by 75% for every 50 areas completed in the current adventure, up to area 600. She also increases the health of all Champions, other than Minsc, by 25% of Minsc's max health.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1856,
    "flavour_text": "",
    "description": {
        "desc": "Minsc gains the Tanking role and is now eligible for this adventure regardless of other restrictions. Dynaheir increases Minsc's base health by $amount%, and then further increases his health by 75% for every 50 areas completed in the current adventure, up to area 600. She also increases the health of all Champions, other than Minsc, by 25% of Minsc's max health"
    },
    "effect_keys": [
        {
            "effect_string": "dynaheir_loyal_bodyguard,200",
            "off_when_benched": true,
            "minsc_effect": "effect_def,1857",
            "minsc_health_mult_amount_expr": "base_amount+75*floor(min(highest_completed_area,600)/50)"
        },
        {
            "effect_string": "force_allow_hero",
            "off_when_benched": true,
            "hero_ids": [
                7
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "retain_on_slot_changed": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "indexed_effect_properties": true,
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
</div></div>

# Items

<span class="itemTableColumn">
    <span class="itemTableRowHeader">
        <span class="itemTableIcon" style="align-items:center;">
            <span style="margin-left:8px;">**Icons**</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">**Name**</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Rashemen Delicacies Icon](images/dynaheir/22297.png)</span><span class="itemTableIcon2">![Rashemen Delicacies Icon](images/dynaheir/22297.png)</span><span class="itemTableIcon3">![Rashemen Delicacies Icon](images/dynaheir/22298.png)</span><span class="itemTableIcon4">![Rashemen Delicacies Icon](images/dynaheir/22299.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Rashemen Delicacies</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Red Wizard Trophy Icon](images/dynaheir/22300.png)</span><span class="itemTableIcon2">![Red Wizard Trophy Icon](images/dynaheir/22300.png)</span><span class="itemTableIcon3">![Red Wizard Trophy Icon](images/dynaheir/22301.png)</span><span class="itemTableIcon4">![Red Wizard Trophy Icon](images/dynaheir/22302.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Red Wizard Trophy</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Robe Icon](images/dynaheir/22303.png)</span><span class="itemTableIcon2">![Robe Icon](images/dynaheir/22303.png)</span><span class="itemTableIcon3">![Robe Icon](images/dynaheir/22304.png)</span><span class="itemTableIcon4">![Robe Icon](images/dynaheir/22305.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Robe</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Sling Icon](images/dynaheir/22306.png)</span><span class="itemTableIcon2">![Sling Icon](images/dynaheir/22306.png)</span><span class="itemTableIcon3">![Sling Icon](images/dynaheir/22307.png)</span><span class="itemTableIcon4">![Sling Icon](images/dynaheir/22308.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Sling</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Spell Components Icon](images/dynaheir/22309.png)</span><span class="itemTableIcon2">![Spell Components Icon](images/dynaheir/22309.png)</span><span class="itemTableIcon3">![Spell Components Icon](images/dynaheir/22310.png)</span><span class="itemTableIcon4">![Spell Components Icon](images/dynaheir/22311.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Spell Components</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Wychlaran Mask Icon](images/dynaheir/22312.png)</span><span class="itemTableIcon2">![Wychlaran Mask Icon](images/dynaheir/22312.png)</span><span class="itemTableIcon3">![Wychlaran Mask Icon](images/dynaheir/22313.png)</span><span class="itemTableIcon4">![Wychlaran Mask Icon](images/dynaheir/22314.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Wychlaran Mask</span>
        </span>
    </span>
</span>

# Feats

Unknown.

# Legendaries

Unknown.

# Other Champion Images

<span class="championImagesColumn">
    <span class="championImagesRow">
        <span class="championImagesPortrait">
            ![Dynaheir Console Portrait](images/dynaheir/console.png)Console Portait
        </span>
    </span>
    <span class="championImagesRow">
        <span class="championImagesChests">
            ![Dynaheir Gold Chest Icon](images/dynaheir/chest_gold.png)Gold Chest Icon
        </span>
        <span class="championImagesChests">
            ![Dynaheir Silver Chest Icon](images/dynaheir/chest_silver.png)Silver Chest Icon
        </span>
    </span>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*