[Back to Main](index.md)


![Profile Picture](images/portrait_imoen.png)

# Imoen

Imoen is a surprisingly cheerful young woman considering she eventually discovered that she was the child of a deadly murder god. As an orphan, she moved to Candlekeep at the age of 10 with her adoptive father and innkeeper, Winthrop. She eventually traveled to Baldur's Gate with a childhood friend, where she joined forces with powerful Champions like Minsc and Jaheria.

# Basic Information

Imoen will be the new champion in the Wintershield event on 21 December 2022.

* Seat: 11
* Race: Human
* Class: Rogue / Wizard
* Roles: Support / Healing
* Gender: Female
* Alignment: Neutral Good
* Affiliation: Heroes of Baldur's Gate

| Stat | Value | Day 1 Trials | Patrons |
|---|---|---|---|
| Strength | 9 | Yes | Mirt |
| Dexterity | 18 | Yes | Vajra |
| Constitution | 16 | Yes | Strahd |
| Intelligence | 17 | Yes | Zariel (with Feat) |
| Wisdom | 11 | Yes | |
| Charisma | 16 | Yes | |

# Formation

![Formation Layout](images/formation_imoen.png)

# Abilities

**Base Attack: Short Bow**
> Imoen shoots a random enemy with her bow.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Imoen shoots a random enemy with her bow.",
    "long_description": "",
    "damage_modifier": 1,
    "damage_types": ["ranged"],
    "graphic_id": 0,
    "target": "favored_or_random",
    "aoe_radius": 0,
    "tags": ["ranged"],
    "num_targets": 1,
    "animations": [{
        "cast_frame": 20,
        "cast_offset": {
            "x": 35,
            "y": -60
        },
        "hit_sound": 133,
        "arrow_details": {
            "has_trail": true,
            "target_offset_y": -40,
            "target_offset_x": -20,
            "projectile_graphic_id": 17195,
            "extend_line": true,
            "projectile_speed": 2400
        },
        "attack_sounds": {
            "cast": 149,
            "shoot": 169
        },
        "cast_sequence_name": "special",
        "special_melee": "imoen",
        "extra_bud_damage": {
            "if_has_any_upgrade": [
                9643,
                9644,
                9645,
                9646
            ],
            "seconds_worth": 5
        },
        "shoot_offset": {
            "x": 55,
            "y": -110
        },
        "type": "melee_attack",
        "shoot_sequence_name": "attack",
        "shoot_frame": 10
    }],
    "name": "Short Bow",
    "cooldown": 3.5,
    "id": 576
}
</pre>
</p>
</details>
<br />

**Ultimate Attack: Disarm Traps (Level: 100)**
> Imoen leaps out into the fray, attacking five enemies in sequence with her short sword in one hand and her lockpicks in the other. She prioritizes enemies with hits-based health and deals 5 hits per attack; if no hits-based enemies are available she deals normal ultimate damage to enemies she attacks.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Imoen attacks five enemies, hitting each 5 times. She prioritizes hits-based enemies.",
    "long_description": "Imoen leaps out into the fray, attacking five enemies in sequence with her short sword in one hand and her lockpicks in the other. She prioritizes enemies with hits-based health and deals 5 hits per attack; if no hits-based enemies are available she deals normal ultimate damage to enemies she attacks.",
    "damage_modifier": 0.0060000000000000001,
    "damage_types": ["melee"],
    "graphic_id": 17150,
    "target": "random",
    "aoe_radius": 0,
    "tags": [
        "ultimate",
        "melee"
    ],
    "num_targets": 1,
    "animations": [{
        "hit_frames": [
            13,
            20,
            27,
            33,
            39
        ],
        "attack_count": 5,
        "seqs": {
            "attack": 5,
            "start": 8,
            "finish": 9
        },
        "attack_sounds": [
            154,
            189
        ],
        "ultimate": "imoen",
        "animation_sequence_name": "ultimate",
        "type": "ultimate_attack"
    }],
    "name": "Disarm Traps",
    "cooldown": 350,
    "id": 577
}
</pre>
</p>
</details>
<br />

