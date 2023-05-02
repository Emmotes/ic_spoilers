[Back to Main](index.md)

![PC Portrait](images/bbeg/portrait.png)

# BBEG

This is Big Bad Evil Guy from the 1 for All sketch show of the same name.

# Basic Information

BBEG will be the new champion in the Dragondown event on 7 June 2023.

* Seat: Unknown
* Race: Drow Elf (Guess)
* Class: Warlock (Guess)
* Roles: Support / Speed (Guess)
* Age: Unknown
* Gender: Male (Guess)
* Alignment: Lawful Evil (Guess)
* Affiliation: Awful Ones
* Stats: Unknown

# Formation

![Formation Layout](images/bbeg/formation.png)

# Abilities

**Base Attack: Chill Touch** (Magic)
> BBEG conjures a spectral hand over the enemy with the most health and touches it, dealing one hit.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "BBEG conjures a spectral hand over the enemy with the most health and touches it, dealing one hit.",
    "long_description": "",
    "damage_modifier": 1,
    "damage_types": ["magic"],
    "graphic_id": 0,
    "target": "highest_health",
    "aoe_radius": 0,
    "tags": ["ranged"],
    "num_targets": 1,
    "animations": [{
        "projectile_details": {"target_offset_y": -60},
        "hit_sound": 133,
        "shoot_sound": 149,
        "type": "ranged_attack",
        "projectile": "bbeg_chill_touch",
        "shoot_frame": 21
    }],
    "name": "Chill Touch",
    "cooldown": 5,
    "id": 638
}
</pre>
</p>
</details>
<br />

**Ultimate Attack: Balgronuuth's Undead Horde**
> Balgronuuth's symbol appears in the air for 30 seconds. While the symbol is in the air, every time Rise, My Minions! summons a zombie, it summons two instead of one.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Balgronuuth's symbol appears in the air for 30 seconds, causing Rise, My Minions! to summon two zombies instead of one.",
    "long_description": "Balgronuuth's symbol appears in the air for 30 seconds. While the symbol is in the air, every time Rise, My Minions! summons a zombie, it summons two instead of one.",
    "damage_modifier": 0,
    "damage_types": ["magic"],
    "graphic_id": 19515,
    "target": "none",
    "aoe_radius": 0,
    "tags": [
        "ranged",
        "ultimate"
    ],
    "num_targets": 0,
    "animations": [{
        "symbol_duration": 30,
        "ultimate": "bbeg",
        "type": "ultimate_attack",
        "no_damage_display": true
    }],
    "name": "Balgronuuth's Undead Horde",
    "cooldown": 360,
    "id": 639
}
</pre>
</p>
</details>
<br />

**Evil Overlord**
> BBEG increases the damage of all Champions with an Intelligence of 12 or less by `$(amount)%`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "formation_arrows_for_effected_only": true,
        "off_when_benched": true,
        "effect_string": "hero_dps_multiplier_mult,100",
        "targets": [{
            "stat": "int",
            "comparison": "<=",
            "type": "stat",
            "value": 12
        }]
    }],
    "requirements": "",
    "description": {"desc": "$source increases the damage of all Champions with an Intelligence of 12 or less by $(amount)%."},
    "id": 1539,
    "flavour_text": "",
    "graphic_id": 19507,
    "properties": {"is_formation_ability": true}
}
</pre>
</p>
</details>
<br />

**Homebrew**
> BBEG increases the damage bonus of `$(upgrade_name id)` by `$(not_buffed amount)%` for each active potion, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stack_title": "Active Potions",
        "amount_updated_listeners": [
            "slot_changed",
            "active_potions_changed"
        ],
        "stacks_multiply": true,
        "show_bonus": true,
        "amount_func": "mult",
        "stack_func": "per_active_potion",
        "effect_string": "buff_upgrade,100,11539"
    }],
    "requirements": "",
    "description": {"desc": "$source increases the damage bonus of $(upgrade_name id) by $(not_buffed amount)% for each active potion, stacking multiplicatively."},
    "id": 1540,
    "flavour_text": "",
    "graphic_id": 19508,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<br />

