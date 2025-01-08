[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Volo](images/volo/portrait.png)
        </span>
        <span>
        Portrait
        </span>
    </span>
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![Model GIF of Volo](images/volo/model.gif)
        </span>
        <span>
        Model
        </span>
    </span>
</span>

# Volo

Volo was a too-curious-for-his-own-good travelling scholar and minor wizard. Always on the lookout for an exposé, he all too frequently was at odds with Elminster, who preferred some things to be kept in the dark. In fact, it was his assembling his "first" guide—Volo's Guide to All Things Magical—that put him on the "path" to making his other guides. As for Elminster, it is he who edits every guide that Volo has published, as evident in the many footnotes in each, including Volo's Guide to All Things Magical, which almost got Volo killed making it.

[Wikipedia](https://en.wikipedia.org/wiki/Volothamp_Geddarm/)

# Basic Information

Volo will be a new champion in the Fleetswake event on 5 March 2025.

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
            <span style="margin-left:8px;">Wizard (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Roles**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Support / Hunter (Guess)</span>
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
            <span style="margin-left:8px;">Chaotic Good (Guess)</span>
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

Unknown.
{% comment %}
<span class="formationBorder">
    ![Formation Layout](images/volo/formation.png)
</span>
{% endcomment %}

# Attacks

Unknown.

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> Volo can be used in any Grand Tour of the Sword Coast campaign adventure or variant, even if he would not normally be available to be used due to variant or patron restrictions.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2230,
    "flavour_text": "",
    "description": {
        "desc": "Volo can be used in any Grand Tour of the Sword Coast campaign adventure or variant, even if he would not normally be available to be used due to variant or patron restrictions."
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
        "formation_circle_icon": false,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Volo's Guide to Combat** (Guess)
> Volo increases the damage of all Champions in the two columns in front of him by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2231,
    "flavour_text": "",
    "description": {
        "desc": "Volo increases the damage of all Champions in the two columns in front of him by $amount%."
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
    "graphic_id": 0,
    "large_graphic_id": 0,
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
**Questing** (Guess)
> Volo increases the effect of Volo's Guide to Combat by 100% for each Guide and/or Collection Quest completed, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2232,
    "flavour_text": "",
    "description": {
        "desc": "Volo increases the effect of Volo's Guide to Combat by $amount% for each Guide and/or Collection Quest completed, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,100"
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
        "default_bonus_index": 0
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Monsters** (Guess)
> Volo counts each type of enemy encountered in the current adventure. Volo increases the effect of Volo's Guide to Combat by 100% for each enemy type encountered, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2233,
    "flavour_text": "",
    "description": {
        "desc": "Volo counts each type of enemy encountered in the current adventure. Volo increases the effect of Volo's Guide to Combat by $amount% for each enemy type encountered, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,100"
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
        "default_bonus_index": 0
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Retreats** (Guess)
> If a Champion in the column in front of Volo is defeated, the formation immediately retreats to the previous area. Upon returning to the area of their near defeat, the effect of Volo's Guide to Combat is increased by $amount% in that area.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2234,
    "flavour_text": "",
    "description": {
        "desc": "If a Champion in the column in front of Volo is defeated, the formation immediately retreats to the previous area. Upon returning to the area of their near defeat, the effect of Volo's Guide to Combat is increased by $amount% in that area."
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
**Spirits and Specters** (Guess)
> Volo gains the Hunter role and Undead become his Favored Foe. The effect of Volo's Guide to Combat is increased by 100% for each Champion in the formation with the Hunter role, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2235,
    "flavour_text": "",
    "description": {
        "desc": "Volo gains the Hunter role and Undead become his Favored Foe. The effect of Volo's Guide to Combat is increased by $amount% for each Champion in the formation with the Hunter role, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,100"
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
        "default_bonus_index": 0
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Brain Eating Tadpoles** (Guess)
> The effect of Volo's Guide to Combat is increased by 100% for each Ceremorphosis stack the formation has, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2236,
    "flavour_text": "",
    "description": {
        "desc": "The effect of Volo's Guide to Combat is increased by $amount% for each Ceremorphosis stack the formation has, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,100"
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
        "default_bonus_index": 0
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**All Things Magical** (Guess)
> The effect of Volo's Guide to Combat is increased by 100% for each Champion in the formation with a Magic base attack, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2237,
    "flavour_text": "",
    "description": {
        "desc": "The effect of Volo's Guide to Combat is increased by $amount% for each Champion in the formation with a Magic base attack, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,100"
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
        <span class="itemTableIcon">
            <span style="margin-left:8px;">**Icons**</span>
        </span>
        <span class="itemTableNameSmall">
            **Name**
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Assorted Stuff Icon](images/volo/25657.png)</span><span class="itemTableIcon2">![Assorted Stuff Icon](images/volo/25657.png)</span><span class="itemTableIcon3">![Assorted Stuff Icon](images/volo/25658.png)</span><span class="itemTableIcon4">![Assorted Stuff Icon](images/volo/25659.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Assorted Stuff
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Beret Icon](images/volo/25660.png)</span><span class="itemTableIcon2">![Beret Icon](images/volo/25660.png)</span><span class="itemTableIcon3">![Beret Icon](images/volo/25661.png)</span><span class="itemTableIcon4">![Beret Icon](images/volo/25662.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Beret
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Books Icon](images/volo/25663.png)</span><span class="itemTableIcon2">![Books Icon](images/volo/25663.png)</span><span class="itemTableIcon3">![Books Icon](images/volo/25664.png)</span><span class="itemTableIcon4">![Books Icon](images/volo/25665.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Books
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Bottle Of Ink Icon](images/volo/25666.png)</span><span class="itemTableIcon2">![Bottle Of Ink Icon](images/volo/25666.png)</span><span class="itemTableIcon3">![Bottle Of Ink Icon](images/volo/25667.png)</span><span class="itemTableIcon4">![Bottle Of Ink Icon](images/volo/25668.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Bottle Of Ink
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Manuscript Icon](images/volo/25669.png)</span><span class="itemTableIcon2">![Manuscript Icon](images/volo/25669.png)</span><span class="itemTableIcon3">![Manuscript Icon](images/volo/25670.png)</span><span class="itemTableIcon4">![Manuscript Icon](images/volo/25671.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Manuscript
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Weapons Icon](images/volo/25672.png)</span><span class="itemTableIcon2">![Weapons Icon](images/volo/25672.png)</span><span class="itemTableIcon3">![Weapons Icon](images/volo/25673.png)</span><span class="itemTableIcon4">![Weapons Icon](images/volo/25674.png)</span>
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
**Unlock Adventure: The Missing Merchants (???)** (Complete Area 50)
> Discover the fate of some merchants in the jungles of Chult.
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
            ![Volo Console Portrait](images/volo/console.png)Console Portrait
        </span>
    </span>
    <span class="championImagesRow">
        <span class="championImagesChests">
            ![Volo Gold Chest Icon](images/volo/chest_gold.png)Gold Chest Icon
        </span>
        <span class="championImagesChests">
            ![Volo Silver Chest Icon](images/volo/chest_silver.png)Silver Chest Icon
        </span>
    </span>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*