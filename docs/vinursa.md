[Back to Main](index.md)

![PC Portrait](images/vinursa/portrait.png)

# Vin Ursa

She's been confirmed on the Server Maintenance Stream by Chris Dupuis to be a CNE Original Female Plasmoid champion. Beyond that - we know nothing.

# Basic Information

Vin Ursa will be the new champion in the Midsummer event on 26 July 2023.

* Seat: Unknown
* Race: Plasmoid
* Class: Unknown
* Roles: Unknown
* Age: Unknown
* Gender: Female
* Alignment: Unknown
* Affiliation: Unknown
* Stats: Unknown

# Formation

Unknown.
{% comment %}
![Formation Layout](images/vinursa/formation.png)
{% endcomment %}

# Abilities

**Base Attack: L.A.S.E.R.** (Ranged)
> Vin Ursa uses her Light Accelerating Spectral Energy Relay to attack a random enemy.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Vin Ursa uses her Light Accelerating Spectral Energy Relay to attack a random enemy.",
    "long_description": "",
    "damage_modifier": 1,
    "damage_types": ["ranged"],
    "graphic_id": 0,
    "target": "random",
    "aoe_radius": 0,
    "tags": ["ranged"],
    "num_targets": 1,
    "animations": [{
        "projectile_details": {
            "projectile_hit_graphic_id": 1701,
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
                "lifespan": 0.15,
                "initial_velocity": {
                    "x": 0,
                    "y": 0
                },
                "alpha_lerp": [
                    1,
                    0
                ],
                "tint": "#FF0000FF",
                "particle_graphic_ids": [20030],
                "spawn_rate": 150,
                "velocity_jitter": {
                    "x": 0,
                    "y": 0
                }
            },
            "projectile_graphic_id": 20030,
            "projectile_speed": 3000,
            "hash": "ffb4e488d56e318d1834e7dbfb10fc09"
        },
        "hit_sound": 133,
        "shoot_offset_y": -15,
        "shoot_offset_x": 10,
        "shoot_sound": 149,
        "type": "ranged_attack",
        "projectile": "pd_generic_projectile",
        "shoot_frame": 8
    }],
    "name": "L.A.S.E.R.",
    "cooldown": 8,
    "id": 649
}
</pre>
</p>
</details>
<br />

**Ultimate Attack: Target Acquisition**
> Vin Ursa blasts an enemy, preferring to target non-Favored Foes, and, if she crits, makes that enemy type a Favored Foe.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Vin Ursa blasts an enemy and makes that enemy type a Favored Foe if she crits.",
    "long_description": "Vin Ursa blasts an enemy, preferring to target non-Favored Foes, and, if she crits, makes that enemy type a Favored Foe.",
    "damage_modifier": 1,
    "damage_types": ["ranged"],
    "graphic_id": 20019,
    "target": "vin_ursa_random_prefer_non_favored",
    "aoe_radius": 0,
    "tags": [
        "ranged",
        "ultimate"
    ],
    "num_targets": 1,
    "animations": [{
        "ultimate": "vin_ursa",
        "hit_offset": [
            0,
            -50
        ],
        "shoot_offset": [
            50,
            -77
        ],
        "type": "ultimate_attack"
    }],
    "name": "Target Acquisition",
    "cooldown": 240,
    "id": 650
}
</pre>
</p>
</details>
<br />

**Bounty Hunter**
> Vin Ursa picks a random monster type from a monster in the current adventure as her Favored Foe for the current adventure. Her Favored Foes drop `$(amount___2)%` extra gold and all Champions deal `$(amount___3)%` damage to them.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "vin_ursa_bounty_hunter"
        },
        {
            "off_when_benched": true,
            "effect_string": "increase_monster_damage_if_favored_foe_from_hero_id,100,128"
        },
        {
            "off_when_benched": true,
            "effect_string": "increase_monster_gold_if_favored_foe_from_hero_id,100,128"
        }
    ],
    "requirements": "",
    "description": {
        "pre": "$source picks a random monster type from a monster in the current adventure as her Favored Foe for the current adventure. Her Favored Foes drop $(amount___2)% extra gold and all Champions deal $(amount___3)% damage to them.",
        "conditions": [{
            "condition": "not static_desc",
            "desc": "^^Favored Foes: $(vin_ursa_bounty_hunter_discovered)^Undiscovered Foes: $(vin_ursa_bounty_hunter_undiscovered)"
        }]
    },
    "id": 1585,
    "flavour_text": "",
    "graphic_id": 20011,
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

**Vicious Vantage**
> Vin Ursa increases the effect of your Deck specialization by `$(amount)%` for each Favored Foe she has, stacking multiplicatively. Buffs apply to the pre-stack multiplier.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "pre_stack_amount,100"
        },
        {
            "amount_expr": "upgrade_amount(12088,0)",
            "stack_title": "Favored Foe Count",
            "amount_updated_listeners": ["vin_ursa_favored_foe_count_changed"],
            "stacks_multiply": true,
            "off_when_benched": true,
            "show_bonus": true,
            "amount_func": "mult",
            "stack_func": "per_vin_ursa_favored_foe",
            "outgoing_buffs": false,
            "effect_string": "buff_upgrades,0,12090,12091"
        }
    ],
    "requirements": "",
    "description": {"desc": "$source increases the effect of your Deck specialization by $(amount)% for each Favored Foe she has, stacking multiplicatively. Buffs apply to the pre-stack multiplier."},
    "id": 1586,
    "flavour_text": "",
    "graphic_id": 20013,
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

