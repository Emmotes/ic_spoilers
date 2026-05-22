[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Walnut](images/walnut/portrait.png)
        </span>
        <span>
            Portrait
        </span>
    </span>
</span>

# Walnut

Walnut is a child of the Enclave Panax Anima, an all-female clan of woodland defenders within the Kryptgarden Forest. Not only a frighteningly enthusiastic member of Acquisitions Incorporated, she also strives to protect the natural world by any means necessary. Did we mention she also has the goddess Mielikki living inside her? That seems important.

# Changes

Walnut will be a reworked champion in the Founders' Day event on 1 July 2026.

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Documancer** (Guess)
> Increases the damage of adjacent champions by 10% for each enemy killed in this area. Stacks are reduced by 50% when changing areas, rounding down.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2756,
    "flavour_text": "",
    "description": {
        "conditions": [
            {
                "condition": "upgrade_purchased 2393",
                "desc": "Increases the damage of all Champions by $(amount)% for each enemy killed in this area. Stacks are reduced by 50% when changing areas, rounding down."
            },
            {
                "condition": "upgrade_purchased 2392",
                "desc": "Increases the damage of adjacent champions and champions in the top or bottom of their column by $(amount)% for each enemy killed in this area. Stacks are reduced by 50% when changing areas, rounding down."
            },
            {
                "condition": "upgrade_purchased 2391",
                "desc": "Increases the damage of champions up to two slots away by $(amount)% for each enemy killed in this area. Stacks are reduced by 50% when changing areas, rounding down."
            },
            {
                "desc": "Increases the damage of adjacent champions by $(amount)% for each enemy killed in this area. Stacks are reduced by 50% when changing areas, rounding down."
            }
        ]
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,10",
            "off_when_benched": true,
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "hero_dps_multiplier_mult,0",
            "amount_expr": "upgrade_amount(19707,0)",
            "stacks_on_trigger": "monster_killed",
            "more_triggers": [
                {
                    "trigger": "area_changed",
                    "action": {
                        "type": "reduce_percent_down",
                        "percent": 50
                    }
                }
            ],
            "max_stacks": 50,
            "show_bonus": true,
            "show_stats_on_owner": true,
            "stacks_multiply": true,
            "targets": [
                "adj"
            ],
            "off_when_benched": true
        }
    ],
    "requirements": [],
    "graphic_id": 5819,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 1
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Job's Done** (Guess)
> Adds a 1000% bonus to $(upgrade_name id) for 60 seconds when completing a quest or entering a completed area. Killing enemies in completed areas resets the duration to 60 seconds.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2757,
    "flavour_text": "",
    "description": {
        "desc": "Adds a $amount% bonus to $(upgrade_name id) for $(duration) seconds when completing a quest or entering a completed area. Killing enemies in completed areas resets the duration to $duration seconds.",
        "post": {
            "conditions": [
                {
                    "condition": "not static_desc",
                    "desc": "",
                    "post": "^^$walnut_job_done_timer"
                }
            ]
        }
    },
    "effect_keys": [
        {
            "effect_string": "walnut_jobs_done,1000,19707,60"
        }
    ],
    "requirements": [],
    "graphic_id": 5820,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Wolfnut** (Guess)
> Walnut uses Wild Shape to turn into a wolf whenever they are under attack, gaining $(round amount) temporary hit points for each enemy on-screen at the time of the transformation.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2758,
    "flavour_text": "",
    "description": {
        "desc": "$target uses Wild Shape to turn into a wolf whenever they are under attack, gaining $(round amount) temporary hit points for each enemy on-screen at the time of the transformation."
    },
    "effect_keys": [
        {
            "effect_string": "wolfnut,50,215,5784",
            "penpaws_id": 19711,
            "penpaws_inc": 2,
            "penpaws_dec": 4
        }
    ],
    "requirements": [],
    "graphic_id": 5822,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Contractual Obligations** (Guess)
