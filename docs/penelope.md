[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Penelope](images/penelope/portrait.png)
        </span>
        <span>
            Portrait
        </span>
    </span>
</span>

# Penelope

Penelope 'Half-Pint' is a halfling who just wants to be everyone's best friend, even if they are evil, or a plant, or a rock. With friends that already include a treant named Neverember, and a clan of chwinga that have adopted her, Penelope is ready for anything! She has the heart of a true hero and will always stand by her friends, until she goes into shrub mode of course.

# Changes

Penelope will be a reworked champion in the Feast of the Moon event on 4 November 2026.

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Have You Met My Friends** (Guess)
> Whenever Penelope attacks an enemy and doesn't kill it, all Champions deal 500% additional damage against them. This effect can stack multiplicatively up to 3 times, with buffs applying to the post-stack damage.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2988,
    "flavour_text": "",
    "description": {
        "desc": "Whenever Penelope attacks an enemy and doesn't kill it, all Champions deal $(not_buffed amount)% additional damage against them. This effect can stack multiplicatively up to $max_stacks times, with buffs applying to the post-stack damage."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "penelope_have_you_met_my_friends_v2,500",
            "debuffing_attack_ids": [
                334
            ],
            "max_stacks": 3,
            "debuff_effects": [
                {
                    "effect_string": "increase_monster_damage,$amount",
                    "stack_count_debug": true,
                    "default_stacks": 1,
                    "active_graphic_id": 664,
                    "manual_stacking": true,
                    "active_graphic_x": 0,
                    "active_graphic_y": -40,
                    "stacks_on_reapply": true,
                    "stacks_multiply": true,
                    "max_stacks": "$max_stacks",
                    "stack_across_effects": false,
                    "use_collection_source": true
                }
            ],
            "use_computed_amount_for_description": true
        }
    ],
    "requirements": "",
    "graphic_id": 9105,
    "large_graphic_id": 9104,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "retain_on_slot_changed": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Chwinga Mask** (Guess)
