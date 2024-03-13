[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsImage">
        ![PC Portrait for Penelope](images/reworks/penelope.png)Portait
    </span>
</span>

# Penelope

Penelope 'Half-Pint' is a halfling who just wants to be everyone's best friend, even if they are evil, or a plant, or a rock. With friends that already include a treant named Neverember, and a clan of chwinga that have adopted her, Penelope is ready for anything! She has the heart of a true hero and will always stand by her friends, until she goes into shrub mode of course.

# Changes

Penelope is potentially a reworked champion in the Greengrass event on 3 April 2024.

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.
# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![The Crypt of Legends (Penelope) Icon](images/reworks/1456.png) **Unlock Adventure: The Crypt of Legends (Penelope)** (Complete Area 50)
> Pay respects to the heroes of olde during the Feast of the Moon.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Half-Empty Crypts Icon](images/reworks/9112.png) **Variant 1: Half-Empty Crypts** (Complete Area 75)
> Grave Robbers spawn in each area While any Grave Robber remains alive, undead creatures move faster and deal more damage
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Half-Full Outlook Icon](images/reworks/9113.png) **Variant 2: Half-Full Outlook** (Complete Area 125)
> Awakened Cleaning Supplies spawn with each wave These magical cleaning supplies deal more damage and have hits-based health. Penelope can one-shot the cleaning supplies, and thus starts in the formation to help out (she can't be removed)
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Half-Pint Friends Icon](images/reworks/9114.png) **Variant 3: Half-Pint Friends** (Complete Area 175)
> Penelope starts in the formation and can not be moved or removed Penelope attacks a bit faster because she's very excited to make new friends Only Good Champions can be used
</div></div>

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Have You Met My Friends** (Guess)
> Whenever Penelope attacks an enemy and doesn't kill it, for the next 30 seconds, all Champions deal 500% additional damage against them.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1905,
    "flavour_text": "",
    "description": {
        "desc": "Whenever Penelope attacks an enemy and doesn't kill it, for the next 30 seconds, all Champions deal $(amount)% additional damage against them."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "penelope_have_you_met_my_friends_v2,500",
            "debuffing_attack_ids": [
                334
            ],
            "debuff_effects": [
                {
                    "effect_string": "increase_monster_damage,$amount",
                    "active_graphic_id": 664,
                    "active_graphic_x": 0,
                    "active_graphic_y": -40,
                    "for_time": 30,
                    "time_stack_type": "time_reset",
                    "stack_across_effects": true,
                    "use_collection_source": true
                }
            ]
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
**Insect Plague** (Guess)
> Upon entering an area, Penelope summons 4 medium-sized, randomly positioned Insect Swarms on the enemy's side of the battlefield. Enemies who are in a Swarm are slowed by 100% and are afflicted by the Have You Met My Friends debuff. The slow effect can stack multiplicatively if an enemy is inside multiple Swarms. Every second an enemy is in a swarm, it's slowing effect is reduced by 1%. When the slow effect reaches 40%, the swarm is dispersed and disappears.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1906,
    "flavour_text": "",
    "description": {
        "desc": "Upon entering an area, Penelope summons 4 medium-sized, randomly positioned Insect Swarms on the enemy's side of the battlefield. Enemies who are in a Swarm are slowed by $(amount)% and are afflicted by the Have You Met My Friends debuff. The slow effect can stack multiplicatively if an enemy is inside multiple Swarms. Every second an enemy is in a swarm, it's slowing effect is reduced by $(slow_reduction_per_second)%. When the slow effect reaches $(min_slow_amount)%, the swarm is dispersed and disappears."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "show_description": false,
            "effect_string": "penelope_insect_plague,100",
            "slow_reduction_per_second": 1,
            "min_slow_amount": 40,
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
            "slow_reduction_per_second": 1,
            "min_slow_amount": 40,
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
            "slow_reduction_per_second": 1,
            "min_slow_amount": 40,
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
            "slow_reduction_per_second": 1,
            "min_slow_amount": 40,
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

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Chwinga Mask** (Guess)
> When any enemy enters one of Penelope's Insect Swarms, Penelope dons her chwinga mask, calling an elemental friend to her aid. It sits on her shoulder while her mask is on. All Champions adjacent to Penelope gain the following charm(s) based on their tags. Charms last until the party changes areas.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1907,
    "flavour_text": "",
    "description": {
        "desc": "When any enemy enters one of Penelope's Insect Swarms, Penelope dons her chwinga mask, calling an elemental friend to her aid. It sits on her shoulder while her mask is on. All Champions adjacent to Penelope gain the following charm(s) based on their tags. Charms last until the party changes areas."
    },
    "effect_keys": [
        {
            "show_description": false,
            "effect_string": "penelope_chwinga_mask_v2",
            "buff_indicies": [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8
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
                "slot_changed"
            ],
            "override_key_desc": "Healing Charm - Penelope heals $target for $amount every second"
        },
        {
            "apply_manually": true,
            "effect_string": "hero_dps_multiplier_mult,400",
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
            "per_trigger_expr": "BroadcastTrigger(`penelope_support_trigger`, GetUpgradeStacks(14701, 3)) && BroadcastTrigger(`penelope_tanking_trigger`, GetUpgradeStacks(14701, 4))"
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
**Story Time** (Guess)
> Each time a Champion adjacent to Penelope attacks, add a stack of Story Time. The party's gold find is increased by 1% for each stack of Story Time, stacking additively. Story Time stacks are capped at 1000000000. Whenever a boss enemy enters an Insect Swarm, the number of Story Time stacks are increased by 10%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1908,
    "flavour_text": "",
    "description": {
        "desc": "Each time a Champion adjacent to Penelope attacks, add a stack of Story Time. The party's gold find is increased by $(not_buffed amount)% for each stack of Story Time, stacking additively. Story Time stacks are capped at $(max_stacks). Whenever a boss enemy enters an Insect Swarm, the number of Story Time stacks are increased by $(boss_percent)%."
    },
    "effect_keys": [
        {
            "effect_string": "gold_multiplier_mult,1",
            "max_stacks": 1000000000,
            "boss_percent": 10,
            "more_triggers": [
                {
                    "trigger": "on_broadcast_stacks,penelope_adj_attack",
                    "action": {
                        "type": "add_stacks"
                    }
                },
                {
                    "trigger": "on_broadcast_stacks,penelope_boss_entered_swarm",
                    "action": {
                        "type": "add_percent",
                        "percent": 10
                    }
                }
            ],
            "stacks_multiply": false,
            "show_bonus": true,
            "stack_title": "Story Time Stacks"
        },
        {
            "show_description": false,
            "effect_string": "stacks_data_binder_safe",
            "index": 0,
            "stat_name": "penelope_story_time_stacks",
            "is_instanced_stat": true,
            "use_stat_defs": true
        },
        {
            "show_description": false,
            "effect_string": "broadcast_on_trigger,penelope_adj_attack,hero_targeted_by_effect_attacked",
            "targets": [
                "adj"
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

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Keep Your Friends Close** (Guess)
> Increases the effect of Have You Met My Friends by 150% for each Good Champion in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1909,
    "flavour_text": "",
    "description": {
        "desc": "Increases the effect of Have You Met My Friends by $(amount)% for each Good Champion in the formation, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "show_description": false,
            "off_when_benched": true,
            "outgoing_buffs": false,
            "effect_string": "pre_stack_amount,150"
        },
        {
            "effect_string": "buff_upgrade_by_tag_mult,0,good,14699",
            "amount_expr": "upgrade_amount(14703,0)",
            "show_bonus": true,
            "stacks_multiply": true,
            "stack_title": "Good Champions"
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
> Increases the effect of Have You Met My Friends by 125% for each Evil Champion in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1910,
    "flavour_text": "",
    "description": {
        "desc": "Increases the effect of Have You Met My Friends by $(amount)% for each Evil Champion in the formation, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "show_description": false,
            "off_when_benched": true,
            "outgoing_buffs": false,
            "effect_string": "pre_stack_amount,125"
        },
        {
            "effect_string": "buff_upgrade_by_tag_mult,0,evil,14699",
            "amount_expr": "upgrade_amount(14704,0)",
            "show_bonus": true,
            "stacks_multiply": true,
            "stack_title": "Evil Champions"
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
> Increases the effect of Have You Met My Friends by 70% for each Champion in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1911,
    "flavour_text": "",
    "description": {
        "desc": "Increases the effect of Have You Met My Friends by $(amount)% for each Champion in the formation, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "show_description": false,
            "off_when_benched": true,
            "outgoing_buffs": false,
            "effect_string": "pre_stack_amount,70"
        },
        {
            "effect_string": "buff_upgrade_per_crusader,0,14699",
            "amount_expr": "upgrade_amount(14705,0)",
            "show_bonus": true,
            "stacks_multiply": true,
            "stack_title": "Champions"
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
**Specialisation: Fury of the Fire Flies** (Guess)
> Each time one of Penelope's Insect Swarms is dispersed, the effect of Chwinga Mask is increased by 200%, stacking multiplicatively and resetting when you change areas.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1912,
    "flavour_text": "",
    "description": {
        "desc": "Each time one of Penelope's Insect Swarms is dispersed, the effect of Chwinga Mask is increased by $(not_buffed amount)%, stacking multiplicatively and resetting when you change areas."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,200,14701",
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
**Specialisation: Splitting the Hive** (Guess)
> Each time one of Penelope's Insect Swarms is dispersed, another smaller swarm appears randomly (preferring to appear on an enemy if possible), damaging monsters in it for 15 seconds of BUD damage and slowing them using the same rules as the original Insect Plague. These smaller swarms do not spawn additional ones when they disperse.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1913,
    "flavour_text": "",
    "description": {
        "desc": "Each time one of Penelope's Insect Swarms is dispersed, another smaller swarm appears randomly (preferring to appear on an enemy if possible), damaging monsters in it for $(seconds_of_bud) seconds of BUD damage and slowing them using the same rules as the original Insect Plague. These smaller swarms do not spawn additional ones when they disperse."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "show_description": false,
            "effect_string": "penelope_splitting_the_hive,100",
            "aoe_radius": 100,
            "seconds_of_bud": 15,
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
            "aoe_radius": 100,
            "seconds_of_bud": 15,
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
            "aoe_radius": 100,
            "seconds_of_bud": 15,
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
            "aoe_radius": 100,
            "seconds_of_bud": 15,
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
> Each time one of Penelope's Insect Swarms is dispersed, Penelope reduces the cooldown of all adjacent Champions ultimate abilities by 20% of its remaining cooldown.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1914,
    "flavour_text": "",
    "description": {
        "desc": "Each time one of Penelope's Insect Swarms is dispersed, Penelope reduces the cooldown of all adjacent Champions ultimate abilities by $(amount)% of its remaining cooldown."
    },
    "effect_keys": [
        {
            "effect_string": "penelope_dance_of_the_ladybugs,20"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
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
**Swarm Cloud** (Guess)
> Unknown.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 22717,
    "graphic": "Effects/Effect_Penelope_SwarmCloud",
    "v": 3,
    "fs": 0,
    "p": 0,
    "type": 1,
    "export_params": {
        "uses": [
            "effect"
        ],
        "export_animation": true
    }
}
</pre>
</p>
</details>
</div></div>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Penelope" fill="#aaa" data-formationName="Penelope" data-campaignName="Feast of the Moon" width="338" height="140"><circle cx="175" cy="85" r="15"/><circle cx="135" cy="25" r="15"/><circle cx="135" cy="65" r="15"/><circle cx="135" cy="105" r="15"/><circle cx="95" cy="45" r="15"/><circle cx="95" cy="85" r="15"/><circle cx="95" cy="125" r="15"/><circle cx="55" cy="65" r="15"/><circle cx="55" cy="105" r="15"/><circle cx="15" cy="85" r="15"/><text x="205" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Penelope</text><text x="205" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Feast of the Moon</text></svg>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*