**Friends in High Places**
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
</pre>
</p>
</details>
<br />

**Unknown**
> Whenever you use a Bounty Contract with Vin Ursa in the formation, Vin Ursa increases the effect of your Deck specialization by `$(not_buffed amount)%` until the end of the current adventure, stacking multiplicatively. Caps at 100 stacks.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "stack_title": "Bounty Contracts Used",
            "stacks_multiply": true,
            "off_when_benched": true,
            "show_bonus": true,
            "effect_string": "buff_upgrades,25,12090,12091",
            "max_stacks": 100,
            "stacks_on_trigger": "bounty_contract_used"
        },
        {
            "off_when_benched": true,
            "is_instanced_stat": true,
            "use_stat_defs": true,
            "effect_string": "stacks_data_binder_safe,0,vin_ursa_contract_stacks"
        }
    ],
    "requirements": "",
    "description": {"desc": "Whenever you use a Bounty Contract with $source in the formation, Vin Ursa increases the effect of your Deck specialization by $(not_buffed amount)% until the end of the current adventure, stacking multiplicatively. Caps at 100 stacks."},
    "id": 1587,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<br />

**Unknown**
> Vin Ursa can be used in any Light of Xaryxis campaign adventure or variant, even if she would not normally be available to be used due to variant or patron restrictions.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{"effect_string": "do_nothing"}],
    "requirements": "",
    "description": {"desc": "$source can be used in any Light of Xaryxis campaign adventure or variant, even if she would not normally be available to be used due to variant or patron restrictions."},
    "id": 1584,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {"is_formation_ability": true}
}
</pre>
</p>
</details>
<br />

# Specialisations

**Specialisation: Front Deck** (Guess)
> Vin Ursa increases the damage of all champions in the front two columns by `$(amount)%`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "off_when_benched": true,
        "effect_string": "hero_dps_multiplier_mult,100",
        "targets": ["front_2_columns"]
    }],
    "requirements": "",
    "description": {"desc": "$source increases the damage of all champions in the front two columns by $(amount)%."},
    "id": 1588,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {"is_formation_ability": true}
}
</pre>
</p>
</details>
<br />

**Specialisation: Rear Deck** (Guess)
> Vin Ursa increases the damage of all champions in the read two columns by `$(amount)%`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "off_when_benched": true,
        "effect_string": "hero_dps_multiplier_mult,100",
        "targets": ["back_2_columns"]
    }],
    "requirements": "",
    "description": {"desc": "$source increases the damage of all champions in the read two columns by $(amount)%."},
    "id": 1589,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {"is_formation_ability": true}
}
</pre>
</p>
</details>
<br />

**Specialisation: Friend in High Places** (Guess)
> Vin Ursa increases the damage of Good Champions by `$(amount)%`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "off_when_benched": true,
        "effect_string": "hero_dps_multiplier_mult,100",
        "filter_targets": [{
            "type": "by_tags",
            "tags": "good"
        }],
        "targets": ["all"]
    }],
    "requirements": "",
    "description": {"desc": "$source increases the damage of Good Champions by $(amount)%."},
    "id": 1592,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "spec_option_post_apply_info": "Champions in Formation Targeted: $num_targets"
    }
}
</pre>
</p>
</details>
<br />

**Specialisation: Friend in Low Places** (Guess)
> Vin Ursa increases the damage of Evil Champions by `$(amount)%`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "off_when_benched": true,
        "effect_string": "hero_dps_multiplier_mult,100",
        "filter_targets": [{
            "type": "by_tags",
            "tags": "evil"
        }],
        "targets": ["all"]
    }],
    "requirements": "",
    "description": {"desc": "$source increases the damage of Evil Champions by $(amount)%."},
    "id": 1590,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "spec_option_post_apply_info": "Champions in Formation Targeted: $num_targets"
    }
}
</pre>
</p>
</details>
<br />

**Specialisation: Friend in Meh Places** (Guess)
> Vin Ursa increases the damage of Neutral (Good/Evil axis) Champions by `$(amount)%`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "off_when_benched": true,
        "effect_string": "hero_dps_multiplier_mult,100",
        "filter_targets": [{
            "type": "by_tags",
            "tags": "geneutral"
        }],
        "targets": ["all"]
    }],
    "requirements": "",
    "description": {"desc": "$source increases the damage of Neutral (Good/Evil axis) Champions by $(amount)%."},
    "id": 1591,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "spec_option_post_apply_info": "Champions in Formation Targeted: $num_targets"
    }
}
</pre>
</p>
</details>
<br />

# Items

| Icon | Name | Type |
|:-:|---|---|
| ![Bounty Hunter Items Icon](images/vinursa/20051.png) | `Bounty Hunter Items` | Unknown |
| ![Coat Icon](images/vinursa/20054.png) | `Coat` | Unknown |
| ![Hat Icon](images/vinursa/20057.png) | `Hat` | Unknown |
| ![Memento Icon](images/vinursa/20060.png) | `Memento` | Unknown |
| ![Tankard Icon](images/vinursa/20063.png) | `Tankard` | Unknown |
| ![Wrist Weapon Icon](images/vinursa/20066.png) | `Wrist Weapon` | Unknown |

# Feats

Unknown.

# Legendaries

Unknown.

# Console Portrait

![Console Portrait](images/vinursa/console.png)

# Chests

| Gold | Silver |
|---|---|
| ![Gold Chest](images/vinursa/chest_gold.png) | ![Silver Chest](images/vinursa/chest_silver.png) |

[Back to Top](#top)

*Last Modified: {{ site.time }}*