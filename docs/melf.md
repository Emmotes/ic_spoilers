[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Melf](images/melf/portrait.png)
        </span>
        <span>
            Portrait
        </span>
    </span>
</span>

# Melf

Born into the royal family of Celene, he assumed the simple name of Melf eschewing a life of comfort as a noble to study the arcane arts and train as a swordsman. He delved in the dungeons of Castle Greyhawk, the Lost Caverns of Tsojcanth and many other harrowing places honing his skills, knowledge and amassing powerful magical items. Melf sees himself as a weapon of weal hurtling toward the heart of the darkest evils in the realm. He is opinionated and has a touch of conceit that he is blissfully ignorant of possessing.

# Changes

Melf will be a reworked champion in the The Great Modron March event and delayed until 13 May 2026.

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Attacks

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Zagyg's Throwing Needle** (Guess)
> Melf throws his magic spear at the nearest enemy. If Melf has any Minute Meteors active, he fires one at a random enemy as well.  
> Cooldown: 5s (Cap 1.25s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 964,
    "name": "Zagyg's Throwing Needle",
    "description": "Melf throws his magic spear at the nearest enemy. If Melf has any Minute Meteors active, he fires one at a random enemy as well.",
    "long_description": "Melf throws his magic spear at the nearest enemy. If Melf has any Minute Meteors active, he fires one at a random enemy as well.",
    "graphic_id": 0,
    "target": "front",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 5,
    "animations": [
        {
            "type": "ranged_attack",
            "projectile": "pd_generic_projectile",
            "animation_sequence_name": "attack_b",
            "shoot_offset_y": -50,
            "shoot_frame": 4,
            "shoot_sound": 149,
            "hit_sound": 133,
            "projectile_details": {
                "hash": "35c75d75b9a92abd8ea618bfdcb68198",
                "target_offset_y": 0,
                "projectile_speed": 2400,
                "projectile_graphic_id": 28921,
                "use_auto_rotation": true,
                "percent_height_offset": 8,
                "projectile_graphic_skin_property": "projectile_graphic_id"
            }
        }
    ],
    "tags": [
        "ranged"
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
**Base Attack: Melf's Acid Arrow** (Guess)
> Melf casts his most famous spell at the nearest enemy. If Melf has any Minute Meteors active, he fires one at a random enemy as well.  
> Cooldown: 5s (Cap 1.25s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 965,
    "name": "Melf's Acid Arrow",
    "description": "Melf casts his most famous spell at the nearest enemy. If Melf has any Minute Meteors active, he fires one at a random enemy as well.",
    "long_description": "Melf casts his most famous spell at the nearest enemy. If Melf has any Minute Meteors active, he fires one at a random enemy as well.",
    "graphic_id": 0,
    "target": "front",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 5,
    "animations": [
        {
            "type": "ranged_attack",
            "projectile": "acid_arrow",
            "animation_sequence_name": "attack_c",
            "shoot_frame": 10,
            "projectile_count": 1,
            "shoot_offset_x": 140,
            "shoot_offset_y": -70
        }
    ],
    "tags": [
        "magic"
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
**Melf's Custom Support Spell** (Guess)
> Melf creates a custom spell to assist the formation. It increases the damage of adjacent Champions by 400%, and will be augmented based on the specialization you pick for Melf.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2682,
    "flavour_text": "",
    "description": {
        "desc": "Melf creates a custom spell to assist the formation. It increases the damage of adjacent Champions by $amount%, and will be augmented based on the specialization you pick for Melf."
    },
    "effect_keys": [
        {
            "effect_string": "hero_dps_multiplier_mult,400",
            "targets": [
                "adj"
            ]
        }
    ],
    "requirements": [],
    "graphic_id": 28902,
    "large_graphic_id": 28900,
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
**Melf in the Middle** (Guess)
> Melf increases the range of Melf's Custom Support Spell by 2 and the effect of Melf's Custom Support Spell by 400% if Melf is in the column in the formation with the most Champions. In the event of a formation with multiple columns of the same size, Melf can be in any of them.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2683,
    "flavour_text": "",
    "description": {
        "desc": "Melf increases the range of Melf's Custom Support Spell by 2 and the effect of Melf's Custom Support Spell by $(amount___2)% if Melf is in the column in the formation with the most Champions. In the event of a formation with multiple columns of the same size, Melf can be in any of them."
    },
    "effect_keys": [
        {
            "effect_string": "melf_in_the_middle",
            "hero_id": 110,
            "off_when_benched": true
        },
        {
            "effect_string": "buff_upgrade,400,19336",
            "apply_manually": true
        },
        {
            "effect_string": "change_upgrade_data,19336",
            "data": {
                "targets": [
                    {
                        "type": "distance",
                        "distance": 3,
                        "comparison": "<=",
                        "self": false
                    }
                ]
            },
            "effect_index": 0,
            "apply_manually": true
        }
    ],
    "requirements": [],
    "graphic_id": 28901,
    "large_graphic_id": 28899,
    "properties": {
        "is_formation_ability": true,
        "indexed_effect_properties": true,
        "use_outgoing_description": true,
        "per_effect_index_bonuses": true,
        "formation_circle_icon": false,
        "show_incoming": false,
        "default_bonus_index": 1
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Melf's Righteous Determination** (Guess)
> Melf knows exactly what evil is. Whenever an enemy spawns, or is attacked by Melf, it has a 50% chance of being deemed "evil".  Enemies that are deemed evil take 1000% more damage from all attacks that deal BUD-based damage (such as Ultimate Attacks).
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2696,
    "flavour_text": "",
    "description": {
        "desc": "Melf knows exactly what evil is. Whenever an enemy spawns, or is attacked by Melf, it has a $(amount___2)% chance of being deemed \"evil\".  Enemies that are deemed evil take $amount% more damage from all attacks that deal BUD-based damage (such as Ultimate Attacks)."
    },
    "effect_keys": [
        {
            "effect_string": "melf_righteous_determination,1000",
            "non_evil_invulnerable_adventures": [
                486,
                1784
            ],
            "all_vulnerable_marked": true,
            "reworked": true,
            "debuff_effect_id": 2697,
            "off_when_benched": true
        },
        {
            "effect_string": "melf_righteous_determination_chance,50"
        }
    ],
    "requirements": [],
    "graphic_id": 7475,
    "large_graphic_id": 7470,
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

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Melf's Frequent Foes** (Guess)
> Melf magically causes an additional enemy to spawn with each wave 25% of the time. If there are any Champions in the formation with a Favored Foe, the enemy spawned will be a random Champion's Favored Foe.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2699,
    "flavour_text": "",
    "description": {
        "desc": "Melf magically causes an additional enemy to spawn with each wave $amount% of the time. If there are any Champions in the formation with a Favored Foe, the enemy spawned will be a random Champion's Favored Foe."
    },
    "effect_keys": [
        {
            "effect_string": "melf_frequent_foes,25",
            "off_when_benched": true,
            "monster_ids_by_tag": {
                "aberration": [
                    151,
                    152,
                    153
                ],
                "beast": [
                    118,
                    119,
                    120
                ],
                "celestial": [
                    1846,
                    1847,
                    1848
                ],
                "construct": [
                    202,
                    203,
                    204
                ],
                "dragon": [
                    1450,
                    1451,
                    1452
                ],
                "elemental": [
                    39,
                    40,
                    41
                ],
                "fey": [
                    135,
                    136,
                    137
                ],
                "fiend": [
                    1101,
                    1102,
                    1103
                ],
                "giant": [
                    542,
                    543,
                    544
                ],
                "humanoid": [
                    774,
                    775,
                    776
                ],
                "monstrosity": [
                    125,
                    126,
                    127
                ],
                "ooze": [
                    1993,
                    1994,
                    1995
                ],
                "plant": [
                    756,
                    757,
                    758
                ],
                "undead": [
                    69,
                    70,
                    71
                ]
            }
        }
    ],
    "requirements": [],
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Melf's Speedy Spawns** (Guess)
> Melf magically increases enemy spawn speed by 25%, and Melf's Righteous Determination "evil" chance is increased by 25% additively (to a 75% chance).
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2700,
    "flavour_text": "",
    "description": {
        "desc": "Melf magically increases enemy spawn speed by $amount%, and Melf's Righteous Determination \"evil\" chance is increased by 25% additively (to a 75% chance)."
    },
    "effect_keys": [
        {
            "effect_string": "increase_monster_spawn_time_mult,25",
            "off_when_benched": true
        },
        {
            "effect_string": "buff_upgrade,50,19338,1",
            "off_when_benched": true
        }
    ],
    "requirements": [],
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
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
**Specialisation: Melf's Doubled Drops** (Guess)
> Melf magically increases the chance that an enemy will drop double quest items or count for two kills by 25%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2701,
    "flavour_text": "",
    "description": {
        "desc": "Melf magically increases the chance that an enemy will drop double quest items or count for two kills by $chance%."
    },
    "effect_keys": [
        {
            "effect_string": "chance_multiply_monster_quest_rewards,25,2",
            "off_when_benched": true
        }
    ],
    "requirements": [],
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
        "use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Melf's Abundant Allies** (Guess)
> Melf counts the most populous species among other Champions in the formation. Melf's Custom Support Spell is increased by 400% for each Champion of that species in the formation, stacking multiplicatively. If tied, all tied species count.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2702,
    "flavour_text": "",
    "description": {
        "desc": "Melf counts the most populous species among other Champions in the formation. Melf's Custom Support Spell is increased by $(amount)% for each Champion of that species in the formation, stacking multiplicatively. If tied, all tied species count.",
        "_post": {
            "conditions": [
                {
                    "condition": "not static_desc",
                    "desc": "^^$melf_abundant_allies_stacks"
                }
            ]
        }
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,400",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "buff_upgrade,0,19336",
            "amount_expr": "upgrade_amount(19342,0)",
            "stacks_on_trigger": "will_stack_manually",
            "stacks_multiply": true,
            "show_bonus": true,
            "off_when_benched": true
        },
        {
            "effect_string": "melf_abundant_allies",
            "hero_id": 110
        }
    ],
    "requirements": [],
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
        "use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "spec_option_post_apply_info": "Potential Stacks: $num_stacks___2"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Melf's Adaptive Attacks** (Guess)
> Melf counts the most popular attack type among other Champions in the formation. Melf's Custom Support Spell is increased by 400% for each Champion in the formation with that type, stacking multiplicatively, and Melf changes his attack to match. If tied, all tied attack types count.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2703,
    "flavour_text": "",
    "description": {
        "desc": "Melf counts the most popular attack type among other Champions in the formation. Melf's Custom Support Spell is increased by $(amount)% for each Champion in the formation with that type, stacking multiplicatively, and Melf changes his attack to match. If tied, all tied attack types count.",
        "_post": {
            "conditions": [
                {
                    "condition": "not static_desc",
                    "desc": "^^$melf_adaptive_attacks_stacks"
                }
            ]
        }
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,400",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "buff_upgrade,0,19336",
            "amount_expr": "upgrade_amount(19343,0)",
            "stacks_on_trigger": "will_stack_manually",
            "stacks_multiply": true,
            "show_bonus": true,
            "off_when_benched": true
        },
        {
            "effect_string": "melf_adaptive_attacks",
            "hero_id": 110
        },
        {
            "effect_string": "change_base_attack,965",
            "apply_manually": true,
            "note": "magic"
        },
        {
            "effect_string": "change_base_attack,964",
            "apply_manually": true,
            "note": "ranged"
        }
    ],
    "requirements": [],
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
        "use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "spec_option_post_apply_info": "Potential Stacks: $num_stacks___2"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Melf's Ranked Roles** (Guess)
> Melf counts the most represented non-Support Role among the other Champions in the formation. Melf's Custom Support Spell is increased by 400% for each Champion in the formation with that role, stacking multiplicatively, and Melf gains the Role. If tied, all tied Roles count.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2704,
    "flavour_text": "",
    "description": {
        "desc": "Melf counts the most represented non-Support Role among the other Champions in the formation. Melf's Custom Support Spell is increased by $(amount)% for each Champion in the formation with that role, stacking multiplicatively, and Melf gains the Role. If tied, all tied Roles count.",
        "_post": {
            "conditions": [
                {
                    "condition": "not static_desc",
                    "desc": "^^$melf_ranked_roles_stacks"
                }
            ]
        }
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,400",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "buff_upgrade,0,19336",
            "amount_expr": "upgrade_amount(19344,0)",
            "stacks_on_trigger": "will_stack_manually",
            "stacks_multiply": true,
            "show_bonus": true,
            "off_when_benched": true
        },
        {
            "effect_string": "melf_ranked_roles",
            "hero_id": 110
        }
    ],
    "requirements": [],
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
        "use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "spec_option_post_apply_info": "Potential Stacks: $num_stacks___2"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Melf's Amorphous Alignment** (Guess)
> Melf counts the most represented alignment on the Lawful/Chaotic axis among the other Champions in the formation. Melf's Custom Support Spell is increased by 400% for each Champion in the formation with that alignment, stacking multiplicatively, and Melf gains the alignment. If tied, all tied alignments count.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2705,
    "flavour_text": "",
    "description": {
        "desc": "Melf counts the most represented alignment on the Lawful/Chaotic axis among the other Champions in the formation. Melf's Custom Support Spell is increased by $(amount)% for each Champion in the formation with that alignment, stacking multiplicatively, and Melf gains the alignment. If tied, all tied alignments count.",
        "_post": {
            "conditions": [
                {
                    "condition": "not static_desc",
                    "desc": "^^$melf_amorphous_alignment_stacks"
                }
            ]
        }
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,400",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "buff_upgrade,0,19336",
            "amount_expr": "upgrade_amount(19345,0)",
            "stacks_on_trigger": "will_stack_manually",
            "stacks_multiply": true,
            "show_bonus": true,
            "off_when_benched": true
        },
        {
            "effect_string": "melf_amorphous_alignment",
            "hero_id": 110
        },
        {
            "effect_string": "add_hero_tags,0,lawful",
            "apply_manually": true
        },
        {
            "effect_string": "add_hero_tags,0,chaotic",
            "apply_manually": true
        }
    ],
    "requirements": [],
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
        "use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "spec_option_post_apply_info": "Potential Stacks: $num_stacks___2"
    }
}
</pre>
</p>
</details>
</div></div>

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unlock Adventure: The Endless War (Melf)** (Complete Area 50)
> Defend Triboar from a Githyanki invasion.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Honorable Discharge Icon](images/melf/7461.png) **Variant 1: Honorable Discharge** (Complete Area 75)
> Each Champion can only be used to beat 50 unique areas A Champion counts as being "used" in an area if they're in the formation at any time during the attempt that beats an area for the first time After a Champion has been used while beating 50 unique areas, they can not be used in the formation anymore
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![The Problem Solvers Icon](images/melf/7462.png) **Variant 2: The Problem Solvers** (Complete Area 125)
> Only Champions with Intelligence of 13 or higher can be used
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Wheat From The Chaff Icon](images/melf/7463.png) **Variant 3: Wheat From The Chaff** (Complete Area 175)
> Melf starts out in the formation with Melf's Righteous Determination unlocked. Melf can not be removed from the formation or swapped out. Only enemies Melf deems to be Evil can be damaged.
</div></div>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Melf" fill="#aaa" data-formationName="Melf" data-campaignName="The Great Modron March" width="389" height="160"><circle cx="175" cy="85" r="15"/><circle cx="135" cy="65" r="15"/><circle cx="135" cy="105" r="15"/><circle cx="95" cy="85" r="15"/><circle cx="95" cy="125" r="15"/><circle cx="55" cy="25" r="15"/><circle cx="55" cy="105" r="15"/><circle cx="55" cy="145" r="15"/><circle cx="15" cy="45" r="15"/><circle cx="15" cy="85" r="15"/><text x="205" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Melf</text><text x="205" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">The Great Modron March</text></svg>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*