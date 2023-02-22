[Back to Main](index.md)

![PC Portrait](images/portrait_antrius.png)

# Antrius

Antrius is a "a vain and charming human Bard" from the 1 For All sketch show.

[https://tvtropes.org/pmwiki/pmwiki.php/Characters/OneForAll](https://tvtropes.org/pmwiki/pmwiki.php/Characters/OneForAll)

# Basic Information

Antrius will be the new champion in the Greengrass event on 12 April 2023.

* Seat: Unknown
* Race: Human (Guess)
* Class: Bard (Guess)
* Roles: Unknown
* Age: Unknown
* Gender: Male (Guess)
* Alignment: Unknown
* Affiliation: Awful Ones (Guess)
* Stats: Unknown

# Formation

![Formation Layout](images/formation_antrius.png)

# Abilities

**Base Attack: Vicious Mockery**
> Antrius attacks the enemy with the most health, dealing 1 hit and causing it to take +100% damage until he attacks again.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Antrius attacks the enemy with the most health, dealing 1 hit and causing it to take +100% damage until he attacks again.",
    "long_description": "",
    "damage_modifier": 1,
    "damage_types": ["magic"],
    "graphic_id": 0,
    "target": "highest_health",
    "aoe_radius": 0,
    "tags": ["ranged"],
    "num_targets": 1,
    "animations": [{
        "hit_sound": 133,
        "shoot_sound": 159,
        "projectile_graphic_id": 1,
        "type": "ranged_attack",
        "projectile": "song_of_pain",
        "shoot_frame": 9
    }],
    "name": "Vicious Mockery",
    "cooldown": 6,
    "id": 614
}
</pre>
</p>
</details>
<br />

**Ultimate Attack: Cloud of Daggers**
> Antrius takes a hand mirror out and smiles into it, causing it to shatter. Shards of glass fly out towards the enemy with the most health forming a cloud upon reaching the target. The cloud deals ongoing damage for 10 seconds.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Antrius smiles into a mirror causing it to shatter. The shards create a cloud dealing damage to all enemies within it.",
    "long_description": "Antrius takes a hand mirror out and smiles into it, causing it to shatter. Shards of glass fly out towards the enemy with the most health forming a cloud upon reaching the target. The cloud deals ongoing damage for 10 seconds.",
    "damage_modifier": 1,
    "damage_types": ["melee"],
    "graphic_id": 18689,
    "target": "highest_health",
    "aoe_radius": 0,
    "tags": [
        "melee",
        "ultimate"
    ],
    "num_targets": 1,
    "animations": [{
        "duration": 10,
        "projectile_data": {
            "projectile_details": {
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
                    "lifespan": 0.3,
                    "initial_velocity": {
                        "x": "250",
                        "y": "0"
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
                    "spawn_rate": 160,
                    "particle_graphic_ids": [
                        7693,
                        18554
                    ],
                    "velocity_jitter": {
                        "x": "100",
                        "y": "100"
                    }
                },
                "percent_height_offset": 0,
                "projectile_graphic_id": 18554,
                "projectile_speed": 1511,
                "rotation_speed": 0
            },
            "hit_sound": 133,
            "shoot_offset_y": -62.5,
            "shoot_offset_x": 90,
            "shoot_sound": 149,
            "type": "ranged_attack",
            "projectile": "pd_generic_projectile",
            "shoot_frame": 55
        },
        "ultimate": "antrius",
        "type": "ultimate_attack",
        "num_damage_ticks": 20,
        "aoe_radius": 160
    }],
    "name": "Cloud of Daggers",
    "cooldown": 10,
    "id": 615
}
</pre>
</p>
</details>
<br />

**Inspiring Song** (Guess)
> Antrius inspires each adjacent Champion giving them `$(amount___2)` temporary hit points every `$(interval___2)` seconds and increasing their damage by `$(amount)%`. Any Champion with a Charisma score of 17 or higher further inspires all unaffected adjacent Champions, and this continues to cascade. Antrius' song is so inspiring that he also inspires himself. The total shield amount on each Champion is limited to 10 times the Champion's max health.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "overlay_location": "slot",
            "bottom": true,
            "active_graphic_id": 18661,
            "effect_string": "hero_dps_multiplier_mult,100",
            "sort_offset": -1,
            "targets": [{
                "type": "cascade",
                "cascade_target_filter": {
                    "score": 17,
                    "stat": "cha",
                    "check": ">=",
                    "type": "stat_score"
                },
                "cascade_type": "self_and_adj"
            }]
        },
        {
            "target_self": true,
            "effect_string": "grant_temporary_hp_with_cooldown,10,5,0,1000",
            "override_key_desc": "$target is granted $amount temporary HP every $(interval) seconds. The total temporary HP can only grant up to $optional_percent_limit% of $target's max HP",
            "targets": [{
                "type": "cascade",
                "cascade_target_filter": {
                    "score": 17,
                    "stat": "cha",
                    "check": ">=",
                    "type": "stat_score"
                },
                "cascade_type": "self_and_adj"
            }],
            "apply_temp_hp_regardless_of_health": true
        },
        {
            "overlay_location": "slot",
            "bottom": true,
            "active_graphic_id": 18553,
            "effect_string": "do_nothing",
            "sort_offset": 0,
            "filter_targets": [{
                "score": 17,
                "stat": "cha",
                "check": ">=",
                "type": "stat_score"
            }],
            "targets": [{
                "type": "cascade",
                "cascade_target_filter": {
                    "score": 17,
                    "stat": "cha",
                    "check": ">=",
                    "type": "stat_score"
                },
                "cascade_type": "self_and_adj"
            }]
        }
    ],
    "requirements": "",
    "description": {"desc": "$(source_hero) inspires each adjacent Champion giving them $(amount___2) temporary hit points every $(interval___2) seconds and increasing their damage by $(amount)%. Any Champion with a Charisma score of 17 or higher further inspires all unaffected adjacent Champions, and this continues to cascade. $(source_hero)' song is so inspiring that he also inspires himself. The total shield amount on each Champion is limited to 10 times the Champion's max health."},
    "id": 1462,
    "flavour_text": "",
    "graphic_id": 18683,
    "properties": {
        "indexed_effect_properties": true,
        "is_formation_ability": true,
        "default_bonus_index": 0,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
<br />

**The Hardest Bardiest Bard** (Guess)
> Antrius increases `$(upgrade_name id)`'s temporary hit point bonus by `$(amount)%` for each Champion affected by it, stacking additively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stack_title": "Affected Champions",
        "amount_updated_listeners": ["slot_changed"],
        "show_bonus": true,
        "amount_func": "add",
        "stack_func": "per_crusader",
        "effect_string": "buff_upgrade,100,10794,1",
        "stack_func_data": {"ekh_filter": {
            "upgrade_id": 10794,
            "type": "affected_by_upgrade"
        }}
    }],
    "requirements": "",
    "description": {"desc": "$(source_hero) increases $(upgrade_name id)'s temporary hit point bonus by $(amount)% for each Champion affected by it, stacking additively."},
    "id": 1463,
    "flavour_text": "",
    "graphic_id": 18685,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<br />

