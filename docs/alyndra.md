[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Alyndra](images/alyndra/portrait.png)
        </span>
        <span>
        Portrait
        </span>
    </span>
</span>

# Alyndra

Alyndra Alexandria Garanahil Sarrbarand is known by many names: Lorekeeper of Rime Spiro, Kinscribe of Clan Monkeymouse, Daughter of Oblivion, Fate Changer, Knight of Wonder and Captivation...and apologetic offspring of Avren & Sofieus.

# Changes

Alyndra will be a reworked champion in the Highharvestide event on 10 September 2025 (expected a week after event start due to Worst the Wait).

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**I See Some Friends** (Guess)
> When Alyndra is in the formation, all Champions from the Heroes of the Planes affiliation may be used, even if a Patron, Variant, or other restriction would say otherwise.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2430,
    "flavour_text": "",
    "description": {
        "desc": "When Alyndra is in the formation, all Champions from the Heroes of the Planes affiliation may be used, even if a Patron, Variant, or other restriction would say otherwise."
    },
    "effect_keys": [
        {
            "effect_string": "do_nothing"
        }
    ],
    "requirements": "",
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
**Portent** (Guess)
> Alyndra glances into the future. The next two unique Champions to use their ultimate abilities gain the Portent buff for 40 seconds, which increases their base damage by 1000% and reduces their base attack cooldown by 0.5 sec. If an affected Champion uses their ultimate ability again before the Portent buff expires, their Portent buff duration is refreshed.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2437,
    "flavour_text": "",
    "description": {
        "desc": "Alyndra glances into the future. The next two unique Champions to use their ultimate abilities gain the Portent buff for 40 seconds, which increases their base damage by 1000% and reduces their base attack cooldown by 0.5 sec. If an affected Champion uses their ultimate ability again before the Portent buff expires, their Portent buff duration is refreshed."
    },
    "effect_keys": [
        {
            "effect_string": "alyndra_portent_v2,200",
            "portent_time": 40,
            "portent_number": 2,
            "applied_effect_id_to_portented": 2439,
            "off_when_benched": true
        },
        {
            "effect_string": "set_ultimate_attack,2"
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
**Circle of Divination** (Guess)
> Alyndra increases the damage of adjacent Champions by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2431,
    "flavour_text": "",
    "description": {
        "desc": "Alyndra increases the damage of adjacent Champions by $amount%."
    },
    "effect_keys": [
        {
            "effect_string": "hero_dps_multiplier_mult,100",
            "off_when_benched": true,
            "targets": [
                "adj"
            ]
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
**I Have Foreseen This** (Guess)
> For each Champion in the formation affected by Portent, Alyndra's Circle of Divination is increased by 100%, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2432,
    "flavour_text": "",
    "description": {
        "desc": "For each Champion in the formation affected by Portent, Alyndra's Circle of Divination is increased by 100%, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "do_nothing"
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
**Brows of Judgement** (Guess)
> Griff, Alyndra's owl companion, sits on Alyndra's shoulder and judges enemies as they spawn. They have a 25% chance to judge normal enemies as unworthy, and a 100% chance to judge bosses as unworthy. For each unworthy normal enemy that spawns, Circle of Divination is increased by 20%, stacking multiplicatively. If a boss has spawned in the current area, Circle of Divination is increased by an additional 1000%. Griff can judge up to 100 normal enemies per area, and the stacks reset when changing areas.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2433,
    "flavour_text": "",
    "description": {
        "desc": "Griff, Alyndra's owl companion, sits on Alyndra's shoulder and judges enemies as they spawn. They have a 25% chance to judge normal enemies as unworthy, and a 100% chance to judge bosses as unworthy. For each unworthy normal enemy that spawns, Circle of Divination is increased by 20%, stacking multiplicatively. If a boss has spawned in the current area, Circle of Divination is increased by an additional 1000%. Griff can judge up to 100 normal enemies per area, and the stacks reset when changing areas."
    },
    "effect_keys": [
        {
            "effect_string": "do_nothing"
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

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Expansive Vision** (Guess)
> Portent now applies to the next 3 Champions to use their ultimate abilities instead of 2, and the effect is increased by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2434,
    "flavour_text": "",
    "description": {
        "desc": "Portent now applies to the next 3 Champions to use their ultimate abilities instead of 2, and the effect is increased by 100%."
    },
    "effect_keys": [
        {
            "effect_string": "do_nothing"
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
**Specialisation: Extra Judgy** (Guess)
> Doubles Griff's chance to judge enemies as unworthy with Brows of Judgement, increases the buff by 100%, and when changing areas, half of the stacks persist.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2435,
    "flavour_text": "",
    "description": {
        "desc": "Doubles Griff's chance to judge enemies as unworthy with Brows of Judgement, increases the buff by 100%, and when changing areas, half of the stacks persist."
    },
    "effect_keys": [
        {
            "effect_string": "do_nothing"
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
**Specialisation: Heroes of the Planes** (Guess)
> If Portent is applied to a Champion under the effect of certain Heroes of the Planes Champions' abilities, those effects are increased in power.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2436,
    "flavour_text": "",
    "description": {
        "desc": "If Portent is applied to a Champion under the effect of certain Heroes of the Planes Champions' abilities, those effects are increased in power"
    },
    "effect_keys": [
        {
            "effect_string": "do_nothing"
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

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unlock Adventure: A Fool's Errand (Alyndra)** (Complete Area 50)
> Save the village from a foolish prank gone wrong.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Future Sight Icon](images/alyndra/9999.png) **Variant 1: Future Sight** (Complete Area 75)
> In each boss area, you will encounter the current boss AND the next boss at once. You'll need to defeat both to progress. Chadwick joins the formation. He mostly observes and tries to figure out what's going on.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Frost Wave Icon](images/alyndra/10000.png) **Variant 2: Frost Wave** (Complete Area 125)
> Additional Frost Giants appear in each area. Each of these additional Frost Giants start with 4 hits-based hit points. Every 25 areas they gain 4 additional hits-based hit points. Champion damage is reduced by 99%.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Knowledge Over Power Icon](images/alyndra/10001.png) **Variant 3: Knowledge Over Power** (Complete Area 175)
> Only Champions with INT of 14 or higher can be used. Alyndra starts in your formation. She can be moved or removed.
</div></div>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Alyndra" fill="#aaa" data-formationName="Alyndra" data-campaignName="Festival of Fools" width="327" height="160"><circle cx="175" cy="105" r="15"/><circle cx="135" cy="45" r="15"/><circle cx="135" cy="85" r="15"/><circle cx="135" cy="125" r="15"/><circle cx="95" cy="25" r="15"/><circle cx="95" cy="65" r="15"/><circle cx="95" cy="145" r="15"/><circle cx="55" cy="45" r="15"/><circle cx="55" cy="125" r="15"/><circle cx="15" cy="65" r="15"/><text x="205" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Alyndra</text><text x="205" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Festival of Fools</text></svg>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*