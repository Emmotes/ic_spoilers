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
    "graphic_id": 0,
    "large_graphic_id": 0,
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
**Insect Plague** (Guess)
> 
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1906,
    "flavour_text": "",
    "description": {
        "desc": ""
    },
    "effect_keys": [
        {
            "effect_string": "penelope_insect_plague"
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
            "show_bonus": true,
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
    "graphic_id": 0,
    "large_graphic_id": 0,
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
**Unknown** (Guess)
> 
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1908,
    "flavour_text": "",
    "description": {
        "desc": ""
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
        "is_formation_ability": true
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
**Swarm Cloud** (Guess)
> Unknown.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 22717,
    "graphic": "Effects/Effect_Penelope_SwarmCloud",
    "v": 2,
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

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Dance of the Ladybugs** (Guess)
> Unknown.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 22777,
    "graphic": "Icons/Champions/Rebalance/Penelope/Icon_Specialization_PenelopeDanceoftheLadybugs",
    "v": 2,
    "fs": 0,
    "p": 0,
    "type": 1,
    "export_params": {
        "uses": [
            "icon"
        ],
        "quantize": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Fury of the Fireflies** (Guess)
> Unknown.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 22778,
    "graphic": "Icons/Champions/Rebalance/Penelope/Icon_Specialization_PenelopeFuryoftheFirelies",
    "v": 2,
    "fs": 0,
    "p": 0,
    "type": 1,
    "export_params": {
        "uses": [
            "icon"
        ],
        "quantize": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Splitting the Hive** (Guess)
> Unknown.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 22779,
    "graphic": "Icons/Champions/Rebalance/Penelope/Icon_Specialization_PenelopeSplittingtheHive",
    "v": 2,
    "fs": 0,
    "p": 0,
    "type": 1,
    "export_params": {
        "uses": [
            "icon"
        ],
        "quantize": true
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