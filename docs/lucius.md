[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Lucius](images/lucius/portrait.png)
        </span>
        <span>
            Portrait
        </span>
    </span>
</span>

# Lucius

Lucius Virion-Elluin Elenasto was born to high nobility. He thought he knew what he was getting into when he joined the Heroes of Aerois, but then he met his first cow. Dreadful, evil creatures. Lucius is slowly coming out of his nobility shell as he continues to learn the true value of comradery, friendship, and a world without barriers.

# Changes

Lucius will be a reworked champion in the Festival of Fools event and delayed until 8 April 2026.

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Attacks

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Ray of Frost** (Guess)
> Lucius attacks the furthest enemy with Ray of Frost, dealing damage to them and all enemies along the line.  
> Cooldown: 4.5s (Cap 1.125s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 954,
    "name": "Ray of Frost",
    "description": "Lucius attacks the furthest enemy with Ray of Frost, dealing damage to them and all enemies along the line.",
    "long_description": "",
    "graphic_id": 0,
    "target": "back",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 4.5,
    "animations": [
        {
            "type": "ranged_attack",
            "projectile": "generic_ray",
            "shoot_frame": 8,
            "hold_shoot_frame": true,
            "sound_frames": {
                "1": 169
            },
            "hit_sound": 133,
            "shoot_offset_x": 30,
            "shoot_offset_y": -47,
            "line_damage_distance": 60,
            "update_base_attack_after": 955,
            "projectile_details": {
                "damage_loops": 5,
                "projectile_hit_graphic_id": 9311,
                "projectile_ray_graphic_ids": [
                    9308
                ],
                "speed": 4400,
                "stop_at_target": false,
                "impact_offset_y": -50,
                "trail": {
                    "particle_graphic_ids": [
                        406,
                        407
                    ],
                    "spawn_rate": 100,
                    "lifespan": 3,
                    "tint": {
                        "r": 0.6,
                        "g": 0.8,
                        "b": 0.95,
                        "a": 1
                    },
                    "initial_velocity": {
                        "x": 10,
                        "y": 30
                    },
                    "velocity_jitter": {
                        "x": 5,
                        "y": 20
                    },
                    "scale_lerp": {
                        "0.0": {
                            "x": 0,
                            "y": 0
                        },
                        "0.1": {
                            "x": 0.75,
                            "y": 0.75
                        },
                        "1.0": {
                            "x": 0,
                            "y": 0
                        }
                    },
                    "alpha_lerp": {
                        "0.0": 0,
                        "0.1": 0.75,
                        "1.0": 0
                    }
                }
            },
            "animation_sequence_name": "attack_b"
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
**Base Attack: Ray of Frost** (Guess)
> Lucius attacks the furthest enemy with Ray of Frost, dealing damage to them and all enemies along the line.  
> Cooldown: 4.5s (Cap 1.125s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 955,
    "name": "Ray of Frost",
    "description": "Lucius attacks the furthest enemy with Ray of Frost, dealing damage to them and all enemies along the line.",
    "long_description": "",
    "graphic_id": 0,
    "target": "back",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 4.5,
    "animations": [
        {
            "type": "ranged_attack",
            "projectile": "generic_ray",
            "shoot_frame": 8,
            "hold_shoot_frame": true,
            "sound_frames": {
                "1": 169
            },
            "hit_sound": 133,
            "shoot_offset_x": 30,
            "shoot_offset_y": -47,
            "line_damage_distance": 60,
            "update_base_attack_after": 956,
            "projectile_details": {
                "damage_loops": 5,
                "projectile_hit_graphic_id": 9311,
                "projectile_ray_graphic_ids": [
                    9308
                ],
                "speed": 4400,
                "stop_at_target": false,
                "impact_offset_y": -50,
                "trail": {
                    "particle_graphic_ids": [
                        406,
                        407
                    ],
                    "spawn_rate": 100,
                    "lifespan": 3,
                    "tint": {
                        "r": 0.6,
                        "g": 0.8,
                        "b": 0.95,
                        "a": 1
                    },
                    "initial_velocity": {
                        "x": 10,
                        "y": 30
                    },
                    "velocity_jitter": {
                        "x": 5,
                        "y": 20
                    },
                    "scale_lerp": {
                        "0.0": {
                            "x": 0,
                            "y": 0
                        },
                        "0.1": {
                            "x": 0.75,
                            "y": 0.75
                        },
                        "1.0": {
                            "x": 0,
                            "y": 0
                        }
                    },
                    "alpha_lerp": {
                        "0.0": 0,
                        "0.1": 0.75,
                        "1.0": 0
                    }
                }
            },
            "animation_sequence_name": "attack_b"
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
**Base Attack: Acid Splash** (Guess)
> Lucius attacks a random enemy with Acid Splash, dealing damage. Prefers enemies not affected by acid.  
> Cooldown: 4.5s (Cap 1.125s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 956,
    "name": "Acid Splash",
    "description": "Lucius attacks a random enemy with Acid Splash, dealing damage. Prefers enemies not affected by acid.",
    "long_description": "",
    "graphic_id": 0,
    "target": "random_no_acid",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 4.5,
    "animations": [
        {
            "type": "ranged_attack",
            "projectile": "generic",
            "shoot_frame": 9,
            "sound_frames": {
                "1": 169
            },
            "hit_sound": 133,
            "shoot_offset_x": 95,
            "shoot_offset_y": -40,
            "update_base_attack_after": 954,
            "projectile_details": {
                "projectile_graphic_id": 9304,
                "projectile_hit_graphic_id": 9310,
                "impact_offset_y": -50,
                "target_offset_x": -120
            },
            "animation_sequence_name": "attack"
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
**Base Attack: Acid Splash** (Guess)
> Lucius attacks a random enemy with Acid Splash, dealing damage. Prefers enemies not affected by acid.  
> Cooldown: 4.5s (Cap 1.125s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 957,
    "name": "Acid Splash",
    "description": "Lucius attacks a random enemy with Acid Splash, dealing damage. Prefers enemies not affected by acid.",
    "long_description": "",
    "graphic_id": 0,
    "target": "random_no_acid",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 4.5,
    "animations": [
        {
            "type": "ranged_attack",
            "projectile": "generic",
            "shoot_frame": 9,
            "sound_frames": {
                "1": 169
            },
            "hit_sound": 133,
            "shoot_offset_x": 95,
            "shoot_offset_y": -40,
            "update_base_attack_after": 958,
            "projectile_details": {
                "projectile_graphic_id": 9304,
                "projectile_hit_graphic_id": 9310,
                "impact_offset_y": -50,
                "target_offset_x": -120
            },
            "animation_sequence_name": "attack"
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
**Base Attack: Acid Splash** (Guess)
> Lucius attacks a random enemy with Acid Splash, dealing damage. Prefers enemies not affected by acid.  
> Cooldown: 4.5s (Cap 1.125s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 958,
    "name": "Acid Splash",
    "description": "Lucius attacks a random enemy with Acid Splash, dealing damage. Prefers enemies not affected by acid.",
    "long_description": "",
    "graphic_id": 0,
    "target": "random_no_acid",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 4.5,
    "animations": [
        {
            "type": "ranged_attack",
            "projectile": "generic",
            "shoot_frame": 9,
            "sound_frames": {
                "1": 169
            },
            "hit_sound": 133,
            "shoot_offset_x": 95,
            "shoot_offset_y": -40,
            "update_base_attack_after": 959,
            "projectile_details": {
                "projectile_graphic_id": 9304,
                "projectile_hit_graphic_id": 9310,
                "impact_offset_y": -50,
                "target_offset_x": -120
            },
            "animation_sequence_name": "attack"
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
**Base Attack: Ray of Frost** (Guess)
> Lucius attacks the furthest enemy with Ray of Frost, dealing damage to them and all enemies along the line.  
> Cooldown: 4.5s (Cap 1.125s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 959,
    "name": "Ray of Frost",
    "description": "Lucius attacks the furthest enemy with Ray of Frost, dealing damage to them and all enemies along the line.",
    "long_description": "",
    "graphic_id": 0,
    "target": "back",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 4.5,
    "animations": [
        {
            "type": "ranged_attack",
            "projectile": "generic_ray",
            "shoot_frame": 8,
            "hold_shoot_frame": true,
            "sound_frames": {
                "1": 169
            },
            "hit_sound": 133,
            "shoot_offset_x": 30,
            "shoot_offset_y": -47,
            "line_damage_distance": 60,
            "update_base_attack_after": 957,
            "projectile_details": {
                "damage_loops": 5,
                "projectile_hit_graphic_id": 9311,
                "projectile_ray_graphic_ids": [
                    9308
                ],
                "speed": 4400,
                "stop_at_target": false,
                "impact_offset_y": -50,
                "trail": {
                    "particle_graphic_ids": [
                        406,
                        407
                    ],
                    "spawn_rate": 100,
                    "lifespan": 3,
                    "tint": {
                        "r": 0.6,
                        "g": 0.8,
                        "b": 0.95,
                        "a": 1
                    },
                    "initial_velocity": {
                        "x": 10,
                        "y": 30
                    },
                    "velocity_jitter": {
                        "x": 5,
                        "y": 20
                    },
                    "scale_lerp": {
                        "0.0": {
                            "x": 0,
                            "y": 0
                        },
                        "0.1": {
                            "x": 0.75,
                            "y": 0.75
                        },
                        "1.0": {
                            "x": 0,
                            "y": 0
                        }
                    },
                    "alpha_lerp": {
                        "0.0": 0,
                        "0.1": 0.75,
                        "1.0": 0
                    }
                }
            },
            "animation_sequence_name": "attack_b"
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

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Arcane Chromat Acid** (Guess)
> Enemies damaged by Acid Splash gain one stack of Acid. Each stack of Acid causes the enemy to take 400% more damage from all of Lucius' subsequent attacks, stacking multiplicatively up to 10 times.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2657,
    "flavour_text": "",
    "description": {
        "desc": "Enemies damaged by Acid Splash gain one stack of Acid. Each stack of Acid causes the enemy to take $amount% more damage from all of Lucius' subsequent attacks, stacking multiplicatively up to $acid_max_stacks___2 times.",
        "post": {
            "conditions": [
                {
                    "condition": "not static_desc",
                    "desc": "^^$lucius_acid_chromat_stack_dmg"
                }
            ]
        }
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack_amount,400"
        },
        {
            "effect_string": "lucius_arcane_chromat_acid,0",
            "amount_expr": "upgrade_amount(19248,0)",
            "acid_max_stacks": 10,
            "debuffing_attack_ids": [
                546,
                351,
                956,
                957,
                958
            ],
            "debuff_effects": [
                {
                    "effect_string": "lucius_acid"
                },
                {
                    "effect_string": "increase_monster_damage_if_from_attacks,0,546,545,547,351,954,955,956,957,958,959",
                    "amount_expr": "upgrade_amount(19248,0)",
                    "active_graphic_id": 16019,
                    "use_stack_as_frame": true,
                    "overlay_play_mode": "stopped",
                    "bottom": true,
                    "stacks_on_reapply": true,
                    "manual_stacking": true,
                    "default_stacks": 1,
                    "max_stacks": "$acid_max_stacks",
                    "stacks_multiply": true,
                    "use_collection_source": true
                }
            ]
        }
    ],
    "requirements": [],
    "graphic_id": 9366,
    "large_graphic_id": 9362,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": false,
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
**Arcane Chromat Cold** (Guess)
> Enemies damaged by Ray of Frost are slowed by 50% for 10 seconds. Enemies slowed by this ability take 400% more damage from all of Lucius' attacks for each slow, stun, or root affecting them (stacking multiplicatively), including this slow.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2658,
    "flavour_text": "",
    "description": {
        "desc": "Enemies damaged by Ray of Frost are slowed by $cold_slow_amount___2% for $debuff_duration___2 seconds. Enemies slowed by this ability take $amount% more damage from all of Lucius' attacks for each slow, stun, or root affecting them (stacking multiplicatively), including this slow.",
        "post": {
            "conditions": [
                {
                    "condition": "not static_desc",
                    "desc": "^^$lucius_cold_chromat_stack_dmg"
                }
            ]
        }
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack_amount,400"
        },
        {
            "effect_string": "lucius_arcane_chromat_cold,0",
            "amount_expr": "upgrade_amount(19249,0)",
            "stacks_for_description": 10,
            "debuff_before_damage": true,
            "cold_slow_amount": 50,
            "debuff_duration": 10,
            "debuffing_attack_ids": [
                547,
                351,
                954,
                955,
                959
            ],
            "debuff_effects": [
                {
                    "effect_string": "increase_monster_damage_if_from_attacks,0,546,545,547,351,954,955,956,957,958,959",
                    "amount_expr": "upgrade_amount(19249,0)",
                    "active_graphic_id": 9328,
                    "bottom": true,
                    "amount_func": "mult",
                    "stack_func": "per_slows_and_stuns_on_monster",
                    "for_time": "$debuff_duration",
                    "time_stack_type": "time_reset",
                    "stack_across_effects": true,
                    "use_collection_source": true
                },
                {
                    "effect_string": "monster_speed_reduce,$cold_slow_amount",
                    "for_time": "$debuff_duration",
                    "time_stack_type": "time_reset",
                    "stack_across_effects": true
                }
            ]
        }
    ],
    "requirements": [],
    "graphic_id": 9367,
    "large_graphic_id": 9363,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": false,
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
**Elemental Adept** (Guess)
> When an enemy is affected by both of Lucius' Arcane Chromat abilities at the same time they are stunned for 10 seconds. When the stun expires they "explode" with acid and ice, applying one stack of Acid and dealing 10 seconds of BUD-based damage to themselves and all enemies in a small radius. The exploding enemy's Arcane Chromat - Cold debuff is then consumed.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2659,
    "flavour_text": "",
    "description": {
        "conditions": [
            {
                "condition": "feat_assigned 2531",
                "desc": "When an enemy is affected by both of Lucius' Arcane Chromat abilities at the same time they are stunned for $lucius_elemental_adept_timer seconds. When the stun expires they \"explode\" with acid and ice, applying two stacks of Acid and dealing $amount seconds of BUD-based damage to themselves and all enemies in a small radius. The exploding enemy's Arcane Chromat - Cold debuff is then consumed."
            },
            {
                "desc": "When an enemy is affected by both of Lucius' Arcane Chromat abilities at the same time they are stunned for $lucius_elemental_adept_timer seconds. When the stun expires they \"explode\" with acid and ice, applying one stack of Acid and dealing $amount seconds of BUD-based damage to themselves and all enemies in a small radius. The exploding enemy's Arcane Chromat - Cold debuff is then consumed."
            }
        ]
    },
    "effect_keys": [
        {
            "effect_string": "lucius_elemental_adept,10",
            "explosion_delay_timer": 3,
            "elemental_adept_explosion_attack_id": 545,
            "elemental_adept_stun_graphic_id": 9309,
            "explosion_graphic_id": 9305,
            "required_debuff_collection_upgrade_source_ids": [
                19248,
                19249
            ],
            "armor_eating_acid_upg_id": 19252
        }
    ],
    "requirements": [],
    "graphic_id": 9368,
    "large_graphic_id": 9364,
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
**Aerois Synergy** (Guess)
> Lucius contributes 2 stacks to Aerois Synergy every time Elemental Adept is triggered; if a boss enemy is combo'd it adds an additional 8 stacks (10 total). Lucius' maximum number of stacks is 200 plus the highest area completed in the current run divided by 5 (rounded down). 10% of his contributed stacks are removed when changing areas. Lucius' base damage is increased by 50% times the total number of Aerois Synergy stacks, with this bonus doubling for every 100 total stacks.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2660,
    "flavour_text": "",
    "description": {
        "desc": "Lucius contributes $base_stacks___2 stacks to Aerois Synergy every time Elemental Adept is triggered; if a boss enemy is combo'd it adds an additional $bonus_boss_stacks___2 stacks (10 total). Lucius' maximum number of stacks is $base_max_stacks___2 plus the highest area completed in the current run divided by 5 (rounded down). $percent_of_stacks_to_remove_on_area_change___2% of his contributed stacks are removed when changing areas. Lucius' base damage is increased by $(not_buffed amount)% times the total number of Aerois Synergy stacks, with this bonus doubling for every 100 total stacks."
    },
    "effect_keys": [
        {
            "effect_string": "hero_dps_multiplier_mult,50",
            "amount_func": "add",
            "stack_func": "per_aerois_synergy",
            "stacks_multiply": false,
            "show_bonus": true,
            "stack_title": "Aerois Synergy Stacks",
            "total_title": "Total Damage Bonus",
            "desc_forced_order": 2
        },
        {
            "effect_string": "lucius_aerois_synergy_stacks,1",
            "manual_stacking": true,
            "stacks_multiply": false,
            "show_stacks": true,
            "base_stacks": 2,
            "bonus_boss_stacks": 8,
            "min_stacks": 0,
            "base_max_stacks": 200,
            "percent_of_stacks_to_remove_on_area_change": 10,
            "stack_title": "Lucius Synergy Stacks",
            "desc_forced_order": 1
        },
        {
            "effect_string": "buff_upgrade,100,19251",
            "amount_func": "mult",
            "stack_func": "per_aerois_synergy",
            "stack_func_divisor": 100
        },
        {
            "effect_string": "stacks_data_binder_safe,1,lucius_aerois_synergy_v2_stacks",
            "use_stat_defs": true
        }
    ],
    "requirements": [],
    "graphic_id": 9365,
    "large_graphic_id": 9361,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": false,
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
**Armor Eating Acid** (Guess)
> Enemies with segmented health lose 1 extra segment when Lucius damages them with his Acid Splash attack or Elemental Adept explosion.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2661,
    "flavour_text": "",
    "description": {
        "conditions": [
            {
                "condition": "feat_assigned 2534",
                "desc": "Enemies with segmented health lose 2 extra segments when Lucius damages them with his Acid Splash attack or Elemental Adept explosion."
            },
            {
                "desc": "Enemies with segmented health lose 1 extra segment when Lucius damages them with his Acid Splash attack or Elemental Adept explosion."
            }
        ]
    },
    "effect_keys": [
        {
            "effect_string": "lucius_armor_eating_acid,100",
            "debuff_effects": [
                {
                    "effect_string": "unique_hit_multiplier_from_attacks,100,546,545,956,957,958",
                    "use_collection_source": true
                }
            ]
        }
    ],
    "requirements": [],
    "graphic_id": 28644,
    "large_graphic_id": 28643,
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
**Elemental Master** (Guess)
> Lucius gains a Dichromancy stack every time the Elemental Adept ability triggers an explosion. Lucius' damage is increased by 100% for each Dichromancy stack he has, stacking multiplicatively up to 25 times. Stacks reset when changing areas.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2662,
    "flavour_text": "",
    "description": {
        "desc": "Lucius gains a Dichromancy stack every time the Elemental Adept ability triggers an explosion. Lucius' damage is increased by $(not_buffed amount)% for each Dichromancy stack he has, stacking multiplicatively up to $max_stacks times. Stacks reset when changing areas."
    },
    "effect_keys": [
        {
            "effect_string": "hero_dps_multiplier_mult,100",
            "max_stacks": 25,
            "stack_title": "Dichromancy Stacks",
            "manual_stacking": true,
            "stacks_multiply": true,
            "stacks_on_trigger": "lucius_elemental_adept_triggered",
            "more_triggers": [
                {
                    "trigger": "area_changed",
                    "action": {
                        "type": "reset"
                    }
                }
            ],
            "show_bonus": true
        }
    ],
    "requirements": [],
    "graphic_id": 0,
    "large_graphic_id": 9369,
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

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Corrosion Master** (Guess)
> Lucius attacks twice with his Acid Splash before switching to Ray of Frost. Additionally, enemies affected by at least 2 stacks of Acid take 400% more damage from all of Lucius' attacks.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2663,
    "flavour_text": "",
    "description": {
        "desc": "Lucius attacks twice with his Acid Splash before switching to Ray of Frost. Additionally, enemies affected by at least $stack_threshold stacks of Acid take $amount% more damage from all of Lucius' attacks."
    },
    "effect_keys": [
        {
            "effect_string": "lucius_corrosion_master,400",
            "stack_threshold": 2,
            "debuff_effects": [
                {
                    "effect_string": "increase_monster_damage_if_from_attacks,400,546,545,547,351,954,955,956,957,958,959",
                    "stack_func": "per_lucius_acid_stacks_on_target",
                    "amount_func": "if",
                    "if_amount": "$stack_threshold",
                    "use_collection_source": true
                }
            ]
        },
        {
            "effect_string": "change_base_attack,957"
        }
    ],
    "requirements": [],
    "graphic_id": 0,
    "large_graphic_id": 9371,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": false,
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
**Specialisation: Lingering Chill** (Guess)
> Lucius attacks twice with his Ray of Frost before switching to Acid Splash. When an enemy explodes and loses their Arcane Chromat - Cold debuff, they gain a Lingering Chill debuff which slows them by 25% and lasts for 20 seconds. Additionally, enemies affected by at least 2 slow effects take 400% more damage from all of Lucius' attacks.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2664,
    "flavour_text": "",
    "description": {
        "desc": "Lucius attacks twice with his Ray of Frost before switching to Acid Splash. When an enemy explodes and loses their Arcane Chromat - Cold debuff, they gain a Lingering Chill debuff which slows them by $amount___2% and lasts for $debuff_duration___2 seconds. Additionally, enemies affected by at least $stack_threshold slow effects take $amount% more damage from all of Lucius' attacks."
    },
    "effect_keys": [
        {
            "effect_string": "lucius_lingering_chill_global,400",
            "stack_threshold": 2,
            "debuff_effects": [
                {
                    "effect_string": "increase_monster_damage_if_from_attacks,400,546,545,547,351,954,955,956,957,958,959",
                    "stack_func": "per_slows_on_monster",
                    "amount_func": "if",
                    "if_amount": "$stack_threshold",
                    "use_collection_source": true
                }
            ]
        },
        {
            "effect_string": "lucius_lingering_chill,25",
            "debuff_duration": 20,
            "debuff_effects": [
                {
                    "effect_string": "monster_speed_reduce,25",
                    "active_graphic_id": 8284,
                    "for_time": "$debuff_duration",
                    "time_stack_type": "time_reset",
                    "stack_across_effects": true,
                    "use_collection_source": true
                }
            ]
        },
        {
            "effect_string": "change_base_attack,954"
        }
    ],
    "requirements": [],
    "graphic_id": 0,
    "large_graphic_id": 9370,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": false,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0
    }
}
</pre>
</p>
</details>
</div></div>

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unlock Adventure: The Simril Spoilsport (Lucius)** (Complete Area 50)
> Simril is ruined! Someone has pilfered the food supplies!
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![No Rest for the Gifted Icon](images/lucius/9430.png) **Variant 1: No Rest for the Gifted** (Complete Area 75)
> Only Champions with a CHA score of 14 or higher can be used. Quest goals are doubled.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Udderly Deadly Icon](images/lucius/9431.png) **Variant 2: Udderly Deadly** (Complete Area 125)
> Lucius starts in the formation (slot 5) and cannot be moved. Lucius is the only Champion that can deal damage. All other Champions have their DPS disabled, but their formation abilities are active. Lucius' attacks twice as fast as normal and his Ultimate cooldown is reduced to 30 seconds. In each area, a cursed cow appears; if the cursed cow attacks a Champion, that Champion becomes cursed, disabling all of its upgrades until you change areas.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Lucius' Bedtime Stories Icon](images/lucius/9432.png) **Variant 3: Lucius' Bedtime Stories** (Complete Area 175)
> Nat, Jenks, and Squiddly join the Champions for their first Simril outside of Waterdeep! They each take up a slot in the formation. Lesser Gibbering Mouthers appear in each area, and move 100% faster (as nightmares do).
</div></div>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Lucius" fill="#aaa" data-formationName="Lucius" data-campaignName="Simril" width="250" height="160"><circle cx="135" cy="45" r="15"/><circle cx="135" cy="125" r="15"/><circle cx="95" cy="25" r="15"/><circle cx="95" cy="145" r="15"/><circle cx="55" cy="45" r="15"/><circle cx="55" cy="85" r="15"/><circle cx="55" cy="125" r="15"/><circle cx="15" cy="25" r="15"/><circle cx="15" cy="65" r="15"/><circle cx="15" cy="105" r="15"/><text x="165" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Lucius</text><text x="165" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Simril</text></svg>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*