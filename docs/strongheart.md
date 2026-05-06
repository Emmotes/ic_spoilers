[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Strongheart](images/strongheart/portrait.png)
        </span>
        <span>
            Portrait
        </span>
    </span>
</span>

# Strongheart

Strongheart is a fearless seeker of justice, risking his life to ensure that good triumphs over evil. He is thoughtful, kind, and seldom rash, yet never hesitant to punish those who spit in the face of law and order.

# Changes

Strongheart is potentially a reworked champion in the Founders' Day event and delayed until 8 July 2026.

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Justice Needs Champions** (Guess)
> Strongheart increases the damage of all adjacent Champions by 400%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2752,
    "flavour_text": "",
    "description": {
        "desc": "$source increases the damage of all adjacent Champions by $amount%."
    },
    "effect_keys": [
        {
            "effect_string": "hero_dps_multiplier_mult,400",
            "targets": [
                "adj"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 19779,
    "large_graphic_id": 19775,
    "properties": {
        "is_formation_ability": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Courage to Stand** (Guess)
> Strongheart heals champions affected by Justice Needs Champions for 25 health per second.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2769,
    "flavour_text": "",
    "description": {
        "desc": "$source heals champions affected by Justice Needs Champions for $amount health per second."
    },
    "effect_keys": [
        {
            "effect_string": "heal,25",
            "targets": [
                "all"
            ],
            "filter_targets": [
                {
                    "type": "affected_by_upgrade",
                    "upgrade_id": 19730
                }
            ],
            "slot_change_updates_targets": true,
            "formation_arrows_for_effected_only": true,
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 19778,
    "large_graphic_id": 19774,
    "properties": {
        "is_formation_ability": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Righteous Might** (Guess)
> Whenever Strongheart lands a critical hit, for the next 20 seconds he increases the damage of $(upgrade_name id) by 400%, increases the healing amount of $(upgrade_name id___2) by 100%, and reduces the base attack speed cooldown of himself and Champions affected by Justice Needs Champions by 0.5 seconds.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2770,
    "flavour_text": "",
    "description": {
        "pre": "Whenever $source lands a critical hit, for the next 20 seconds he increases the damage of $(upgrade_name id) by $(amount___4)%, increases the healing amount of $(upgrade_name id___2) by $(amount___2)%, and reduces the base attack speed cooldown of himself and Champions affected by Justice Needs Champions by $(amount___3) seconds.",
        "conditions": [
            {
                "condition": "not static_desc",
                "desc": "^^$(strongheart_rightous_might_stack_desc)"
            }
        ]
    },
    "effect_keys": [
        {
            "outgoing_buffs": false,
            "effect_string": "buff_upgrade,0,19730",
            "stacks_on_trigger": "will_stack_manually",
            "amount_expr": "upgrade_amount(19732,3)",
            "stacks_multiply": true,
            "show_bonus": true,
            "current_value_bonus_desc": "Damage Buff: $(bonus)%",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "buff_upgrade,100,19731",
            "stacks_on_trigger": "will_stack_manually",
            "stacks_multiply": true,
            "show_bonus": true,
            "current_value_bonus_desc": "Healing Buff: $(bonus)%",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "reduce_attack_cooldown,0.5",
            "stacks_on_trigger": "will_stack_manually",
            "targets": [
                "all"
            ],
            "filter_targets": [
                {
                    "type": "affected_by_upgrade",
                    "upgrade_id": 19730,
                    "include_upgrade_owner": true
                }
            ],
            "stacks_multiply": false,
            "show_bonus": true
        },
        {
            "effect_string": "pre_stack_amount,400",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "strongheart_righteous_might",
            "duration": 20,
            "underlay_graphic": 19795,
            "underlay_state_max": 10,
            "underlay_offset_x": -2,
            "underlay_offset_y": -2,
            "skip_effect_key_desc": true
        }
    ],
    "requirements": "",
    "graphic_id": 19780,
    "large_graphic_id": 19776,
    "properties": {
        "is_formation_ability": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "retain_on_slot_changed": true,
        "owner_use_outgoing_description": false
    }
}
</pre>
</p>
</details>
</div></div>

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Valor's Call** (Guess)
> Strongheart increases the damage bonus of $(upgrade_name id___2) by 100% for each good Champion in the formation, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2753,
    "flavour_text": "",
    "description": {
        "desc": "$source increases the damage bonus of $(upgrade_name id___2) by $(amount)% for each good Champion in the formation, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,100",
            "off_when_benched": true
        },
        {
            "effect_string": "buff_upgrade,0,19730",
            "amount_expr": "upgrade_amount(19733,0)",
            "off_when_benched": true,
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasTag(`good`)",
            "stack_title": "Good Champions",
            "show_bonus": true,
            "amount_updated_listeners": [
                "hero_tags_changed",
                "slot_changed"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": false,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "spec_option_post_apply_info": "Good Champions: $num_stacks___2"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Honorary Member** (Guess)
> Strongheart gains the affiliation(s) of the most populous affiliation(s) in the formation, and increases the damage bonus of $(upgrade_name id) by 150% for each Champion from the affiliation(s), stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2754,
    "flavour_text": "",
    "description": {
        "pre": "$(source_hero) gains the affiliation(s) of the most populous affiliation(s) in the formation, and increases the damage bonus of $(upgrade_name id) by $(amount___2)% for each Champion from the affiliation(s), stacking multiplicatively.",
        "conditions": [
            {
                "condition": "not static_desc",
                "desc": "^^$(strongheart_honorary_member_tag_desc)"
            }
        ]
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,0,19730",
            "amount_expr": "upgrade_amount(19734,1)",
            "off_when_benched": true,
            "show_bonus": true,
            "stacks_multiply": true,
            "amount_updated_listeners": [
                "hero_tags_changed",
                "slot_changed"
            ],
            "stacks_on_trigger": "will_stack_manually"
        },
        {
            "effect_string": "pre_stack,150",
            "off_when_benched": true
        },
        {
            "effect_string": "strongheart_gain_affiliation",
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
        "owner_use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 1,
        "retain_on_slot_changed": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: A Righteous Event** (Guess)
> Strongheart increases the damage bonus of Justice Needs Champions by 20% for each Event Buff or Boon that is currently unlocked, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2755,
    "flavour_text": "",
    "description": {
        "desc": "Strongheart increases the damage bonus of Justice Needs Champions by $(amount)% for each Event Buff or Boon that is currently unlocked, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,20",
            "off_when_benched": true
        },
        {
            "effect_string": "buff_upgrade,0,19730",
            "amount_expr": "upgrade_amount(19738,0)",
            "amount_func": "mult",
            "off_when_benched": true,
            "stack_func": "per_active_event_boons",
            "amount_updated_listeners": [
                "event_boons_changed"
            ],
            "stack_title": "Event Buffs and Boons",
            "stacks_multiply": true,
            "show_bonus": true
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
        "owner_use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "retain_on_slot_changed": true,
        "spec_option_post_apply_info": "Event Buffs/Boons Unlocked: $num_stacks___2"
    }
}
</pre>
</p>
</details>
</div></div>

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unlock Adventure: Party Crashers (Strongheart)** (Complete Area 50)
> Save Waterdeep from the chaos of a Founders' Day gone awry.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Oath of Justice Icon](images/strongheart/19767.png) **Variant 1: Oath of Justice** (Complete Area 75)
> Strongheart starts in the formation and can be moved, but not removed.  
> Only Strongheart and Champions next to him can deal damage.  
> Getting to know Strongheart: Strongheart increases the damage of adjacent Champions. Build the best formation to take advantage of this!
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Oath of Valor Icon](images/strongheart/19768.png) **Variant 2: Oath of Valor** (Complete Area 125)
> Strongheart starts in the formation and can be moved, but not removed.  
> Only Strongheart and Good champions can deal damage.  
> Getting to know Strongheart: Strongheart is the leader of Valor's Call, a group of good aligned heroes. Pick the right specialization to support good champions!
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Oath of Friendship Icon](images/strongheart/19769.png) **Variant 3: Oath of Friendship** (Complete Area 175)
> Strongheart starts in the formation and can be moved, but not removed.  
> Only Strongheart and Champions from the affiliation with the most members in the formation can deal damage.  
> Getting to know Strongheart: Strongheart can become an honorary member of any affiliation. Pick the right specialization to have him join your favorite team!
</div></div>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Strongheart" fill="#aaa" data-formationName="Strongheart" data-campaignName="Founders' Day" width="351" height="140"><circle cx="175" cy="25" r="15"/><circle cx="175" cy="65" r="15"/><circle cx="135" cy="85" r="15"/><circle cx="135" cy="125" r="15"/><circle cx="95" cy="65" r="15"/><circle cx="95" cy="105" r="15"/><circle cx="55" cy="85" r="15"/><circle cx="55" cy="125" r="15"/><circle cx="15" cy="25" r="15"/><circle cx="15" cy="65" r="15"/><text x="205" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Strongheart</text><text x="205" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Founders' Day</text></svg>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*