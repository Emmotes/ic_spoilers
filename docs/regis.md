[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Regis](images/regis/portrait.png)
        </span>
        <span>
            Portrait
        </span>
    </span>
</span>

# Regis

As a poor urchin on the streets of Calimport, Regis quickly learned that survival often requires bending the rules in your favor. He fled to the north to avoid capture after stealing his former master's magical ruby pendant. Eventually, he found companionship amongst the Companions of the Hall, becoming one of Bruenor Battlehammer's most trusted confidants. Bruenor was the one who gifted Regis with the nickname 'Rumblebelly' due to the halfling's insatiable appetite. Regis would prefer nothing more than to relax in the sun with a full belly near his home in Ten-Towns and fish for knucklehead trout, the source of all of his scrimshaw carvings. But when his friends need help, Regis is always there for them. He never sees himself as the hero, even though his true friends know better.

# Changes

Regis will be a reworked champion in the Simril event on 2 December 2026.

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Attacks

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ultimate: Ruby Brilliance** (Guess)
> Regis holds his ruby pendant up, damaging all enemies and stunning them for 5 seconds. Additionally, the effect of Ruby Encouragement is increased by 200% for each stunned enemy (bosses count for 5), stacking multiplicatively, for 15 seconds  
> Cooldown: 300s (Cap 75s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1016,
    "name": "Ruby Brilliance",
    "description": "Regis attacks using the power of his ruby pendant.",
    "long_description": "Regis holds his ruby pendant up, damaging all enemies and stunning them for 5 seconds. Additionally, the effect of Ruby Encouragement is increased by 200% for each stunned enemy (bosses count for 5), stacking multiplicatively, for 15 seconds",
    "graphic_id": 2002,
    "target": "all",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 0.01,
    "cooldown": 300,
    "animations": [
        {
            "type": "ranged_attack",
            "projectile": "empty",
            "shoot_frame": 31,
            "sound_frames": {
                "39": 174
            },
            "stun_on_hit": 5,
            "effect_frames": {
                "39": {
                    "effect_string": "buff_upgrades,200,21593,21594",
                    "amount_func": "per_stunned_enemy",
                    "boss_val": 5,
                    "for_time": 15
                }
            }
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

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Bounty of the Hall** (Guess)
> Your formation gains 1 Mithral Hall stack. Regis increases your gold find bonus by 1000% for each Mithral Hall stack you have, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3061,
    "flavour_text": "",
    "description": {
        "desc": "Your formation gains $(amount___2) Mithral Hall stack. Regis increases your gold find bonus by $(not_buffed amount)% for each Mithral Hall stack you have, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "gold_multiplier_mult,1000",
            "stack_func": "per_mithral_hall_stacks",
            "amount_func": "mult",
            "stacks_multiply": true,
            "show_bonus": true,
            "stack_title": "Total Mithral Hall Stacks",
            "total_title": "Total Bonus",
            "desc_forced_order": 2
        },
        {
            "off_when_benched": true,
            "outgoing_buffs": false,
            "effect_string": "regis_mithral_hall_stacks,1",
            "manual_stacking": true,
            "stacks_multiply": false,
            "show_stacks": true,
            "stack_title": "Regis Mithral Hall Stacks",
            "desc_forced_order": 1
        }
    ],
    "requirements": [],
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
**Ruby Amplification** (Guess)
> Increases the effect of Ruby Encouragement by 100% when Regis scores a Critical Hit. This effect can stack up to 100 times (multiplicatively). Stacks are halved (rounded down) when changing areas.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3062,
    "flavour_text": "",
    "description": {
        "desc": "Increases the effect of Ruby Encouragement by $(not_buffed amount)% when Regis scores a Critical Hit. This effect can stack up to $max_stacks times (multiplicatively). Stacks are halved (rounded down) when changing areas."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,100",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "buff_upgrades,500,21593,21594",
            "amount_expr": "upgrade_amount(21591,0)",
            "off_when_benched": true,
            "max_stacks": 20,
            "stacks_multiply": true,
            "show_bonus": true,
            "stacks_on_trigger": "pre_owner_attack_crit",
            "more_triggers": [
                {
                    "trigger": "area_changed",
                    "action": {
                        "type": "reduce_percent_down",
                        "percent": 50
                    }
                }
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

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ruby Invigoration** (Guess)
> Whenever a Champion in the formation is critically hit by an enemy, Regis stores up one charge of Ruby Invigoration. While he has at least one charge, his chance to Critical Hit is increased by 100%, and whenever he scores a Critical Hit a charge is consumed. He can store up to 5 charges.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3063,
    "flavour_text": "",
    "description": {
        "desc": "Whenever a Champion in the formation is critically hit by an enemy, Regis stores up one charge of Ruby Invigoration. While he has at least one charge, his chance to Critical Hit is increased by $(amount___2)%, and whenever he scores a Critical Hit a charge is consumed. He can store up to $max_charges charges.",
        "post": {
            "conditions": [
                {
                    "condition": "not static_desc",
                    "desc": "^^$(ruby_invigoration_desc)"
                }
            ]
        }
    },
    "effect_keys": [
        {
            "effect_string": "ruby_invigoration_v2",
            "max_charges": 5
        },
        {
            "effect_string": "buff_base_crit_chance_add,100",
            "apply_manually": true
        }
    ],
    "requirements": [],
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "indexed_effect_properties": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Guided Strike** (Guess)
> Regis increases his crit chance by 5% for each adjacent Champion.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3065,
    "flavour_text": "",
    "description": {
        "desc": "Regis increases his crit chance by $(not_buffed amount)% for each adjacent Champion"
    },
    "effect_keys": [
        {
            "effect_string": "buff_base_crit_chance_add,5",
            "amount_func": "add",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "true",
            "per_hero_targets": [
                "adj"
            ],
            "show_bonus": true
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "effect_name": "Guided Strike",
        "show_in_owner_outgoing": true
    }
}
</pre>
</p>
</details>
</div></div>

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Ruby Encouragement (Ahead)** (Guess)
> Increases the damage of Champions in the column in front of Regis by 100% for each Champion affected by this ability, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3056,
    "flavour_text": "",
    "description": {
        "desc": "Increases the damage of Champions in the column in front of $source by $(amount)% for each Champion affected by this ability, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "hero_dps_multiplier_mult,100",
            "off_when_benched": true,
            "targets": [
                "next_col"
            ],
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "hero_id != 112 && hero_id != 20 && HasEffectByID(3056)",
            "stacks_multiply": true,
            "use_computed_amount_for_description": true,
            "show_bonus": true
        }
    ],
    "requirements": [],
    "graphic_id": 1995,
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
**Specialisation: Ruby Encouragement (Behind)** (Guess)
> Increases the damage of Champions in the column behind Regis by 100% for each Champion affected by this ability, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3057,
    "flavour_text": "",
    "description": {
        "desc": "Increases the damage of Champions in the column behind $source by $(not_buffed amount)% for each Champion affected by this ability, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "hero_dps_multiplier_mult,100",
            "off_when_benched": true,
            "targets": [
                "prev_col"
            ],
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "hero_id != 112 && hero_id != 20 && HasEffectByID(3057)",
            "stacks_multiply": true,
            "use_computed_amount_for_description": true,
            "show_bonus": true
        }
    ],
    "requirements": [],
    "graphic_id": 1995,
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
**Specialisation: Ruby Weakness (Ranged)** (Guess)
> Increases the damage taken by enemies when damaged by ranged attacks by 100% for each Champion affected by this ability, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3058,
    "flavour_text": "",
    "description": {
        "desc": "Increases the damage taken by enemies when damaged by ranged attacks by $(not_buffed amount)% for each Champion affected by this ability, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "increase_monster_damage_from,100,ranged",
            "off_when_benched": true,
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "has_base_attack_dmg_type_ranged",
            "stacks_multiply": true,
            "show_bonus": true
        }
    ],
    "requirements": [],
    "graphic_id": 1996,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "show_incoming": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Ruby Weakness (Melee)** (Guess)
> Increases the damage taken by enemies when damaged by melee attacks by 100% for each Champion affected by this ability, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3059,
    "flavour_text": "",
    "description": {
        "desc": "Increases the damage taken by enemies when damaged by melee attacks by $(amount)% for each Champion affected by this ability, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "increase_monster_damage_from,100,melee",
            "off_when_benched": true,
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "has_base_attack_dmg_type_melee",
            "stacks_multiply": true,
            "show_bonus": true
        }
    ],
    "requirements": [],
    "graphic_id": 1996,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "show_incoming": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Ruby Weakness (Magic)** (Guess)
