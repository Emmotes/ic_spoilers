[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Farideh](images/farideh/portrait.png)
        </span>
        <span>
        Portrait
        </span>
    </span>
</span>

# Farideh

Abandoned as an infant and adopted by an outcast dragonborn warrior, Farideh grew to adulthood acutely aware of the drawbacks of being a tiefling. While those from the Nine Hells do their utmost to corrupt her, Farideh isn't interested in power so much as defending the world from demons, the undead, and any other villains trying to bring trouble or drag her friends and family into danger.

# Changes

Farideh will be a reworked champion in the Liars' Night event and delayed until 8 October 2025.

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Attacks

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ultimate: Infernal Aspect** (Guess)
> Farideh taps into her infernal bloodline, berserking enemies and damaging them.  
> Cooldown: 450s (Cap 112.5s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 903,
    "name": "Infernal Aspect",
    "description": "Farideh taps into her infernal bloodline, causing enemies to move faster and attack more often, but deal less damage, while also damaging them",
    "long_description": "Farideh taps into her infernal bloodline, berserking enemies and damaging them.",
    "graphic_id": 4109,
    "target": "none",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 0.03,
    "cooldown": 450,
    "animations": [
        {
            "type": "farideh_ultimate",
            "tooltip_damage_override": "farideh_ult",
            "farideh_effect": {
                "effect_string": "farideh_ultimate,100",
                "for_time": 15
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
**Hellish Rebuke** (Guess)
> Enemies that attack any Champion in the formation trigger Farideh's Hellish Rebuke. The enemy is surrounded by green flames for 5 seconds and immediately takes 5 seconds worth of BUD damage.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2462,
    "flavour_text": "",
    "description": {
        "desc": "Enemies that attack any Champion in the formation trigger Farideh's Hellish Rebuke. The enemy is surrounded by green flames for $seconds_worth_of_bud seconds and immediately takes $seconds_worth_of_bud seconds worth of BUD damage."
    },
    "effect_keys": [
        {
            "effect_string": "return_bud_damage_when_hit,5",
            "off_when_benched": true,
            "targets": [
                "all"
            ],
            "projectile": "hellish_rebuke",
            "damage_over_time": {
                "percent": 0,
                "time": 5,
                "tick_time": 1,
                "damage_is_additional": false,
                "pop_damage": false,
                "graphic": {
                    "active_graphic_id": 27523,
                    "active_graphic_y": -50,
                    "overlay_play_mode": "always",
                    "active_graphic_fixed_sequence": 0
                }
            },
            "add_monster_hit_effect": {
                "effect_string": "farideh_hellish_rebuked,100",
                "for_time": 5
            },
            "broadcast_trigger": "farideh_hellish_rebuke_trigger"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "use_outgoing_description": true,
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
**Chosen of Asmodeus** (Guess)
> Whenever Farideh's Hellish Rebuke triggers, Farideh's damage is increased by 100%. This stacks multiplicatively up to 25 times, and the stacks reset when changing areas.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2463,
    "flavour_text": "",
    "description": {
        "desc": "Whenever Farideh's Hellish Rebuke triggers, Farideh's damage is increased by $amount%. This stacks multiplicatively up to $max_stacks___2 times, and the stacks reset when changing areas."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,100",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "hero_dps_multiplier_mult,100",
            "amount_expr": "upgrade_amount(17836,0)",
            "off_when_benched": true,
            "stacks_on_trigger": "on_broadcast_stacks,farideh_hellish_rebuke_trigger",
            "more_triggers": [
                {
                    "trigger": "area_changed",
                    "action": {
                        "type": "reset"
                    }
                }
            ],
            "max_stacks": 25,
            "stacks_multiply": true,
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
**Pact Family** (Guess)
> Farideh's damage is increased by 100% for each Tiefling Champion in the formation, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2464,
    "flavour_text": "",
    "description": {
        "desc": "Farideh's damage is increased by $amount% for each Tiefling Champion in the formation, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,100",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "hero_dps_multiplier_mult,100",
            "amount_expr": "upgrade_amount(17837,0)",
            "off_when_benched": true,
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasTag(`tiefling`)",
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
**Unknown** (Guess)
> Increase the post-stack effect of Pact Family by 500% when Havilar is in the formation. Additionally, whenever Havilar sacrifices her Imps, the stack cap of Chosen of Asmodeus is increased by 2, stacking up to 5 times (10 additional stacks total).
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2465,
    "flavour_text": "",
    "description": {
        "desc": "Increase the post-stack effect of Pact Family by $(not_buffed amount)% when Havilar is in the formation. Additionally, whenever Havilar sacrifices her Imps, the stack cap of Chosen of Asmodeus is increased by $(not_buffed amount___2), stacking up to $max_stacks___2 times ($total_additional_stacks_desc additional stacks total)."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,500,17837,1",
            "total_additional_stacks_desc": 10
        },
        {
            "effect_string": "buff_upgrade_max_stacks_add,2,17836",
            "stacks_on_trigger": "on_broadcast_stacks,havilar_imp_sacrifice_trigger",
            "more_triggers": [
                {
                    "trigger": "area_changed",
                    "action": {
                        "type": "reset"
                    }
                }
            ],
            "max_stacks": 5,
            "stacks_multiply": false,
            "show_bonus": true,
            "current_value_bonus_desc": "Total Bonus: $(bonus) Additional Stacks Cap"
        }
    ],
    "requirements": [
        {
            "requirement": "hero_in_formation",
            "target_hero_id": 56
        }
    ],
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
**Specialisation: Daughters of Mehen** (Guess)
> Pact Family now also gains a stack for each Dragonborn Champion in the formation, and its post-stack effect is increased by 400%. Chosen of Asmodeus stacks are halved when changing areas if Mehen is in the formation, rather than resetting to 0.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2466,
    "flavour_text": "",
    "description": {
        "desc": "Pact Family now also gains a stack for each Dragonborn Champion in the formation, and its post-stack effect is increased by $(not_buffed amount___2)%. Chosen of Asmodeus stacks are halved when changing areas if Mehen is in the formation, rather than resetting to 0."
    },
    "effect_keys": [
        {
            "effect_string": "change_upgrade_data,17837,1",
            "data": {
                "per_hero_expr": "HasTag(`tiefling`) || HasTag(`dragonborn`)"
            }
        },
        {
            "effect_string": "buff_upgrade,400,17837,1"
        },
        {
            "effect_string": "change_upgrade_data,17836,1",
            "targets": [
                "all"
            ],
            "filter_targets": [
                {
                    "type": "hero_expr",
                    "hero_expr": "hero_id == 80"
                }
            ],
            "data": {
                "more_triggers": [
                    {
                        "trigger": "area_changed",
                        "action": {
                            "type": "reduce_percent",
                            "percent": 50
                        }
                    }
                ]
            }
        },
        {
            "effect_string": "do_nothing",
            "off_when_benched": true,
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasTag(`dragonborn`)"
        }
    ],
    "requirements": "",
    "graphic_id": 27505,
    "large_graphic_id": 27505,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "show_incoming": false,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 1,
        "spec_option_post_apply_info": "Dragonborn Champions: $num_stacks___4"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Fury of Asmodeus** (Guess)
> Farideh gains the Debuff role, and whenever Chosen of Asmodeus is at more than 10 stacks, Farideh deals 100% more damage against enemies currently affected by Hellish Rebuke for each stack above 10 she has, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2467,
    "flavour_text": "",
    "description": {
        "desc": "Farideh gains the Debuff role, and whenever Chosen of Asmodeus is at more than $stack_threshold___2 stacks, Farideh deals $(not_buffed amount___2)% more damage against enemies currently affected by Hellish Rebuke for each stack above $stack_threshold___2 she has, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "add_hero_tags,0,debuff"
        },
        {
            "effect_string": "increase_damage_against_monster,100",
            "monster_has_effect_key": "farideh_hellish_rebuked",
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "stack_threshold": 10,
            "post_process_expr": "max(0, GetUpgradeStacks(17836, 1) - stack_threshold)",
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 27506,
    "large_graphic_id": 27506,
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
**Specialisation: Pact with Lorcan** (Guess)
> Farideh gains the Hunter role, Fiends become her favored foe, and the effect of Hellish Rebuke is increased by 200% on all Fiends. By sheer dumb luck, each wave of enemies in non-boss areas has a 50% chance to spawn 1-2 Fiends, and all bosses now count as demonic Fiends for the purposes of all abilities that care about such things.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2468,
    "flavour_text": "",
    "description": {
        "desc": "Farideh gains the Hunter role, Fiends become her favored foe, and the effect of Hellish Rebuke is increased by $(not_buffed amount___3)% on all Fiends. By sheer dumb luck, each wave of enemies in non-boss areas has a $(not_buffed amount___4)% chance to spawn 1-2 Fiends, and all bosses now count as demonic Fiends for the purposes of all abilities that care about such things."
    },
    "effect_keys": [
        {
            "effect_string": "add_hero_tags,0,hunter"
        },
        {
            "effect_string": "favored_foe,fiend"
        },
        {
            "effect_string": "buff_upgrade,200,17835"
        },
        {
            "effect_string": "spawn_additional_monsters,50",
            "off_when_benched": true,
            "monster_ids": [
                778,
                779,
                740,
                1101,
                1102,
                1103,
                1109,
                1110,
                1111
            ],
            "spawn_count_range": [
                1,
                2
            ],
            "non_boss_areas": true,
            "boss_areas": false
        }
    ],
    "requirements": "",
    "graphic_id": 27507,
    "large_graphic_id": 27507,
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

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unlock Adventure: The Bandit's Harvest (Farideh)** (Complete Area 50)
> Bandits are attempting to pilfer the harvest during Highharvestide and must be stopped.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Asmodeus is Watching Icon](images/farideh/4102.png) **Variant 1: Asmodeus is Watching** (Complete Area 75)
> Asmodeus Cultists spawn randomly with each wave. These extra enemies do not drop any gold.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![It's Quite A Puzzle Icon](images/farideh/4103.png) **Variant 2: It's Quite A Puzzle** (Complete Area 125)
> Only Champions with an INT score of 12 or higher can partake in this confusing adventure
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Time to Step Up Icon](images/farideh/4104.png) **Variant 3: Time to Step Up** (Complete Area 175)
> Only Farideh can cause damage (through her normal attack, ultimate attack, and Hellish Rebuke) Other Champions can still provide formation buffs and will attack, but will do no damage (also ultimate attacks will do no damage, but secondary effects will work)
</div></div>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Farideh" fill="#aaa" data-formationName="Farideh" data-campaignName="Highharvestide" width="279" height="120"><circle cx="135" cy="25" r="15"/><circle cx="135" cy="65" r="15"/><circle cx="135" cy="105" r="15"/><circle cx="95" cy="45" r="15"/><circle cx="95" cy="85" r="15"/><circle cx="55" cy="25" r="15"/><circle cx="55" cy="65" r="15"/><circle cx="55" cy="105" r="15"/><circle cx="15" cy="45" r="15"/><circle cx="15" cy="85" r="15"/><text x="165" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Farideh</text><text x="165" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Highharvestide</text></svg>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*