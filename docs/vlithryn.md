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
        "desc": "Every second, Vlithryn heals the most damaged Champion for $amount health. This amount is increased by $(not_buffed amount___2)% for each Tanking Champion in the formation."
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
        "owner_use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "show_bonus": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Divine Intervention** (Guess)
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 26239,
    "graphic": "Icons/Events/2018 GreatModronMarch/GreatModronMarch_Y8/Icon_Formation_Vlithryn_DivineIntervention",
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
**Pantheon of Blessings** (Guess)
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 26241,
    "graphic": "Icons/Events/2018 GreatModronMarch/GreatModronMarch_Y8/Icon_Formation_Vlithryn_PantheonofBlessings",
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
**Revivify** (Guess)
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 26242,
    "graphic": "Icons/Events/2018 GreatModronMarch/GreatModronMarch_Y8/Icon_Formation_Vlithryn_Revivify",
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

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Help the Unfortunate** (Guess)
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 26245,
    "graphic": "Icons/Events/2018 GreatModronMarch/GreatModronMarch_Y8/Icon_Specialization_Vlithryn_HelptheUnfortunate",
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
**Spreading the Word** (Guess)
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 26246,
    "graphic": "Icons/Events/2018 GreatModronMarch/GreatModronMarch_Y8/Icon_Specialization_Vlithryn_SpreadingtheWord",
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
**Who Else Would Save Them** (Guess)
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 26247,
    "graphic": "Icons/Events/2018 GreatModronMarch/GreatModronMarch_Y8/Icon_Specialization_Vlithryn_WhoElseWouldSaveThem",
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