[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Sheila](images/sheila/portrait.png)
        </span>
        <span>
        Portrait
        </span>
    </span>
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![Model GIF of Sheila](images/sheila/model.gif)
        </span>
        <span>
        Model
        </span>
    </span>
</span>

# Sheila

Sheila, the Thief, aged 13, has the Cloak of Invisibility which makes her invisible when the hood is raised over her head. Although occasionally emotionally vulnerable and with a great fear of being alone in the realm, Sheila regularly utilizes the stealth attributes of her cloak at great peril to herself for the benefit of the common goals of her group.

[D&D (TV Series) - Wikipedia](https://en.wikipedia.org/wiki/Dungeons_%26_Dragons_(TV_series))

# Basic Information

Sheila will be a new champion in the Fleetswake event on 12 March 2025 (guesstimated a week after event start potentially due to the Worst the Wait event augment).

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
            <span style="margin-left:8px;">Rogue (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Roles**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Support / Debuff / Control (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Age**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">13 (Guess)</span>
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

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Sheila" fill="#aaa" data-formationName="Sheila" data-campaignName="Fleetswake" width="330" height="160"><circle cx="215" cy="85" r="15"/><circle cx="175" cy="65" r="15"/><circle cx="175" cy="105" r="15"/><circle cx="135" cy="85" r="15"/><circle cx="95" cy="65" r="15"/><circle cx="95" cy="105" r="15"/><circle cx="55" cy="45" r="15"/><circle cx="55" cy="125" r="15"/><circle cx="15" cy="25" r="15"/><circle cx="15" cy="145" r="15"/><text x="245" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Sheila</text><text x="245" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Fleetswake</text></svg>
</span>

# Attacks

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Unseen Strike** (Melee)
> Sheila turns invisible and deals 1 hit to the closest enemy.  
> Cooldown: 6s (Cap 1.5s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 838,
    "name": "Unseen Strike",
    "description": "Sheila turns invisible and deals 1 hit to the closest enemy.",
    "long_description": "",
    "graphic_id": 0,
    "target": "front",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 6,
    "animations": [
        {
            "type": "melee_attack",
            "animation": "simple_teleport",
            "damage_frame": 34,
            "teleport_to_frame": 34,
            "teleport_from_frame": 37,
            "hit_frames": [
                34
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
**Ultimate Attack: Ultimate Invisibility**
> Sheila turns invisible for a short while and attacks each enemy.  
> Cooldown: 360s (Cap 90s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 839,
    "name": "Ultimate Invisibility",
    "description": "Sheila turns invisible and attacks each enemy.",
    "long_description": "Sheila turns invisible for a short while and attacks each enemy.",
    "graphic_id": 25742,
    "target": "all",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 360,
    "animations": [
        {
            "type": "ultimate_attack",
            "ultimate": "sheila"
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

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Potion Regent Scavenger** (Guess)
> Sheila can help scavenge up to 2500 additional Potion Reagents when killing bosses. While this cap is not reached, Sheila has a 10% chance of scavenging 5 Potion Reagents each time a boss is defeated. The cap increases by 100 every day.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2227,
    "flavour_text": "",
    "description": {
        "desc": "Sheila can help scavenge up to $(current_scavenge_cap sheila_potion_reagent_scavenger floor) additional Potion Reagents when killing bosses. While this cap is not reached, Sheila has a $amount% chance of scavenging $amount_per_drop Potion Reagents each time a boss is defeated. The cap increases by $cap_increase_per_day every day.",
        "post": {
            "conditions": [
                {
                    "condition": "not static_desc",
                    "desc": "^^Potion Reagents Scavenged: $(stat_value sheila_reagents_collected 0 none) ($(stat_value sheila_reagents_collected_this_adventure 1 none) this adventure)"
                }
            ]
        }
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "scavenge_items,10",
            "id": "sheila_potion_reagent_scavenger",
            "item_type": "potion_reagents",
            "initial_cap": 2500,
            "cap_increase_per_day": 100,
            "start_date": "2025-01-01 12:00:00",
            "total_collected_stat": "sheila_reagents_collected",
            "adventure_collected_stat": "sheila_reagents_collected_this_adventure",
            "upgrade_id": 16540,
            "amount_per_drop": 5
        }
    ],
    "requirements": "",
    "graphic_id": 25728,
    "large_graphic_id": 25721,
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
**Cloak of Invisibility** (Guess)
> Every time Sheila attacks, the enemies become less coordinated, opening them up to more critical hits. For each attack, increase the Critical Hit Chance of all Champions by 2%, and increase their Critical Hit Damage by 10%, stacking additively up to 10 times and resetting every time you change areas.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2228,
    "flavour_text": "",
    "description": {
        "desc": "Every time Sheila attacks, the enemies become less coordinated, opening them up to more critical hits. For each attack, increase the Critical Hit Chance of all Champions by $(not_buffed amount)%, and increase their Critical Hit Damage by $(not_buffed amount___2)%, stacking additively up to $max_stacks times and resetting every time you change areas."
    },
    "effect_keys": [
        {
            "effect_string": "global_buff_base_crit_chance_add,2",
            "max_stacks": 10,
            "stacks_on_trigger": "owner_base_attack",
            "more_triggers": [
                {
                    "trigger": "area_changed",
                    "action": {
                        "type": "reset"
                    }
                }
            ],
            "off_when_benched": true,
            "show_bonus": true,
            "total_title": "Total Crit Chance Bonus"
        },
        {
            "effect_string": "global_buff_base_crit_damage,10",
            "max_stacks": 10,
            "stacks_on_trigger": "owner_base_attack",
            "more_triggers": [
                {
                    "trigger": "area_changed",
                    "action": {
                        "type": "reset"
                    }
                }
            ],
            "off_when_benched": true,
            "show_bonus": true,
            "total_title": "Total Crit Damage Bonus"
        }
    ],
    "requirements": "",
    "graphic_id": 25726,
    "large_graphic_id": 25719,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
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
**Kind Heart** (Guess)
> Sheila increases the damage of all Good Champions by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2229,
    "flavour_text": "",
    "description": {
        "desc": "Sheila increases the damage of all Good Champions by $amount%."
    },
    "effect_keys": [
        {
            "effect_string": "hero_dps_multiplier_mult,100",
            "targets": [
                "all"
            ],
            "filter_targets": [
                {
                    "type": "hero_expr",
                    "hero_expr": "HasTag(`good`)"
                }
            ],
            "off_when_benched": true,
            "formation_arrows_for_effected_only": true,
            "retarget_when_any_hero_slot_changed": true,
            "retarget_when_hero_tags_changed": true
        }
    ],
    "requirements": "",
    "graphic_id": 25727,
    "large_graphic_id": 25720,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Confusing Strike** (Guess)
> Sheila gains the Control role. Sheila's base and ultimate attacks confuse her targets for 3 seconds. Confused enemies are stunned, take 1000% additional damage, and face the other direction.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2221,
    "flavour_text": "",
    "description": {
        "desc": "Sheila gains the Control role. Sheila's base and ultimate attacks confuse her targets for 3 seconds. Confused enemies are stunned, take $amount% additional damage, and face the other direction."
    },
    "effect_keys": [
        {
            "effect_string": "sheila_confusing_strike,1000",
            "off_when_benched": true,
            "debuff_before_damage": true,
            "debuffing_attack_ids": [
                838,
                839
            ],
            "debuff_effects": [
                {
                    "effect_string": "increase_monster_damage,1000",
                    "for_time": 3,
                    "use_collection_source": true
                }
            ]
        },
        {
            "effect_string": "add_attack_stun,100,3,1509",
            "off_when_benched": true
        },
        {
            "effect_string": "add_hero_tags,0,control",
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 25734,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
        "owner_use_outgoing_description": true,
        "default_bonus_index": 0,
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
**Enraging Strike** (Guess)
> Sheila's base and ultimate attacks enrage her targets. The damage enraged enemies take increases by 15% every 2 seconds, stacking multiplicatively up to 30 times. The stacks reset when the enemy takes out their anger by attacking a Champion.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2222,
    "flavour_text": "",
    "description": {
        "desc": "Sheila's base and ultimate attacks enrage her targets. The damage enraged enemies take increases by 15% every 2 seconds, stacking multiplicatively up to 30 times. The stacks reset when the enemy takes out their anger by attacking a Champion."
    },
    "effect_keys": [
        {
            "effect_string": "sheila_enraging_strike",
            "off_when_benched": true,
            "debuff_before_damage": true,
            "debuffing_attack_ids": [
                838,
                839
            ],
            "debuff_effects": [
                {
                    "effect_string": "increase_monster_damage,15",
                    "max_stacks": "30",
                    "stacks_multiply": true,
                    "stacks_on_trigger": "on_timer,2",
                    "more_triggers": [
                        {
                            "trigger": "hero_attacked",
                            "target": "all_slots",
                            "action": {
                                "type": "reset"
                            }
                        }
                    ],
                    "active_graphic_id": 25744,
                    "active_graphic_y": -120,
                    "use_collection_source": true,
                    "use_stack_as_alpha": true,
                    "min_stack_alpha": 0.4,
                    "pre_max_stack_alpha": 0.8
                }
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 25735,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
        "owner_use_outgoing_description": true,
        "retain_on_slot_changed": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Frightning Strike** (Guess)
> Sheila's base and ultimate attacks frighten her targets. Frightened enemies take 100% more damage from critical hits, stacking multiplicatively up to 8 times per enemy.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2223,
    "flavour_text": "",
    "description": {
        "desc": "Sheila's base and ultimate attacks frighten her targets. Frightened enemies take $(not_buffed amount)% more damage from critical hits, stacking multiplicatively up to 8 times per enemy."
    },
    "effect_keys": [
        {
            "effect_string": "sheila_frightening_strike,100",
            "off_when_benched": true,
            "debuff_before_damage": true,
            "debuffing_attack_ids": [
                838,
                839
            ],
            "debuff_effects": [
                {
                    "effect_string": "buff_incoming_crit_damage,100",
                    "max_stacks": 8,
                    "stacks_multiply": true,
                    "active_graphic_id": 25745,
                    "active_graphic_y": -120,
                    "use_collection_source": true,
                    "stacks_on_reapply": true,
                    "manual_stacking": true,
                    "use_stack_as_alpha": true,
                    "min_stack_alpha": 0.4,
                    "pre_max_stack_alpha": 0.8
                }
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 25736,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
        "owner_use_outgoing_description": true,
        "retain_on_slot_changed": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**A Rosy Outlook** (Guess)
> Sheila increases the damage bonus of Kind Heart by 100% for each Female or Non-Binary Champion in the formation, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2224,
    "flavour_text": "",
    "description": {
        "desc": "Sheila increases the damage bonus of Kind Heart by $amount% for each Female or Non-Binary Champion in the formation, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,100",
            "off_when_benched": true
        },
        {
            "effect_string": "buff_upgrade,0,16538",
            "off_when_benched": true,
            "amount_expr": "upgrade_amount(16543,0)",
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasTag(`female`) || HasTag(`non_binary`)",
            "show_bonus": true,
            "amount_updated_listeners": [
                "slot_changed",
                "ability_score_changed"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 25733,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
        "owner_use_outgoing_description": true,
        "default_bonus_index": 0,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "spec_option_post_apply_info": "Qualified Champions: $num_stacks___2"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Youthful Allies** (Guess)
> Sheila increases the damage bonus of Kind Heart by 100% for each Champion in the formation with an age of 20 or less, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2225,
    "flavour_text": "",
    "description": {
        "desc": "Sheila increases the damage bonus of Kind Heart by $amount% for each Champion in the formation with an age of 20 or less, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,100",
            "off_when_benched": true
        },
        {
            "effect_string": "buff_upgrade,0,16538",
            "off_when_benched": true,
            "amount_expr": "upgrade_amount(16542,0)",
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "min_age <= 20 && hero_id != 146",
            "show_bonus": true,
            "amount_updated_listeners": [
                "slot_changed",
                "ability_score_changed"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 25738,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
        "owner_use_outgoing_description": true,
        "default_bonus_index": 0,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "spec_option_post_apply_info": "Qualified Champions: $num_stacks___2"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Meekly Meeting** (Guess)
> Sheila increases the damage bonus of Kind Heart by 100% for each Champion in the formation with a total ability score of 78 or less, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2226,
    "flavour_text": "",
    "description": {
        "desc": "Sheila increases the damage bonus of Kind Heart by $amount% for each Champion in the formation with a total ability score of 78 or less, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,100",
            "off_when_benched": true
        },
        {
            "effect_string": "buff_upgrade,0,16538",
            "off_when_benched": true,
            "amount_expr": "upgrade_amount(16541,0)",
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "GetStat(`total_ability_score`) <= 78",
            "show_bonus": true,
            "amount_updated_listeners": [
                "slot_changed",
                "ability_score_changed"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 25737,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
        "owner_use_outgoing_description": true,
        "default_bonus_index": 0,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "spec_option_post_apply_info": "Qualified Champions: $num_stacks___2"
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
            <span class="itemTableIcon1">![Belt Icon](images/sheila/25639.png)</span><span class="itemTableIcon2">![Belt Icon](images/sheila/25639.png)</span><span class="itemTableIcon3">![Belt Icon](images/sheila/25640.png)</span><span class="itemTableIcon4">![Belt Icon](images/sheila/25641.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Belt
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Bobby Birthday Presents Icon](images/sheila/25642.png)</span><span class="itemTableIcon2">![Bobby Birthday Presents Icon](images/sheila/25642.png)</span><span class="itemTableIcon3">![Bobby Birthday Presents Icon](images/sheila/25643.png)</span><span class="itemTableIcon4">![Bobby Birthday Presents Icon](images/sheila/25644.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Bobby Birthday Presents
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Boots Icon](images/sheila/25645.png)</span><span class="itemTableIcon2">![Boots Icon](images/sheila/25645.png)</span><span class="itemTableIcon3">![Boots Icon](images/sheila/25646.png)</span><span class="itemTableIcon4">![Boots Icon](images/sheila/25647.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Boots
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Clasp Icon](images/sheila/25648.png)</span><span class="itemTableIcon2">![Clasp Icon](images/sheila/25648.png)</span><span class="itemTableIcon3">![Clasp Icon](images/sheila/25649.png)</span><span class="itemTableIcon4">![Clasp Icon](images/sheila/25650.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Clasp
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Cloak Of Invisibility Icon](images/sheila/25651.png)</span><span class="itemTableIcon2">![Cloak Of Invisibility Icon](images/sheila/25651.png)</span><span class="itemTableIcon3">![Cloak Of Invisibility Icon](images/sheila/25652.png)</span><span class="itemTableIcon4">![Cloak Of Invisibility Icon](images/sheila/25653.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Cloak Of Invisibility
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Clothing Icon](images/sheila/25654.png)</span><span class="itemTableIcon2">![Clothing Icon](images/sheila/25654.png)</span><span class="itemTableIcon3">![Clothing Icon](images/sheila/25655.png)</span><span class="itemTableIcon4">![Clothing Icon](images/sheila/25656.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Clothing
        </span>
    </span>
</span>

# Feats

Unknown.

# Legendaries

Unknown.

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unlock Adventure: The Unfair Sea (Sheila)** (Complete Area 50)
> Search for some missing ships during Fleetswake in Waterdeep.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Thief! Icon](images/sheila/25700.png) **Variant 1: Thief!** (Complete Area 75)
> Sheila starts in the formation. She can be moved, but not removed.  
> You may only use Good champions.  
> Getting to know Sheila: Sheila's kind heart supports the abilities of the good Champions in your formation. Build the best formation to take advantage of this!
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Citadel of Shadow Icon](images/sheila/25702.png) **Variant 2: Citadel of Shadow** (Complete Area 125)
> Sheila starts in the formation. She can be moved, but not removed.  
> Karena joins the formation. Good Champions next to Karena deal no damage.  
> You may only use Champions that have an age of 20 or younger, a total ability score of 78 or lower, or Female and/or non-binary Champions.  
> Getting to know Sheila: Sheila's first specialization choice further refines which allies she works best with. Make sure you still use a Good aligned DPS to make the most of her buff!
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Venger the Destroyer Icon](images/sheila/25704.png) **Variant 3: Venger the Destroyer** (Complete Area 175)
> Sheila starts in the formation. She can be moved, but not removed.  
> At the start of each Boss area, Venger arrives on his nightmare as an additional boss that must be defeated.  
> Starting in area 51, enemies that don't have an active debuff reduce all normal attack damage to just 1 point of damage.  
> Getting to know Sheila: Sheila's second specialization choice lets you pick a different way to debuff your enemies. Use her and other debuffing Champions to defeat these enemies!
</div></div>

# Other Champion Images

<span class="championImagesColumn">
    <span class="championImagesRow">
        <span class="championImagesPortrait">
            ![Sheila Console Portrait](images/sheila/console.png)Console Portrait
        </span>
    </span>
    <span class="championImagesRow">
        <span class="championImagesChests">
            ![Sheila Gold Chest Icon](images/sheila/chest_gold.png)Gold Chest Icon
        </span>
        <span class="championImagesChests">
            ![Sheila Silver Chest Icon](images/sheila/chest_silver.png)Silver Chest Icon
        </span>
    </span>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*