**Rise My Minions**
> Every `$(spawn_rate)` seconds BBEG creates a plodding zombie that appears in front of the party and slowly plods forward. Zombies persist with area changes. Enemies near the zombie take `$(amount)` seconds worth of BUD damage per second.
>  
> - Current Summon Speed: `$(bbeg_buffed_minion_spawn_rate)` seconds.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "tickrate": 1,
            "off_when_benched": true,
            "effect_string": "bbeg_rise_my_minions,0.2",
            "spawn_rate": 10
        },
        {
            "skin_property_prefix": "summon_overlay",
            "effect_string": "animation_synced_overlay,19469",
            "apply_manually": true
        }
    ],
    "requirements": "",
    "description": {
        "post": {"conditions": [{
            "condition": "not static_desc",
            "desc": "^^Current Summon Speed: $(bbeg_buffed_minion_spawn_rate) seconds"
        }]},
        "desc": "Every $(spawn_rate) seconds $source creates a plodding zombie that appears in front of the party and slowly plods forward. Zombies persist with area changes. Enemies near the zombie take $(amount) seconds worth of BUD damage per second."
    },
    "id": 1541,
    "flavour_text": "",
    "graphic_id": 19510,
    "properties": {
        "indexed_effect_properties": true,
        "retain_on_slot_changed": true,
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

**Sources of Corpses**
> The time it takes for Rise, My Minions! to summon a zombie is reduced by `$(amount___3)` seconds for each Awful Ones affiliation member in the formation, and the damage bonus of `$(upgrade_name id___2)` is increased by `$(amount)%` for each summoned zombie, stacking multiplicatively, with buffs applying to the pre-stack value.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {"effect_string": "buff_pre_stack_amount,100"},
        {
            "amount_expr": "upgrade_amount(11542,0)",
            "stack_title": "Active Zombies",
            "amount_updated_listeners": ["bbeg_zombie_count_changed"],
            "stacks_multiply": true,
            "show_bonus": true,
            "amount_func": "mult",
            "stack_func": "per_bbeg_zombie",
            "effect_string": "buff_upgrade,0,11539",
            "desc_forced_order": 1
        },
        {
            "amount_updated_listeners": ["slot_changed"],
            "stacks_multiply": false,
            "total_title": "Speed Change",
            "bonus_is_seconds": true,
            "amount_func": "add",
            "stack_func": "per_crusader",
            "effect_string": "bbeg_minion_spawn_rate_reduction,2.5",
            "stack_title": "Awful Ones Champions",
            "show_bonus": true,
            "percent_values": false,
            "stack_func_data": {"tag": "awfulones"},
            "desc_forced_order": 0,
            "total_bonus_amount_prefix": "-"
        }
    ],
    "requirements": "",
    "description": {"desc": "The time it takes for Rise, My Minions! to summon a zombie is reduced by $(amount___3) seconds for each Awful Ones affiliation member in the formation, and the damage bonus of $(upgrade_name id___2) is increased by $(amount)% for each summoned zombie, stacking multiplicatively, with buffs applying to the pre-stack value."},
    "id": 1542,
    "flavour_text": "",
    "graphic_id": 19511,
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

