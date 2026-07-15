[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Stoki](images/stoki/portrait.png)
        </span>
        <span>
            Portrait
        </span>
    </span>
</span>

# Stoki

Stami Gackle was a fun-loving and reckless youth, but she fled her home when this carefree nature invited tragic loss into her life. She found shelter in Waterdeep with the monks of the Order of the Even-Handed, who gave her a new name and trained her in their ways. Now a capable adventurer, Stoki approaches problems with intense focus and careful consideration, having earned a reputation for being uncommonly stoic. However, Stoki's patient demeanor belies a warrior's ferocity, as she unleashes a rapid flurry of masterful blows to any foe who refuses to back down.

# Changes

Stoki will be a reworked champion in the Highharvestide event on 2 September 2026.

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Focused Strike** (Guess)
> When Stoki attacks she gains a Focus Point for each enemy she hits. She increases the damage of all Champions with a base attack cooldown of 4.0s or faster by 10% for each Focus Point she has, stacking multiplicatively. Focus Points cap at 100 and are reduced by 50% (rounded down) when changing areas.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2869,
    "flavour_text": "",
    "description": {
        "desc": "When Stoki attacks she gains a Focus Point for each enemy she hits. She increases the damage of all Champions with a base attack cooldown of 4.0s or faster by $amount% for each Focus Point she has, stacking multiplicatively. Focus Points cap at $(amount___3) and are reduced by 50% (rounded down) when changing areas.",
        "post": {
            "conditions": [
                {
                    "condition": "not static_desc",
                    "desc": "^^Focus Points: $(stat_value stoki_focus_points 1 none)"
                }
            ]
        }
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,10",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "hero_dps_multiplier_mult,0",
            "amount_expr": "upgrade_amount(20260,0)",
            "amount_func": "mult",
            "stack_func": "get_stat",
            "instance_stat": true,
            "stat": "stoki_focus_points",
            "targets": [
                "all"
            ],
            "filter_targets": [
                {
                    "type": "hero_expr",
                    "hero_expr": "base_attack_cooldown<=4"
                }
            ],
            "amount_updated_listeners": [
                "slot_changed",
                "base_attack_cooldown_changed"
            ],
            "retarget_when_base_attack_cooldown_changed": true,
            "stacks_multiply": true,
            "use_computed_amount_for_description": true,
            "show_bonus": true,
            "show_stacks": false,
            "stack_title": "Focus Points",
            "hide_stack_description": true,
            "off_when_benched": true
        },
        {
            "effect_string": "stoki_focus_point_max,100",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "expression_on_trigger,owner_attack_single_hit",
            "per_trigger_expr": "SetSaveStat(`stoki_focus_points`, true, min(GetSaveStat(`stoki_focus_points`, true)+trigger_count,GetUpgradeAmount(20260,2)))",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "expression_on_trigger,owner_attack_single_hit",
            "per_trigger_expr": "AppendToSaveStat(`stoki_focus_points_this_adventure`, true, 1)",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "expression_on_trigger,area_changed",
            "reduction_mod": 0.5,
            "per_trigger_expr": "SetSaveStat(`stoki_focus_points`, true, floor(GetSaveStat(`stoki_focus_points`, true)* reduction_mod))"
        },
        {
            "effect_string": "expression_on_trigger,owner_attack_single_hit",
            "per_trigger_expr": "SetSaveStat(`stoki_focus_points_this_adventure_server`, false, max(GetSaveStat(`stoki_focus_points_this_adventure`, true), GetSaveStat(`stoki_focus_points_this_adventure_server`, false)))",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "expression_on_trigger,adventure_reset",
            "per_trigger_expr": "SetSaveStat(`stoki_focus_points_this_adventure`, true, 0)",
            "skip_effect_key_desc": true
        }
    ],
    "requirements": "",
    "graphic_id": 5880,
    "large_graphic_id": 5881,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": true,
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
**Golden Palm** (Guess)
> Enemies that have been attacked by Stoki at any point in the current area drop 12.5 more gold when killed for each Focus Point she has, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2870,
    "flavour_text": "",
    "description": {
        "desc": "Enemies that have been attacked by Stoki at any point in the current area drop $amount more gold when killed for each Focus Point she has, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,12.5",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "gold_buff_amount,0",
            "amount_expr": "upgrade_amount(20261,0)",
            "amount_func": "mult",
            "stack_func": "get_stat",
            "instance_stat": true,
            "stat": "stoki_focus_points",
            "amount_updated_listeners": [
                "stacks_changed"
            ],
            "changing_stack_upgade_ids": [
                20260
            ],
            "use_computed_amount_for_description": true,
            "show_bonus": true
        },
        {
            "effect_string": "stoki_golden_palm",
            "off_when_benched": true,
            "broadcast_name": "stoki_debuffs_monster",
            "debuff_before_damage": false,
            "debuff_on_attack_animation": true,
            "debuff_max_stacks": 1,
            "debuffing_attack_ids": [
                42,
                823
            ],
            "debuff_effects": [
                {
                    "effect_string": "increase_monster_gold,0",
                    "amount_expr": "upgrade_amount(20261,1)",
                    "active_graphic_id": 25075,
                    "active_graphic_y": -30,
                    "overlay_play_mode": "stopped",
                    "bottom": true,
                    "stacks_on_reapply": false,
                    "manual_stacking": true,
                    "max_stacks": 1,
                    "use_collection_source": false,
                    "stack_across_effects": false,
                    "update_expression_on_amount_changed": true,
                    "amount_updated_listeners": [
                        "stat_changed,stoki_focus_points"
                    ]
                }
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 5876,
    "large_graphic_id": 5877,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
        "owner_use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "retain_on_slot_changed": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Building Focus** (Guess)
> Stoki keeps track of the total Focus Points she has gained in the current adventure. If Stoki's Focus Points are capped for a given area, she still counts new ones towards this ability. Upon reaching certain milestones, the following effects activate:  
> - 100 Focus Points: Encouragement - Champions adjacent to Stoki have their base attack cooldowns lowered by 1s.  
> - 1000 Focus Points: Flurry of Blows - For every 1000 levels Stoki has, she attacks an additional target with each attack. She prefers to attack different targets, but will attack the same target multiple times if she has already attacked everyone.  
> - 5000 Focus Points: Leadership - Champions adjacent to Stoki have a 0.45% chance to reset their base attack cooldown after attacking for each Focus Point she currently has. Caps at 90%.  
> - 12500 Focus Points: Overflow - When Stoki attacks an enemy that she already attacked, there is a 20% chance the enemy will be stunned for 3 seconds.  
> - 25000 Focus Points: Explosion - If Stoki hits the same enemy two or more times with the same base attack, power radiates from the enemy, dealing 5 seconds worth of BUD damage to itself and all other nearby enemies. Triggers with each extra hit.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2871,
    "flavour_text": "",
    "description": {
        "desc": "Stoki keeps track of the total Focus Points she has gained in the current adventure. If Stoki's Focus Points are capped for a given area, she still counts new ones towards this ability. Upon reaching certain milestones, the following effects activate:^^- 100 Focus Points: Encouragement - Champions adjacent to Stoki have their base attack cooldowns lowered by $(amount___2)s.^- 1000 Focus Points: Flurry of Blows - For every 1000 levels Stoki has, she attacks an additional target with each attack. She prefers to attack different targets, but will attack the same target multiple times if she has already attacked everyone.^- 5000 Focus Points: Leadership - Champions adjacent to Stoki have a 0.45% chance to reset their base attack cooldown after attacking for each Focus Point she currently has. Caps at 90%.^- 12500 Focus Points: Overflow - When Stoki attacks an enemy that she already attacked, there is a $amount___5% chance the enemy will be stunned for $stun_duration___5 seconds.^- 25000 Focus Points: Explosion - If Stoki hits the same enemy two or more times with the same base attack, power radiates from the enemy, dealing $seconds_of_bud___6 seconds worth of BUD damage to itself and all other nearby enemies. Triggers with each extra hit."
    },
    "effect_keys": [
        {
            "effect_string": "apply_effects_at_stacks",
            "show_description": false,
            "apply_effect_stack_amounts": [
                100,
                1000,
                5000,
                12500,
                25000
            ],
            "show_stacks": true,
            "stacks_are_bonus": false,
            "stacks_from_amount_func": "get_stat",
            "instance_stat": true,
            "stat": "stoki_focus_points_this_adventure",
            "amount_updated_listeners": [
                "stat_changed,stoki_focus_points_this_adventure"
            ],
            "off_when_benched": true,
            "active_effect_key_description_prepender": "- ",
            "active_effect_key_description_joiner": "^",
            "stack_title": "Focus Points Gained This Adventure"
        },
        {
            "effect_string": "reduce_attack_cooldown,1",
            "targets": [
                "adj"
            ],
            "apply_manually": true,
            "off_when_benched": true,
            "outgoing_buffs": false,
            "override_key_desc": "Encouragement - Champions adjacent to Stoki have their base attack cooldowns lowered by $(amount)s.",
            "show_bonus": false,
            "show_stacks": false
        },
        {
            "effect_string": "add_attack_targets,1",
            "amount_func": "add",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "as_int(hero_id==14) * floor(hero_level/1000)",
            "amount_updated_listeners": [
                "hero_level_changed"
            ],
            "apply_manually": true,
            "off_when_benched": true,
            "outgoing_buffs": false,
            "override_key_desc": "Flurry of Blows - For every 1000 levels Stoki has, she attacks an additional target with each attack. She prefers to attack different targets, but will attack the same target multiple times if she has already attacked everyone.^Bonus Attack Targets: $amount",
            "use_computed_amount_for_description": true,
            "show_bonus": false,
            "show_stacks": false
        },
        {
            "effect_string": "chance_on_attack_to_reset_attack_cooldown,0.45",
            "targets": [
                "adj"
            ],
            "attack_type": "base_attack",
            "apply_manually": true,
            "off_when_benched": true,
            "outgoing_buffs": false,
            "amount_func": "add",
            "stack_func": "get_stat",
            "instance_stat": true,
            "stat": "stoki_focus_points",
            "effect_cap": 90,
            "override_key_desc": "Leadership - Champions adjacent to Stoki have a $amount% chance to reset their base attack cooldown after attacking. Caps at 90%.",
            "use_computed_amount_for_description": true,
            "show_bonus": false,
            "show_stacks": false
        },
        {
            "effect_string": "stoki_chance_stun_on_repeat_attack,20",
            "stun_duration": 3,
            "apply_manually": true,
            "off_when_benched": true,
            "override_key_desc": "Overflow - When Stoki attacks an enemy that she already attacked, there is a $amount% chance the enemy will be stunned for $stun_duration seconds.",
            "show_bonus": false,
            "show_stacks": false
        },
        {
            "effect_string": "stoki_bud_damage_on_repeat_attack",
            "radius": 100,
            "seconds_of_bud": 5,
            "apply_manually": true,
            "off_when_benched": true,
            "override_key_desc": "Explosion - If Stoki hits the same enemy two or more times with the same base attack, power radiates from the enemy, dealing $seconds_of_bud seconds worth of BUD damage to itself and all other nearby enemies. Triggers with each extra hit.",
            "show_bonus": false,
            "show_stacks": false
        }
    ],
    "requirements": "",
    "graphic_id": 25052,
    "large_graphic_id": 25046,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": true,
        "owner_use_outgoing_description": false,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "is_buff_incoming_formation_abilities_target": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Frenzied Friends** (Guess)
> Stoki additively increases the Focus Points cap of Focused Strike by 10 for each Champion in the formation whose base attack cooldown is 4.0s or lower.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2872,
    "flavour_text": "",
    "description": {
        "desc": "Stoki additively increases the Focus Points cap of Focused Strike by $amount for each Champion in the formation whose base attack cooldown is 4.0s or lower."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,10,20260,2",
            "amount_func": "add",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "base_attack_cooldown<=4",
            "amount_updated_listeners": [
                "slot_changed",
                "base_attack_cooldown_changed"
            ],
            "use_computed_amount_for_description": true,
            "show_bonus": true,
            "percent_values": false,
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 25053,
    "large_graphic_id": 25047,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
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
**Specialisation: All Out Assault** (Guess)
> Stoki tracks the number of attacks her allies have performed in the past 5 seconds and increases the effect of Focused Strike by 30% for each one, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2873,
    "flavour_text": "",
    "description": {
        "desc": "Stoki tracks the number of attacks her allies have performed in the past $recent_attack_window___3 seconds and increases the effect of Focused Strike by $amount% for each one, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,30",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "buff_upgrade,0,20260,1",
            "amount_expr": "upgrade_amount(20264,0)",
            "stacks_on_trigger": "will_stack_manually",
            "stacks_multiply": true,
            "show_bonus": true,
            "show_stacks": true,
            "off_when_benched": true
        },
        {
            "effect_string": "stoki_all_out_assault",
            "recent_attack_window": 5,
            "dps_buff_effect_key_index": 1
        }
    ],
    "requirements": "",
    "graphic_id": 25058,
    "large_graphic_id": 25058,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
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
**Specialisation: Bend It Like Birdsong** (Guess)
> Stoki counts the number of Champions in the formation with a DEX score of 16 or higher. For each such Champion, her base attack cooldown is decreased by 100 seconds, stacking additively, and the effect of Focused Strike is increased by 0.1%, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2874,
    "flavour_text": "",
    "description": {
        "desc": "Stoki counts the number of Champions in the formation with a DEX score of 16 or higher. For each such Champion, her base attack cooldown is decreased by $amount seconds, stacking additively, and the effect of Focused Strike is increased by $amount___2%, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,100"
        },
        {
            "effect_string": "reduce_attack_cooldown,0.1",
            "amount_func": "add",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "GetStat(`Dex`)>=16",
            "amount_updated_listeners": [
                "slot_changed",
                "ability_score_changed"
            ],
            "use_computed_amount_for_description": true,
            "replace_bonus_with_current_value": true,
            "show_bonus": true,
            "show_stacks": true,
            "off_when_benched": true
        },
        {
            "effect_string": "buff_upgrade,100,20260,1",
            "amount_expr": "upgrade_amount(20265,0)",
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "GetStat(`Dex`)>=16",
            "amount_updated_listeners": [
                "slot_changed",
                "ability_score_changed"
            ],
            "use_computed_amount_for_description": true,
            "show_bonus": true,
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 25059,
    "large_graphic_id": 25059,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
        "owner_use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "spec_option_post_apply_info": "Champions in Formation Targeted: $num_stacks"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: A Little Bit Faster Now** (Guess)
> Stoki reduces the base attack cooldown of all Champions with a default base attack cooldown of 6.0 seconds or higher to 4.0 seconds so that they qualify for Frenzied Friends. Their damage is increased by 100% for each 0.1 seconds their base attack cooldown is reduced by this ability, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2875,
    "flavour_text": "",
    "description": {
        "desc": "Stoki reduces the base attack cooldown of all Champions with a default base attack cooldown of 6.0 seconds or higher to 4.0 seconds so that they qualify for Frenzied Friends. Their damage is increased by 100% for each 0.1 seconds their base attack cooldown is reduced by this ability, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,200"
        },
        {
            "effect_string": "buff_incoming_effect_by_expr",
            "effect_id": 2875,
            "effect_index": 2,
            "buff_amount": 100,
            "hero_expr": "max(0, sign(default_base_attack_cooldown-5.99)) * pow((1+(buff_amount/100)), (default_base_attack_cooldown-4)*10)",
            "targets": [
                "all"
            ],
            "filter_targets": [
                {
                    "type": "hero_expr",
                    "hero_expr": "default_base_attack_cooldown>= 6"
                }
            ],
            "amount_updated_listeners": [
                "slot_changed"
            ],
            "skip_effect_key_desc": true,
            "off_when_benched": false
        },
        {
            "effect_string": "buff_incoming_effect_by_expr",
            "effect_id": 2875,
            "effect_index": 3,
            "hero_expr": "max(0, sign(default_base_attack_cooldown-5.99)) * (default_base_attack_cooldown-4)*10",
            "targets": [
                "all"
            ],
            "filter_targets": [
                {
                    "type": "hero_expr",
                    "hero_expr": "default_base_attack_cooldown>= 6"
                }
            ],
            "amount_updated_listeners": [
                "slot_changed"
            ],
            "skip_effect_key_desc": true,
            "off_when_benched": false
        },
        {
            "effect_string": "hero_dps_multiplier_mult,200",
            "amount_expr": "upgrade_amount(20266,0)",
            "targets": [
                "all"
            ],
            "filter_targets": [
                {
                    "type": "hero_expr",
                    "hero_expr": "default_base_attack_cooldown>= 6"
                }
            ],
            "amount_updated_listeners": [
                "slot_changed"
            ],
            "use_computed_amount_for_description": true,
            "override_key_desc": "Increases the damage of $target by $amount%.",
            "hide_amount_rate": true,
            "off_when_benched": false
        },
        {
            "effect_string": "reduce_attack_cooldown,0.2",
            "targets": [
                "all"
            ],
            "filter_targets": [
                {
                    "type": "hero_expr",
                    "hero_expr": "default_base_attack_cooldown>= 6"
                }
            ],
            "amount_updated_listeners": [
                "slot_changed"
            ],
            "use_computed_amount_for_description": true,
            "override_key_desc": "Reduces the cooldown of $target's Base Attack by $amount seconds.",
            "hide_amount_rate": true,
            "off_when_benched": false
        }
    ],
    "requirements": "",
    "graphic_id": 25057,
    "large_graphic_id": 25057,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": true,
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
**Unlock Adventure: The Bandit's Harvest (Stoki)** (Complete Area 50)
> Bandits are attempting to pilfer the harvest during Highharvestide and must be stopped.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![The Farmer's Kids Icon](images/stoki/1094.png) **Variant 1: The Farmer's Kids** (Complete Area 75)
> The Farmer's Daughter and Son take up two slots in the formation
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Due Diligence Icon](images/stoki/1095.png) **Variant 2: Due Diligence** (Complete Area 125)
> Quest requirements are doubled
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Wanton Necromancy Icon](images/stoki/1096.png) **Variant 3: Wanton Necromancy** (Complete Area 175)
> Undead enemies randomly spawn alongside normal monster waves These extra monsters do not drop gold
</div></div>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Stoki" fill="#aaa" data-formationName="Stoki" data-campaignName="Highharvestide" width="279" height="120"><circle cx="135" cy="45" r="15"/><circle cx="135" cy="85" r="15"/><circle cx="95" cy="25" r="15"/><circle cx="95" cy="65" r="15"/><circle cx="95" cy="105" r="15"/><circle cx="55" cy="45" r="15"/><circle cx="55" cy="85" r="15"/><circle cx="15" cy="25" r="15"/><circle cx="15" cy="65" r="15"/><circle cx="15" cy="105" r="15"/><text x="165" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Stoki</text><text x="165" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Highharvestide</text></svg>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*