> Increases the Health of all other Champions by 12.5% of Walnut's maximum health. This effect is doubled when in wolf form.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2759,
    "flavour_text": "",
    "description": {
        "desc": "Increases the Health of all other Champions by $(amount)% of $source's maximum health. This effect is doubled when in wolf form."
    },
    "effect_keys": [
        {
            "effect_string": "increase_health_by_source_percent,12.5",
            "targets": [
                "other"
            ],
            "off_when_benched": true
        }
    ],
    "requirements": [],
    "graphic_id": 5818,
    "large_graphic_id": 0,
    "properties": {
        "is_buff_incoming_formation_abilities_target": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Pen-Paws** (Guess)
> Increases the effect of $(upgrade_name id) by 200% for every 2 seconds that Walnut is in wolf form. The buff decreases every 4 seconds while Walnut is not in wolf form.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2760,
    "flavour_text": "",
    "description": {
        "desc": "Increases the effect of $(upgrade_name id) by $amount% for every 2 seconds that $source is in wolf form. The buff decreases every 4 seconds while $source is not in wolf form."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,200,19707",
            "stacks_on_trigger": "will_manually_stack",
            "show_bonus": true,
            "stacks_multiply": true,
            "max_stacks": 50
        }
    ],
    "requirements": [],
    "graphic_id": 5821,
    "large_graphic_id": 0,
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
**Specialisation: Extended Warranty** (Guess)
> $(upgrade_name id) now also applies to all Champions within 2 slots of Walnut and is buffed by %.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2761,
    "flavour_text": "",
    "description": {
        "desc": "$(upgrade_name id) now also applies to all Champions within 2 slots of $source and is buffed by $amount%."
    },
    "effect_keys": [
        {
            "effect_string": "add_target_to_upgrade,,19707",
            "add_targets": [
                {
                    "type": "distance",
                    "distance": 2,
                    "comparison": "=="
                }
            ],
            "optional_effect_index": 0
        },
        {
            "effect_string": "buff_upgrade,100,19707",
            "off_when_benched": true
        }
    ],
    "requirements": [],
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Sign and Date** (Guess)
> $(upgrade_name id) now also applies to all Champions in the top or bottom slots of each column and is buffed by %.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2762,
    "flavour_text": "",
    "description": {
        "desc": "$(upgrade_name id) now also applies to all Champions in the top or bottom slots of each column and is buffed by $amount%."
    },
    "effect_keys": [
        {
            "effect_string": "add_target_to_upgrade,,19707",
            "add_targets": [
                {
                    "type": "col_top"
                },
                {
                    "type": "col_bottom"
                }
            ],
            "optional_effect_index": 0
        },
        {
            "effect_string": "buff_upgrade,200,19707",
            "off_when_benched": true
        }
    ],
    "requirements": [],
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Ah, Screw It** (Guess)
> $(upgrade_name id) now applies to all Champions but is not buffed.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2763,
    "flavour_text": "",
    "description": {
        "desc": "$(upgrade_name id) now applies to all Champions but is not buffed."
    },
    "effect_keys": [
        {
            "effect_string": "add_target_to_upgrade,all,19707",
            "off_when_benched": true,
            "optional_effect_index": 0
        }
    ],
    "requirements": [],
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Co-Signers** (Guess)
> The effect of Documancer is increased separately on each Champion by 1000% for each of the following "C" Team abilities affecting them, stacking multiplicatively:  
> K'Thriss' Unseen Encouragement  
> Donaar's Lead By Example  
> Rosie's Deflect Missiles.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2764,
    "flavour_text": "",
    "description": {
        "desc": "The effect of Documancer is increased separately on each Champion by $amount% for each of the following \"C\" Team abilities affecting them, stacking multiplicatively:^K'Thriss' Unseen Encouragement^Donaar's Lead By Example^Rosie's Deflect Missiles."
    },
    "effect_keys": [
        {
            "effect_string": "walnut_cosigners,1000,19707,17324,18654,15605"
        }
    ],
    "requirements": [],
    "graphic_id": 5819,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Temporary Alliance** (Guess)
> Increases the effect of Documancer by 100% for each Champion with an affiliation other than the "C" Team, stacking multiplicatively. Unaffiliated champions do not count.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2765,
    "flavour_text": "",
    "description": {
        "desc": "Increases the effect of Documancer by $amount% for each Champion with an affiliation other than the \"C\" Team, stacking multiplicatively. Unaffiliated champions do not count."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,100,19707",
            "off_when_benched": true,
            "show_bonus": true,
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "!HasTag(`cteam`) && !HasTag(`Unaffiliated`)",
            "amount_updated_listeners": [
                "slot_changed",
                "hero_tags_changed"
            ]
        }
    ],
    "requirements": [],
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "use_outgoing_description": true,
        "spec_option_post_apply_info": "Champions in Formation Targeted: $num_stacks"
    }
}
</pre>
</p>
</details>
</div></div>

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unlock Adventure: Party Crashers (Walnut)** (Complete Area 50)
> Save Waterdeep from the chaos of a Founders' Day gone awry.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Rain of Fire Icon](images/walnut/5801.png) **Variant 1: Rain of Fire** (Complete Area 75)
> A rain of fire falls from the sky, dealing damage to a random Champion. The frequency of the fireballs increase as your area gets higher.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Close Quarters Combat Icon](images/walnut/5802.png) **Variant 2: Close Quarters Combat** (Complete Area 125)
> Only Champions that attack with a melee base attack by default can be used.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Aww, Hells Nuts Icon](images/walnut/5803.png) **Variant 3: Aww, Hells Nuts** (Complete Area 175)
> Walnut starts out in the formation and can not be moved, removed, or swapped out. All enemies gain additional health and damage in each area. Demonic squirrel enemies spawn at random. When killed, they drop a Hell-Nut which increases the effect of Documancer by 1%, stacking additively.
</div></div>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Walnut" fill="#aaa" data-formationName="Walnut" data-campaignName="Founders' Day" width="272" height="160"><circle cx="135" cy="45" r="15"/><circle cx="135" cy="85" r="15"/><circle cx="95" cy="65" r="15"/><circle cx="95" cy="105" r="15"/><circle cx="55" cy="45" r="15"/><circle cx="55" cy="85" r="15"/><circle cx="15" cy="25" r="15"/><circle cx="15" cy="65" r="15"/><circle cx="15" cy="105" r="15"/><circle cx="15" cy="145" r="15"/><text x="165" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Walnut</text><text x="165" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Founders' Day</text></svg>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*