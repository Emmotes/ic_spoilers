[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Deekin](images/deekin/portrait.png)
        </span>
        <span>
            Portrait
        </span>
    </span>
</span>

# Deekin

A former member of the Dripping Fang clan, Deekin was once a Skald for a White Dragon named Tymofarrar. Once he was released from Tymofarrar's service, he set out to become the most amazing storyteller in all of Faerûn. He yearns to sing and tell stories of heroic deeds, but his songs often devolve into 'tales' of the doom that is coming to him or his companions.

# Changes

Deekin will be a reworked champion in the Fleetswake event and delayed until 11 March 2026.

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Attacks

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ultimate: DOOOOOOOM!** (Guess)
> Deekin shouts DOOM as loud as he can, dealing massive damage and setting Story of Doom to max stacks for 30 seconds.  
> Cooldown: 360s (Cap 90s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 942,
    "name": "DOOOOOOOM!",
    "description": "Deekin shouts DOOM as loudly as he can, dealing massive damage and buffing Story of Doom.",
    "long_description": "Deekin shouts DOOM as loud as he can, dealing massive damage and setting Story of Doom to max stacks for 30 seconds.",
    "graphic_id": 3429,
    "target": "all",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 0.03,
    "cooldown": 360,
    "animations": [
        {
            "type": "melee_attack",
            "damage_frame": 91,
            "jump_center": true,
            "refresh_damage_targets_at_hit": true
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
**Story of Doom** (Guess)
> Deekin gains a Doom stack every 1.5 seconds, to a max of 20 stacks. Champions adjacent to Deekin do 10% more damage per Doom stack, stacking multiplicatively. Each enemy killed reduces the current Doom stacks by 20%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2610,
    "flavour_text": "",
    "description": {
        "desc": "Deekin gains a Doom stack every $stack_time___3 seconds, to a max of $max_stacks___2 stacks. Champions adjacent to Deekin do $amount% more damage per Doom stack, stacking multiplicatively. Each enemy killed reduces the current Doom stacks by $reduction_percent___3%."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,10",
            "off_when_benched": true
        },
        {
            "effect_string": "hero_dps_multiplier_mult,0",
            "amount_expr": "upgrade_amount(18855,0)",
            "targets": [
                "adj"
            ],
            "max_stacks": 20,
            "stacks_multiply": true,
            "stack_title": "Doom stacks",
            "show_bonus": true,
            "manual_stacking": true,
            "off_when_benched": true
        },
        {
            "effect_string": "deekin_story_of_doom_stacks_handler",
            "buff_effect_index": 1,
            "stack_time": 1.5,
            "reduction_percent": 20,
            "off_when_benched": true,
            "ult_max_stacks_time": 30,
            "achievement_stacks_min": 5,
            "achievement_stacks_max": 10,
            "achievement_required_seconds": 30
        }
    ],
    "requirements": "",
    "graphic_id": 3460,
    "large_graphic_id": 3418,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": true,
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
**Confidence in the Boss** (Guess)
> When Deekin has 5 or fewer stacks of Story of Doom, he causes monsters to spawn 100% faster.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2611,
    "flavour_text": "",
    "description": {
        "desc": "When Deekin has $ref_value___2 or fewer stacks of Story of Doom, he causes monsters to spawn $amount% faster.",
        "post": {
            "conditions": [
                {
                    "condition": "not static_desc",
                    "desc": "^^$deekin_confidence_in_the_boss_state"
                }
            ]
        }
    },
    "effect_keys": [
        {
            "effect_string": "increase_monster_spawn_time_mult,100",
            "apply_manually": true,
            "off_when_benched": true
        },
        {
            "effect_string": "deeking_confidence_in_the_boss_handler",
            "off_when_benched": true,
            "buff_effect_index": 0,
            "stacks_upg_id": 18855,
            "stacks_upg_effect_index": 1,
            "comparison": "<=",
            "ref_value": 5
        }
    ],
    "requirements": "",
    "graphic_id": 3461,
    "large_graphic_id": 3419,
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

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Boss Wants Speed** (Guess)
> Deekin's Confidence in the Boss ability is increased by 20% for each familiar you have assigned to attacking enemies, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2612,
    "flavour_text": "",
    "description": {
        "desc": "Deekin's Confidence in the Boss ability is increased by $(not_buffed amount)% for each familiar you have assigned to attacking enemies, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,20,18856",
            "show_bonus": true,
            "amount_func": "mult",
            "stack_func": "per_familiar_in_play",
            "familiar_assignment": 2,
            "amount_updated_listeners": [
                "familiar_changed"
            ],
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 7595,
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
**Epic Tale** (Guess)
> When you complete an area with Deekin in the formation, he sets his Current Events stacks to the area number. The effect of Story of Doom is increased by 2.5% for each Current Events stack, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2613,
    "flavour_text": "",
    "description": {
        "desc": "When you complete an area with Deekin in the formation, he sets his Current Events stacks to the area number. The effect of Story of Doom is increased by $(not_buffed amount)% for each Current Events stack, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,2.5,18855",
            "stack_title": "Current Event stacks",
            "show_bonus": true,
            "amount_func": "mult",
            "stack_func": "per_area_completed",
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 3459,
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
**DOOM DOOM DOOM** (Guess)
> Deekin increases the effect of Story of Doom by 100% for each Champion he is adjacent to, stacking multiplicatively. Hew Maan counts as three Champions for this ability.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2614,
    "flavour_text": "",
    "description": {
        "desc": "Deekin increases the effect of Story of Doom by $amount% for each Champion he is adjacent to, stacking multiplicatively. Hew Maan counts as three Champions for this ability."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,100",
            "off_when_benched": true
        },
        {
            "effect_string": "buff_upgrade,0,18855",
            "amount_expr": "upgrade_amount(18859,0)",
            "off_when_benched": true,
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_targets": [
                "adj"
            ],
            "per_hero_expr": "1 + as_int(hero_id==75)*2",
            "show_bonus": true,
            "amount_updated_listeners": [
                "slot_changed"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 3428,
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
**Specialisation: Unorthodox Stories** (Guess)
> Deekin increases the damage of Story of Doom by 100% for each Champion in the formation that is not a Standard Species, stacking multiplicatively. Standard species are Aasimar, Dragonborn, Dwarf, Elf, Gnome, Goliath, Halfling, Human, Orc, Tiefling, Half-Orc, and Half-Elf.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2615,
    "flavour_text": "",
    "description": {
        "desc": "Deekin increases the damage of Story of Doom by $(not_buffed amount)% for each Champion in the formation that is not a Standard Species, stacking multiplicatively. Standard species are Aasimar, Dragonborn, Dwarf, Elf, Gnome, Goliath, Halfling, Human, Orc, Tiefling, Half-Orc, and Half-Elf."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,100,18855",
            "off_when_benched": true,
            "show_bonus": true,
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "!HasTag(`aasimar`) && !HasTag(`dragonborn`) && !HasTag(`dwarf`) && !HasTag(`elf`) && !HasTag(`gnome`) && !HasTag(`goliath`) && !HasTag(`halfling`) && !HasTag(`human`) && !HasTag(`orc`) && !HasTag(`tiefling`) && !HasTag(`half-orc`) && !HasTag(`half-elf`)",
            "amount_updated_listeners": [
                "slot_changed",
                "hero_tags_changed"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 28528,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": false,
        "spec_option_post_apply_info": "Non-Standard Species Champions: $num_stacks"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: DOOOOOM From Afar** (Guess)
> Deekin increases the damage of Story of Doom by 150% for each Champion in the formation with a Ranged base attack, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2616,
    "flavour_text": "",
    "description": {
        "desc": "Deekin increases the damage of Story of Doom by $(not_buffed amount)% for each Champion in the formation with a Ranged base attack, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,150,18855",
            "off_when_benched": true,
            "show_bonus": true,
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasAttackDamageType(`ranged`)",
            "amount_updated_listeners": [
                "slot_changed",
                "attack_changed"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 28526,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": false,
        "spec_option_post_apply_info": "Ranged Champions: $num_stacks"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Troubadour Troupe** (Guess)
> Deekin increases the effect of Story of Doom by 100% for each Bard in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2617,
    "flavour_text": "",
    "description": {
        "desc": "Deekin increases the effect of Story of Doom by $(not_buffed amount)% for each Bard in the formation, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,100,18855",
            "off_when_benched": true,
            "show_bonus": true,
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasTag(`bard`)",
            "amount_updated_listeners": [
                "slot_changed",
                "hero_tags_changed"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 28527,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": false,
        "spec_option_post_apply_info": "Bard Champions: $num_stacks"
    }
}
</pre>
</p>
</details>
</div></div>

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unlock Adventure: Party Crashers (Deekin)** (Complete Area 50)
> Save Waterdeep from the chaos of a Founders' Day gone awry.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Spectator Sport Icon](images/deekin/3421.png) **Variant 1: Spectator Sport** (Complete Area 75)
> Three drunk farmers have joined your party to take in the spectacle. They take up 3 slots and change slots every 25 areas.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Doom is Coming to Waterdeep Icon](images/deekin/3422.png) **Variant 2: Doom is Coming to Waterdeep** (Complete Area 125)
> Deekin is always in your formation and can't be moved or removed. He changes his position within the formation every 10 areas.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![The Blood War Icon](images/deekin/3423.png) **Variant 3: The Blood War** (Complete Area 175)
> The demons and the devils are fighting amongst themselves. Killing one type makes the other grow stronger, and vice versa.
</div></div>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Deekin" fill="#aaa" data-formationName="Deekin" data-campaignName="Founders' Day" width="352" height="160"><circle cx="215" cy="85" r="15"/><circle cx="175" cy="25" r="15"/><circle cx="175" cy="65" r="15"/><circle cx="135" cy="85" r="15"/><circle cx="135" cy="125" r="15"/><circle cx="95" cy="105" r="15"/><circle cx="55" cy="85" r="15"/><circle cx="55" cy="125" r="15"/><circle cx="15" cy="105" r="15"/><circle cx="15" cy="145" r="15"/><text x="245" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Deekin</text><text x="245" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Founders' Day</text></svg>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*