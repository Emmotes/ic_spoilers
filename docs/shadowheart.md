[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsImage">
        ![PC Portrait for Shadowheart](images/shadowheart/portrait.png)Portait
    </span>
    <span class="championPortraitsImage">
        ![Model GIF of Shadowheart](images/shadowheart/model.gif)Model
    </span>
</span>

# Shadowheart

A loyal cleric of Shar, Shadowheart is the sole survivor of a holy mission undertaken on the Mistress of the Night's behest. She alone must deliver a relic of immense power to her coven in Baldur's Gate, while threatened by a strange new magic that is burgeoning from within.

[Shadowheart - Baldur's Gate 3 Wiki](https://bg3.wiki/wiki/Shadowheart)

# Basic Information

Shadowheart will be the new champion in the Simril event on 29 November 2023.

<span class="champStatsTableColumn">
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Seat**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">6</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Race**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Half-Elf</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Class**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Cleric</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Roles**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Support / Healing</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Age**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">48</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Gender**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Female</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Alignment**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Lawful Neutral</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Affiliation**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Absolute Adversaries</span>
        </span>
    </span>
</span>

# Formation

<span class="formationBorder">
    ![Formation Layout](images/shadowheart/formation.png)
</span>

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Sacred Flame** (Magic)
> Shadowheart casts Sacred Flame on a random enemy, dealing 1 hit.  
> Cooldown: 6s (Cap 1.5s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 701,
    "name": "Sacred Flame",
    "description": "Shadowheart casts Sacred Flame on a random enemy, dealing 1 hit.",
    "long_description": "",
    "graphic_id": 0,
    "target": "random",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 6,
    "animations": [
        {
            "type": "ranged_attack",
            "projectile": "pd_generic_projectile",
            "shoot_frame": 10,
            "shoot_sound": 164,
            "hit_sound": 133,
            "projectile_details": {
                "hash": "220b7624ef8bba01663706bfc0b44e70",
                "projectile_speed": 10000,
                "projectile_hit_graphic_id": 21569
            }
        }
    ],
    "tags": [
        "ranged"
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
**Base Attack: Guidance** (Magic)
> Shadowheart casts Guidance on your BUD-setting Champion, increasing their next attack's damage.  
> Cooldown: 6s (Cap 1.5s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 702,
    "name": "Guidance",
    "description": "Shadowheart casts Guidance on your BUD-setting Champion, increasing their next attack's damage.",
    "long_description": "",
    "graphic_id": 0,
    "target": "none",
    "num_targets": 0,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 6,
    "animations": [
        {
            "type": "melee_attack",
            "no_damage_display": true,
            "no_jump": true,
            "no_cooldown_display": false,
            "animation_sequence_name": "attack_b"
        }
    ],
    "tags": [
        "ranged"
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
**Ultimate Attack: Absolute Sanctuary**
> Shadowheart's mysterious relic strikes back enemies and prevents all damage to your Champions for a short while.  
> Cooldown: 300s (Cap 75s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 703,
    "name": "Absolute Sanctuary",
    "description": "Shadowheart's mysterious relic prevents all damage for a short while.",
    "long_description": "Shadowheart's mysterious relic strikes back enemies and prevents all damage to your Champions for a short while.",
    "graphic_id": 21370,
    "target": "all",
    "num_targets": 0,
    "aoe_radius": 0,
    "damage_modifier": 0.03,
    "cooldown": 300,
    "animations": [
        {
            "type": "ultimate_attack",
            "ultimate": "shadowheart"
        }
    ],
    "tags": [
        "ranged",
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
**Twilight Trickery**
> Shadowheart increases the damage of Champions within two slots of her by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1754,
    "flavour_text": "",
    "description": {
        "desc": "Shadowheart increases the damage of Champions within two slots of her by $(amount)%."
    },
    "effect_keys": [
        {
            "effect_string": "hero_dps_multiplier_mult,100",
            "targets": [
                {
                    "type": "distance",
                    "distance": 2
                }
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 21366,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ceremorphosis**
> Your formation gains one Ceremorphosis stack due to the mind flayer tadpole in Shadowheart's brain. Shadowheart increases the effect of Twilight Trickery by 100% for each Ceremorphosis stack, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability might be prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1755,
    "flavour_text": "",
    "description": {
        "desc": "Your formation gains one Ceremorphosis stack due to the mind flayer tadpole in Shadowheart's brain. Shadowheart increases the effect of Twilight Trickery by $(amount)% for each Ceremorphosis stack, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack_amount,100"
        },
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,0,13275",
            "amount_expr": "upgrade_amount(13276,0)",
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
            "effect_string": "shadowheart_ceremorphosis_stacks,1",
            "manual_stacking": true,
            "stacks_multiply": false,
            "show_stacks": true,
            "stack_title": "Shadowheart Ceremorphosis Stacks",
            "desc_forced_order": 1
        }
    ],
    "requirements": "",
    "graphic_id": 21363,
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
**Light in the Dark**
> Shadowheart heals Champions in the two columns ahead of her for 10 every second.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1756,
    "flavour_text": "",
    "description": {
        "desc": "Shadowheart heals Champions in the two columns ahead of her for $(amount) every second."
    },
    "effect_keys": [
        {
            "effect_string": "heal,10",
            "targets": [
                "next_two_col"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 21365,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Invoke Duplicity**
> Shadowheart creates an Illusory Duplicate of herself which hides in the formation and applies Twilight Trickery and Light in the Dark to Champions relative to itself with half the range as normal. The duplicate positions itself in the same formation slot as the Champion in the formation with the highest DEX score. Ties go to the Champion in the highest bench seat.
>  
> - Illusory Duplicate Source:
> - Twilight Trickery Damage Buff: ???%
> - Light In The Dark Heal Amount: ???.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1757,
    "flavour_text": "",
    "description": {
        "desc": "Shadowheart creates an Illusory Duplicate of herself which hides in the formation and applies Twilight Trickery and Light in the Dark to Champions relative to itself with half the range as normal. The duplicate positions itself in the same formation slot as the Champion in the formation with the highest DEX score. Ties go to the Champion in the highest bench seat.",
        "post": {
            "conditions": [
                {
                    "condition": "not static_desc",
                    "desc": "^^Illusory Duplicate Source: $shadowheart_illusory_duplicate_target^Twilight Trickery Damage Buff: $shadowheart_twilight_trickery_amount%^Light In The Dark Heal Amount: $shadowheart_light_in_the_dark_amount"
                }
            ]
        }
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "shadowheart_invoke_duplicity",
            "targets": [
                "self_slot"
            ],
            "skip_effect_key_desc": true
        },
        {
            "off_when_benched": true,
            "effect_string": "hero_dps_multiplier_mult,0",
            "override_key_desc": "Twilight Trickery - Increases the damage of $target by $amount%",
            "amount_expr": "upgrade_amount(13275,0)",
            "targets": [
                {
                    "type": "distance",
                    "distance": 1
                }
            ],
            "use_computed_amount_for_description": true
        },
        {
            "off_when_benched": true,
            "effect_string": "heal,0",
            "override_key_desc": "Light In The Dark - Heals $target for $amount every second",
            "amount_expr": "upgrade_amount(13277,0)",
            "targets": [
                "next_col"
            ],
            "use_computed_amount_for_description": true
        }
    ],
    "requirements": "",
    "graphic_id": 21364,
    "properties": {
        "is_formation_ability": true,
        "is_positional_ability": true,
        "owner_use_outgoing_description": false,
        "use_owner_override": true,
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
**Specialisation: Guidance** (Guess)
> Shadowheart's base attack is replaced by Guidance. When she casts Guidance, she increases the damage of your BUD-setting Champion's next attack by 200%. Stacks multiplicatively up to 5 times.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1758,
    "flavour_text": "",
    "description": {
        "desc": "Shadowheart's base attack is replaced by Guidance. When she casts Guidance, she increases the damage of your BUD-setting Champion's next attack by $(not_buffed amount)%. Stacks multiplicatively up to $(max_stacks) times."
    },
    "effect_keys": [
        {
            "effect_string": "do_nothing,200",
            "stacks_multiply": true,
            "show_bonus": true,
            "stacks_on_trigger": "owner_base_attack",
            "more_triggers": [
                {
                    "trigger": "on_broadcast_stacks,shadowheart_guidance_trigger",
                    "action": {
                        "type": "reset_stacks"
                    }
                }
            ],
            "max_stacks": 5,
            "stack_title": "Guidance Stacks"
        },
        {
            "effect_string": "change_base_attack,702"
        },
        {
            "off_when_benched": true,
            "effect_string": "hero_dps_multiplier_mult,0",
            "active_graphic_id": 21571,
            "active_graphic_sort": "bottom",
            "amount_expr": "upgrade_amount(13279,0)",
            "targets": [
                "bud_setter"
            ]
        },
        {
            "effect_string": "broadcast_on_trigger,shadowheart_guidance_trigger,pre_target_attack",
            "skip_effect_key_desc": true,
            "targets": [
                "bud_setter"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "retain_on_slot_changed": true,
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Find Yourself** (Guess)
> If Shadowheart's Illusory Duplicate is placed in the same slot as she is, the effect of Twilight Trickery is increased by 400%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1759,
    "flavour_text": "",
    "description": {
        "desc": "If Shadowheart's Illusory Duplicate is placed in the same slot as she is, the effect of Twilight Trickery is increased by $(amount)%."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,400,13275"
        }
    ],
    "requirements": [
        {
            "requirement": "shadowheart_is_duplicity_target"
        }
    ],
    "graphic_id": 0,
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
**Specialisation: Sister of Darkness** (Guess)
> The effects of Twilight Trickery and Light In The Dark from Shadowheart's Illusory Duplicate are increased by 100% for each formation slot away from Shadowheart the duplicate is (following the shortest path), stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1760,
    "flavour_text": "",
    "description": {
        "desc": "The effects of Twilight Trickery and Light In The Dark from Shadowheart's Illusory Duplicate are increased by $(not_buffed amount)% for each formation slot away from Shadowheart the duplicate is (following the shortest path), stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,100,13278",
            "amount_func": "mult",
            "stack_func": "shadowheart_invoke_duplicity_dist",
            "stacks_multiply": true,
            "show_bonus": true,
            "amount_updated_listeners": [
                "slot_changed",
                "ability_score_changed"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 0,
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
            <span class="itemTableIcon1">![Armor Icon](images/shadowheart/21336.png)</span><span class="itemTableIcon2">![Armor Icon](images/shadowheart/21336.png)</span><span class="itemTableIcon3">![Armor Icon](images/shadowheart/21337.png)</span><span class="itemTableIcon4">![Armor Icon](images/shadowheart/21338.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Armor</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Headgear Icon](images/shadowheart/21339.png)</span><span class="itemTableIcon2">![Headgear Icon](images/shadowheart/21339.png)</span><span class="itemTableIcon3">![Headgear Icon](images/shadowheart/21340.png)</span><span class="itemTableIcon4">![Headgear Icon](images/shadowheart/21341.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Headgear</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Mysterious Artefact Icon](images/shadowheart/21342.png)</span><span class="itemTableIcon2">![Mysterious Artefact Icon](images/shadowheart/21342.png)</span><span class="itemTableIcon3">![Mysterious Artefact Icon](images/shadowheart/21343.png)</span><span class="itemTableIcon4">![Mysterious Artefact Icon](images/shadowheart/21344.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Mysterious Artefact</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Shar Stuff Icon](images/shadowheart/21345.png)</span><span class="itemTableIcon2">![Shar Stuff Icon](images/shadowheart/21345.png)</span><span class="itemTableIcon3">![Shar Stuff Icon](images/shadowheart/21346.png)</span><span class="itemTableIcon4">![Shar Stuff Icon](images/shadowheart/21347.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Shar Stuff</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Shield Icon](images/shadowheart/21348.png)</span><span class="itemTableIcon2">![Shield Icon](images/shadowheart/21348.png)</span><span class="itemTableIcon3">![Shield Icon](images/shadowheart/21349.png)</span><span class="itemTableIcon4">![Shield Icon](images/shadowheart/21350.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Shield</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Weapon Icon](images/shadowheart/21351.png)</span><span class="itemTableIcon2">![Weapon Icon](images/shadowheart/21351.png)</span><span class="itemTableIcon3">![Weapon Icon](images/shadowheart/21352.png)</span><span class="itemTableIcon4">![Weapon Icon](images/shadowheart/21353.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Weapon</span>
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
            ![Shadowheart Console Portrait](images/shadowheart/console.png)Console Portait
        </span>
    </span>
    <span class="championImagesRow">
        <span class="championImagesChests">
            ![Shadowheart Gold Chest Icon](images/shadowheart/chest_gold.png)Gold Chest Icon
        </span>
        <span class="championImagesChests">
            ![Shadowheart Silver Chest Icon](images/shadowheart/chest_silver.png)Silver Chest Icon
        </span>
    </span>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*