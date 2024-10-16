[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Stoki](images/stoki/portrait.png)
        </span>
        <span>
        Portrait
        </span>
    </span>
</span>

# Stoki

Born Stami Gackle, she fled her home after a terrible accident at a young age and joined a monastery of the Even-Handed to study ki. An adept monk and extremely capable adventurer, her thoughtful approach to problems has earned her a reputation as an uncommonly stoic Rock Gnome.

# Changes

Stoki will be a reworked champion in the Simril event on 4 December 2024.

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Frenzied Friends** (Guess)
> When Stoki attacks she gains a Focus Point for each enemy she hits. She increases the damage of all Champions with a base attack cooldown of 4.0s or faster by 10% for each Focus Point she has, stacking multiplicatively. Focus Points cap at 100 and are reduced by 50% (rounded down) when changing areas.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2147,
    "flavour_text": "",
    "description": {
        "desc": "When Stoki attacks she gains a Focus Point for each enemy she hits. She increases the damage of all Champions with a base attack cooldown of 4.0s or faster by $amount% for each Focus Point she has, stacking multiplicatively. Focus Points cap at 100 and are reduced by 50% (rounded down) when changing areas."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,10",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "hero_dps_multiplier_mult,0",
            "amount_expr": "upgrade_amount(16052,0)",
            "targets": [
                "all"
            ],
            "filter_targets": [
                {
                    "type": "hero_expr",
                    "hero_expr": "base_attack_cooldown<=4"
                }
            ],
            "stacks_multiply": true,
            "stack_func": "mult",
            "show_bonus": true,
            "max_stacks": 100,
            "stacks_on_trigger": "owner_attack",
            "more_triggers": [
                {
                    "trigger": "area_changed",
                    "action": {
                        "type": "reduce_percent",
                        "percent": 50
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
**Golden Palm** (Guess)
> Enemies that have been attacked by Stoki at any point in the current area drop 100% more gold when killed for each Focus Point she has, stacking additively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2148,
    "flavour_text": "",
    "description": {
        "desc": "Enemies that have been attacked by Stoki at any point in the current area drop 100% more gold when killed for each Focus Point she has, stacking additively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,100",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "gold_buff_amount,0",
            "targets": [
                "all"
            ],
            "off_when_benched": true,
            "amount_expr": "upgrade_stacks(16052,1)*upgrade_amount(16053,0)",
            "amount_updated_listeners": [
                "stacks_changed"
            ],
            "changing_stack_upgade_ids": [
                16052
            ],
            "stacks_multiply": true,
            "show_bonus": true
        },
        {
            "effect_string": "stoki_golden_palm",
            "off_when_benched": true,
            "broadcast_name": "stoki_debuffs_monster",
            "debuff_before_damage": true,
            "debuff_max_stacks": 1,
            "debuffing_attack_ids": [
                42
            ],
            "debuff_effects": [
                {
                    "effect_string": "increase_monster_gold,0",
                    "amount_expr": "upgrade_amount(16053,1)",
                    "is_minthara_debuff": true,
                    "active_graphic_id": 25075,
                    "active_graphic_y": -30,
                    "overlay_play_mode": "stopped",
                    "bottom": true,
                    "stacks_on_reapply": false,
                    "manual_stacking": true,
                    "max_stacks": 1,
                    "use_collection_source": false,
                    "stack_across_effects": false
                }
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
**Unknown** (Guess)
> Stoki keeps track of the total Focus Points she has gained in the current adventure. If Stoki's Focus Points are capped for a given area, she still counts new ones towards this ability. Upon reaching certain milestones, the following effects activate:.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2149,
    "flavour_text": "",
    "description": {
        "desc": "Stoki keeps track of the total Focus Points she has gained in the current adventure. If Stoki's Focus Points are capped for a given area, she still counts new ones towards this ability. Upon reaching certain milestones, the following effects activate:"
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
**Unknown** (Guess)
> Additively increase the Focus Points cap of Focused Strike by 10 for each Champion in the formation whose base attack cooldown is 4.0s or lower.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2150,
    "flavour_text": "",
    "description": {
        "desc": "Additively increase the Focus Points cap of Focused Strike by 10 for each Champion in the formation whose base attack cooldown is 4.0s or lower."
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
**Unknown** (Guess)
> Stoki tracks the number of attacks her allies have performed in the past 10 seconds and increases the effect of Focused Strike by 15% for each one, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2151,
    "flavour_text": "",
    "description": {
        "desc": "Stoki tracks the number of attacks her allies have performed in the past 10 seconds and increases the effect of Focused Strike by 15% for each one, stacking multiplicatively."
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
**Unknown** (Guess)
> Stoki counts the number of Champions in the formation with a DEX score of 16 or higher. For each such Champion, her base attack cooldown is decreased by 0.1 seconds, stacking additively, and the effect of Focused Strike is increased by 100%, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2152,
    "flavour_text": "",
    "description": {
        "desc": "Stoki counts the number of Champions in the formation with a DEX score of 16 or higher. For each such Champion, her base attack cooldown is decreased by 0.1 seconds, stacking additively, and the effect of Focused Strike is increased by 100%, stacking multiplicatively."
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
**Unknown** (Guess)
> Stoki reduces the base attack cooldown of all Champions with a default base attack cooldown of 6.0 seconds or higher to 4.0 seconds so that they qualify for Frenzied Friends. Their damage is increased by 100% for 0.1s their base attack cooldown is reduced by this ability, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2153,
    "flavour_text": "",
    "description": {
        "desc": "Stoki reduces the base attack cooldown of all Champions with a default base attack cooldown of 6.0 seconds or higher to 4.0 seconds so that they qualify for Frenzied Friends. Their damage is increased by 100% for 0.1s their base attack cooldown is reduced by this ability, stacking multiplicatively."
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

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unlock Adventure: The Bandit's Harvest (Stoki)** (Complete Area 50)
> Bandits are attempting to pilfer the harvest during Highharvestide and must be stopped.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![The Farmer's Kids Icon](images/stoki/1094.png) **Variant 1: The Farmer's Kids** (Complete Area 75)
> The Farmer's Daughter and Son take up two slots in the formation
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Due Diligence Icon](images/stoki/1095.png) **Variant 2: Due Diligence** (Complete Area 125)
> Quest requirements are doubled
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Wanton Necromancy Icon](images/stoki/1096.png) **Variant 3: Wanton Necromancy** (Complete Area 175)
> Undead enemies randomly spawn alongside normal monster waves These extra monsters do not drop gold
</div></div>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Stoki" fill="#aaa" data-formationName="Stoki" data-campaignName="Highharvestide" width="279" height="120"><circle cx="135" cy="45" r="15"/><circle cx="135" cy="85" r="15"/><circle cx="95" cy="25" r="15"/><circle cx="95" cy="65" r="15"/><circle cx="95" cy="105" r="15"/><circle cx="55" cy="45" r="15"/><circle cx="55" cy="85" r="15"/><circle cx="15" cy="25" r="15"/><circle cx="15" cy="65" r="15"/><circle cx="15" cy="105" r="15"/><text x="165" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Stoki</text><text x="165" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Highharvestide</text></svg>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*