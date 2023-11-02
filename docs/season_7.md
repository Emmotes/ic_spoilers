[Back to Main](index.md)

# Index

* [Season 7](#season-7)
* [Theme](#theme)
* [Changes](#changes)
* [Shaka](#shaka)
* [Selise](#selise)
* [D'hani](#d'hani)
<br />

# Season 7

Season 7 is expected to start on 17 January 2024.

# Theme

![Shaka Season Portrait](images/season_7/shaka.png)![Selise Season Portrait](images/season_7/selise.png)![D'hani Season Portrait](images/season_7/dhani.png)![Unknown Season Champion Portrait](images/general/unknown_champion.png)![Unknown Season Champion Portrait](images/general/unknown_champion.png)

We only have data for three seasonal champions so far. They are Shaka, Selise and D'hani. The rest are as yet unknown.

# Changes

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Shaka

![Shaka Portrait](images/season_7/shaka.png)
<br /><span class="formationTooltip">[formation]
    <span class="formationTooltipContents">
        ![Formation Layout for Shaka](images/season_7/shaka_formation.png)
    </span>
</span>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ultimate: Blinding Wall of Light**
> All enemies are pushed back slightly and then a wall of light appears slightly in front of the formation for 15 seconds. Enemies that pass through the wall of light take damage and are stunned for 5 seconds. They also gain a brilliant white glow under their feet for 30 seconds. Enemies with this glow have a 75% chance to miss with all attacks.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "All enemies are pushed back slightly and then a wall of light appears slightly in front of the formation for 15 seconds.",
    "long_description": "All enemies are pushed back slightly and then a wall of light appears slightly in front of the formation for 15 seconds. Enemies that pass through the wall of light take damage and are stunned for 5 seconds. They also gain a brilliant white glow under their feet for 30 seconds. Enemies with this glow have a 75% chance to miss with all attacks.",
    "damage_modifier": 0.03,
    "damage_types": ["magic"],
    "graphic_id": 10359,
    "target": "all",
    "aoe_radius": 0,
    "tags": [
        "ranged",
        "ultimate"
    ],
    "num_targets": 1,
    "animations": [{
        "projectile_count": 1,
        "projectile_details": {
            "graphic_loop_start": 29,
            "damage_on_enter": true,
            "aoe_rect": {
                "x": -10,
                "width": 20,
                "y": -235,
                "height": 250
            },
            "enter_effect": {
                "overlay": {"graphic_id": 10381},
                "for_time": 30,
                "effect_string": "attack_miss_chance,75"
            },
            "activate_effect": {
                "effect_string": "push_back_monster,10",
                "targets": ["monsters"]
            },
            "graphic_id": 10382,
            "wall_time": 15,
            "graphic_scale": 1.8,
            "graphic_loop_end": 34,
            "stun_time_on_enter": 5,
            "area_targets": [
                "area_bottom",
                "formation_front"
            ]
        },
        "type": "ranged_attack",
        "projectile": "wall",
        "shoot_frame": 10
    }],
    "name": "Blinding Wall of Light",
    "cooldown": 360,
    "id": 710
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> Shaka attempts to solve a celestial puzzle with the potential for great rewards. Four random slots in the formation are assigned a random tag. For each Champion in those slots that match the slot's tag, Shaka increases the damage of all Champions by 400%, stacking multiplicatively. A fifth slot is chosen but remains locked with an unknown tag until a specialization is chosen.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability might be prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {"effect_string": "pre_stack_amount,400"},
        {
            "slot_effect": {
                "overlay": {
                    "manual_graphic": "shaka_puzzle",
                    "y": -20
                },
                "effect_string": "shaka_puzzle"
            },
            "medium_expressions": [
                "support",
                "dps",
                "gold",
                "speed",
                "healing"
            ],
            "off_when_benched": true,
            "additional_easy_slots": 0,
            "random_seed_add": 0,
            "effect_string": "shaka_celestial_puzzle",
            "match_slot_effect": {
                "overlay": {"graphic_id": 10381},
                "effect_string": "shaka_puzzle_match"
            },
            "easy_expressions": [
                "male|!female",
                "female|!male"
            ],
            "easy_slots": 2,
            "hard_expressions": [
                "human",
                "kobold",
                "elf",
                "dwarf",
                "tiefling",
                "gnome",
                "half-elf",
                "halfling",
                "dragonborn",
                "aasimar",
                "aarakocra"
            ],
            "hard_slots": 1,
            "medium_slots": 1
        },
        {
            "amount_expr": "upgrade_amount(13416,0)",
            "amount_updated_listeners": ["slot_changed"],
            "has_effect_key": "shaka_puzzle_match",
            "off_when_benched": true,
            "show_bonus": true,
            "amount_func": "mult",
            "stack_func": "per_slot",
            "effect_string": "hero_dps_multiplier_mult,0",
            "targets": ["active_campaign"]
        }
    ],
    "requirements": "",
    "description": {"desc": "Shaka attempts to solve a celestial puzzle with the potential for great rewards. Four random slots in the formation are assigned a random tag. For each Champion in those slots that match the slot's tag, Shaka increases the damage of all Champions by $(amount)%, stacking multiplicatively. A fifth slot is chosen but remains locked with an unknown tag until a specialization is chosen."},
    "id": 1784,
    "flavour_text": "",
    "graphic_id": 10368,
    "properties": {
        "indexed_effect_properties": true,
        "use_outgoing_description": true,
        "is_formation_ability": true,
        "default_bonus_index": 1,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Celestial Resistance** (Guess)
> Shaka adds $(amount___3) temporary health to the entire party when changing areas, and refreshes them every 10 seconds. The amount of hit points is increased by 25% for each A Celestial Puzzle slot that is filled properly, stacking additively.
>  
> - Total Temporary Health: 10.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "grant_all_instant_temporary_hp,10",
            "on_trigger": "on_broadcast_trigger,celestial_resistance_trigger",
            "targets": ["all"]
        },
        {
            "amount_updated_listeners": ["slot_changed"],
            "has_effect_key": "shaka_puzzle_match",
            "off_when_benched": true,
            "show_bonus": true,
            "amount_func": "add",
            "stack_func": "per_slot",
            "effect_string": "buff_upgrade,25,13417,0"
        },
        {
            "effect_string": "do_nothing,10",
            "comment": "This effect key is just so we have a base amount for the description. Things that buff celestial resistance should also buff this key."
        },
        {
            "off_when_benched": true,
            "effect_string": "broadcast_on_trigger,celestial_resistance_trigger,area_changed"
        },
        {
            "trigger_name": "on_timer",
            "off_when_benched": true,
            "effect_string": "broadcast_on_trigger,celestial_resistance_trigger",
            "trigger_params": ["10"]
        }
    ],
    "requirements": "",
    "description": {
        "post": {"conditions": [{
            "condition": "not static_desc",
            "desc": "^^Total Temporary Health: $(amount)"
        }]},
        "desc": "Shaka adds $(amount___3) temporary health to the entire party when changing areas, and refreshes them every 10 seconds. The amount of hit points is increased by $(not_buffed amount___2)% for each A Celestial Puzzle slot that is filled properly, stacking additively."
    },
    "id": 1785,
    "flavour_text": "",
    "graphic_id": 10355,
    "properties": {
        "indexed_effect_properties": true,
        "use_outgoing_description": true,
        "is_formation_ability": true,
        "default_bonus_index": 0,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Feast or Famine** (Guess)
> Shaka increases the base effect of A Celestial Puzzle by 20% for each puzzle slot he's adjacent to, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "amount_updated_listeners": ["slot_changed"],
        "stacks_multiply": true,
        "has_effect_key": "shaka_puzzle",
        "show_bonus": true,
        "amount_func": "mult",
        "stack_func": "per_slot",
        "effect_string": "buff_upgrade,20,13416",
        "target": "adj"
    }],
    "requirements": "",
    "description": {"desc": "Shaka increases the base effect of A Celestial Puzzle by $(not_buffed amount)% for each puzzle slot he's adjacent to, stacking multiplicatively."},
    "id": 1786,
    "flavour_text": "",
    "graphic_id": 10356,
    "properties": {"is_formation_ability": true}
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Riddling Rivals** (Guess)
> The base effect of A Celestial Puzzle is increased by 100% for each other Rivals of Waterdeep Champion in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "amount_updated_listeners": ["slot_changed"],
        "stacks_multiply": true,
        "show_bonus": true,
        "amount_func": "mult",
        "stack_func": "per_hero",
        "effect_string": "buff_upgrade,100,13416,0",
        "tag": "rivalswaterdeep"
    }],
    "requirements": "",
    "description": {"desc": "The base effect of A Celestial Puzzle is increased by $(not_buffed amount)% for each other Rivals of Waterdeep Champion in the formation, stacking multiplicatively."},
    "id": 1787,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {"is_formation_ability": true}
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Child's Play** (Guess)
> 
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [],
    "requirements": "",
    "description": {"desc": ""},
    "id": 1788,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {"is_formation_ability": true}
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Pen and Paper** (Guess)
> 
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{"effect_string": "buff_upgrade,50,13416,0"}],
    "requirements": "",
    "description": {"desc": ""},
    "id": 1789,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {"is_formation_ability": true}
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Sunday Edition** (Guess)
> 
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{"effect_string": "buff_upgrade,100,13416,0"}],
    "requirements": "",
    "description": {"desc": ""},
    "id": 1790,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {"is_formation_ability": true}
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Brain Break** (Guess)
> The locked Celestial Puzzle slot remains locked, and instead Celestial Resistance is increased by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{"effect_string": "buff_upgrade,100,13416"}],
    "requirements": "",
    "description": {"desc": "The locked Celestial Puzzle slot remains locked, and instead Celestial Resistance is increased by $amount%."},
    "id": 1791,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {"is_formation_ability": true}
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> Increases the effect of Celestial Resistance by 70%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {"effect_string": "buff_upgrade,70,13417,1"},
        {
            "show_description": false,
            "effect_string": "buff_upgrade,70,13417,3"
        }
    ],
    "requirements": "",
    "description": {"desc": "Increases the effect of Celestial Resistance by $amount%"},
    "id": 1799,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": []
}
</pre>
</p>
</details>
</div></div>

# Selise

![Selise Portrait](images/season_7/selise.png)
<br /><span class="formationTooltip">[formation]
    <span class="formationTooltipContents">
        ![Formation Layout for Selise](images/season_7/selise_formation.png)
    </span>
</span>

No changes as of yet.

# D'hani

![D'hani Portrait](images/season_7/dhani.png)
<br /><span class="formationTooltip">[formation]
    <span class="formationTooltipContents">
        ![Formation Layout for D'hani](images/season_7/dhani_formation.png)
    </span>
</span>

No changes as of yet.


[Back to Top](#top)

*Last Modified: {{ site.time }}*