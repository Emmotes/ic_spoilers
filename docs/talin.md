[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Talin](images/talin/portrait.png)
        </span>
        <span>
            Portrait
        </span>
    </span>
</span>

# Talin

Talin Uran is a rogue of great renown within Waterdeep. While on an assignment with the Grambar's Blades a few years ago, he was caught in a building collapse which left him paralysed from the waist down. Now equipped with his combat wheelchair, Talin is back to doing what he does best: Saving the day and looking awesome doing it.

# Changes

Talin will be a reworked champion in the Simril event on 2 December 2026.

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Spot Weakness** (Guess)
> Talin increases the damage of all Champions by 400%. This ability is increased by 400% for each enemy killed in the current area, stacking multiplicatively and capping at 400 kills.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3074,
    "flavour_text": "",
    "description": {
        "pre": "Talin increases the damage of all Champions by $(amount)%. This ability is increased by $(amount_per_stack)% for each enemy killed in the current area, stacking multiplicatively and capping at $(talin_weakness_max_stacks) kills.",
        "post": {
            "conditions": [
                {
                    "condition": "not static_desc",
                    "desc": "^^Current Stacks: $(talin_weakness_current_stacks)^Damage Bonus Amount: $(talin_weakness_total_bonus)%"
                }
            ]
        }
    },
    "effect_keys": [
        {
            "effect_string": "hero_dps_multiplier_Increase,400",
            "off_when_benched": true
        },
        {
            "effect_string": "buff_upgrade,100,21606",
            "off_when_benched": true,
            "stacks_on_trigger": "monster_killed",
            "max_stacks": 25,
            "more_triggers": [
                {
                    "trigger": "area_changed",
                    "action": {
                        "type": "reset_timer"
                    }
                }
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 9551,
    "large_graphic_id": 9548,
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
**Scatter Tacks** (Guess)
> When Talin attacks with Quiet Ambush he leaves behind a set of Scatter Tacks which cause enemies standing on them to be slowed by 50% and take 100% more damage from attacks. Each set of tacks lasts for 100 seconds before disappearing, and the effects stack multiplicatively if an enemy is in multiple sets at the same time.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3075,
    "flavour_text": "",
    "description": {
        "conditions": [
            {
                "condition": "upgrade_purchased 4766",
                "desc": "When Talin attacks with Quiet Ambush he leaves behind a set of Scatter Tacks which cause enemies standing on them to be slowed by 75% and take $(amount)% more damage from attacks. Each set of tacks lasts for $duration seconds before disappearing, and the effects stack multiplicatively if an enemy is in multiple sets at the same time"
            },
            {
                "desc": "When Talin attacks with Quiet Ambush he leaves behind a set of Scatter Tacks which cause enemies standing on them to be slowed by 50% and take $(amount)% more damage from attacks. Each set of tacks lasts for $duration seconds before disappearing, and the effects stack multiplicatively if an enemy is in multiple sets at the same time"
            }
        ]
    },
    "effect_keys": [
        {
            "effect_string": "add_monster_hit_effects,100",
            "off_when_benched": true,
            "amount_expr": "upgrade_amount(21607,0)",
            "optional_attack_ids": [
                353
            ],
            "with_all_buff_effects": true,
            "monster_effect": {
                "effect_string": "ground_effect_area,$amount",
                "area_key": "scatter_tacks",
                "drop_on_hero": true,
                "radius": 100,
                "duration": 30,
                "area_effects": [
                    {
                        "effect_string": "monster_speed_reduce,50"
                    },
                    {
                        "effect_string": "increase_monster_damage,$amount"
                    }
                ],
                "cloud_graphics": [],
                "debris_graphics": [],
                "primary_graphics": [
                    "Effect_Talin_ScatterTackParticle"
                ],
                "density": 5
            }
        }
    ],
    "requirements": "",
    "graphic_id": 9550,
    "large_graphic_id": 9547,
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
**Antagonist** (Guess)
> Talin increases the damage of Good Champions by 100% for each Evil Champion in the formation, and increases the damage of Evil Champions by 100% for each Good Champion in the formation. Both effects stack multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3076,
    "flavour_text": "",
    "description": {
        "desc": "Talin increases the damage of Good Champions by 100% for each Evil Champion in the formation, and increases the damage of Evil Champions by 100% for each Good Champion in the formation. Both effects stack multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,100",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "hero_dps_multiplier_increase,0",
            "off_when_benched": true,
            "amount_expr": "upgrade_amount(21608,0)",
            "amount_func": "mult",
            "targets": [
                "all"
            ],
            "filter_targets": [
                {
                    "type": "hero_expr",
                    "hero_expr": "HasTag(`good`)"
                }
            ],
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasTag(`evil`)",
            "amount_updated_listeners": [
                "hero_tags_changed",
                "slot_changed"
            ],
            "stack_title": "Evil Champions",
            "total_title": "Good Champion Buff",
            "show_bonus": true
        },
        {
            "effect_string": "hero_dps_multiplier_increase,0",
            "off_when_benched": true,
            "amount_expr": "upgrade_amount(21608,0)",
            "amount_func": "mult",
            "targets": [
                "all"
            ],
            "filter_targets": [
                {
                    "type": "hero_expr",
                    "hero_expr": "HasTag(`evil`)"
                }
            ],
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasTag(`good`)",
            "amount_updated_listeners": [
                "hero_tags_changed",
                "slot_changed"
            ],
            "stack_title": "Good Champions",
            "total_title": "Evil Champion Buff",
            "show_bonus": true
        }
    ],
    "requirements": "",
    "graphic_id": 9549,
    "large_graphic_id": 9546,
    "properties": {
        "is_formation_ability": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "is_buff_incoming_formation_abilities_target": false
    }
}
</pre>
</p>
</details>
</div></div>

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Path Finder** (Guess)
> Increases the stack cap and damage buff of Spot Weakness by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3077,
    "flavour_text": "",
    "description": {
        "desc": "Increases the stack cap and damage buff of Spot Weakness by $(amount)%."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,100,21606",
            "off_when_benched": true
        },
        {
            "effect_string": "buff_upgrade_max_stacks_mult,100,21606"
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
**Specialisation: Additional Scatter Tacks** (Guess)
> Increase the slow effect, radius, and damage of Scatter Tacks by 50% (multiplicatively).
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3078,
    "flavour_text": "",
    "description": {
        "desc": "Increase the slow effect, radius, and damage of Scatter Tacks by $(amount)% (multiplicatively)."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,50,4763"
        },
        {
            "effect_string": "buff_ground_effect_property,50,radius,4763"
        },
        {
            "effect_string": "buff_ground_effect_property,50,area_effects[0].amount,4763"
        },
        {
            "effect_string": "buff_ground_effect_property,200,density,4763"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "indexed_effect_properties": true
    }
}
</pre>
</p>
</details>
</div></div>

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unlock Adventure: Deadwinter Day (Talin)** (Complete Area 50)
> Patrol the outskirts of Longsaddle on Deadwinter Day.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Fiendish Friends Icon](images/talin/9556.png) **Variant 1: Fiendish Friends** (Complete Area 75)
> A collection of fiends spawn in each area. While they are alive, the fiends bestow the following buffs to other enemies. - Imp: Enemies drop 99% less gold. - Dretch: Enemies deal 100% additional damage. - Abyssal Chicken: Enemies move 100% faster. Charge!
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Once Upon a Gazer Icon](images/talin/9557.png) **Variant 2: Once Upon a Gazer** (Complete Area 125)
> Only Champions with WIS 13 or higher can be used. Gazers spawn in each area. They do not drop gold, nor do they count towards quest progress. Champions hit by a gazer are stunned for 3 seconds.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Deadwinter Dodge Icon](images/talin/9558.png) **Variant 3: Deadwinter Dodge** (Complete Area 175)
> Talin starts in the formation and can't be moved or removed Only Champions with DEX 14 or higher AND INT 12 or higher can be used.
</div></div>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Talin" fill="#aaa" data-formationName="Talin" data-campaignName="Simril" width="268" height="160"><circle cx="175" cy="65" r="15"/><circle cx="175" cy="105" r="15"/><circle cx="135" cy="45" r="15"/><circle cx="135" cy="125" r="15"/><circle cx="95" cy="25" r="15"/><circle cx="95" cy="145" r="15"/><circle cx="55" cy="45" r="15"/><circle cx="55" cy="125" r="15"/><circle cx="15" cy="65" r="15"/><circle cx="15" cy="105" r="15"/><text x="205" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Talin</text><text x="205" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Simril</text></svg>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*