**Railroad**
> If the current area is completed in `$(seconds_plural amount)` or less, BBEG reduces the next area's quest requirements by `$(amount___2)%`.
>  
> - Time Remaining: `$(bbeg_railroad_seconds_left)`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "bbeg_railroad,5"
        },
        {
            "off_when_benched": true,
            "effect_string": "chance_reduce_quest_requirement,25,100",
            "apply_manually": true
        }
    ],
    "requirements": "",
    "description": {
        "post": {"conditions": [{
            "condition": "not static_desc",
            "desc": "^^Time Remaining: $(bbeg_railroad_seconds_left)"
        }]},
        "desc": "If the current area is completed in $(seconds_plural amount) or less, $source reduces the next area's quest requirements by $(amount___2)%."
    },
    "id": 1543,
    "flavour_text": "",
    "graphic_id": 19509,
    "properties": {
        "indexed_effect_properties": true,
        "retain_on_slot_changed": true,
        "is_formation_ability": true,
        "default_bonus_index": 1,
        "owner_use_outgoing_description": true,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
<br />

**Unknown**
> As the sworn enemy of the Awful Ones, BBEG is eligible for any adventure that any of them are eligible for. However, they still don't remember who he is.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{"effect_string": "do_nothing"}],
    "requirements": "",
    "description": {"desc": "As the sworn enemy of the Awful Ones, $source is eligible for any adventure that any of them are eligible for. However, they still don't remember who he is."},
    "id": 1538,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
<br />

# Specialisations

**Specialisation: Min Maxing** (Guess)
> BBEG increases the damage bonus of `$(upgrade_name id)` by `$(not_buffed amount)%` for each Champion with a total ability score of 78 or less in the formation, stacking multiplicatively and applied multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stack_title": "Qualified Champions",
        "amount_updated_listeners": [
            "slot_changed",
            "feat_changed"
        ],
        "show_bonus": true,
        "amount_func": "mult",
        "stack_func": "per_crusader",
        "effect_string": "buff_upgrade,150,11539",
        "stack_func_data": {"target_filters": [{
            "stat": "total_ability_score",
            "comparison": "<=",
            "type": "stat",
            "value": 78
        }]}
    }],
    "requirements": "",
    "description": {"desc": "$source increases the damage bonus of $(upgrade_name id) by $(not_buffed amount)% for each Champion with a total ability score of 78 or less in the formation, stacking multiplicatively and applied multiplicatively."},
    "id": 1545,
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

**Specialisation: Powergaming** (Guess)
> BBEG increases the damage bonus of `$(upgrade_name id)` by `$(not_buffed amount)%` for each Evil Champion in the formation, stacking multiplicatively and applied multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stacks_multiply": true,
        "off_when_benched": true,
        "effect_string": "buff_upgrade_per_any_tagged_crusader_mult,200,11539,evil"
    }],
    "requirements": "",
    "description": {"desc": "$source increases the damage bonus of $(upgrade_name id) by $(not_buffed amount)% for each Evil Champion in the formation, stacking multiplicatively and applied multiplicatively."},
    "id": 1544,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "spec_option_post_apply_info": "Evil Champions: $num_stacks",
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
<br />

**Specialisation: Rules Lawyering**
> BBEG increases the damage bonus of `$(upgrade_name id)` by `$(not_buffed amount)%` for each Lawful Champion in the formation, stacking multiplicatively and applied multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stacks_multiply": true,
        "off_when_benched": true,
        "effect_string": "buff_upgrade_per_any_tagged_crusader_mult,100,11539,lawful"
    }],
    "requirements": "",
    "description": {"desc": "$source increases the damage bonus of $(upgrade_name id) by $(not_buffed amount)% for each Lawful Champion in the formation, stacking multiplicatively and applied multiplicatively."},
    "id": 1546,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "spec_option_post_apply_info": "Lawful Champions: $num_stacks",
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
| 1 | `Armor` | Unknown |
| 2 | `Book` | Unknown |
| 3 | `Dice` | Unknown |
| 4 | `DM Screen` | Unknown |
| 5 | `Weapon` | Unknown |
| 6 | `Zombie Minions` | Unknown |

# Feats

Unknown.

# Legendaries

Unknown.

# Console Portrait

![Console Portrait](images/bbeg/console.png)

# Chests

| Gold | Silver |
|---|---|
| ![Gold Chest](images/bbeg/chest_gold.png) | ![Silver Chest](images/bbeg/chest_silver.png) |

[Back to Top](#top)

*Last Modified: {{ site.time }}*