> When any enemy enters one of Penelope's Insect Swarms, Penelope dons her chwinga mask, calling an elemental friend to her aid. It sits on her shoulder while her mask is on. All Champions adjacent to Penelope gain the following charm(s) based on their tags. Charms last until the party changes areas.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2989,
    "flavour_text": "",
    "description": {
        "pre": "When any enemy enters one of Penelope's Insect Swarms, Penelope dons her chwinga mask, calling an elemental friend to her aid. It sits on her shoulder while her mask is on. All Champions adjacent to Penelope gain the following charm(s) based on their tags. Charms last until the party changes areas.",
        "post": {
            "conditions": [
                {
                    "condition": "not short_form",
                    "desc": "^^Tools for the Job Charm (Healing, Support, and Gold Find champions): Penelope increases the damage of all Champions by $(amount)% for each Champion affected by this charm. This effect stacks multiplicatively.^^Healing Charm (Tanking champions): Penelope heals affected Champions for $(amount___3) HP every second."
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
            "show_description": false,
            "effect_string": "penelope_chwinga_mask_v2",
            "buff_indicies": [
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9
            ]
        },
        {
            "apply_manually": true,
            "effect_string": "heal,100",
            "targets": [
                "adj"
            ],
            "filter_targets": [
                {
                    "type": "hero_expr",
                    "hero_expr": "HasTag(`tanking`)"
                }
            ],
            "amount_updated_listeners": [
                "slot_changed",
                "feat_changed",
                "hero_tags_changed"
            ],
            "override_key_desc": "Healing Charm - Penelope heals $target for $amount every second"
        },
        {
            "apply_manually": true,
            "effect_string": "hero_dps_multiplier_mult,0",
            "amount_expr": "upgrade_amount(21235,0)",
            "targets": [
                "all"
            ],
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasTag(`healing`) || HasTag(`support`) || HasTag(`gold`)",
            "per_hero_targets": [
                "adj"
            ],
            "amount_updated_listeners": [
                "slot_changed"
            ],
            "show_bonus": true,
            "stack_title": "Tools for the Job Stacks",
            "total_title": "Tools for the Job Damage Bonus",
            "use_computed_amount_for_description": true,
            "override_key_desc": "Tools for the Job Charm - Penelope increases the damage of all Champions by $amount%"
        },
        {
            "apply_manually": true,
            "effect_string": "do_nothing",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasTag(`healing`) || HasTag(`support`) || HasTag(`gold`)",
            "per_hero_targets": [
                "adj"
            ]
        },
        {
            "apply_manually": true,
            "show_description": false,
            "effect_string": "do_nothing",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasTag(`tanking`)",
            "per_hero_targets": [
                "adj"
            ]
        },
        {
            "apply_manually": true,
            "show_description": false,
            "effect_string": "expression_on_trigger,slot_changed",
            "triggers": [
                {
                    "name": "on_broadcast_trigger",
                    "params": [
                        "penelope_chwinga_applied"
                    ]
                }
            ],
            "per_trigger_expr": "BroadcastTrigger(`penelope_support_trigger`, GetUpgradeStacks(21235, 5)) && BroadcastTrigger(`penelope_tanking_trigger`, GetUpgradeStacks(21235, 4))"
        },
        {
            "apply_manually": true,
            "show_description": false,
            "effect_string": "do_nothing",
            "active_graphic_id": 9098,
            "active_graphic_y": -40,
            "max_stacks": 6,
            "active_graphic_frame_from_stacks": true,
            "more_triggers": [
                {
                    "trigger": "on_broadcast_stacks,penelope_support_trigger",
                    "action": {
                        "type": "set_stacks"
                    }
                }
            ]
        },
        {
            "apply_manually": true,
            "show_description": false,
            "effect_string": "do_nothing",
            "active_graphic_id": 9097,
            "active_graphic_y": -40,
            "max_stacks": 6,
            "active_graphic_frame_from_stacks": true,
            "more_triggers": [
                {
                    "trigger": "on_broadcast_stacks,penelope_tanking_trigger",
                    "action": {
                        "type": "set_stacks"
                    }
                }
            ]
        },
        {
            "apply_manually": true,
            "show_description": false,
            "effect_string": "hero_graphic_override",
            "skin_property_prefix": "chwinga",
            "override_graphic_id": 9095,
            "active_graphic_id": 9096,
            "active_graphic_y": -40
        }
    ],
    "requirements": "",
    "graphic_id": 9107,
    "large_graphic_id": 9106,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "retain_on_slot_changed": true,
        "default_bonus_index": 0
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Insect Plague** (Guess)
> Upon entering an area, Penelope summons 4 medium-sized, randomly positioned Insect Swarms on the enemy's side of the battlefield. Enemies who are in a Swarm are slowed by 100% and are afflicted by the Have You Met My Friends debuff. The slow effect can stack multiplicatively if an enemy is inside multiple Swarms. Every second an enemy is in a swarm, its slowing effect is reduced by 1%. When the slow effect reaches 40%, the swarm is dispersed and disappears.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2996,
    "flavour_text": "",
    "description": {
        "desc": "Upon entering an area, Penelope summons 4 medium-sized, randomly positioned Insect Swarms on the enemy's side of the battlefield. Enemies who are in a Swarm are slowed by $(amount)% and are afflicted by the Have You Met My Friends debuff. The slow effect can stack multiplicatively if an enemy is inside multiple Swarms. Every second an enemy is in a swarm, its slowing effect is reduced by $(slow_reduction_per_second)%. When the slow effect reaches $(min_slow_amount)%, the swarm is dispersed and disappears."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "show_description": false,
            "effect_string": "penelope_insect_plague_v2,100",
            "spawn_rect": [
                0,
                0,
                0.66,
                0.05
            ],
            "default_slow_amount": 100,
            "min_slow_amount": 40,
            "slow_reduction_per_second": 1,
            "aoe_radius": 150,
            "debuff_effects": [
                {
                    "effect_string": "monster_speed_reduce,0",
                    "amount_expr": "upgrade_amount(14700,0)",
                    "use_collection_source": false
                }
            ]
        },
        {
            "off_when_benched": true,
            "show_description": false,
            "effect_string": "penelope_insect_plague,100",
            "spawn_rect": [
                0,
                0.05,
                0.66,
                0.5
            ],
            "default_slow_amount": 100,
            "min_slow_amount": 40,
            "slow_reduction_per_second": 1,
            "aoe_radius": 150,
            "debuff_effects": [
                {
                    "effect_string": "monster_speed_reduce,0",
                    "amount_expr": "upgrade_amount(14700,1)",
                    "use_collection_source": false
                }
            ]
        },
        {
            "off_when_benched": true,
            "show_description": false,
            "effect_string": "penelope_insect_plague,100",
            "spawn_rect": [
                0,
                0.5,
                0.66,
                0.95
            ],
            "default_slow_amount": 100,
            "min_slow_amount": 40,
            "slow_reduction_per_second": 1,
            "aoe_radius": 150,
            "debuff_effects": [
                {
                    "effect_string": "monster_speed_reduce,0",
                    "amount_expr": "upgrade_amount(14700,2)",
                    "use_collection_source": false
                }
            ]
        },
        {
            "off_when_benched": true,
            "show_description": false,
            "effect_string": "penelope_insect_plague,100",
            "spawn_rect": [
                0,
                0.95,
                0.66,
                1
            ],
            "default_slow_amount": 100,
            "min_slow_amount": 40,
            "slow_reduction_per_second": 1,
            "aoe_radius": 150,
            "debuff_effects": [
                {
                    "effect_string": "monster_speed_reduce,0",
                    "amount_expr": "upgrade_amount(14700,3)",
                    "use_collection_source": false
                }
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "retain_on_slot_changed": true
    }
}
</pre>
</p>
</details>
</div></div>

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Keep Your Friends Close** (Guess)
> Increases the effect of Have You Met My Friends by 150% for each Good Champion in the formation, stacking multiplicatively. The maximum stacks of Have You Met My Friends is increased by the number of eligible Champions.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2990,
    "flavour_text": "",
    "description": {
        "desc": "Increases the effect of Have You Met My Friends by $(amount)% for each Good Champion in the formation, stacking multiplicatively. The maximum stacks of Have You Met My Friends is increased by the number of eligible Champions."
    },
    "effect_keys": [
        {
            "show_description": false,
            "off_when_benched": true,
            "outgoing_buffs": false,
            "effect_string": "pre_stack_amount,150"
        },
        {
            "effect_string": "buff_upgrade_by_tag_mult,0,good,21233",
            "amount_expr": "upgrade_amount(21237,0)",
            "show_bonus": true,
            "stacks_multiply": true,
            "stack_title": "Good Champions"
        },
        {
            "effect_string": "buff_upgrade_effect_stacks_max_add,1,21233",
            "amount_func": "add",
            "stack_func": "per_crusader",
            "tag": "good",
            "amount_updated_listeners": [
                "slot_changed",
                "hero_tags_changed"
            ],
            "show_bonus": false,
            "percent_values": false
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "formation_circle_icon": false,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "spec_option_post_apply_info": "Good Champions in Formation: $num_stacks___2"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Keep Your Future Friends Closer** (Guess)
> Increases the effect of Have You Met My Friends by 125% for each Evil Champion in the formation, stacking multiplicatively. The maximum stacks of Have You Met My Friends is increased by the number of eligible Champions.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2991,
    "flavour_text": "",
    "description": {
        "desc": "Increases the effect of Have You Met My Friends by $(amount)% for each Evil Champion in the formation, stacking multiplicatively. The maximum stacks of Have You Met My Friends is increased by the number of eligible Champions."
    },
    "effect_keys": [
        {
            "show_description": false,
            "off_when_benched": true,
            "outgoing_buffs": false,
            "effect_string": "pre_stack_amount,125"
        },
        {
            "effect_string": "buff_upgrade_by_tag_mult,0,evil,21233",
            "amount_expr": "upgrade_amount(21238,0)",
            "show_bonus": true,
            "stacks_multiply": true,
            "stack_title": "Evil Champions"
        },
        {
            "effect_string": "buff_upgrade_effect_stacks_max_add,1,21233",
            "amount_func": "add",
            "stack_func": "per_crusader",
            "tag": "evil",
            "amount_updated_listeners": [
                "slot_changed",
                "hero_tags_changed"
            ],
            "show_bonus": false,
            "percent_values": false
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "formation_circle_icon": false,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "spec_option_post_apply_info": "Evil Champions in Formation: $num_stacks___2"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Everybody Gets To Be Friends** (Guess)
> Increases the effect of Have You Met My Friends by 70% for each Champion in the formation, stacking multiplicatively. The maximum stacks of Have You Met My Friends is increased by the number of eligible Champions.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2992,
    "flavour_text": "",
    "description": {
        "desc": "Increases the effect of Have You Met My Friends by $(amount)% for each Champion in the formation, stacking multiplicatively. The maximum stacks of Have You Met My Friends is increased by the number of eligible Champions."
    },
    "effect_keys": [
        {
            "show_description": false,
            "off_when_benched": true,
            "outgoing_buffs": false,
            "effect_string": "pre_stack_amount,70"
        },
        {
            "effect_string": "buff_upgrade_per_crusader,0,21233",
            "amount_expr": "upgrade_amount(21239,0)",
            "show_bonus": true,
            "stacks_multiply": true,
            "stack_title": "Champions"
        },
        {
            "effect_string": "buff_upgrade_effect_stacks_max_add,1,21233",
            "amount_func": "add",
            "stack_func": "per_crusader",
            "amount_updated_listeners": [
                "slot_changed",
                "hero_tags_changed"
            ],
            "show_bonus": false,
            "percent_values": false
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "formation_circle_icon": false,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "spec_option_post_apply_info": "Champions in Formation: $num_stacks___2"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Fury of the Fireflies** (Guess)
> Each time one of Penelope's Insect Swarms is dispersed, the effect of Chwinga Mask is increased by 400%, stacking multiplicatively and resetting when you change areas.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2993,
    "flavour_text": "",
    "description": {
        "desc": "Each time one of Penelope's Insect Swarms is dispersed, the effect of Chwinga Mask is increased by $(not_buffed amount)%, stacking multiplicatively and resetting when you change areas."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,400,14701",
            "more_triggers": [
                {
                    "trigger": "on_broadcast_stacks,penelope_swarm_dispersed",
                    "action": {
                        "type": "add_stacks"
                    }
                },
                {
                    "trigger": "area_changed",
                    "action": {
                        "type": "reset"
                    }
                }
            ],
            "stacks_multiply": true,
            "show_bonus": true,
            "stack_title": "Dispersed Swarms Stacks"
        },
        {
            "effect_string": "penelope_fury_of_the_fire_flies"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "formation_circle_icon": false,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "retain_on_slot_changed": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Splitting The Hive** (Guess)
> Each time one of Penelope's Insect Swarms is dispersed, two smaller swarm appears randomly (preferring to appear on an enemy if possible, but not in the same place), damaging enemies in them for 30 seconds of BUD damage and slowing them using the same rules as the original Insect Plague. These smaller swarms do not spawn additional ones when they disperse.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2994,
    "flavour_text": "",
    "description": {
        "desc": "Each time one of Penelope's Insect Swarms is dispersed, two smaller swarm appears randomly (preferring to appear on an enemy if possible, but not in the same place), damaging enemies in them for $(seconds_of_bud) seconds of BUD damage and slowing them using the same rules as the original Insect Plague. These smaller swarms do not spawn additional ones when they disperse."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "show_description": false,
            "effect_string": "penelope_splitting_the_hive_v2,100",
            "swarms_to_spawn": 2,
            "spawn_rect": [
                0,
                0,
                0.66,
                0.25
            ],
            "default_slow_amount": 100,
            "aoe_radius": 100,
            "seconds_of_bud": 30,
            "debuff_effects": [
                {
                    "effect_string": "monster_speed_reduce,0",
                    "amount_expr": "upgrade_amount(21234,0)",
                    "use_collection_source": false
                }
            ]
        },
        {
            "off_when_benched": true,
            "show_description": false,
            "effect_string": "penelope_splitting_the_hive,100",
            "swarms_to_spawn": 2,
            "spawn_rect": [
                0,
                0.25,
                0.66,
                0.5
            ],
            "default_slow_amount": 100,
            "aoe_radius": 100,
            "seconds_of_bud": 30,
            "debuff_effects": [
                {
                    "effect_string": "monster_speed_reduce,0",
                    "amount_expr": "upgrade_amount(14707,1)",
                    "use_collection_source": false
                }
            ]
        },
        {
            "off_when_benched": true,
            "show_description": false,
            "effect_string": "penelope_splitting_the_hive,100",
            "swarms_to_spawn": 2,
            "spawn_rect": [
                0,
                0.5,
                0.66,
                0.75
            ],
            "default_slow_amount": 100,
            "aoe_radius": 100,
            "seconds_of_bud": 30,
            "debuff_effects": [
                {
                    "effect_string": "monster_speed_reduce,0",
                    "amount_expr": "upgrade_amount(14707,2)",
                    "use_collection_source": false
                }
            ]
        },
        {
            "off_when_benched": true,
            "show_description": false,
            "effect_string": "penelope_splitting_the_hive,100",
            "swarms_to_spawn": 2,
            "spawn_rect": [
                0,
                0.75,
                0.66,
                1
            ],
            "default_slow_amount": 100,
            "aoe_radius": 100,
            "seconds_of_bud": 30,
            "debuff_effects": [
                {
                    "effect_string": "monster_speed_reduce,0",
                    "amount_expr": "upgrade_amount(14707,3)",
                    "use_collection_source": false
                }
            ]
        },
        {
            "off_when_benched": true,
            "show_description": false,
            "effect_string": "penelope_splitting_the_hive,100",
            "swarms_to_spawn": 2,
            "spawn_rect": [
                0,
                0,
                0.66,
                0.25
            ],
            "default_slow_amount": 100,
            "aoe_radius": 100,
            "seconds_of_bud": 30,
            "debuff_effects": [
                {
                    "effect_string": "monster_speed_reduce,0",
                    "amount_expr": "upgrade_amount(14707,0)",
                    "use_collection_source": false
                }
            ]
        },
        {
            "off_when_benched": true,
            "show_description": false,
            "effect_string": "penelope_splitting_the_hive,100",
            "swarms_to_spawn": 2,
            "spawn_rect": [
                0,
                0.25,
                0.66,
                0.5
            ],
            "default_slow_amount": 100,
            "aoe_radius": 100,
            "seconds_of_bud": 30,
            "debuff_effects": [
                {
                    "effect_string": "monster_speed_reduce,0",
                    "amount_expr": "upgrade_amount(14707,1)",
                    "use_collection_source": false
                }
            ]
        },
        {
            "off_when_benched": true,
            "show_description": false,
            "effect_string": "penelope_splitting_the_hive,100",
            "swarms_to_spawn": 2,
            "spawn_rect": [
                0,
                0.5,
                0.66,
                0.75
            ],
            "default_slow_amount": 100,
            "aoe_radius": 100,
            "seconds_of_bud": 30,
            "debuff_effects": [
                {
                    "effect_string": "monster_speed_reduce,0",
                    "amount_expr": "upgrade_amount(14707,2)",
                    "use_collection_source": false
                }
            ]
        },
        {
            "off_when_benched": true,
            "show_description": false,
            "effect_string": "penelope_splitting_the_hive,100",
            "swarms_to_spawn": 2,
            "spawn_rect": [
                0,
                0.75,
                0.66,
                1
            ],
            "default_slow_amount": 100,
            "aoe_radius": 100,
            "seconds_of_bud": 30,
            "debuff_effects": [
                {
                    "effect_string": "monster_speed_reduce,0",
                    "amount_expr": "upgrade_amount(14707,3)",
                    "use_collection_source": false
                }
            ]
        },
        {
            "off_when_benched": true,
            "show_description": false,
            "effect_string": "penelope_splitting_the_hive,100",
            "swarms_to_spawn": 2,
            "spawn_rect": [
                0,
                0,
                0.66,
                0.25
            ],
            "default_slow_amount": 100,
            "aoe_radius": 100,
            "seconds_of_bud": 30,
            "debuff_effects": [
                {
                    "effect_string": "monster_speed_reduce,0",
                    "amount_expr": "upgrade_amount(14707,0)",
                    "use_collection_source": false
                }
            ]
        },
        {
            "off_when_benched": true,
            "show_description": false,
            "effect_string": "penelope_splitting_the_hive,100",
            "swarms_to_spawn": 2,
            "spawn_rect": [
                0,
                0.25,
                0.66,
                0.5
            ],
            "default_slow_amount": 100,
            "aoe_radius": 100,
            "seconds_of_bud": 30,
            "debuff_effects": [
                {
                    "effect_string": "monster_speed_reduce,0",
                    "amount_expr": "upgrade_amount(14707,1)",
                    "use_collection_source": false
                }
            ]
        },
        {
            "off_when_benched": true,
            "show_description": false,
            "effect_string": "penelope_splitting_the_hive,100",
            "swarms_to_spawn": 2,
            "spawn_rect": [
                0,
                0.5,
                0.66,
                0.75
            ],
            "default_slow_amount": 100,
            "aoe_radius": 100,
            "seconds_of_bud": 30,
            "debuff_effects": [
                {
                    "effect_string": "monster_speed_reduce,0",
                    "amount_expr": "upgrade_amount(14707,2)",
                    "use_collection_source": false
                }
            ]
        },
        {
            "off_when_benched": true,
            "show_description": false,
            "effect_string": "penelope_splitting_the_hive,100",
            "swarms_to_spawn": 2,
            "spawn_rect": [
                0,
                0.75,
                0.66,
                1
            ],
            "default_slow_amount": 100,
            "aoe_radius": 100,
            "seconds_of_bud": 30,
            "debuff_effects": [
                {
                    "effect_string": "monster_speed_reduce,0",
                    "amount_expr": "upgrade_amount(14707,3)",
                    "use_collection_source": false
                }
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "formation_circle_icon": false,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "retain_on_slot_changed": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Dance of the Ladybugs** (Guess)
> Each time one of Penelope's Insect Swarms is dispersed, Penelope reduces the cooldown of all adjacent Champions ultimate abilities by 50% of its remaining cooldown.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2995,
    "flavour_text": "",
    "description": {
        "desc": "Each time one of Penelope's Insect Swarms is dispersed, Penelope reduces the cooldown of all adjacent Champions ultimate abilities by $(amount)% of its remaining cooldown."
    },
    "effect_keys": [
        {
            "effect_string": "penelope_dance_of_the_ladybugs,50"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "formation_circle_icon": false,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "retain_on_slot_changed": true
    }
}
</pre>
</p>
</details>
</div></div>

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unlock Adventure: The Crypt of Legends (Penelope)** (Complete Area 50)
> Pay respects to the heroes of olde during the Feast of the Moon.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Half-Empty Crypts Icon](images/penelope/9112.png) **Variant 1: Half-Empty Crypts** (Complete Area 75)
> Grave Robbers spawn in each area While any Grave Robber remains alive, undead creatures move faster and deal more damage
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Half-Full Outlook Icon](images/penelope/9113.png) **Variant 2: Half-Full Outlook** (Complete Area 125)
> Awakened Cleaning Supplies spawn with each wave These magical cleaning supplies deal more damage and have hits-based health. Penelope can one-shot the cleaning supplies, and thus starts in the formation to help out (she can't be removed)
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Half-Pint Friends Icon](images/penelope/9114.png) **Variant 3: Half-Pint Friends** (Complete Area 175)
> Penelope starts in the formation and can not be moved or removed. Penelope attacks a bit faster because she's very excited to make new friends. Only Good Champions can be used.
</div></div>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Penelope" fill="#aaa" data-formationName="Penelope" data-campaignName="Feast of the Moon" width="338" height="140"><circle cx="175" cy="85" r="15"/><circle cx="135" cy="25" r="15"/><circle cx="135" cy="65" r="15"/><circle cx="135" cy="105" r="15"/><circle cx="95" cy="45" r="15"/><circle cx="95" cy="85" r="15"/><circle cx="95" cy="125" r="15"/><circle cx="55" cy="65" r="15"/><circle cx="55" cy="105" r="15"/><circle cx="15" cy="85" r="15"/><text x="205" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Penelope</text><text x="205" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Feast of the Moon</text></svg>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*