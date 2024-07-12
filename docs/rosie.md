[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsImage">
        ![PC Portrait for Rosie](images/rosie/portrait.png)Portrait
    </span>
</span>

# Rosie

Weighing in at just under 30 pounds and with a grandmotherly demeanor befitting her advanced age, Rosie Beestinger is easily mistaken for someone on the wrong side of the 'aggressor/victim' relationship. But this is a mix-up that few people make more than once.

# Changes

Rosie is potentially a reworked champion in the Highharvestide event on 4 September 2024.

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> Rosie deals +400% increased damage for every Champion in the formation younger than she is, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2062,
    "flavour_text": "",
    "description": {
        "desc": "Rosie deals +$amount% increased damage for every Champion in the formation younger than she is, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack_amount,400"
        },
        {
            "effect_string": "hero_dps_multiplier_mult,0",
            "amount_expr": "upgrade_amount(15604,0)",
            "amount_mult": "mult",
            "show_bonus": true,
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "age<110&&hero_id!=146",
            "amount_updated_listeners": [
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
        "default_bonus_index": 0
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> 
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2063,
    "flavour_text": "",
    "description": {
        "desc": ""
    },
    "effect_keys": [],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
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
**Unknown** (Guess)
> 
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2064,
    "flavour_text": "",
    "description": {
        "desc": ""
    },
    "effect_keys": [],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
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
**Unknown** (Guess)
> 
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2065,
    "flavour_text": "",
    "description": {
        "desc": ""
    },
    "effect_keys": [],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
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
**Unknown** (Guess)
> 
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2066,
    "flavour_text": "",
    "description": {
        "desc": ""
    },
    "effect_keys": [],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
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
**Unknown** (Guess)
> 
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2067,
    "flavour_text": "",
    "description": {
        "desc": ""
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,100,15604",
            "amount_func": "mult",
            "stack_func": "per_hero_attribute"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 5211,
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
**Specialisation: Familiar Friends** (Guess)
> 
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2068,
    "flavour_text": "",
    "description": {
        "desc": ""
    },
    "effect_keys": [],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 24375,
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
**Specialisation: Grandmother Night** (Guess)
> 
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2069,
    "flavour_text": "",
    "description": {
        "desc": ""
    },
    "effect_keys": [],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 24377,
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
**Specialisation: Grandma Bod** (Guess)
> 
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2070,
    "flavour_text": "",
    "description": {
        "desc": ""
    },
    "effect_keys": [],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 24376,
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
**Specialisation: Busy Beestinger** (Guess)
> 
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2071,
    "flavour_text": "",
    "description": {
        "desc": ""
    },
    "effect_keys": [],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 24374,
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
**Specialisation: Slower Decay** (Guess)
> 
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2072,
    "flavour_text": "",
    "description": {
        "desc": ""
    },
    "effect_keys": [],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 24378,
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

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![A Fool's Errand (Rosie) Icon](images/rosie/2577.png) **Unlock Adventure: A Fool's Errand (Rosie)** (Complete Area 50)
> Save the village from a foolish prank gone wrong.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![A Lighter Touch Icon](images/rosie/5189.png) **Variant 1: A Lighter Touch** (Complete Area 75)
> Only Champions with STR of 14 or lower can be used. Champions with INT of 14 or higher deal 400% additional damage.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Flay the Fools Icon](images/rosie/5190.png) **Variant 2: Flay the Fools** (Complete Area 125)
> Mind Flayers spawn in boss areas. While the Mind Flayer is alive, all other enemies are immune to damage.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Beestingers Unleashed Icon](images/rosie/5191.png) **Variant 3: Beestingers Unleashed** (Complete Area 175)
> Only Strix and Rosie can be used. Their attack and ultimate cooldowns are greatly reduced. Their damage is increased in each area. Deflect Missiles has no cooldown. This variant contains unique dialog!
</div></div>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Rosie" fill="#aaa" data-formationName="Rosie" data-campaignName="Festival of Fools" width="327" height="160"><circle cx="175" cy="65" r="15"/><circle cx="175" cy="105" r="15"/><circle cx="135" cy="45" r="15"/><circle cx="135" cy="85" r="15"/><circle cx="95" cy="65" r="15"/><circle cx="95" cy="105" r="15"/><circle cx="55" cy="45" r="15"/><circle cx="55" cy="125" r="15"/><circle cx="15" cy="25" r="15"/><circle cx="15" cy="145" r="15"/><text x="205" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Rosie</text><text x="205" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Festival of Fools</text></svg>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*