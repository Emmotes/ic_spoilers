[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsImage">
        ![PC Portrait for Gale](images/gale/portrait.png)Portait
    </span>
    <span class="championPortraitsImage">
        ![Model GIF of Gale](images/gale/model.gif)Model
    </span>
</span>

# Gale

Gale is a magical prodigy – a wizard of great talent and incredible knowledge. Imbued with the devastating power of a Netherese orb, Gale must continually consume magical artefacts, lest he unleash that explosive force upon himself and his surroundings.

[Gale - Baldur's Gate Wiki](https://bg3.wiki/wiki/Gale)

# Basic Information

Gale will be the new champion in the Greengrass event on 3 April 2024.

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
            <span style="margin-right:4px;">**Race**:</span>
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
            <span style="margin-left:8px;">Wizard (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Roles**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Support (Guess)</span>
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
            <span style="margin-left:8px;">Absolute Adversaries (Guess)</span>
        </span>
    </span>
</span>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Gale" fill="#aaa" data-formationName="Gale" data-campaignName="Greengrass" width="294" height="160"><circle cx="175" cy="45" r="15"/><circle cx="135" cy="25" r="15"/><circle cx="135" cy="65" r="15"/><circle cx="135" cy="105" r="15"/><circle cx="135" cy="145" r="15"/><circle cx="95" cy="85" r="15"/><circle cx="95" cy="125" r="15"/><circle cx="55" cy="65" r="15"/><circle cx="55" cy="145" r="15"/><circle cx="15" cy="45" r="15"/><text x="205" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Gale</text><text x="205" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Greengrass</text></svg>
</span>

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Fire Bolt** (Magic)
> Gale deals 1 hit to a random enemy, prioritizing enemies he hasn't hit yet.  
> Cooldown: 4.5s (Cap 1.125s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 743,
    "name": "Fire Bolt",
    "description": "Gale deals 1 hit to a random enemy, prioritizing enemies he hasn't hit yet.",
    "long_description": "",
    "graphic_id": 0,
    "target": "gale_random_prefer_non_debuffed",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 4.5,
    "animations": [
        {
            "type": "ranged_attack",
            "projectile": "pd_generic_projectile",
            "shoot_offset_y": -25,
            "shoot_offset_x": 30,
            "shoot_frame": 13,
            "shoot_sound": 149,
            "hit_sound": 133,
            "projectile_details": {
                "hash": "dhadius_firebolt",
                "projectile_hit_graphic_id": 1318,
                "projectile_speed": 1600,
                "projectile_graphic_id": 22787,
                "trail": {
                    "particle_graphic_ids": [
                        "22787"
                    ],
                    "lifespan": 0.2,
                    "spawn_rate": 100,
                    "initial_velocity": {
                        "x": 0,
                        "y": 0
                    },
                    "velocity_jitter": {
                        "x": 30,
                        "y": 30
                    },
                    "rotation_jitter": 30,
                    "alpha_lerp": {
                        "0": 0,
                        "0.1": 0.75,
                        "0.5": 0.3,
                        "1": 0
                    },
                    "scale_lerp": [
                        {
                            "x": 0.65,
                            "y": 0.65
                        },
                        {
                            "x": 1.5,
                            "y": 1.5
                        }
                    ],
                    "tint_lerp": {
                        "0": "#FFFF00",
                        "0.3": "#FF0000",
                        "0.6": "#000000"
                    }
                },
                "percent_height_offset": 5,
                "use_auto_rotation": true
            }
        }
    ],
    "tags": [
        "ranged"
    ],
    "damage_types": [
        "magic"
    ]
}
</pre>
</p>
</details>
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Fire Bolt - Evocation** (Magic)
> Gale deals 1 hit to a random enemy and those nearby, prioritizing enemies he hasn't hit yet.  
> Cooldown: 4.5s (Cap 1.125s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 744,
    "name": "Fire Bolt - Evocation",
    "description": "Gale deals 1 hit to a random enemy and those nearby, prioritizing enemies he hasn't hit yet.",
    "long_description": "",
    "graphic_id": 0,
    "target": "gale_random_prefer_non_debuffed",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 4.5,
    "animations": [
        {
            "type": "ranged_attack",
            "projectile": "pd_generic_projectile",
            "shoot_offset_y": -25,
            "shoot_offset_x": 30,
            "shoot_frame": 13,
            "shoot_sound": 149,
            "hit_sound": 133,
            "projectile_details": {
                "hash": "dhadius_firebolt",
                "projectile_hit_graphic_id": 1318,
                "projectile_speed": 1600,
                "projectile_graphic_id": 22787,
                "trail": {
                    "particle_graphic_ids": [
                        "22787"
                    ],
                    "lifespan": 0.2,
                    "spawn_rate": 100,
                    "initial_velocity": {
                        "x": 0,
                        "y": 0
                    },
                    "velocity_jitter": {
                        "x": 30,
                        "y": 30
                    },
                    "rotation_jitter": 30,
                    "alpha_lerp": {
                        "0": 0,
                        "0.1": 0.75,
                        "0.5": 0.3,
                        "1": 0
                    },
                    "scale_lerp": [
                        {
                            "x": 0.65,
                            "y": 0.65
                        },
                        {
                            "x": 1.5,
                            "y": 1.5
                        }
                    ],
                    "tint_lerp": {
                        "0": "#FFFF00",
                        "0.3": "#FF0000",
                        "0.6": "#000000"
                    }
                },
                "percent_height_offset": 5,
                "use_auto_rotation": true
            }
        }
    ],
    "tags": [
        "ranged"
    ],
    "damage_types": [
        "magic"
    ]
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ultimate Attack: Gale's Gale**
> Gale casts Gust of Wind, knocking back all enemies, dealing ultimate damage and slowing them for 15 seconds.  
> Cooldown: 330s (Cap 82.5s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 745,
    "name": "Gale's Gale",
    "description": "Gale knocks back all enemies dealing ultimate damage and slows them for 15 seconds.",
    "long_description": "Gale casts Gust of Wind, knocking back all enemies, dealing ultimate damage and slowing them for 15 seconds.",
    "graphic_id": 22837,
    "target": "all",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 330,
    "animations": [
        {
            "type": "ultimate_attack",
            "ultimate": "gale",
            "projectile_details": {
                "hash": "gale_ult",
                "projectile_speed": 1500,
                "tween_func": "strong_in_out",
                "reset_defaults": true,
                "target_offset_y": 0,
                "trail": {
                    "particle_graphic_ids": [
                        "22786"
                    ],
                    "lifespan": 0.7,
                    "spawn_rate": 100,
                    "spawn_shape_scale": {
                        "x": 200,
                        "y": 200
                    },
                    "initial_velocity": {
                        "x": 0,
                        "y": 0
                    },
                    "velocity_jitter": {
                        "x": 30,
                        "y": 30
                    },
                    "rotation_jitter": 0,
                    "alpha_lerp": [
                        1
                    ],
                    "scale_lerp": [
                        {
                            "x": 2.5,
                            "y": 2.5
                        }
                    ],
                    "tint_lerp": {
                        "0": "#FFFFFF",
                        "0.1": "#ddf2fe",
                        "0.4": "#d3fbfb",
                        "0.6": "#ddf2fe",
                        "0.75": "#c3c3c3"
                    }
                }
            }
        }
    ],
    "tags": [
        "ranged",
        "aoe",
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

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> As an Ally of Elminster, Gale can be used in any Elminster Patron adventure or variant, even if he would not normally be available to be used due to variant or patron restrictions.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1891,
    "flavour_text": "",
    "description": {
        "desc": "As an Ally of Elminster, Gale can be used in any Elminster Patron adventure or variant, even if he would not normally be available to be used due to variant or patron restrictions."
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
        "type": "upgrade",
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
**Archmage's Insight** (Guess)
> Gale increases the damage of Champions in the two columns in front of him by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1892,
    "flavour_text": "",
    "description": {
        "conditions": [
            {
                "condition": "upgrade_purchased 14576",
                "desc": "Gale increases the damage of Champions in the three columns in front of him by $(amount)%."
            },
            {
                "condition": "upgrade_purchased 14577",
                "desc": "Gale increases the damage of Champions in his column and the column behind him by $(amount)%."
            },
            {
                "desc": "Gale increases the damage of Champions in the two columns in front of him by $(amount)%."
            }
        ]
    },
    "effect_keys": [
        {
            "effect_string": "hero_dps_multiplier_mult,100",
            "targets": [
                "next_two_col"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 22828,
    "large_graphic_id": 22825,
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
**Netherese Orb** (Guess)
> The first time Gale damages any enemy, they take 1000% additional damage from all subsequent attacks.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1893,
    "flavour_text": "",
    "description": {
        "desc": "The first time Gale damages any enemy, they take $(amount)% additional damage from all subsequent attacks."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "gale_netherese_orb,1000",
            "debuffing_attack_ids": [
                743,
                744
            ],
            "debuff_effects": [
                {
                    "effect_string": "gale_netherese_orb_debuff"
                },
                {
                    "effect_string": "increase_monster_damage,$amount",
                    "active_graphic_id": 22872,
                    "active_graphic_x": 0,
                    "active_graphic_y": -60,
                    "stacks_on_reapply": true,
                    "manual_stacking": true,
                    "default_stacks": 1,
                    "max_stacks": 1,
                    "stacks_multiply": false,
                    "use_collection_source": true
                }
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 22829,
    "large_graphic_id": 22826,
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
**An Experienced Sage** (Guess)
> Gale increases the effect of Archmage's Insight by 10% for each Elminster Patron variant you have completed, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1894,
    "flavour_text": "",
    "description": {
        "desc": "Gale increases the effect of Archmage's Insight by $(amount)% for each Elminster Patron variant you have completed, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,10,14571",
            "show_bonus": true,
            "amount_func": "mult",
            "stack_func": "per_patron_variant_complete",
            "patron_id": 1,
            "stack_title": "Elminster Patron Variants Complete"
        }
    ],
    "requirements": "",
    "graphic_id": 22827,
    "large_graphic_id": 22824,
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
**Evocation** (Guess)
> Gale's Fire Bolt deals damage to all enemies in a small area.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1895,
    "flavour_text": "",
    "description": {
        "desc": "Gale's Fire Bolt deals damage to all enemies in a small area."
    },
    "effect_keys": [
        {
            "effect_string": "change_base_attack,744"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "type": "upgrade",
        "formation_circle_icon": false,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Abjuration** (Guess)
> Attacks against Champions miss 50% of the time.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1896,
    "flavour_text": "",
    "description": {
        "desc": "Attacks against Champions miss $(amount)% of the time."
    },
    "effect_keys": [
        {
            "effect_string": "evade_damage_change,50",
            "targets": [
                "all"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "type": "upgrade",
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Enchantment** (Guess)
> Increase Archmage's Insight's number of columns by one.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1897,
    "flavour_text": "",
    "description": {
        "desc": "Increase Archmage's Insight's number of columns by one."
    },
    "effect_keys": [
        {
            "effect_string": "change_upgrade_targets,14571",
            "effect_index": 0,
            "new_targets": "next_three_col"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "type": "upgrade",
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Illusion** (Guess)
> Archmage's Insight now affects his column and the column behind, and enemies that attempt to choose Gale as a target instead choose to attack another Champion, assuming another valid target exists.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1898,
    "flavour_text": "",
    "description": {
        "desc": "Archmage's Insight now affects his column and the column behind, and enemies that attempt to choose Gale as a target instead choose to attack another Champion, assuming another valid target exists."
    },
    "effect_keys": [
        {
            "effect_string": "change_upgrade_targets,14571",
            "effect_index": 0,
            "new_targets": "col_and_prev_col"
        },
        {
            "effect_string": "reverse_taunt"
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
**Specialisation: Ceremorphosis** (Guess)
> Your formation gains one Ceremorphosis stack due to the mind flayer tadpole in Gale's brain. Gale increases the damage of Netherese Orb by 100% for each Ceremorphosis stack, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1899,
    "flavour_text": "",
    "description": {
        "desc": "Your formation gains one Ceremorphosis stack due to the mind flayer tadpole in Gale's brain. Gale increases the damage of Netherese Orb by 100% for each Ceremorphosis stack, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,100,14572",
            "stack_func": "per_ceremorphosis_stacks",
            "amount_func": "mult",
            "stacks_multiply": true,
            "show_bonus": true,
            "stack_title": "Total Ceremorphosis Stacks",
            "total_title": "Total Bonus",
            "desc_forced_order": 2,
            "amount_updated_listeners": [
                "upgrade_unlocked",
                "slot_changed",
                "feat_changed"
            ]
        },
        {
            "off_when_benched": true,
            "outgoing_buffs": false,
            "effect_string": "gale_ceremorphosis_stacks,1",
            "manual_stacking": true,
            "stacks_multiply": false,
            "show_stacks": true,
            "stack_title": "Gale Ceremorphosis Stacks",
            "desc_forced_order": 1
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "type": "upgrade",
        "formation_circle_icon": false,
        "owner_use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "retain_on_slot_changed": true,
        "spec_option_post_apply_info": "Current Ceremorphosis Stacks: $num_stacks"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Mystical Mentor** (Guess)
> Gale increases the effect of Netherese Orb by 100% for each Champion in the formation with an Intelligence of 13 or higher, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1900,
    "flavour_text": "",
    "description": {
        "desc": "Gale increases the effect of Netherese Orb by $(amount)% for each Champion in the formation with an Intelligence of $(min_stat_value) or higher, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,100,14572",
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "min_stat_value": 13,
            "per_hero_expr": "as_int(GetStat(`int`) >= min_stat_value)",
            "show_bonus": true,
            "amount_updated_listeners": [
                "upgrade_unlocked",
                "slot_changed",
                "feat_changed"
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
        "owner_use_outgoing_description": true,
        "retain_on_slot_changed": true,
        "spec_option_post_apply_info": "Int 13+ Champions in Formation: $num_stacks"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Finite Fellowship** (Guess)
> Gale increases the effect of Netherese Orb by 7.5% for each Champion you have unlocked that is not eligible for the current adventure, stacking multiplicatively. This ability ignores any feats or upgrades (but not passive abilities) that change a Champion's eligibility; ie. it only looks at "base eligibility".
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1901,
    "flavour_text": "",
    "description": {
        "desc": "Gale increases the effect of Netherese Orb by $(amount)% for each Champion you have unlocked that is not eligible for the current adventure, stacking multiplicatively. This ability ignores any feats or upgrades (but not passive abilities) that change a Champion's eligibility; ie. it only looks at \"base eligibility\"."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,7.5,14572",
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "post_process_expr": "num_initially_unavailable_owned_heroes",
            "show_bonus": true,
            "amount_updated_listeners": [
                "upgrade_unlocked",
                "slot_changed",
                "feat_changed"
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
        "owner_use_outgoing_description": true,
        "retain_on_slot_changed": true,
        "spec_option_post_apply_info": "Ineligible Champions: $num_stacks"
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
            <span class="itemTableIcon1">![Books Icon](images/gale/22788.png)</span><span class="itemTableIcon2">![Books Icon](images/gale/22788.png)</span><span class="itemTableIcon3">![Books Icon](images/gale/22789.png)</span><span class="itemTableIcon4">![Books Icon](images/gale/22790.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Books
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Boots Icon](images/gale/22791.png)</span><span class="itemTableIcon2">![Boots Icon](images/gale/22791.png)</span><span class="itemTableIcon3">![Boots Icon](images/gale/22792.png)</span><span class="itemTableIcon4">![Boots Icon](images/gale/22793.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Boots
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Camp Comforts Icon](images/gale/22796.png)</span><span class="itemTableIcon2">![Camp Comforts Icon](images/gale/22796.png)</span><span class="itemTableIcon3">![Camp Comfort Icon](images/gale/22794.png)</span><span class="itemTableIcon4">![Camp Comfort Icon](images/gale/22795.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Camp Comfort
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Gear Icon](images/gale/22797.png)</span><span class="itemTableIcon2">![Gear Icon](images/gale/22797.png)</span><span class="itemTableIcon3">![Gear Icon](images/gale/22798.png)</span><span class="itemTableIcon4">![Gears Icon](images/gale/22799.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Gears
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Robes Icon](images/gale/22800.png)</span><span class="itemTableIcon2">![Robes Icon](images/gale/22800.png)</span><span class="itemTableIcon3">![Robes Icon](images/gale/22801.png)</span><span class="itemTableIcon4">![Robes Icon](images/gale/22802.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Robes
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Tara Links Icon](images/gale/22803.png)</span><span class="itemTableIcon2">![Tara Links Icon](images/gale/22803.png)</span><span class="itemTableIcon3">![Tara Links Icon](images/gale/22804.png)</span><span class="itemTableIcon4">![Tara Links Icon](images/gale/22805.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Tara Links
        </span>
    </span>
</span>

# Feats

Unknown.

# Legendaries

Unknown.

# Other Champion Images

<span class="championImagesColumn">
    <span class="championImagesRow">
        <span class="championImagesPortrait">
            ![Gale Console Portrait](images/gale/console.png)Console Portait
        </span>
    </span>
    <span class="championImagesRow">
        <span class="championImagesChests">
            ![Gale Gold Chest Icon](images/gale/chest_gold.png)Gold Chest Icon
        </span>
        <span class="championImagesChests">
            ![Gale Silver Chest Icon](images/gale/chest_silver.png)Silver Chest Icon
        </span>
    </span>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*