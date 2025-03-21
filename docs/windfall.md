[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Windfall](images/windfall/portrait.png)
        </span>
        <span>
        Portrait
        </span>
    </span>
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![Model GIF of Windfall](images/windfall/model.gif)
        </span>
        <span>
        Model
        </span>
    </span>
</span>

# Windfall

As a dedicated champion of Tiamat, Windfall has been granted phenomenal power by her master. Her skin glitters with patches of multicolored scales, and in combat, her blade sings with all five of the chromatic dragons' elements. Windfall's enchanted tailcoat shimmers with the colors of the Dragon Queen, and she uses this coat to dazzle patrons and enemies alike.  
A performer at heart, Windfall is ostentatious and charismatic, making small talk with regular patrons and jovially welcoming new faces to the casino.

[5e Tools Bestiary](https://5e.tools/bestiary/windfall-veor.html)

# Basic Information

Windfall will be an upcoming Evergreen champion guesstimated to release on 28 May 2025 with the [Vecna 8 content drop](contentdrops.md#vecna-8---28-may-2025).

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
            <span style="margin-left:8px;">Tiefling (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Class**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Bard (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Roles**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">DPS / Support / Gold / Speed / Debuff / Control (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Age**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Unknown</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Gender**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Female (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Alignment**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Chaotic Evil (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Affiliation**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Unknown</span>
        </span>
    </span>
</span>

# Attacks

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Red Dragon's Green** (Melee)
> Windfall's attacks take on the aspect of a greedy red dragon.  
> Cooldown: 5s (Cap 1.25s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 846,
    "name": "Red Dragon's Greed",
    "description": "Windfall's attacks take on the aspect of a greedy red dragon.",
    "long_description": "",
    "graphic_id": 0,
    "target": "avoid_filler_or_random",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 5,
    "animations": [
        {
            "type": "melee_attack",
            "target_offset_x": -34,
            "damage_frame": 2,
            "jump_sound": 30,
            "sound_frames": {
                "2": 154
            }
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
**Base Attack: Black Dragon's Corrosion** (Melee)
> Windfall's attacks take on the aspect of a vile black dragon.  
> Cooldown: 5s (Cap 1.25s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 848,
    "name": "Black Dragon's Corrosion",
    "description": "Windfall's attacks take on the aspect of a vile black dragon.",
    "long_description": "",
    "graphic_id": 0,
    "target": "armored_and_hits_or_random",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 5,
    "animations": [
        {
            "type": "melee_attack",
            "target_offset_x": -34,
            "damage_frame": 2,
            "jump_sound": 30,
            "sound_frames": {
                "2": 154
            },
            "effects_on_monsters": [
                {
                    "effect_string": "do_nothing,0",
                    "overlay": 26391
                }
            ]
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
**Base Attack: Green Dragon's Spite** (Melee)
> Windfall's attacks take on the aspect of a noxious green dragon.  
> Cooldown: 5s (Cap 1.25s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 849,
    "name": "Green Dragon's Spite",
    "description": "Windfall's attacks take on the aspect of a noxious green dragon.",
    "long_description": "",
    "graphic_id": 0,
    "target": "back",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 5,
    "animations": [
        {
            "type": "melee_attack",
            "target_offset_x": -34,
            "damage_frame": 2,
            "jump_sound": 30,
            "sound_frames": {
                "2": 154
            }
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
**Base Attack: White Dragon's Chill** (Melee)
> Windfall's attacks take on the aspect of a chilling white dragon.  
> Cooldown: 5s (Cap 1.25s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 852,
    "name": "White Dragon's Chill",
    "description": "Windfall's attacks take on the aspect of a chilling white dragon.",
    "long_description": "",
    "graphic_id": 0,
    "target": "slowed_or_random",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 5,
    "animations": [
        {
            "type": "melee_attack",
            "target_offset_x": -34,
            "damage_frame": 2,
            "jump_sound": 30,
            "sound_frames": {
                "2": 154
            }
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
**Base Attack: Blue Dragon's Spark** (Melee)
> Windfall's attacks take on the aspect of a shocking blue dragon.  
> Cooldown: 5s (Cap 1.25s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 853,
    "name": "Blue Dragon's Spark",
    "description": "Windfall's attacks take on the aspect of a shocking blue dragon.",
    "long_description": "",
    "graphic_id": 0,
    "target": "stunned_or_random",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 5,
    "animations": [
        {
            "type": "melee_attack",
            "damage_frame": 8,
            "stun_on_hit": 3,
            "return_to_formation": false,
            "chain_attack_id": 854
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
**Base Attack: Blue Dragon's Spark** (Melee)
> Windfall's attacks take on the aspect of a shocking blue dragon.  
> Cooldown: 5s (Cap 1.25s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 854,
    "name": "Blue Dragon's Spark",
    "description": "Windfall's attacks take on the aspect of a shocking blue dragon.",
    "long_description": "",
    "graphic_id": 0,
    "target": "stunned_or_random",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 5,
    "animations": [
        {
            "type": "ranged_attack",
            "projectile": "chain_lightning",
            "shoot_frame": 1,
            "sound_frames": {
                "1": 169
            },
            "hit_sound": 133,
            "stun_on_hit": 3,
            "shoot_offset_x": 0,
            "shoot_offset_y": 0,
            "projectile_details": {
                "speed": 10000,
                "max_chain_distance": 600,
                "chain_targets": 2,
                "initial_projectile_graphic": "Effect_Windfall_Lightning_Segment1",
                "hit_effect_graphic": "Effect_Windfall_Lightning_Hit",
                "segment_graphics": [
                    "Effect_Windfall_Lightning_Segment1",
                    "Effect_Windfall_Lightning_Segment2",
                    "Effect_Windfall_Lightning_Segment3"
                ]
            },
            "bonus_damage_from": {
                "type": "seconds_of_bud",
                "amount": 5
            }
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
**Ultimate Attack: Stunning Scintillation**
> Windfall's blinding coat erupts in a scintillating flash, dealing 1 ultimate hit to all enemies, stunning and then slowing them.  
> Cooldown: 5s (Cap 1.25s)

<span style="font-size:1.2em;">ⓘ</span> *Note: Very short ultimate cooldowns are almost always for testing purposes and are likely to be increased later.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 855,
    "name": "Stunning Scintillation",
    "description": "Windfall deals 1 ultimate hit to all enemies, stunning them before slowing them.",
    "long_description": "Windfall's blinding coat erupts in a scintillating flash, dealing 1 ultimate hit to all enemies, stunning and then slowing them.",
    "graphic_id": 26385,
    "target": "front",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 5,
    "animations": [
        {
            "type": "ultimate_attack",
            "ultimate": "windfall"
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

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> Windfall can be used in any Vecna: Eve of Ruin campaign adventure or variant, even if she would not normally be available to be used due to variant or patron restrictions.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2295,
    "flavour_text": "",
    "description": {
        "desc": "Windfall can be used in any Vecna: Eve of Ruin campaign adventure or variant, even if she would not normally be available to be used due to variant or patron restrictions."
    },
    "effect_keys": [
        {
            "effect_string": "do_nothing"
        }
    ],
    "requirements": "",
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
**The Long Game** (Guess)
> Windfall increases the damage of all Champions in the column(s) with the most slots by 100%. If multiple columns are tied for the most slots, then each of them are affected.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2296,
    "flavour_text": "",
    "description": {
        "desc": "Windfall increases the damage of all Champions in the column(s) with the most slots by $amount%. If multiple columns are tied for the most slots, then each of them are affected."
    },
    "effect_keys": [
        {
            "effect_string": "hero_dps_multiplier_mult,100",
            "targets": [
                "tallest_column"
            ],
            "use_computed_amount_for_description": true,
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**The Gambler** (Guess)
> When Windfall attacks and defeats an enemy, she gains a Raise stack. Otherwise, she gains a Call stack. Gold find is increased by 100% for each Raise stack, stacking multiplicatively. Windfall's damage and The Long Game are both increased by $amount___2% for each Call stack, stacking multiplicatively. Both are capped at 25 stacks and reset upon changing areas.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2297,
    "flavour_text": "",
    "description": {
        "desc": "When Windfall attacks and defeats an enemy, she gains a Raise stack. Otherwise, she gains a Call stack. Gold find is increased by $amount% for each Raise stack, stacking multiplicatively. Windfall's damage and The Long Game are both increased by $amount___2% for each Call stack, stacking multiplicatively. Both are capped at 25 stacks and reset upon changing areas."
    },
    "effect_keys": [
        {
            "effect_string": "gold_multiplier_mult,100",
            "stacks_on_trigger": "monster_killed_by_owner",
            "more_triggers": [
                {
                    "trigger": "area_changed",
                    "action": {
                        "type": "reset_stacks"
                    }
                }
            ],
            "stack_title": "Raise Stacks",
            "total_title": "Raise Stack Bonus",
            "max_stacks": 25,
            "stacks_multiply": true,
            "show_bonus": true,
            "off_when_benched": true
        },
        {
            "effect_string": "do_nothing,100",
            "stacks_on_trigger": "owner_attack_no_kill",
            "more_triggers": [
                {
                    "trigger": "area_changed",
                    "action": {
                        "type": "reset_stacks"
                    }
                }
            ],
            "stack_title": "Call Stacks",
            "total_title": "Call Stack Bonus",
            "max_stacks": 25,
            "stacks_multiply": true,
            "show_bonus": true,
            "off_when_benched": true
        },
        {
            "effect_string": "hero_dps_multiplier_mult,100",
            "amount_expr": "upgrade_amount(17054,1)",
            "targets": [
                "self"
            ],
            "off_when_benched": true,
            "show_bonus": false
        },
        {
            "effect_string": "buff_upgrade,100,17053",
            "amount_expr": "upgrade_amount(17054,1)",
            "off_when_benched": true,
            "show_bonus": false
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Dragon's Pride** (Guess)
> Windfall increases the effect of The Long Game by 20% for each adventure, variant, and Patron variant you have completed in the Vecna: Eve of Ruin campaign, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2298,
    "flavour_text": "",
    "description": {
        "desc": "Windfall increases the effect of The Long Game by $amount% for each adventure, variant, and Patron variant you have completed in the Vecna: Eve of Ruin campaign, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,20,17053",
            "stacks_multiply": true,
            "stack_func": "get_stat",
            "ided_stat_id": 31,
            "ided_stat_handler": "CompletedAdventuresVariantsAndPatronVariants",
            "use_computed_amount_for_description": true,
            "skip_effect_key_desc": true,
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true
    }
}
</pre>
</p>
</details>
</div></div>

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Red Dragon** (Guess)
> Windfall tries to avoid attacking enemies that don't drop gold or count for quest progress. Her normal attacks light her target on fire, dealing $amount___3 seconds of BUD-based damage to the enemy every second for 5 seconds.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2299,
    "flavour_text": "",
    "description": {
        "desc": "Windfall tries to avoid attacking enemies that don't drop gold or count for quest progress. Her normal attacks light her target on fire, dealing $amount___3 seconds of BUD-based damage to the enemy every second for $time___2 seconds."
    },
    "effect_keys": [
        {
            "effect_string": "change_base_attack,846"
        },
        {
            "effect_string": "chance_attack_adds_dot,300,5,1,100,846",
            "pop_damage": true,
            "use_bud": true,
            "graphic": {
                "active_graphic_id": 26386
            }
        },
        {
            "effect_string": "do_nothing,3"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Blue Dragon** (Guess)
> Windfall gains the Control role and she prefers to attack stunned enemies. Her normal attacks are charged with lightning, striking out at up to two other random enemies, dealing 5 seconds of BUD-based damage to them, and stunning all enemies damaged for 3 seconds.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2300,
    "flavour_text": "",
    "description": {
        "desc": "Windfall gains the Control role and she prefers to attack stunned enemies. Her normal attacks are charged with lightning, striking out at up to two other random enemies, dealing 5 seconds of BUD-based damage to them, and stunning all enemies damaged for 3 seconds."
    },
    "effect_keys": [
        {
            "effect_string": "add_hero_tags,0,control"
        },
        {
            "effect_string": "change_base_attack,853"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Green Dragon** (Guess)
> Windfall prefers to attack the farthest target. Her normal attacks exude a small cloud of poisonous gas around the target for 10 seconds. Enemies in the gas cloud take 100 seconds of BUD-based damage every second while they are in the area.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2301,
    "flavour_text": "",
    "description": {
        "desc": "Windfall prefers to attack the farthest target. Her normal attacks exude a small cloud of poisonous gas around the target for 10 seconds. Enemies in the gas cloud take $amount___2 seconds of BUD-based damage every second while they are in the area."
    },
    "effect_keys": [
        {
            "effect_string": "change_base_attack,849"
        },
        {
            "effect_string": "add_monster_hit_effects,100",
            "optional_attack_ids": [
                849
            ],
            "monster_effect": {
                "effect_string": "ground_effect_area,$amount",
                "area_key": "green_dragon_poison_clouds",
                "drop_on_hero": true,
                "radius": 100,
                "duration": 10,
                "area_effects": [
                    {
                        "effect_string": "bud_dot,2",
                        "tick_rate": 1,
                        "total_ticks": 9999,
                        "for_time": "10",
                        "time_stack_type": "time_reset",
                        "use_collection_source": true,
                        "stack_across_effects": false
                    }
                ],
                "cloud_graphics": [
                    "Effect_WyrmspeakerGreen_CloudKill1",
                    "Effect_WyrmspeakerGreen_CloudKill2"
                ],
                "debris_graphics": [],
                "primary_graphics": [],
                "density": 7
            }
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
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
**Black Dragon** (Guess)
> Windfall gains the Breaker role and she prefers to attack armored or hits-based enemies. Her normal attacks coat the target in Acid, dealing 10 seconds of BUD-based damage and all successful attacks against those targets break an additional piece of armored or segmented health.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2302,
    "flavour_text": "",
    "description": {
        "desc": "Windfall gains the Breaker role and she prefers to attack armored or hits-based enemies. Her normal attacks coat the target in Acid, dealing $amount___3 seconds of BUD-based damage and all successful attacks against those targets break an additional piece of armored or segmented health."
    },
    "effect_keys": [
        {
            "effect_string": "add_hero_tags,0,breaker"
        },
        {
            "effect_string": "change_base_attack,848"
        },
        {
            "effect_string": "hero_deal_bud_on_attack,10"
        },
        {
            "effect_string": "windfall_black_dragon_debuff,0",
            "debuff_max_stacks": 1,
            "debuffing_attack_ids": [
                848
            ],
            "debuff_before_damage": false,
            "off_when_benched": true,
            "debuff_effects": [
                {
                    "effect_string": "increase_damage_on_armor_and_hits,1",
                    "active_graphic_id": 26391,
                    "stacks_on_reapply": false,
                    "manual_stacking": true,
                    "default_stacks": 0,
                    "max_stacks": 1,
                    "stacks_multiply": false,
                    "use_collection_source": true
                }
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
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
**White Dragon** (Guess)
> Windfall gains the Control role and she prefers to attack slowed enemies. Her normal attacks create a medium cloud of icy air for 5 seconds around the target. Enemies in the cloud take 1 second of BUD-based damage every second while they are in the area and are slowed by 50%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2303,
    "flavour_text": "",
    "description": {
        "desc": "Windfall gains the Control role and she prefers to attack slowed enemies. Her normal attacks create a medium cloud of icy air for 5 seconds around the target. Enemies in the cloud take 1 second of BUD-based damage every second while they are in the area and are slowed by 50%."
    },
    "effect_keys": [
        {
            "effect_string": "add_hero_tags,0,control"
        },
        {
            "effect_string": "change_base_attack,852"
        },
        {
            "effect_string": "add_monster_hit_effects,100",
            "optional_attack_ids": [
                852
            ],
            "monster_effect": {
                "effect_string": "ground_effect_area,$amount",
                "area_key": "green_dragon_poison_clouds",
                "drop_on_hero": true,
                "radius": 150,
                "duration": 5,
                "area_effects": [
                    {
                        "effect_string": "bud_dot,1",
                        "tick_rate": 1,
                        "total_ticks": 9999,
                        "for_time": "5",
                        "time_stack_type": "time_reset",
                        "use_collection_source": true,
                        "stack_across_effects": false
                    }
                ],
                "cloud_graphics": [
                    "Effect_FluffyCloud1",
                    "Effect_FluffyCloud2"
                ],
                "debris_graphics": [],
                "primary_graphics": [],
                "density": 10
            }
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
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
            <span class="itemTableIcon1">![Casino I Drink Icon](images/windfall/26324.png)</span><span class="itemTableIcon2">![Casino I Drink Icon](images/windfall/26324.png)</span><span class="itemTableIcon3">![Casino I Drink Icon](images/windfall/26325.png)</span><span class="itemTableIcon4">![Casino I Drink Icon](images/windfall/26326.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Casino I Drink
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Casino Item Icon](images/windfall/26327.png)</span><span class="itemTableIcon2">![Casino Item Icon](images/windfall/26327.png)</span><span class="itemTableIcon3">![Casino Item Icon](images/windfall/26328.png)</span><span class="itemTableIcon4">![Casino Item Icon](images/windfall/26329.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Casino Item
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Cloak Icon](images/windfall/26330.png)</span><span class="itemTableIcon2">![Cloak Icon](images/windfall/26330.png)</span><span class="itemTableIcon3">![Cloak Icon](images/windfall/26331.png)</span><span class="itemTableIcon4">![Cloak Icon](images/windfall/26332.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Cloak
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Instrument Icon](images/windfall/26333.png)</span><span class="itemTableIcon2">![Instrument Icon](images/windfall/26333.png)</span><span class="itemTableIcon3">![Instrument Icon](images/windfall/26334.png)</span><span class="itemTableIcon4">![Instrument Icon](images/windfall/26335.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Instrument
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Tiamat Item Icon](images/windfall/26336.png)</span><span class="itemTableIcon2">![Tiamat Item Icon](images/windfall/26336.png)</span><span class="itemTableIcon3">![Tiamat Item Icon](images/windfall/26337.png)</span><span class="itemTableIcon4">![Tiamat Item Icon](images/windfall/26338.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Tiamat Item
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Weapons Icon](images/windfall/26339.png)</span><span class="itemTableIcon2">![Weapons Icon](images/windfall/26339.png)</span><span class="itemTableIcon3">![Weapons Icon](images/windfall/26340.png)</span><span class="itemTableIcon4">![Weapons Icon](images/windfall/26341.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Weapons
        </span>
    </span>
</span>

# Feats

Unknown.

# Legendaries

Unknown.

# Adventures and Variants

Unknown.

# Other Champion Images

<span class="championImagesColumn">
    <span class="championImagesRow">
        <span class="championImagesPortrait">
            ![Windfall Console Portrait](images/windfall/console.png)Console Portrait
        </span>
    </span>
    <span class="championImagesRow">
        <span class="championImagesChests">
            ![Windfall Gold Chest Icon](images/windfall/chest_gold.png)Gold Chest Icon
        </span>
    </span>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*