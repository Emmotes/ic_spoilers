[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Barrowin](images/barrowin/portrait.png)
        </span>
        <span>
            Portrait
        </span>
    </span>
</span>

# Barrowin

A proud daughter of Clan Undurr and a devout follower of Gorm Gulthyn, the dwarven god of vigilance and duty. She spent fifteen years in the city of Ironmaster, in Icewind Dale, overseeing and protecting her family's investment in the city's lucrative mining operations. However, she saw little action and feared that her talents were being squandered. She has recently found a home within a budding organization called the Order of the Gauntlet, which vigilantly guards against the rise of evil in all its forms.

# Changes

Barrowin will be a reworked champion in the Wintershield event on 6 January 2027.

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Attacks

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ultimate: Holy Weapon** (Guess)
> Barrowin infuses her hammer with holy energy and throws it at a random enemy, stunning it for 5 seconds. For the next 15 seconds, the base effect of Blessed Hammer is increased by 100%.  
> Cooldown: 360s (Cap 90s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1021,
    "name": "Holy Weapon",
    "description": "Barrowin infuses her hammer with holy energy, stunning a random enemy and buffing Blessed Hammer.",
    "long_description": "Barrowin infuses her hammer with holy energy and throws it at a random enemy, stunning it for 5 seconds. For the next 15 seconds, the base effect of Blessed Hammer is increased by 100%.",
    "graphic_id": 1872,
    "target": "random",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 0.03,
    "cooldown": 360,
    "animations": [
        {
            "projectile_details": {
                "projectile_graphic_id": 1984
            },
            "type": "ranged_attack",
            "projectile_graphic_id": 1,
            "projectile": "holy_weapon",
            "shoot_frame": 28,
            "hold_shoot_frame": true,
            "shoot_sound": 149,
            "hit_sound": 133,
            "stun_on_hit": 5
        }
    ],
    "tags": [
        "melee",
        "ultimate"
    ],
    "damage_types": [
        "ranged"
    ]
}
</pre>
</p>
</details>
</div></div>

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Blessed Hammer** (Guess)
> Barrowin gains a stack of Blessed Hammer for each Champion in the formation who has an equal or higher base attack cooldown. Champions who attack twice as slow as Barrowin provide an additional stack. Champions who attack three times as slow as Barrowin provide another additional stack. Champions who attack four times as slow as Barrowin provide a third additional stack. For each stack, the damage of all Champions behind Barrowin is increased by 400%, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3147,
    "flavour_text": "",
    "description": {
        "desc": "Barrowin gains a stack of Blessed Hammer for each Champion in the formation who has an equal or higher base attack cooldown. Champions who attack twice as slow as Barrowin provide an additional stack. Champions who attack three times as slow as Barrowin provide another additional stack. Champions who attack four times as slow as Barrowin provide a third additional stack. For each stack, the damage of all Champions behind Barrowin is increased by $amount%, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "pre_stack,400"
        },
        {
            "off_when_benched": true,
            "effect_string": "hero_dps_multiplier_mult,0",
            "targets": [
                "behind"
            ],
            "amount_expr": "upgrade_amount(21680,0)",
            "stacks_multiply": true,
            "stacks_on_trigger": "will_stack_manually",
            "show_bonus": true,
            "use_computed_amount_for_description": true
        },
        {
            "effect_string": "barrowin_blessed_hammer_v2",
            "buff_index": 1,
            "max_stacks_per_hero": 4
        }
    ],
    "requirements": [],
    "graphic_id": 1867,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": true,
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
**Lawful Vigilance** (Guess)
> Barrowin has a number of Vigilance stacks equal to the number of Champions in the formation that are either lawful or dwarves. She increases the health of other Champions in the formation by 5% of her max health for each Vigilance stack.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3148,
    "flavour_text": "",
    "description": {
        "desc": "Barrowin has a number of Vigilance stacks equal to the number of Champions in the formation that are either lawful or dwarves. She increases the health of other Champions in the formation by $amount% of her max health for each Vigilance stack."
    },
    "effect_keys": [
        {
            "effect_string": "increase_health_by_source_percent,5",
            "amount_func": "source_percent_health_add",
            "amount_updated_listeners": [
                "max_health_changed,19",
                "slot_changed",
                "hero_tags_changed"
            ],
            "targets": [
                "other"
            ],
            "stack_title": "Vigilance Stacks",
            "total_title": "Bonus Health",
            "stacks_multiply": false,
            "stack_func": "per_hero",
            "stack_func_data": {
                "target_filters": [
                    {
                        "type": "tags",
                        "tags": "lawful|dwarf"
                    }
                ]
            },
            "show_bonus": true,
            "percent_values": false,
            "round_bonus_value": true,
            "show_current_value_bonus_desc": false,
            "use_computed_amount_for_description": true,
            "override_key_desc": "Increases the Health of $target by $amount"
        }
    ],
    "requirements": [],
    "graphic_id": 18593,
    "large_graphic_id": 18588,
    "properties": {
        "is_formation_ability": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Healing Word** (Guess)
> Barrowin heals Champions in her column, including herself, for 4 health per second for each stack of Vigilance she has. After Barrowin attacks, her next Healing Word also applies a temporary health bonus of the same amount.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3149,
    "flavour_text": "",
    "description": {
        "desc": "Barrowin heals Champions in her column, including herself, for $(not_buffed amount) health per second for each stack of Vigilance she has. After Barrowin attacks, her next Healing Word also applies a temporary health bonus of the same amount."
    },
    "effect_keys": [
        {
            "effect_string": "heal,4",
            "off_when_benched": true,
            "amount_func": "add",
            "amount_updated_listeners": [
                "slot_changed",
                "stacks_changed"
            ],
            "changing_stack_upgade_ids": [
                21681
            ],
            "targets": [
                "col"
            ],
            "stacks_multiply": false,
            "stack_func": "per_hero",
            "stack_func_data": {
                "target_filters": [
                    {
                        "type": "tags",
                        "tags": "lawful|dwarf"
                    }
                ]
            },
            "stack_title": "Vigilance Stacks",
            "total_title": "Healing Per Second",
            "show_bonus": true,
            "percent_values": false,
            "use_computed_amount_for_description": true,
            "show_current_value_bonus_desc": false
        },
        {
            "effect_string": "barrowin_healing_word",
            "off_when_benched": true,
            "heal_effect_key_index": 0
        }
    ],
    "requirements": [],
    "graphic_id": 1868,
    "large_graphic_id": 0,
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
**Even Temper** (Guess)
> Barrowin attacks 0.25 seconds faster for each stack of Vigilance she has. Additionally, when a Champion that is eligible for Healing Word is hit by an enemy, Barrowin attacks 1 second faster for her next two attacks.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3150,
    "flavour_text": "",
    "description": {
        "desc": "Barrowin attacks $amount seconds faster for each stack of Vigilance she has. Additionally, when a Champion that is eligible for Healing Word is hit by an enemy, Barrowin attacks 1 second faster for her next two attacks."
    },
    "effect_keys": [
        {
            "effect_string": "reduce_attack_cooldown,0.25",
            "off_when_benched": true,
            "amount_func": "add",
            "amount_updated_listeners": [
                "slot_changed",
                "stacks_changed"
            ],
            "changing_stack_upgade_ids": [
                21681
            ],
            "stacks_multiply": false,
            "stack_func": "per_hero",
            "stack_func_data": {
                "target_filters": [
                    {
                        "type": "tags",
                        "tags": "lawful|dwarf"
                    }
                ]
            },
            "stack_title": "Vigilance Stacks",
            "show_bonus": true,
            "percent_values": false,
            "bonus_is_seconds": true,
            "total_bonus_amount_prefix": "-",
            "show_current_value_bonus_desc": false
        },
        {
            "effect_string": "barrowin_even_temper",
            "buff_attack_count": 2,
            "buff_effect_string": "reduce_attack_cooldown,1",
            "healing_word_upg_id": 21682,
            "healing_word_heal_handler_index": 0
        }
    ],
    "requirements": [],
    "graphic_id": 4437,
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
**Hammer Time** (Guess)
> Barrowin gains stacks of Hammer Time equal to the largest number of enemies she's had to tank at once in the current area. Blessed Hammer is increased by 25% for each stack, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3151,
    "flavour_text": "",
    "description": {
        "desc": "Barrowin gains stacks of Hammer Time equal to the largest number of enemies she's had to tank at once in the current area. Blessed Hammer is increased by $(not_buffed amount)% for each stack, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,25,21680,1",
            "stacks_on_trigger": "will_manually_stack",
            "stack_title": "Hammer Time Stacks",
            "show_bonus": true,
            "stacks_multiply": true
        },
        {
            "effect_string": "barrowin_hammer_time",
            "buff_effect_key_index": 0
        }
    ],
    "requirements": [],
    "graphic_id": 18592,
    "large_graphic_id": 18587,
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
**Specialisation: Hammer of the Law** (Guess)
> Barrowin's Blessed Hammer base effect is additively increased by 20% for each Vigilance stack she has.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3152,
    "flavour_text": "",
    "description": {
        "desc": "Barrowin's Blessed Hammer base effect is additively increased by $(not_buffed amount)% for each Vigilance stack she has."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade_add_flat_amount,20,21680,0",
            "off_when_benched": true,
            "amount_func": "add",
            "amount_updated_listeners": [
                "slot_changed",
                "stacks_changed"
            ],
            "changing_stack_upgade_ids": [
                21681
            ],
            "stacks_multiply": false,
            "stack_func": "per_hero",
            "stack_func_data": {
                "target_filters": [
                    {
                        "type": "tags",
                        "tags": "lawful|dwarf"
                    }
                ]
            },
            "stack_title": "Vigilance Stacks",
            "show_bonus": true,
            "percent_values": false,
            "use_computed_amount_for_description": true,
            "show_current_value_bonus_desc": false
        }
    ],
    "requirements": [],
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Greater Blessing** (Guess)
> Barrowin's Blessed Hammer is buffed by 400%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3153,
    "flavour_text": "",
    "description": {
        "desc": "Barrowin's Blessed Hammer is buffed by $amount%"
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,400,21680,0"
        }
    ],
    "requirements": [],
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Unknown** (Guess)
> All effects which decrease the base attack cooldown of other Champions in the formation instead increase their base attack cooldowns.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3154,
    "flavour_text": "",
    "description": {
        "desc": "All effects which decrease the base attack cooldown of other Champions in the formation instead increase their base attack cooldowns."
    },
    "effect_keys": [
        {
            "effect_string": "barrowin_invert_attack_reductions",
            "off_when_benched": true,
            "targets": [
                "other"
            ]
        }
    ],
    "requirements": [],
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true
    }
}
</pre>
</p>
</details>
</div></div>

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![The Merry Map Misadventure (Barrowin) Icon](images/barrowin/1874.png) **Unlock Adventure: The Merry Map Misadventure (Barrowin)** (Complete Area 50)
> Help a poor map find its way home for the holidays.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![The Chatty Map Icon](images/barrowin/1883.png) **Variant 1: The Chatty Map** (Complete Area 75)
> The map is extremely chatty. Every 15 seconds it engages in deep conversation with a random Champion in your formation, disabling their Attack for 15 seconds.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![The Cult of Daggers Icon](images/barrowin/1884.png) **Variant 2: The Cult of Daggers** (Complete Area 125)
> Dagger-throwing Cultists spawn alongside normal waves and toss daggers at random Champions in your formation. These additional monsters drop no gold.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Only the Strong Survive Icon](images/barrowin/1885.png) **Variant 3: Only the Strong Survive** (Complete Area 175)
> Only Champions with a Strength stat of 13 or higher can be used.
</div></div>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Barrowin" fill="#aaa" data-formationName="Barrowin" data-campaignName="Wintershield" width="318" height="160"><circle cx="175" cy="65" r="15"/><circle cx="135" cy="45" r="15"/><circle cx="135" cy="85" r="15"/><circle cx="135" cy="125" r="15"/><circle cx="95" cy="25" r="15"/><circle cx="95" cy="145" r="15"/><circle cx="55" cy="45" r="15"/><circle cx="55" cy="85" r="15"/><circle cx="55" cy="125" r="15"/><circle cx="15" cy="105" r="15"/><text x="205" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Barrowin</text><text x="205" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Wintershield</text></svg>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*