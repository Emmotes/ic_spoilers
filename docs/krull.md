[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Krull](images/krull/portrait.png)
        </span>
        <span>
            Portrait
        </span>
    </span>
</span>

# Krull

Krull is a death-cleric of Tiamat who swore allegiance to Arkhan the Cruel after being bested by him in combat. He's Arkhan's alchemist, his experimenter, his torturer... Always surrounded by the dead, Krull wears a white painted face mask that makes him look undead in an effort to confuse and strike fear in his opponents.

# Changes

Krull will be a reworked champion in the Simril event on 2 December 2026.

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Attacks

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Krull's Maul** (Guess)
> Krull attacks a random enemy with his Maul.  
> Cooldown: 4.5s (Cap 1.125s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1014,
    "name": "Krull's Maul",
    "description": "Krull attacks a random enemy with his Maul.",
    "long_description": "",
    "graphic_id": 0,
    "target": "random",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 4.5,
    "animations": [
        {
            "type": "melee_attack",
            "target_offset_x": -100,
            "damage_frame": 4
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
**Base Attack: Necrotic Touch** (Guess)
> Krull attacks a random enemy with his Maul. Adding a Plague if possible, or adding 2 stacks to each of their Plagues.  
> Cooldown: 4.5s (Cap 1.125s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1015,
    "name": "Necrotic Touch",
    "description": "Krull attacks a random enemy with his Maul. Adding a Plague if possible, or adding 2 stacks to each of their Plagues.",
    "long_description": "",
    "graphic_id": 0,
    "target": "random",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 4.5,
    "animations": [
        {
            "type": "melee_attack",
            "target_offset_x": -100,
            "damage_frame": 4
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
**Ultimate: Corrupted Ghouls** (Guess)
> Krull summons four corrupted ghouls that rush towards the nearest enemies and explode, damaging all nearby enemies and leaving behind pools of necrotic goo that last for 30 seconds.  
> Cooldown: 320s (Cap 80s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1013,
    "name": "Corrupted Ghouls",
    "description": "Krull summons four corrupted ghouls that rush towards the nearest enemies and explode.",
    "long_description": "Krull summons four corrupted ghouls that rush towards the nearest enemies and explode, damaging all nearby enemies and leaving behind pools of necrotic goo that last for 30 seconds.",
    "graphic_id": 6801,
    "target": "front",
    "num_targets": 1,
    "aoe_radius": 100,
    "damage_modifier": 0.03,
    "cooldown": 320,
    "animations": [
        {
            "type": "krull_ultimate",
            "ghouls": 4,
            "ghoul_speed": 6,
            "explode_radius": 100,
            "pool_width": 180,
            "pool_height": 120,
            "pool_time": 30,
            "pool_interval": 0.6,
            "damage_per_second_modifier": 0.2
        }
    ],
    "tags": [
        "melee",
        "aoe",
        "ultimate"
    ],
    "damage_types": [
        "melee"
    ]
}
</pre>
</p>
</details>
</div></div>

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> If Krull is in the formation, you may also use Arkhan and Torogar, regardless of whether or not they qualify for the adventure due to variant or patron restrictions.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3040,
    "flavour_text": "",
    "description": {
        "desc": "If Krull is in the formation, you may also use Arkhan and Torogar, regardless of whether or not they qualify for the adventure due to variant or patron restrictions. "
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "force_allow_hero",
            "hero_ids": [
                12,
                69
            ],
            "skip_effect_key_desc": true
        }
    ],
    "requirements": [],
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
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
**Draconic Plague** (Guess)
> Every 5 seconds, Krull applies a draconic plague to the next enemy to spawn. The plagues gain a stack every 3 seconds, increasing their power and capping at 10 stacks. Plagues can also be applied by Krull's base attack.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3041,
    "flavour_text": "",
    "description": {
        "desc": "Every 5 seconds, Krull applies a draconic plague to the next enemy to spawn. The plagues gain a stack every 3 seconds, increasing their power and capping at 10 stacks. Plagues can also be applied by Krull's base attack.^$plague_description"
    },
    "effect_keys": [
        {
            "effect_string": "draconic_plague_v2",
            "skip_effect_key_desc": true,
            "cooldown": 5,
            "base_attack_plague_stack_amount": 2,
            "spec_effect_keys": [
                "plague_focus_pilfer",
                "plague_focus_pain",
                "plague_focus_traitor"
            ]
        },
        {
            "apply_manually": true,
            "effect_string": "effect_def,3046"
        },
        {
            "apply_manually": true,
            "effect_string": "effect_def,3047"
        },
        {
            "apply_manually": true,
            "effect_string": "effect_def,3048"
        },
        {
            "effect_string": "change_base_attack,1015"
        }
    ],
    "requirements": [],
    "graphic_id": 6791,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
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
**Pilfer** (Guess)
> Infected enemy drops 100% more gold per stack.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3046,
    "flavour_text": "",
    "description": {
        "desc": "Infected enemy drops $(amount)% more gold per stack."
    },
    "effect_keys": [
        {
            "effect_string": "increase_monster_gold,100",
            "stacks_on_trigger": "on_timer,3",
            "max_stacks": 10,
            "stacks_multiply": true
        }
    ],
    "requirements": [],
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "effect_name": "{Pilfer}#0F0"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Pain** (Guess)
> Infected enemy takes 100% more damage per stack.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3047,
    "flavour_text": "",
    "description": {
        "desc": "Infected enemy takes $(amount)% more damage per stack."
    },
    "effect_keys": [
        {
            "effect_string": "increase_monster_damage,100",
            "stacks_on_trigger": "on_timer,3",
            "max_stacks": 10,
            "stacks_multiply": true
        }
    ],
    "requirements": [],
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "effect_name": "{Pain}#F00"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Traitor** (Guess)
> When infected enemy is damaged, nearby enemies also receive 20% of that damage per stack.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3048,
    "flavour_text": "",
    "description": {
        "desc": "When infected enemy is damaged, nearby enemies also receive $(amount)% of that damage per stack."
    },
    "effect_keys": [
        {
            "effect_string": "monster_damage_nearby_when_damaged,20",
            "radius": 200,
            "stacks_on_trigger": "on_timer,3",
            "max_stacks": 10,
            "stacks_multiply": true
        }
    ],
    "requirements": [],
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "effect_name": "{Traitor}#F0F"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Virulent Strain** (Guess)
> When an enemy with a Draconic Plague dies there is a 10% chance that its plague(s) will transfer to another enemy. It's possible for an enemy to gain multiple copies of the same plague when this occurs, which will stack multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3049,
    "flavour_text": "",
    "description": {
        "desc": "When an enemy with a Draconic Plague dies there is a $(amount)% chance that its plague(s) will transfer to another enemy. It's possible for an enemy to gain multiple copies of the same plague when this occurs, which will stack multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "virulent_strain,10"
        }
    ],
    "requirements": [],
    "graphic_id": 6793,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
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
**Arkhan's Army** (Guess)
> Krull increases the damage of all Evil Champions in the formation by 100% for each Evil Champion in the formation, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3050,
    "flavour_text": "",
    "description": {
        "desc": "Krull increases the damage of all Evil Champions in the formation by $amount% for each Evil Champion in the formation, stacking multiplicatively"
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,100",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "hero_dps_multiplier_mult,0",
            "off_when_benched": true,
            "amount_expr": "upgrade_amount(21581,0)",
            "amount_func": "mult",
            "targets": [
                "all"
            ],
            "filter_targets": [
                {
                    "type": "by_tags",
                    "tags": "evil"
                }
            ],
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasTag(`evil`)",
            "amount_updated_listeners": [
                "slot_changed",
                "hero_tags_changed"
            ],
            "stack_title": "Evil Champions",
            "use_computed_amount_for_description": true,
            "show_bonus": true
        }
    ],
    "requirements": [],
    "graphic_id": 6790,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
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
**Dark Order Synergy** (Guess)
> Increase the effect of $(upgrade_name id) by 100% for each Dark Order member adjacent to Krull.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3051,
    "flavour_text": "",
    "description": {
        "desc": "Increase the effect of $(upgrade_name id) by $(not_buffed amount)% for each Dark Order member adjacent to $source."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,100,21581,1",
            "stacks_multiply": true,
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "post_process_expr": "AggregateCompareHeroPropertiesByTarget(`adj`, `race`, `sum`) + AggregateCompareHeroPropertiesByTarget(`adj`, `class`, `sum`) + AggregateCompareHeroPropertiesByTarget(`adj`, `alignment_ge`, `sum`) + AggregateCompareHeroPropertiesByTarget(`adj`, `alignment_lc`, `sum`) + AggregateCompareHeroPropertiesByTarget(`adj`, `affiliation`, `sum`)",
            "show_bonus": true,
            "stack_title": "Qualified Champions",
            "amount_updated_listeners": [
                "slot_changed",
                "hero_tags_changed"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 8905,
    "large_graphic_id": 8904,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": false,
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
**The Master's Call** (Guess)
> Krull increases the effect of Arkhan's Bulk Up and Usurped Power abilities by 400%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3055,
    "flavour_text": "",
    "description": {
        "desc": "Krull increases the effect of Arkhan's Bulk Up and Usurped Power abilities by $(amount)%."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrades,400,243,244"
        }
    ],
    "requirements": "",
    "graphic_id": 8905,
    "large_graphic_id": 8904,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0
    }
}
</pre>
</p>
</details>
</div></div>

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Plague Focus: Pilfer** (Guess)
> Krull increases the effect of Plague: Pilfer by 100% and has a 50% higher chance to apply Plague: Pilfer when an enemy spawns or he attacks it.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3052,
    "flavour_text": "",
    "description": {
        "desc": "Krull increases the effect of Plague: Pilfer by $(amount)% and has a $(amount___2)% higher chance to apply Plague: Pilfer when an enemy spawns or he attacks it."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,100,21579,1"
        },
        {
            "effect_string": "plague_focus_pilfer,50",
            "effect_id": 3046
        }
    ],
    "requirements": "",
    "graphic_id": 8905,
    "large_graphic_id": 8904,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
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
**Specialisation: Plague Focus: Pain** (Guess)
> Krull increases the effect of Plague: Pain by 100% and has a 50% higher chance to apply Plague: Pain when an enemy spawns or he attacks it.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3053,
    "flavour_text": "",
    "description": {
        "desc": "Krull increases the effect of Plague: Pain by $(amount)% and has a $(amount___2)% higher chance to apply Plague: Pain when an enemy spawns or he attacks it."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,100,21579,2"
        },
        {
            "effect_string": "plague_focus_pain,50",
            "effect_id": 3047
        }
    ],
    "requirements": "",
    "graphic_id": 8905,
    "large_graphic_id": 8904,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
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
**Specialisation: Plague Focus: Traitor** (Guess)
> Krull increases the effect of Plague: Traitor by 100% and has a 50% higher chance to apply Plague: Traitor when an enemy spawns or he attacks it.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3054,
    "flavour_text": "",
    "description": {
        "desc": "Krull increases the effect of Plague: Traitor by $(amount)% and has a $(amount___2)% higher chance to apply Plague: Traitor when an enemy spawns or he attacks it."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,100,21579,3"
        },
        {
            "effect_string": "plague_focus_traitor,50",
            "effect_id": 3048
        }
    ],
    "requirements": "",
    "graphic_id": 8905,
    "large_graphic_id": 8904,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
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
**Unlock Adventure: The Simril Spoilsport (Krull)** (Complete Area 50)
> Simril is ruined! Someone has pilfered the food supplies!
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Spoiled Staples Icon](images/krull/6802.png) **Variant 1: Spoiled Staples** (Complete Area 75)
> Two barrel wagons take up slots in your formation
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Master Plaguebringer Icon](images/krull/6803.png) **Variant 2: Master Plaguebringer** (Complete Area 125)
> Krull starts in your formation and can not be removed Non-Plagued enemies deal 100% more damage (additive) and move 10% faster (additive) for each enemy on the screen that doesn't have a Plague on them (including themselves)
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![The Creeping Chill Icon](images/krull/6804.png) **Variant 3: The Creeping Chill** (Complete Area 175)
> Every 5 areas, the temperature drops by 5 degrees. For each change in temperature, the enemies get stronger, increasing their health and damage by 100%.
</div></div>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Krull" fill="#aaa" data-formationName="Krull" data-campaignName="Simril" width="267" height="120"><circle cx="175" cy="65" r="15"/><circle cx="135" cy="45" r="15"/><circle cx="135" cy="85" r="15"/><circle cx="95" cy="25" r="15"/><circle cx="95" cy="65" r="15"/><circle cx="95" cy="105" r="15"/><circle cx="55" cy="45" r="15"/><circle cx="55" cy="85" r="15"/><circle cx="15" cy="25" r="15"/><circle cx="15" cy="65" r="15"/><text x="205" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Krull</text><text x="205" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Simril</text></svg>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*