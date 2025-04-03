[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Hank](images/hank/portrait.png)
        </span>
        <span>
        Portrait
        </span>
    </span>
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![Model GIF of Hank](images/hank/model.gif)
        </span>
        <span>
        Model
        </span>
    </span>
</span>

# Hank

Hank, the Ranger, at 15 years of age, he is the leader of the group. Hank is brave and noble, maintaining a focus and determination even when presented with grave danger. Hank is a Ranger, with a magical bow that shoots arrows of glowing energy. These arrows can be used in many different ways such as a climbing tool, to hurt enemies, to bind them, to create light, or to form temporary makeshift cages.

[D&D (TV Series) - Wikipedia](https://en.wikipedia.org/wiki/Dungeons_%26_Dragons_(TV_series))

# Basic Information

Hank will be a new champion in the Dragondown event on 4 June 2025.

<span class="champStatsTableColumn">
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Seat**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Unknown</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Species**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Human (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Class**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Ranger (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Roles**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Support / Hunter / Control (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Age**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">15 (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Gender**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Male (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Alignment**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Unknown</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Affiliation**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Saturday Morning Squad (Guess)</span>
        </span>
    </span>
</span>

# Formation

Unknown.
{% comment %}
<span class="formationBorder">
    ![Formation Layout](images/hank/formation.png)
</span>
{% endcomment %}

# Attacks

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Energy Bow** (Ranged)
> Hank attacks the closest enemy, dealing 1 hit. (They are also knocked back once the Energy Bow ability is unlocked.)  
> Cooldown: 3.5s (Cap 0.875s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 858,
    "name": "Energy Bow",
    "description": "Hank attacks the closest enemy, dealing 1 hit.",
    "long_description": "Hank attacks the closest enemy, dealing 1 hit. (They are also knocked back once the Energy Bow ability is unlocked.)",
    "graphic_id": 0,
    "target": "front",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 3.5,
    "animations": [
        {
            "type": "ranged_attack",
            "projectile": "pd_generic_projectile",
            "shoot_offset_x": 15,
            "shoot_offset_y": -50,
            "shoot_frame": 13,
            "shoot_sound": 149,
            "hit_sound": 133,
            "projectile_details": {
                "hash": "7d2285a51fcb458b32b02d796020b776",
                "target_offset_y": -100,
                "projectile_speed": 2000,
                "projectile_graphic_id": 26469,
                "projectile_hit_graphic_id": 26470
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
**Base Attack: Energy Bow** (Ranged)
> Hank attacks the closest enemy, dealing 1 hit and knocking them back.  
> Cooldown: 3.5s (Cap 0.875s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 859,
    "name": "Energy Bow",
    "description": "Hank attacks the closest enemy, dealing 1 hit and knocking them back.",
    "long_description": "Hank attacks the closest enemy, dealing 1 hit and knocking them back.",
    "graphic_id": 0,
    "target": "front",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 3.5,
    "animations": [
        {
            "type": "ranged_attack",
            "projectile": "pd_generic_projectile",
            "shoot_offset_x": 15,
            "shoot_offset_y": -50,
            "shoot_frame": 13,
            "shoot_sound": 149,
            "hit_sound": 133,
            "hit_effects_only_on_direct_hit": true,
            "effects_on_monsters": [
                {
                    "effect_string": "push_back_monster,10",
                    "animation": "hit",
                    "after_damage": true
                }
            ],
            "projectile_details": {
                "hash": "7d2285a51fcb458b32b02d796020b776",
                "target_offset_y": -100,
                "projectile_speed": 2000,
                "projectile_graphic_id": 26469,
                "projectile_hit_graphic_id": 26470
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

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Stalwart Encouragement** (Guess)
> Hank increases the damage of Champions adjacent to him by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2320,
    "flavour_text": "",
    "description": {
        "desc": "Hank increases the damage of Champions adjacent to him by $amount%."
    },
    "effect_keys": [
        {
            "effect_string": "hero_dps_multiplier_mult,100",
            "targets": [
                "adj"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 26494,
    "large_graphic_id": 26490,
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
**Energy Bow** (Guess)
> Enemies that Hank hits are knocked back. The distance they're knocked back increases the closer they are to the formation.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2321,
    "flavour_text": "",
    "description": {
        "desc": "Enemies that Hank hits are knocked back. The distance they're knocked back increases the closer they are to the formation."
    },
    "effect_keys": [
        {
            "effect_string": "change_base_attack,859"
        }
    ],
    "requirements": "",
    "graphic_id": 26492,
    "large_graphic_id": 26488,
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
**Time Gate Piece Scavenger** (Guess)
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2322,
    "flavour_text": "",
    "description": {
        "desc": ""
    },
    "effect_keys": [
        {
            "effect_string": "do_nothing,1"
        }
    ],
    "requirements": "",
    "graphic_id": 26495,
    "large_graphic_id": 26491,
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
**Every Little Bit Helps** (Guess)
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2323,
    "flavour_text": "",
    "description": {
        "desc": ""
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,10,17079"
        }
    ],
    "requirements": "",
    "graphic_id": 26493,
    "large_graphic_id": 26489,
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
**Heart of Heroes** (Guess)
> Hank increases the damage bonus of Stalwart Encouragement by 100% for each Champion in the formation with a total ability score of 78 or less, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2324,
    "flavour_text": "",
    "description": {
        "desc": "Hank increases the damage bonus of Stalwart Encouragement by $amount% for each Champion in the formation with a total ability score of 78 or less, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,100",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "buff_upgrade,0,17079",
            "amount_expr": "upgrade_amount(17083,0)",
            "amount_func": "mult",
            "stack_func": "per_crusader",
            "stack_func_data": {
                "target_filters": [
                    {
                        "type": "stat",
                        "stat": "total_ability_score",
                        "comparison": "<=",
                        "value": 78
                    }
                ]
            },
            "amount_updated_listeners": [
                "slot_changed",
                "ability_score_changed"
            ],
            "stacks_multiply": true,
            "show_bonus": true
        }
    ],
    "requirements": "",
    "graphic_id": 26498,
    "large_graphic_id": 26498,
    "properties": {
        "is_formation_ability": true,
        "spec_option_post_apply_info": "Qualified Champions: $num_stacks___2",
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
**Arrow Alliance** (Guess)
> Hank increases the damage bonus of Stalwart Encouragement by 125% for each Champion in the formation with a Ranged attack, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2325,
    "flavour_text": "",
    "description": {
        "desc": "Hank increases the damage bonus of Stalwart Encouragement by $amount% for each Champion in the formation with a Ranged attack, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,125",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "buff_upgrade,0,17079",
            "amount_expr": "upgrade_amount(17084,0)",
            "amount_func": "mult",
            "stack_func": "per_crusader",
            "stack_func_data": {
                "target_filters": [
                    {
                        "type": "attack_type",
                        "attack": "ranged"
                    }
                ]
            },
            "amount_updated_listeners": [
                "slot_changed",
                "ability_score_changed"
            ],
            "stacks_multiply": true,
            "show_bonus": true
        }
    ],
    "requirements": "",
    "graphic_id": 26496,
    "large_graphic_id": 26496,
    "properties": {
        "is_formation_ability": true,
        "spec_option_post_apply_info": "Qualified Champions: $num_stacks___2",
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
**Unyielding Unity** (Guess)
> Hank increases the damage bonus of Stalwart Encouragement by 200% for each member of the Saturday Morning Squad  in the formation, stacking multiplicatively. This also adds the Saturday Morning Squad affiliation to Dungeon Master.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2326,
    "flavour_text": "",
    "description": {
        "desc": "Hank increases the damage bonus of Stalwart Encouragement by $amount% for each member of the Saturday Morning Squad  in the formation, stacking multiplicatively. This also adds the Saturday Morning Squad affiliation to Dungeon Master."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,200",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "add_hero_tags,0,saturdaymorningsquad",
            "targets": [
                {
                    "type": "heroes",
                    "hero_ids": [
                        99
                    ]
                }
            ]
        },
        {
            "effect_string": "buff_upgrade,0,17079",
            "amount_expr": "upgrade_amount(17085,0)",
            "amount_func": "mult",
            "stack_func": "per_crusader",
            "stack_func_data": {
                "target_filters": [
                    {
                        "type": "tags",
                        "tags": "saturdaymorningsquad"
                    }
                ]
            },
            "amount_updated_listeners": [
                "slot_changed"
            ],
            "stacks_multiply": true,
            "show_bonus": true
        }
    ],
    "requirements": "",
    "graphic_id": 26500,
    "large_graphic_id": 26500,
    "properties": {
        "is_formation_ability": true,
        "spec_option_post_apply_info": "Qualified Champions: $num_stacks___3",
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
**Tactical Advantage** (Guess)
> Whenever an enemy is knocked back, Hank gains a Tactics stack. For each Tactics stack, the Critical Hit Chance of all Champions in the formation is increased by 1%, and the Critical Hit Damage of all Champions in the formation is increased by 10%. Tactics stacks stack additively up to 50 times and reset when changing areas.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2327,
    "flavour_text": "",
    "description": {
        "desc": "Whenever an enemy is knocked back, Hank gains a Tactics stack. For each Tactics stack, the Critical Hit Chance of all Champions in the formation is increased by $(not_buffed amount)%, and the Critical Hit Damage of all Champions in the formation is increased by $(not_buffed amount___2)%. Tactics stacks stack additively up to $max_stacks times and reset when changing areas."
    },
    "effect_keys": [
        {
            "effect_string": "buff_base_crit_chance_add,1",
            "targets": [
                "all"
            ],
            "stacks_on_trigger": "monster_pushed_back",
            "max_stacks": 50,
            "more_triggers": [
                {
                    "trigger": "area_changed",
                    "action": {
                        "type": "reset"
                    }
                }
            ],
            "stack_title": "Tactics Stacks",
            "show_bonus": true
        },
        {
            "effect_string": "buff_base_crit_damage,10",
            "targets": [
                "all"
            ],
            "stacks_on_trigger": "monster_pushed_back",
            "max_stacks": 50,
            "more_triggers": [
                {
                    "trigger": "area_changed",
                    "action": {
                        "type": "reset"
                    }
                }
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 26499,
    "large_graphic_id": 26499,
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
**Dragon Slayer** (Guess)
> Hank gains the Hunter role and Dragons become Hank's Favored Foe. Each non-boss area wave has a 50% chance to spawn a Dragon enemy. When a Dragon enemy is slain, Hank increases the effect of Stalwart Encouragement by 100%, stacking multiplicatively up to 10 times. Non-boss waves in boss areas always spawn a dragon, and when a dragon is slain in a boss area, it provides 5 stacks.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2328,
    "flavour_text": "",
    "description": {
        "desc": "Hank gains the Hunter role and Dragons become Hank's Favored Foe. Each non-boss area wave has a $(not_buffed amount___3)% chance to spawn a Dragon enemy. When a Dragon enemy is slain, Hank increases the effect of Stalwart Encouragement by $(not_buffed amount___2)%, stacking multiplicatively up to $max_stacks___2 times. Non-boss waves in boss areas always spawn a dragon, and when a dragon is slain in a boss area, it provides 5 stacks."
    },
    "effect_keys": [
        {
            "effect_string": "hank_dragon_slayer",
            "base_buff_index": 1,
            "monster_ids": [
                1450,
                1451,
                1452,
                1453,
                1454,
                1455,
                1457,
                1458,
                1459,
                1464,
                1465,
                1466,
                1486,
                1486,
                1486
            ]
        },
        {
            "effect_string": "buff_upgrade,100,17079",
            "stacks_on_trigger": "monster_killed_with_tag,dragon",
            "more_triggers": [
                {
                    "trigger": "area_changed",
                    "action": {
                        "type": "reset"
                    }
                }
            ],
            "max_stacks": 10,
            "stacks_multiply": true,
            "show_bonus": true
        },
        {
            "effect_string": "spawn_additional_monsters,50",
            "off_when_benched": true,
            "monster_ids": [
                1450,
                1451,
                1452,
                1453,
                1454,
                1455,
                1457,
                1458,
                1459,
                1464,
                1465,
                1466,
                1486,
                1486,
                1486
            ],
            "spawn_count": 1,
            "non_boss_areas": true,
            "boss_areas": false
        },
        {
            "effect_string": "add_hero_tags,0,hunter"
        },
        {
            "off_when_benched": true,
            "effect_string": "favored_foe,dragon"
        }
    ],
    "requirements": "",
    "graphic_id": 26497,
    "large_graphic_id": 26497,
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

# Items

<span class="itemTableColumn">
    <span class="itemTableRowHeader">
        <span class="itemTableIcon">
            <span style="margin-left:8px;">**Icons**</span>
        </span>
        <span class="itemTableNameSmall">
            **Name**
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Armor Icon](images/hank/26449.png)</span><span class="itemTableIcon2">![Armor Icon](images/hank/26449.png)</span><span class="itemTableIcon3">![Armor Icon](images/hank/26450.png)</span><span class="itemTableIcon4">![Armor Icon](images/hank/26451.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Armor
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Belt Icon](images/hank/26452.png)</span><span class="itemTableIcon2">![Belt Icon](images/hank/26452.png)</span><span class="itemTableIcon3">![Belt Icon](images/hank/26453.png)</span><span class="itemTableIcon4">![Belt Icon](images/hank/26454.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Belt
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Boots Icon](images/hank/26455.png)</span><span class="itemTableIcon2">![Boots Icon](images/hank/26455.png)</span><span class="itemTableIcon3">![Boots Icon](images/hank/26456.png)</span><span class="itemTableIcon4">![Boots Icon](images/hank/26457.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Boots
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Clothing Icon](images/hank/26458.png)</span><span class="itemTableIcon2">![Clothing Icon](images/hank/26458.png)</span><span class="itemTableIcon3">![Clothing Icon](images/hank/26459.png)</span><span class="itemTableIcon4">![Clothing Icon](images/hank/26460.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Clothing
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Energy Bow Icon](images/hank/26461.png)</span><span class="itemTableIcon2">![Energy Bow Icon](images/hank/26461.png)</span><span class="itemTableIcon3">![Energy Bow Icon](images/hank/26462.png)</span><span class="itemTableIcon4">![Energy Bow Icon](images/hank/26463.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Energy Bow
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Trinket Icon](images/hank/26464.png)</span><span class="itemTableIcon2">![Trinket Icon](images/hank/26464.png)</span><span class="itemTableIcon3">![Trinket Icon](images/hank/26465.png)</span><span class="itemTableIcon4">![Trinket Icon](images/hank/26466.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Trinket
        </span>
    </span>
</span>

# Feats

Unknown.

# Legendaries

Unknown.

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unlock Adventure: Let Sleeping Dragons Lie (???)** (Complete Area 50)
> Attempt to calm down a very angry bronze dragon.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Variant 1: TBD** (Complete Area 75)
> 
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Variant 2: TBD** (Complete Area 125)
> 
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Variant 3: TBD** (Complete Area 175)
> 
</div></div>

# Other Champion Images

<span class="championImagesColumn">
    <span class="championImagesRow">
        <span class="championImagesPortrait">
            ![Hank Console Portrait](images/hank/console.png)Console Portrait
        </span>
    </span>
    <span class="championImagesRow">
        <span class="championImagesChests">
            ![Hank Gold Chest Icon](images/hank/chest_gold.png)Gold Chest Icon
        </span>
        <span class="championImagesChests">
            ![Hank Silver Chest Icon](images/hank/chest_silver.png)Silver Chest Icon
        </span>
    </span>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*