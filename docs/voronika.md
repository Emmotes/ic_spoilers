[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsImage">
        ![PC Portrait for Voronika](images/voronika/portrait.png)Portrait
    </span>
</span>

# Voronika

A young Eladrin woman, raised to be the Queen of Koshmarr, what was meant to be an idyllic life took a dark turn on the night of her wedding. Pulled into the machinations of greater powers, she found herself in Mordent, now one of the many wandering ghosts. A person of great interest both to Azalin Rex and Strahd, she sought to negotiate her freedom from these dread domains. Her longtime companions and their newfound friends wanted the same and imbued her soul into Desmond's sword. As they traveled in search of returning her soul to her body, Voronika took matters into her own hands and used the crown of the Raven Queen to defeat Zybilna and cause the fall of Prismeer. This action drew the mists to Voronika and soon she discovered herself a new darklord in her domain of Koshmarr.

# Changes

Voronika is potentially a reworked champion in the Liars' Night event on 2 October 2024.

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Pupper Master** (Guess)
> Voronika claims the BUD-setting Champion as her Puppet. The damage of her chosen Puppet is increased by 100%. Voronika only changes her Puppet if a different Champion is the BUD-setting Champion for more than 30 seconds in a row. Voronika's Puppet gains the Black Dice Society affiliation.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2089,
    "flavour_text": "",
    "description": {
        "desc": "Voronika claims the BUD-setting Champion as her Puppet. The damage of her chosen Puppet is increased by $amount%. Voronika only changes her Puppet if a different Champion is the BUD-setting Champion for more than $puppet_change_time seconds in a row. Voronika's Puppet gains the Black Dice Society affiliation."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "voronika_puppet_master,100",
            "puppet_change_time": 30,
            "puppet_effect_id": 2101,
            "puppet_affiliation_tag": "blackdicesociety"
        }
    ],
    "requirements": "",
    "graphic_id": 24577,
    "large_graphic_id": 15537,
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
**Calculating Guidance** (Guess)
> Voronika increases the damage of all Champions in one column in front of her by 100%. Voronika's key allies are members of the Black Dice Society. The effect of this ability is increased by 100% for each key ally in the formation. This stacks additively until Voronika completes her Search for the Crown, when it changes to stack multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2090,
    "flavour_text": "",
    "description": {
        "conditions": [
            {
                "condition": "upgrade_purchased 15635",
                "desc": "Voronika increases the damage of all Champions in one column in front of her by $(not_buffed amount___2)%. Voronika's key allies are members of the Black Dice Society and Evil Champions. The effect of this ability is increased by $(not_buffed amount___2)% for each key ally in the formation. This stacks additively until Voronika completes her Search for the Crown, when it changes to stack multiplicatively."
            },
            {
                "condition": "upgrade_purchased 15636",
                "desc": "Voronika increases the damage of all Champions in one column in front of her by $(not_buffed amount___2)%. Voronika's key allies are members of the Black Dice Society and Champions who have a Favored Foe. The effect of this ability is increased by $(not_buffed amount___2)% for each key ally in the formation. This stacks additively until Voronika completes her Search for the Crown, when it changes to stack multiplicatively."
            },
            {
                "condition": "upgrade_purchased 15637",
                "desc": "Voronika increases the damage of all Champions in one column in front of her by $(not_buffed amount___2)%. Voronika's key allies are members of the Black Dice Society and Champions who have the Debuff role. The effect of this ability is increased by $(not_buffed amount___2)% for each key ally in the formation. This stacks additively until Voronika completes her Search for the Crown, when it changes to stack multiplicatively."
            },
            {
                "desc": "Voronika increases the damage of all Champions in one column in front of her by $(not_buffed amount___2)%. Voronika's key allies are members of the Black Dice Society. The effect of this ability is increased by $(not_buffed amount___2)% for each key ally in the formation. This stacks additively until Voronika completes her Search for the Crown, when it changes to stack multiplicatively."
            }
        ]
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "voronika_key_ally",
            "tag": "blackdicesociety",
            "skip_effect_key_desc": true
        },
        {
            "off_when_benched": true,
            "effect_string": "hero_dps_multiplier_mult,100",
            "amount_func": "add",
            "stack_func": "per_voronika_key_ally",
            "show_bonus": true,
            "targets": [
                "next_col"
            ],
            "amount_updated_listeners": [
                "slot_changed",
                "hero_tags_changed",
                "upgrade_unlocked",
                "feat_changed"
            ],
            "use_computed_amount_for_description": true
        }
    ],
    "requirements": "",
    "graphic_id": 15533,
    "large_graphic_id": 15529,
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
**Search for the Crown** (Guess)
> Voronika's search for the Crown of Raven Queen requires her to complete 3 goals. When Voronika completes all 3 goals, she acquires the crown, transforms into her Darklord Form, unlocks her ultimate attack, and improves her base attack.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2091,
    "flavour_text": "",
    "description": {
        "pre": "Voronika's search for the Crown of Raven Queen requires her to complete 3 goals. When Voronika completes all 3 goals, she acquires the crown, transforms into her Darklord Form, unlocks her ultimate attack, and improves her base attack.",
        "conditions": [
            {
                "condition": "not static_desc",
                "desc": "^^$voronika_prog_v2"
            }
        ]
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "voronika_search_for_the_crown",
            "level_reached": 750,
            "ults_used": 50,
            "num_enemies": 2500,
            "num_favored_foes": 500,
            "num_debuffs": 1750,
            "favored_foe_kills_offline_rate": 1,
            "debuffs_applied_offline_rate": 1
        },
        {
            "apply_manually": true,
            "effect_string": "set_ultimate_attack,541"
        },
        {
            "apply_manually": true,
            "effect_string": "change_base_attack,543"
        },
        {
            "apply_manually": true,
            "effect_string": "change_upgrade_data,15631,0",
            "data": {
                "amount_func": "mult"
            }
        }
    ],
    "requirements": "",
    "graphic_id": 15534,
    "large_graphic_id": 15530,
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
**Speed Run** (Guess)
> The effect of Puppet Master is increased by 10000%. This value multiplicatively decreases by 10% five minutes after the adventure starts and decreases by another 10% for every minute after that, but doesn't decrease after Voronika has completed her Search for the Crown.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2092,
    "flavour_text": "",
    "description": {
        "conditions": [
            {
                "condition": "feat_assigned 1547",
                "desc": "The effect of Puppet Master is increased by $(amount___2)%. This value multiplicatively decreases by $(reduction_amount_with_feat___2)% one minute after the adventure starts and decreases by another $(reduction_amount_with_feat___2)% for every minute after that, but doesn't decrease after Voronika has completed her Search for the Crown."
            },
            {
                "desc": "The effect of Puppet Master is increased by $(amount___2)%. This value multiplicatively decreases by $(reduction_amount___2)% five minutes after the adventure starts and decreases by another $(reduction_amount___2)% for every minute after that, but doesn't decrease after Voronika has completed her Search for the Crown."
            }
        ],
        "post": {
            "conditions": [
                {
                    "condition": "not static_desc",
                    "desc": "^^$voronika_speed_run_desc"
                }
            ]
        }
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,0,15630"
        },
        {
            "off_when_benched": true,
            "effect_string": "voronika_speed_run,10000",
            "reduction_amount": 10,
            "reduction_start_min": 4,
            "special_feat_id": 1547,
            "reduction_amount_with_feat": 20,
            "reduction_start_min_with_feat": 0
        }
    ],
    "requirements": "",
    "graphic_id": 24578,
    "large_graphic_id": 24572,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": false,
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
**Ultimate Power** (Guess)
> Voronika increases the effect of Calculating Guidance by 0.1% for each use of an Ultimate while she is in the formation, stacking multiplicatively. Caps at 100000 stacks. These stacks persist until reset.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2093,
    "flavour_text": "",
    "description": {
        "desc": "Voronika increases the effect of Calculating Guidance by $amount% for each use of an Ultimate while she is in the formation, stacking multiplicatively. Caps at $max_stacks stacks. These stacks persist until reset."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,0.1,15631",
            "max_stacks": 100000,
            "stacks_multiply": true,
            "show_bonus": true,
            "stacks_on_trigger": "ult_used",
            "stack_title": "Ultimate Attacks Used"
        },
        {
            "off_when_benched": true,
            "effect_string": "stacks_data_binder_safe,0,voronika_ult_power_stacks",
            "is_instanced_stat": true,
            "use_stat_defs": true
        }
    ],
    "requirements": "",
    "graphic_id": 15535,
    "large_graphic_id": 15531,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": false,
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
**Specialisation: Embrace Evil** (Guess)
> For the third Search for the Crown goal, Calculating Guidance's key allies must defeat 2,500 enemies. The key allies for Calculating Guidance now also include Champions who have the Evil alignment.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2094,
    "flavour_text": "",
    "description": {
        "desc": "For the third Search for the Crown goal, Calculating Guidance's key allies must defeat 2,500 enemies. The key allies for Calculating Guidance now also include Champions who have the Evil alignment."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "voronika_key_ally",
            "tag": "evil"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 24582,
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
**Specialisation: Hunt the Favored** (Guess)
> For the third Search for the Crown goal, you must defeat 500 enemies who are the Favored Foe of any Champion in the formation. The key allies for Calculating Guidance now also include Champions who have a Favored Foe.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2095,
    "flavour_text": "",
    "description": {
        "desc": "For the third Search for the Crown goal, you must defeat 500 enemies who are the Favored Foe of any Champion in the formation. The key allies for Calculating Guidance now also include Champions who have a Favored Foe."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "voronika_key_ally",
            "tag": "hunter"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 24583,
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
**Specialisation: Weaken the Fools** (Guess)
> For the third Search for the Crown goal, you must apply 1750 Debuffs to enemies. The key allies for Calculating Guidance now also include Champions who have the Debuff role.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2096,
    "flavour_text": "",
    "description": {
        "desc": "For the third Search for the Crown goal, you must apply 1750 Debuffs to enemies. The key allies for Calculating Guidance now also include Champions who have the Debuff role."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "voronika_key_ally",
            "tag": "debuff"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 24584,
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
**Specialisation: Battle Magic** (Guess)
> Voronika's Puppet additionally casts an explosive magic missile at a random target after each attack which deals 1000% of their normal damage to all enemies in a small area.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2097,
    "flavour_text": "",
    "description": {
        "desc": "Voronika's Puppet additionally casts an explosive magic missile at a random target after each attack which deals $amount% of their normal damage to all enemies in a small area."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "voronika_battle_magic,1000",
            "puppet_effect_id": 2102,
            "aoe_radius": 100,
            "projectile_shoot_offset": [
                60,
                -70
            ],
            "projectile_name": "magic_missile",
            "projectile_details": {
                "impact_graphic_id": 8446
            }
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 24683,
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
**Specialisation: Powerful Focus** (Guess)
> Voronika's Puppet has all of their incoming positional damage effects increased by 75%, and their basic attack now knocks back any enemies it hits a short distance.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2098,
    "flavour_text": "",
    "description": {
        "desc": "Voronika's Puppet has all of their incoming positional damage effects increased by $amount%, and their basic attack now knocks back any enemies it hits a short distance."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "voronika_powerful_focus,75",
            "puppet_effect_id": 2103,
            "push_amount": 125
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 24684,
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
**Specialisation: Strike First, Strike Hard** (Guess)
> Voronika's Puppet attacks 1s faster and their damage is increased by 150% for each Champion adjacent to them, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2099,
    "flavour_text": "",
    "description": {
        "desc": "Voronika's Puppet attacks $(seconds_plural amount) faster and their damage is increased by $(not_buffed amount___2)% for each Champion adjacent to them, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "voronika_strike_hard_strike_fast,1",
            "puppet_effect_id": 2104
        },
        {
            "off_when_benched": true,
            "effect_string": "do_nothing,150",
            "amount_func": "mult",
            "stack_func": "adjacent_champions",
            "custom_base_slot": "voronika_puppet",
            "amount_updated_listeners": [
                "slot_changed"
            ],
            "show_bonus": true
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 24685,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": false,
        "indexed_effect_properties": true
    }
}
</pre>
</p>
</details>
</div></div>

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Reclaiming the Past (Voronika) Icon](images/voronika/3664.png) **Unlock Adventure: Reclaiming the Past (Voronika)** (Complete Area 50)
> Help Laeral Silverhand track down a retired Open Lord.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![The Fringe of Society Icon](images/voronika/15525.png) **Variant 1: The Fringe of Society** (Complete Area 75)
> Voronika starts in your formation and can't be moved or removed.  
> Only Black Dice Society affiliation members and Evil Champions can deal damage.  
> Getting to know Voronika: Voronika support abilities increase with each Black Dice Society or Evil champion in the formation. Place those DPS Champions in the column in front of her!
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Ultimate Challenge Icon](images/voronika/15526.png) **Variant 2: Ultimate Challenge** (Complete Area 125)
> Voronika starts in your formation and can't be removed.  
> After area 25, Champions deal no damage unless at least one Ultimate is on cooldown.  
> Getting to know Voronika: Voronika increases her damage buff for the rest of the adventure each time an ultimate is used. Use those ultimates to increase Voronika's power!
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![In Search of Power Icon](images/voronika/15527.png) **Variant 3: In Search of Power** (Complete Area 175)
> Voronika starts in your formation and can't be removed.  
> Her base level-up cost is reduced by 99%.  
> Two Eladrin bodyguards join the formation. Additional Orc Fighters attack with each wave. They don't drop gold nor count for quest progress.  
> Getting to know Voronika: Voronika achieves her Darklord form after you achieve her 3 goals. Use ultimates, place her inner circle champion, and level her up to get that crown!
</div></div>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Voronika" fill="#aaa" data-formationName="Voronika" data-campaignName="Ahghairon's Day" width="364" height="160"><circle cx="215" cy="125" r="15"/><circle cx="175" cy="145" r="15"/><circle cx="135" cy="45" r="15"/><circle cx="135" cy="85" r="15"/><circle cx="135" cy="125" r="15"/><circle cx="95" cy="65" r="15"/><circle cx="95" cy="105" r="15"/><circle cx="55" cy="85" r="15"/><circle cx="15" cy="25" r="15"/><circle cx="15" cy="65" r="15"/><text x="245" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Voronika</text><text x="245" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Ahghairon's Day</text></svg>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*