**Suave and Sophisticated** (Guess)
> Antrius increases `$(upgrade_name id___2)`'s damage bonus by `$(amount)%` for each Champion affected by it, stacking multiplicatively. Buffs apply to the pre-stack value.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {"effect_string": "pre_stack_amount,100"},
        {
            "amount_expr": "upgrade_amount(10796,0)",
            "stack_title": "Affected Champions",
            "amount_updated_listeners": ["slot_changed"],
            "show_bonus": true,
            "amount_func": "mult",
            "stack_func": "per_crusader",
            "effect_string": "buff_upgrade,0,10794,0",
            "stack_func_data": {"ekh_filter": {
                "upgrade_id": 10794,
                "type": "affected_by_upgrade"
            }}
        }
    ],
    "requirements": "",
    "description": {"desc": "$(source_hero) increases $(upgrade_name id___2)'s damage bonus by $(amount)% for each Champion affected by it, stacking multiplicatively. Buffs apply to the pre-stack value."},
    "id": 1464,
    "flavour_text": "",
    "graphic_id": 18684,
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

**Can't Be DeFeated** (Guess)
> Antrius increases `$(upgrade_name id)`'s damage bonus by `$(amount)%` for each feat your Champions have unlocked, stacking additively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stack_title": "Unlocked Feats",
        "amount_updated_listeners": ["feat_changed"],
        "show_bonus": true,
        "amount_func": "add",
        "stack_func": "per_feat",
        "effect_string": "buff_upgrade,100,10794,0"
    }],
    "requirements": "",
    "description": {"desc": "$(source_hero) increases $(upgrade_name id)'s damage bonus by $(amount)% for each feat your Champions have unlocked, stacking additively."},
    "id": 1465,
    "flavour_text": "",
    "graphic_id": 18682,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<br />

# Specialisations

**Specialisation: Bard College** (Guess)
> Antrius increases `$(upgrade_name id)`'s damage bonus by `$(amount)%` for each Bard in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stacks_multiply": true,
        "off_when_benched": true,
        "effect_string": "buff_upgrade_per_any_tagged_crusader_mult,200,10794,bard"
    }],
    "requirements": "",
    "description": {"desc": "$(source_hero) increases $(upgrade_name id)'s damage bonus by $(amount)% for each Bard in the formation, stacking multiplicatively."},
    "id": 1466,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "spec_option_post_apply_info": "Bard Champions: $num_stacks",
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
<br />

**Specialisation: Truly Awful Stats** (Guess)
> Antrius increases `$(upgrade_name id)`'s damage bonus by `$(amount)%` for each Champion in the formation with a total ability score of 78 or lower, stacking multiplicatively.
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
        "effect_string": "buff_upgrade,150,10794,0",
        "stack_func_data": {"target_filters": [{
            "stat": "total_ability_score",
            "comparison": "<=",
            "type": "stat",
            "value": 78
        }]}
    }],
    "requirements": "",
    "description": {"desc": "$(source_hero) increases $(upgrade_name id)'s damage bonus by $(amount)% for each Champion in the formation with a total ability score of 78 or lower, stacking multiplicatively."},
    "id": 1467,
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

**Specialisation: The A in Chaotic is for Antrius** (Guess)
> Antrius increases `$(upgrade_name id)`'s damage bonus by `$(amount)%` for each chaotic Champion in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stacks_multiply": true,
        "off_when_benched": true,
        "effect_string": "buff_upgrade_per_any_tagged_crusader_mult,100,10794,chaotic"
    }],
    "requirements": "",
    "description": {"desc": "$(source_hero) increases $(upgrade_name id)'s damage bonus by $(amount)% for each chaotic Champion in the formation, stacking multiplicatively."},
    "id": 1468,
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
| 1 | `Bracers` | Unknown |
| 2 | `Headshot` | Unknown |
| 3 | `Instrument` | Unknown |
| 4 | `Mirror` | Unknown |
| 5 | `Sword` | Unknown |
| 6 | `Vest` | Unknown |

# Feats

Unknown.

# Legendaries

Unknown.

# Console Portrait

![Console Portrait](images/console_antrius.png)

[Back to Top](#top)

*Last Modified: {{ site.time }}*