> Increases the damage taken by enemies when damaged by magic attacks by 100% for each Champion affected by this ability, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 3060,
    "flavour_text": "",
    "description": {
        "desc": "Increases the damage taken by enemies when damaged by magic attacks by $(amount)% for each Champion affected by this ability, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "increase_monster_damage_from,100,magic",
            "off_when_benched": true,
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "has_base_attack_dmg_type_magic",
            "stacks_multiply": true,
            "show_bonus": true
        }
    ],
    "requirements": [],
    "graphic_id": 1996,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "show_incoming": false
    }
}
</pre>
</p>
</details>
</div></div>

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unlock Adventure: Deadwinter Day (Regis)** (Complete Area 50)
> Patrol the outskirts of Longsaddle on Deadwinter Day.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Deadwinter Date Icon](images/regis/2029.png) **Variant 1: Deadwinter Date** (Complete Area 75)
> You must escort two Harpell wards through the entire adventure.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Deadwinter Fey Icon](images/regis/2030.png) **Variant 2: Deadwinter Fey** (Complete Area 125)
> A large number of pixies and sprites spawn with each wave of enemies. When a pixie or sprite is killed, they sprinkle a random Champion with pixie dust. Any champion sprinkled with 10 pixie dust has their Attack disabled. Pixie dust stacks reset when you change areas.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Deadwinter Pay(-back) Icon](images/regis/2031.png) **Variant 3: Deadwinter Pay(-back)** (Complete Area 175)
> Every time you defeat an enemy (in a non-boss area) your Champions take 10% unavoidable damage. Champions adjacent to Regis take only 1/3rd of that damage. Regis himself is immune to this damage.
</div></div>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Regis" fill="#aaa" data-formationName="Regis" data-campaignName="Midwinter" width="240" height="120"><circle cx="135" cy="25" r="15"/><circle cx="135" cy="65" r="15"/><circle cx="135" cy="105" r="15"/><circle cx="95" cy="45" r="15"/><circle cx="95" cy="85" r="15"/><circle cx="55" cy="25" r="15"/><circle cx="55" cy="65" r="15"/><circle cx="55" cy="105" r="15"/><circle cx="15" cy="45" r="15"/><circle cx="15" cy="85" r="15"/><text x="165" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Regis</text><text x="165" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Midwinter</text></svg>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*