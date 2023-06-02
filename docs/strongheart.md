[Back to Main](index.md)

![PC Portrait](images/strongheart/portrait.png)

# Strongheart

Info from a wiki.
> Strongheart was a good paladin in Dungeons & Dragons, best known as an enemy and former friend of the evil Warduke. He first appeared as an action figure in the line of Advanced Dungeons & Dragons poseable player characters, and later in the game supplements Quest for the Heartstone and The Shady Dragon Inn. He wields a +2 magic sword called Purlblade.

[https://rpgmuseum.fandom.com/wiki/Strongheart](https://rpgmuseum.fandom.com/wiki/Strongheart)

# Basic Information

Strongheart will be the new champion in the Founder's Day event on 28 June 2023.

* Seat: Unknown
* Race: Human (Guess)
* Class: Paladin (Guess)
* Roles: Unknown
* Age: Unknown
* Gender: Male (Guess)
* Alignment: Unknown Good (Guess)
* Affiliation: Unknown
* Stats: Unknown

# Formation

![Formation Layout](images/strongheart/formation.png)

# Abilities

**Base Attack: Steel** (Melee)
> Strongheart attacks the closest enemy with his sword, Steel, dealing one hit.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Strongheart attacks the closest enemy with his sword, Steel, dealing one hit.",
    "long_description": "",
    "damage_modifier": 1,
    "damage_types": ["melee"],
    "graphic_id": 0,
    "target": "front",
    "aoe_radius": 0,
    "tags": ["melee"],
    "num_targets": 1,
    "animations": [{
        "damage_frame": 2,
        "jump_sound": 30,
        "sound_frames": {"2": 154},
        "target_offset_x": -34,
        "type": "melee_attack"
    }],
    "name": "Steel",
    "cooldown": 4.5,
    "id": 641
}
</pre>
</p>
</details>
<br />

**Ultimate Attack: Command: Yield!**
> Strongheart moves forward and Commands the enemy with the most health to Yield, stunning it for 6 seconds. While it is stunned, all attacks against the enemy deal additional 15 seconds worth of BUD.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Strongheart commands the enemy with the most health to Yield. It is stunned and all attacks deal additional BUD damage.",
    "long_description": "Strongheart moves forward and Commands the enemy with the most health to Yield, stunning it for 6 seconds. While it is stunned, all attacks against the enemy deal additional 15 seconds worth of BUD.",
    "damage_modifier": 0,
    "damage_types": ["magic"],
    "graphic_id": 19785,
    "target": "highest_health_exclude_blockers",
    "aoe_radius": 0,
    "tags": ["ultimate"],
    "num_targets": 1,
    "animations": [{
        "damage_frame": 8,
        "effect_frames": {"hit": {
            "duration": 6,
            "overlay_graphic_offset_y": -60,
            "effect_string": "monster_bud_damage,15",
            "apply_to_hit_monsters": true,
            "overlay_graphic_id": 19796
        }},
        "target_offset_x": -200,
        "stun_on_hit": 6,
        "animation_sequence_name": "ultimate",
        "type": "melee_attack",
        "no_damage_display": true
    }],
    "name": "Command: Yield!",
    "cooldown": 150,
    "id": 642
}
</pre>
</p>
</details>
<br />

**Justice Needs Champions**
> Strongheart increases the damage of all adjacent Champions by `$amount%`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "effect_string": "hero_dps_multiplier_mult,100",
        "targets": ["adj"]
    }],
    "requirements": "",
    "description": {"desc": "$source increases the damage of all adjacent Champions by $amount%."},
    "id": 1569,
    "flavour_text": "",
    "graphic_id": 19779,
    "properties": {"is_formation_ability": true}
}
</pre>
</p>
</details>
<br />

