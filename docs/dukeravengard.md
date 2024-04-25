[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsImage">
        ![PC Portrait for Duke Ravengard](images/dukeravengard/portrait.png)Portait
    </span>
    <span class="championPortraitsImage">
        ![Model GIF of Duke Ravengard](images/dukeravengard/model.gif)Model
    </span>
</span>

# Duke Ravengard

Grand Duke Ulder Ravengard is the human Supreme Marshall of the Flaming Fist, and father of Wyll. His story stretches through all three acts of Baldur's Gate 3, and he can become a camp follower late in the game.

Ulder Ravengard is a recurring character in the Forgotten Realms setting of Dungeons and Dragons, appearing in the 5e adventures:  Murder in Baldur's Gate,  The Rise of Tiamat, and  Baldur's Gate: Descent into Avernus.

[Grand Duke Ulder Ravengard - BG3 Wiki](https://bg3.wiki/wiki/Ulder_Ravengard)

# Basic Information

Duke Ravengard will be a new champion in the Dragondown event on 5 June 2024.

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
            <span style="margin-left:8px;">Fighter (Guess)</span>
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
    ![Formation Layout](images/dukeravengard/formation.png)
</span>
{% endcomment %}

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Duke's Longsword** (Melee)
> Duke Ravengard attacks the closest enemy for one hit with his longsword.  
> Cooldown: 4s (Cap 1s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 756,
    "name": "Duke's Longsword",
    "description": "Duke Ravengard attacks the closest enemy for one hit with his longsword.",
    "long_description": "",
    "graphic_id": 0,
    "target": "front",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 4,
    "animations": [
        {
            "type": "melee_attack",
            "target_offset_x": -40,
            "start_frame": 5,
            "damage_frame": 12,
            "jump_sound": 30,
            "sound_frames": {
                "2": 194
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
**Base Attack: Duke's Shield Bash** (Melee)
> Duke Ravengard attacks the closest enemy for one hit with his longsword. If he scores a critical hit, he follows-up by smashing the enemy with his shield, knocking them back a short distance.  
> Cooldown: 4s (Cap 1s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 757,
    "name": "Duke's Shield Bash",
    "description": "Duke Ravengard attacks the closest enemy for one hit with his longsword. If he scores a critical hit, he follows-up by smashing the enemy with his shield, knocking them back a short distance.",
    "long_description": "",
    "graphic_id": 0,
    "target": "front",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 4,
    "animations": [
        {
            "type": "melee_attack",
            "special_melee": "ravengard_lead_the_charge",
            "target_offset": [
                -75,
                0
            ],
            "shield_bash_effect": {
                "effect_string": "reduce_target_base_attack_cooldown_by_percent_action,100",
                "targets": [
                    "adj"
                ]
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
**Ultimate Attack: Duke's Fire Shield**
> Duke Ravengard ignites in flames for 20 seconds, damaging attacking melee enemies and increasing his damage.  
> Cooldown: 3s (Cap 0.75s)

<span style="font-size:1.2em;">ⓘ</span> *Note: Very short ultimate cooldowns are almost always for testing purposes and are likely to be increased later.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 758,
    "name": "Duke's Fire Shield",
    "description": "Duke Ravengard ignites in flames for 20 seconds, damaging attacking melee enemies and increasing his damage.",
    "long_description": "",
    "graphic_id": 23613,
    "target": "none",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 3,
    "animations": [
        {
            "type": "ultimate_attack",
            "ultimate": "duke_ravengard",
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
**Critical Teamwork** (Guess)
> Duke Ravengard's base chance to Critical Hit is 20%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1968,
    "flavour_text": "",
    "description": {
        "desc": "$source's base chance to Critical Hit is $(amount)%."
    },
    "effect_keys": [
        {
            "effect_string": "set_base_crit_chance,20"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": []
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Marshall of the Flaming Fist** (Guess)
> Duke Ravengard gains a Command stack for each Champion with a melee base attack in the formation (including himself). Each stack increases the damage of these Champions by 400%, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1969,
    "flavour_text": "",
    "description": {
        "desc": "$(source_hero) gains a Command stack for each Champion with a melee base attack in the formation (including himself). Each stack increases the damage of these Champions by $(not_buffed amount)%, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "hero_dps_multiplier_mult,400",
            "targets": [
                "all"
            ],
            "filter_targets": [
                {
                    "type": "hero_expr",
                    "hero_expr": "HasAttackDamageType(`melee`)"
                }
            ],
            "amount_func": "mult",
            "show_bonus": true,
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasAttackDamageType(`melee`)",
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
**Position of Power** (Guess)
> Duke Ravengard increases the effect of the outgoing positional formation abilities of all Champions with a melee base attack by 25% for each Command stack he has, stacking additively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1970,
    "flavour_text": "",
    "description": {
        "desc": "$(source_hero) increases the effect of the outgoing positional formation abilities of all Champions with a melee base attack by $(not_buffed amount)% for each Command stack he has, stacking additively."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "buff_positional_formation_abilities,25",
            "targets": [
                "all"
            ],
            "filter_targets": [
                {
                    "type": "hero_expr",
                    "hero_expr": "HasAttackDamageType(`melee`)"
                }
            ],
            "include_escorts": true,
            "stacks_multiply": false,
            "amount_func": "add",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasAttackDamageType(`melee`)",
            "per_hero_targets": [
                "all"
            ],
            "amount_updated_listeners": [
                "slot_changed",
                "feat_changed",
                "attack_changed"
            ],
            "show_bonus": true,
            "use_computed_amount_for_description": true,
            "override_key_desc": "Increases the effect of $target's outgoing Positional Formation Abilities by $amount%",
            "stack_title": "Command Stacks"
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

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Lead the Charge** (Guess)
> Whenever a Champion with a melee base attack gets a critical hit, increase the effect of Marshal of the Flaming Fist by 100% and additively increase the odds of all Champions in the formation getting critical hits by 1%. Both effects stack additively up to 50 times and reset when changing areas.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1971,
    "flavour_text": "",
    "description": {
        "desc": "Whenever a Champion with a melee base attack gets a critical hit, increase the effect of Marshal of the Flaming Fist by $(not_buffed amount)% and additively increase the odds of all Champions in the formation getting critical hits by $(not_buffed amount___2)%. Both effects stack additively up to 50 times and reset when changing areas."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,100,15028",
            "off_when_benched": true,
            "max_stacks": 50,
            "stack_title": "Critical Teamwork Stacks",
            "stacks_multiply": false,
            "show_bonus": true,
            "stacks_on_trigger": "on_broadcast_stacks,melee_hero_crit",
            "more_triggers": [
                {
                    "trigger": "area_changed",
                    "action": {
                        "type": "reset"
                    }
                }
            ]
        },
        {
            "effect_string": "global_buff_base_crit_chance_add,1",
            "off_when_benched": true,
            "max_stacks": 50,
            "stack_title": "Critical Teamwork Stacks",
            "stacks_multiply": false,
            "show_bonus": true,
            "stacks_on_trigger": "on_broadcast_stacks,melee_hero_crit",
            "more_triggers": [
                {
                    "trigger": "area_changed",
                    "action": {
                        "type": "reset"
                    }
                }
            ],
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "broadcast_on_trigger,melee_hero_crit,pre_target_attack_crit",
            "off_when_benched": true,
            "targets": [
                "all"
            ],
            "filter_targets": [
                {
                    "type": "hero_expr",
                    "hero_expr": "HasAttackDamageType(`melee`)"
                }
            ],
            "override_key_desc": "Each time $target deals a Critical Hit, they contribute a Critical Teamwork stack to $(source_hero)"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Legacy of Ravengard** (Guess)
> When Duke Ravengard gets a critical hit, he follows up by bashing the enemy with his shield, knocking it back a short distance. When this occurs, all melee Champions adjacent to Ulder have their base attack cooldowns immediately reset.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1972,
    "flavour_text": "",
    "description": {
        "desc": "When $(source_hero) gets a critical hit, he follows up by bashing the enemy with his shield, knocking it back a short distance. When this occurs, all melee Champions adjacent to Ulder have their base attack cooldowns immediately reset."
    },
    "effect_keys": [
        {
            "effect_string": "change_base_attack,757"
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
**Strength of Baldurs Gate** (Guess)
> Champions with a melee base attack have their crit chance additively increased by 20% and crit damage increased by 1000%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1973,
    "flavour_text": "",
    "description": {
        "desc": "Champions with a melee base attack have their crit chance additively increased by 20% and crit damage increased by 1000%."
    },
    "effect_keys": [
        {
            "effect_string": "buff_base_crit_chance_add,20",
            "targets": [
                "all"
            ],
            "filter_targets": [
                {
                    "type": "hero_expr",
                    "hero_expr": "HasAttackDamageType(`melee`)"
                }
            ]
        },
        {
            "effect_string": "buff_base_crit_damage_mult,1000",
            "targets": [
                "all"
            ],
            "filter_targets": [
                {
                    "type": "hero_expr",
                    "hero_expr": "HasAttackDamageType(`melee`)"
                }
            ]
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
            <span class="itemTableIcon1">![Armor Icon](images/dukeravengard/23497.png)</span><span class="itemTableIcon2">![Armor Icon](images/dukeravengard/23497.png)</span><span class="itemTableIcon3">![Armor Icon](images/dukeravengard/23498.png)</span><span class="itemTableIcon4">![Armor Icon](images/dukeravengard/23499.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Armor
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Elturel Links Icon](images/dukeravengard/23500.png)</span><span class="itemTableIcon2">![Elturel Links Icon](images/dukeravengard/23500.png)</span><span class="itemTableIcon3">![Elturel Links Icon](images/dukeravengard/23501.png)</span><span class="itemTableIcon4">![Elturel Links Icon](images/dukeravengard/23502.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Elturel Links
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Helm Icon](images/dukeravengard/23503.png)</span><span class="itemTableIcon2">![Helm Icon](images/dukeravengard/23503.png)</span><span class="itemTableIcon3">![Helm Icon](images/dukeravengard/23504.png)</span><span class="itemTableIcon4">![Helm Icon](images/dukeravengard/23505.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Helm
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Rank Symbol Icon](images/dukeravengard/23506.png)</span><span class="itemTableIcon2">![Rank Symbol Icon](images/dukeravengard/23506.png)</span><span class="itemTableIcon3">![Rank Symbol Icon](images/dukeravengard/23507.png)</span><span class="itemTableIcon4">![Rank Symbol Icon](images/dukeravengard/23508.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Rank Symbol
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Shield Icon](images/dukeravengard/23509.png)</span><span class="itemTableIcon2">![Shield Icon](images/dukeravengard/23509.png)</span><span class="itemTableIcon3">![Shield Icon](images/dukeravengard/23510.png)</span><span class="itemTableIcon4">![Shield Icon](images/dukeravengard/23511.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Shield
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Weapon Icon](images/dukeravengard/23512.png)</span><span class="itemTableIcon2">![Weapon Icon](images/dukeravengard/23512.png)</span><span class="itemTableIcon3">![Weapon Icon](images/dukeravengard/23513.png)</span><span class="itemTableIcon4">![Weapon Icon](images/dukeravengard/23514.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Weapon
        </span>
    </span>
</span>

# Feats

Unknown.

# Legendaries

Unknown.

# Adventures and Variants

Unknown.

# Other Champion Images

<span class="championImagesColumn">
    <span class="championImagesRow">
        <span class="championImagesChests">
            ![Duke Ravengard Gold Chest Icon](images/dukeravengard/chest_gold.png)Gold Chest Icon
        </span>
        <span class="championImagesChests">
            ![Duke Ravengard Silver Chest Icon](images/dukeravengard/chest_silver.png)Silver Chest Icon
        </span>
    </span>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*