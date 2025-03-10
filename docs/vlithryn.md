[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Vlithryn](images/vlithryn/portrait.png)
        </span>
        <span>
        Portrait
        </span>
    </span>
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![Model GIF of Vlithryn](images/vlithryn/model.gif)
        </span>
        <span>
        Base Model
        </span>
    </span>
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![Alternate Model GIF of Vlithryn: Persana](images/vlithryn/model-persana.gif)
        </span>
        <span>
        Persana Model
        </span>
    </span>
</span>

# Vlithryn

A guest player playing a Triton Cleric of Persana, whose good intentions are largely wasted amidst a party of murderhobos.

[One For All - TV Tropes](https://tvtropes.org/pmwiki/pmwiki.php/Characters/OneForAll)

# Basic Information

Vlithryn will be a new champion in the The Great Modron March event on 7 May 2025.

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
            <span style="margin-left:8px;">Triton (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Class**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Cleric (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Roles**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Support / Healing / Control (Guess)</span>
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
            <span style="margin-left:8px;">Awful Ones (Guess)</span>
        </span>
    </span>
</span>

# Formation

Unknown.
{% comment %}
<span class="formationBorder">
    ![Formation Layout](images/vlithryn/formation.png)
</span>
{% endcomment %}

# Attacks

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Blessed Mace** (Melee)
> Vlithryn attacks a random enemy, dealing 1 hit and knocking them back a short distance.  
> Cooldown: 6s (Cap 1.5s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 843,
    "name": "Blessed Mace",
    "description": "Vlithryn attacks a random enemy, dealing 1 hit and knocking them back a short distance.",
    "long_description": "",
    "graphic_id": 0,
    "target": "random",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 6,
    "animations": [
        {
            "type": "melee_attack",
            "damage_frame": 3
        }
    ],
    "tags": [
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
    "damage_types": [
        "melee"
    ]
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Call Lightning**
> Vlithryn zaps the enemy with the most remaining Health, and then empowers her attack with lightning for 15 seconds, increasing her attack speed and adding BUD-based damage.  
> Cooldown: 180s (Cap 45s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 844,
    "name": "Call Lightning",
    "description": "Vlithryn zaps the enemy with the most Health, then empowering her attacks for 15 seconds.",
    "long_description": "Vlithryn zaps the enemy with the most remaining Health, and then empowers her attack with lightning for 15 seconds, increasing her attack speed and adding BUD-based damage.",
    "graphic_id": 0,
    "target": "highest_health",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 180,
    "animations": "",
    "tags": "",
    "damage_types": ""
}
</pre>
</p>
</details>
</div></div>

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Justice of the Depths** (Guess)
> Vlithryn increases the damage of all Champions in the columns in front of her by 400%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2279,
    "flavour_text": "",
    "description": {
        "desc": "Vlithryn increases the damage of all Champions in the columns in front of her by $amount%."
    },
    "effect_keys": [
        {
            "effect_string": "hero_dps_multiplier_mult,400",
            "targets": [
                "ahead"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 26240,
    "large_graphic_id": 26233,
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
**Cleric Clinic** (Guess)
> Every second, Vlithryn heals the most damaged Champion for 20 health. This amount is increased by 25% for each Tanking Champion in the formation.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2280,
    "flavour_text": "",
    "description": {
        "desc": "Every second, Vlithryn heals the most damaged Champion for $(not_buffed amount) health. This amount is increased by $(not_buffed amount___2)% for each Tanking Champion in the formation."
    },
    "effect_keys": [
        {
            "effect_string": "heal_most_damaged,20",
            "off_when_benched": true,
            "on_trigger": "on_timer,1",
            "targets": [
                "all_slots"
            ]
        },
        {
            "effect_string": "pre_stack,25",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "buff_upgrade,0,16896",
            "amount_expr": "upgrade_amount(16896,1)",
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasTag(`tanking`)",
            "amount_updated_listeners": [
                "slot_changed"
            ],
            "show_bonus": true
        }
    ],
    "requirements": "",
    "graphic_id": 26238,
    "large_graphic_id": 26231,
    "properties": {
        "is_formation_ability": true,
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
**Pantheon of Blessings** (Guess)
> Vlithryn increases the effect of Justice of the Depths by 10% for each Global Tier Blessing you have unlocked, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2281,
    "flavour_text": "",
    "description": {
        "desc": "Vlithryn increases the effect of Justice of the Depths by $amount% for each Global Tier Blessing you have unlocked, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,10",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "buff_upgrade,0,16895",
            "off_when_benched": true,
            "amount_expr": "upgrade_amount(16897,0)",
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "post_process_expr": "num_global_blessings",
            "amount_updated_listeners": [
                "blessings_changed"
            ],
            "stacks_mulitply": true,
            "show_bonus": true
        }
    ],
    "requirements": "",
    "graphic_id": 26241,
    "large_graphic_id": 26234,
    "properties": {
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
**Revivify** (Guess)
> When a Champion is defeated, Vlithryn consumes a Revivify charge and screams in frustration, pushing back all enemies a short distance. She then casts Revivify and heals the defeated Champion, bringing them back to life at full health. Vlithryn's Revivify charges are equal to the number of Awful Ones in the formation and reset upon changing areas. The effect of Justice of the Depths is increased by 1000% for each Revivify charge used in the current area, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2282,
    "flavour_text": "",
    "description": {
        "desc": "When a Champion is defeated, Vlithryn consumes a Revivify charge and screams in frustration, pushing back all enemies a short distance. She then casts Revivify and heals the defeated Champion, bringing them back to life at full health. Vlithryn's Revivify charges are equal to the number of Awful Ones in the formation and reset upon changing areas. The effect of Justice of the Depths is increased by $amount% for each Revivify charge used in the current area, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,1000,16895",
            "manual_stacking": true,
            "amount_updated_listeners": [
                "slot_changed"
            ],
            "show_bonus": true
        },
        {
            "effect_string": "vlithryn_revivify",
            "off_when_benched": true,
            "base_buff_index": 0,
            "animation_play_time": 2,
            "resurrection_priority": 1100,
            "override_key_desc": "When a Champion is defeated, Vlithryn consumes a Revivify charge and screams in frustration, pushing back all enemies a short distance. She then casts Revivify and heals the defeated Champion, bringing them back to life at full health.",
            "tag": "awfulones"
        }
    ],
    "requirements": "",
    "graphic_id": 26242,
    "large_graphic_id": 26235,
    "properties": {
        "is_formation_ability": true,
        "show_incoming": false,
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
**Divine Intervention** (Guess)
> Vlithryn gains one Dire Straits stack every time she effectively heals a Champion with Cleric Clinic. When she reaches 30 stacks, Persana appears and blesses her with the following:  
>   
> - Revivify immediately gains an additional charge  
> - Justice of the Depths is increased by $(not_buffed amount__3)% for each Dire Straits stack, stacking multiplicatively  
> - The healing amount of Cleric Clinic is increased by $(not_buffed amount__4)% for each Dire Straits stack, stacking additively.  
>   
> Dire Straits stacks continue to increase after Persana appears, up to a maximum of 100. Upon changing areas, all Dire Straits stacks reset and Persana disappears, taking his blessings with him.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2283,
    "flavour_text": "",
    "description": {
        "desc": "Vlithryn gains one Dire Straits stack every time she effectively heals a Champion with Cleric Clinic. When she reaches 30 stacks, Persana appears and blesses her with the following:^^- Revivify immediately gains an additional charge^- Justice of the Depths is increased by $(not_buffed amount__3)% for each Dire Straits stack, stacking multiplicatively^- The healing amount of Cleric Clinic is increased by $(not_buffed amount__4)% for each Dire Straits stack, stacking additively.^^Dire Straits stacks continue to increase after Persana appears, up to a maximum of 100. Upon changing areas, all Dire Straits stacks reset and Persana disappears, taking his blessings with him."
    },
    "effect_keys": [
        {
            "effect_string": "apply_effects_at_stacks",
            "show_description": false,
            "apply_effect_stack_amounts": [
                0,
                30,
                30
            ],
            "max_stacks": 100,
            "show_stacks": true,
            "manual_stacking": true
        },
        {
            "effect_string": "vlithryn_divine_intervention",
            "apply_manually": true,
            "persana_sequences": {
                "idle": 1,
                "walk": 2
            },
            "base_buff_index": 0,
            "buff_effect_indices": [
                2,
                3
            ],
            "graphic_id": 26218,
            "persana_stack_num": 30,
            "max_stacks": 100
        },
        {
            "effect_string": "buff_upgrade,10,16895",
            "manual_stacking": true,
            "apply_manually": true,
            "amount_updated_listeners": [
                "slot_changed"
            ],
            "stacks_mulitply": true,
            "show_bonus": true
        },
        {
            "effect_string": "buff_upgrade,10,16896",
            "manual_stacking": true,
            "apply_manually": true,
            "amount_updated_listeners": [
                "slot_changed"
            ],
            "stacks_mulitply": true,
            "show_bonus": true
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
**Help the Unfortunate** (Guess)
> Vlithryn increases Justice of the Depths's damage bonus by 100% for every Champion in the formation with an INT score of 12 or lower, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2284,
    "flavour_text": "",
    "description": {
        "desc": "Vlithryn increases Justice of the Depths's damage bonus by $(not_buffed amount)% for every Champion in the formation with an INT score of 12 or lower, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,100,16895",
            "stack_title": "Affected Champions",
            "amount_func": "mult",
            "stack_func": "per_crusader",
            "stack_func_data": {
                "target_filters": [
                    {
                        "type": "stat",
                        "stat": "int",
                        "comparison": "<=",
                        "value": 12
                    }
                ]
            },
            "amount_updated_listeners": [
                "slot_changed",
                "feat_changed"
            ],
            "show_bonus": true
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
**Who Else Would Save Them** (Guess)
> Vlithryn increases Justice of the Depths's damage bonus by 150% for each Champion in the formation with a total ability score of 78 or lower, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2285,
    "flavour_text": "",
    "description": {
        "desc": "Vlithryn increases Justice of the Depths's damage bonus by $(not_buffed amount)% for each Champion in the formation with a total ability score of 78 or lower, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,150,16895",
            "stack_title": "Affected Champions",
            "amount_func": "mult",
            "stack_func": "per_crusader",
            "stack_func_data": {
                "target_filters": [
                    {
                        "type": "stat",
                        "stat": "total_ability_score",
                        "comparison": "<=",
                        "value": 78
                    }
                ]
            },
            "amount_updated_listeners": [
                "slot_changed",
                "feat_changed"
            ],
            "show_bonus": true
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
**Spreading the Word** (Guess)
> Vlithryn increases Justice of the Depths's damage bonus by 150% for each unique Species in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2286,
    "flavour_text": "",
    "description": {
        "desc": "Vlithryn increases Justice of the Depths's damage bonus by $(not_buffed amount)% for each unique Species in the formation, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,150,16895",
            "stacks_multiply": true,
            "amount_func": "mult",
            "stack_func": "per_unique_race",
            "amount_updated_listeners": [
                "slot_changed",
                "feat_changed"
            ],
            "show_bonus": true
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
            <span class="itemTableIcon1">![Armor Icon](images/vlithryn/26193.png)</span><span class="itemTableIcon2">![Armor Icon](images/vlithryn/26193.png)</span><span class="itemTableIcon3">![Armor Icon](images/vlithryn/26194.png)</span><span class="itemTableIcon4">![Armor Icon](images/vlithryn/26195.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Armor
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Books Icon](images/vlithryn/26196.png)</span><span class="itemTableIcon2">![Books Icon](images/vlithryn/26196.png)</span><span class="itemTableIcon3">![Books Icon](images/vlithryn/26197.png)</span><span class="itemTableIcon4">![Books Icon](images/vlithryn/26198.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Books
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Headgear Icon](images/vlithryn/26199.png)</span><span class="itemTableIcon2">![Headgear Icon](images/vlithryn/26199.png)</span><span class="itemTableIcon3">![Headgear Icon](images/vlithryn/26200.png)</span><span class="itemTableIcon4">![Headgear Icon](images/vlithryn/26201.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Headgear
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Healing Payment Icon](images/vlithryn/26202.png)</span><span class="itemTableIcon2">![Healing Payment Icon](images/vlithryn/26202.png)</span><span class="itemTableIcon3">![Healing Payment Icon](images/vlithryn/26203.png)</span><span class="itemTableIcon4">![Healing Payment Icon](images/vlithryn/26204.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Healing Payment
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Maces Icon](images/vlithryn/26205.png)</span><span class="itemTableIcon2">![Maces Icon](images/vlithryn/26205.png)</span><span class="itemTableIcon3">![Maces Icon](images/vlithryn/26206.png)</span><span class="itemTableIcon4">![Maces Icon](images/vlithryn/26207.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Maces
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Spell Components Icon](images/vlithryn/26208.png)</span><span class="itemTableIcon2">![Spell Components Icon](images/vlithryn/26208.png)</span><span class="itemTableIcon3">![Spell Components Icon](images/vlithryn/26209.png)</span><span class="itemTableIcon4">![Spell Components Icon](images/vlithryn/26210.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Spell Components
        </span>
    </span>
</span>

# Feats

Unknown.

# Legendaries

Unknown.

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unlock Adventure: The Mechanical Menace (???)** (Complete Area 50)
> Stop the Modron March from crushing Waterdeep under its mechanical heel.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Variant 1: TBD** (Complete Area 75)
> 
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Variant 2: TBD** (Complete Area 125)
> 
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Variant 3: TBD** (Complete Area 175)
> 
</div></div>

# Other Champion Images

<span class="championImagesColumn">
    <span class="championImagesRow">
        <span class="championImagesPortrait">
            ![Vlithryn Console Portrait](images/vlithryn/console.png)Console Portrait
        </span>
    </span>
    <span class="championImagesRow">
        <span class="championImagesChests">
            ![Vlithryn Gold Chest Icon](images/vlithryn/chest_gold.png)Gold Chest Icon
        </span>
        <span class="championImagesChests">
            ![Vlithryn Silver Chest Icon](images/vlithryn/chest_silver.png)Silver Chest Icon
        </span>
    </span>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*