**Seasoned Knight**
> Season Quest progress made by Strongheart's party is increased by `$amount%`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "off_when_benched": true,
        "outgoing_buffs": false,
        "effect_string": "buff_season_challenge_progress,100"
    }],
    "requirements": "",
    "description": {"desc": "Season Quest progress made by $source's party is increased by $amount%."},
    "id": 1570,
    "flavour_text": "",
    "graphic_id": 19781,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<br />

**Courage to Stand**
> Strongheart heals champions affected by Justice Needs Champions for `$amount health per second`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "formation_arrows_for_effected_only": true,
        "off_when_benched": true,
        "slot_change_updates_targets": true,
        "effect_string": "heal,2",
        "filter_targets": [{
            "upgrade_id": 11736,
            "type": "affected_by_upgrade"
        }],
        "targets": ["all"]
    }],
    "requirements": "",
    "description": {"desc": "$source heals champions affected by Justice Needs Champions for $amount health per second."},
    "id": 1571,
    "flavour_text": "",
    "graphic_id": 19778,
    "properties": {"is_formation_ability": true}
}
</pre>
</p>
</details>
<br />

**Righteous Might**
> Whenever Strongheart lands a critical hit, for the next 20 seconds he increases the damage of `$(upgrade_name id)` by `$(amount___4)%`, increases the healing amount of `$(upgrade_name id___2)` by `$(amount___2)%`, and reduces the base attack speed cooldown of himself and Champions affected by Justice Needs Champions by `$(amount___3)` seconds.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "amount_expr": "upgrade_amount(11739,3)",
            "current_value_bonus_desc": "Damage Buff: $(bonus)%",
            "stacks_multiply": true,
            "show_bonus": true,
            "outgoing_buffs": false,
            "effect_string": "buff_upgrade,0,11736",
            "stacks_on_trigger": "will_stack_manually",
            "skip_effect_key_desc": true
        },
        {
            "current_value_bonus_desc": "Healing Buff: $(bonus)%",
            "stacks_multiply": true,
            "show_bonus": true,
            "effect_string": "buff_upgrade,100,11738",
            "stacks_on_trigger": "will_stack_manually",
            "skip_effect_key_desc": true
        },
        {
            "stacks_multiply": false,
            "show_bonus": true,
            "effect_string": "reduce_attack_cooldown,0.5",
            "filter_targets": [{
                "include_upgrade_owner": true,
                "upgrade_id": 11736,
                "type": "affected_by_upgrade"
            }],
            "stacks_on_trigger": "will_stack_manually",
            "targets": ["all"]
        },
        {
            "effect_string": "pre_stack_amount,400",
            "skip_effect_key_desc": true
        },
        {
            "duration": 20,
            "underlay_offset_y": -2,
            "effect_string": "strongheart_righteous_might",
            "underlay_graphic": 19795,
            "underlay_state_max": 10,
            "underlay_offset_x": -2,
            "skip_effect_key_desc": true
        }
    ],
    "requirements": "",
    "description": {
        "pre": "Whenever $source lands a critical hit, for the next 20 seconds he increases the damage of $(upgrade_name id) by $(amount___4)%, increases the healing amount of $(upgrade_name id___2) by $(amount___2)%, and reduces the base attack speed cooldown of himself and Champions affected by Justice Needs Champions by $(amount___3) seconds.",
        "conditions": [{
            "condition": "not static_desc",
            "desc": "^^$(strongheart_rightous_might_stack_desc)"
        }]
    },
    "id": 1572,
    "flavour_text": "",
    "graphic_id": 19780,
    "properties": {
        "indexed_effect_properties": true,
        "retain_on_slot_changed": true,
        "is_formation_ability": true,
        "owner_use_outgoing_description": false,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
<br />

**Unknown**
> Strongheart's base chance to Critical Hit is `$amount%`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{"effect_string": "set_base_crit_chance,20"}],
    "requirements": "",
    "description": {"desc": "$source's base chance to Critical Hit is $amount%."},
    "id": 1568,
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

**Specialisation: Valor's Call** (Guess)
> Strongheart increases the damage bonus of `$(upgrade_name id)` by `$(not_buffed amount)%` for each good Champion in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stack_title": "Good Champions",
        "stacks_multiply": true,
        "show_bonus": true,
        "effect_string": "buff_upgrade_by_tag_mult,100,good,11736",
        "max_stacks": 10
    }],
    "requirements": "",
    "description": {"desc": "$source increases the damage bonus of $(upgrade_name id) by $(not_buffed amount)% for each good Champion in the formation, stacking multiplicatively."},
    "id": 1573,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "spec_option_post_apply_info": "Good Champions: $num_stacks",
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
<br />

