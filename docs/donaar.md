[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Donaar](images/donaar/portrait.png)
        </span>
        <span>
            Portrait
        </span>
    </span>
</span>

# Donaar

This copper, draconic gentleman claims to know more than one hundred different dragons. Chromatic, metallic -- just tons and tons of dragons -- I'm hoping we can leverage some of these connections in our dealings. None of the dragons I've contacted have gotten back to me, but they're probably just very busy right now. This is one of the busiest times for dragons... or so I've been told by my new best friend, Donaar Blit'zen.

# Changes

Donaar will be a reworked champion in the Grand Revel event and delayed until 11 February 2026.

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Attacks

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Command** (Guess)
> Donaar casts a random command. His commands target one enemy and deal a small amount of psychic damage in addition to their effect (see the passive Command ability for details).  
> Cooldown: 3.8s (Cap 0.95s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 934,
    "name": "Command",
    "description": "Donaar targets a random enemy, casting a random Command on them and doing a small amount of psychic damage",
    "long_description": "Donaar casts a random command. His commands target one enemy and deal a small amount of psychic damage in addition to their effect (see the passive Command ability for details).",
    "graphic_id": 0,
    "target": "random",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 3.8,
    "animations": [
        {
            "type": "ranged_attack",
            "shoot_frame": 22,
            "projectile": "psychic_damage"
        }
    ],
    "tags": [
        "melee"
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
**Base Attack: Command** (Guess)
> Donaar casts a random command. His commands target one enemy and deal a small amount of psychic damage in addition to their effect (see the passive Command ability for details).  
> Cooldown: 3.8s (Cap 0.95s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 938,
    "name": "Command",
    "description": "Donaar targets a random enemy, casting a random Command on them and doing a small amount of psychic damage",
    "long_description": "Donaar casts a random command. His commands target one enemy and deal a small amount of psychic damage in addition to their effect (see the passive Command ability for details).",
    "graphic_id": 0,
    "target": "random",
    "num_targets": 1,
    "aoe_radius": 100,
    "damage_modifier": 1,
    "cooldown": 3.8,
    "animations": [
        {
            "type": "ranged_attack",
            "shoot_frame": 22,
            "projectile": "psychic_damage"
        }
    ],
    "tags": [
        "melee",
        "aoe"
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
**Command** (Guess)
> Donaar attacks with the Command spell. The Command he chooses with each attack is randomly picked from the following options:  
> Hold: the target is stunned for 3 seconds  
> Duel: the target berserks, moving 50% faster and attacking twice as often, but dealing 90% less damage  
> Cower: the target now has a 50% chance to miss on any attack it makes and takes 200% extra damage  
> Droppit: the target drops 200% more gold when it dies  
> All Commands last until the target dies, unless otherwise noted.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2571,
    "flavour_text": "",
    "description": {
        "desc": "Donaar attacks with the Command spell. The Command he chooses with each attack is randomly picked from the following options:^Hold: the target is stunned for $amount___2 seconds^Duel: the target berserks, moving $amount___3% faster and attacking twice as often, but dealing 90% less damage^Cower: the target now has a 50% chance to miss on any attack it makes and takes $amount___4% extra damage^Droppit: the target drops $amount___5% more gold when it dies^All Commands last until the target dies, unless otherwise noted."
    },
    "effect_keys": [
        {
            "effect_string": "donaar_command_word",
            "bias": -1,
            "off_when_benched": true,
            "command_indicies": [
                1,
                2,
                3,
                4
            ]
        },
        {
            "effect_string": "add_monster_hit_effects,3,934,938",
            "apply_manually": true,
            "use_chained_attack": false,
            "monster_effect": {
                "effect_string": "effect_def,2584"
            },
            "after_damage": false
        },
        {
            "effect_string": "add_monster_hit_effects,50,934,938",
            "apply_manually": true,
            "use_chained_attack": false,
            "monster_effect": {
                "effect_string": "effect_def,2585"
            },
            "after_damage": false
        },
        {
            "effect_string": "add_monster_hit_effects,200,934,938",
            "apply_manually": true,
            "use_chained_attack": false,
            "monster_effect": {
                "effect_string": "effect_def,2586"
            },
            "after_damage": false
        },
        {
            "effect_string": "add_monster_hit_effects,200,934,938",
            "apply_manually": true,
            "use_chained_attack": false,
            "monster_effect": {
                "effect_string": "effect_def,2587"
            },
            "after_damage": false
        },
        {
            "effect_string": "add_monster_hit_effects,50,934,938",
            "apply_manually": true,
            "use_chained_attack": false,
            "monster_effect": {
                "effect_string": "effect_def,2472"
            },
            "after_damage": false
        },
        {
            "effect_string": "add_monster_hit_effects,0,934,938",
            "apply_manually": false,
            "use_chained_attack": false,
            "monster_effect": {
                "effect_string": "effect_def,2605"
            },
            "after_damage": false
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
**Aura of Vitality** (Guess)
> Every second, Donaar heals the champion who has lost the most health for 5 health over 10 seconds (1 immediate tick + 10 more ticks each second thereafter). If he targets a champion who already has this effect, it refreshes the duration to 10 seconds, but doesn't immediately tick again.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2572,
    "flavour_text": "",
    "description": {
        "desc": "Every second, Donaar heals the champion who has lost the most health for $amount health over 10 seconds (1 immediate tick + 10 more ticks each second thereafter). If he targets a champion who already has this effect, it refreshes the duration to 10 seconds, but doesn't immediately tick again."
    },
    "effect_keys": [
        {
            "effect_string": "donaar_aura_of_vitality,5",
            "tick_rate": 1,
            "duration": 10
        }
    ],
    "requirements": "",
    "graphic_id": 4214,
    "large_graphic_id": 4213,
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
**Lead by Example** (Guess)
> Donaar increases the damage of Champions in the same column and the column(s) behind him by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2573,
    "flavour_text": "",
    "description": {
        "desc": "Donaar increases the damage of Champions in the same column and the column(s) behind him by $amount%."
    },
    "effect_keys": [
        {
            "effect_string": "hero_dps_multiplier_mult,100",
            "targets": [
                "col_and_behind"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 4216,
    "large_graphic_id": 4215,
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
**Unknown** (Guess)
> When Donaar is in the formation, most abilities that involve stacks are granted 100 extra stack.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2574,
    "flavour_text": "",
    "description": {
        "desc": "When Donaar is in the formation, most abilities that involve stacks are granted $amount extra stack."
    },
    "effect_keys": [
        {
            "effect_string": "increase_all_stack_counts,100",
            "off_when_benched": true
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
**Unknown** (Guess)
> Enemies affected by one of Donaar's Command Word spells take an additional 100% damage while they are affected by it.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2575,
    "flavour_text": "",
    "description": {
        "desc": "Enemies affected by one of Donaar's Command Word spells take an additional $amount% damage while they are affected by it."
    },
    "effect_keys": [
        {
            "effect_string": "increase_monster_damage_if_affected_by,100,2605"
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
**Specialisation: Not So Straightforward** (Guess)
> Increases the effect of Lead By Example by 100% for each Chaotic Champion in the formation, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2576,
    "flavour_text": "",
    "description": {
        "desc": "Increases the effect of Lead By Example by $amount% for each Chaotic Champion in the formation, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,100",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "buff_upgrade,0,18654",
            "off_when_benched": true,
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasTag(`chaotic`)",
            "amount_func": "mult",
            "amount_expr": "upgrade_amount(18657,0)",
            "amount_updated_listeners": [
                "slot_changed",
                "upgrade_unlocked",
                "feat_changed"
            ],
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
        "default_bonus_index": 0,
        "spec_option_post_apply_info": "Chaotic Champions: $num_stacks___2"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Scales and Horns** (Guess)
> Increases the effect of Lead By Example by 125% for each Dragonborn or Tiefling Champion in the formation, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2577,
    "flavour_text": "",
    "description": {
        "desc": "Increases the effect of Lead By Example by $amount% for each Dragonborn or Tiefling Champion in the formation, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,125",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "buff_upgrade,0,18654",
            "off_when_benched": true,
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasTag(`dragonborn`) || HasTag(`tiefling`)",
            "amount_func": "mult",
            "amount_expr": "upgrade_amount(18658,0)",
            "amount_updated_listeners": [
                "slot_changed",
                "upgrade_unlocked",
                "feat_changed"
            ],
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
        "default_bonus_index": 0,
        "spec_option_post_apply_info": "Dragonborn or Tiefling Champions: $num_stacks___2"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Business Partners** (Guess)
> Increases the effect of Lead By Example by 150% for each C-Team or Acquisitions Incorporated affiliated Champion in the formation, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2578,
    "flavour_text": "",
    "description": {
        "desc": "Increases the effect of Lead By Example by $amount% for each C-Team or Acquisitions Incorporated affiliated Champion in the formation, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,150",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "buff_upgrade,0,18654",
            "off_when_benched": true,
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasTag(`cteam`) || HasTag(`acqinc`)",
            "amount_func": "mult",
            "amount_expr": "upgrade_amount(18659,0)",
            "amount_updated_listeners": [
                "slot_changed",
                "upgrade_unlocked",
                "feat_changed"
            ],
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
        "default_bonus_index": 0,
        "spec_option_post_apply_info": "C-Team or Acquisitions Incorporated Champions: $num_stacks___2"
    }
}
</pre>
</p>
</details>
</div></div>

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unlock Adventure: The Trickster's Delight (Donaar)** (Complete Area 50)
> Chase down a masked man who has performed a daring heist.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![The Chaotic Decisionist Icon](images/donaar/4217.png) **Variant 1: The Chaotic Decisionist** (Complete Area 75)
> Donaar starts unlocked and in the front of the formation; he cannot be moved Only chaotic Champions can be used
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Nightmare Fuel Icon](images/donaar/4218.png) **Variant 2: Nightmare Fuel** (Complete Area 125)
> A scarecrow that's on fire spawns in every area More and more scarecrows spawn as you progress through the adventure
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Pirate's Night Icon](images/donaar/4219.png) **Variant 3: Pirate's Night** (Complete Area 175)
> Bruenor dresses up like a pirate. A drunken sailor mistakes him for someone who owes them money, and attacks the party in every area.
</div></div>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Donaar" fill="#aaa" data-formationName="Donaar" data-campaignName="Liar's Night" width="256" height="160"><circle cx="135" cy="45" r="15"/><circle cx="135" cy="125" r="15"/><circle cx="95" cy="25" r="15"/><circle cx="95" cy="65" r="15"/><circle cx="95" cy="145" r="15"/><circle cx="55" cy="45" r="15"/><circle cx="55" cy="85" r="15"/><circle cx="55" cy="125" r="15"/><circle cx="15" cy="25" r="15"/><circle cx="15" cy="145" r="15"/><text x="165" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Donaar</text><text x="165" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Liar's Night</text></svg>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*