[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Ishi](images/ishi/portrait.png)
        </span>
        <span>
        Portrait
        </span>
    </span>
</span>

# Ishi

Ishi Snaggletooth hails from a warren of Kobolds living in the sewers under Baldur's Gate. Always the type to be more curious than careful, she accidentally stowed away on a ship headed to Port Nyanzaru. There, she met her dear friend, the Firbolg Littlefox. Often shunned by humans, Ishi hopes to prove herself as a true hero however she can. Ishi's biggest claim to fame is the defeat of the known swordsman, Hershel Von Saberburg, and since that day she's touted herself as a renowned duelist to anyone that'll listen to her.

# Changes

Ishi will be a reworked champion in the Grand Revel event on 5 February 2025.

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> Ishi always attacks 0.25 seconds faster than the fastest member of the formation, or every 6 seconds if nobody else is in the formation.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2203,
    "flavour_text": "",
    "description": {
        "desc": "Ishi always attacks 0.25 seconds faster than the fastest member of the formation, or every 6 seconds if nobody else is in the formation."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "do_nothing"
        }
    ],
    "requirements": "",
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
**Monsters are People Too!** (Guess)
> Increases Ishi's damage by 100% for each non-human in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2204,
    "flavour_text": "",
    "description": {
        "desc": "Increases Ishi's damage by $amount% for each non-human in the formation, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "pre_stack,100"
        },
        {
            "off_when_benched": true,
            "effect_string": "hero_dps_multiplier_mult,0",
            "amount_expr": "upgrade_amount(16527,0)",
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "!HasTag(`human`)",
            "show_bonus": true
        }
    ],
    "requirements": "",
    "graphic_id": 3671,
    "large_graphic_id": 3670,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
        "owner_use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 1
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Let's Find Some Treasure** (Guess)
> Increase the party's gold find by 100% for each non-human Champion, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2205,
    "flavour_text": "",
    "description": {
        "desc": "Increase the party's gold find by $amount% for each non-human Champion, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "gold_multiplier_mult,100",
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "!HasTag(`human`)",
            "show_bonus": true
        }
    ],
    "requirements": "",
    "graphic_id": 3673,
    "large_graphic_id": 3672,
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
**Treasure Hunter** (Guess)
> Increase the effect of Let's Find Some Treasure by 100% for every 4 seconds it has been since Ishi attacked but did not kill an enemy, stacking multiplicatively up to 15 times.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2206,
    "flavour_text": "",
    "description": {
        "desc": "Increase the effect of Let's Find Some Treasure by $amount% for every $(per_seconds___2) seconds it has been since Ishi attacked but did not kill an enemy, stacking multiplicatively up to $max_stacks times."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,100,16528",
            "manual_stacking": true,
            "show_bonus": true,
            "amount_func": "mult",
            "max_stacks": 15
        },
        {
            "off_when_benched": true,
            "effect_string": "ishi_treasure_hunter",
            "per_seconds": 4
        }
    ],
    "requirements": "",
    "graphic_id": 7591,
    "large_graphic_id": 7588,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
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
**Faster Harder Stronger** (Guess)
> 
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2207,
    "flavour_text": "",
    "description": {
        "desc": ""
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "do_nothing"
        }
    ],
    "requirements": "",
    "graphic_id": 25404,
    "large_graphic_id": 25398,
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
**Winner Take All** (Guess)
> 
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2208,
    "flavour_text": "",
    "description": {
        "desc": ""
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "do_nothing"
        }
    ],
    "requirements": "",
    "graphic_id": 25405,
    "large_graphic_id": 25399,
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

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Friend to Shorties** (Guess)
> 
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2209,
    "flavour_text": "",
    "description": {
        "desc": ""
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "do_nothing"
        }
    ],
    "requirements": "",
    "graphic_id": 3680,
    "large_graphic_id": 3680,
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
**Specialisation: Friend to Tall Monsters** (Guess)
> 
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2210,
    "flavour_text": "",
    "description": {
        "desc": ""
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "do_nothing"
        }
    ],
    "requirements": "",
    "graphic_id": 3681,
    "large_graphic_id": 3681,
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
**Specialisation: Friend to the Exceptional** (Guess)
> 
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2211,
    "flavour_text": "",
    "description": {
        "desc": ""
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "do_nothing"
        }
    ],
    "requirements": "",
    "graphic_id": 25410,
    "large_graphic_id": 25410,
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

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unlock Adventure: Reclaiming the Past (Ishi)** (Complete Area 50)
> Help Laeral Silverhand track down a retired Open Lord.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Memory Magic Icon](images/ishi/3683.png) **Variant 1: Memory Magic** (Complete Area 75)
> Up to two slots in the formation are affected by a magical curse The curse moves to an adjacent slot(s) every 15 seconds Champions affected have their attacks disabled
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Orcs Among Us Icon](images/ishi/3684.png) **Variant 2: Orcs Among Us** (Complete Area 125)
> Powerful Orc Fighters spawn with each wave These additional monsters do not drop gold
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![No Humans Allowed Icon](images/ishi/3685.png) **Variant 3: No Humans Allowed** (Complete Area 175)
> Only non-human Champions can be used
</div></div>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Ishi" fill="#aaa" data-formationName="Ishi" data-campaignName="Ahghairon's Day" width="324" height="120"><circle cx="175" cy="65" r="15"/><circle cx="175" cy="105" r="15"/><circle cx="135" cy="45" r="15"/><circle cx="135" cy="85" r="15"/><circle cx="95" cy="25" r="15"/><circle cx="95" cy="65" r="15"/><circle cx="95" cy="105" r="15"/><circle cx="55" cy="85" r="15"/><circle cx="15" cy="25" r="15"/><circle cx="15" cy="65" r="15"/><text x="205" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Ishi</text><text x="205" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Ahghairon's Day</text></svg>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*