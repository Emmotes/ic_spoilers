[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Laurana](images/laurana/portrait.png)
        </span>
        <span>
            Portrait
        </span>
    </span>
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![Model WebP of Laurana](images/laurana/model.webp)
        </span>
        <span>
            Base Model
        </span>
    </span>
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![Alternate Model WebP of Laurana: Quallathon](images/laurana/model-quallathon.webp)
        </span>
        <span>
            Quallathon Model
        </span>
    </span>
</span>

# Laurana

Lauralanthalasa Kanan, commonly known as Laurana, was a princess of the Qualinesti Elves and a Hero of the Lance. She was a brave fighter, a brilliant tactician, and an inspirational leader who became the Golden General of the Whitestone Army during the War of the Lance, leading them to victory.

[Dragonlace Fandom Wiki](https://dragonlance.fandom.com/wiki/Laurana_Kanan/){:target="_blank"}

# Basic Information

Laurana will be a new champion in the The Great Modron March event on 6 May 2026.

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
            <span style="margin-left:8px;">Elf (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Class**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Fighter (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Roles**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Tanking / Support / Hunter (Guess)</span>
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
            <span style="margin-left:8px;">Heroes of the Lance (Guess)</span>
        </span>
    </span>
</span>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Laurana" fill="#aaa" data-formationName="Laurana" data-campaignName="The Great Modron March" width="349" height="140"><circle cx="135" cy="45" r="15"/><circle cx="135" cy="85" r="15"/><circle cx="95" cy="25" r="15"/><circle cx="95" cy="65" r="15"/><circle cx="95" cy="105" r="15"/><circle cx="55" cy="85" r="15"/><circle cx="55" cy="125" r="15"/><circle cx="15" cy="25" r="15"/><circle cx="15" cy="65" r="15"/><circle cx="15" cy="105" r="15"/><text x="165" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Laurana</text><text x="165" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">The Great Modron March</text></svg>
</span>

# Attacks

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Sword Strike** (Melee)
> Laurana nimbly attacks the closest enemy with her shortsword for one hit.  
> Cooldown: 5s (Cap 1.25s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 962,
    "name": "Sword Strike",
    "description": "Laurana attacks the closest enemy for one hit.",
    "long_description": "Laurana nimbly attacks the closest enemy with her shortsword for one hit.",
    "graphic_id": 0,
    "target": "front",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 5,
    "animations": [
        {
            "type": "melee_attack",
            "target_offset_x": -34,
            "damage_frame": 7,
            "jump_sound": 30,
            "sound_frames": {
                "7": 154
            }
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
**Ultimate Attack: Dragon Strafe** (Guess)
> Laurana and Quallathon deal one ultimate hit to all enemies, which additionally encourages her allies for a short while.  
> Cooldown: 300s (Cap 75s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 963,
    "name": "Dragon Strafe",
    "description": "Laurana and Quallathon deal one ultimate hit to all enemies, and encourage her allies.",
    "long_description": "Laurana and Quallathon deal one ultimate hit to all enemies, which additionally encourages her allies for a short while.",
    "graphic_id": 28968,
    "target": "all",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 0.03,
    "cooldown": 300,
    "animations": [
        {
            "type": "laurana_ultimate"
        }
    ],
    "tags": [
        "magic",
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
> Laurana has 20 achievements. She gains one Campaign stack for each of her achievements that you have completed.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2684,
    "flavour_text": "",
    "description": {
        "desc": "Laurana has 20 achievements. She gains one Campaign stack for each of her achievements that you have completed."
    },
    "effect_keys": [
        {
            "effect_string": "do_nothing",
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Golden General** (Guess)
> The effect of Laurana's chosen Battle Plan specialization choice is increased by 100% for each Campaign stack she has, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2685,
    "flavour_text": "",
    "description": {
        "desc": "The effect of Laurana's chosen Battle Plan specialization choice is increased by $amount% for each Campaign stack she has, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack_amount,100"
        },
        {
            "effect_string": "do_nothing,0",
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 28959,
    "large_graphic_id": 28955,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": true,
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
**Leader of the Whitestone Armies** (Guess)
> Laurana's Soldiers are Heroes of the Lance Champions. Laurana gains Army stacks equal to the number of Soldiers in the formation, or the number of Campaign stacks she has divided by 2, whichever is lower. Laurana increases the effect of her chosen Battle Plan specialization choice by 100% for each Army stack that she has, stacking multiplicatively. A specialization choice and certain feats can add more Champions who are her Soldiers.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2686,
    "flavour_text": "",
    "description": {
        "desc": "Laurana's Soldiers are Heroes of the Lance Champions. Laurana gains Army stacks equal to the number of Soldiers in the formation, or the number of Campaign stacks she has divided by 2, whichever is lower. Laurana increases the effect of her chosen Battle Plan specialization choice by $amount% for each Army stack that she has, stacking multiplicatively. A specialization choice and certain feats can add more Champions who are her Soldiers."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack_amount,100"
        },
        {
            "effect_string": "do_nothing,0",
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 28960,
    "large_graphic_id": 28956,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": true,
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
**Strategic Reserves** (Guess)
> Laurana increases the health of all other Champions in the formation by 10% of her max health, plus 2% for each Campaign stack, stacking additively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2687,
    "flavour_text": "",
    "description": {
        "desc": "Laurana increases the health of all other Champions in the formation by 10% of her max health, plus 2% for each Campaign stack, stacking additively."
    },
    "effect_keys": [
        {
            "effect_string": "do_nothing,10",
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 28961,
    "large_graphic_id": 28957,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Inner Strength** (Guess)
> Laurana counts the number of enemies that have spawned in the current area, with bosses counting as the same as three times the number of Campaign stacks she has. Laurana increases the effect of her Battle Plan specialization choice by 20% for each one of these enemies, stacking multiplicatively and capped at 70.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2688,
    "flavour_text": "",
    "description": {
        "desc": "Laurana counts the number of enemies that have spawned in the current area, with bosses counting as the same as three times the number of Campaign stacks she has. Laurana increases the effect of her Battle Plan specialization choice by $(not_buffed amount)% for each one of these enemies, stacking multiplicatively and capped at 70."
    },
    "effect_keys": [
        {
            "effect_string": "do_nothing,20",
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 28958,
    "large_graphic_id": 28954,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": true
    }
}
</pre>
</p>
</details>
</div></div>

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Battle Plan: Charge** (Guess)
> Laurana increases the damage of Champions in the column behind her by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2689,
    "flavour_text": "",
    "description": {
        "desc": "Laurana increases the damage of Champions in the column behind her by $amount%."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "hero_dps_multiplier_mult,100",
            "targets": [
                {
                    "type": "exactly_x_behind",
                    "num_columns": 1
                }
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 28962,
    "large_graphic_id": 28962,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Battle Plan: Outflank** (Guess)
> Laurana increases the damage of Champions in the column that is two columns behind her by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2690,
    "flavour_text": "",
    "description": {
        "desc": "Laurana increases the damage of Champions in the column that is two columns behind her by $amount%."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "hero_dps_multiplier_mult,100",
            "targets": [
                {
                    "type": "exactly_x_behind",
                    "num_columns": 2
                }
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 28964,
    "large_graphic_id": 28964,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Battle Plan: Fortify** (Guess)
> Laurana increases the damage of Champions in the column that is three columns behind her by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2691,
    "flavour_text": "",
    "description": {
        "desc": "Laurana increases the damage of Champions in the column that is three columns behind her by $amount%."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "hero_dps_multiplier_mult,100",
            "targets": [
                {
                    "type": "exactly_x_behind",
                    "num_columns": 3
                }
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 28963,
    "large_graphic_id": 28963,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Lead the Attack** (Guess)
> Laurana additively increases the Critical Hit Chance of her Soldiers by 20%, and the Critical Hit Damage by 100%. Additionally, DPS Champions also count as Laurana's Soldiers.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2692,
    "flavour_text": "",
    "description": {
        "desc": "Laurana additively increases the Critical Hit Chance of her Soldiers by 20%, and the Critical Hit Damage by $amount%. Additionally, DPS Champions also count as Laurana's Soldiers."
    },
    "effect_keys": [
        {
            "effect_string": "do_nothing,100",
            "off_when_benched": true
        },
        {
            "effect_string": "do_nothing,20",
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 28965,
    "large_graphic_id": 28965,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": true,
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
**Protect the Vulnerable** (Guess)
> Laurana increases her maximum health by 100%. Additionally, Champions with a Constitution of 12 or lower also count as Laurana's Soldiers.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2693,
    "flavour_text": "",
    "description": {
        "desc": "Laurana increases her maximum health by $amount%. Additionally, Champions with a Constitution of 12 or lower also count as Laurana's Soldiers."
    },
    "effect_keys": [
        {
            "effect_string": "do_nothing,100",
            "off_when_benched": true
        },
        {
            "effect_string": "do_nothing",
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 28966,
    "large_graphic_id": 28966,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": true,
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
**Wield the Dragonlance** (Guess)
> Laurana gains the Hunter role and Dragon and Monstrosity enemies become her favored foes. All Champions deal 400% more damage against Dragon and/or Monstrosity enemies for each Hunter Champion in the formation, stacking multiplicatively. Additionally, Champions with the Hunter role also count as Laurana's Soldiers.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2694,
    "flavour_text": "",
    "description": {
        "desc": "Laurana gains the Hunter role and Dragon and Monstrosity enemies become her favored foes. All Champions deal $(not_buffed amount)% more damage against Dragon and/or Monstrosity enemies for each Hunter Champion in the formation, stacking multiplicatively. Additionally, Champions with the Hunter role also count as Laurana's Soldiers."
    },
    "effect_keys": [
        {
            "effect_string": "do_nothing,400",
            "off_when_benched": true
        },
        {
            "effect_string": "do_nothing",
            "off_when_benched": true
        },
        {
            "effect_string": "do_nothing",
            "off_when_benched": true
        },
        {
            "effect_string": "do_nothing",
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 28967,
    "large_graphic_id": 28967,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0
    }
}
</pre>
</p>
</details>
</div></div>

# Items

<span class="itemTableColumn">
    <span class="itemTableRowHeader">
        <span class="itemTableIcon" style="justify-content:flex-start">
            <span style="margin-left:8px;">**Icons**</span>
        </span>
        <span class="itemTableNameSmall">
            **Name**
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Armors Icon](images/laurana/28881.png)</span><span class="itemTableIcon2">![Armors Icon](images/laurana/28881.png)</span><span class="itemTableIcon3">![Armors Icon](images/laurana/28882.png)</span><span class="itemTableIcon4">![Armors Icon](images/laurana/28883.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Armors
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Dragonlance Icon](images/laurana/28884.png)</span><span class="itemTableIcon2">![Dragonlance Icon](images/laurana/28884.png)</span><span class="itemTableIcon3">![Dragonlance Icon](images/laurana/28885.png)</span><span class="itemTableIcon4">![Dragonlance Icon](images/laurana/28886.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Dragonlance
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Longbows Icon](images/laurana/28887.png)</span><span class="itemTableIcon2">![Longbows Icon](images/laurana/28887.png)</span><span class="itemTableIcon3">![Longbows Icon](images/laurana/28888.png)</span><span class="itemTableIcon4">![Longbows Icon](images/laurana/28889.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Longbows
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![More Item Icon](images/laurana/28890.png)</span><span class="itemTableIcon2">![More Item Icon](images/laurana/28890.png)</span><span class="itemTableIcon3">![More Item Icon](images/laurana/28891.png)</span><span class="itemTableIcon4">![More Item Icon](images/laurana/28892.png)</span>
        </span>
        <span class="itemTableNameSmall">
            More Item
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Story Item Icon](images/laurana/28893.png)</span><span class="itemTableIcon2">![Story Item Icon](images/laurana/28893.png)</span><span class="itemTableIcon3">![Story Item Icon](images/laurana/28894.png)</span><span class="itemTableIcon4">![Story Item Icon](images/laurana/28895.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Story Item
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Weapons Icon](images/laurana/28896.png)</span><span class="itemTableIcon2">![Weapons Icon](images/laurana/28896.png)</span><span class="itemTableIcon3">![Weapons Icon](images/laurana/28897.png)</span><span class="itemTableIcon4">![Weapons Icon](images/laurana/28898.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Weapons
        </span>
    </span>
</span>

# Feats

Unknown.

# Legendaries

Unknown.

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unlock Adventure: The Mechanical Menace (Laurana)** (Complete Area 50)
> Stop the Modron March from crushing Waterdeep under its mechanical heel.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Variant 1: Arrival of the Golden General** (Complete Area 75)
> Laurana starts in the formation. She can be moved, but not removed.  
> After area 50, only Laurana and Champions targeted by her Battle Plan specialization choice can deal damage.  
> 1-2 Baaz or Kapak Draconians spawn with each wave. They don't drop gold nor count towards quest progress.  
> In each boss area, a Sivak Draconian boss spawns as part of the first wave. It must also be defeated to progress.  
> <b>Getting to Know Laurana:</b> Laurana's first specialization choice selects one column behind her for her primary buff. Put your main damage dealer in that column!
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Variant 2: Dragons of Winter Night** (Complete Area 125)
> Laurana starts in the formation. She can't be moved or removed.  
> Laurana gains 2 bonus Campaign stacks while on this adventure.  
> Fizban joins the formation. Champions in Fizban's column deal 1000% additional damage. This bonus counts as a positional formation ability.  
> 1-2 Chromatic Wyrmlings spawn with each wave. They don't drop gold, nor count towards quest progress.  
> All enemies move 100% faster and deal 100% more damage.  
> <b>Getting to Know Laurana:</b> Laurana has 15 bonus achievements, and her abilities improve as you complete these achievements. These achievements are listed in the Great Modron March section of the achievement dialog.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Variant 3: Critical Soldiers** (Complete Area 175)
> Laurana starts in the formation. She can be moved, but not removed.  
> You may only use Heroes of the Lance Champions, DPS Champions, Hunter Champions, or Champions with a Constitution of 12 or lower.  
> After area 50, bosses spawn with a special shield which must be destroyed before their regular hit points appear. To destroy a special shield, an enemy must be hit with a critical hit. After area 500, this special shield takes 5 critical hits to destroy.  
> 1-2 Bozak Draconians spawn with each wave. They don't drop gold nor count towards quest progress.  
> In each boss area, an Aurak Draconian boss spawns as part of the first wave. It must also be defeated to progress.  
> <b>Getting to Know Laurana:</b> Laurana's Soldiers further increase the power of her buff. Use her second specialization choice to add more Champions to her list of potential Soldiers!
</div></div>

# Other Champion Images

<span class="championImagesColumn">
    <span class="championImagesRow">
        <span class="championImagesPortrait">
            ![Laurana Console Portrait](images/laurana/console.png)Console Portrait
        </span>
    </span>
    <span class="championImagesRow">
        <span class="championImagesChests">
            ![Laurana Gold Chest Icon](images/laurana/chest_gold.png)Gold Chest Icon
        </span>
        <span class="championImagesChests">
            ![Laurana Silver Chest Icon](images/laurana/chest_silver.png)Silver Chest Icon
        </span>
    </span>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*