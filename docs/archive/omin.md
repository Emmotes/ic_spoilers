[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Omin](images/omin/portrait.png)
        </span>
        <span>
            Portrait
        </span>
    </span>
</span>

# Omin

Omin Dran built the organization called Acquisitions Incorporated to facilitate his quest to find his true sister, at least in part. Despite his unprecedented success in establishing the market for franchised adventuring across the Sword Coast and beyond, Omin's full measure eludes most people. He is known to be a worshiper of Tymora, ruthless in matters of business, feckless in matters of love, and hopeless in games of chance. He is often accused of being a Masked Lord of Waterdeep, though that would explain some things...

# Changes

Omin will be a reworked champion in the Ahghairon's Day event on 5 August 2026.

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Attacks

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ultimate: Spirit Guardian** (Guess)
> Omin summons 15 Spirit Guardians which explode every 2 seconds, damaging all monsters in a large area. The effect of Champion of Tymora is increased as long as a Spirit remains.  
> Cooldown: 360s (Cap 90s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 994,
    "name": "Spirit Guardian",
    "description": "Omin summons 15 Spirit Guardians which damage a random area every 2 seconds.",
    "long_description": "Omin summons 15 Spirit Guardians which explode every 2 seconds, damaging all monsters in a large area. The effect of Champion of Tymora is increased as long as a Spirit remains.",
    "graphic_id": 8390,
    "target": "none",
    "num_targets": 0,
    "aoe_radius": 0,
    "damage_modifier": 0.03,
    "cooldown": 360,
    "animations": [
        {
            "type": "omin_ultimate_rebalance",
            "upgrade_id": 20158
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

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Champion of Tymora** (Guess)
> Omin recruits all adjacent Champions to be Champions of Tymora. Champions of Tymora have their damage increased by 400%. Omin himself is also a Champion of Tymora.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2826,
    "flavour_text": "",
    "description": {
        "conditions": [
            {
                "condition": "upgrade_purchased 20160",
                "desc": "Omin recruits adjacent Champions, Champions affiliated with Acquisitions Incorporated and/or The \"C\" Team, and Champions adjacent to an Acquisitions Incorporated or \"C\" Team member to be Champions of Tymora. Champions of Tymora have their damage increased by $(amount)%. Omin himself is also a Champion of Tymora."
            },
            {
                "desc": "Omin recruits all adjacent Champions to be Champions of Tymora. Champions of Tymora have their damage increased by $(amount)%. Omin himself is also a Champion of Tymora."
            }
        ]
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "hero_dps_multiplier_mult,400",
            "targets": [
                "self_and_adj"
            ]
        },
        {
            "off_when_benched": true,
            "effect_string": "champion_of_tymora_v2",
            "underlay_graphic_id": 20479,
            "update_when_purchased_upg_ids": [
                12301,
                11742,
                8147,
                12508
            ],
            "skip_effect_key_desc": true
        }
    ],
    "requirements": [],
    "graphic_id": 20466,
    "large_graphic_id": 20458,
    "properties": {
        "is_formation_ability": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Adventuring Capital** (Guess)
> Omin increases the party's gold find by 1% each time a Champion of Tymora attacks an enemy, stacking additively with no cap. The percentage per attack increases by 1% additively for every 100 stacks.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2827,
    "flavour_text": "",
    "description": {
        "desc": "Omin increases the party's gold find by $(amount)% each time a Champion of Tymora attacks an enemy, stacking additively with no cap. The percentage per attack increases by 1% additively for every 100 stacks."
    },
    "effect_keys": [
        {
            "effect_string": "base_amount,1",
            "show_bonus": false
        },
        {
            "off_when_benched": true,
            "effect_string": "gold_multiplier_mult,1",
            "amount_expr": "upgrade_amount(20159,0)",
            "stacks_multiply": false,
            "show_bonus": true,
            "stacks_on_trigger": "champion_affected_by_upg_attacked,20158"
        },
        {
            "off_when_benched": true,
            "effect_string": "stacks_data_binder_safe,1,omin_adventuring_capital_stacks",
            "is_instanced_stat": true,
            "use_stat_defs": true,
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "omin_adventuring_capital",
            "upgrade_id": 20159,
            "effect_index": 0,
            "trigger_every": 100,
            "coins_graphic_id": 8365
        },
        {
            "effect_string": "buff_upgrade_add_flat_amount,1,20159,0",
            "amount_func": "add",
            "stack_func": "per_hero_attribute",
            "post_process_expr": "floor(GetUpgradeStacks(20159,1)/100)",
            "amount_updated_listeners": [
                "stacks_changed"
            ]
        }
    ],
    "requirements": [],
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 1,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Well Funded** (Guess)
> The effect of Champion of Tymora is increased by 20% for each order of magnitude of Gold you have collected in the current adventure, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2828,
    "flavour_text": "",
    "description": {
        "desc": "The effect of Champion of Tymora is increased by $(not_buffed amount)% for each order of magnitude of Gold you have collected in the current adventure, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,20,20158",
            "amount_func": "mult",
            "stack_func": "per_gold_gained",
            "orders_of_magnitude": true,
            "stacks_multiply": true,
            "show_bonus": true,
            "amount_updated_listeners": [
                "stat_changed,GoldGained"
            ]
        }
    ],
    "requirements": [],
    "graphic_id": 20467,
    "large_graphic_id": 20459,
    "properties": {
        "is_formation_ability": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Light of Tymora** (Guess)
> Champions of Tymora are healed for 10 health per second.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2837,
    "flavour_text": "",
    "description": {
        "desc": "Champions of Tymora are healed for $(amount) health per second."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "heal,10",
            "targets": [
                "all"
            ],
            "filter_targets": [
                {
                    "type": "affected_by_upgrade",
                    "upgrade_id": 20158
                }
            ],
            "formation_arrows_for_effected_only": true,
            "retarget_when_any_hero_slot_changed": true,
            "retarget_when_upgrade_purchased_ids": [
                8147
            ]
        }
    ],
    "requirements": [],
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Known Associates** (Guess)
> Champions who are affiliated with Acquisitions Incorporated and/or The "C" Team also become Champions of Tymora, and recruit Champions adjacent to them as well.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2838,
    "flavour_text": "",
    "description": {
        "desc": "Champions who are affiliated with Acquisitions Incorporated and/or The \"C\" Team also become Champions of Tymora, and recruit Champions adjacent to them as well."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "add_target_to_upgrade,,20158",
            "add_targets": [
                {
                    "type": "by_tags",
                    "tags": "acqinc|cteam"
                },
                {
                    "type": "has_neighbour_with_tag",
                    "tags": "acqinc|cteam"
                }
            ],
            "amount_updated_listeners": [
                "slot_changed"
            ]
        }
    ],
    "requirements": [],
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

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Form Ranks** (Guess)
> Omin increases the effect of Champion of Tymora by 50% for each Champion of Tymora in the formation, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2829,
    "flavour_text": "",
    "description": {
        "desc": "Omin increases the effect of Champion of Tymora by $(amount)% for each Champion of Tymora in the formation, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,50",
            "skip_effect_key_desc": true
        },
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,50,20158",
            "amount_expr": "upgrade_amount(20163,0)",
            "stacks_multiply": true,
            "amount_func": "mult",
            "stack_func": "per_hero",
            "stack_func_data": {
                "ekh_filter": {
                    "type": "affected_by_upgrade",
                    "upgrade_id": 20158
                }
            },
            "show_bonus": true,
            "amount_updated_listeners": [
                "slot_changed"
            ],
            "stack_title": "Champions of Tymora"
        }
    ],
    "requirements": [],
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "spec_option_post_apply_info": "Champions of Tymora in Formation: $num_stacks___2"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Favored Friends** (Guess)
> Omin increases the effect of Champion of Tymora by 100% for each Acquisitions Incorporated and/or The "C" Team champion in the formation, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2830,
    "flavour_text": "",
    "description": {
        "desc": "Omin increases the effect of Champion of Tymora by $(amount)% for each Acquisitions Incorporated and/or The \"C\" Team champion in the formation, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,100",
            "skip_effect_key_desc": true
        },
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,100,20158",
            "amount_expr": "upgrade_amount(20164,0)",
            "amount_func": "mult",
            "stack_func": "per_hero",
            "stack_func_data": {
                "tag": "acqinc|cteam"
            },
            "stacks_multiply": true,
            "show_bonus": true,
            "stack_title": "Acquisitions Inc. and \"C\" Team Champions"
        }
    ],
    "requirements": [],
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "spec_option_post_apply_info": "Acq. Inc. and \"C\" Team Champions in Formation: $num_stacks___2"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Long Term Investments** (Guess)
> Once Adventuring Capital has 1,000 stacks, Omin increases the effect of Champion of Tymora by 150%, and then increases it again each time the number of Adventuring Capital stacks doubles, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2831,
    "flavour_text": "",
    "description": {
        "desc": "Once Adventuring Capital has 1,000 stacks, Omin increases the effect of Champion of Tymora by $amount%, and then increases it again each time the number of Adventuring Capital stacks doubles, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,150",
            "skip_effect_key_desc": true
        },
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,0,20158",
            "amount_expr": "upgrade_amount(20165,0)",
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "post_process_expr": "as_int(GetUpgradeStacks(20159,1) >= 1000) * (log(GetUpgradeStacks(20159,1) / 1000) / log(2) + 1)",
            "stacks_multiply": true,
            "show_bonus": true,
            "amount_updated_listeners": [
                "stacks_changed"
            ],
            "changing_stack_upgade_ids": [
                20159
            ]
        }
    ],
    "requirements": [],
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "show_incoming": false,
        "default_bonus_index": 0
    }
}
</pre>
</p>
</details>
</div></div>

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unlock Adventure: Reclaiming the Past (Omin)** (Complete Area 50)
> Help Laeral Silverhand track down a retired Open Lord.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Lords of Waterdeep Icon](images/omin/8381.png) **Variant 1: Lords of Waterdeep** (Complete Area 75)
> - A masked lord takes up a slot in your formation. Others join the formation periodically until area 601.   
>  Starting in area 601, the lords provide a global damage buff to your formation that starts at 20% and increases by 20% (multiplicatively) in each additional area.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Vajra's Command Icon](images/omin/8382.png) **Variant 2: Vajra's Command** (Complete Area 125)
> Only Champions with a CON score of 14 or higher, or an associate of Omin, can be used. Associates of Omin include Champions with the Acquisition Incorporated or "C" Team affiliation.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Fortune Favors the Bold Icon](images/omin/8383.png) **Variant 3: Fortune Favors the Bold** (Complete Area 175)
> Omin begins in the formation and can not be moved or removed. Whenever a Champion kills a non-boss enemy, the base attack cooldown of Champions adjacent to them is reduced for their next attack. Whenever a Champion attacks but does not kill a non-boss enemy, that enemy moves faster and deals more damage. This effect can stack.
</div></div>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Omin" fill="#aaa" data-formationName="Omin" data-campaignName="Ahghairon's Day" width="364" height="160"><circle cx="215" cy="125" r="15"/><circle cx="175" cy="105" r="15"/><circle cx="175" cy="145" r="15"/><circle cx="135" cy="125" r="15"/><circle cx="95" cy="105" r="15"/><circle cx="95" cy="145" r="15"/><circle cx="55" cy="125" r="15"/><circle cx="15" cy="25" r="15"/><circle cx="15" cy="65" r="15"/><circle cx="15" cy="105" r="15"/><text x="245" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Omin</text><text x="245" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Ahghairon's Day</text></svg>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*