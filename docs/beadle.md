[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Beadle](images/beadle/portrait.png)
        </span>
        <span>
        Portrait
        </span>
    </span>
</span>

# Beadle

Beadle and Grimm have been best friends & adventuring partners their entire lives. Together, they have faced the most dangerous foes their realm had to offer and built a respite alongside the frozen north's harsh realities: The Giant's Bane Tavern.

# Changes

Beadle will be a reworked champion in the Festival of Fools event on 2 April 2025.

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Attacks

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ultimate: Arcane Blast** (Guess)
> Beadle teleports into the center of the battlefield and blasts all enemies with arcane magic, dealing ultimate damage and stunning them for 5 seconds.  
> Cooldown: 300s (Cap 75s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 840,
    "name": "Arcane Strike",
    "description": "Beadle teleports into the center of the battlefield and blasts all enemies with arcane magic, dealing ultimate damage and stunning them for 5 seconds.",
    "long_description": "",
    "graphic_id": 8181,
    "target": "all",
    "num_targets": 0,
    "aoe_radius": 0,
    "damage_modifier": 0.03,
    "cooldown": 300,
    "animations": [
        {
            "type": "beadle_ultimate_v2",
            "damage_frame": 8,
            "right_blast_offset_x": 40,
            "left_blast_offset_x": -40,
            "blast_offset_y": -40,
            "arcane_blast": {
                "graphic_id": 7699,
                "move_speed": 500,
                "max_scale": 2,
                "min_scale": 0.2,
                "min_scale_distance": 500
            },
            "hit_effect": "stun,5,none,0,1509"
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
**Unknown** (Guess)
> Beadle & Grimm are so inseparable that if either one qualifies for an adventure restriction based on their tags, ages, ability scores, etc., then both can be used.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2240,
    "flavour_text": "",
    "description": {
        "desc": "Beadle & Grimm are so inseparable that if either one qualifies for an adventure restriction based on their tags, ages, ability scores, etc., then both can be used."
    },
    "effect_keys": [
        {
            "effect_string": "do_nothing"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": []
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**In The Shadows** (Guess)
> Beadle increases the damage of Champions within 2 slots of himself by 100%, and enemies that hit targets affected by this have a 20% chance to miss.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2241,
    "flavour_text": "",
    "description": {
        "desc": "Beadle increases the damage of Champions within 2 slots of himself by $amount%, and enemies that hit targets affected by this have a 20% chance to miss."
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
        },
        {
            "effect_string": "evade_damage_change,20",
            "targets": [
                {
                    "type": "distance",
                    "distance": 2
                }
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 8183,
    "large_graphic_id": 8188,
    "properties": {
        "is_formation_ability": true,
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
**Sticky Fingers** (Guess)
> Whenever Beadle attacks an enemy he causes it to immediately drop 20% of the gold it would award on death. The enemy then stops and checks its pockets, stunning it for 2 seconds. This can only occur to each enemy 5 times.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2242,
    "flavour_text": "",
    "description": {
        "desc": "Whenever Beadle attacks an enemy he causes it to immediately drop 20% of the gold it would award on death. The enemy then stops and checks its pockets, stunning it for 2 seconds. This can only occur to each enemy 5 times."
    },
    "effect_keys": [
        {
            "effect_string": "beadle_sticky_fingers,20",
            "graphic": 0,
            "stun_time": 2
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
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
**Share the Glory** (Guess)
> Most positional formation abilities that affect Beadle also affect Grimm if he is in the formation. If Grimm is already affected by the same ability, Beadle instead increases the effect of In The Shadows by 400%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2243,
    "flavour_text": "",
    "description": {
        "desc": "Most positional formation abilities that affect Beadle also affect Grimm if he is in the formation. If Grimm is already affected by the same ability, Beadle instead increases the effect of In The Shadows by 400%."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "beadle_share_the_glory,400,1,16722",
            "buff_effect_key_index": 1,
            "effect_scale_title": "Duplicated",
            "effect_scale_description": "Duplicated by"
        },
        {
            "effect_string": "buff_upgrade,400,16722",
            "stacks_on_trigger": "will_stack_manually",
            "stacks_multiply": true,
            "show_bonus": true,
            "apply_manually": true
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "retain_on_slot_changed": true
    }
}
</pre>
</p>
</details>
</div></div>

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Unknown** (Guess)
> The effect of In The Shadows is increased by 20% for each piece of Epic or better equipment on Champions in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2248,
    "flavour_text": "",
    "description": {
        "desc": "The effect of In The Shadows is increased by 20% for each piece of Epic or better equipment on Champions in the formation, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,20,16722",
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "max_stacks": 60,
            "per_hero_expr": "NumEquipmentWithMinimumRarity(`Epic`)",
            "amount_updated_listeners": [
                "loot_changed",
                "slot_changed"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
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
**Specialisation: Unknown** (Guess)
> The effect of In The Shadows is increased by 0.075% for every item level on your formation's Champions' equipment, stacking multiplicatively. Each individual Champion can contribute at most 1,800 stacks.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2249,
    "flavour_text": "",
    "description": {
        "desc": "The effect of In The Shadows is increased by 0.075% for every item level on your formation's Champions' equipment, stacking multiplicatively. Each individual Champion can contribute at most 1,800 stacks."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,0.075,16722",
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "max_stacks": 1800,
            "per_hero_expr": "NumILevels()",
            "amount_updated_listeners": [
                "loot_changed",
                "slot_changed"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
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
**Specialisation: Unknown** (Guess)
> The effect of In The Shadows is increased by 30% for each piece of Shiny or Golden equipment on Champions in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2250,
    "flavour_text": "",
    "description": {
        "desc": "The effect of In The Shadows is increased by 30% for each piece of Shiny or Golden equipment on Champions in the formation, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,30,16722",
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "max_stacks": 60,
            "per_hero_expr": "NumEquipmentWithMinimumShininess(`Shiny`)",
            "amount_updated_listeners": [
                "loot_changed",
                "slot_changed"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
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
**Unlock Adventure: The Missing Lord (Beadle & Grimm)** (Complete Area 50)
> Search for the absent Open Lord of Waterdeep.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Arvaiss' Next Trap Icon](images/beadle/8192.png) **Variant 1: Arvaiss' Next Trap** (Complete Area 75)
> Various creatures attack your formation, each with different abilities. See the buff icon for details.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Showoffs Icon](images/beadle/8193.png) **Variant 2: Showoffs** (Complete Area 125)
> Beadle & Grimm take up a slot in your formation. Only Champions with a STR of 18 or higher, DEX of 17 or higher, or INT of 16 or higher can be used.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![A Contest, You Say? Icon](images/beadle/8194.png) **Variant 3: A Contest, You Say?** (Complete Area 175)
> Enemies have 300% more health and attack twice as often. When a Champion kills an enemy, all Champions with that same attack type (melee, ranged, or magic) deal 2% less damage, and all Champions with other attack types deal 1% more damage.
</div></div>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Beadle & Grimm" fill="#aaa" data-formationName="Beadle & Grimm" data-campaignName="Ahghairon's Day" width="362" height="160"><circle cx="135" cy="85" r="15"/><circle cx="135" cy="125" r="15"/><circle cx="95" cy="25" r="15"/><circle cx="95" cy="65" r="15"/><circle cx="95" cy="105" r="15"/><circle cx="95" cy="145" r="15"/><circle cx="55" cy="45" r="15"/><circle cx="55" cy="85" r="15"/><circle cx="15" cy="65" r="15"/><circle cx="15" cy="105" r="15"/><text x="165" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Beadle & Grimm</text><text x="165" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Ahghairon's Day</text></svg>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*