**Optimism (Level: 10)**
> Imoen increases the damage of adjacent Champions by `$(amount)%`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "static_dps_mult": null,
    "required_level": 10,
    "effect": "effect_def,1295",
    "tip_text": "Imoen buffs the champions adjacent to her.",
    "name": "Optimism",
    "id": 9639,
    "hero_id": 117,
    "upgrade_type": "unlock_ability",
    "default_enabled": 1,
    "required_upgrade_id": 0
}
{
    "effect_keys": [{
        "effect_string": "hero_dps_multiplier_mult,400",
        "targets": ["adj"]
    }],
    "requirements": "",
    "description": {"desc": "$(source_hero) increases the damage of adjacent Champions by $(amount)%."},
    "id": 1295,
    "flavour_text": "",
    "graphic_id": 17142,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<br />

**Perseverance (Level: 60)**
> Any time any Champion's Favored Foe appears or is defeated, Imoen increases the effect of Optimism by `$(not_buffed amount)%`, stacking multiplicatively and then applying multiplicatively. Stacks up to `$(max_stacks)` times. Stacks are reset each time the Champions change areas.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "static_dps_mult": null,
    "required_level": 60,
    "effect": "effect_def,1296",
    "tip_text": "Imoen increases her buff any time a Favored Foe appears or is defeated.",
    "name": "Perseverance",
    "id": 9640,
    "hero_id": 117,
    "upgrade_type": "unlock_ability",
    "default_enabled": 1,
    "required_upgrade_id": 0
}
{
    "effect_keys": [{
        "stack_title": "Perseverance Stacks",
        "stacks_multiply": true,
        "show_bonus": true,
        "effect_string": "buff_upgrade,50,9639",
        "more_triggers": [
            {
                "action": {"type": "add_stack"},
                "trigger": "favored_foe_killed"
            },
            {
                "action": {"type": "reset"},
                "trigger": "area_changed"
            }
        ],
        "max_stacks": 50,
        "stacks_on_trigger": "favored_foe_spawned"
    }],
    "requirements": "",
    "description": {"desc": "Any time any Champion's Favored Foe appears or is defeated, $(source_hero) increases the effect of $(upgrade_name id) by $(not_buffed amount)%, stacking multiplicatively and then applying multiplicatively. Stacks up to $(max_stacks) times. Stacks are reset each time the Champions change areas."},
    "id": 1296,
    "flavour_text": "",
    "graphic_id": 17143,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<br />

**Stoneskin (Level: 80)**
> Before every eighth attack, or upon entering a new area, Imoen casts Stoneskin on all Champions in the front-most column of the formation, granting them `$(not_buffed amount)` temporary hit points. The amount is increased by 5% (additively) for each Favored Foe that is alive.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "static_dps_mult": null,
    "required_level": 80,
    "effect": "effect_def,1298",
    "name": "Stoneskin",
    "id": 9642,
    "hero_id": 117,
    "upgrade_type": "unlock_ability",
    "default_enabled": 1,
    "required_upgrade_id": 0
}
{
    "effect_keys": [
        {
            "attacks_per_cast": 8,
            "effect_string": "imoen_stoneskin,300"
        },
        {
            "stack_title": "Favored Foe Count",
            "stacks_multiply": false,
            "total_title": "Total Favored Foe Bonus",
            "show_bonus": true,
            "only_favored_foes": true,
            "effect_string": "buff_upgrade,5,9642,0",
            "stacks_from_amount_func": "monsters_on_screen"
        }
    ],
    "requirements": "",
    "description": {
        "pre": "Before every eighth attack, or upon entering a new area, $(source_hero) casts Stoneskin on all Champions in the front-most column of the formation, granting them $(not_buffed amount) temporary hit points. The amount is increased by 5% (additively) for each Favored Foe that is alive.",
        "conditions": [{
            "condition": "not static_desc",
            "desc": "^^Total Temporary Hit Points: $(amount)"
        }]
    },
    "id": 1298,
    "flavour_text": "",
    "graphic_id": 17145,
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

**Polymorph (Level: 130)**
> Before every third attack, Imoen polymorphs a random non-boss non-static enemy into a monster with the same type as her Favored Foe, but only 10% of its original health. She can not polymorph enemies that are already polymorphed by this ability a second time.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "static_dps_mult": null,
    "required_level": 130,
    "effect": "effect_def,1297",
    "name": "Polymorph",
    "id": 9641,
    "hero_id": 117,
    "upgrade_type": "unlock_ability",
    "default_enabled": 1,
    "required_upgrade_id": 0
}
{
    "effect_keys": [{
        "filter_targets_by_tags": "!imoen_polymorphed^!boss^!static",
        "attacks_per_cast": 3,
        "effect_string": "imoen_polymorph",
        "polymorphed_monsters": {
            "monstrosity": 1870,
            "aberration": 1871,
            "beast": 1868,
            "dragon": 1869
        }
    }],
    "requirements": "",
    "description": {"desc": "Before every third attack, $(source_hero) polymorphs a random non-boss non-static enemy into a monster with the same type as her Favored Foe, but only 10% of its original health. She can not polymorph enemies that are already polymorphed by this ability a second time."},
    "id": 1297,
    "flavour_text": "",
    "graphic_id": 17144,
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

**Aberration Slaying Arrows (Level: 40)**
> Aberration enemies become Imoen's Favored Foe. Her Short Bow attacks against Aberration enemies deal an additional BUD-based damage with each hit.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "static_dps_mult": null,
    "specialization_name": "Aberration Slaying Arrows",
    "required_level": 40,
    "effect": "effect_def,1302",
    "name": "Aberration Slaying Arrows",
    "specialization_graphic_id": 17146,
    "id": 9646,
    "hero_id": 117,
    "upgrade_type": "unlock_ability",
    "default_enabled": 1,
    "required_upgrade_id": 0,
    "specialization_description": "Imoen favors slaying aberrations, increasing her damage against them."
}
{
    "effect_keys": [{
        "off_when_benched": true,
        "effect_string": "favored_foe,aberration"
    }],
    "requirements": "",
    "description": {"desc": "Aberration enemies become Imoen's Favored Foe. Her Short Bow attacks against Aberration enemies deal an additional BUD-based damage with each hit."},
    "id": 1302,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
<br />

**Beast Slaying Arrows (Level: 40)**
> Beast enemies become Imoen's Favored Foe. Her Short Bow attacks against Beast enemies deal an additional BUD-based damage with each hit.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "static_dps_mult": null,
    "specialization_name": "Beast Slaying Arrows",
    "required_level": 40,
    "effect": "effect_def,1299",
    "name": "Beast Slaying Arrows",
    "specialization_graphic_id": 17147,
    "id": 9643,
    "hero_id": 117,
    "upgrade_type": "unlock_ability",
    "default_enabled": 1,
    "required_upgrade_id": 0,
    "specialization_description": "Imoen favors slaying beasts, increasing her damage against them."
}
{
    "effect_keys": [{
        "off_when_benched": true,
        "effect_string": "favored_foe,beast"
    }],
    "requirements": "",
    "description": {"desc": "Beast enemies become Imoen's Favored Foe. Her Short Bow attacks against Beast enemies deal an additional BUD-based damage with each hit."},
    "id": 1299,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
<br />

**Dragon Slaying Arrows (Level: 40)**
> Dragon enemies become Imoen's Favored Foe. Her Short Bow attacks against Dragon enemies deal an additional BUD-based damage with each hit.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "static_dps_mult": null,
    "specialization_name": "Dragon Slaying Arrows",
    "required_level": 40,
    "effect": "effect_def,1300",
    "name": "Dragon Slaying Arrows",
    "specialization_graphic_id": 17148,
    "id": 9644,
    "hero_id": 117,
    "upgrade_type": "unlock_ability",
    "default_enabled": 1,
    "required_upgrade_id": 0,
    "specialization_description": "Imoen favors slaying dragons, increasing her damage against them."
}
{
    "effect_keys": [{
        "off_when_benched": true,
        "effect_string": "favored_foe,dragon"
    }],
    "requirements": "",
    "description": {"desc": "Dragon enemies become Imoen's Favored Foe. Her Short Bow attacks against Dragon enemies deal an additional BUD-based damage with each hit."},
    "id": 1300,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
<br />

**Monstrosity Slaying Arrows (Level: 40)**
> Monstrosity enemies become Imoen's Favored Foe. Her Short Bow attacks against Monstrosity enemies deal an additional BUD-based damage with each hit.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "static_dps_mult": null,
    "specialization_name": "Monstrosity Slaying Arrows",
    "required_level": 40,
    "effect": "effect_def,1301",
    "name": "Monstrosity Slaying Arrows",
    "specialization_graphic_id": 17149,
    "id": 9645,
    "hero_id": 117,
    "upgrade_type": "unlock_ability",
    "default_enabled": 1,
    "required_upgrade_id": 0,
    "specialization_description": "Imoen favors slaying monstrosities, increasing her damage against them."
}
{
    "effect_keys": [{
        "off_when_benched": true,
        "effect_string": "favored_foe,monstrosity"
    }],
    "requirements": "",
    "description": {"desc": "Monstrosity enemies become Imoen's Favored Foe. Her Short Bow attacks against Monstrosity enemies deal an additional BUD-based damage with each hit."},
    "id": 1301,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
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

| Slot | Epic Name | Type |
|---|---|---|
| 1 | `Sword of Power` | All Champion Damage |
| 2 | `Protector of the Dryads Bow` | Optimism |
| 3 | `Arrows of Slaying` | Perseverance |
| 4 | `Tome of Magic` | Stoneskin |
| 5 | `Master Thief's Set` | Ultimate Damage |
| 6 | `Trickster's Armor` | Ultimate Cooldown Reduction |

# Feats

| Feat | Effect | Source |
|---|---|---|
| `Selflessness` | 10% All Champion Damage | Free |
| `Inspiring Leader` | 25% All Champion Damage | Gold Chest |
| `Lighten Up!` | 20% Optimism | Free |
| `Happier Times` | 40% Optimism | 12,500 Gems |
| `Tenacious` | 40% Perseverance | Gold Chest |
| `Indefatigable` | 80% Perseverance | 50,000 Gems |
| `Armor of Magic` | 20% Stoneskin | Free |
| `Toughen Up!` | 40% Stoneskin | 12,500 Gems |
| `I Lift Books` | Stat: +1 Strength | Gold Chest |

# Legendaries

* Increases the damage of all Champions by 100%.
* Increases the damage of all Champions by 20% for each Male Champion in the formation.
* Increases the damage of all Human Champions by 150%.
* Increases the damage of all Champions with a CHA score of 11 or higher by 100%.
* Increases the damage of all Champions with a CON score of 13 or higher by 150%.
* Increases the damage of all Good Champions by 150%.

[Back to Top](#top)

*Last Modified: {{ site.time }}*