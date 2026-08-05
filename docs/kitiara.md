[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Kitiara](images/kitiara/portrait.png)
        </span>
        <span>
            Portrait
        </span>
    </span>
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![Model WebP of Kitiara](images/kitiara/model.webp)
        </span>
        <span>
            Base Model
        </span>
    </span>
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![Alternate Model WebP of Kitiara: Skie](images/kitiara/model-skie.webp)
        </span>
        <span>
            Skie Model
        </span>
    </span>
</span>

# Kitiara Uth Matar

[Kitiara Uth Matar - Dragonlace Fandom Wiki](https://dragonlance.fandom.com/wiki/Kitiara_Uth_Matar){:target="_blank"}

# Basic Information

Kitiara Uth Matar will be a new champion - potentially in the Liars' Night event on 7 October 2026.

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
            <span style="margin-left:8px;">Unknown</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Roles**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Support / Control (Guess)</span>
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
            <span style="margin-left:8px;">- (Guess)</span>
        </span>
    </span>
</span>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Kitiara" fill="#aaa" data-formationName="Kitiara" data-campaignName="Liar's Night" width="291" height="120"><circle cx="175" cy="25" r="15"/><circle cx="175" cy="65" r="15"/><circle cx="175" cy="105" r="15"/><circle cx="135" cy="45" r="15"/><circle cx="135" cy="85" r="15"/><circle cx="95" cy="65" r="15"/><circle cx="95" cy="105" r="15"/><circle cx="55" cy="45" r="15"/><circle cx="55" cy="85" r="15"/><circle cx="15" cy="65" r="15"/><text x="205" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Kitiara</text><text x="205" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Liar's Night</text></svg>
</span>

# Attacks

Unknown.

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Merciless Resolve** (Guess)
> Kitiara increases the damage of all Champions furthest from her by 100% for each Champion adjacent to her, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2913,
    "flavour_text": "",
    "description": {
        "desc": "Kitiara increases the damage of all Champions furthest from her by 100% for each Champion adjacent to her, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,100"
        },
        {
            "effect_string": "do_nothing,100",
            "use_computed_amount_for_description": true,
            "targets": [
                "self"
            ],
            "amount_expr": "upgrade_amount(20597,0)",
            "amount_func": "mult",
            "stack_func": "adjacent_champions",
            "show_bonus": true,
            "show_stacks": true,
            "amount_updated_listeners": [
                "upgrade_unlocked",
                "slot_changed",
                "feat_changed",
                "hero_tags_changed"
            ]
        },
        {
            "effect_string": "hero_dps_multiplier_mult,100",
            "use_computed_amount_for_description": true,
            "targets": [
                "farthest_away_hero"
            ],
            "amount_expr": "upgrade_amount(20597,1)",
            "amount_func": "mult",
            "show_bonus": true,
            "amount_updated_listeners": [
                "upgrade_unlocked",
                "slot_changed",
                "feat_changed",
                "hero_tags_changed"
            ]
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
        "retain_on_slot_changed": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Arrogant Charm** (Guess)
> Kitiara charms all enemies that attempt to attack her, stunning them indefinitely. The stun is removed when the enemy is hit by Kitiara, and each enemy can only be charmed once.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2914,
    "flavour_text": "",
    "description": {
        "desc": "Kitiara charms all enemies that attempt to attack her, stunning them indefinitely. The stun is removed when the enemy is hit by Kitiara, and each enemy can only be charmed once."
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
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Cruel Cunning** (Guess)
> When Champions other than Kitiara cumulatively take damage equal to 100% of their max health, Kitiara gains a Power stack. This can trigger multiple times each time other Champions reach the threshold. The post-stack effect of Merciless Resolve is increased by 10% for each Power stack she has, stacking multiplicatively. Caps at 100 stacks and reset when changing areas.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2915,
    "flavour_text": "",
    "description": {
        "desc": "When Champions other than Kitiara cumulatively take damage equal to 100% of their max health, Kitiara gains a Power stack. This can trigger multiple times each time other Champions reach the threshold.  The post-stack effect of Merciless Resolve is increased by 10% for each Power stack she has, stacking multiplicatively. Caps at 100 stacks and reset when changing areas."
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
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**The Only Truth** (Guess)
> Champions affected by Merciless Resolve deal additional damage to enemies with segmented health. When they successfully break at least one segment, they break additional segments equal to 4 minus the number of Champions affected by Merciless Resolve, to a minimum of 1 extra segment.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2916,
    "flavour_text": "",
    "description": {
        "desc": "Champions affected by Merciless Resolve deal additional damage to enemies with segmented health. When they successfully break at least one segment, they break additional segments equal to 4 minus the number of Champions affected by Merciless Resolve, to a minimum of 1 extra segment."
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
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Knight of the Black Rose** (Guess)
> When a boss enemy appears, Lord Soth enters the melee. He knocks back all enemies and spawns a wall of skeletal warriors who keep all enemies at bay for 15 seconds. While this skeletal wall persists, Kitiara gains 1 Power stack per second. Lord Soth will reappear and reapply this effect each time the boss's enrage meter reaches a multiple of 5.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2917,
    "flavour_text": "",
    "description": {
        "desc": "When a boss enemy appears, Lord Soth enters the melee. He knocks back all enemies and spawns a wall of skeletal warriors who keep all enemies at bay for 15 seconds. While this skeletal wall persists, Kitiara gains 1 Power stack per second. Lord Soth will reappear and reapply this effect each time the boss's enrage meter reaches a multiple of 5."
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
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Loyal to Her Past** (Guess)
> Kitiara begrudgingly gains the Heroes of the Lance affiliation, and increases the effect of Merciless Resolve by 100% for each Heroes of the Lance Champion in the formation, stacking multiplicatively. Kitiara also starts each area by gaining Power stacks equal to the number of Heroes of the Lance Champions in the formation.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2918,
    "flavour_text": "",
    "description": {
        "desc": "Kitiara begrudgingly gains the Heroes of the Lance affiliation, and increases the effect of Merciless Resolve by 100% for each Heroes of the Lance Champion in the formation, stacking multiplicatively. Kitiara also starts each area by gaining Power stacks equal to the number of Heroes of the Lance Champions in the formation."
    },
    "effect_keys": [
        {
            "effect_string": "do_nothing"
        },
        {
            "effect_string": "do_nothing"
        },
        {
            "effect_string": "do_nothing"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
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
**Loyal to Herself** (Guess)
> Kitiara increases the effect of Merciless Resolve by 100% for each Unaffiliated champion in the formation, stacking multiplicatively. Arrogant Charm will now trigger when enemies attempt to attack any Champions adjacent to Kitiara as well.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2919,
    "flavour_text": "",
    "description": {
        "desc": "Kitiara increases the effect of Merciless Resolve by 100% for each Unaffiliated champion in the formation, stacking multiplicatively. Arrogant Charm will now trigger when enemies attempt to attack any Champions adjacent to Kitiara as well."
    },
    "effect_keys": [
        {
            "effect_string": "do_nothing"
        },
        {
            "effect_string": "do_nothing"
        },
        {
            "effect_string": "do_nothing"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
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
**Loyal to Darkness** (Guess)
> Kitiara increases the effect of Merciless Resolve by 100% for each Evil Champion in the formation, stacking multiplicatively. Knight of the Black Rose's Power stacks gained is also increased by 1.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2920,
    "flavour_text": "",
    "description": {
        "desc": "Kitiara increases the effect of Merciless Resolve by 100% for each Evil Champion in the formation, stacking multiplicatively. Knight of the Black Rose's Power stacks gained is also increased by 1."
    },
    "effect_keys": [
        {
            "effect_string": "do_nothing"
        },
        {
            "effect_string": "do_nothing"
        },
        {
            "effect_string": "do_nothing"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
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
            <span class="itemTableIcon1">![Accessories Icon](images/kitiara/31302.png)</span><span class="itemTableIcon2">![Accessories Icon](images/kitiara/31302.png)</span><span class="itemTableIcon3">![Accessories Icon](images/kitiara/31303.png)</span><span class="itemTableIcon4">![Accessories Icon](images/kitiara/31304.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Accessories
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Armor Icon](images/kitiara/31305.png)</span><span class="itemTableIcon2">![Armor Icon](images/kitiara/31305.png)</span><span class="itemTableIcon3">![Armor Icon](images/kitiara/31306.png)</span><span class="itemTableIcon4">![Armour Icon](images/kitiara/31307.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Armour
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Headpieces Icon](images/kitiara/31308.png)</span><span class="itemTableIcon2">![Headpieces Icon](images/kitiara/31308.png)</span><span class="itemTableIcon3">![Headpieces Icon](images/kitiara/31309.png)</span><span class="itemTableIcon4">![Headpieces Icon](images/kitiara/31310.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Headpieces
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Letters Icon](images/kitiara/31311.png)</span><span class="itemTableIcon2">![Letters Icon](images/kitiara/31311.png)</span><span class="itemTableIcon3">![Letters Icon](images/kitiara/31312.png)</span><span class="itemTableIcon4">![Letters Icon](images/kitiara/31313.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Letters
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Miscellaneous Icon](images/kitiara/31314.png)</span><span class="itemTableIcon2">![Miscellaneous Icon](images/kitiara/31314.png)</span><span class="itemTableIcon3">![Miscellaneous Icon](images/kitiara/31315.png)</span><span class="itemTableIcon4">![Miscellaneous Icon](images/kitiara/31316.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Miscellaneous
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Weapons Icon](images/kitiara/31317.png)</span><span class="itemTableIcon2">![Weapons Icon](images/kitiara/31317.png)</span><span class="itemTableIcon3">![Weapons Icon](images/kitiara/31318.png)</span><span class="itemTableIcon4">![Weapons Icon](images/kitiara/31319.png)</span>
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
**Unlock Adventure: The Trickster's Delight (Kitiara)** (Complete Area 50)
> Chase down a masked man who has performed a daring heist.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Variant 1: Variant 1** (Complete Area 75)
> 
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Variant 2: Variant 2** (Complete Area 125)
> 
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Variant 3: Variant 3** (Complete Area 175)
> 
</div></div>

# Other Champion Images

<span class="championImagesColumn">
    <span class="championImagesRow">
        <span class="championImagesPortrait">
            ![Kitiara Uth Matar Console Portrait](images/kitiara/console.png)Console Portrait
        </span>
    </span>
    <span class="championImagesRow">
        <span class="championImagesChests">
            ![Kitiara Uth Matar Gold Chest Icon](images/kitiara/chest_gold.png)Gold Chest Icon
        </span>
        <span class="championImagesChests">
            ![Kitiara Uth Matar Silver Chest Icon](images/kitiara/chest_silver.png)Silver Chest Icon
        </span>
    </span>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*