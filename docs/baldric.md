[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Baldric](images/baldric/portrait.png)
        </span>
        <span>
        Portrait
        </span>
    </span>
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![Model GIF of Baldric](images/baldric/model.gif)
        </span>
        <span>
        Model
        </span>
    </span>
</span>

# Baldric

Baldric, a cleric who refuses to tie himself to a single deity when he can trade favors with them all.

[The Fallbacks: Bound for Ruin - Fandom Wiki](https://forgottenrealms.fandom.com/wiki/The_Fallbacks:_Bound_for_Ruin)

# Basic Information

Baldric will be a new champion in the Ahghairon's Day event on 6 August 2025.

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
            <span style="margin-left:8px;">Unknown</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Class**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Cleric (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Roles**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Support / Healing / Gold / Debuff / Control (Guess)</span>
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
            <span style="margin-left:8px;">The Fallbacks (Guess)</span>
        </span>
    </span>
</span>

# Formation

Unknown.
{% comment %}
<span class="formationBorder">
    ![Formation Layout](images/baldric/formation.png)
</span>
{% endcomment %}

# Attacks

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Two-Handed Mace** (Melee)
> Baldric attacks the closest enemy, dealing 1 hit.  
> Cooldown: 4.75s (Cap 1.1875s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 879,
    "name": "Two-Handed Mace",
    "description": "Baldric attacks the closest enemy, dealing 1 hit.",
    "long_description": "",
    "graphic_id": 0,
    "target": "front",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 4.75,
    "animations": [
        {
            "type": "melee_attack",
            "damage_frame": 3
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
**Base Attack: Two-Handed Mace** (Magic)
> Baldric attacks the closest enemy, dealing BUD-based damage.  
> Cooldown: 4.75s (Cap 1.1875s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 882,
    "name": "Two-Handed Mace",
    "description": "Baldric attacks the closest enemy, dealing BUD-based damage.",
    "long_description": "",
    "graphic_id": 0,
    "target": "front",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 4.75,
    "animations": [
        {
            "type": "melee_attack",
            "damage_frame": 3,
            "effects_on_monsters": [
                {
                    "effect_string": "damage_monster_target_by_bud",
                    "hit_monsters": true,
                    "damage_mult": 3,
                    "after_damage": true
                }
            ]
        }
    ],
    "tags": [
        "magic"
    ],
    "damage_types": [
        "magic"
    ]
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ultimate Attack: Faith Aflame**
> Baldric's mace ignites with radiant light, preventing Champions from being stunned and empowering his attacks for the duration it is aflame  
> Cooldown: 360s (Cap 90s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 880,
    "name": "Faith Aflame",
    "description": "Baldric prevents Champions from being stunned and he empowers his attacks for a short duration.",
    "long_description": "Baldric's mace ignites with radiant light, preventing Champions from being stunned and empowering his attacks for the duration it is aflame",
    "graphic_id": 27023,
    "target": "none",
    "num_targets": 0,
    "aoe_radius": 0,
    "damage_modifier": 0.03,
    "cooldown": 360,
    "animations": [
        {
            "type": "ultimate_attack",
            "ultimate": "baldric",
            "animation_sequence_name": "ultimate"
        }
    ],
    "tags": [
        "melee",
        "ultimate"
    ],
    "damage_types": [
        "ultimate"
    ]
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ultimate Attack: United Strike (Faith Aflame)**
> Baldric directs all the Fallbacks to attack with their ultimate attack, including his own Faith Aflame.  
> Cooldown: 360s (Cap 90s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 881,
    "name": "United Strike (Faith Aflame)",
    "description": "Baldric directs all the Fallbacks to make their ultimate attack.",
    "long_description": "Baldric directs all the Fallbacks to attack with their ultimate attack, including his own Faith Aflame.",
    "graphic_id": 26834,
    "target": "none",
    "num_targets": 0,
    "aoe_radius": 0,
    "damage_modifier": 0.03,
    "cooldown": 360,
    "animations": [
        {
            "type": "united_strike_ultimate"
        }
    ],
    "tags": [
        "melee",
        "ultimate"
    ],
    "damage_types": [
        "ultimate"
    ]
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ultimate Attack: Call Uggie**
> Baldric calls Uggie to his side.  
> Cooldown: 0s (Cap 0s)

<span style="font-size:1.2em;">ⓘ</span> *Note: Very short ultimate cooldowns are almost always for testing purposes and are likely to be increased later.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 878,
    "name": "Call Uggie",
    "description": "Baldric calls Uggie to his side.",
    "long_description": "Baldric calls Uggie to his side.",
    "graphic_id": 26837,
    "target": "none",
    "num_targets": 0,
    "aoe_radius": 0,
    "damage_modifier": 0,
    "cooldown": 0,
    "animations": [
        {
            "type": "call_uggie_ultimate",
            "no_damage_display": true
        }
    ],
    "tags": [
        "ultimate",
        "ignore_cooldown_override"
    ],
    "damage_types": []
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ultimate Attack: Call Uggie**
> Baldric calls Uggie to her side.  
> Cooldown: 0s (Cap 0s)

<span style="font-size:1.2em;">ⓘ</span> *Note: Very short ultimate cooldowns are almost always for testing purposes and are likely to be increased later.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 883,
    "name": "Call Uggie",
    "description": "Baldric calls Uggie to her side.",
    "long_description": "Baldric calls Uggie to her side.",
    "graphic_id": 26837,
    "target": "none",
    "num_targets": 0,
    "aoe_radius": 0,
    "damage_modifier": 0,
    "cooldown": 0,
    "animations": [
        {
            "type": "call_uggie_ultimate",
            "no_damage_display": true
        }
    ],
    "tags": [
        "ultimate",
        "ignore_cooldown_override"
    ],
    "damage_types": []
}
</pre>
</p>
</details>
</div></div>

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> Uggie joins the party, starting next to Baldric unless they're already in the formation next to another Fallbacks Champion. Uggie increases the damage of all non-adjacent Champions by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2363,
    "flavour_text": "",
    "description": {
        "desc": "Uggie joins the party, starting next to Baldric unless they're already in the formation next to another Fallbacks Champion. Uggie increases the damage of all non-adjacent Champions by $amount%"
    },
    "effect_keys": [
        {
            "effect_string": "uggie_handler,100",
            "off_when_benched": true,
            "uggie_roaming_disable_index": 1,
            "uggie_priority": 1,
            "call_uggie_ult_id": 883,
            "united_strike_ult_id": 881,
            "use_computed_amount_for_description": true
        },
        {
            "effect_string": "disallow_roaming_familiar_ult_trigger",
            "apply_manually": true
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "show_incoming": false,
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
**Bargaining Power** (Guess)
> Baldric's bargaining partners are Fallbacks Champions and/or Champions with Charisma of 15 or higher. Baldric increases the damage of his bargaining partners by 100% for each bargaining partner in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2379,
    "flavour_text": "",
    "description": {
        "desc": "Baldric's bargaining partners are Fallbacks Champions and/or Champions with Charisma of 15 or higher. Baldric increases the damage of his bargaining partners by $(not_buffed amount)% for each bargaining partner in the formation, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,100",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "hero_dps_multiplier_mult,100",
            "off_when_benched": true,
            "amount_expr": "upgrade_amount(17472,0)",
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "0",
            "post_process_expr": "num_targets",
            "targets": [
                "all"
            ],
            "filter_targets": [
                {
                    "type": "hero_expr",
                    "hero_expr": "GetStat(`cha`) >= 15 || HasTag(`fallbacks`) || ((GetUpgradeUnlocked(17492) || GetUpgradeUnlocked(17497) || GetUpgradeUnlocked(17507) || GetUpgradeUnlocked(17512) || GetUpgradeUnlocked(17517)) && HasTag(`dwarf`)) || ((GetUpgradeUnlocked(17493) || GetUpgradeUnlocked(17498) || GetUpgradeUnlocked(17503) || GetUpgradeUnlocked(17513) || GetUpgradeUnlocked(17518)) && HasTag(`gold`)) || ((GetUpgradeUnlocked(17494) || GetUpgradeUnlocked(17499) || GetUpgradeUnlocked(17504) || GetUpgradeUnlocked(17509) || GetUpgradeUnlocked(17519)) && has_base_attack_dmg_type_magic) || ((GetUpgradeUnlocked(17495) || GetUpgradeUnlocked(17499) || GetUpgradeUnlocked(17505) || GetUpgradeUnlocked(17510) || GetUpgradeUnlocked(17515)) && HasTag(`healing`))"
                }
            ],
            "amount_updated_listeners": [
                "slot_changed",
                "hero_tags_changed"
            ],
            "stack_title": "Bargaining Partners",
            "show_bonus": true,
            "use_computed_amount_for_description": true
        }
    ],
    "requirements": "",
    "graphic_id": 27005,
    "large_graphic_id": 26998,
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
**Undeniable Uggie** (Guess)
> Uggie's buff is increased by 400% when Baldric is in the formation.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2380,
    "flavour_text": "",
    "description": {
        "desc": "Uggie's buff is increased by $amount% when Baldric is in the formation."
    },
    "effect_keys": [
        {
            "effect_string": "unleash_uggie_contribution,400",
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 27009,
    "large_graphic_id": 27002,
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
**Healing Word** (Guess)
> Baldric heals the Champions in all the columns in front of him for 20 health per second.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2381,
    "flavour_text": "",
    "description": {
        "desc": "Baldric heals the Champions in all the columns in front of him for $amount health per second."
    },
    "effect_keys": [
        {
            "effect_string": "heal,20",
            "off_when_benched": true,
            "targets": [
                "ahead"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 27007,
    "large_graphic_id": 27000,
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
**Shield of Filth** (Guess)
> When Uggie is with Baldric, any Champion that is being targeted by Baldric's Healing Word can't take more than 33% of their max health in one hit.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2382,
    "flavour_text": "",
    "description": {
        "desc": "When Uggie is with Baldric, any Champion that is being targeted by Baldric's Healing Word can't take more than $(amount___2)% of their max health in one hit."
    },
    "effect_keys": [
        {
            "effect_string": "baldric_shield_of_filth_handler",
            "buff_index": 1
        },
        {
            "effect_string": "max_health_percent_per_hit,33",
            "off_when_benched": true,
            "apply_manually": true,
            "targets": [
                "all"
            ],
            "filter_targets": [
                {
                    "type": "not_affected_by_upgrade",
                    "upgrade_id": 17476
                }
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 27008,
    "large_graphic_id": 27001,
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
**Healing Lantern** (Guess)
> When any Champion drops to or below 50% of their maximum health, Baldric lights his lantern for the rest of the current area and all healing received by Champions in the formation is increased by 100% for each Healing Champion in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2383,
    "flavour_text": "",
    "description": {
        "desc": "When any Champion drops to or below $health_percent% of their maximum health, Baldric lights his lantern for the rest of the current area and all healing received by Champions in the formation is increased by $(not_buffed amount___2)% for each Healing Champion in the formation, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "baldric_healing_lantern_handler",
            "health_percent": 50,
            "off_when_benched": true
        },
        {
            "effect_string": "healing_mult,100",
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasTag(`healing`)",
            "show_bonus": true,
            "amount_updated_listeners": [
                "slot_changed",
                "hero_tags_changed"
            ],
            "apply_manually": true
        }
    ],
    "requirements": "",
    "graphic_id": 27006,
    "large_graphic_id": 26999,
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

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Bargain: Tyr** (Guess)
> Baldric increases the pre-stack bonus of Bargaining Power by 50%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2384,
    "flavour_text": "",
    "description": {
        "desc": "Baldric increases the pre-stack bonus of Bargaining Power by $(not_buffed amount)%."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,50,17472,0",
            "off_when_benched": true
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
**Bargain: Moradin** (Guess)
> You may use any Dwarf Champion in the current adventure, even if the Patron, Variant, or other restrictions would say otherwise. Additionally, Dwarf Champions also count as Baldric's bargaining partners.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2385,
    "flavour_text": "",
    "description": {
        "desc": "You may use any Dwarf Champion in the current adventure, even if the Patron, Variant, or other restrictions would say otherwise. Additionally, Dwarf Champions also count as Baldric's bargaining partners."
    },
    "effect_keys": [
        {
            "effect_string": "force_allow_hero_by_tag,dwarf",
            "off_when_benched": true
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
**Bargain: Tymora** (Guess)
> Baldric gains the Gold Find role and increases the party's gold find by 100% for each bargaining partner, stacking multiplicatively. Additionally, Champions with the Gold Find role also count as Baldric's bargaining partners.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2386,
    "flavour_text": "",
    "description": {
        "desc": "Baldric gains the Gold Find role and increases the party's gold find by 100% for each bargaining partner, stacking multiplicatively. Additionally, Champions with the Gold Find role also count as Baldric's bargaining partners."
    },
    "effect_keys": [
        {
            "effect_string": "add_hero_tags,0,gold"
        },
        {
            "effect_string": "gold_multiplier_mult,100",
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "0",
            "post_process_expr": "GetUpgradeStacks(17472,1)",
            "amount_updated_listeners": [
                "slot_changed",
                "hero_tags_changed",
                "upgrade_unlocked"
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
**Bargain: Mystra** (Guess)
> Baldric's base attack also deals 5 seconds of BUD-based damage and counts as a magic attack. Additionally, Champions with a magic base attack also count as Baldric's bargaining partners.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2387,
    "flavour_text": "",
    "description": {
        "desc": "Baldric's base attack also deals 5 seconds of BUD-based damage and counts as a magic attack. Additionally, Champions with a magic base attack also count as Baldric's bargaining partners."
    },
    "effect_keys": [
        {
            "effect_string": "change_base_attack,882"
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
**Bargain: Eldath** (Guess)
> Baldric increases the effect of Healing Word by 100%. Additionally, Champions with the Healing role also count as Baldric's bargaining partners.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2388,
    "flavour_text": "",
    "description": {
        "desc": "Baldric increases the effect of Healing Word by $(not_buffed amount)%. Additionally, Champions with the Healing role also count as Baldric's bargaining partners."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,100,17476,0",
            "off_when_benched": true
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
**Dark Bargain: Tyr** (Guess)
> Baldric increases the pre-stack bonus of Bargaining Power by an additional 50%, but the effect of Healing Word is reduced by 99%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2389,
    "flavour_text": "",
    "description": {
        "desc": "Baldric increases the pre-stack bonus of Bargaining Power by an additional $(not_buffed amount)%, but the effect of Healing Word is reduced by $(amount___2)%."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,50,17472,0",
            "off_when_benched": true
        },
        {
            "effect_string": "debuff_upgrade,99,17476",
            "off_when_benched": true
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
**Dark Bargain: Moradin** (Guess)
> The damage of Dwarf Champions is increased by 100% for each Dwarf in the formation, stacking multiplicatively, but you may only have one of each non-Dwarf species in the formation.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2390,
    "flavour_text": "",
    "description": {
        "desc": "The damage of Dwarf Champions is increased by $(not_buffed amount)% for each Dwarf in the formation, stacking multiplicatively, but you may only have one of each non-Dwarf species in the formation."
    },
    "effect_keys": [
        {
            "effect_string": "hero_dps_multiplier_mult,100",
            "off_when_benched": true,
            "targets": [
                "all"
            ],
            "filter_targets": [
                {
                    "type": "hero_expr",
                    "hero_expr": "HasTag(`dwarf`)"
                }
            ]
        },
        {
            "effect_string": "limit_formation_by_species_handler"
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
**Dark Bargain: Tymora** (Guess)
> Bosses have a 10% chance to drop twice as many gems, but non boss area quest requirements are increased by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2391,
    "flavour_text": "",
    "description": {
        "desc": "Bosses have a 10% chance to drop twice as many gems, but non boss area quest requirements are increased by 100%."
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
**Dark Bargain: Mystra** (Guess)
> All Champions with magic base attacks deal an additional 5 seconds of BUD-based damage with each attack, but all Champions without a magic base attack no longer deal any damage with their base attacks.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2392,
    "flavour_text": "",
    "description": {
        "desc": "All Champions with magic base attacks deal an additional 5 seconds of BUD-based damage with each attack, but all Champions without a magic base attack no longer deal any damage with their base attacks."
    },
    "effect_keys": [
        {
            "effect_string": "base_attack_deal_bonus_damage,5",
            "off_when_benched": true,
            "targets": [
                "all"
            ],
            "filter_targets": [
                {
                    "type": "hero_expr",
                    "hero_expr": "has_base_attack_dmg_type_magic"
                }
            ]
        },
        {
            "effect_string": "hero_dps_multiplier_reduce,100",
            "off_when_benched": true,
            "targets": [
                "all"
            ],
            "filter_targets": [
                {
                    "type": "hero_expr",
                    "hero_expr": "!has_base_attack_dmg_type_magic"
                }
            ]
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
**Dark Bargain: Eldath** (Guess)
> Champions are immune to damage for 15 seconds after the first instance of damage that they would take in every area (including that damage), but take 100% additional damage from all sources after that.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2393,
    "flavour_text": "",
    "description": {
        "desc": "Champions are immune to damage for $duration seconds after the first instance of damage that they would take in every area (including that damage), but take $(amount___3)% additional damage from all sources after that."
    },
    "effect_keys": [
        {
            "effect_string": "baldric_dark_bargain_eldath_handler",
            "duration": 15,
            "immunity_effect_index": 1,
            "damage_effect_index": 2
        },
        {
            "effect_string": "damage_reduction,100",
            "targets": [
                "all"
            ],
            "apply_manually": true
        },
        {
            "effect_string": "damage_increase,100",
            "targets": [
                "all"
            ],
            "apply_manually": true
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
        "retain_on_slot_changed": true,
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
            <span class="itemTableIcon1">![Clothes Icon](images/baldric/26956.png)</span><span class="itemTableIcon2">![Clothes Icon](images/baldric/26956.png)</span><span class="itemTableIcon3">![Clothes Icon](images/baldric/26957.png)</span><span class="itemTableIcon4">![Clothes Icon](images/baldric/26958.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Clothes
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Fallbacks Links Icon](images/baldric/26959.png)</span><span class="itemTableIcon2">![Fallbacks Links Icon](images/baldric/26959.png)</span><span class="itemTableIcon3">![Fallbacks Links Icon](images/baldric/26960.png)</span><span class="itemTableIcon4">![Fallbacks Links Icon](images/baldric/26961.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Fallbacks Links
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Helmet Icon](images/baldric/26962.png)</span><span class="itemTableIcon2">![Helmet Icon](images/baldric/26962.png)</span><span class="itemTableIcon3">![Helmet Icon](images/baldric/26963.png)</span><span class="itemTableIcon4">![Helmet Icon](images/baldric/26964.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Helmet
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Holy Symbol Ribbon Icon](images/baldric/26965.png)</span><span class="itemTableIcon2">![Holy Symbol Ribbon Icon](images/baldric/26965.png)</span><span class="itemTableIcon3">![Holy Symbol Ribbon Icon](images/baldric/26966.png)</span><span class="itemTableIcon4">![Holy Symbol Ribbon Icon](images/baldric/26967.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Holy Symbol Ribbon
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Lantern Icon](images/baldric/26968.png)</span><span class="itemTableIcon2">![Lantern Icon](images/baldric/26968.png)</span><span class="itemTableIcon3">![Lantern Icon](images/baldric/26969.png)</span><span class="itemTableIcon4">![Lantern Icon](images/baldric/26970.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Lantern
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Mace Icon](images/baldric/26971.png)</span><span class="itemTableIcon2">![Mace Icon](images/baldric/26971.png)</span><span class="itemTableIcon3">![Mace Icon](images/baldric/26972.png)</span><span class="itemTableIcon4">![Mace Icon](images/baldric/26973.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Mace
        </span>
    </span>
</span>

# Feats

Unknown.

# Legendaries

Unknown.

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unlock Adventure: The Missing Lord (Baldric)** (Complete Area 50)
> Save Waterdeep from the chaos of a Founders' Day gone awry.
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
            ![Baldric Console Portrait](images/baldric/console.png)Console Portrait
        </span>
    </span>
    <span class="championImagesRow">
        <span class="championImagesChests">
            ![Baldric Gold Chest Icon](images/baldric/chest_gold.png)Gold Chest Icon
        </span>
        <span class="championImagesChests">
            ![Baldric Silver Chest Icon](images/baldric/chest_silver.png)Silver Chest Icon
        </span>
    </span>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*