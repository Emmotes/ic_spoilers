[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Skylla](images/skylla/portrait.png)
        </span>
        <span>
        Portrait
        </span>
    </span>
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![Model GIF of Skylla](images/skylla/model.gif)
        </span>
        <span>
        Model
        </span>
    </span>
</span>

# Skylla

Skylla, who sometimes goes by the alias Charmay, forged a warlock's pact with Baba Yaga. It is from this powerful archfey that Skylla draws her magic.

[Skylla - 5etools](https://5e.tools/bestiary/skylla-wbtw.html)

# Basic Information

Skylla will be a new champion in the Feast of the Moon event on 5 November 2025.

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
            <span style="margin-left:8px;">Warlock (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Roles**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Support / Debuff (Guess)</span>
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
    <svg xmlns="http://www.w3.org/2000/svg" id="Skylla" fill="#aaa" data-formationName="Skylla" data-campaignName="Feast of the Moon" width="338" height="160"><circle cx="175" cy="25" r="15"/><circle cx="175" cy="105" r="15"/><circle cx="135" cy="45" r="15"/><circle cx="135" cy="85" r="15"/><circle cx="95" cy="25" r="15"/><circle cx="95" cy="65" r="15"/><circle cx="95" cy="105" r="15"/><circle cx="95" cy="145" r="15"/><circle cx="55" cy="45" r="15"/><circle cx="15" cy="25" r="15"/><text x="205" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Skylla</text><text x="205" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Feast of the Moon</text></svg>
</span>

# Attacks

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Eldritch Staff** (Melee and Magic)
> Skylla attacks a random enemy with a swing of her staff, dealing 1 hit. The lightning from her staff also zaps another random enemy for 1 hit.  
> Cooldown: 4.5s (Cap 1.125s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 904,
    "name": "Eldritch Staff",
    "description": "Skylla attacks a random enemy with her staff for one hit, and zaps another random enemy for 1 hit.",
    "long_description": "Skylla attacks a random enemy with a swing of her staff, dealing 1 hit. The lightning from her staff also zaps another random enemy for 1 hit.",
    "graphic_id": 0,
    "target": "random",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 4.5,
    "animations": [
        {
            "type": "melee_attack",
            "special_melee": "skylla",
            "target_offset": [
                -200,
                0
            ],
            "seq_chargeloop": 1,
            "attack_sounds": {
                "melee": 179,
                "eb": 184
            },
            "particle_names": [
                "Particle_Skylla_FaerieFireBlue1",
                "Particle_Skylla_FaerieFireBlue2"
            ]
        }
    ],
    "tags": [
        "melee",
        "ranged"
    ],
    "damage_types": [
        "melee",
        "magic"
    ]
}
</pre>
</p>
</details>
</div></div>

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Whispers of Baba Yaga** (Guess)
> Skylla increases the damage of all Champions in the column in front of her by 100% for each Champion affected by this ability, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2474,
    "flavour_text": "",
    "description": {
        "desc": "Skylla increases the damage of all Champions in the column in front of her by $(not_buffed amount)% for each Champion affected by this ability, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "hero_dps_multiplier_mult,100",
            "off_when_benched": true,
            "stacks_multiply": true,
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasEffect(2474) && hero_id != 169",
            "targets": [
                "next_col"
            ],
            "show_bonus": true
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
**Faerie Fire** (Guess)
> When Skylla attacks an enemy but doesn't defeat it, she casts Faerie Fire on it. Champions deal 100% additional damage to enemies affected by Faerie Fire.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2475,
    "flavour_text": "",
    "description": {
        "desc": "When Skylla attacks an enemy but doesn't defeat it, she casts Faerie Fire on it. Champions deal 100% additional damage to enemies affected by Faerie Fire."
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
**Fae's Flicker** (Guess)
> Whenever an enemy that is debuffed by Faerie Fire is defeated, Skylla gains a Shimmer stack. Skylla increases the effect of Whispers of Baba Yaga by 100% for each Shimmer stack she has, stacking additively. Shimmer stacks persist for the entire adventure and reset when you complete it.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2476,
    "flavour_text": "",
    "description": {
        "desc": "Whenever an enemy that is debuffed by Faerie Fire is defeated, Skylla gains a Shimmer stack. Skylla increases the effect of Whispers of Baba Yaga by 100% for each Shimmer stack she has, stacking additively. Shimmer stacks persist for the entire adventure and reset when you complete it."
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
**Witches Switch** (Guess)
> Most formation abilities featuring ability score thresholds now target Champions who do not meet the thresholds, instead of those that do, and the effect of Whispers of Baba Yaga is increased by 200% for each such ability, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2477,
    "flavour_text": "",
    "description": {
        "desc": "Most formation abilities featuring ability score thresholds now target Champions who do not meet the thresholds, instead of those that do, and the effect of Whispers of Baba Yaga is increased by 200% for each such ability, stacking multiplicatively."
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
**League** (Guess)
> Skylla increases the effect of Whispers of Baba Yaga by 100%  for each evil Champion in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2478,
    "flavour_text": "",
    "description": {
        "desc": "Skylla increases the effect of Whispers of Baba Yaga by 100%  for each evil Champion in the formation, stacking multiplicatively."
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
**Wthering Ward** (Guess)
> Increase the effect of Whispers of Baba Yaga by 33% for each debuff that has been applied to an enemy in the current area, stacking multiplicatively and capping at 50.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2479,
    "flavour_text": "",
    "description": {
        "desc": "Increase the effect of Whispers of Baba Yaga by 33% for each debuff that has been applied to an enemy in the current area, stacking multiplicatively and capping at 50."
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
**Green Fire** (Guess)
> Skylla's Faerie Fire remains green, but increases the effect of the debuff by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2480,
    "flavour_text": "",
    "description": {
        "desc": "Skylla's Faerie Fire remains green, but increases the effect of the debuff by 100%."
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
**Blue Fire** (Guess)
> Skylla's Faerie Fire turns blue. Champions attacking enemies affected by Faerie Fire have a 40% additional chance to deal a critical hit.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2481,
    "flavour_text": "",
    "description": {
        "desc": "Skylla's Faerie Fire turns blue. Champions attacking enemies affected by Faerie Fire have a 40% additional chance to deal a critical hit."
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
**Purple Fire** (Guess)
> Skylla gains the Breaker role and her Faerie Fire turns violet. Enemies affected by Faerie Fire lose an additional armor or segmented health piece when they are attacked and at least 1 segment was broken.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2482,
    "flavour_text": "",
    "description": {
        "desc": "Skylla gains the Breaker role and her Faerie Fire turns violet. Enemies affected by Faerie Fire lose an additional armor or segmented health piece when they are attacked and at least 1 segment was broken."
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
            <span class="itemTableIcon1">![Baba Yaga Icon](images/skylla/27682.png)</span><span class="itemTableIcon2">![Baba Yaga Icon](images/skylla/27682.png)</span><span class="itemTableIcon3">![Baba Yaga Icon](images/skylla/27683.png)</span><span class="itemTableIcon4">![Baba Yaga Icon](images/skylla/27684.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Baba Yaga
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Charmay Disguise Icon](images/skylla/27685.png)</span><span class="itemTableIcon2">![Charmay Disguise Icon](images/skylla/27685.png)</span><span class="itemTableIcon3">![Charmay Disguise Icon](images/skylla/27686.png)</span><span class="itemTableIcon4">![Charmay Disguise Icon](images/skylla/27687.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Charmay Disguise
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Clothing Icon](images/skylla/27688.png)</span><span class="itemTableIcon2">![Clothing Icon](images/skylla/27688.png)</span><span class="itemTableIcon3">![Clothing Icon](images/skylla/27689.png)</span><span class="itemTableIcon4">![Clothing Icon](images/skylla/27690.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Clothing
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Golmos Prison Icon](images/skylla/27691.png)</span><span class="itemTableIcon2">![Golmos Prison Icon](images/skylla/27691.png)</span><span class="itemTableIcon3">![Golmos Prison Icon](images/skylla/27692.png)</span><span class="itemTableIcon4">![Golmos Prison Icon](images/skylla/27693.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Golmos Prison
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Spell Components Icon](images/skylla/27694.png)</span><span class="itemTableIcon2">![Spell Components Icon](images/skylla/27694.png)</span><span class="itemTableIcon3">![Spell Components Icon](images/skylla/27695.png)</span><span class="itemTableIcon4">![Spell Components Icon](images/skylla/27696.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Spell Components
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Weapons Icon](images/skylla/27697.png)</span><span class="itemTableIcon2">![Weapons Icon](images/skylla/27697.png)</span><span class="itemTableIcon3">![Weapons Icon](images/skylla/27698.png)</span><span class="itemTableIcon4">![Weapons Icon](images/skylla/27699.png)</span>
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
**Unlock Adventure: The Crypt of Legends (Skylla)** (Complete Area 50)
> Pay respects to the heroes of olde during the Feast of the Moon.
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
            ![Skylla Console Portrait](images/skylla/console.png)Console Portrait
        </span>
    </span>
    <span class="championImagesRow">
        <span class="championImagesChests">
            ![Skylla Gold Chest Icon](images/skylla/chest_gold.png)Gold Chest Icon
        </span>
        <span class="championImagesChests">
            ![Skylla Silver Chest Icon](images/skylla/chest_silver.png)Silver Chest Icon
        </span>
    </span>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*