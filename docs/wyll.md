[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsImage">
        ![PC Portrait for Wyll](images/wyll/portrait.png)Portait
    </span>
    <span class="championPortraitsImage">
        ![Model GIF of Wyll](images/wyll/model.gif)Base Model
    </span>
    <span class="championPortraitsImage">
        ![Alternate Model GIF of Wyll: Mizora](images/wyll/model-mizora.gif)Mizora Model
    </span>
</span>

# Wyll

The son of Grand Duke Ulder Ravengard, Wyll observed many of the political inner workings of Baldur's Gate while growing up. His mother died in childbirth, and he spent a largely happy childhood being trained by his father, who came from a working-class background and taught Wyll practical skills, including swordplay.

[Wyll - Baldur's Gate 3 Wiki](https://bg3.wiki/wiki/Wyll)

# Basic Information

Wyll will be the new champion in the Wintershield event on 20 December 2023.

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
            <span style="margin-left:8px;">Warlock (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Roles**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Support (Guess)</span>
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
            <span style="margin-left:8px;">Absolute Adversaries (Guess)</span>
        </span>
    </span>
</span>

# Formation

<span class="formationBorder">
    ![Formation Layout](images/wyll/formation.png)
</span>

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Blade & Blast** (Melee and Magic)
> Wyll stabs the closest foe, then casts Eldritch Blast on the lowest health enemy.  
> Cooldown: 5s (Cap 1.25s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 708,
    "name": "Blade & Blast",
    "description": "Wyll stabs the closest foe, then casts Eldritch Blast on the lowest health enemy.",
    "long_description": "",
    "graphic_id": 0,
    "target": "front",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 5,
    "animations": [
        {
            "type": "melee_attack",
            "special_melee": "wyll",
            "target_offset": [
                -200,
                0
            ],
            "seq_chargeloop": 1,
            "attack_sounds": {
                "melee": 179,
                "eb": 184
            }
        }
    ],
    "tags": [
        "melee",
        "ranged"
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
**Ultimate Attack: Mizora**
> Wyll's patron Mizora appears behind him for 15 seconds, increasing his damage and attack rate for the duration.  
> Cooldown: 400s (Cap 100s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 709,
    "name": "Mizora",
    "description": "Mizora increases Wyll's damage and attack rate for 15 seconds.",
    "long_description": "Wyll's patron Mizora appears behind him for 15 seconds, increasing his damage and attack rate for the duration.",
    "graphic_id": 21729,
    "target": "none",
    "num_targets": 0,
    "aoe_radius": 0,
    "damage_modifier": 0.03,
    "cooldown": 400,
    "animations": [
        {
            "type": "ultimate_attack",
            "ultimate": "wyll",
            "no_damage_display": true
        }
    ],
    "tags": [
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

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Bravado** (Guess)
> Wyll increases the damage of all Champions that belong to the most represented race, class, or affiliation(s) in the formation by 100%. If there is a tie, all tied groups gain the buff, and Champions who are part of several groups can gain multiple stacks of the buff (up to a max of 4 stacks), stacking multiplicatively. Buffs apply to the pre-stack value.
>  
> - Most Represented
> - Race: `$(most_common_race)`
> - Class: `$(most_common_class)`
> - Affiliation: .

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability might be prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1792,
    "flavour_text": "",
    "description": {
        "desc": "Wyll increases the damage of all Champions that belong to the most represented race, class, or affiliation(s) in the formation by $(amount)%. If there is a tie, all tied groups gain the buff, and Champions who are part of several groups can gain multiple stacks of the buff (up to a max of $(max_stacks___2) stacks), stacking multiplicatively. Buffs apply to the pre-stack value.",
        "post": {
            "conditions": [
                {
                    "condition": "not static_desc",
                    "desc": "^^Most Represented^Race: $(most_common_race)^Class: $(most_common_class)^Affiliation: $(most_common_affiliation)"
                }
            ]
        }
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack_amount,100",
            "skip_effect_key_desc": true
        },
        {
            "off_when_benched": true,
            "effect_string": "hero_dps_multiplier_mult,0",
            "amount_expr": "upgrade_amount(13429,0)",
            "targets": [
                "all"
            ],
            "show_stacks": true,
            "show_stats_on_owner": false,
            "show_stats_on_receiver": true,
            "show_bonus_on_receiver_only": true,
            "amount_func": "mult",
            "max_stacks": 4,
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "get_num_most_common_affiliations + get_num_most_common_races + get_num_most_common_classes",
            "post_process_expr": "min(input,max_stacks)",
            "per_hero_targets": [
                "effect_key_slot"
            ],
            "amount_updated_listeners": [
                "slot_changed",
                "feat_changed"
            ],
            "use_computed_amount_for_description": true
        }
    ],
    "requirements": "",
    "graphic_id": 21724,
    "properties": {
        "is_formation_ability": true,
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
**Ceremorphosis** (Guess)
> Your formation gains one Ceremorphosis stack due to the mind flayer tadpole in Wyll's brain. Wyll increases the effect of `$(upgrade_name id___2: 13429)` by 100% for each Ceremorphosis stack, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability might be prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1793,
    "flavour_text": "",
    "description": {
        "desc": "Your formation gains one Ceremorphosis stack due to the mind flayer tadpole in Wyll's brain. Wyll increases the effect of $(upgrade_name id___2) by $(amount)% for each Ceremorphosis stack, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack_amount,100"
        },
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,0,13429",
            "amount_expr": "upgrade_amount(13430,0)",
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
            "effect_string": "wyll_ceremorphosis_stacks,1",
            "manual_stacking": true,
            "stacks_multiply": false,
            "show_stacks": true,
            "stack_title": "Wyll Ceremorphosis Stacks",
            "desc_forced_order": 1
        }
    ],
    "requirements": "",
    "graphic_id": 21723,
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
**Folk Hero** (Guess)
> $(Wylls_favored_foe_list_and fiend) are Wyll's Favored Foes. All Champions deal 400% more damage against Wyll's Favored Foes.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1794,
    "flavour_text": "",
    "description": {
        "desc": "$(sources_favored_foe_list_and fiend) are Wyll's Favored Foes. All Champions deal $(amount)% more damage against Wyll's Favored Foes."
    },
    "effect_keys": [
        {
            "effect_string": "increase_damage_against_monster,400",
            "monster_is_favored_foe_of_effect_owner": true,
            "targets": [
                "all"
            ],
            "off_when_benched": true,
            "override_key_desc": "$source does $amount% more damage against Wyll's Favored Foes"
        },
        {
            "off_when_benched": true,
            "effect_string": "favored_foe,fiend"
        }
    ],
    "requirements": "",
    "graphic_id": 21725,
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
**Heartless Contract** (Guess)
> Each time an enemy or distraction is defeated, Wyll increases the effect of `$(upgrade_name id: 13429)` by 25%, stacking multiplicatively up to 10 times, until the area changes.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1795,
    "flavour_text": "",
    "description": {
        "desc": "Each time an enemy or distraction is defeated, Wyll increases the effect of $(upgrade_name id) by $(not_buffed amount)%, stacking multiplicatively up to $(max_stacks) times, until the area changes."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,25,13429",
            "show_bonus": true,
            "stacks_multiply": true,
            "max_stacks": 10,
            "more_triggers": [
                {
                    "trigger": "monster_killed",
                    "action": {
                        "type": "add_stack"
                    }
                },
                {
                    "trigger": "distraction_clicked",
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
    "graphic_id": 21722,
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
**Unknown** (Guess)
> Constructs are now one of Wyll's Favored Foes.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1846,
    "flavour_text": "",
    "description": {
        "desc": "Constructs are now one of Wyll's Favored Foes."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "favored_foe,construct"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> Undead are now one of Wyll's Favored Foes.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1847,
    "flavour_text": "",
    "description": {
        "desc": "Undead are now one of Wyll's Favored Foes."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "favored_foe,undead"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": false
    }
}
</pre>
</p>
</details>
</div></div>

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Pact of the Blade** (Guess)
> Wyll increases the effect of 13429},{ by 200% on Champions with a Melee base attack.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1796,
    "flavour_text": "",
    "description": {
        "desc": "Wyll increases the effect of $(upgrade_name upgrade_id) by $(amount)% on Champions with a Melee base attack."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "buff_incoming_upgrade,200,13429",
            "optional_effect_index": 1,
            "targets": [
                "all"
            ],
            "filter_targets": [
                {
                    "type": "affected_by_upgrade",
                    "upgrade_id": 13429
                },
                {
                    "type": "attack_type",
                    "attack": "melee"
                }
            ],
            "amount_updated_listeners": [
                "slot_changed",
                "attack_changed"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
        "spec_option_post_apply_info": "Melee Champions: $num_targets"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Pact of the Chain** (Guess)
> Wyll increases the effect of Folk Hero by 10% for each Familiar assigned to his party, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1797,
    "flavour_text": "",
    "description": {
        "desc": "Wyll increases the effect of Folk Hero by $(not_buffed amount)% for each Familiar assigned to his party, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,10,13429",
            "stack_func": "per_familiar_in_play",
            "amount_func": "mult",
            "stacks_multiply": true,
            "show_bonus": true,
            "amount_updated_listeners": [
                "familiar_changed"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": false,
        "spec_option_post_apply_info": "Assigned Familiars: $num_stacks"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Pact of the Tome** (Guess)
> Wyll increases the effect of Folk Hero by 25% for each Champion in the formation with a Magic base attack, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1798,
    "flavour_text": "",
    "description": {
        "desc": "Wyll increases the effect of Folk Hero by $(not_buffed amount)% for each Champion in the formation with a Magic base attack, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,25,13429",
            "amount_func": "mult",
            "show_bonus": true,
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "has_base_attack_dmg_type_magic",
            "per_hero_targets": [
                "all"
            ],
            "amount_updated_listeners": [
                "slot_changed",
                "feat_changed",
                "attack_changed"
            ],
            "use_computed_amount_for_description": true
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": false,
        "spec_option_post_apply_info": "Magic Champions: $num_stacks"
    }
}
</pre>
</p>
</details>
</div></div>

# Items

<span class="itemTableColumn">
    <span class="itemTableRowHeader">
        <span class="itemTableIcon" style="align-items:center;">
            <span style="margin-left:8px;">**Icons**</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">**Name**</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Armor Icon](images/wyll/21742.png)</span><span class="itemTableIcon2">![Armor Icon](images/wyll/21742.png)</span><span class="itemTableIcon3">![Armor Icon](images/wyll/21743.png)</span><span class="itemTableIcon4">![Armor Icon](images/wyll/21744.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Armor</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Blades Icon](images/wyll/21745.png)</span><span class="itemTableIcon2">![Blades Icon](images/wyll/21745.png)</span><span class="itemTableIcon3">![Blades Icon](images/wyll/21746.png)</span><span class="itemTableIcon4">![Blades Icon](images/wyll/21747.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Blades</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Camp Comforts Icon](images/wyll/21748.png)</span><span class="itemTableIcon2">![Camp Comforts Icon](images/wyll/21748.png)</span><span class="itemTableIcon3">![Camp Comforts Icon](images/wyll/21749.png)</span><span class="itemTableIcon4">![Camp Comforts Icon](images/wyll/21750.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Camp Comforts</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Fiend Clues Icon](images/wyll/21751.png)</span><span class="itemTableIcon2">![Fiend Clues Icon](images/wyll/21751.png)</span><span class="itemTableIcon3">![Fiend Clues Icon](images/wyll/21752.png)</span><span class="itemTableIcon4">![Fiend Clues Icon](images/wyll/21753.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Fiend Clues</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Folk Hero Stuff Icon](images/wyll/21754.png)</span><span class="itemTableIcon2">![Folk Hero Stuff Icon](images/wyll/21754.png)</span><span class="itemTableIcon3">![Folk Hero Stuff Icon](images/wyll/21755.png)</span><span class="itemTableIcon4">![Folk Hero Stuff Icon](images/wyll/21756.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Folk Hero Stuff</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Pact Items Icon](images/wyll/21757.png)</span><span class="itemTableIcon2">![Pact Items Icon](images/wyll/21757.png)</span><span class="itemTableIcon3">![Pact Items Icon](images/wyll/21758.png)</span><span class="itemTableIcon4">![Pact Items Icon](images/wyll/21759.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Pact Items</span>
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
        <span class="championImagesPortrait">
            ![Wyll Console Portrait](images/wyll/console.png)Console Portait
        </span>
    </span>
    <span class="championImagesRow">
        <span class="championImagesChests">
            ![Wyll Gold Chest Icon](images/wyll/chest_gold.png)Gold Chest Icon
        </span>
        <span class="championImagesChests">
            ![Wyll Silver Chest Icon](images/wyll/chest_silver.png)Silver Chest Icon
        </span>
    </span>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*