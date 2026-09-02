[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Morte](images/morte/portrait.png)
        </span>
        <span>
            Portrait
        </span>
    </span>
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![Model WebP of Morte](images/morte/model.webp)
        </span>
        <span>
            Model
        </span>
    </span>
</span>

# Mortimer Rictusgrin

[Morte - Fandom Wiki](https://forgottenrealms.fandom.com/wiki/Morte){:target="_blank"}

# Basic Information

Mortimer Rictusgrin will be a new champion in the Feast of the Moon event on 4 November 2026.

<span class="champStatsTableGridSmall">
  <span>**Seat**:</span>
  <span>Unknown</span>
  <span>**Species**:</span>
  <span>Unknown</span>
  <span>**Class**:</span>
  <span>Unknown</span>
  <span>**Roles**:</span>
  <span>Support / Debuff (Guess)</span>
  <span>**Age**:</span>
  <span>Unknown</span>
  <span>**Gender**:</span>
  <span>Male (Guess)</span>
  <span>**Alignment**:</span>
  <span>Unknown</span>
  <span>**Affiliation**:</span>
  <span>Unknown</span>
</span>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Morte" fill="#aaa" data-formationName="Morte" data-campaignName="Feast of the Moon" width="338" height="120"><circle cx="175" cy="25" r="15"/><circle cx="175" cy="105" r="15"/><circle cx="135" cy="45" r="15"/><circle cx="135" cy="85" r="15"/><circle cx="95" cy="25" r="15"/><circle cx="95" cy="65" r="15"/><circle cx="55" cy="45" r="15"/><circle cx="55" cy="85" r="15"/><circle cx="15" cy="25" r="15"/><circle cx="15" cy="105" r="15"/><text x="205" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Morte</text><text x="205" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Feast of the Moon</text></svg>
</span>

# Attacks

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Bite** (Melee)
> Morte floats out and bites a random enemy.  
> Cooldown: 6s (Cap 1.5s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1007,
    "name": "Bite",
    "description": "Morte swiftly floats over to bite a random enemy.",
    "long_description": "Morte floats out and bites a random enemy.",
    "graphic_id": 0,
    "target": "random",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 6,
    "animations": [
        {
            "type": "melee_attack",
            "target_offset_x": -34,
            "damage_frame": 2
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
**Base Attack: Helpful Encouragement** (Melee)
> Morte floats over to your BUD-setting Champion, resets their base attack cooldown, and increases the damage of their next attack.  
> Cooldown: 6s (Cap 1.5s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1009,
    "name": "Helpful Encouragement",
    "description": "Morte floats over to your BUD-setting Champions and 'encourages' them to attack faster and hit harder.",
    "long_description": "Morte floats over to your BUD-setting Champion, resets their base attack cooldown, and increases the damage of their next attack.",
    "graphic_id": 0,
    "target": "none",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 6,
    "animations": [
        {
            "type": "melee_attack",
            "no_damage_display": true,
            "animation_sequence_name": "idle"
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
**Ultimate Attack: Skull Mob** (Guess)
> Morte summons an avalanche of his friends from the Bones of the Night to come and take a bite out of all enemies.  
> Cooldown: 360s (Cap 90s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1008,
    "name": "Skull Mob",
    "description": "Morte summons an avalanche of his friends from the Bones of the Night to come and take a bite out of all enemies.",
    "long_description": "Morte summons an avalanche of his friends from the Bones of the Night to come and take a bite out of all enemies.",
    "graphic_id": 31400,
    "target": "all",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 0.03,
    "cooldown": 360,
    "animations": [
        {
            "type": "melee_attack",
            "target_offset_x": -34,
            "damage_frame": 2
        }
    ],
    "tags": [
        "melee",
        "ultimate"
    ],
    "damage_types": [
        "melee"
    ]
}
</pre>
</p>
</details>
</div></div>

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> As a talking human skull, Morte is both Small and Undead, and counts as 'dead' for the purposes of effects that care about dead Champions, but 'alive' for all other purposes. In addition, Morte can be used in any Turn of Fortune's Wheel campaign adventure or variant, even if he would not normally be available to be used due to variant or patron restrictions.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2972,
    "flavour_text": "",
    "description": {
        "desc": "As a talking human skull, Morte is both Small and Undead, and counts as 'dead' for the purposes of effects that care about dead Champions, but 'alive' for all other purposes. In addition, Morte can be used in any Turn of Fortune's Wheel campaign adventure or variant, even if he would not normally be available to be used due to variant or patron restrictions."
    },
    "effect_keys": [
        {
            "effect_string": "do_nothing,100"
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
**Biting Wit** (Guess)
> Morte increases the damage of all Champions in the formation by 100%, increased by 100% for each Champion in the formation with the Debuff role.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2973,
    "flavour_text": "",
    "description": {
        "desc": "Morte increases the damage of all Champions in the formation by $(amount)%, increased by $amount% for each Champion in the formation with the Debuff role."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,100",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "hero_dps_multiplier_mult,0",
            "amount_expr": "upgrade_amount(20955,0)",
            "targets": [
                "all"
            ],
            "off_when_benched": true,
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasTag(`debuff`)",
            "show_bonus": true,
            "stack_title": "Debuff Champions",
            "amount_updated_listeners": [
                "slot_changed",
                "hero_tags_changed"
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
**Litany of Curses** (Guess)
> Morte causes enemies he attacks to take 100% additional damage for each Debuff affecting them (including this one), stacking multiplicatively. This can count at most 25 debuffs, does not stack itself, and lasts until the enemy dies.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2974,
    "flavour_text": "",
    "description": {
        "desc": "Morte causes enemies he attacks to take $amount% additional damage for each Debuff affecting them (including this one), stacking multiplicatively. This can count at most 25 debuffs, does not stack itself, and lasts until the enemy dies."
    },
    "effect_keys": [
        {
            "effect_string": "morte_litany_of_curses,100",
            "off_when_benched": true,
            "debuffing_attack_ids": [
                1007,
                1008
            ],
            "debuff_effects": [
                {
                    "effect_string": "increase_monster_damage_per_debuff_mult,$amount",
                    "active_graphic_id": 31533,
                    "active_graphic_y": -45,
                    "max_stacks": 25,
                    "use_collection_source": true
                },
                {
                    "effect_string": "morte_debuff"
                }
            ],
            "debuff_before_damage": true
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
**Give 'em the Laugh** (Guess)
> Morte begins every area with stacks of Evasion equal to his overwhelm point. When Morte gets attacked (including "attacks" from the variant such as objects falling from the sky or cold/weather damage), as long as he has at least 1 stack of Evasion left, he dodges the attack completely and uses up stacks_to_use stack of Evasion. Morte restores 1 stack of Evasion every second for each Debuff Champion in the formation. The number of Evasion stacks he has can not surpass his overwhelm point. If a boss or enemies are enraged, max stacks are divided by the enrage multiplier, rounded down.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2975,
    "flavour_text": "",
    "description": {
        "desc": "Morte begins every area with stacks of Evasion equal to his overwhelm point. When Morte gets attacked (including \"attacks\" from the variant such as objects falling from the sky or cold/weather damage), as long as he has at least 1 stack of Evasion left, he dodges the attack completely and uses up stacks_to_use stack of Evasion. Morte restores $stacks_to_restore stack of Evasion every second for each Debuff Champion in the formation. The number of Evasion stacks he has can not surpass his overwhelm point. If a boss or enemies are enraged, max stacks are divided by the enrage multiplier, rounded down."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "morte_give_em_the_laugh",
            "manual_stacking": true,
            "show_stacks": true,
            "start_pre_add": 0,
            "start_mult": 1,
            "start_post_add": 0,
            "stacks_to_trigger": 1,
            "stacks_to_use": 1,
            "evasion_effect": {
                "effect_string": "evade_damage"
            },
            "stacks_to_restore": 1,
            "restore_time": 1,
            "stack_func_data": {
                "target_filters": [
                    {
                        "type": "tags",
                        "tags": "debuff"
                    }
                ]
            },
            "enrage_pre_add": 0,
            "enrage_mult": 1,
            "enrage_post_add": 0,
            "broadcast_name": "morte_evasion"
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
**Don't Trust the Skull** (Guess)
> Morte gains 5 Overwhelm for each Champion in the formation who does not have the Debuff role.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2976,
    "flavour_text": "",
    "description": {
        "desc": "Morte gains $amount Overwhelm for each Champion in the formation who does not have the Debuff role."
    },
    "effect_keys": [
        {
            "effect_string": "overwhelm_start_increase,5",
            "targets": [
                "all"
            ],
            "off_when_benched": true,
            "amount_func": "add",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "!HasTag(`debuff`)",
            "show_bonus": true,
            "stack_title": "Non Debuff Champions",
            "total_title": "Total Additional Overwhelm",
            "percent_values": false,
            "amount_updated_listeners": [
                "slot_changed",
                "hero_tags_changed"
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
**Heads Up Chief** (Guess)
> When he has at least $if_amount stack of Evasion and is in the front-most column of the formation, Morte reduces the damage taken by all other Champions in the formation by 75%. Regardless of his position in the formation, if Morte has at least 40 Evasion stacks, and any Champion other than Morte is defeated, Morte instantly expends 40 Evasion stacks and revives that Champion.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2977,
    "flavour_text": "",
    "description": {
        "desc": "When he has at least $if_amount stack of Evasion and is in the front-most column of the formation, Morte reduces the damage taken by all other Champions in the formation by 75%. Regardless of his position in the formation, if Morte has at least 40 Evasion stacks, and any Champion other than Morte is defeated, Morte instantly expends 40 Evasion stacks and revives that Champion."
    },
    "effect_keys": [
        {
            "effect_string": "apply_effects_at_stacks",
            "show_description": false,
            "apply_effect_stack_amounts": [
                1
            ],
            "show_stacks": false,
            "stacks_are_bonus": false,
            "stacks_from_amount_func": "per_crusader",
            "target_filters": [
                {
                    "type": "hero_expr",
                    "per_hero_expr": "hero_id == 181 && GetHeroColumn(181) == 0"
                }
            ],
            "amount_updated_listeners": [
                "slot_changed"
            ],
            "off_when_benched": true
        },
        {
            "effect_string": "damage_reduction,75",
            "apply_manually": true,
            "off_when_benched": true,
            "targets": [
                "other"
            ],
            "amount_func": "if",
            "if_amount": 1,
            "stack_func": "upgrade_stacks",
            "stack_func_data": {
                "upgrade_id": 20957
            },
            "amount_updated_listeners": [
                "hero_killed"
            ],
            "show_stacks": true,
            "stack_title": "Current Evasion Stacks",
            "use_computed_amount_for_description": true
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
**Planar Traveler** (Guess)
> Morte increases the effect of Biting Wit by 20% for each adventure, variant, and Patron variant you have completed in the Turn of Fortune's Wheel campaign, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2978,
    "flavour_text": "",
    "description": {
        "desc": "Morte increases the effect of Biting Wit by $amount% for each adventure, variant, and Patron variant you have completed in the Turn of Fortune's Wheel campaign, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,20,20955",
            "stacks_multiply": true,
            "show_bonus": true,
            "amount_func": "mult",
            "stack_func": "get_stat",
            "stat": "FortunesWheelAdventuresCompleted",
            "ided_stat_id": 29,
            "ided_stat_handler": "CompletedAdventuresVariantsAndPatronVariants",
            "stack_title": "Turn of Fortune's Wheel Adventures Completed",
            "amount_updated_listeners": [
                "stat_changed,XaryxisAdventuresCompleted"
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

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Floating Flirt** (Guess)
> Morte increases the effect of Biting Wit by 100% for each Female or Non-Binary Champion in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2979,
    "flavour_text": "",
    "description": {
        "desc": "Morte increases the effect of Biting Wit by $amount% for each Female or Non-Binary Champion in the formation, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,100,20955",
            "stacks_multiply": true,
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasTag(`female`) || HasTag(`non_binary`)",
            "show_bonus": true,
            "stack_title": "Qualified Champions:",
            "amount_updated_listeners": [
                "slot_changed",
                "hero_tags_changed"
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
        "default_bonus_index": 0,
        "spec_option_post_apply_info": "Qualified Champions: $num_stacks"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Misfits of the Maze** (Guess)
> Morte increases the effect of Biting Wit by 100% for each Champion in the formation who is Undead or a Non-Standard Species, stacking multiplicatively. Standard species are Aasimar, Dragonborn, Dwarf, Elf, Gnome, Goliath, Halfling, Human, Orc, Tiefling, Half-Orc, and Half-Elf.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2980,
    "flavour_text": "",
    "description": {
        "desc": "Morte increases the effect of Biting Wit by $amount% for each Champion in the formation who is Undead or a Non-Standard Species, stacking multiplicatively. Standard species are Aasimar, Dragonborn, Dwarf, Elf, Gnome, Goliath, Halfling, Human, Orc, Tiefling, Half-Orc, and Half-Elf."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,100,20955",
            "stacks_multiply": true,
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasTag(`undead`) || has_non_standard_race",
            "show_bonus": true,
            "stack_title": "Qualified Champions:",
            "amount_updated_listeners": [
                "slot_changed",
                "hero_tags_changed"
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
        "default_bonus_index": 0,
        "spec_option_post_apply_info": "Qualified Champions: $num_stacks"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Cross Trade Companions** (Guess)
> Morte increases the effect of Biting Wit by 100% for each Champion in the formation who is a Rogue, Evil, or Chaotic, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2981,
    "flavour_text": "",
    "description": {
        "desc": "Morte increases the effect of Biting Wit by $amount% for each Champion in the formation who is a Rogue, Evil, or Chaotic, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,100,20955",
            "stacks_multiply": true,
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasTag(`rogue`) || HasTag(`evil`) || HasTag(`chaotic`)",
            "show_bonus": true,
            "stack_title": "Qualified Champions:",
            "amount_updated_listeners": [
                "slot_changed",
                "hero_tags_changed"
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
        "default_bonus_index": 0,
        "spec_option_post_apply_info": "Qualified Champions: $num_stacks"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**What's Eatin' You Chief** (Guess)
> Morte's base attack no longer targets enemies; instead, he zips over to your BUD-setting Champion and provides helpful encouragement, instantly resetting their base attack cooldown and increasing the damage of their next attack by 1000%. If Morte himself is the BUD-setting Champion, he gets confused and does nothing.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2982,
    "flavour_text": "",
    "description": {
        "desc": "Morte's base attack no longer targets enemies; instead, he zips over to your BUD-setting Champion and provides helpful encouragement, instantly resetting their base attack cooldown and increasing the damage of their next attack by $amount%. If Morte himself is the BUD-setting Champion, he gets confused and does nothing."
    },
    "effect_keys": [
        {
            "effect_string": "morte_whats_eatin_you_chief_handler,1000",
            "off_when_benched": true,
            "buff_effect": {
                "effect_string": "next_attack_damage_multiplier,0"
            }
        },
        {
            "effect_string": "change_base_attack,1009"
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
**Dodgy Tactics** (Guess)
> Morte requires and consumes twice as many Evasion stacks when he dodges an attack, but the base effect of Litany of Curses is increased by 10% for 20957 seconds after he does so. Does not stack, but the timer resets if he dodges again before it expires.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2983,
    "flavour_text": "",
    "description": {
        "desc": "Morte requires and consumes twice as many Evasion stacks when he dodges an attack, but the base effect of Litany of Curses is increased by $amount___3% for $time seconds after he does so. Does not stack, but the timer resets if he dodges again before it expires."
    },
    "effect_keys": [
        {
            "effect_string": "change_upgrade_data,20957",
            "off_when_benched": true,
            "data": {
                "stacks_to_use": 2
            }
        },
        {
            "effect_string": "morte_dodgy_tactics_handler",
            "off_when_benched": true,
            "buff_index": 2,
            "time": 5,
            "broadcast_name": "morte_evasion"
        },
        {
            "effect_string": "buff_upgrade,10,20956",
            "off_when_benched": true,
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
        "default_bonus_index": 2
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Laughing Skull** (Guess)
> When any Champion (including Morte) is attacked but takes no damage, Morte mocks the enemy that attacked that Champion, increasing the damage that enemy takes by 100. If Morte mocks the same enemy multiple times, the effect applies up to 10 times per enemy, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2984,
    "flavour_text": "",
    "description": {
        "desc": "When any Champion (including Morte) is attacked but takes no damage, Morte mocks the enemy that attacked that Champion, increasing the damage that enemy takes by $amount. If Morte mocks the same enemy multiple times, the effect applies up to 10 times per enemy, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "morte_laughing_skull,100",
            "off_when_benched": true,
            "debuff_effects": [
                {
                    "effect_string": "increase_monster_damage,$amount",
                    "active_graphic_id": 31544,
                    "active_graphic_y": -125,
                    "max_stacks": 10,
                    "stacks_on_reapply": true,
                    "manual_stacking": true,
                    "stacks_multiply": true,
                    "use_collection_source": true,
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

<span class="itemTableColumn">
    <span class="itemTableRowHeader">
        <span class="itemTableIcon" style="justify-content:flex-start">
            <span style="margin-left:8px;">**Icons**</span>
        </span>
        <span class="itemTableNameSmall">
            **Name**
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Lostand Found Icon](images/morte/31410.png)</span><span class="itemTableIcon2">![Lostand Found Icon](images/morte/31410.png)</span><span class="itemTableIcon3">![Lostand Found Icon](images/morte/31411.png)</span><span class="itemTableIcon4">![Lostand Found Icon](images/morte/31412.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Lostand Found
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Other Things Icon](images/morte/31413.png)</span><span class="itemTableIcon2">![Other Things Icon](images/morte/31413.png)</span><span class="itemTableIcon3">![Other Things Icon](images/morte/31414.png)</span><span class="itemTableIcon4">![Other Things Icon](images/morte/31415.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Other Things
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Readin Materials Icon](images/morte/31416.png)</span><span class="itemTableIcon2">![Readin Materials Icon](images/morte/31416.png)</span><span class="itemTableIcon3">![Readin Materials Icon](images/morte/31417.png)</span><span class="itemTableIcon4">![Readin Materials Icon](images/morte/31418.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Readin Materials
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Tattoos Icon](images/morte/31419.png)</span><span class="itemTableIcon2">![Tattoos Icon](images/morte/31419.png)</span><span class="itemTableIcon3">![Tattoos Icon](images/morte/31420.png)</span><span class="itemTableIcon4">![Tattoos Icon](images/morte/31421.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Tattoos
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Teeth Icon](images/morte/31422.png)</span><span class="itemTableIcon2">![Teeth Icon](images/morte/31422.png)</span><span class="itemTableIcon3">![Teeth Icon](images/morte/31423.png)</span><span class="itemTableIcon4">![Teeth Icon](images/morte/31424.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Teeth
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Weaponsof Friends Icon](images/morte/31425.png)</span><span class="itemTableIcon2">![Weaponsof Friends Icon](images/morte/31425.png)</span><span class="itemTableIcon3">![Weaponsof Friends Icon](images/morte/31426.png)</span><span class="itemTableIcon4">![Weaponsof Friends Icon](images/morte/31427.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Weaponsof Friends
        </span>
    </span>
</span>

# Feats

Unknown.

# Legendaries

Unknown.

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unlock Adventure: The Crypt of Legends (Morte)** (Complete Area 50)
> Pay respects to the heroes of olde during the Feast of the Moon.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Variant 1: Skittering Skulls** (Complete Area 75)
> Morte starts in the formation. He can be moved, but not removed.  
> You may only use Champions who qualify for one of Morte's specialization choices (which is a pretty broad selection)  
> These are female, non-binary, undead, non-standard species, rogues, chaotic, or evil Champions.  
> 1 Skullface Spider spawn with each wave. These enemies do not count toward quest progress or drop gold, and move 50% faster and deal 100% more damage.  
> An additional Skullface Spider spawns with each wave for every 100 areas completed.  
> <b>Getting to Know Morte:</b> Morte has a wide variety of Champions he specializes in working with. What can we say? He's pretty friendly for a talking skull.  
> 
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Variant 2: Cacophony of Curses** (Complete Area 125)
> Morte starts in the formation with Litany of Curses unlocked. He can be moved, but not removed.  
> Enemies without any debuffs on them only take 1 damage from all attacks.  
> A friend of Morte's takes up a slot in the formation. Champions adjacent to the Flaming Skull are unnerved and have their base attack cooldown increased by 3 seconds.  
> <b>Getting to Know Morte:</b> Morte causes enemies he attacks to take more damage based on the number of debuffs they currently have. Fill your formation with Debuffing Champions to take advantage of this!  
> 
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Variant 3: Dodge This, Deaders! ** (Complete Area 175)
> Morte starts in the formation with Give 'em the Laugh unlocked. He can be moved, but not removed.  
> You may only use a maximum of five Champions in your formation who do not have the Debuff role. If you have more than five, the damage of all Champions is set to 0.  
> All enemies move 300% faster and deal 40% of their target's max health with each successful hit.  
> <b>Getting to Know Morte:</b> Morte can evade attacks entirely with his Give 'em the Laugh ability. He recovers Evasion stacks faster for each Debuff Champion in the formation, but his max Evasion stacks are higher for each non-Debuff Champion.  
> 
</div></div>

# Other Champion Images

<span class="championImagesColumn">
    <span class="championImagesRow">
        <span class="championImagesPortrait">
            ![Mortimer Rictusgrin Console Portrait](images/morte/console.png)Console Portrait
        </span>
    </span>
    <span class="championImagesRow">
        <span class="championImagesChests">
            ![Mortimer Rictusgrin Gold Chest Icon](images/morte/chest_gold.png)Gold Chest Icon
        </span>
        <span class="championImagesChests">
            ![Mortimer Rictusgrin Silver Chest Icon](images/morte/chest_silver.png)Silver Chest Icon
        </span>
    </span>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*