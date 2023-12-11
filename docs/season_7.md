[Back to Main](index.md)

# Index

* [Season 7](#season-7)
* [Theme](#theme)
* [Changes](#changes)
* [Shaka](#shaka)
* [Selise](#selise)
* [D'hani](#d'hani)
* [Kent](#kent)
* [Virgil](#virgil)
* [Season Chest Icons](#season-chest-icons)
* [Miscellaneous Images](#miscellaneous-images)
<br />

![Season 7 Icon](images/season_7/icon.png)

# Season 7

![Season 7 Banner](images/season_7/banner.png)

Season 7 will be called `The Rivals` and is expected to start on 03 January 2024.

# Theme

![Shaka Season Portrait](images/season_7/shaka.png)![Selise Season Portrait](images/season_7/selise.png)![D'hani Season Portrait](images/season_7/dhani.png)![Kent Season Portrait](images/season_7/kent.png)![Virgil Season Portrait](images/season_7/virgil.png)

The five seasonal champions this time around will be Shaka Selise D'hani Kent and Virgil. We know this because the seasonal chest will be `Gold Rivals Chest` and it contains loot for those champions.

This means the theme this season is Rivals of Waterdeep champions.

# Changes

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Shaka

![Shaka Portrait](images/season_7/shaka.png)
<br /><span class="formationTooltip">[formation]
    <span class="formationTooltipContents">
        ![Formation Layout for Shaka](images/season_7/shaka_formation.png)
    </span>
</span>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ultimate: Blinding Wall of Light**
> All enemies are pushed back slightly and then a wall of light appears slightly in front of the formation for 15 seconds. Enemies that pass through the wall of light take damage, are stunned for 5 seconds, and gain a white glow which causes them to miss with 75% of all attacks for 30 seconds.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 710,
    "name": "Blinding Wall of Light",
    "description": "All enemies are pushed back and a wall of light appears in front of the formation for 15 seconds.",
    "long_description": "All enemies are pushed back slightly and then a wall of light appears slightly in front of the formation for 15 seconds. Enemies that pass through the wall of light take damage, are stunned for 5 seconds, and gain a white glow which causes them to miss with 75% of all attacks for 30 seconds.",
    "graphic_id": 10359,
    "target": "none",
    "num_targets": 0,
    "aoe_radius": 0,
    "damage_modifier": 0.03,
    "cooldown": 360,
    "animations": [
        {
            "type": "ranged_attack",
            "projectile": "wall",
            "projectile_count": 1,
            "shoot_frame": 10,
            "projectile_details": {
                "graphic_id": 10382,
                "graphic_scale": 1.8,
                "graphic_loop_start": 29,
                "graphic_loop_end": 34,
                "wall_time": 15,
                "damage_on_enter": true,
                "stun_time_on_enter": 5,
                "area_targets": [
                    "area_bottom",
                    "formation_front"
                ],
                "aoe_rect": {
                    "x": -10,
                    "y": -235,
                    "width": 20,
                    "height": 250
                },
                "activate_effect": {
                    "effect_string": "push_back_monster,10",
                    "targets": [
                        "monsters"
                    ]
                },
                "enter_effect": {
                    "effect_string": "attack_miss_chance,75",
                    "for_time": 30,
                    "overlay": {
                        "graphic_id": 10381
                    }
                }
            }
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
**Ultimate: Disintegrating Wall of Light**
> A wall of light appears near the right side of the screen. Enemies that pass through the wall of light take damage and, if they take at least 1% of their max health, have a 50% chance to be disintegrated and die immediately. Enemies not immediately destroyed gain a white glow under their feet and take 100% more damage for 30 seconds.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 722,
    "name": "Disintegrating Wall of Light",
    "description": "A wall of light appears near the right side of the screen which has a chance to destroy newly spawned enemies.",
    "long_description": "A wall of light appears near the right side of the screen. Enemies that pass through the wall of light take damage and, if they take at least 1% of their max health, have a 50% chance to be disintegrated and die immediately. Enemies not immediately destroyed gain a white glow under their feet and take 100% more damage for 30 seconds.",
    "graphic_id": 10360,
    "target": "none",
    "num_targets": 0,
    "aoe_radius": 0,
    "damage_modifier": 0.03,
    "cooldown": 360,
    "animations": [
        {
            "type": "ranged_attack",
            "projectile": "disintergrating_wall",
            "projectile_count": 1,
            "shoot_frame": 10,
            "projectile_details": {
                "graphic_id": 10383,
                "graphic_scale": 1.8,
                "graphic_loop_start": 29,
                "graphic_loop_end": 34,
                "wall_time": 15,
                "area_targets": [
                    "area_bottom",
                    "monster_spawn"
                ],
                "area_rect": {
                    "x": -10,
                    "y": -235,
                    "width": 20,
                    "height": 250
                },
                "disintergrate_damage_percent_threshold": 0.01,
                "disintergrate_chance": 0.5,
                "enter_effect": {
                    "effect_string": "increase_monster_damage,100",
                    "for_time": 30,
                    "overlay": {
                        "graphic_id": 10381
                    }
                }
            }
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
**Unknown** (Guess)
> Shaka attempts to solve a celestial puzzle with the potential for great rewards. Four random slots in the formation are assigned a random tag. For each Champion in those slots that match the slot's tag, Shaka increases the damage of all Champions by 400%, stacking multiplicatively. A fifth slot is chosen but remains locked with an unknown tag until a specialization is chosen.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability might be prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1784,
    "flavour_text": "",
    "description": {
        "desc": "Shaka attempts to solve a celestial puzzle with the potential for great rewards. Four random slots in the formation are assigned a random tag. For each Champion in those slots that match the slot's tag, Shaka increases the damage of all Champions by $(amount)%, stacking multiplicatively. A fifth slot is chosen but remains locked with an unknown tag until a specialization is chosen."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack_amount,400",
            "off_when_benched": true
        },
        {
            "effect_string": "shaka_celestial_puzzle",
            "off_when_benched": true,
            "use_locked_slot": true,
            "slot_effect": {
                "effect_string": "shaka_puzzle",
                "always_show_effect_graphic": true,
                "overlay": {
                    "manual_graphic": "shaka_puzzle",
                    "overlay_location": "slot",
                    "y": -20
                }
            },
            "locked_slot_effect": {
                "effect_string": "shaka_puzzle_locked",
                "always_show_effect_graphic": true,
                "overlay": {
                    "manual_graphic": "shaka_puzzle",
                    "overlay_location": "slot",
                    "y": -20
                }
            },
            "locked_slot_effect_no_overlay": {
                "effect_string": "shaka_puzzle_locked"
            },
            "match_slot_effect": {
                "effect_string": "shaka_puzzle_match",
                "overlay": {
                    "graphic_id": 10381
                }
            },
            "easy_expressions": [
                "male|!female",
                "female|!male"
            ],
            "medium_expressions": [
                "support",
                "dps",
                "gold",
                "speed",
                "healing"
            ],
            "hard_expressions": [
                "human",
                "kobold",
                "elf",
                "dwarf",
                "tiefling",
                "gnome",
                "half-elf",
                "halfling",
                "dragonborn",
                "aasimar",
                "aarakocra"
            ],
            "easy_slots": 2,
            "medium_slots": 1,
            "hard_slots": 1,
            "additional_easy_slots": 0,
            "random_seed_add": 0
        },
        {
            "effect_string": "hero_dps_multiplier_mult,0",
            "amount_expr": "upgrade_amount(13416,0)",
            "off_when_benched": true,
            "targets": [
                "active_campaign"
            ],
            "show_bonus": true,
            "amount_func": "mult",
            "stack_func": "per_slot",
            "has_effect_key": "shaka_puzzle_match",
            "amount_updated_listeners": [
                "slot_changed"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 10368,
    "properties": {
        "is_formation_ability": true,
        "use_outgoing_description": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 2,
        "indexed_effect_properties": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Celestial Resistance** (Guess)
> Shaka adds $(amount___3) temporary health to the entire party when changing areas, and refreshes them every 10 seconds. The amount of hit points is increased by 25% for each A Celestial Puzzle slot that is filled properly, stacking additively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1785,
    "flavour_text": "",
    "description": {
        "desc": "Shaka adds $(amount___3) temporary health to the entire party when changing areas, and refreshes them every 10 seconds. The amount of hit points is increased by $(not_buffed amount___2)% for each A Celestial Puzzle slot that is filled properly, stacking additively.",
        "post": {
            "conditions": [
                {
                    "condition": "not static_desc",
                    "desc": "^^Total Temporary Health: $(amount)"
                }
            ]
        }
    },
    "effect_keys": [
        {
            "effect_string": "grant_all_instant_temporary_hp,20",
            "off_when_benched": true,
            "targets": [
                "all"
            ],
            "on_trigger": "on_broadcast_trigger,celestial_resistance_trigger"
        },
        {
            "effect_string": "buff_upgrade,25,13417,0",
            "off_when_benched": true,
            "amount_func": "add",
            "stack_func": "per_slot",
            "has_effect_key": "shaka_puzzle_match",
            "amount_updated_listeners": [
                "slot_changed"
            ],
            "show_bonus": true
        },
        {
            "comment": "This effect key is just so we have a base amount for the description. Things that buff celestial resistance should also buff this key.",
            "effect_string": "do_nothing,20",
            "off_when_benched": true
        },
        {
            "effect_string": "broadcast_on_trigger,celestial_resistance_trigger,area_changed",
            "off_when_benched": true
        },
        {
            "effect_string": "broadcast_on_trigger,celestial_resistance_trigger",
            "off_when_benched": true,
            "trigger_name": "on_timer",
            "trigger_params": [
                "10"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 10355,
    "properties": {
        "is_formation_ability": true,
        "use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Feast or Famine** (Guess)
> Shaka increases the base effect of A Celestial Puzzle by 50% for each properly filled puzzle slot he's adjacent to, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1786,
    "flavour_text": "",
    "description": {
        "desc": "Shaka increases the base effect of A Celestial Puzzle by $(not_buffed amount)% for each properly filled puzzle slot he's adjacent to, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,50,13416,0",
            "off_when_benched": true,
            "show_bonus": true,
            "stacks_multiply": true,
            "amount_func": "mult",
            "stack_func": "per_slot",
            "target": "adj",
            "has_effect_key": "shaka_puzzle_match",
            "amount_updated_listeners": [
                "slot_changed",
                "upgrade_unlocked"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 10356,
    "properties": {
        "is_formation_ability": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Riddling Rivals** (Guess)
> The base effect of A Celestial Puzzle is increased by 100% for each other Rivals of Waterdeep Champion in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1787,
    "flavour_text": "",
    "description": {
        "desc": "The base effect of A Celestial Puzzle is increased by $(not_buffed amount)% for each other Rivals of Waterdeep Champion in the formation, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,100,13416,0",
            "off_when_benched": true,
            "stacks_multiply": true,
            "amount_func": "mult",
            "stack_func": "per_hero",
            "exclude_self": true,
            "tag": "rivalswaterdeep",
            "show_bonus": true,
            "amount_updated_listeners": [
                "slot_changed"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Child's Play** (Guess)
> The locked Celestial Puzzle slot in the formation is assigned the `$(shaka_locked_tag easy)` tag and can be matched to further buff the party.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1788,
    "flavour_text": "",
    "description": {
        "desc": "The locked Celestial Puzzle slot in the formation is assigned the $(shaka_locked_tag easy) tag and can be matched to further buff the party."
    },
    "effect_keys": [
        {
            "effect_string": "shaka_slot_unlocked_easy",
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Pen and Paper** (Guess)
> The locked Celestial Puzzle slot in the formation is assigned the `$(shaka_locked_tag medium)` tag and can be matched to further buff the party. The base effect of A Celestial Puzzle is increased by $amount%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1789,
    "flavour_text": "",
    "description": {
        "desc": "The locked Celestial Puzzle slot in the formation is assigned the $(shaka_locked_tag medium) tag and can be matched to further buff the party. The base effect of A Celestial Puzzle is increased by $amount%."
    },
    "effect_keys": [
        {
            "effect_string": "shaka_slot_unlocked_medium",
            "off_when_benched": true
        },
        {
            "effect_string": "buff_upgrade,50,13416,0",
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Sunday Edition** (Guess)
> The locked Celestial Puzzle slot in the formation is assigned the `$(shaka_locked_tag hard)` tag and can be matched to further buff the party. The base effect of A Celestial Puzzle is increased by $amount%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1790,
    "flavour_text": "",
    "description": {
        "desc": "The locked Celestial Puzzle slot in the formation is assigned the $(shaka_locked_tag hard) tag and can be matched to further buff the party. The base effect of A Celestial Puzzle is increased by $amount%."
    },
    "effect_keys": [
        {
            "effect_string": "shaka_slot_unlocked_hard",
            "off_when_benched": true
        },
        {
            "effect_string": "buff_upgrade,100,13416,0",
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> Increases the base effect of A Celestial Puzzle by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1807,
    "flavour_text": "",
    "description": {
        "desc": "Increases the base effect of A Celestial Puzzle by $amount%"
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,100,13416,0"
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

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Brain Break** (Guess)
> The locked Celestial Puzzle slot remains locked, and instead Celestial Resistance is increased by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1791,
    "flavour_text": "",
    "description": {
        "desc": "The locked Celestial Puzzle slot remains locked, and instead Celestial Resistance is increased by $amount%."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,100,13417",
            "off_when_benched": true
        },
        {
            "effect_string": "buff_upgrade,100,13417,2",
            "off_when_benched": true
        },
        {
            "effect_string": "shaka_hide_locked_puzzle_slot",
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Unknown** (Guess)
> Increases the effect of Celestial Resistance by 70%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1799,
    "flavour_text": "",
    "description": {
        "desc": "Increases the effect of Celestial Resistance by $amount%"
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,70,13417"
        },
        {
            "effect_string": "buff_upgrade,70,13417,2"
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

# Selise

![Selise Portrait](images/season_7/selise.png)
<br /><span class="formationTooltip">[formation]
    <span class="formationTooltipContents">
        ![Formation Layout for Selise](images/season_7/selise_formation.png)
    </span>
</span>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Sword and Board - Wall**
> Selise attacks the nearest enemy and damages all enemies in a small area.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 718,
    "name": "Sword and Board - Wall",
    "description": "Selise attacks the nearest enemy and damages all enemies in a small area.",
    "long_description": "Selise attacks the nearest enemy and damages all enemies in a small area.",
    "graphic_id": 0,
    "target": "front",
    "num_targets": 1,
    "aoe_radius": 100,
    "damage_modifier": 1,
    "cooldown": 6,
    "animations": [
        {
            "type": "melee_attack",
            "animation_sequence_name": "attack_c",
            "target_offset_x": -50,
            "damage_frame": 53,
            "sound_frames": {
                "53": 158
            },
            "effect_frames": {
                "1": {
                    "effect_string": "ground_effect_area,0",
                    "area_key": "selise_stop_monster",
                    "drop_on_hero": true,
                    "target_offset_x": 100,
                    "radius": 50,
                    "duration": 2,
                    "area_effects": [
                        {
                            "effect_string": "monster_speed_reduce,100"
                        }
                    ]
                }
            }
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
**Base Attack: Sword and Board - Last Resort**
> Selise attacks the nearest enemy, damaging and knocking back enemies in a small area.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 720,
    "name": "Sword and Board - Last Resort",
    "description": "Selise attacks the nearest enemy, damaging and knocking back enemies in a small area.",
    "long_description": "Selise attacks the nearest enemy, damaging and knocking back enemies in a small area.",
    "graphic_id": 0,
    "target": "front",
    "num_targets": 1,
    "aoe_radius": 100,
    "damage_modifier": 1,
    "cooldown": 6,
    "animations": [
        {
            "type": "melee_attack",
            "animation_sequence_name": "attack_d",
            "target_offset_x": -50,
            "damage_frame": 14,
            "effects_on_monsters": [
                {
                    "effect_string": "push_back_monster,5",
                    "animation": "hit",
                    "after_damage": true
                }
            ],
            "sound_frames": {
                "14": 158
            }
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
**Divine Sense** (Guess)
> Selise increases the damage of Champions in the two columns behind her by 100%. Bonus effects are provided based on Selise's current stance, which can be changed by using her Ultimate Attack.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1819,
    "flavour_text": "",
    "description": {
        "desc": {
            "conditions": [
                {
                    "condition": "upgrade_purchased 13752",
                    "desc": "Selise increases the damage of Champions in the three columns behind her by $amount%. Bonus effects are provided based on Selise's current stance, which can be changed by using her Ultimate Attack."
                },
                {
                    "desc": "Selise increases the damage of Champions in the two columns behind her by $amount%. Bonus effects are provided based on Selise's current stance, which can be changed by using her Ultimate Attack."
                }
            ]
        },
        "post": {
            "conditions": [
                {
                    "condition": "not static_desc",
                    "desc": "^^Aggressive: Champions affected by Divine Sense have their base attack cooldowns reduced by $(amount___4)s.^^Wall: Increases the effects of Divine Sense by $(amount___5)% when Selise has been attacked in the last $(seconds_since_attacked___5) seconds. Additionally, Champions in the same column as Selise take $(amount___6)% less damage from melee and ranged attacks.^^Last Resort: Increases the base effect of Vow of Vengeance by $(amount___8)%. This buff is additively reduced by $(reduce_amount___8)% every $(update_time___8) seconds Selise is in Last Resort stance, and additively increased by $(increase_amount___8)% every $(update_time___8) seconds Selise is not in Last Resort stance. (Current buff amount: $selise_last_resort_buff_amount%)^^Current stance: $(selise_stance)"
                }
            ]
        }
    },
    "effect_keys": [
        {
            "effect_string": "hero_dps_multiplier_mult,100",
            "targets": [
                "prev_two_col"
            ]
        },
        {
            "effect_string": "selise_divine_sense",
            "aggressive_ek_indices": [
                3,
                8
            ],
            "wall_ek_indices": [
                4,
                5,
                6,
                9
            ],
            "last_resort_ek_indices": [
                10
            ]
        },
        {
            "effect_string": "set_ultimate_attack,403"
        },
        {
            "apply_manually": true,
            "effect_string": "reduce_attack_cooldown,1",
            "targets": [
                "prev_two_col"
            ]
        },
        {
            "apply_manually": true,
            "effect_string": "selise_wall_stance,400",
            "buff_effect_string": "buff_upgrade,400,13743",
            "seconds_since_attacked": 10
        },
        {
            "apply_manually": true,
            "effect_string": "damage_reduction_melee,25",
            "targets": [
                "col"
            ],
            "override_key_desc": "$target takes $amount% less damage from Melee Attacks and Ranged Attacks"
        },
        {
            "apply_manually": true,
            "effect_string": "damage_reduction_ranged,25",
            "targets": [
                "col"
            ],
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "selise_last_resort,150",
            "buff_effect_string": "buff_upgrade,0,13745,0",
            "min_amount": 0,
            "max_amount": 150,
            "reduce_amount": 10,
            "increase_amount": 5,
            "update_time": 5
        },
        {
            "apply_manually": true,
            "effect_string": "change_base_attack,398"
        },
        {
            "apply_manually": true,
            "effect_string": "change_base_attack,718"
        },
        {
            "apply_manually": true,
            "effect_string": "change_base_attack,720"
        }
    ],
    "requirements": "",
    "graphic_id": 10670,
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
**Unknown** (Guess)
> Divine Sense is increased by 100% for each Rivals of Waterdeep affiliated Champion in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1820,
    "flavour_text": "",
    "description": {
        "desc": "Divine Sense is increased by $(not_buffed amount)% for each Rivals of Waterdeep affiliated Champion in the formation, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade_per_any_tagged_crusader_mult,100,13743,rivalswaterdeep",
            "stacks_multiply": true,
            "show_bonus": true,
            "amount_updated_listeners": [
                "hero_tags_changed"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 0,
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
> Increases the range of Divine Sense to affect the three columns behind Selise rather than just two.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1821,
    "flavour_text": "",
    "description": {
        "desc": "Increases the range of Divine Sense to affect the three columns behind Selise rather than just two."
    },
    "effect_keys": [
        {
            "effect_string": "change_upgrade_data,13743,0",
            "data": {
                "targets": [
                    "prev_three_col"
                ]
            }
        },
        {
            "effect_string": "change_upgrade_data,13743,2",
            "data": {
                "targets": [
                    "prev_three_col"
                ]
            }
        },
        {
            "effect_string": "change_upgrade_data,13743,4",
            "data": {
                "targets": [
                    "prev_three_col"
                ]
            }
        }
    ],
    "requirements": "",
    "graphic_id": 10677,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "type": "upgrade"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> While in Aggressive stance, Selise will toss her shield in an arc targeted at the farthest enemy every 4th attack. It deals damage and stuns all enemies hit for 2 seconds. If the enemy is armor/hits-based it takes double hits from all attacks until Selise attacks with Shield of Psychomancy again or changes stances.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1822,
    "flavour_text": "",
    "description": {
        "desc": "While in Aggressive stance, Selise will toss her shield in an arc targeted at the farthest enemy every 4th attack. It deals damage and stuns all enemies hit for 2 seconds. If the enemy is armor/hits-based it takes double hits from all attacks until Selise attacks with Shield of Psychomancy again or changes stances."
    },
    "effect_keys": [
        {
            "effect_string": "selise_shield_of_psychomancy_v2",
            "debuff_effect_string": "unique_hit_multiplier,100"
        },
        {
            "apply_manually": true,
            "effect_string": "change_base_attack_every,100,402,4"
        }
    ],
    "requirements": "",
    "graphic_id": 10671,
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
> While not in Aggressive stance, Selise increases the effect of Divine Sense by 10% each time an enemy attacks her, stacking multiplicatively up to 100 times and resetting when changing areas. Stacks do not reset when changing stances.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability might be prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1824,
    "flavour_text": "",
    "description": {
        "desc": "While not in Aggressive stance, Selise increases the effect of Divine Sense by $amount% each time an enemy attacks her, stacking multiplicatively up to $(max_stacks___3) times and resetting when changing areas. Stacks do not reset when changing stances.",
        "post": {
            "conditions": [
                {
                    "condition": "not static_desc",
                    "desc": "^^$(selise_vow_of_vengeance_active)"
                }
            ]
        }
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack_amount,10"
        },
        {
            "effect_string": "selise_vow_of_vengeance"
        },
        {
            "apply_manually": true,
            "effect_string": "buff_upgrade,0,13743",
            "amount_expr": "upgrade_amount(13745,0)",
            "stacks_multiply": true,
            "stack_func": "mult",
            "show_bonus": true,
            "max_stacks": 100,
            "stacks_on_trigger": "hero_attacked"
        }
    ],
    "requirements": "",
    "graphic_id": 10673,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 2
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> When switching from Last Resort to Aggressive stance, Selise channels the divine power of Tyr and attacks a random enemy with her sword, dealing BUD-based AoE damage and BUD-based chaining lightning damage from the enemy struck to five nearby enemies. This effect can only trigger every 180 seconds.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1826,
    "flavour_text": "",
    "description": {
        "desc": "When switching from Last Resort to Aggressive stance, Selise channels the divine power of Tyr and attacks a random enemy with her sword, dealing BUD-based AoE damage and BUD-based chaining lightning damage from the enemy struck to five nearby enemies. This effect can only trigger every $amount seconds.",
        "post": {
            "conditions": [
                {
                    "condition": "not static_desc",
                    "desc": "^^$(selise_thunderous_smite_cooldown_remaining)"
                }
            ]
        }
    },
    "effect_keys": [
        {
            "effect_string": "selise_thunderous_smite,180"
        }
    ],
    "requirements": "",
    "graphic_id": 10672,
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
> While in Aggressive stance armored or hits-based enemies affected by Shield of Psychomancy now take triple hits from all attacks.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1827,
    "flavour_text": "",
    "description": {
        "desc": "While in Aggressive stance armored or hits-based enemies affected by Shield of Psychomancy now take triple hits from all attacks."
    },
    "effect_keys": [
        {
            "effect_string": "change_upgrade_data,13744,0",
            "data": {
                "debuff_effect_string": "unique_hit_multiplier,200"
            }
        }
    ],
    "requirements": "",
    "graphic_id": 10676,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "indexed_effect_properties": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> Increases the Health of all other Champions by 25% of Selise's Max Health. This is increased by 5% for each other Rivals of Waterdeep Champion in the formation applied additively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1828,
    "flavour_text": "",
    "description": {
        "desc": "Increases the Health of all other Champions by $(not_buffed amount)% of $source's Max Health. This is increased by 5% for each other Rivals of Waterdeep Champion in the formation applied additively."
    },
    "effect_keys": [
        {
            "effect_string": "increase_health_by_source_percent,25",
            "targets": [
                "other"
            ],
            "off_when_benched": true
        },
        {
            "effect_string": "buff_upgrade_per_any_tagged_crusader,20,13747,rivalswaterdeep",
            "show_bonus": false,
            "exclude_self": true,
            "amount_updated_listeners": [
                "hero_tags_changed"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 10671,
    "properties": {
        "is_buff_incoming_formation_abilities_target": false,
        "is_formation_ability": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> While in Wall stance, Selise can deflect projectiles back at the enemies that shot/cast them, dealing 6 seconds of BUD-based damage.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1829,
    "flavour_text": "",
    "description": {
        "desc": "While in Wall stance, Selise can deflect projectiles back at the enemies that shot/cast them, dealing $(seconds_worth_of_bud) seconds of BUD-based damage.",
        "post": {
            "conditions": [
                {
                    "condition": "not static_desc",
                    "desc": "^She can deflect one attack for each deflection stack she has, and gains deflection stacks by attacking while in Wall stance.^^$(selise_reflective_shield_active)"
                }
            ]
        }
    },
    "effect_keys": [
        {
            "apply_manually": true,
            "effect_string": "return_bud_damage_when_hit,6",
            "targets": [
                "self_slot"
            ],
            "projectile": "return_projectile",
            "take_no_damage": true,
            "filter_damage_types": [
                "ranged",
                "magic"
            ]
        },
        {
            "effect_string": "selise_reflective_shield,0",
            "max_stacks": 10,
            "manual_stacking": true,
            "stacks_multiply": false,
            "show_stacks": true,
            "stack_title": "Deflect Stacks"
        }
    ],
    "requirements": "",
    "graphic_id": 10675,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0
    }
}
</pre>
</p>
</details>
</div></div>

# D'hani

![D'hani Portrait](images/season_7/dhani.png)
<br /><span class="formationTooltip">[formation]
    <span class="formationTooltipContents">
        ![Formation Layout for D'hani](images/season_7/dhani_formation.png)
    </span>
</span>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Fists of Fury**
> D'hani attacks the nearest enemy and one other random enemy.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 712,
    "name": "Fists of Fury",
    "description": "D'hani attacks the nearest enemy and one other random enemy.",
    "long_description": "D'hani attacks the nearest enemy and one other random enemy.",
    "graphic_id": 0,
    "target": "front",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 4.5,
    "animations": [
        {
            "type": "melee_attack",
            "special_melee": "dhani",
            "target_offset": [
                -140,
                0
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
**Ultimate: Flurry of Brushes**
> The weather clears and D'hani pulls a quiver of sharpened paint brushes from her robes and flings them out at five random enemies. They deal damage and apply D'hani's paints to all enemies they hit.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 711,
    "name": "Flurry of Brushes",
    "description": "The weather clears and D'hani flings sharpened paint brushes at five random enemies, dealing damage and applying paint.",
    "long_description": "The weather clears and D'hani pulls a quiver of sharpened paint brushes from her robes and flings them out at five random enemies. They deal damage and apply D'hani's paints to all enemies they hit.",
    "graphic_id": 11656,
    "target": "random",
    "num_targets": 5,
    "aoe_radius": 0,
    "damage_modifier": 0.03,
    "cooldown": 160,
    "animations": [
        {
            "type": "ranged_attack",
            "projectile": "generic",
            "line_damage_distance": 50,
            "line_damage_stop_at_target": true,
            "shoot_frame": 16,
            "shoot_offset_x": 50,
            "shoot_offset_y": -10,
            "projectile_details": {
                "projectile_speed": 3200,
                "has_trail": true,
                "extend_line": false,
                "projectile_graphic_id": 11632
            },
            "effect_frames": {
                "projectile": {
                    "effect_string": "change_weather",
                    "weather": "none"
                }
            }
        }
    ],
    "tags": [
        "ranged",
        "ultimate"
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
**Paint Them Red** (Guess)
> When D'hani attacks she paints the enemy red. An enemy can be painted up to three times. D'hani's damage is increased by 33% for each stroke of paint she has applied to a normal enemy in the current area, and 1000% for each stroke of paint she has applied to a boss enemy in the current area, stacking multiplicatively. Normal enemy strokes cap at 100, and boss area strokes cap at 6.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1800,
    "flavour_text": "",
    "description": {
        "desc": "When $(source_hero) attacks she paints the enemy red. An enemy can be painted up to three times. $(source_hero)'s damage is increased by 33% for each stroke of paint she has applied to a normal enemy in the current area, and 1000% for each stroke of paint she has applied to a boss enemy in the current area, stacking multiplicatively. Normal enemy strokes cap at 100, and boss area strokes cap at 6."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "hero_dps_multiplier_mult,33",
            "manual_stacking": true,
            "stacks_multiply": true,
            "show_bonus": true
        },
        {
            "off_when_benched": true,
            "effect_string": "hero_dps_multiplier_mult,1000",
            "manual_stacking": true,
            "stacks_multiply": true,
            "show_bonus": true
        },
        {
            "off_when_benched": true,
            "effect_string": "dhani_paint_them_red_v2,0",
            "paint_effects": [],
            "stacks_per_area": true,
            "monster_stack_index": 0,
            "boss_stack_index": 1,
            "monster_stack_max": 100,
            "boss_stack_max": 6
        }
    ],
    "requirements": "",
    "graphic_id": 11651,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "retain_on_slot_changed": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Friendly Rivalry** (Guess)
> D'hani's damage is increased by 200% for each Rival of Waterdeep in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1801,
    "flavour_text": "",
    "description": {
        "desc": "$(source_hero)'s damage is increased by $(not_buffed amount)% for each Rival of Waterdeep in the formation, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "hero_dps_mult_per_tagged_crusader_mult_amount_before,200,rivalswaterdeep",
            "stacks_multiply": true
        }
    ],
    "requirements": "",
    "graphic_id": 11650,
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
**Way of the Brush** (Guess)
> D'hani keeps track of the total number of enemies she has painted across all time. This tracking persists between resets. D'hani's damage is increased by 0.01% for each enemy she has ever painted, stacking additively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1802,
    "flavour_text": "",
    "description": {
        "desc": "$(source_hero) keeps track of the total number of enemies she has painted across all time. This tracking persists between resets. $(source_hero)'s damage is increased by 0.01% for each enemy she has ever painted, stacking additively.",
        "post": {
            "conditions": [
                {
                    "condition": "not static_desc",
                    "desc": "^^Total Monsters Painted: $(dhani_num_lifetime_painted_enemies_v2)^Total Bonus: $(dhani_current_damage_bonus_v2)%"
                }
            ]
        }
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "dhani_way_of_the_brush_v2,100,0.01",
            "buff_per_monster": 0.01,
            "index": 1,
            "buff_with_layers": false
        },
        {
            "off_when_benched": true,
            "effect_string": "hero_dps_multiplier_mult,0"
        }
    ],
    "requirements": "",
    "graphic_id": 11652,
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
> Increase the gold find effect of Splash of Yellow by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1843,
    "flavour_text": "",
    "description": {
        "desc": "Increase the gold find effect of Splash of Yellow by $(amount)%."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,100,13713,1"
        }
    ],
    "requirements": "",
    "graphic_id": 11654,
    "properties": {
        "is_formation_ability": true,
        "type": "upgrade"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> Increase the damage done by Stroke of Green by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1844,
    "flavour_text": "",
    "description": {
        "desc": "Increase the damage done by Stroke of Green by $(amount)%"
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,100,13714,1"
        }
    ],
    "requirements": "",
    "graphic_id": 11655,
    "properties": {
        "is_formation_ability": true,
        "type": "upgrade"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> Increase the bonus damage done to bosses by Blotch of Blue by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1845,
    "flavour_text": "",
    "description": {
        "desc": "Increase the bonus damage done to bosses by Blotch of Blue by $(amount)%."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,100,13715,2"
        }
    ],
    "requirements": "",
    "graphic_id": 11653,
    "properties": {
        "is_formation_ability": true,
        "type": "upgrade"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Splash of Yellow** (Guess)
> Enemies D'hani paints have a 33% chance to gain a splash of yellow. Enemies painted in this way drop `$(dhani_gold_bonus)`% more gold when they are killed.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1803,
    "flavour_text": "",
    "description": {
        "desc": "Enemies $(source_hero) paints have a $(amount)% chance to gain a splash of yellow. Enemies painted in this way drop $(dhani_gold_bonus)% more gold when they are killed."
    },
    "effect_keys": [
        {
            "effect_string": "paint_odds,33"
        },
        {
            "off_when_benched": true,
            "effect_string": "dhani_splash_of_yellow,100",
            "colour": "Yellow",
            "paint_effects": [
                {
                    "effect_string": "increase_monster_gold,200"
                },
                {
                    "effect_string": "dhani_yellow_paint"
                }
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 11654,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Stroke of Green** (Guess)
> Enemies D'hani paints have a 33% chance to gain a stroke of green. Enemies painted in this way cause D'hani's attacks against them to damage nearby enemies as well at `$(dhani_aoe_damage)`% damage. This effect does not chain, but does apply paint to the enemies it damages.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1804,
    "flavour_text": "",
    "description": {
        "desc": "Enemies $(source_hero) paints have a $(amount)% chance to gain a stroke of green. Enemies painted in this way cause $(source_hero)'s attacks against them to damage nearby enemies as well at $(dhani_aoe_damage)% damage. This effect does not chain, but does apply paint to the enemies it damages."
    },
    "effect_keys": [
        {
            "effect_string": "paint_odds,33"
        },
        {
            "off_when_benched": true,
            "effect_string": "dhani_stroke_of_green,100",
            "colour": "Green",
            "paint_effects": [
                {
                    "effect_string": "dhani_green_paint"
                }
            ],
            "aoe_damage_percent": 100
        }
    ],
    "requirements": "",
    "graphic_id": 11655,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Blotch of Blue** (Guess)
> Enemies D'hani paints have a 33% chance to gain a blotch of blue. Enemies painted in this way are stunned for `$(dhani_stun_duration)` seconds when D'hani attacks them and boss enemies painted in this way take `$(dhani_boss_damage_bonus)`% more damage from all attacks.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1805,
    "flavour_text": "",
    "description": {
        "desc": "Enemies $(source_hero) paints have a $(amount)% chance to gain a blotch of blue. Enemies painted in this way are stunned for $(dhani_stun_duration) seconds when $(source_hero) attacks them and boss enemies painted in this way take $(dhani_boss_damage_bonus)% more damage from all attacks."
    },
    "effect_keys": [
        {
            "effect_string": "paint_odds,33"
        },
        {
            "effect_string": "stun_mult,100"
        },
        {
            "off_when_benched": true,
            "effect_string": "dhani_blotch_of_blue,100",
            "colour": "Blue",
            "paint_effects": [
                {
                    "effect_string": "increase_monster_damage,800",
                    "apply_to_bosses_only": true
                },
                {
                    "effect_string": "dhani_blue_paint"
                }
            ],
            "stun_time": 2
        }
    ],
    "requirements": "",
    "graphic_id": 11653,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
</div></div>

# Kent

![Kent Portrait](images/season_7/kent.png)
<br /><span class="formationTooltip">[formation]
    <span class="formationTooltipContents">
        ![Formation Layout for Kent](images/season_7/kent_formation.png)
    </span>
</span>

No changes as of yet.

# Virgil

![Virgil Portrait](images/season_7/virgil.png)
<br /><span class="formationTooltip">[formation]
    <span class="formationTooltipContents">
        ![Formation Layout for Virgil](images/season_7/virgil_formation.png)
    </span>
</span>

No changes as of yet.

# Season Chest Icons

| Shop | Inventory |
|---|---|
| ![Shop Season Chest Icon](images/season_7/chest.png) | ![Inventory Season Chest Icon](images/season_7/chestInv.png) |

# Miscellaneous Images

## Currency Icon

![Season 7 Currency](images/season_7/currency.png)

## Click Skin Icon: Rivals Attack

![Rivals Attack Click Skin Icon](images/season_7/click.png)

[Back to Top](#top)

*Last Modified: {{ site.time }}*