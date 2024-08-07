[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsImage">
        ![PC Portrait for Rosie](images/rosie/portrait.png)Portrait
    </span>
</span>

# Rosie

Weighing in at just under 30 pounds and with a grandmotherly demeanor befitting her advanced age, Rosie Beestinger is easily mistaken for someone on the wrong side of the 'aggressor/victim' relationship. But this is a mix-up that few people make more than once.

# Changes

Rosie is potentially a reworked champion in the Highharvestide event on 4 September 2024.

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Shadow Arts** (Guess)
> Rosie darts towards a random enemy and swings her staff, dealing 10 seconds of BUD damage to all enemies in a small area.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 794,
    "name": "Shadow Arts",
    "description": "Rosie darts towards a random enemy and swings her staff, dealing 10 seconds of BUD damage to all enemies in a small area.",
    "long_description": "",
    "graphic_id": 0,
    "target": "random",
    "num_targets": 1,
    "aoe_radius": 150,
    "damage_modifier": 1,
    "cooldown": 4.5,
    "animations": [
        {
            "type": "melee_attack",
            "target_offset_x": -60,
            "damage_frame": 4,
            "animation_sequence_name": "attack_b",
            "force_count_for_bud": false,
            "effect_on_monsters": {
                "effect_string": "damage_monster_target_by_bud",
                "hit_monsters": true,
                "damage_mult": 10,
                "after_damage": true
            }
        }
    ],
    "tags": [
        "melee",
        "aoe"
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
**Base Attack: Shadow Step** (Guess)
> Rosie Shadow Steps behind one of the three closest enemies at random and hits them with a flurry of blows.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 795,
    "name": "Shadow Step",
    "description": "Rosie Shadow Steps behind one of the three closest enemies at random and hits them with a flurry of blows.",
    "long_description": "",
    "graphic_id": 0,
    "target": "random_front_3",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 4.5,
    "animations": [
        {
            "type": "melee_attack",
            "animation": "simple_teleport",
            "target_offset_x": 125,
            "damage_frame": 30,
            "teleport_to_frame": 13,
            "teleport_from_frame": 40,
            "hit_frames": [
                21,
                24,
                26,
                30
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
**Ultimate: Grammamancy** (Guess)
> Rosie roots all enemies in place for 5 seconds and becomes a blur of movement, pummeling up to 10 enemies on screen for ultimate damage, and refilling her deflect stacks to max.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 796,
    "name": "Grammamancy",
    "description": "Rosie roots all enemies and darts around, striking up to 10, then prepares to deflect more missiles.",
    "long_description": "Rosie roots all enemies in place for 5 seconds and becomes a blur of movement, pummeling up to 10 enemies on screen for ultimate damage, and refilling her deflect stacks to max.",
    "graphic_id": 5213,
    "target": "random",
    "num_targets": 10,
    "aoe_radius": 0,
    "damage_modifier": 0.033,
    "cooldown": 220,
    "animations": [
        {
            "type": "melee_attack",
            "animation": "split_sequence_multi_target",
            "damage_frame": 8,
            "is_teleport": true,
            "power_up_sequence": {
                "start_frame": 0,
                "end_frame": 34,
                "repeat": true,
                "attack_seq": "ultimate",
                "effect_frames": {
                    "1": {
                        "effect_string": "monster_speed_reduce,100",
                        "for_time": 5,
                        "active_graphic_id": 6729,
                        "active_graphic_y": 0,
                        "activate_on_animation_cancelled": true
                    }
                }
            },
            "sequences": [
                {
                    "hit_frames": [
                        41,
                        48,
                        52
                    ],
                    "start_frame": 34,
                    "damage_frame": 52,
                    "end_frame": 64,
                    "target_offset_x": -50,
                    "attack_seq": "ultimate",
                    "frame_rate": 60
                }
            ],
            "cooldown_sequence": {
                "start_frame": 64,
                "attack_seq": "ultimate",
                "effect_frames": {
                    "-1": {
                        "effect_string": "set_upgrade_stacks_to_max,15605,0",
                        "activate_on_animation_cancelled": true
                    }
                }
            }
        }
    ],
    "tags": [
        "melee",
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

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ultimate: Grammamancy** (Guess)
> Rosie roots all enemies in place for 15 seconds and becomes a blur of movement, pummeling up to 10 enemies on screen for ultimate damage, and refilling her deflect stacks to max.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 801,
    "name": "Grammamancy",
    "description": "Rosie roots all enemies and darts around, striking up to 10, then prepares to deflect more missiles.",
    "long_description": "Rosie roots all enemies in place for 15 seconds and becomes a blur of movement, pummeling up to 10 enemies on screen for ultimate damage, and refilling her deflect stacks to max.",
    "graphic_id": 5213,
    "target": "random",
    "num_targets": 10,
    "aoe_radius": 0,
    "damage_modifier": 0.033,
    "cooldown": 220,
    "animations": [
        {
            "type": "melee_attack",
            "animation": "split_sequence_multi_target",
            "damage_frame": 8,
            "is_teleport": true,
            "power_up_sequence": {
                "start_frame": 0,
                "end_frame": 34,
                "repeat": true,
                "attack_seq": "ultimate",
                "effect_frames": {
                    "1": {
                        "effect_string": "monster_speed_reduce,100",
                        "for_time": 15,
                        "active_graphic_id": 6729,
                        "active_graphic_y": 0,
                        "activate_on_animation_cancelled": true
                    }
                }
            },
            "sequences": [
                {
                    "hit_frames": [
                        41,
                        48,
                        52
                    ],
                    "start_frame": 34,
                    "damage_frame": 52,
                    "end_frame": 64,
                    "target_offset_x": -50,
                    "attack_seq": "ultimate",
                    "frame_rate": 60
                }
            ],
            "cooldown_sequence": {
                "start_frame": 64,
                "attack_seq": "ultimate",
                "effect_frames": {
                    "-1": {
                        "effect_string": "set_upgrade_stacks_to_max,15605,0",
                        "activate_on_animation_cancelled": true
                    }
                }
            }
        }
    ],
    "tags": [
        "melee",
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

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Sassy** (Guess)
> Rosie deals +400% increased damage for every Champion in the formation younger than she is, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2062,
    "flavour_text": "",
    "description": {
        "desc": "Rosie deals +$amount% increased damage for every Champion in the formation younger than she is, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "pre_stack_amount,400"
        },
        {
            "off_when_benched": true,
            "effect_string": "hero_dps_multiplier_mult,0",
            "amount_expr": "upgrade_amount(15604,0)",
            "amount_func": "mult",
            "show_bonus": true,
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "age<110 && hero_id!=146",
            "amount_updated_listeners": [
                "slot_changed"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
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
**Deflect Missiles** (Guess)
> Rosie gains a deflect stack every time she attacks. She can store up to 100 deflect stacks at once. Whenever an enemy attacks the formation with a ranged/magic attack, Rosie consumes a deflect stack and reflects it back at the attacker. The reflected attack deals Rosie's damage with a 100% additively increased chance of dealing a critical hit. This effect can trigger as often as necessary, as long as Rosie has deflect stacks available.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2063,
    "flavour_text": "",
    "description": {
        "desc": "Rosie gains a deflect stack every time she attacks. She can store up to $max_stacks deflect stacks at once. Whenever an enemy attacks the formation with a ranged/magic attack, Rosie consumes a deflect stack and reflects it back at the attacker. The reflected attack deals Rosie's damage with a 100% additively increased chance of dealing a critical hit. This effect can trigger as often as necessary, as long as Rosie has deflect stacks available."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "do_nothing",
            "stacks_on_trigger": "owner_attack",
            "max_stacks": 100,
            "stack_title": "Deflect Stacks",
            "show_stacks": true
        },
        {
            "off_when_benched": true,
            "effect_string": "return_source_damage_when_hit,100",
            "targets": [
                "all"
            ],
            "filter_damage_types": [
                "ranged",
                "magic"
            ],
            "projectile": "return_projectile",
            "take_no_damage": true,
            "require_min_stacks": 1,
            "consume_stacks": 1,
            "stacks_effect_key_index": 0,
            "additional_crits": 1,
            "broadcast_trigger": "rosie_deflected",
            "set_bud": true
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "show_incoming": false,
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
**Timeless Body** (Guess)
> Rosie gains a Timeless Body stack every time she successfully deflects a ranged/magic attack with Deflect Missiles. For each Timeless Body stack she has, Rosie increases the effect of Sassy by 1%, stacking additively. Stacks persist between adventures.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2064,
    "flavour_text": "",
    "description": {
        "desc": "Rosie gains a Timeless Body stack every time she successfully deflects a ranged/magic attack with Deflect Missiles. For each Timeless Body stack she has, Rosie increases the effect of Sassy by $amount%, stacking additively. Stacks persist between adventures."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,1,15604,1",
            "stacks_multiply": false,
            "stacks_on_trigger": "on_broadcast_trigger,rosie_deflected",
            "show_bonus": true,
            "stack_title": "Timeless Body Stacks"
        },
        {
            "off_when_benched": true,
            "effect_string": "stacks_data_binder_safe,0,rosie_timeless_body_stacks",
            "is_instanced_stat": false
        },
        {
            "off_when_benched": true,
            "effect_string": "_rosie_timeless_body_offline_handler"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
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
**Slow Decay** (Guess)
> Whenever Rosie is your BUD-setting Champion, the rate of BUD decay is decreased by 50%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2065,
    "flavour_text": "",
    "description": {
        "desc": "Whenever Rosie is your BUD-setting Champion, the rate of BUD decay is decreased by $amount%."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "decrease_bud_decay_rate,50"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
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
**Unknown** (Guess)
> Rosie's critical hit damage is increased by 100% for every 100 levels she has been leveled up, stacking multiplicatively. Additionally, for every 4th attack, Rosie makes a Shadow Arts attack that deals 10 seconds worth of BUD damage to all enemies in a small area.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2066,
    "flavour_text": "",
    "description": {
        "conditions": [
            {
                "condition": "feat_assigned 1918",
                "desc": "Rosie's critical hit damage is increased by $amount% for every $per_num_levels levels she has been leveled up, stacking multiplicatively. Additionally, for every 3rd attack, Rosie makes a Shadow Arts attack that deals 10 seconds worth of BUD damage to all enemies in a small area."
            },
            {
                "desc": "Rosie's critical hit damage is increased by $amount% for every $per_num_levels levels she has been leveled up, stacking multiplicatively. Additionally, for every 4th attack, Rosie makes a Shadow Arts attack that deals 10 seconds worth of BUD damage to all enemies in a small area."
            }
        ]
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "buff_base_crit_damage_mult,100",
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_num_levels": 100,
            "per_hero_expr": "floor(level/100)",
            "per_hero_targets": [
                "effect_key_slot"
            ],
            "show_bonus": true,
            "amount_updated_listeners": [
                "hero_level_changed"
            ]
        },
        {
            "off_when_benched": true,
            "effect_string": "change_base_attack_every,100,794,4"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
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
**Unlock Ultimate** (Guess)
> Unlocks Rosie's Grammamancy Ultimate Attack.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2100,
    "flavour_text": "",
    "description": {
        "desc": "Unlocks Rosie's Grammamancy Ultimate Attack"
    },
    "effect_keys": [
        {
            "effect_string": "rosie_ult_handler",
            "ult_attack_id": 796,
            "variant_ult_attack_id": 801,
            "variant_adventure_id": 321
        },
        {
            "effect_string": "set_ultimate_attack,796",
            "apply_manually": true
        },
        {
            "effect_string": "set_ultimate_attack,801",
            "apply_manually": true
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": []
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Matriarch** (Guess)
> Increases the effect of Sassy by 100% for every Female or Nonbinary Champion in the formation who is younger than Rosie, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2067,
    "flavour_text": "",
    "description": {
        "desc": "Increases the effect of Sassy by $amount% for every Female or Nonbinary Champion in the formation who is younger than Rosie, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "pre_stack_amount,100"
        },
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,0,15604,1",
            "amount_expr": "upgrade_amount(15609,0)",
            "show_bonus": true,
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "(HasTag(`female`) || (!HasTag(`female`) && !HasTag(`male`))) && age<110",
            "amount_updated_listeners": [
                "slot_changed"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 5211,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": false,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "spec_option_post_apply_info": "Qualified Champions: $num_stacks___2"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Familiar Friends** (Guess)
> Increases the effect of Sassy by 100% for every Champion in the formation that belongs to the "C"-team, Acquisitions Incorporated, or Wafflecrew affiliations, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2068,
    "flavour_text": "",
    "description": {
        "desc": "Increases the effect of Sassy by $amount% for every Champion in the formation that belongs to the \"C\"-team, Acquisitions Incorporated, or Wafflecrew affiliations, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "pre_stack_amount,100"
        },
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,0,15604,1",
            "amount_expr": "upgrade_amount(15610,0)",
            "show_bonus": true,
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasTag(`cteam`) || HasTag(`acqinc`) || HasTag(`wafflecrew`)",
            "amount_updated_listeners": [
                "slot_changed",
                "hero_tags_changed"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 24375,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": false,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "spec_option_post_apply_info": "Qualified Champions: $num_stacks___2"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Grandmother Night** (Guess)
> Increases the effect of Sassy by 100% for every Champion in the formation that is a Halfling, Rogue, or Monk, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2069,
    "flavour_text": "",
    "description": {
        "desc": "Increases the effect of Sassy by $amount% for every Champion in the formation that is a Halfling, Rogue, or Monk, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "pre_stack_amount,100"
        },
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,0,15604,1",
            "amount_expr": "upgrade_amount(15611,0)",
            "show_bonus": true,
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasTag(`halfling`) || HasTag(`rogue`) || HasTag(`monk`)",
            "amount_updated_listeners": [
                "slot_changed"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 24377,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": false,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "spec_option_post_apply_info": "Qualified Champions: $num_stacks___2"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Grandma Bod** (Guess)
> The damage bonus provided by Timeless Body stacks is increased by 200%, and whenever she deflects a ranged/magic attack with Deflect Missiles she gains 4 stacks of Timeless Body instead of 1.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2070,
    "flavour_text": "",
    "description": {
        "conditions": [
            {
                "condition": "feat_assigned 1922",
                "desc": "The damage bonus provided by Timeless Body stacks is increased by $amount%, and whenever she deflects a ranged/magic attack with Deflect Missiles she gains 7 stacks of Timeless Body instead of 1."
            },
            {
                "desc": "The damage bonus provided by Timeless Body stacks is increased by $amount%, and whenever she deflects a ranged/magic attack with Deflect Missiles she gains 4 stacks of Timeless Body instead of 1."
            }
        ]
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,200,15606"
        },
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade_effect_stacks_trigger_add,3,15606"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 24376,
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
**Specialisation: Busy Beestinger** (Guess)
> Rosie's attack speed cooldown is lowered by 0.5 seconds (stacking additively) and her damage is increased by 400% (stacking multiplicatively) for each member of the "C"-Team in the formation, including herself.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2071,
    "flavour_text": "",
    "description": {
        "desc": "Rosie's attack speed cooldown is lowered by $amount seconds (stacking additively) and her damage is increased by $(not_buffed amount___2)% (stacking multiplicatively) for each member of the \"C\"-Team in the formation, including herself."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "reduce_attack_cooldown_per_any_tagged_crusader,0.5,cteam",
            "amount_updated_listeners": [
                "slot_changed",
                "hero_tags_changed"
            ],
            "total_title": "Total Attack Speed Bonus"
        },
        {
            "off_when_benched": true,
            "effect_string": "hero_dps_multiplier_mult,400",
            "show_bonus": true,
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasTag(`cteam`)",
            "amount_updated_listeners": [
                "slot_changed",
                "hero_tags_changed"
            ],
            "total_title": "Total Damage Bonus"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 24374,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": false,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 1,
        "spec_option_post_apply_info": "\"C\"-Team Champions: $num_stacks"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Slower Decay** (Guess)
> Increases Rosie's critical hit damage by 600% and the effect of Slow Decay is set to 75%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2072,
    "flavour_text": "",
    "description": {
        "desc": "Increases Rosie's critical hit damage by $amount% and the effect of Slow Decay is set to $(new_amount___2)%."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "buff_base_crit_damage_mult,600"
        },
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,50,15607",
            "new_amount": 75
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 24378,
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

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![A Fool's Errand (Rosie) Icon](images/rosie/2577.png) **Unlock Adventure: A Fool's Errand (Rosie)** (Complete Area 50)
> Save the village from a foolish prank gone wrong.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![A Lighter Touch Icon](images/rosie/5189.png) **Variant 1: A Lighter Touch** (Complete Area 75)
> Only Champions with STR of 14 or lower can be used. Rosie and Champions with INT of 14 or higher deal 400% additional damage.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Flay the Fools Icon](images/rosie/5190.png) **Variant 2: Flay the Fools** (Complete Area 125)
> Mind Flayers spawn in boss areas. While the Mind Flayer is alive, all other enemies are immune to damage.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Beestingers Unleashed Icon](images/rosie/5191.png) **Variant 3: Beestingers Unleashed** (Complete Area 175)
> Only Strix and Rosie can be used. Their attack and ultimate cooldowns are greatly reduced. Their damage is increased in each area. Deflect Missiles has no cooldown. This variant contains unique dialog!
</div></div>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Rosie" fill="#aaa" data-formationName="Rosie" data-campaignName="Highharvestide" width="319" height="160"><circle cx="175" cy="65" r="15"/><circle cx="175" cy="105" r="15"/><circle cx="135" cy="45" r="15"/><circle cx="135" cy="85" r="15"/><circle cx="95" cy="65" r="15"/><circle cx="95" cy="105" r="15"/><circle cx="55" cy="45" r="15"/><circle cx="55" cy="125" r="15"/><circle cx="15" cy="25" r="15"/><circle cx="15" cy="145" r="15"/><text x="205" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Rosie</text><text x="205" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Highharvestide</text></svg>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*