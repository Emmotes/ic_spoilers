[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsImage">
        ![PC Portrait for The Dark Urge](images/thedarkurge/portrait.png)Portait
    </span>
    <span class="championPortraitsImage">
        ![Model GIF of The Dark Urge](images/thedarkurge/model.gif)Base Model
    </span>
    <span class="championPortraitsImage">
        ![Alternate Model GIF of The Dark Urge: Withers](images/thedarkurge/model-withers.gif)Withers Model
    </span>
    <span class="championPortraitsImage">
        ![Alternate Model GIF of The Dark Urge: Sceleritas Fel](images/thedarkurge/model-sceleritas-fel.gif)Sceleritas Fel Model
    </span>
</span>

# The Dark Urge

The Dark Urge is a special origin in Baldur's Gate 3 that can be played using any race, class, and gender, and will not be part of player's party if they are playing any other origin character.

[The Dark Urge - Baldur's Gate Wiki](https://bg3.wiki/wiki/The_Dark_Urge_(origin))

# Basic Information

The Dark Urge will be the new champion in the Festival of Fools event on 6 March 2024.

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
            <span style="margin-left:8px;">Dragonborn (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Class**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Sorcerer (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Roles**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">DPS / Support (Guess)</span>
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
            <span style="margin-left:8px;">Unknown</span>
        </span>
    </span>
</span>

# Formation

Unknown.
{% comment %}
<span class="formationBorder">
    ![Formation Layout](images/thedarkurge/formation.png)
</span>
{% endcomment %}

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Murderous Slash** (Melee)
> The Dark Urge strikes nearby enemies with a slash of his dagger.  
> Cooldown: 5s (Cap 1.25s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 735,
    "name": "Murderous Slash",
    "description": "The Dark Urge strikes nearby enemies with a slash of his dagger.",
    "long_description": "",
    "graphic_id": 0,
    "target": "front",
    "num_targets": 1,
    "aoe_radius": 100,
    "damage_modifier": 1,
    "cooldown": 5,
    "animations": [
        {
            "type": "melee_attack",
            "target_offset_x": -34,
            "damage_frame": 9,
            "jump_sound": 30,
            "sound_frames": {
                "2": 154
            }
        }
    ],
    "tags": [
        "melee",
        "aoe"
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
**Base Attack: Slay** (Melee)
> The Dark Urge strikes nearby enemies, dealing 1 hit of ultimate damage.  
> Cooldown: 3s (Cap 0.75s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 736,
    "name": "Slay",
    "description": "The Dark Urge strikes nearby enemies, dealing 1 hit of ultimate damage.",
    "long_description": "",
    "graphic_id": 0,
    "target": "front",
    "num_targets": 1,
    "aoe_radius": 150,
    "damage_modifier": 1,
    "cooldown": 3,
    "animations": [
        {
            "character": "companion",
            "type": "melee_attack",
            "special_melee": "dark_urge_slay",
            "force_count_for_bud": false,
            "target_offset": [
                -200,
                0
            ],
            "attack_sounds": {
                "melee": 179
            }
        }
    ],
    "tags": [
        "melee",
        "aoe"
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
**Base Attack: Murderous Slash (Storm Sorcery)** (Melee and Magic)
> The Dark Urge strikes nearby enemies with a slash of his dagger.  
> Cooldown: 5s (Cap 1.25s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 739,
    "name": "Murderous Slash (Storm Sorcery)",
    "description": "The Dark Urge strikes nearby enemies with a slash of his dagger.",
    "long_description": "",
    "graphic_id": 0,
    "target": "front",
    "num_targets": 1,
    "aoe_radius": 100,
    "damage_modifier": 1,
    "cooldown": 5,
    "animations": [
        {
            "type": "melee_attack",
            "target_offset_x": -34,
            "damage_frame": 9,
            "jump_sound": 30,
            "sound_frames": {
                "2": 154
            }
        }
    ],
    "tags": [
        "melee",
        "aoe"
    ],
    "damage_types": [
        "melee",
        "magic"
    ]
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ultimate Attack: Form of the Slayer**
> The Dark Urge transforms into the Slayer form for 15 seconds, dealing massive damage for the duration. Sceleritas Fel, immune to damage, takes his place in the formation for the duration.  
> Cooldown: 15s (Cap 3.75s)

<span style="font-size:1.2em;">ⓘ</span> *Note: Very short ultimate cooldowns are almost always for testing purposes and are likely to be increased later.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 737,
    "name": "Form of the Slayer",
    "description": "The Dark Urge transforms into the Slayer form for 15 seconds, dealing massive damage for the duration.",
    "long_description": "The Dark Urge transforms into the Slayer form for 15 seconds, dealing massive damage for the duration. Sceleritas Fel, immune to damage, takes his place in the formation for the duration.",
    "graphic_id": 22537,
    "target": "none",
    "num_targets": 0,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 15,
    "animations": [
        {
            "type": "ultimate_attack",
            "ultimate": "dark_urge_slayer",
            "no_damage_display": false
        }
    ],
    "tags": [
        "ultimate"
    ],
    "damage_types": []
}
</pre>
</p>
</details>
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ultimate Attack: Withers Resurrection**
> Withers appears, pushing back all monsters, resurrects all heroes, and makes them all immune for 15 seconds. If possible, this triggers when the Dark Urge is knocked out.  
> Cooldown: 15s (Cap 3.75s)

<span style="font-size:1.2em;">ⓘ</span> *Note: Very short ultimate cooldowns are almost always for testing purposes and are likely to be increased later.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 738,
    "name": "Withers' Resurrection",
    "description": "Withers appears, pushing back all monsters, resurrects all heroes, and makes them all immune for 15 seconds",
    "long_description": "Withers appears, pushing back all monsters, resurrects all heroes, and makes them all immune for 15 seconds. If possible, this triggers when the Dark Urge is knocked out.",
    "graphic_id": 22538,
    "target": "none",
    "num_targets": 0,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 15,
    "animations": [
        {
            "type": "ultimate_attack",
            "ultimate": "dark_urge_withers",
            "no_damage_display": false
        }
    ],
    "tags": [
        "ultimate"
    ],
    "damage_types": []
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> The Dark Urge is eligible to start in all adventures, even if the Patron, Variant, or other restrictions would say otherwise. He also does not interact with any Champion abilities or variant effects that are based on age.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1869,
    "flavour_text": "",
    "description": {
        "desc": "The Dark Urge is eligible to start in all adventures, even if the Patron, Variant, or other restrictions would say otherwise. He also does not interact with any Champion abilities or variant effects that are based on age."
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
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**The Urge** (Guess)
> Each time the Dark Urge defeats an enemy, he gains a Murder stack. The Dark Urge increases his damage by 0.1% for each Murder stack he has. Stacks persist between adventures.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1870,
    "flavour_text": "",
    "description": {
        "desc": "Each time the Dark Urge defeats an enemy, he gains a Murder stack. The Dark Urge increases his damage by $(not_buffed amount)% for each Murder stack he has. Stacks persist between adventures."
    },
    "effect_keys": [
        {
            "effect_string": "hero_dps_multiplier_mult,0.1",
            "stack_title": "Total Murder Stacks",
            "max_stacks": 4000000000,
            "stacks_multiply": false,
            "desc_forced_order": 1,
            "show_bonus": true,
            "stacks_on_trigger": "owner_kill"
        },
        {
            "effect_string": "stacks_data_binder_safe,0,the_dark_urge_murder_stacks",
            "is_instanced_stat": false,
            "use_stat_defs": true
        }
    ],
    "requirements": "",
    "graphic_id": 22531,
    "large_graphic_id": 22528,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ceremorphosis** (Guess)
> Your formation gains one Ceremorphosis stack due to the mind flayer tadpole in the Dark Urge's brain. The Dark Urge increases his damage by 100% for each Ceremorphosis stack, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability might be prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1871,
    "flavour_text": "",
    "description": {
        "desc": "Your formation gains one Ceremorphosis stack due to the mind flayer tadpole in the Dark Urge's brain. The Dark Urge increases his damage by $(amount)% for each Ceremorphosis stack, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack_amount,100"
        },
        {
            "off_when_benched": true,
            "effect_string": "hero_dps_multiplier_mult,0",
            "amount_expr": "upgrade_amount(14380,0)",
            "stack_func": "per_ceremorphosis_stacks",
            "amount_func": "mult",
            "stacks_multiply": true,
            "show_bonus": true,
            "stack_title": "Total Ceremorphosis Stacks",
            "total_title": "Total Bonus",
            "desc_forced_order": 2,
            "amount_updated_listeners": [
                "upgrade_unlocked",
                "slot_changed",
                "feat_changed"
            ]
        },
        {
            "off_when_benched": true,
            "outgoing_buffs": false,
            "effect_string": "dark_urge_ceremorphosis_stacks,1",
            "manual_stacking": true,
            "stacks_multiply": false,
            "show_stacks": true,
            "stack_title": "The Dark Urge's Ceremorphosis Stacks",
            "desc_forced_order": 1
        }
    ],
    "requirements": "",
    "graphic_id": 22529,
    "large_graphic_id": 22526,
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
**Living on the Edge** (Guess)
> The Dark Urge has 6 Outcast stacks, minus 1 stack for each adjacent champion that does not have the DPS role.  The Dark Urge increases his damage by 100% for each Outcast stack, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability might be prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1872,
    "flavour_text": "",
    "description": {
        "desc": "The Dark Urge has $(max_stacks___2) Outcast stacks, minus $(stack_reduction_per_champ_mult___2) stack for each adjacent champion that does not have the DPS role.  The Dark Urge increases his damage by $(amount)% for each Outcast stack, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack_amount,100"
        },
        {
            "effect_string": "hero_dps_multiplier_mult,0",
            "amount_expr": "upgrade_amount(14381,0)",
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_targets": [
                "adj"
            ],
            "max_stacks": 6,
            "stack_reduction_per_champ_mult": 1,
            "per_hero_expr": "as_int(!HasTag(`dps`))",
            "post_process_expr": "clamp(max_stacks - (input * stack_reduction_per_champ_mult), 0, max_stacks)",
            "show_bonus": true,
            "stack_title": "Outcast Stacks",
            "amount_updated_listeners": [
                "upgrade_unlocked",
                "slot_changed",
                "feat_changed"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 22530,
    "large_graphic_id": 22527,
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
**Unknown** (Guess)
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1878,
    "flavour_text": "",
    "description": {
        "desc": ""
    },
    "effect_keys": [
        {
            "effect_string": "dark_urge_slayer_form_unused",
            "buff_indicies": [
                1,
                2
            ],
            "companion_index": 0
        },
        {
            "apply_manually": true,
            "effect_string": "change_base_attack,736"
        },
        {
            "apply_manually": true,
            "effect_string": "block_monster_damage"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
</div></div>

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Storm Sorcery** (Guess)
> The Dark Urge's Murderous Slash attack is empowered by lightning. This increases the range by 200% and deals up to 800% more damage to enemies based on how close they are to him.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1873,
    "flavour_text": "",
    "description": {
        "desc": "The Dark Urge's Murderous Slash attack is empowered by lightning. This increases the range by $(amount___2)% and deals up to $(amount___3)% more damage to enemies based on how close they are to him."
    },
    "effect_keys": [
        {
            "effect_string": "change_base_attack,739"
        },
        {
            "effect_string": "increase_aoe_radius,200,739"
        },
        {
            "effect_string": "increase_damage_by_distance,800,739"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "type": "upgrade",
        "formation_circle_icon": false,
        "owner_use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 2,
        "retain_on_slot_changed": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Draconic Bloodline** (Guess)
> The Dark Urge's damage is increased by 200% for each Dragonborn Champion in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1874,
    "flavour_text": "",
    "description": {
        "desc": "The Dark Urge's damage is increased by $(amount)% for each Dragonborn Champion in the formation, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "hero_dps_mult_per_tagged_crusader_mult,200,dragonborn"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "type": "upgrade",
        "formation_circle_icon": false,
        "spec_option_post_apply_info": "Dragonborn Champions: $num_stacks"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Divine Soul** (Guess)
> The Dark Urge increases the number of The Urge's Murder stacks he gains each time he defeats an enemy by 200%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1875,
    "flavour_text": "",
    "description": {
        "desc": "The Dark Urge increases the number of The Urge's Murder stacks he gains each time he defeats an enemy by $(amount)%."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade_effect_stacks_trigger_mult,200,14379,0"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "type": "upgrade",
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Embrace the Urge** (Guess)
> The Dark Urge unlocks the Form of the Slayer ultimate, and deals 100% more damage for each Evil Champion in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1876,
    "flavour_text": "",
    "description": {
        "desc": "The Dark Urge unlocks the Form of the Slayer ultimate, and deals $(not_buffed amount___2)% more damage for each Evil Champion in the formation, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "set_ultimate_attack,737"
        },
        {
            "effect_string": "hero_dps_mult_per_tagged_crusader_mult,100,evil"
        },
        {
            "effect_string": "dark_urge_slayer_form",
            "buff_indicies": [
                3,
                4
            ],
            "companion_index": 0
        },
        {
            "apply_manually": true,
            "effect_string": "change_base_attack,736"
        },
        {
            "apply_manually": true,
            "effect_string": "block_monster_damage"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "type": "upgrade",
        "formation_circle_icon": false,
        "owner_use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 1,
        "retain_on_slot_changed": true,
        "spec_option_post_apply_info": "Evil Champions: $num_stacks___2"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Resist the Urge** (Guess)
> The Dark Urge's alignment becomes Lawful Good, he unlocks the Wither's Resurrection ultimate, and deals 100% more damage for each Good Champion in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1877,
    "flavour_text": "",
    "description": {
        "desc": "The Dark Urge's alignment becomes Lawful Good, he unlocks the Wither's Resurrection ultimate, and deals $(not_buffed amount___2)% more damage for each Good Champion in the formation, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "set_ultimate_attack,738"
        },
        {
            "effect_string": "hero_dps_mult_per_tagged_crusader_mult,100,good"
        },
        {
            "effect_string": "dark_urge_withers_resurrection",
            "buff_indicies": [
                3
            ],
            "companion_index": 1
        },
        {
            "apply_manually": true,
            "effect_string": "block_monster_damage",
            "targets": [
                "all_slots"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "type": "upgrade",
        "formation_circle_icon": false,
        "owner_use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 1,
        "retain_on_slot_changed": true,
        "spec_option_post_apply_info": "Good Champions: $num_stacks___2"
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
            <span class="itemTableIcon1">![Accessories Icon](images/thedarkurge/22586.png)</span><span class="itemTableIcon2">![Accessories Icon](images/thedarkurge/22586.png)</span><span class="itemTableIcon3">![Accessories Icon](images/thedarkurge/22587.png)</span><span class="itemTableIcon4">![Accessories Icon](images/thedarkurge/22588.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Accessories
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Armor Icon](images/thedarkurge/22589.png)</span><span class="itemTableIcon2">![Armor Icon](images/thedarkurge/22589.png)</span><span class="itemTableIcon3">![Armor Icon](images/thedarkurge/22590.png)</span><span class="itemTableIcon4">![Armor Icon](images/thedarkurge/22591.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Armor
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Brain Surgery Stuff Icon](images/thedarkurge/22592.png)</span><span class="itemTableIcon2">![Brain Surgery Stuff Icon](images/thedarkurge/22592.png)</span><span class="itemTableIcon3">![Brain Surgery Stuff Icon](images/thedarkurge/22593.png)</span><span class="itemTableIcon4">![Brain Surgery Stuff Icon](images/thedarkurge/22594.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Brain Surgery Stuff
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Dagger Icon](images/thedarkurge/22595.png)</span><span class="itemTableIcon2">![Dagger Icon](images/thedarkurge/22595.png)</span><span class="itemTableIcon3">![Dagger Icon](images/thedarkurge/22596.png)</span><span class="itemTableIcon4">![Dagger Icon](images/thedarkurge/22597.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Dagger
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Memories Icon](images/thedarkurge/22598.png)</span><span class="itemTableIcon2">![Memories Icon](images/thedarkurge/22598.png)</span><span class="itemTableIcon3">![Memories Icon](images/thedarkurge/22599.png)</span><span class="itemTableIcon4">![Memories Icon](images/thedarkurge/22600.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Memories
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Trophies Icon](images/thedarkurge/22601.png)</span><span class="itemTableIcon2">![Trophies Icon](images/thedarkurge/22601.png)</span><span class="itemTableIcon3">![Trophies Icon](images/thedarkurge/22602.png)</span><span class="itemTableIcon4">![Trophies Icon](images/thedarkurge/22603.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Trophies
        </span>
    </span>
</span>

# Feats

Unknown.

# Legendaries

Unknown.

# Other Champion Images

<span class="championImagesColumn">
    <span class="championImagesRow">
        <span class="championImagesChests">
            ![The Dark Urge Gold Chest Icon](images/thedarkurge/chest_gold.png)Gold Chest Icon
        </span>
        <span class="championImagesChests">
            ![The Dark Urge Silver Chest Icon](images/thedarkurge/chest_silver.png)Silver Chest Icon
        </span>
    </span>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*