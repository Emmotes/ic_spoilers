[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Turiel](images/turiel/portrait.png)
        </span>
        <span>
            Portrait
        </span>
    </span>
</span>

# Turiel

Wherever the aasimar known as Turiel goes, devils and demons know to tread lightly. Acting on orders of his divine patron, Bahamut, Turiel works tirelessly to bring law, order, and justice to Toril. When not busy with inquisitions or crusades, Turiel calls the endless libraries of Candlekeep his home, studying ancient tomes and seeking guidance for his next holy mission.

# Changes

Turiel will be a reworked champion in the Feast of the Moon event on 4 November 2026.

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Embodiment of the Law** (Guess)
> Turiel increases the damage of all Champions by 100% for each column they are behind him, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3014,
    "flavour_text": "",
    "description": {
        "desc": "Turiel increases the damage of all Champions by $amount% for each column they are behind him, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack_amount,100"
        },
        {
            "effect_string": "hero_dps_mult_per_col_behind,0",
            "amount_expr": "upgrade_amount(21265,0)",
            "targets": [
                "behind"
            ],
            "off_when_benched": true,
            "use_computed_amount_for_description": true
        }
    ],
    "requirements": [],
    "graphic_id": 6274,
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
**Order's Demand** (Guess)
> When an enemy attempts to attack Turiel, they instead attack a different valid target, if one is available. When this occurs, Turiel increases the effect of Embodiment of the Law by 30%, stacking multiplicatively up to 30 times and reducing the stacks by half (rounded down) when changing areas.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3015,
    "flavour_text": "",
    "description": {
        "desc": "When an enemy attempts to attack Turiel, they instead attack a different valid target, if one is available. When this occurs, Turiel increases the effect of Embodiment of the Law by $(not_buffed amount)%, stacking multiplicatively up to 30 times and reducing the stacks by half (rounded down) when changing areas."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,30,21265,1",
            "off_when_benched": true,
            "stacks_on_trigger": "will_stack_manually",
            "max_stacks": 30,
            "stacks_multiply": true,
            "show_bonus": true
        },
        {
            "effect_string": "buff_upgrade,30,21265,2",
            "off_when_benched": true,
            "stacks_on_trigger": "will_stack_manually",
            "max_stacks": 30,
            "stacks_multiply": true,
            "show_bonus": false
        },
        {
            "effect_string": "orders_demand_v2",
            "off_when_benched": true,
            "is_reworked_effect": true,
            "embodiment_buff_effect_key_index": 0,
            "overlay_lower_id": 6236,
            "overlay_upper_id": 6235,
            "overlay_offset": -80
        }
    ],
    "requirements": [],
    "graphic_id": 6275,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "use_outgoing_description": true,
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
**Unflinching Hatred** (Guess)
> Fiends are Turiel's Favored Foe. After attacking a fiend-type enemy, Embodiment of the Law is increased by 400%. When Order's Demand redirects the attack of a fiend-type enemy, its effect is increased by 400% as well. Both effects last until you change areas.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3016,
    "flavour_text": "",
    "description": {
        "pre": "Fiends are Turiel's Favored Foe. After attacking a fiend-type enemy, Embodiment of the Law is increased by $amount%. When Order's Demand redirects the attack of a fiend-type enemy, its effect is increased by $amount% as well. Both effects last until you change areas.",
        "post": {
            "conditions": [
                {
                    "condition": "not static_desc",
                    "desc": "^^$(unflinching_hatred_v2_desc)"
                }
            ]
        }
    },
    "effect_keys": [
        {
            "effect_string": "unflinching_hatred_v2,400",
            "off_when_benched": true,
            "embodiment_buff_key_index": 1,
            "orders_demand_buff_key_index": 2,
            "tag": "fiend"
        },
        {
            "effect_string": "buff_upgrade,0,21265,1",
            "off_when_benched": true,
            "amount_expr": "upgrade_amount(21267,0)",
            "apply_manually": true
        },
        {
            "effect_string": "buff_upgrade,0,21266",
            "off_when_benched": true,
            "amount_expr": "upgrade_amount(21267,0)",
            "apply_manually": true
        },
        {
            "effect_string": "favored_foe,fiend",
            "off_when_benched": true,
            "apply_manually": true
        }
    ],
    "requirements": [],
    "graphic_id": 6276,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "use_outgoing_description": true,
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
**Lawful Mission** (Guess)
> Increases the effect of Embodiment of the Law by 200% for each Lawful Champion in the formation.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3017,
    "flavour_text": "",
    "description": {
        "desc": "Increases the effect of Embodiment of the Law by $(amount)% for each Lawful Champion in the formation"
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack_amount,200",
            "off_when_benched": true
        },
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade_per_any_tagged_crusader_mult,0,21265,lawful",
            "optional_effect_index": 1,
            "amount_expr": "upgrade_amount(21268,0)",
            "stacks_multiply": true
        }
    ],
    "requirements": [],
    "graphic_id": 6274,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "use_outgoing_description": true,
        "show_incoming": false,
        "use_outgoing_multiplier": false,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 1,
        "spec_option_post_apply_info": "Champions in Formation Targeted: $num_stacks"
    }
}
</pre>
</p>
</details>
</div></div>

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unlock Adventure: Brightly into Darkness (Turiel)** (Complete Area 50)
> Help the Harpells track down a lost artifact.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Iron Stomach Icon](images/turiel/6261.png) **Variant 1: Iron Stomach** (Complete Area 75)
> Only Champions with a CON score of 14 or higher can be used.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Army of Bahamut Icon](images/turiel/6262.png) **Variant 2: Army of Bahamut** (Complete Area 125)
> Turiel starts out in slot 1 and can't be moved or replaced. Only Lawful and/or Good Champions can be used.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![DPS's Day Off Icon](images/turiel/6263.png) **Variant 3: DPS's Day Off** (Complete Area 175)
> No Champions with the DPS role can be used.
</div></div>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Turiel" fill="#aaa" data-formationName="Turiel" data-campaignName="Feast of the Moon" width="338" height="120"><circle cx="175" cy="25" r="15"/><circle cx="175" cy="65" r="15"/><circle cx="135" cy="45" r="15"/><circle cx="95" cy="25" r="15"/><circle cx="95" cy="65" r="15"/><circle cx="55" cy="45" r="15"/><circle cx="55" cy="85" r="15"/><circle cx="15" cy="25" r="15"/><circle cx="15" cy="65" r="15"/><circle cx="15" cy="105" r="15"/><text x="205" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Turiel</text><text x="205" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Feast of the Moon</text></svg>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*