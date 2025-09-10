[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Nordom](images/nordom/portrait.png)
        </span>
        <span>
            Portrait
        </span>
    </span>
</span>

# Nordom

Modrons are the embodiment of law and order, marching in lockstep through the planes. But when Nordom Whistlklik was separated from his fellow modrons, the essence of chaos infected this rogue quadrone. Now with his crossbow-shaped gear spirits in hand, he works to fit his complex new outlook into his logical-if quirky-understanding of the planes.

# Changes

Nordom will be a reworked champion in the Simril event and delayed until 10 December 2025.

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Attacks

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Gear Spirits** (Guess)
> Two gear spirits have taken the form of crossbows, which Nordom fires simultaneously at the closest two enemies. If only one enemy remains, he'll instead hit it twice.  
> Cooldown: 7s (Cap 1.75s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 911,
    "name": "Gear Spirits",
    "description": "Nordom simultaneously fires two crossbows at the closest two enemies.",
    "long_description": "Two gear spirits have taken the form of crossbows, which Nordom fires simultaneously at the closest two enemies. If only one enemy remains, he'll instead hit it twice.",
    "graphic_id": 0,
    "target": "front",
    "num_targets": 2,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 7,
    "animations": [
        {
            "type": "ranged_attack",
            "projectile": "generic",
            "shoot_frame": 8,
            "per_projectile_shoot_offsets": [
                {
                    "shoot_offset_x": 30,
                    "shoot_offset_y": 25
                },
                {
                    "shoot_offset_x": 60,
                    "shoot_offset_y": 20
                }
            ],
            "projectile_multi_hits": true,
            "projectile_count": 2,
            "projectile_details": {
                "projectile_speed": 2400,
                "has_trail": false,
                "extend_line": true,
                "projectile_graphic_id": 14204
            }
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
**Form Orderly Ranks** (Guess)
> Nordom increases the damage of all Champions in the column ahead of him by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2510,
    "flavour_text": "",
    "description": {
        "desc": "$(source_hero) increases the damage of all Champions in the column ahead of him by $(amount)%."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "hero_dps_multiplier_mult,100",
            "targets": [
                "next_col"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 14237,
    "large_graphic_id": 14234,
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
**Rule of Law** (Guess)
> Nordom increases the effect of Form Orderly Ranks by 100% for each Lawful Champion in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2513,
    "flavour_text": "",
    "description": {
        "desc": "$(source_hero) increases the effect of Form Orderly Ranks by $(not_buffed amount)% for each Lawful Champion in the formation, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade_per_unique_race,100,18058",
            "off_when_benched": true,
            "apply_manually": true
        },
        {
            "effect_string": "buff_upgrade,100,18058",
            "off_when_benched": true,
            "amount_func": "mult",
            "stack_func": "per_crusader",
            "stack_func_data": {
                "target_filters": [
                    {
                        "type": "stat",
                        "stat": "total_ability_score",
                        "comparison": ">=",
                        "value": 78
                    }
                ]
            },
            "apply_manually": true
        },
        {
            "effect_string": "buff_upgrade_per_any_tagged_crusader_mult,100,18058,speed",
            "off_when_benched": true,
            "apply_manually": true
        },
        {
            "effect_string": "buff_upgrade,100,18058",
            "off_when_benched": true,
            "amount_func": "mult",
            "stack_func": "per_crusader",
            "target_filters": [
                {
                    "type": "attack_type",
                    "attack": "magic"
                }
            ],
            "show_bonus": true,
            "apply_manually": true
        },
        {
            "effect_string": "buff_upgrade_per_any_tagged_crusader_mult,300,18058,aerois",
            "off_when_benched": true,
            "apply_manually": true
        },
        {
            "effect_string": "buff_upgrade_per_any_tagged_crusader_mult,100,18058,unaffiliated",
            "off_when_benched": true,
            "apply_manually": true
        },
        {
            "effect_string": "buff_upgrade,100,18058",
            "off_when_benched": true,
            "stacks_multiply": true,
            "amount_func": "mult",
            "stack_func": "per_crusader",
            "stack_func_data": {
                "target_filters": [
                    {
                        "type": "stat",
                        "stat": "dex",
                        "comparison": ">=",
                        "value": 15
                    }
                ]
            },
            "amount_updated_listeners": [
                "slot_changed"
            ],
            "show_bonus": true,
            "apply_manually": true
        },
        {
            "effect_string": "buff_upgrade_per_any_tagged_crusader_mult,100,18058,lawful",
            "off_when_benched": true,
            "apply_manually": true
        },
        {
            "effect_string": "change_base_attack,911",
            "off_when_benched": true,
            "apply_manually": true
        },
        {
            "effect_string": "add_affiliations_to_heroes",
            "off_when_benched": true,
            "apply_manually": true,
            "affiliations": [
                "aerois"
            ],
            "hero_ids": [
                111
            ]
        },
        {
            "effect_string": "nordom_core_programming_buff",
            "off_when_benched": true
        },
        {
            "effect_string": "nordom_great_modron_puzzle_buff",
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 14239,
    "large_graphic_id": 14236,
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
**Core Programming** (Guess)
> Unknown.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 27846,
    "graphic": "Icons/Events/2017Simril/Simril_Y9/Icon_Formation_Nordom_CoreProgramming",
    "v": 4,
    "fs": 0,
    "p": 0,
    "type": 1,
    "export_params": {
        "uses": [
            "icon"
        ],
        "export_animation": true,
        "quantize": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**The Great Modron Puzzle** (Guess)
> Unknown.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 27847,
    "graphic": "Icons/Events/2017Simril/Simril_Y9/Icon_Formation_Nordom_TheGreatModronPuzzle",
    "v": 3,
    "fs": 0,
    "p": 0,
    "type": 1,
    "export_params": {
        "uses": [
            "icon"
        ],
        "export_animation": true,
        "quantize": true
    }
}
</pre>
</p>
</details>
</div></div>

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: BASIC Functionality** (Guess)
> Unknown.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 27835,
    "graphic": "Icons/Events/2017Simril/Simril_Y9/Icon_Specialization_Nordom_BASICFunctionality",
    "v": 2,
    "fs": 0,
    "p": 0,
    "type": 1,
    "export_params": {
        "uses": [
            "specialization_icon"
        ],
        "quantize": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Core Competency** (Guess)
> Unknown.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 27836,
    "graphic": "Icons/Events/2017Simril/Simril_Y9/Icon_Specialization_Nordom_CoreCompetency",
    "v": 2,
    "fs": 0,
    "p": 0,
    "type": 1,
    "export_params": {
        "uses": [
            "specialization_icon"
        ],
        "quantize": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Modron Core Toolbox** (Guess)
> Unknown.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 27837,
    "graphic": "Icons/Events/2017Simril/Simril_Y9/Icon_Specialization_Nordom_ModronCoreToolbox",
    "v": 2,
    "fs": 0,
    "p": 0,
    "type": 1,
    "export_params": {
        "uses": [
            "specialization_icon"
        ],
        "quantize": true
    }
}
</pre>
</p>
</details>
</div></div>

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unlock Adventure: The Mechanical Menace (Nordom)** (Complete Area 50)
> Stop the Modron March from crushing Waterdeep under its mechanical heel.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Rogue Modron Hunting Icon](images/nordom/14244.png) **Variant 1: Rogue Modron Hunting** (Complete Area 75)
> Nordom starts in the formation. They can't be moved or removed.  
> Nodrom is hunted by Duodrones and Pentadrones! They drop no gold, nor do they count towards quest progress.  
> Getting to know Nordom: Nordom increases the damage of Champions in the column in front of him. Use this to defeat these rogue modron hunters!
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![A Lawful Lot of Champions Icon](images/nordom/14245.png) **Variant 2: A Lawful Lot of Champions** (Complete Area 125)
> Nordom starts in the formation. They can't be moved or removed.  
> Chaotic Champions can't be used, and Neutral champions (l/c axis) deal no damage but can still use their formation abilities.  
> Getting to know Nordom: Nordom's ability to increase damage improves with the number of lawful Champions in your formation. Try to get the most of it!
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Core Strength Icon](images/nordom/14246.png) **Variant 3: Core Strength** (Complete Area 175)
> Nordom starts in the formation. They can't be moved or removed.  
> Potions of Speed gain a 100% duration bonus.  
> You may only use Champions with the Speed tag and/or Champions with a STR of 16 or higher.  
> Getting to know Nordom: If you have a modron core, Nordom can increase the rate it gains levels. Use some speed Champions to maximize this ability!
</div></div>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Nordom" fill="#aaa" data-formationName="Nordom" data-campaignName="The Great Modron March" width="429" height="160"><circle cx="215" cy="85" r="15"/><circle cx="175" cy="25" r="15"/><circle cx="175" cy="65" r="15"/><circle cx="175" cy="105" r="15"/><circle cx="175" cy="145" r="15"/><circle cx="135" cy="85" r="15"/><circle cx="95" cy="65" r="15"/><circle cx="95" cy="105" r="15"/><circle cx="55" cy="85" r="15"/><circle cx="15" cy="65" r="15"/><text x="245" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Nordom</text><text x="245" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">The Great Modron March</text></svg>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*