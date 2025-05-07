[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Krond](images/krond/portrait.png)
        </span>
        <span>
        Portrait
        </span>
    </span>
</span>

# Krond

Krond was born of a union between an academic human wizard and a mighty orc fighter who led a nomadic orc community. Raised as a fearsome warrior and arcane scholar, he studied these arts with equal passion. Krond's parents tragically lost their lives protecting their family and friends during an enemy raid. This moment changed Krond, and he swore revenge upon the world. Taking up an ancestral warhammer called Unity, Krond set out to make things right, one way or another.

# Changes

Krond will be a reworked champion in the Dragondown event on 11 June 2025 (expected a week after event start due to the Worst the Wait event augment).

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Attacks

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: War Magic** (Guess)
> Krond leaps out and attacks the front-most target with his bonded warhammer. If you have a cantrip feat equipped, he then casts the given cantrip.  
> Cooldown: 5.25s (Cap 1.3125s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 862,
    "name": "War Magic",
    "description": "Krond leaps out and attacks the front-most target with his bonded warhammer. If you have a cantrip feat equipped, he then casts the given cantrip.",
    "long_description": "",
    "graphic_id": 0,
    "target": "front",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 5.25,
    "animations": [
        {
            "type": "melee_attack",
            "damage_frame": 2,
            "target_offset_x": -80,
            "jump_sound": 30,
            "sound_frames": {
                "2": 154
            }
        }
    ],
    "tags": [
        "monster",
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
**Base Attack: War Magic - Thunderclap** (Guess)
> Krond leaps out and attacks the front-most target with his bonded warhammer and then casts Thunderclap, damaging all nearby enemies.  
> Cooldown: 5.25s (Cap 1.3125s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 863,
    "name": "War Magic - Thunderclap",
    "description": "Krond leaps out and attacks the front-most target with his bonded warhammer and then casts Thunderclap, damaging all nearby enemies.",
    "long_description": "",
    "graphic_id": 0,
    "target": "front",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 5.25,
    "animations": [
        {
            "type": "melee_attack",
            "damage_frame": 2,
            "target_offset_x": -80,
            "jump_sound": 30,
            "sound_frames": {
                "2": 154
            },
            "return_to_formation": false
        }
    ],
    "tags": [
        "melee",
        "aoe"
    ],
    "damage_types": [
        "melee",
        "magic"
    ]
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: War Magic - Shocking Grasp** (Guess)
> Krond leaps out and attacks the front-most target with his bonded warhammer and then casts Shocking Grasp, adding additional damage.  
> Cooldown: 5.25s (Cap 1.3125s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 864,
    "name": "War Magic - Shocking Grasp",
    "description": "Krond leaps out and attacks the front-most target with his bonded warhammer and then casts Shocking Grasp, adding additional damage.",
    "long_description": "",
    "graphic_id": 0,
    "target": "front",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 5.25,
    "animations": [
        {
            "type": "melee_attack",
            "damage_frame": 2,
            "target_offset_x": -80,
            "jump_sound": 30,
            "sound_frames": {
                "2": 154
            },
            "return_to_formation": false
        }
    ],
    "tags": [
        "melee"
    ],
    "damage_types": [
        "melee",
        "magic"
    ]
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: War Magic - Firebolt** (Guess)
> Krond leaps out and attacks the front-most target with his bonded warhammer and then casts Fire Bolt, damaging several random enemies.  
> Cooldown: 5.25s (Cap 1.3125s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 865,
    "name": "War Magic - Fire Bolt",
    "description": "Krond leaps out and attacks the front-most target with his bonded warhammer and then casts Fire Bolt, damaging several random enemies.",
    "long_description": "",
    "graphic_id": 0,
    "target": "front",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 5.25,
    "animations": [
        {
            "type": "melee_attack",
            "damage_frame": 2,
            "target_offset_x": -80,
            "jump_sound": 30,
            "sound_frames": {
                "2": 154
            },
            "return_to_formation": false
        }
    ],
    "tags": [
        "melee",
        "ranged"
    ],
    "damage_types": [
        "melee",
        "magic"
    ]
}
</pre>
</p>
</details>
</div></div>

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unsung Alliance** (Guess)
> Krond increases the damage of all Champions by 100% for each Evil Champion in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2329,
    "flavour_text": "",
    "description": {
        "conditions": [
            {
                "condition": "feat_assigned 2213",
                "desc": "Krond increases the damage of all Champions by $amount% for each Good Champion in the formation, stacking multiplicatively."
            },
            {
                "desc": "Krond increases the damage of all Champions by $amount% for each Evil Champion in the formation, stacking multiplicatively."
            }
        ]
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack_amount,100",
            "off_when_benched": true
        },
        {
            "effect_string": "hero_dps_multiplier_mult,0",
            "off_when_benched": true,
            "amount_expr": "upgrade_amount(17237,0)",
            "targets": [
                "all"
            ],
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasTag(`evil`)",
            "show_bonus": true,
            "use_computed_amount_for_description": true,
            "amount_updated_listeners": [
                "slot_changed",
                "hero_tags_changed",
                "feat_changed"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 26487,
    "large_graphic_id": 26487,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
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
**Best of the Best** (Guess)
> Krond increases the effect of Unsung Alliance by 10% for each point of INT over 16 on every Champion in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2333,
    "flavour_text": "",
    "description": {
        "conditions": [
            {
                "condition": "upgrade_purchased 17238",
                "desc": "Krond increases the effect of Unsung Alliance by $(not_buffed amount)% for each point of STR over 16 on every Champion in the formation, stacking multiplicatively."
            },
            {
                "condition": "upgrade_purchased 17239",
                "desc": "Krond increases the effect of Unsung Alliance by $(not_buffed amount)% for each point of CON over 16 on every Champion in the formation, stacking multiplicatively."
            },
            {
                "desc": "Krond increases the effect of Unsung Alliance by $(not_buffed amount)% for each point of INT over 16 on every Champion in the formation, stacking multiplicatively."
            }
        ]
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,10,17237",
            "off_when_benched": true,
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "max(0,GetStat(`str`)-16)*GetUpgradeUnlocked(17238) + max(0,GetStat(`con`)-16)*GetUpgradeUnlocked(17239) + max(0,GetStat(`int`)-16)*GetUpgradeUnlocked(17240)",
            "show_bonus": true,
            "amount_updated_listeners": [
                "slot_changed",
                "ability_score_changed"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 26486,
    "large_graphic_id": 26486,
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
**Specialisation: Survival of the Strongest** (Guess)
> Krond increases the effect of Unsung Alliance by 100% for each Champion in the formation with a STR score of 16 or higher, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2330,
    "flavour_text": "",
    "description": {
        "desc": "Krond increases the effect of Unsung Alliance by $amount% for each Champion in the formation with a STR score of 16 or higher, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack_amount,100",
            "off_when_benched": true
        },
        {
            "effect_string": "buff_upgrade,100,17237",
            "off_when_benched": true,
            "amount_expr": "upgrade_amount(17238,0)",
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "GetStat(`str`)>=16",
            "show_bonus": true,
            "amount_updated_listeners": [
                "slot_changed",
                "ability_score_changed"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 26505,
    "large_graphic_id": 26505,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "formation_circle_icon": false,
        "spec_option_post_apply_info": "Strong Champions: $num_stacks___2"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Survival of the Fittest** (Guess)
> Krond increases the effect of Unsung Alliance by 100% for each Champion in the formation with a CON score of 16 or higher, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2331,
    "flavour_text": "",
    "description": {
        "desc": "Krond increases the effect of Unsung Alliance by $amount% for each Champion in the formation with a CON score of 16 or higher, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack_amount,100",
            "off_when_benched": true
        },
        {
            "effect_string": "buff_upgrade,100,17237",
            "off_when_benched": true,
            "amount_expr": "upgrade_amount(17239,0)",
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "GetStat(`con`)>=16",
            "show_bonus": true,
            "amount_updated_listeners": [
                "slot_changed",
                "ability_score_changed"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 26503,
    "large_graphic_id": 26503,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "formation_circle_icon": false,
        "spec_option_post_apply_info": "Fit Champions: $num_stacks___2"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Survival of the Smartest** (Guess)
> Krond increases the effect of Unsung Alliance by 100% for each Champion in the formation with an INT score of 16 or higher, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2332,
    "flavour_text": "",
    "description": {
        "desc": "Krond increases the effect of Unsung Alliance by $amount% for each Champion in the formation with an INT score of 16 or higher, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack_amount,100",
            "off_when_benched": true
        },
        {
            "effect_string": "buff_upgrade,100,17237",
            "off_when_benched": true,
            "amount_expr": "upgrade_amount(17240,0)",
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "GetStat(`int`)>=16",
            "show_bonus": true,
            "amount_updated_listeners": [
                "slot_changed",
                "ability_score_changed"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 26504,
    "large_graphic_id": 26504,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "formation_circle_icon": false,
        "spec_option_post_apply_info": "Smart Champions: $num_stacks___2"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Eldritch Strike** (Guess)
> Krond gains the Debuff role and enemies damaged by Krond take an additional 400% damage from all of his subsequent attacks, including any cantrip spells.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2334,
    "flavour_text": "",
    "description": {
        "desc": "Krond gains the Debuff role and enemies damaged by Krond take an additional $amount% damage from all of his subsequent attacks, including any cantrip spells."
    },
    "effect_keys": [
        {
            "effect_string": "krond_eldritch_strike,400",
            "off_when_benched": true,
            "debuffing_attack_ids": [
                50,
                862,
                863,
                864,
                865
            ],
            "debuff_effects": [
                {
                    "effect_string": "increase_monster_damage_if_from_attacks,400,50,862,863,864,865",
                    "active_graphic_id": 1401,
                    "bottom": true,
                    "use_collection_source": true
                }
            ]
        },
        {
            "effect_string": "add_hero_tags,0,debuff",
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 26501,
    "large_graphic_id": 26501,
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
**Specialisation: Power Behind the Throne** (Guess)
> Krond increases the effect of Unsung Alliance by 400% when he is not the formation's BUD-setting Champion.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2335,
    "flavour_text": "",
    "description": {
        "desc": "Krond increases the effect of Unsung Alliance by $amount% when he is not the formation's BUD-setting Champion.",
        "post": {
            "conditions": [
                {
                    "condition": "not static_desc",
                    "desc": {
                        "conditions": [
                            {
                                "condition": "target_is_highest_hit_hero",
                                "desc": "^^Active: {No}#FF0000"
                            },
                            {
                                "desc": "^^Active: {Yes}#00FF00"
                            }
                        ]
                    }
                }
            ]
        }
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,400,17237",
            "off_when_benched": true,
            "amount_func": "if_not_bud_setting_champion",
            "amount_updated_listeners": [
                "bud_setter_changed"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 26502,
    "large_graphic_id": 26502,
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
**Specialisation: War Magic** (Guess)
> Krond's Cantrip feats now deal BUD-based damage equal to 5 seconds of BUD-based damage for each 100% of Krond's base damage that they normally deal.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2336,
    "flavour_text": "",
    "description": {
        "desc": "Krond's Cantrip feats now deal BUD-based damage equal to $amount seconds of BUD-based damage for each $increase_threshold% of Krond's base damage that they normally deal."
    },
    "effect_keys": [
        {
            "effect_string": "just_an_amount,5",
            "off_when_benched": true,
            "increase_threshold": 100
        }
    ],
    "requirements": "",
    "graphic_id": 26506,
    "large_graphic_id": 26506,
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

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unlock Adventure: The Trickster's Delight (Krond)** (Complete Area 50)
> Chase down a masked man who has performed a daring heist.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Stealthy Pickpockets Icon](images/krond/1342.png) **Variant 1: Stealthy Pickpockets** (Complete Area 75)
> Stealthy pickpockets attack and steal some of your gold when they hit your formation
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Costumed Foes Icon](images/krond/1343.png) **Variant 2: Costumed Foes** (Complete Area 125)
> Various costumed foes attack, each with a unique and annoying ability.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![It's Getting Darker Icon](images/krond/1344.png) **Variant 3: It's Getting Darker** (Complete Area 175)
> The night gets darker; each area you enter is a bit darker, reducing your gold find and increasing the health of the monsters.
</div></div>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Krond" fill="#aaa" data-formationName="Krond" data-campaignName="Liar's Night" width="251" height="160"><circle cx="135" cy="85" r="15"/><circle cx="95" cy="25" r="15"/><circle cx="95" cy="65" r="15"/><circle cx="95" cy="105" r="15"/><circle cx="95" cy="145" r="15"/><circle cx="55" cy="45" r="15"/><circle cx="55" cy="85" r="15"/><circle cx="55" cy="125" r="15"/><circle cx="15" cy="65" r="15"/><circle cx="15" cy="105" r="15"/><text x="165" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Krond</text><text x="165" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Liar's Night</text></svg>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*