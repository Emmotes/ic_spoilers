[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsImage">
        ![Model GIF of Dynaheir](images/dynaheir/model.gif)Model
    </span>
</span>

# Dynaheir

Dynaheir was a young invoker in the wychlaran of Rashemen who undertook her dajemma to the far off region of the Sword Coast in the mid-14th century DR. She was not alone on this journey, as she accompanied by her berserker companion Minsc and his hamster Boo.

[Dynaheir - FR Fandom Wiki](https://forgottenrealms.fandom.com/wiki/Dynaheir)

# Basic Information

Dynaheir will be the new champion in the Fleetswake event on 21 February 2024.

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
            <span style="margin-right:4px;">**Race**:</span>
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
            <span style="margin-left:8px;">Tanking / Support (Guess)</span>
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
            <span style="margin-left:8px;">Lawful Good (Guess)</span>
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
    ![Formation Layout](images/dynaheir/formation.png)
</span>
{% endcomment %}

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Unknown**
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ultimate Attack: Unknown**
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**The Resolve of Rashmen** (Guess)
> Dynaheir increases the damage of all Champions in the formation with a CON of 15+ by 400% for each Champion affected by this ability, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability might be prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1849,
    "flavour_text": "",
    "description": {
        "desc": "Dynaheir increases the damage of all Champions in the formation with a CON of 15+ by $amount% for each Champion affected by this ability, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack_amount,400",
            "off_when_benched": true
        },
        {
            "effect_string": "hero_dps_multiplier_mult,0",
            "amount_expr": "upgrade_amount(13874,0)",
            "off_when_benched": true,
            "targets": [
                "all"
            ],
            "filter_targets": [
                {
                    "type": "stat_score",
                    "stat": "con",
                    "score": 15,
                    "check": ">="
                }
            ],
            "formation_arrows_for_effected_only": true,
            "show_bonus": true,
            "stacks_multiply": true,
            "amount_func": "mult",
            "stack_func": "per_upgrade_targets",
            "stack_func_data": {
                "upgrade_id": 13874
            },
            "amount_updated_listeners": [
                "slot_changed",
                "ability_score_changed"
            ],
            "retarget_when_any_hero_slot_changed": true,
            "use_computed_amount_for_description": true
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 1,
        "indexed_effect_properties": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> Humanoid enemies are Dynaheir's Favored Foe. There is a 50% chance that an additional Red Wizard spawns with each wave in non-boss areas.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1850,
    "flavour_text": "",
    "description": {
        "desc": "Humanoid enemies are Dynaheir's Favored Foe. There is a $(amount___2)% chance that an additional Red Wizard spawns with each wave in non-boss areas."
    },
    "effect_keys": [
        {
            "effect_string": "favored_foe,humanoid",
            "off_when_benched": true
        },
        {
            "effect_string": "spawn_additional_monsters,50",
            "off_when_benched": true,
            "monster_ids": [
                804,
                805,
                806,
                885,
                886,
                887,
                1952,
                1953,
                1954
            ],
            "spawn_count": 1,
            "boss_areas": false,
            "monster_tag": "dynaheir_enemy_of_thay"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
        "indexed_effect_properties": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> All Favored Foes have a 50% chance to drop double quest items or count for double quest progress.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1851,
    "flavour_text": "",
    "description": {
        "desc": "All Favored Foes have a $amount% chance to drop double quest items or count for double quest progress."
    },
    "effect_keys": [
        {
            "effect_string": "chance_multiply_favored_foe_quest_rewards,50,2",
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> Dynaheir increases the bonus of The Resolve of Rashemen by 20% each time an ally is attacked, up to a maximum of 100 stacks. Stacks apply multiplicatively and reset when changing areas.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1852,
    "flavour_text": "",
    "description": {
        "desc": "Dynaheir increases the bonus of The Resolve of Rashemen by $(not_buffed amount)% each time an ally is attacked, up to a maximum of $max_stacks stacks. Stacks apply multiplicatively and reset when changing areas."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,20,13874",
            "off_when_benched": true,
            "stacks_multiply": true,
            "max_stacks": 100,
            "show_bonus": true,
            "more_triggers": [
                {
                    "trigger": "hero_attacked",
                    "target": "other",
                    "action": {
                        "type": "add_stack"
                    }
                },
                {
                    "trigger": "area_changed",
                    "action": {
                        "type": "reset_stacks"
                    }
                }
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Loyal Bodyguard** (Guess)
> Minsc gains the Tanking role and is now eligible for this adventure regardless of other restrictions. Dynaheir increases Minsc's base health by 200%, and then further increases his health by 75% for every 50 areas completed in the current adventure, up to area 600. She also increases the health of all Champions, other than Minsc, by 25% of Minsc's max health.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1856,
    "flavour_text": "",
    "description": {
        "desc": "Minsc gains the Tanking role and is now eligible for this adventure regardless of other restrictions. Dynaheir increases Minsc's base health by $amount%, and then further increases his health by 75% for every 50 areas completed in the current adventure, up to area 600. She also increases the health of all Champions, other than Minsc, by 25% of Minsc's max health"
    },
    "effect_keys": [
        {
            "effect_string": "dynaheir_loyal_bodyguard,200",
            "off_when_benched": true,
            "minsc_effect": "effect_def,1857",
            "minsc_health_mult_amount_expr": "base_amount+75*floor(min(highest_completed_area,600)/50)"
        },
        {
            "effect_string": "force_allow_hero",
            "off_when_benched": true,
            "hero_ids": [
                7
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "retain_on_slot_changed": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "indexed_effect_properties": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1857,
    "flavour_text": "",
    "description": {
        "desc": ""
    },
    "effect_keys": [
        {
            "effect_string": "add_hero_tags,0,tanking"
        },
        {
            "effect_string": "health_mult,0",
            "note": "Amount for this gets updated by effect def 1856"
        },
        {
            "effect_string": "increase_health_by_source_percent,25",
            "targets": [
                "other"
            ],
            "amount_updated_listeners": [
                "max_health_changed"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "properties": []
}
</pre>
</p>
</details>
</div></div>

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Unknown** (Guess)
> Champions in the front-most column of the formation have their Overwhelm increased to 25, if it wasn't already higher.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1853,
    "flavour_text": "",
    "description": {
        "desc": "Champions in the front-most column of the formation have their Overwhelm increased to $amount, if it wasn't already higher."
    },
    "effect_keys": [
        {
            "effect_string": "increase_overwhelm_to,25",
            "off_when_benched": true,
            "targets": [
                "front_column"
            ],
            "use_computed_amount_for_description": true
        }
    ],
    "requirements": "",
    "graphic_id": 0,
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
**Specialisation: Unknown** (Guess)
> Champions that are adjacent to Dynaheir get +1 CON and the base effect of The Resolve of Rashemen is increased by 10%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1854,
    "flavour_text": "",
    "description": {
        "desc": "Champions that are adjacent to Dynaheir get +1 CON and the base effect of The Resolve of Rashemen is increased by $amount%."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,10,13874,0",
            "off_when_benched": true
        },
        {
            "effect_string": "increase_ability_score,con,1",
            "off_when_benched": true,
            "targets": [
                "adj"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "indexed_effect_properties": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Unknown** (Guess)
> Champions deal 1000% more damage against all Favored Foes.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1855,
    "flavour_text": "",
    "description": {
        "desc": "Champions deal $amount% more damage against all Favored Foes."
    },
    "effect_keys": [
        {
            "effect_string": "increase_monster_damage_if_favored_foe,1000",
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
</div></div>

# Items

Unknown.

# Feats

Unknown.

# Legendaries

Unknown.

{% comment %}
# Other Champion Images

<span class="championImagesColumn">
</span>
{% endcomment %}

[Back to Top](#top)

*Last Modified: {{ site.time }}*