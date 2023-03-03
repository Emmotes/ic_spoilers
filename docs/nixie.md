[Back to Main](index.md)

{% comment %}
![PC Portrait](images/portrait_nixie.png)
{% endcomment %}

# Nixie

Nixie is a "tiefling sorcerer and pyromaniac" from the 1 For All sketch show.

[https://tvtropes.org/pmwiki/pmwiki.php/Characters/OneForAll](https://tvtropes.org/pmwiki/pmwiki.php/Characters/OneForAll)

# Basic Information

Nixie will be the new champion in the The Running event on 3 May 2023.

* Seat: Unknown
* Race: Tiefling (Guess)
* Class: Sorcerer (Guess)
* Roles: DPS / Support (Guess)
* Age: Unknown
* Gender: Female (Guess)
* Alignment: Unknown
* Affiliation: Awful Ones (Guess)
* Stats: Unknown

# Formation

Unknown.
{% comment %}
![Formation Layout](images/formation_nixie.png)
{% endcomment %}

# Abilities

**Base Attack: Fireball**
> Nixie attacks with a ball of fire centered on a random target dealing 1 hit of damage to all enemies in a small radius.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Nixie attacks with a ball of fire centered on a random target dealing 1 hit of damage to all enemies in a small radius.",
    "long_description": "",
    "damage_modifier": 1,
    "damage_types": "",
    "graphic_id": 0,
    "target": "random",
    "aoe_radius": 150,
    "tags": "",
    "num_targets": 1,
    "animations": [{
        "projectile_details": {
            "projectile_hit_graphic_id": 750,
            "trail": {
                "scale_lerp": [
                    {
                        "x": 1,
                        "y": 1
                    },
                    {
                        "x": 0,
                        "y": 0
                    }
                ],
                "lifespan": 0.2,
                "initial_velocity": {
                    "x": 0,
                    "y": 0
                },
                "alpha_lerp": {
                    "0": 0,
                    "1": 0,
                    "0.1": 0.75
                },
                "tint": {
                    "a": 1,
                    "r": 1,
                    "b": 1,
                    "g": 1
                },
                "particle_graphic_ids": [
                    19009,
                    6093,
                    749
                ],
                "spawn_rate": 100,
                "velocity_jitter": {
                    "x": 50,
                    "y": 50
                }
            },
            "percent_height_offset": 10,
            "use_auto_rotation": true,
            "name": "nixie_fireball",
            "projectile_graphic_id": 19009,
            "projectile_speed": 1500,
            "rotation_speed": 0
        },
        "hit_sound": 133,
        "shoot_offset_y": -20,
        "shoot_offset_x": 40,
        "shoot_sound": 149,
        "type": "ranged_attack",
        "projectile": "pd_generic_projectile",
        "shoot_frame": 9
    }],
    "name": "Fireball",
    "cooldown": 1,
    "id": 620
}
</pre>
</p>
</details>
<br />

**Ultimate Attack: Unknown**
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
</pre>
</p>
</details>
<br />

**Unknown**
> Nixie increases the damage of all Champions with a Charisma of 17+ by `$(amount)%`, including herself.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "effect_string": "hero_dps_multiplier_mult,100",
        "filter_targets": [{
            "score": 17,
            "stat": "cha",
            "check": ">=",
            "type": "stat_score"
        }],
        "targets": ["all"]
    }],
    "requirements": "",
    "description": {"desc": "$(source_hero) increases the damage of all Champions with a Charisma of 17+ by $(amount)%, including herself."},
    "id": 1473,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {"is_formation_ability": true}
}
</pre>
</p>
</details>
<br />

