[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Gazrick](images/gazrick/portrait.png)
        </span>
        <span>
            Portrait
        </span>
    </span>
</span>

# Gazrick

Gazrick Nomrad is just your standard gnome druid/businessman/detective/chef/socialist construct. Harnessing the magic of all things cold, he brings a wealth of frost-based spells to the table, as well as insisting his actions are not weird. They are.

# Changes

Gazrick will be a reworked champion in the Wintershield event on 6 January 2027.

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Frosty Friendship** (Guess)
> Gazrick increases the damage of all Champions in a snowflake shape (his column and in the 2 diagonal lines intersecting his formation slot) by 100%. This effect is increased by 100% for each Champion affected by this ability, stacking multiplicatively, and for each Champion affected by this ability the effect on them is increased by 400% for each slot away from Gazrick they are, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3108,
    "flavour_text": "",
    "description": {
        "desc": "$(source_hero) increases the damage of all Champions in a snowflake shape (his column and in the 2 diagonal lines intersecting his formation slot) by $amount%. This effect is increased by $amount% for each Champion affected by this ability, stacking multiplicatively, and for each Champion affected by this ability the effect on them is increased by $amount___2% for each slot away from Gazrick they are, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "pre_stack,100"
        },
        {
            "off_when_benched": true,
            "effect_string": "pre_stack,400"
        },
        {
            "off_when_benched": true,
            "effect_string": "hero_dps_multiplier_mult,0",
            "targets": [
                "snowflake"
            ],
            "formation_arrows_for_effected_only": true,
            "show_bonus": true,
            "amount_expr": "upgrade_amount(21671,0)",
            "stacks_multiply": true,
            "amount_func": "mult",
            "use_computed_amount_for_description": true,
            "include_hero_specific_multipliers_for_bonus": false,
            "stack_func": "per_upgrade_targets",
            "stack_func_data": {
                "upgrade_id": 21671,
                "upgrade_index": 2,
                "only_slots_with_heroes": true
            },
            "amount_updated_listeners": [
                "slot_changed"
            ]
        },
        {
            "off_when_benched": true,
            "effect_string": "do_nothing,0",
            "active_graphic_id": 13585,
            "active_graphic_sort": "bottom"
        },
        {
            "effect_string": "buff_upgrade_mult_by_distance_from_source_mult,100,21671",
            "amount_expr": "upgrade_amount(21671,1)",
            "off_when_benched": true,
            "targets": [
                "snowflake"
            ],
            "filter_targets": [
                {
                    "type": "affected_by_upgrade",
                    "upgrade_id": 21671,
                    "except_heroes": [
                        131,
                        98
                    ]
                }
            ],
            "show_bonus": false,
            "skip_effect_key_desc": true
        }
    ],
    "requirements": "",
    "graphic_id": 13610,
    "large_graphic_id": 13606,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": false,
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
**Travelling Merchant** (Guess)
> Gazrick now travels with a portable stall to sell his merch. Increase the formation's Gold Find bonus and the effect of Frosty Friendship by 100% for each Rivals of Waterdeep member or Champion with the Gold Find role in the formation, including himself, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3109,
    "flavour_text": "",
    "description": {
        "desc": "Gazrick now travels with a portable stall to sell his merch. Increase the formation's Gold Find bonus and the effect of Frosty Friendship by $(not_buffed amount)% for each Rivals of Waterdeep member or Champion with the Gold Find role in the formation, including himself, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "gold_multiplier_mult,100",
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasTag(`rivalswaterdeep`) || HasTag(`gold`)",
            "show_bonus": true,
            "amount_updated_listeners": [
                "slot_changed",
                "hero_tags_changed"
            ]
        },
        {
            "off_when_benched": true,
            "effect_string": "companion_override",
            "is_visible": true
        }
    ],
    "requirements": "",
    "graphic_id": 13611,
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
**Armor Ablation** (Guess)
> Gazrick's attacks lower the damage threshold necessary to remove a health segment from armored enemies by 50%. This effect stacks up to 30 times.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3110,
    "flavour_text": "",
    "description": {
        "desc": "$(source_hero)'s attacks lower the damage threshold necessary to remove a health segment from armored enemies by $(amount___2)%. This effect stacks up to $max_ablation_stacks times."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "gazrick_armor_ablation_v2",
            "max_ablation_stacks": 30
        },
        {
            "off_when_benched": true,
            "effect_string": "gazrick_ablation_amount_v2,50"
        }
    ],
    "requirements": "",
    "graphic_id": 13608,
    "large_graphic_id": 13604,
    "properties": {
        "is_formation_ability": true,
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
**Control Weather** (Guess)
> Gazrick causes enemies to take an additional 200% damage in areas where it is snowing. This effect is increased by 3.33% for each area completed in the current adventure, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3111,
    "flavour_text": "",
    "description": {
        "desc": "$(source_hero) causes enemies to take an additional $(not_buffed amount)% damage in areas where it is snowing. This effect is increased by $amount___2% for each area completed in the current adventure, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "do_nothing,200",
            "show_bonus": true,
            "desc_forced_order": 2
        },
        {
            "effect_string": "buff_upgrade,3.33,21674,0",
            "stack_func": "per_hero_attribute",
            "post_process_expr": "highest_available_area",
            "amount_func": "mult",
            "show_bonus": true,
            "amount_updated_listeners": [
                "area_changed"
            ],
            "stack_title": "Areas Completed",
            "total_title": "Areas Completed Bonus",
            "desc_forced_order": 1
        },
        {
            "off_when_benched": true,
            "effect_string": "increase_monster_damage,0",
            "apply_manually": true,
            "show_bonus": false,
            "desc_forced_order": 3,
            "amount_expr": "upgrade_amount(21674,0)"
        },
        {
            "show_description": false,
            "effect_string": "gazrick_control_weather",
            "buff_indicies": [
                3
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 13609,
    "large_graphic_id": 13605,
    "properties": {
        "is_formation_ability": true,
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

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Genius with Gold** (Guess)
> Gazrick increases the effect of Travelling Merchant by 200%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3112,
    "flavour_text": "",
    "description": {
        "desc": "$(source_hero) increases the effect of Travelling Merchant by $(amount)%."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,200,7535"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Sheer Cold** (Guess)
> Each time Gazrick applies a stack of Armor Ablation, the effect of Frosty Friendship is increased by $amount%, stacking multiplicatively up to $max_stacks times. Stacks reset when changing areas.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3113,
    "flavour_text": "",
    "description": {
        "desc": "Each time Gazrick applies a stack of Armor Ablation, the effect of Frosty Friendship is increased by $amount%, stacking multiplicatively up to $max_stacks times. Stacks reset when changing areas."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "do_nothing"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Stay Frosty** (Guess)
> Gazrick reduces the effect of Armor Ablation by 50%, but enemies he attacks take $amount% more damage from all attacks, stacking multiplicatively up to $max_stacks times.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3114,
    "flavour_text": "",
    "description": {
        "desc": "Gazrick reduces the effect of Armor Ablation by 50%, but enemies he attacks take $amount% more damage from all attacks, stacking multiplicatively up to $max_stacks times."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "do_nothing"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Finesse with Frost** (Guess)
> Gazrick increases the effect of Control Weather by 200%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3115,
    "flavour_text": "",
    "description": {
        "desc": "$(source_hero) increases the effect of Control Weather by $(amount)%."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,200,7537"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
</div></div>

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![The Endless War (Gazrick) Icon](images/gazrick/2661.png) **Unlock Adventure: The Endless War (Gazrick)** (Complete Area 50)
> Defend Triboar from a Githyanki invasion.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Cool Comrades Icon](images/gazrick/13597.png) **Variant 1: Cool Comrades** (Complete Area 75)
> Gazrick starts in the formation. He can't be moved or removed from the formation.  
> Two Ice Mephits have befriended Gazrick. It's not weird.  
> Getting to know Gazrick: Gazrick's main support ability gets stronger with distance in a straight line. Place your damage dealers to get the most out of Gazrick's buffs!
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Brain Freeze Icon](images/gazrick/13598.png) **Variant 2: Brain Freeze** (Complete Area 125)
> Gazrick starts in the formation. He can't be moved or removed from the formation.  
> Gazrick has created three Snow Golems companions. Each Golem has an intellect devourer perched on their head. It's not weird.  
> Only Champions with an INT score of 13 or higher can be used.  
> It's snowing in all areas where there is not already weather set.  
> Getting to know Gazrick: Gazrick's main support ability can still support through gaps in the formation. Place your damage dealers to get the most out of Gazrick's buffs!
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Armored Assault Icon](images/gazrick/13599.png) **Variant 3: Armored Assault** (Complete Area 175)
> Gazrick starts in the formation. He can be moved, but he can't be removed. His Armor Ablation ability starts unlocked.  
> All boss enemies have at least 25 armored health.  
> Armored enemies require 100% more damage to deal one armored hit.  
> Gazrick's Armor Ablation ability is +100% more effective.  
> Getting to Know Gazrick: Gazrick's attacks can weaken armor. Use his specialization and increase his attack speed to make the most of this feature!
</div></div>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Gazrick" fill="#aaa" data-formationName="Gazrick" data-campaignName="Wintershield" width="341" height="160"><circle cx="215" cy="45" r="15"/><circle cx="175" cy="65" r="15"/><circle cx="175" cy="105" r="15"/><circle cx="135" cy="85" r="15"/><circle cx="95" cy="65" r="15"/><circle cx="55" cy="45" r="15"/><circle cx="15" cy="25" r="15"/><circle cx="15" cy="65" r="15"/><circle cx="15" cy="105" r="15"/><circle cx="15" cy="145" r="15"/><text x="245" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Gazrick</text><text x="245" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Wintershield</text></svg>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*