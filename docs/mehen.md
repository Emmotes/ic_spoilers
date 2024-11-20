[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Mehen](images/mehen/portrait.png)
        </span>
        <span>
        Portrait
        </span>
    </span>
</span>

# Mehen

Mehen's life changed three times: once when he was exiled from the dragonborn stronghold of Djerad Thymar for refusing to be his tyrannical father's puppet; once when he took in twin tiefling babies abandoned in the snow; and once when his teenaged daughter, Farideh, made a pact with a devil from the Nine Hells. But Mehen is both adaptable and resilient; nothing out there will break his love for his daughters, his sense of self, or the strike of his falchion.

# Changes

Mehen will be a reworked champion in the Wintershield event on 1 January 2025.

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Attacks

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ultimate: Lightning Breath** (Guess)
> Mehen leaps forward and breaths a cone of lightning that damages all enemies on the screen. If he hits more than 5 enemies, or one of the enemies he hits is a boss, then he stuns the enemies for 10 seconds.  
> Cooldown: 180s (Cap 45s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 826,
    "name": "Lightning Breath",
    "description": "",
    "long_description": "Mehen leaps forward and breaths a cone of lightning that damages all enemies on the screen. If he hits more than 5 enemies, or one of the enemies he hits is a boss, then he stuns the enemies for 10 seconds.",
    "graphic_id": 10502,
    "target": "all",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 0.03,
    "cooldown": 180,
    "animations": [
        {
            "type": "mehen_ultimate",
            "jump_to_target": true,
            "target_offset_x": -300
        }
    ],
    "tags": [
        "ranged",
        "cone",
        "ultimate"
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
**Unknown** (Guess)
> When Mehen is in the formation, Farideh and Havilar become eligible for the current adventure, even if a Patron, Variant, or other restriction would say otherwise.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2181,
    "flavour_text": "",
    "description": {
        "desc": "When Mehen is in the formation, Farideh and Havilar become eligible for the current adventure, even if a Patron, Variant, or other restriction would say otherwise."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "force_allow_hero",
            "hero_ids": [
                33,
                56
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 10496,
    "large_graphic_id": 10492,
    "properties": {
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Grumpy** (Guess)
> Mehen gains a stack of Grumpy for each of the following checks that is met. He increases damage of all Champions in the formation by 100% for each stack of Grumpy he has, stacking multiplicatively.
> - Adjacent to Farideh
> - At least two columns behind Havilar
> - At the top of the column
> - At least three Champions in the column(s) in front of him
> - At least two Champions in the column(s) behind him
> - Adjacent to Champions with an average base attack cooldown of 5
> - Adjacent to at least two Tiefling or Dragonborn Champions
> - At least one other Tiefling or Dragonborn in his column
> - Within 2 slots of Champions with at least 4 unique classes
> - Within 2 slots of Champions with at least 6 unique roles

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2182,
    "flavour_text": "",
    "description": {
        "desc": "Mehen gains a stack of Grumpy for each of the following checks that is met. He increases damage of all Champions in the formation by $amount% for each stack of Grumpy he has, stacking multiplicatively.",
        "post": {
            "conditions": [
                {
                    "condition": "not static_desc",
                    "desc": "^^$stacks_from_effect_key_stacks_desc"
                }
            ]
        }
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack_amount,100"
        },
        {
            "effect_string": "global_dps_multiplier_mult,0",
            "amount_expr": "upgrade_amount(16146,0)",
            "amount_func": "mult",
            "stack_func": "per_other_stack_count",
            "per_other_stack_count_upgrade_id": 16146,
            "per_other_stack_count_effect_key_index": 2,
            "amount_updated_listeners": [
                "slot_changed"
            ],
            "show_bonus": true
        },
        {
            "effect_string": "stacks_from_effect_key_stacks",
            "effect_key_name": "mehen_grumpy_stack",
            "stacks_on_trigger": "will_stack_manually"
        },
        {
            "effect_string": "mehen_grumpy_stack",
            "amount_func": "add",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "hero_id==33",
            "per_hero_targets": [
                {
                    "type": "adj"
                }
            ],
            "post_process_expr": "min(1,input)",
            "amount_updated_listeners": [
                "slot_changed"
            ],
            "condition_description": "Adjacent to Farideh",
            "index": 1
        },
        {
            "effect_string": "mehen_grumpy_stack",
            "amount_func": "add",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "hero_id==56",
            "per_hero_targets": [
                {
                    "type": "slot_if_expr",
                    "if_expr": "col<(base_col-1)"
                }
            ],
            "post_process_expr": "min(1,input)",
            "amount_updated_listeners": [
                "slot_changed"
            ],
            "condition_description": "At least two columns behind Havilar",
            "index": 2
        },
        {
            "effect_string": "mehen_grumpy_stack",
            "amount_func": "add",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "hero_id==110",
            "per_hero_targets": [
                {
                    "type": "col_top"
                }
            ],
            "post_process_expr": "min(1,input)",
            "amount_updated_listeners": [
                "slot_changed"
            ],
            "condition_description": "At the top of the column",
            "index": 3
        },
        {
            "effect_string": "mehen_grumpy_stack",
            "amount_func": "add",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "true",
            "per_hero_targets": [
                {
                    "type": "slot_if_expr",
                    "if_expr": "col<base_col"
                }
            ],
            "post_process_expr": "as_int(input>=3)",
            "amount_updated_listeners": [
                "slot_changed"
            ],
            "condition_description": "At least three Champions in the column(s) in front of him",
            "index": 4
        },
        {
            "effect_string": "mehen_grumpy_stack",
            "amount_func": "add",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "true",
            "per_hero_targets": [
                {
                    "type": "slot_if_expr",
                    "if_expr": "col>base_col"
                }
            ],
            "post_process_expr": "as_int(input>=2)",
            "amount_updated_listeners": [
                "slot_changed"
            ],
            "condition_description": "At least two Champions in the column(s) behind him",
            "index": 5
        },
        {
            "effect_string": "mehen_grumpy_stack",
            "amount_func": "add",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "base_attack_cooldown",
            "per_hero_targets": [
                {
                    "type": "adj"
                }
            ],
            "post_process_expr": "as_int((num_targets > 0) && (input_as_double/max(1,num_targets))<=5)",
            "amount_updated_listeners": [
                "slot_changed"
            ],
            "condition_description": "Adjacent to Champions with an average base attack cooldown of 5",
            "index": 6
        },
        {
            "effect_string": "mehen_grumpy_stack",
            "amount_func": "add",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasTag(`tiefling`)||HasTag(`dragonborn`)",
            "per_hero_targets": [
                {
                    "type": "adj"
                }
            ],
            "post_process_expr": "as_int(input>=2)",
            "amount_updated_listeners": [
                "slot_changed",
                "hero_tags_changed"
            ],
            "condition_description": "Adjacent to at least two Tiefling or Dragonborn Champions",
            "index": 7
        },
        {
            "effect_string": "mehen_grumpy_stack",
            "amount_func": "add",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasTag(`tiefling`)||HasTag(`dragonborn`)",
            "per_hero_targets": [
                {
                    "type": "slot_if_expr",
                    "if_expr": "col==base_col"
                }
            ],
            "post_process_expr": "as_int(input>=2)",
            "amount_updated_listeners": [
                "slot_changed",
                "hero_tags_changed"
            ],
            "condition_description": "At least one other Tiefling or Dragonborn in his column",
            "index": 8
        },
        {
            "effect_string": "mehen_grumpy_stack",
            "amount_func": "add",
            "stack_func": "per_unique_class",
            "target": "distance",
            "distance": 2,
            "self": false,
            "amount_updated_listeners": [
                "slot_changed"
            ],
            "post_process_expr": "as_int(input>=4)",
            "condition_description": "Within 2 slots of Champions with at least 4 unique classes",
            "index": 9
        },
        {
            "effect_string": "mehen_grumpy_stack",
            "amount_func": "add",
            "stack_func": "per_unique_role",
            "target": "distance",
            "distance": 2,
            "self": false,
            "amount_updated_listeners": [
                "slot_changed"
            ],
            "post_process_expr": "as_int(input>=6)",
            "condition_description": "Within 2 slots of Champions with at least 6 unique roles",
            "index": 10
        },
        {
            "effect_string": "expression_on_trigger,area_complete",
            "per_trigger_expr": "AppendToSaveStat(`mehen_grumpy_areas`, false, trigger_count * as_int(GetUpgradeStacks(16146, 1) >= 10))"
        }
    ],
    "requirements": "",
    "graphic_id": 10499,
    "large_graphic_id": 10495,
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
**Intimidating Presence** (Guess)
> When a monster tries to attack any Champion in the formation for the first time, the damage is prevented and the monster is stunned for 5 seconds and takes 200% more damage during this time. If the attacked Champion is Havilar, the duration is 10 seconds instead.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2183,
    "flavour_text": "",
    "description": {
        "desc": "When a monster tries to attack any Champion in the formation for the first time, the damage is prevented and the monster is stunned for $stun_duration seconds and takes $amount% more damage during this time. If the attacked Champion is Havilar, the duration is $buffed_stun_duration seconds instead."
    },
    "effect_keys": [
        {
            "effect_string": "mehen_intimidating_presence,200",
            "havilar_hero_id": 56,
            "stun_duration": 5,
            "buffed_stun_duration": 10,
            "debuff": {
                "effect_string": "increase_monster_damage,0",
                "amount_expr": "upgrade_amount(16147,0)",
                "active_graphic_id": 25440,
                "active_graphic_y": -20,
                "for_time": 5
            },
            "deal_no_damage_effect": {
                "effect_string": "next_attack_deals_no_damage"
            }
        }
    ],
    "requirements": "",
    "graphic_id": 25292,
    "large_graphic_id": 25290,
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
**Unknown** (Guess)
> Mehen increases Gold Find of the formation by 100% for every stack of Grumpy that he has, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2184,
    "flavour_text": "",
    "description": {
        "desc": "Mehen increases Gold Find of the formation by $amount% for every stack of Grumpy that he has, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack_amount,100"
        },
        {
            "effect_string": "gold_multiplier_mult,0",
            "amount_expr": "upgrade_amount(16148,0)",
            "amount_func": "mult",
            "stack_func": "per_other_stack_count",
            "per_other_stack_count_upgrade_id": 16146,
            "per_other_stack_count_effect_key_index": 2,
            "amount_updated_listeners": [
                "slot_changed"
            ],
            "show_bonus": true
        }
    ],
    "requirements": "",
    "graphic_id": 10497,
    "large_graphic_id": 10493,
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
**Expose Weakness** (Guess)
> When a Champion adjacent to Mehen applies a stun, knockback, slow, or root, the enemy takes 1000% more damage for 10 seconds. If Farideh is adjacent to Mehen, she prioritizes attacking those enemies. This debuff does not stack, but the duration is extended if it applies again before it expires.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2185,
    "flavour_text": "",
    "description": {
        "desc": "When a Champion adjacent to Mehen applies a stun, knockback, slow, or root, the enemy takes $amount% more damage for $debuff_duration seconds. If Farideh is adjacent to Mehen, she prioritizes attacking those enemies. This debuff does not stack, but the duration is extended if it applies again before it expires."
    },
    "effect_keys": [
        {
            "effect_string": "mehen_expose_weakness,1000",
            "debuff_duration": 10,
            "debuff": {
                "effect_string": "increase_monster_damage,0",
                "amount_expr": "upgrade_amount(16149,0)",
                "active_graphic_id": 25439,
                "active_graphic_y": -50,
                "for_time": 10
            }
        }
    ],
    "requirements": "",
    "graphic_id": 25291,
    "large_graphic_id": 25289,
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
**Specialisation: Fighting Force** (Guess)
> Mehen increases the effect of Grumpy by 100% for each DPS Champion in the formation, stacking multiplicatively and applying to the post-stack value.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2186,
    "flavour_text": "",
    "description": {
        "desc": "Mehen increases the effect of Grumpy by $amount% for each DPS Champion in the formation, stacking multiplicatively and applying to the post-stack value."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,100",
            "off_when_benched": true
        },
        {
            "effect_string": "buff_upgrade,0,16146,1",
            "amount_expr": "upgrade_amount(16150,0)",
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "as_int(HasTag(`dps`))",
            "show_bonus": true,
            "amount_updated_listeners": [
                "slot_changed",
                "hero_tags_changed"
            ],
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
        "owner_use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "spec_option_post_apply_info": "Champions in Formation Targeted: $num_stacks___2"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Father Figure** (Guess)
> Mehen increases the effect of Grumpy by 150% for each Champion in the formation who is 20 years old or younger, stacking multiplicatively and applying to the post-stack value.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2187,
    "flavour_text": "",
    "description": {
        "desc": "Mehen increases the effect of Grumpy by $amount% for each Champion in the formation who is 20 years old or younger, stacking multiplicatively and applying to the post-stack value."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,150",
            "off_when_benched": true
        },
        {
            "effect_string": "buff_upgrade,0,16146,1",
            "amount_expr": "upgrade_amount(16151,0)",
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "age<=20",
            "per_hero_targets": [
                {
                    "type": "except_heroes",
                    "hero_ids": [
                        146
                    ],
                    "only_in_formation": true
                }
            ],
            "show_bonus": true,
            "amount_updated_listeners": [
                "slot_changed"
            ],
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
        "owner_use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "spec_option_post_apply_info": "Champions in Formation Targeted: $num_stacks___2"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Unknown** (Guess)
> Mehen increases the effect of Grumpy by 300% for each Dragonborn Champion in the formation, stacking multiplicatively and applying to the post-stack value. Farideh and Havilar both gain the Dragonborn species when this spec is chosen.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2188,
    "flavour_text": "",
    "description": {
        "desc": "Mehen increases the effect of Grumpy by $amount% for each Dragonborn Champion in the formation, stacking multiplicatively and applying to the post-stack value. Farideh and Havilar both gain the Dragonborn species when this spec is chosen."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,300",
            "off_when_benched": true
        },
        {
            "effect_string": "buff_upgrade,0,16146,1",
            "amount_expr": "upgrade_amount(16152,0)",
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "as_int(HasTag(`dragonborn`))",
            "show_bonus": true,
            "amount_updated_listeners": [
                "slot_changed",
                "hero_tags_changed"
            ],
            "off_when_benched": true
        },
        {
            "effect_string": "add_hero_tags,0,dragonborn",
            "off_when_benched": true,
            "targets": [
                "all"
            ],
            "filter_targets": [
                {
                    "type": "hero_ids",
                    "hero_ids": [
                        33,
                        56
                    ]
                }
            ],
            "hide_amount_rate": true
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
        "owner_use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "spec_option_post_apply_info": "Champions in Formation Targeted: $num_stacks___2"
    }
}
</pre>
</p>
</details>
</div></div>

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unlock Adventure: The Mechanical Menace (Mehen)** (Complete Area 50)
> Stop the Modron March from crushing Waterdeep under its mechanical heel.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![The Elusive Bounty Icon](images/mehen/10503.png) **Variant 1: The Elusive Bounty** (Complete Area 75)
> Mehen starts in the formation. He can be moved. The pixie arrives in each boss area to taunt Mehen, buffing all enemies so they move 100% faster and deal 100% additional damage. You must defeat her in addition to the area requirements to advance. Getting to know Mehen: To maximize Mehen's benefit within your formation, you'll want to watch his Grumpy stacks and keep them within the middle range. Mehen gains Grumpy stacks based on which column he is in with a gain of 1 stack per second in the front row, to 5 stacks per second in the back row. Mehen loses Grumpy stacks when one of the following things happens to either Mehen, Havilar or Farideh: They attack (10% loss), they take damage (10% loss), or they kill an enemy (5% loss).
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![The Neverending March Continues Icon](images/mehen/10504.png) **Variant 2: The Neverending March Continues** (Complete Area 125)
> Every time a Modron is killed in non-boss areas it shuts down for 5 seconds and then comes back to life with full health. Modron enemies deal 100% additional damage.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Volo's Guide to Grumpy Guys Icon](images/mehen/10505.png) **Variant 3: Volo's Guide to Grumpy Guys** (Complete Area 175)
> Volo has returned to observe the formation. Only Male Champions can be used. Enemies move 100% faster, and deal 100% additional damage. Getting to know Mehen: While Mehen works best with his daughters Farideh & Havilar he's no slouch on his own. Without the Brimstone Angels in your formation, you need to manage Mehen's Grumpy stacks a bit differently. Remember that changing his column will alter how quickly he is gaining Grumpy stacks.
</div></div>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Mehen" fill="#aaa" data-formationName="Mehen" data-campaignName="Wintershield" width="299" height="140"><circle cx="175" cy="45" r="15"/><circle cx="175" cy="85" r="15"/><circle cx="135" cy="25" r="15"/><circle cx="135" cy="105" r="15"/><circle cx="95" cy="45" r="15"/><circle cx="95" cy="125" r="15"/><circle cx="55" cy="25" r="15"/><circle cx="55" cy="105" r="15"/><circle cx="15" cy="45" r="15"/><circle cx="15" cy="85" r="15"/><text x="205" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Mehen</text><text x="205" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Wintershield</text></svg>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*