[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Melf](images/melf/portrait.png)
        </span>
        <span>
            Portrait
        </span>
    </span>
</span>

# Melf

Born into the royal family of Celene, he assumed the simple name of Melf eschewing a life of comfort as a noble to study the arcane arts and train as a swordsman. He delved in the dungeons of Castle Greyhawk, the Lost Caverns of Tsojcanth and many other harrowing places honing his skills, knowledge and amassing powerful magical items. Melf sees himself as a weapon of weal hurtling toward the heart of the darkest evils in the realm. He is opinionated and has a touch of conceit that he is blissfully ignorant of possessing.

# Changes

Melf will be a reworked champion in the The Great Modron March event and delayed until 13 May 2026.

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Melf's Custom Support spell** (Guess)
> Melf creates a custom spell to assist the formation. It increases the damage of adjacent Champions by 100%, and will be augmented based on the specialization you pick for Melf.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2682,
    "flavour_text": "",
    "description": {
        "desc": "Melf creates a custom spell to assist the formation. It increases the damage of adjacent Champions by $amount%, and will be augmented based on the specialization you pick for Melf."
    },
    "effect_keys": [
        {
            "effect_string": "hero_dps_multiplier_mult,100",
            "targets": [
                "adj"
            ]
        }
    ],
    "requirements": [],
    "graphic_id": 28902,
    "large_graphic_id": 28900,
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
**Melf in the Middle** (Guess)
> Melf increases the range of Melf's Custom Support Spell by 2 and the effect of Melf's Custom Support Spell by 100% if Melf is in the column in the formation with the most Champions. In the event of a formation with multiple columns of the same size, Melf can be in any of them.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2683,
    "flavour_text": "",
    "description": {
        "desc": "Melf increases the range of Melf's Custom Support Spell by 2 and the effect of Melf's Custom Support Spell by $amount% if Melf is in the column in the formation with the most Champions. In the event of a formation with multiple columns of the same size, Melf can be in any of them."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,100,19336"
        },
        {
            "effect_string": "change_upgrade_targets,19336",
            "new_targets": {
                "type": "distance",
                "distance": 3
            },
            "effect_index": 0
        }
    ],
    "requirements": [],
    "graphic_id": 28901,
    "large_graphic_id": 28899,
    "properties": {
        "is_formation_ability": false,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "show_incoming": false,
        "default_bonus_index": 0
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Melf's Righteous Determination** (Guess)
> Melf knows exactly what evil is. Whenever an enemy spawns, or is attacked by Melf, it has a 50% chance of being deemed "evil".  Enemies that are deemed evil take 400% more damage from all attacks that deal BUD-based damage (such as Ultimate Attacks).
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2696,
    "flavour_text": "",
    "description": {
        "desc": "Melf knows exactly what evil is. Whenever an enemy spawns, or is attacked by Melf, it has a 50% chance of being deemed \"evil\".  Enemies that are deemed evil take 400% more damage from all attacks that deal BUD-based damage (such as Ultimate Attacks)."
    },
    "effect_keys": [
        {
            "effect_string": "melf_righteous_determination,400",
            "non_evil_invulnerable_adventures": [
                486
            ],
            "all_vulnerable_marked": true,
            "reworked": true,
            "debuff_effect_id": 2697
        }
    ],
    "requirements": [],
    "graphic_id": 7475,
    "large_graphic_id": 7470,
    "properties": {
        "is_formation_ability": true,
        "use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Melf's Abundant Allies** (Guess)
> Unknown.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 28903,
    "graphic": "Icons/Champions/Rebalance/Melf/Icon_Specialization_Melf_MelfsAbundantAllies",
    "v": 2,
    "fs": 0,
    "p": 0,
    "type": 1,
    "export_params": {
        "uses": [
            "specialization_icon"
        ],
        "quantize": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Melf's Adaptive Attacks** (Guess)
> Unknown.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 28904,
    "graphic": "Icons/Champions/Rebalance/Melf/Icon_Specialization_Melf_MelfsAdaptiveAttacks",
    "v": 2,
    "fs": 0,
    "p": 0,
    "type": 1,
    "export_params": {
        "uses": [
            "specialization_icon"
        ],
        "quantize": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Melf's Amorphous Alignment** (Guess)
> Unknown.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 28905,
    "graphic": "Icons/Champions/Rebalance/Melf/Icon_Specialization_Melf_MelfsAmorphousAlignment",
    "v": 2,
    "fs": 0,
    "p": 0,
    "type": 1,
    "export_params": {
        "uses": [
            "specialization_icon"
        ],
        "quantize": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Melf's Doubled Drops** (Guess)
> Unknown.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 28906,
    "graphic": "Icons/Champions/Rebalance/Melf/Icon_Specialization_Melf_MelfsDoubledDrops",
    "v": 2,
    "fs": 0,
    "p": 0,
    "type": 1,
    "export_params": {
        "uses": [
            "specialization_icon"
        ],
        "quantize": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Melf's Frequent Foes** (Guess)
> Unknown.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 28907,
    "graphic": "Icons/Champions/Rebalance/Melf/Icon_Specialization_Melf_MelfsFrequentFoes",
    "v": 2,
    "fs": 0,
    "p": 0,
    "type": 1,
    "export_params": {
        "uses": [
            "specialization_icon"
        ],
        "quantize": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Melf's Ranked Roles** (Guess)
> Unknown.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 28908,
    "graphic": "Icons/Champions/Rebalance/Melf/Icon_Specialization_Melf_MelfsRankedRoles",
    "v": 2,
    "fs": 0,
    "p": 0,
    "type": 1,
    "export_params": {
        "uses": [
            "specialization_icon"
        ],
        "quantize": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Melf's Speedy Spawns** (Guess)
> Unknown.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 28909,
    "graphic": "Icons/Champions/Rebalance/Melf/Icon_Specialization_Melf_MelfsSpeedySpawns",
    "v": 2,
    "fs": 0,
    "p": 0,
    "type": 1,
    "export_params": {
        "uses": [
            "specialization_icon"
        ],
        "quantize": true
    }
}
</pre>
</p>
</details>
</div></div>

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unlock Adventure: The Endless War (Melf)** (Complete Area 50)
> Defend Triboar from a Githyanki invasion.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Honorable Discharge Icon](images/melf/7461.png) **Variant 1: Honorable Discharge** (Complete Area 75)
> Each Champion can only be used to beat 50 unique areas A Champion counts as being "used" in an area if they're in the formation at any time during the attempt that beats an area for the first time After a Champion has been used while beating 50 unique areas, they can not be used in the formation anymore
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![The Problem Solvers Icon](images/melf/7462.png) **Variant 2: The Problem Solvers** (Complete Area 125)
> Only Champions with Intelligence of 13 or higher can be used
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Wheat From The Chaff Icon](images/melf/7463.png) **Variant 3: Wheat From The Chaff** (Complete Area 175)
> Melf starts out in the formation with Melf's Righteous Determination unlocked. Melf can not be removed from the formation or swapped out. Only enemies Melf deems to be Evil can be damaged.
</div></div>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Melf" fill="#aaa" data-formationName="Melf" data-campaignName="The Great Modron March" width="389" height="160"><circle cx="175" cy="85" r="15"/><circle cx="135" cy="65" r="15"/><circle cx="135" cy="105" r="15"/><circle cx="95" cy="85" r="15"/><circle cx="95" cy="125" r="15"/><circle cx="55" cy="25" r="15"/><circle cx="55" cy="105" r="15"/><circle cx="55" cy="145" r="15"/><circle cx="15" cy="45" r="15"/><circle cx="15" cy="85" r="15"/><text x="205" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Melf</text><text x="205" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">The Great Modron March</text></svg>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*