**Specialisation: A Just Quest** (Guess)
> Strongheart increases the damage bonus of `$(upgrade_name id)` by `$(not_buffed amount)%` for each Season Level you have gained in the current Season, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "stack_title": "Season Levels",
            "amount_updated_listeners": ["season_level_changed"],
            "stacks_multiply": true,
            "show_bonus": true,
            "amount_func": "mult",
            "stack_func": "per_season_level",
            "effect_string": "buff_upgrade,12.5,11736"
        },
        {"effect_string": "strongheart_a_just_quest"}
    ],
    "requirements": "",
    "description": {"desc": "$source increases the damage bonus of $(upgrade_name id) by $(not_buffed amount)% for each Season Level you have gained in the current Season, stacking multiplicatively."},
    "id": 1574,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "indexed_effect_properties": true,
        "retain_on_slot_changed": true,
        "is_formation_ability": true,
        "spec_option_post_apply_info": "Season Level: $num_stacks",
        "default_bonus_index": 0,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": false,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
<br />

**Specialisation: Honorary Member** (Guess)
> Strongheart gains the affiliation(s) of the most populous affiliation(s) in the formation, and increases the damage bonus of `$(upgrade_name id)` by `$(not_buffed amount)%` for each Champion from the affiliation(s), stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "stacks_multiply": true,
            "show_bonus": true,
            "effect_string": "buff_upgrade,150,11736",
            "stacks_on_trigger": "will_stack_manually"
        },
        {"effect_string": "strongheart_gain_affiliation"}
    ],
    "requirements": "",
    "description": {
        "pre": "$(source_hero) gains the affiliation(s) of the most populous affiliation(s) in the formation, and increases the damage bonus of $(upgrade_name id) by $(not_buffed amount)% for each Champion from the affiliation(s), stacking multiplicatively.",
        "conditions": [{
            "condition": "not static_desc",
            "desc": "^^$(strongheart_honorary_member_tag_desc)"
        }]
    },
    "id": 1575,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "indexed_effect_properties": true,
        "retain_on_slot_changed": true,
        "is_formation_ability": true,
        "default_bonus_index": 0,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": false,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
<br />

# Items

| Icon | Name | Type |
|:-:|---|---|
| ![Adventuring Equipment Icon](images/strongheart/19746.png) | `Adventuring Equipment` | Unknown |
| ![Armor Icon](images/strongheart/19749.png) | `Armor` | Unknown |
| ![Helmet Icon](images/strongheart/19752.png) | `Helmet` | Unknown |
| ![Horse Stuff Icon](images/strongheart/19755.png) | `Horse Stuff` | Unknown |
| ![Lookin Good Stuff Icon](images/strongheart/19758.png) | `Lookin Good Stuff` | Unknown |
| ![Weapons Icon](images/strongheart/19761.png) | `Weapons` | Unknown |

# Feats

Unknown.

# Legendaries

Unknown.

# Console Portrait

![Console Portrait](images/strongheart/console.png)

# Chests

| Gold | Silver |
|---|---|
| ![Gold Chest](images/strongheart/chest_gold.png) | ![Silver Chest](images/strongheart/chest_silver.png) |

[Back to Top](#top)

*Last Modified: {{ site.time }}*