**Wild Magic Surge** (Guess)
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "wild_magic_effects": [
                {
                    "effects": [],
                    "probability": 20
                },
                {
                    "effects": [{
                        "duration": 20,
                        "index": 1
                    }],
                    "probability": 20
                },
                {
                    "effects": [
                        {
                            "duration": 5,
                            "index": 2
                        },
                        {
                            "duration": 15,
                            "index": 3
                        }
                    ],
                    "probability": 10
                },
                {
                    "effects": [
                        {
                            "duration": 0,
                            "index": 4
                        },
                        {
                            "duration": 0.5,
                            "index": 5
                        }
                    ],
                    "probability": 10
                },
                {
                    "effects": [{
                        "duration": 0,
                        "index": 6
                    }],
                    "probability": 10
                },
                {
                    "effects": [{
                        "duration": 10,
                        "index": 7
                    }],
                    "probability": 10
                },
                {
                    "effects": [{
                        "duration": 0,
                        "index": 8
                    }],
                    "probability": 10
                },
                {
                    "effects": [
                        {
                            "duration": 20,
                            "index": 9
                        },
                        {
                            "duration": 20,
                            "index": 10
                        }
                    ],
                    "probability": 10
                }
            ],
            "effect_string": "nixie_wild_magic_surge"
        },
        {
            "projectile_details": {
                "trail": {
                    "scale_lerp": {
                        "0.0": {
                            "x": 1,
                            "y": 1
                        },
                        "1.0": {
                            "x": 0,
                            "y": 0
                        }
                    },
                    "lifespan": 0.5,
                    "initial_velocity": {
                        "x": 0,
                        "y": -30
                    },
                    "alpha_lerp": {
                        "0": 0,
                        "1": 0,
                        "0.1": 0.75
                    },
                    "particle_graphic_ids": [6093],
                    "spawn_rate": 50,
                    "velocity_jitter": {
                        "x": 30,
                        "y": 50
                    }
                },
                "percent_height_offset": 50,
                "use_auto_rotation": true,
                "projectile_graphic_id": 6093,
                "projectile_speed": 500
            },
            "effect_string": "nixie_engulfing_flames,1",
            "radius": 150
        },
        {"effect_string": "nixie_potted_punch"},
        {
            "effect_string": "buff_upgrade,100,10887",
            "apply_manually": true
        },
        {
            "projectile_details": {
                "projectile_hit_graphic_id": 16442,
                "trail": {
                    "scale_lerp": {
                        "0.0": {
                            "x": 1,
                            "y": 1
                        },
                        "1.0": {
                            "x": 0,
                            "y": 0
                        }
                    },
                    "lifespan": 0.25,
                    "initial_velocity": {
                        "x": 0,
                        "y": 0
                    },
                    "alpha_lerp": {
                        "0.0": 1,
                        "1.0": 0
                    },
                    "particle_graphic_ids": [189],
                    "spawn_rate": 50,
                    "velocity_jitter": {
                        "x": 30,
                        "y": 30
                    }
                },
                "percent_height_offset": 50,
                "projectile_speed": 250
            },
            "effect_string": "nixie_coin_cascade"
        },
        {
            "effect_string": "owner_killing_blow_gold_bonus,10",
            "apply_manually": true
        },
        {
            "effect_string": "nixie_shockwave,5",
            "radius": 150
        },
        {"effect_string": "nixie_feeling_blue"},
        {
            "monster_ids": [
                39,
                635,
                1966
            ],
            "effect_string": "nixie_eldritch_entourage"
        },
        {
            "effect_string": "increase_hero_scale,25",
            "apply_manually": true
        },
        {
            "effect_string": "hero_dps_multiplier_mult,100",
            "apply_manually": true
        }
    ],
    "requirements": "",
    "description": {"desc": ""},
    "id": 1474,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
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

# Specialisations

**Specialisation: Unknown**
> Nixie increases the damage bonus of `$(upgrade_name id)` by `$(amount)%` for each Tiefling champion in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stacks_multiply": true,
        "off_when_benched": true,
        "effect_string": "buff_upgrade_per_any_tagged_crusader_mult,200,10887,tiefling"
    }],
    "requirements": "",
    "description": {"desc": "$(source_hero) increases the damage bonus of $(upgrade_name id) by $(amount)% for each Tiefling champion in the formation, stacking multiplicatively."},
    "id": 1476,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "spec_option_post_apply_info": "Tiefling Champions: $num_stacks",
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
<br />

**Specialisation: Unknown**
> Nixie increases the damage bonus of `$(upgrade_name id)` by `$(amount)%` for each Champion with a total ability score of 78 or less in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stack_title": "Affected Champions",
        "amount_updated_listeners": [
            "slot_changed",
            "feat_changed"
        ],
        "show_bonus": true,
        "amount_func": "mult",
        "stack_func": "per_crusader",
        "effect_string": "buff_upgrade,150,10887",
        "stack_func_data": {"target_filters": [{
            "stat": "total_ability_score",
            "comparison": "<=",
            "type": "stat",
            "value": 78
        }]}
    }],
    "requirements": "",
    "description": {"desc": "$(source_hero) increases the damage bonus of $(upgrade_name id) by $(amount)% for each Champion with a total ability score of 78 or less in the formation, stacking multiplicatively."},
    "id": 1477,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "spec_option_post_apply_info": "Qualified Champions: $num_stacks",
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
<br />

**Specialisation: Unknown**
> Nixie increases the damage bonus of `$(upgrade_name id)` by `$(amount)%` for each Chaotic champion in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stacks_multiply": true,
        "off_when_benched": true,
        "effect_string": "buff_upgrade_per_any_tagged_crusader_mult,100,10887,chaotic"
    }],
    "requirements": "",
    "description": {"desc": "$(source_hero) increases the damage bonus of $(upgrade_name id) by $(amount)% for each Chaotic champion in the formation, stacking multiplicatively."},
    "id": 1478,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "spec_option_post_apply_info": "Chaotic Champions: $num_stacks",
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
<br />

# Items

| Slot | Name | Type |
|---|---|---|
| 1 | `Arm Coverings` | Unknown |
| 2 | `Capes` | Unknown |
| 3 | `Jewelery Collection` | Unknown |
| 4 | `Silver Talisman` | Unknown |
| 5 | `Spell Components` | Unknown |
| 6 | `Tail Ribbon` | Unknown |

# Feats

Unknown.

# Legendaries

Unknown.

{% comment %}
# Console Portrait

![Console Portrait](images/console_nixie.png)
{% endcomment %}

[Back to Top](#top)

*Last Modified: {{ site.time }}*