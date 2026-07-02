[Back to Main](index.md)

{% comment %}
<span class="championPortraitsRow">
</span>
{% endcomment %}

# Caramon Majere

[Caramon Majere - Dragonlace Fandom Wiki](https://dragonlance.fandom.com/wiki/Caramon_Majere){:target="_blank"}

# Basic Information

Caramon Majere will be a new champion in the Highharvestide event on 2 September 2026.

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
            <span style="margin-left:8px;">Fighter (Guess)</span>
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
            <span style="margin-left:8px;">Male (Guess)</span>
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
            <span style="margin-left:8px;">Heroes of the Lance (Guess)</span>
        </span>
    </span>
</span>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Caramon" fill="#aaa" data-formationName="Caramon" data-campaignName="Highharvestide" width="279" height="160"><circle cx="135" cy="45" r="15"/><circle cx="135" cy="85" r="15"/><circle cx="135" cy="125" r="15"/><circle cx="95" cy="25" r="15"/><circle cx="95" cy="65" r="15"/><circle cx="95" cy="105" r="15"/><circle cx="95" cy="145" r="15"/><circle cx="55" cy="45" r="15"/><circle cx="55" cy="85" r="15"/><circle cx="15" cy="65" r="15"/><text x="165" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Caramon</text><text x="165" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Highharvestide</text></svg>
</span>

# Attacks

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Mighty Blow** (Melee)
> Caramon attacks the nearest enemy for one hit.  
> Cooldown: 6.25s (Cap 1.5625s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 996,
    "name": "Mighty Blow",
    "description": "Caramon attacks the nearest enemy for one hit.",
    "long_description": "",
    "graphic_id": 0,
    "target": "front",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 6.25,
    "animations": [
        {
            "type": "melee_attack",
            "target_offset_x": -34,
            "damage_frame": 2,
            "jump_sound": 30,
            "sound_frames": {
                "2": 154
            }
        }
    ],
    "tags": [
        "melee"
    ],
    "damage_types": [
        "melee"
    ]
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ultimate Attack: Endure All** (Guess)
> Caramon is healed to full and buffs the party based on the health he was missing. This ultimate can automatically trigger when Caramon is close to death.  
> Cooldown: 60s (Cap 15s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 997,
    "name": "Endure All",
    "description": "Caramon is healed to full and buffs the party based on the health he was missing.",
    "long_description": "Caramon is healed to full and buffs the party based on the health he was missing. This ultimate can automatically trigger when Caramon is close to death.",
    "graphic_id": 669,
    "target": "front",
    "num_targets": 1,
    "aoe_radius": 150,
    "damage_modifier": 0.075,
    "cooldown": 60,
    "animations": [
        {
            "type": "melee_attack",
            "target_offset_x": -34,
            "damage_frame": 38,
            "hit_frames": [
                2,
                20
            ],
            "shake_on_hit": 0.1,
            "sound_frames": {
                "2": 158
            }
        }
    ],
    "tags": [
        "magic",
        "ultimate"
    ],
    "damage_types": [
        "magic"
    ]
}
</pre>
</p>
</details>
</div></div>

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> If Raistlin is in the formation, Caramon may be used as well, regardless of any active variant or patron restrictions.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2851,
    "flavour_text": "",
    "description": {
        "desc": "If Raistlin is in the formation, Caramon may be used as well, regardless of any active variant or patron restrictions."
    },
    "effect_keys": [
        {
            "effect_string": "do_nothing,100"
        }
    ],
    "requirements": [],
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
**Unknown** (Guess)
> Caramon increases the health of all Champions targeted by his Raise Spirits ability by 10% of his max health. If a Champion is targeted multiple times (via his Allies specialization), this ability applies multiple times.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2858,
    "flavour_text": "",
    "description": {
        "desc": "Caramon increases the health of all Champions targeted by his Raise Spirits ability by 10% of his max health. If a Champion is targeted multiple times (via his Allies specialization), this ability applies multiple times."
    },
    "effect_keys": [
        {
            "effect_string": "do_nothing,100"
        }
    ],
    "requirements": [],
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
**Unknown** (Guess)
> Whenever Caramon is attacked by an enemy, the effect of Raise Spirits buff is increased by 100%, stacking multiplicatively. This can stack up to 25 times and loses half of its stacks when changing areas.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2859,
    "flavour_text": "",
    "description": {
        "desc": "Whenever Caramon is attacked by an enemy, the effect of Raise Spirits buff is increased by 100%, stacking multiplicatively. This can stack up to 25 times and loses half of its stacks when changing areas."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrades,100,20177,20178,20179",
            "stacks_on_trigger": {
                "trigger": "hero_attacked",
                "target": "self_slot"
            },
            "more_triggers": [
                {
                    "trigger": "area_changed",
                    "action": {
                        "type": "reduce_percent",
                        "percent": 50
                    }
                }
            ],
            "max_stacks": 25,
            "stacks_multiply": true,
            "show_bonus": true
        }
    ],
    "requirements": [],
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
**Unknown** (Guess)
> Caramon increases the effect of Raise Spirits by 100% for each Champion in the formation not affected by Raise Spirits.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2860,
    "flavour_text": "",
    "description": {
        "desc": "Caramon increases the effect of Raise Spirits by 100% for each Champion in the formation not affected by Raise Spirits."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,100",
            "skip_effect_key_desc": true
        },
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrades,100,20177,20178,20179",
            "amount_expr": "upgrade_amount(20185,0)",
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "!HasEffectByID(2852) && !HasEffectByID(2853) && !HasEffectByID(2854)",
            "stacks_multiply": true,
            "show_bonus": true
        }
    ],
    "requirements": [],
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
**Raise Spirits: Encirclement** (Guess)
> Caramon increases the damage of all adjacent Champions by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2852,
    "flavour_text": "",
    "description": {
        "desc": "Caramon increases the damage of all adjacent Champions by $amount%."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "hero_dps_multiplier_mult,100",
            "targets": [
                "adj"
            ]
        },
        {
            "off_when_benched": true,
            "effect_string": "caramon_raise_spirits"
        }
    ],
    "requirements": [],
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "effect_name": "Raise Spirits: Encirclement",
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
**Raise Spirits: Overwatch** (Guess)
> Caramon increases the damage of all Champions in the same column as him and the column in front of him by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2853,
    "flavour_text": "",
    "description": {
        "desc": "Caramon increases the damage of all Champions in the same column as him and the column in front of him by $amount%."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "hero_dps_multiplier_mult,100",
            "targets": [
                "col_and_next_col"
            ]
        },
        {
            "off_when_benched": true,
            "effect_string": "caramon_raise_spirits"
        }
    ],
    "requirements": [],
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "effect_name": "Raise Spirits: Overwatch",
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
**Raise Spirits: Spearhead** (Guess)
> Caramon increases the damage of all Champions in the two columns behind him by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2854,
    "flavour_text": "",
    "description": {
        "desc": "Caramon increases the damage of all Champions in the two columns behind him by $amount%."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "hero_dps_multiplier_mult,100",
            "targets": [
                "prev_two_col"
            ]
        },
        {
            "off_when_benched": true,
            "effect_string": "caramon_raise_spirits"
        }
    ],
    "requirements": [],
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "effect_name": "Raise Spirits: Spearhead",
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
> Caramon recruits all other Tanking Champions in the formation. Caramon's Raise Spirits ability emanates from each eligible Champion as if each were a separate formation ability for the purposes of Champions that care about such things.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2855,
    "flavour_text": "",
    "description": {
        "desc": "Caramon recruits all other Tanking Champions in the formation. Caramon's Raise Spirits ability emanates from each eligible Champion as if each were a separate formation ability for the purposes of Champions that care about such things."
    },
    "effect_keys": [
        {
            "effect_string": "carmon_second_spec,100",
            "off_when_benched": true,
            "targets": [
                "all"
            ],
            "filter_targets": [
                {
                    "type": "hero_expr",
                    "hero_expr": "HasTag(`tanking`)"
                }
            ],
            "spec_effects": {
                "20177": {
                    "effect_string": "effect_def,2852"
                },
                "20178": {
                    "effect_string": "effect_def,2853"
                },
                "20179": {
                    "effect_string": "effect_def,2854"
                }
            }
        }
    ],
    "requirements": [],
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
**Unknown** (Guess)
> Caramon recruits all other Good Champions in the formation. Caramon's Raise Spirits ability emanates from each eligible Champion as if each were a separate formation ability for the purposes of Champions that care about such things.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2856,
    "flavour_text": "",
    "description": {
        "desc": "Caramon recruits all other Good Champions in the formation. Caramon's Raise Spirits ability emanates from each eligible Champion as if each were a separate formation ability for the purposes of Champions that care about such things."
    },
    "effect_keys": [
        {
            "effect_string": "carmon_second_spec,100",
            "off_when_benched": true,
            "targets": [
                "all"
            ],
            "filter_targets": [
                {
                    "type": "hero_expr",
                    "hero_expr": "HasTag(`good`)"
                }
            ],
            "spec_effects": {
                "20177": {
                    "effect_string": "effect_def,2852"
                },
                "20178": {
                    "effect_string": "effect_def,2853"
                },
                "20179": {
                    "effect_string": "effect_def,2854"
                }
            }
        }
    ],
    "requirements": [],
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
**Unknown** (Guess)
> Caramon recruits all other Champions in the formation with a STR score of 16 or higher. Caramon's Raise Spirits ability emanates from each eligible Champion as if each were a separate formation ability for the purposes of Champions that care about such things.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2857,
    "flavour_text": "",
    "description": {
        "desc": "Caramon recruits all other Champions in the formation with a STR score of 16 or higher. Caramon's Raise Spirits ability emanates from each eligible Champion as if each were a separate formation ability for the purposes of Champions that care about such things."
    },
    "effect_keys": [
        {
            "effect_string": "carmon_second_spec,100",
            "off_when_benched": true,
            "targets": [
                "all"
            ],
            "filter_targets": [
                {
                    "type": "hero_expr",
                    "hero_expr": "GetStat(`str`) >= 16"
                }
            ],
            "spec_effects": {
                "20177": {
                    "effect_string": "effect_def,2852"
                },
                "20178": {
                    "effect_string": "effect_def,2853"
                },
                "20179": {
                    "effect_string": "effect_def,2854"
                }
            }
        }
    ],
    "requirements": [],
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

Unknown.

# Feats

Unknown.

# Legendaries

Unknown.

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unlock Adventure: The Bandit's Harvest (Caramon)** (Complete Area 50)
> Bandits are attempting to pilfer the harvest during Highharvestide and must be stopped.
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
            ![Caramon Majere Console Portrait](images/caramon/console.png)Console Portrait
        </span>
    </span>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*