[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsImage">
        ![PC Portrait for Aeon](images/aeon/portrait.png)Portait
    </span>
    <span class="championPortraitsImage">
        ![Model GIF of Aeon](images/aeon/model.gif)Model
    </span>
</span>

# Aeon

Aeon looks like they'll be a CNE original tied to an upcoming Idle Champions Presents stream. Given their item names - it's possible they'll be some kind of Artillerist Artificer.

# Basic Information

Aeon will be a new champion in the Founders' Day event on 3 July 2024.

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
            <span style="margin-left:8px;">Goliath (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Class**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Artificer (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Roles**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Debuff (Guess)</span>
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
            <span style="margin-left:8px;">Unknown</span>
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

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Aeon" fill="#aaa" data-formationName="Aeon" data-campaignName="Founders' Day" width="312" height="160"><circle cx="175" cy="65" r="15"/><circle cx="135" cy="85" r="15"/><circle cx="135" cy="125" r="15"/><circle cx="95" cy="25" r="15"/><circle cx="95" cy="65" r="15"/><circle cx="95" cy="105" r="15"/><circle cx="95" cy="145" r="15"/><circle cx="55" cy="85" r="15"/><circle cx="55" cy="125" r="15"/><circle cx="15" cy="65" r="15"/><text x="205" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Aeon</text><text x="205" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Founders' Day</text></svg>
</span>

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Cane Wand** (Magic)
> Aeon fires an energy bolt from her cane at the closest enemy for one hit.  
> Cooldown: 6s (Cap 1.5s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 769,
    "name": "Cane Wand",
    "description": "Aeon fires an energy bolt from her cane at the closest enemy for one hit.",
    "long_description": "",
    "graphic_id": 0,
    "target": "front",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 6,
    "animations": [
        {
            "type": "ranged_attack",
            "projectile": "pd_generic_projectile",
            "shoot_offset_x": 42,
            "shoot_offset_y": -40,
            "shoot_frame": 8,
            "shoot_sound": 149,
            "hit_sound": 133,
            "projectile_details": {
                "hash": "cane_wand",
                "target_offset_y": 0,
                "projectile_speed": 2000,
                "projectile_graphic_id": 23696,
                "projectile_hit_graphic_id": 23697,
                "trail": {
                    "particle_graphic_ids": [
                        "23696"
                    ],
                    "lifespan": 0.2,
                    "spawn_rate": 200,
                    "spawn_shape_scale": {
                        "x": 0,
                        "y": 0
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
                    "alpha_lerp": {
                        "0": 0,
                        "0.1": 0.75,
                        "1": 0
                    },
                    "scale_lerp": [
                        {
                            "x": 1,
                            "y": 1
                        },
                        {
                            "x": 0,
                            "y": 0
                        }
                    ]
                }
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
**Base Attack: Cane Wand** (Magic)
> Aeon fires an energy bolt from her cane at the closest enemy that hits all enemies in a line.  
> Cooldown: 6s (Cap 1.5s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 771,
    "name": "Cane Wand",
    "description": "Aeon fires an energy bolt from her cane at the closest enemy that hits all enemies in a line.",
    "long_description": "",
    "graphic_id": 0,
    "target": "front",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 6,
    "animations": [
        {
            "type": "ranged_attack",
            "projectile": "pd_generic_projectile",
            "shoot_offset_x": 42,
            "shoot_offset_y": -40,
            "shoot_frame": 8,
            "shoot_sound": 149,
            "hit_sound": 133,
            "projectile_details": {
                "hash": "cane_wand_buffed",
                "target_offset_y": 0,
                "projectile_speed": 2000,
                "move_across_entire_screen": true,
                "hit_monsters_moved_through": true,
                "projectile_graphic_id": 23696,
                "projectile_hit_graphic_id": 23697,
                "trail": {
                    "particle_graphic_ids": [
                        "23696"
                    ],
                    "lifespan": 0.2,
                    "spawn_rate": 200,
                    "spawn_shape_scale": {
                        "x": 0,
                        "y": 0
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
                    "alpha_lerp": {
                        "0": 0,
                        "0.1": 0.75,
                        "1": 0
                    },
                    "scale_lerp": [
                        {
                            "x": 1,
                            "y": 1
                        },
                        {
                            "x": 0,
                            "y": 0
                        }
                    ]
                }
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
**Ultimate Attack: Deuce**
> Aeon's mechanical monkey Deuce deals one ultimate hit to each enemy and knocks them back a short distance.  
> Cooldown: 360s (Cap 90s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 770,
    "name": "Deuce",
    "description": "Deuce deals one ultimate hit to each enemy and knocks them back.",
    "long_description": "Aeon's mechanical monkey Deuce deals one ultimate hit to each enemy and knocks them back a short distance.",
    "graphic_id": 23841,
    "target": "front",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 0.03,
    "cooldown": 360,
    "animations": [
        {
            "type": "ultimate_attack",
            "ultimate": "aeon",
            "knockback_effect": {
                "effect_string": "push_back_monster,25"
            },
            "beam_data": {
                "fire_duration": 0.1,
                "sweep_duration": 0.5,
                "angle": 60,
                "screen_edge_offset": 200,
                "beam_graphic": "Effect_AeonCaneBlast",
                "impact_graphic": "Effect_AeonUltBeam_Hit",
                "segment_width": 15,
                "distance_adjustment": -20,
                "scale": 1,
                "fire_offset": [
                    45,
                    -140
                ]
            }
        }
    ],
    "tags": [
        "ranged",
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
> Every week, Aeon targets one Patron for infiltration. Aeon can be used in any Patron adventure or variant for her current Patron target, even if she would not normally be available to be used due to variant or patron restrictions.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2025,
    "flavour_text": "",
    "description": {
        "desc": "Every week, Aeon targets one Patron for infiltration. Aeon can be used in any Patron adventure or variant for her current Patron target, even if she would not normally be available to be used due to variant or patron restrictions."
    },
    "effect_keys": [
        {
            "effect_string": "do_nothing,0"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": false,
        "formation_circle_icon": false,
        "show_in_owner_outgoing": false,
        "not_a_buff": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Network of Espionage** (Guess)
> Every week, Aeon targets one Patron for infiltration. Aeon can be used in any Patron adventure or variant for her current Patron target, even if she would not normally be available to be used due to variant or patron restrictions.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2002,
    "flavour_text": "",
    "description": {
        "desc": "Every week, Aeon targets one Patron for infiltration. Aeon can be used in any Patron adventure or variant for her current Patron target, even if she would not normally be available to be used due to variant or patron restrictions.^^$aeon_network_of_espionage_desc"
    },
    "effect_keys": [
        {
            "effect_string": "aeon_network_of_espionage",
            "off_when_benched": false
        },
        {
            "effect_string": "force_allow_hero",
            "if": "patron_id==aeon_patron_id",
            "ignore_hero_source_check": true,
            "hero_ids": [
                150
            ],
            "off_when_benched": false,
            "apply_manually": true
        }
    ],
    "requirements": "",
    "graphic_id": 23834,
    "large_graphic_id": 23830,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "effect_name": "Network of Espionage",
        "show_in_owner_outgoing": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Inner Circle** (Guess)
> Aeon increases the damage of adjacent Champions by 100% for each Champion in the formation that is eligible for the patron she is infiltrating this week, stacking multiplicatively.  
> Only Champions that start the adventure eligible, or Champions with equipped feats that make them eligible, will count for this ability.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2003,
    "flavour_text": "",
    "description": {
        "desc": "Aeon increases the damage of adjacent Champions by $(amount)% for each Champion in the formation that is eligible for the patron she is infiltrating this week, stacking multiplicatively.^Only Champions that start the adventure eligible, or Champions with equipped feats that make them eligible, will count for this ability."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack_amount,100"
        },
        {
            "off_when_benched": true,
            "effect_string": "hero_dps_multiplier_mult,0",
            "amount_expr": "upgrade_amount(15196, 0)",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "EligibleForPatron(aeon_current_patron_id)",
            "amount_func": "mult",
            "targets": [
                {
                    "type": "distance",
                    "distance": 1
                }
            ],
            "amount_updated_listeners": [
                "slot_changed",
                "aeon_active_patron_changed"
            ],
            "show_bonus": true,
            "use_computed_amount_for_description": true
        }
    ],
    "requirements": "",
    "graphic_id": 23833,
    "large_graphic_id": 23829,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Uncover Weakness** (Guess)
> Each enemy that Aeon damages gains a Stolen Secrets stack. Enemies with a Stolen Secrets stack take 100% more damage from all sources, stacking multiplicatively up to 5 times.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2004,
    "flavour_text": "",
    "description": {
        "desc": "Each enemy that Aeon damages gains a Stolen Secrets stack. Enemies with a Stolen Secrets stack take $(amount)% more damage from all sources, stacking multiplicatively up to 5 times."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,100"
        },
        {
            "effect_string": "aeon_uncover_weakness",
            "off_when_benched": true,
            "broadcast_name": "aeon_debuffs_monster",
            "debuff_before_damage": true,
            "debuff_max_stacks": 5,
            "debuffing_attack_ids": [
                769,
                770,
                771
            ],
            "debuff_effects": [
                {
                    "effect_string": "increase_monster_damage,0",
                    "amount_expr": "upgrade_amount(15197,0)",
                    "active_graphic_id": 23961,
                    "active_graphic_y": -120,
                    "use_stack_as_frame": true,
                    "stack_as_frame_offset": 0,
                    "overlay_play_mode": "stopped",
                    "bottom": false,
                    "stacks_on_reapply": true,
                    "manual_stacking": true,
                    "max_stacks": 5,
                    "stacks_multiply": true,
                    "use_collection_source": true,
                    "stack_across_effects": false
                }
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 23835,
    "large_graphic_id": 23831,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
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
**Challenge Accepted** (Guess)
> Aeon increases the effect of Inner Circle by 100% for each completed patron challenge for her current Patron, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2005,
    "flavour_text": "",
    "description": {
        "desc": "Aeon increases the effect of Inner Circle by $(amount)% for each completed patron challenge for her current Patron, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack_amount,100"
        },
        {
            "effect_string": "buff_upgrade,0,15196,1",
            "amount_expr": "upgrade_amount(15198, 0)",
            "stack_func": "per_hero_attribute",
            "post_process_expr": "CompletedPatronChallenges(aeon_current_patron_id)",
            "amount_func": "mult",
            "amount_updated_listeners": [
                "slot_changed",
                "aeon_active_patron_changed",
                "patron_challenge_completed"
            ],
            "show_bonus": true,
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 23832,
    "large_graphic_id": 23828,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
</div></div>

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Immediate Infiltration** (Guess)
> Increases the effect of Inner Circle by 100% each time Uncover Weakness applies a Stolen Secrets stack, stacking additively up to 10 times per area and resetting when changing areas.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2006,
    "flavour_text": "",
    "description": {
        "desc": "Increases the effect of Inner Circle by $(not_buffed amount)% each time Uncover Weakness applies a Stolen Secrets stack, stacking additively up to 10 times per area and resetting when changing areas."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,100,15196,1",
            "max_stacks": 10,
            "total_title": "Total Buff to Inner Circle",
            "stacks_on_trigger": "on_broadcast_stacks,aeon_debuffs_monster",
            "show_bonus": true,
            "more_triggers": [
                {
                    "trigger": "area_changed",
                    "action": {
                        "type": "reduce_percent",
                        "percent": 100
                    }
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
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Play The Long Game** (Guess)
> Increases the effect of Inner Circle by 0.1% each time Uncover Weakness applies a Stolen Secrets stack, stacking additively up to 1,000,000 times and persisting until you reset the adventure.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2007,
    "flavour_text": "",
    "description": {
        "desc": "Increases the effect of Inner Circle by $(not_buffed amount)% each time Uncover Weakness applies a Stolen Secrets stack, stacking additively up to 1,000,000 times and persisting until you reset the adventure."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,0.1,15196,1",
            "max_stacks": 1000000,
            "total_title": "Total Buff to Inner Circle",
            "stacks_on_trigger": "on_broadcast_stacks,aeon_debuffs_monster",
            "off_when_benched": false,
            "show_bonus": true
        },
        {
            "effect_string": "aeon_play_the_long_game",
            "broadcast_name": "aeon_debuffs_monster"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Artificers Arsenal** (Guess)
> Cane Wand can now pierce through the targeted enemy, dealing one hit to all enemies in a line. Additionally, it deals 5 seconds of BUD-based damage to all enemies it hits.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2008,
    "flavour_text": "",
    "description": {
        "desc": "Cane Wand can now pierce through the targeted enemy, dealing one hit to all enemies in a line. Additionally, it deals 5 seconds of BUD-based damage to all enemies it hits."
    },
    "effect_keys": [
        {
            "effect_string": "change_base_attack,771"
        },
        {
            "effect_string": "base_attack_deal_bonus_damage,5",
            "immediately_after_damage": true
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
**Spy Network: Inner Circle** (Guess)
> Inner Circle now affects all Champions within two slots of Aeon and its pre-stack effect is increased by 75%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2009,
    "flavour_text": "",
    "description": {
        "desc": "Inner Circle now affects all Champions within two slots of Aeon and its pre-stack effect is increased by 75%."
    },
    "effect_keys": [
        {
            "effect_string": "change_upgrade_data,15196,1",
            "data": {
                "targets": [
                    {
                        "type": "distance",
                        "distance": 2
                    }
                ]
            }
        },
        {
            "effect_string": "buff_upgrade,75,15196,0"
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
**Powerful Patronage** (Guess)
> Increases the pre-stack effect of Challenge Accepted by 150% while on a patron adventure/variant/free play for the week's chosen patron.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2010,
    "flavour_text": "",
    "description": {
        "desc": "Increases the pre-stack effect of Challenge Accepted by 150% while on a patron adventure/variant/free play for the week's chosen patron."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,150,15198,0",
            "amount_func": "if",
            "stack_func": "per_hero_attribute",
            "post_process_expr": "OnPatronAdventure(aeon_current_patron_id)"
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
            <span class="itemTableIcon1">![Cane Icon](images/aeon/23709.png)</span><span class="itemTableIcon2">![Cane Icon](images/aeon/23709.png)</span><span class="itemTableIcon3">![Cane Icon](images/aeon/23710.png)</span><span class="itemTableIcon4">![Cane Icon](images/aeon/23711.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Cane
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Clothing Icon](images/aeon/23712.png)</span><span class="itemTableIcon2">![Clothing Icon](images/aeon/23712.png)</span><span class="itemTableIcon3">![Clothing Icon](images/aeon/23713.png)</span><span class="itemTableIcon4">![Clothing Icon](images/aeon/23714.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Clothing
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Eldritch Cannon Icon](images/aeon/23715.png)</span><span class="itemTableIcon2">![Eldritch Cannon Icon](images/aeon/23715.png)</span><span class="itemTableIcon3">![Eldritch Cannon Icon](images/aeon/23716.png)</span><span class="itemTableIcon4">![Eldritch Cannon Icon](images/aeon/23717.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Eldritch Cannon
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Jewelry Icon](images/aeon/23718.png)</span><span class="itemTableIcon2">![Jewelry Icon](images/aeon/23718.png)</span><span class="itemTableIcon3">![Jewelry Icon](images/aeon/23719.png)</span><span class="itemTableIcon4">![Jewelry Icon](images/aeon/23720.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Jewelry
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Music Box Icon](images/aeon/23721.png)</span><span class="itemTableIcon2">![Music Box Icon](images/aeon/23721.png)</span><span class="itemTableIcon3">![Music Box Icon](images/aeon/23722.png)</span><span class="itemTableIcon4">![Music Box Icon](images/aeon/23723.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Music Box
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Top Hat Icon](images/aeon/23724.png)</span><span class="itemTableIcon2">![Top Hat Icon](images/aeon/23724.png)</span><span class="itemTableIcon3">![Top Hat Icon](images/aeon/23725.png)</span><span class="itemTableIcon4">![Top Hat Icon](images/aeon/23726.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Top Hat
        </span>
    </span>
</span>

# Feats

Unknown.

# Legendaries

Unknown.

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Party Crashers (Aeon) Icon](images/aeon/3406.png) **Unlock Adventure: Party Crashers (Aeon)** (Complete Area 50)
> Save Waterdeep from the chaos of a Founders' Day gone awry.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Mechanical Mayhem Icon](images/aeon/23824.png) **Variant 1: Mechanical Mayhem** (Complete Area 75)
> 1-2 Iron Defenders spawn with each wave. They don't drop gold nor count towards quest progress.  
> Aeon starts in the formation. She can't be moved or removed.  
> Only Champions next to Aeon can deal damage.  
> Getting to Know Aeon: Aeon buffs Champions next to her. Place your damage dealer next to her for the best effect!
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Spy's Strategy Icon](images/aeon/23825.png) **Variant 2: Spy's Strategy** (Complete Area 125)
> Aeon starts in the formation. She can't be moved or removed.  
> You may only use core Champions and/or Champions eligible for Aeon's current Patron.  
> Getting to Know Aeon: Aeon's main buff is made stronger by using Champions that are eligible for the Patron she is currently infiltrating.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Discovered Secrets Icon](images/aeon/23826.png) **Variant 3: Discovered Secrets** (Complete Area 175)
> Aeon starts in the formation. She can't be moved or removed.  
> Only monsters that have a debuff can take damage.  
> Getting to Know Aeon: Aeon's attacks debuff monsters, making them take additional damage. Use her and other debuffing Champions to make it so you can damage these monsters!
</div></div>

# Other Champion Images

<span class="championImagesColumn">
    <span class="championImagesRow">
        <span class="championImagesPortrait">
            ![Aeon Console Portrait](images/aeon/console.png)Console Portait
        </span>
    </span>
    <span class="championImagesRow">
        <span class="championImagesChests">
            ![Aeon Gold Chest Icon](images/aeon/chest_gold.png)Gold Chest Icon
        </span>
        <span class="championImagesChests">
            ![Aeon Silver Chest Icon](images/aeon/chest_silver.png)Silver Chest Icon
        </span>
    </span>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*