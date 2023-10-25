[Back to Main](index.md)

# Index

* [Season 7](#season-7)
* [Theme](#theme)
* [Changes](#changes)
* [Shaka](#shaka)
<br />

# Season 7

Season 7 is guesstimated to start on 17 January 2024.

# Theme

![Shaka Season Portrait](images/season_7/shaka.png)![Unknown Season Champion Portrait](images/general/unknown_champion.png)![Unknown Season Champion Portrait](images/general/unknown_champion.png)![Unknown Season Champion Portrait](images/general/unknown_champion.png)![Unknown Season Champion Portrait](images/general/unknown_champion.png)

We only have data for one seasonal champion so far. That is Shaka. The rest are as yet unknown.

# Changes

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Shaka

![Shaka Portrait](images/season_7/shaka.png)

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> Shaka attempts to solve a celestial puzzle with the potential for great rewards. Four random slots in the formation are assigned a random tag. For each Champion in those slots that match the slot's tag, Shaka increases the damage of all Champions by $(amount)%, stacking multiplicatively. A fifth slot is chosen but remains locked with an unknown tag until a specialization is chosen.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [],
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
**Unknown** (Guess)
> Shaka adds 25 temporary health to the entire party when changing areas, and refreshes them every 10 seconds. The amount of hit points is increased by 10% for each A Celestial Puzzle slot that is filled properly, stacking additively.
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
            "on_trigger": "area_changed",
            "targets": ["all"]
        },
        {
            "off_when_benched": true,
            "effect_string": "grant_all_instant_temporary_hp,10",
            "on_trigger": "on_timer,10",
            "targets": ["all"]
        },
        {
            "amount_updated_listeners": ["slot_changed"],
            "has_effect_key": "shaka_puzzle_match",
            "show_bonus": true,
            "amount_func": "add",
            "stack_func": "per_slot",
            "effect_string": "buff_upgrade,25,13416,0"
        },
        {
            "effect_string": "do_nothing,10",
            "comment": "This effect key is just so we have a base amount for the description. Things that buff celestial resistance should also buff this key."
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
            "effect_string": "buff_upgrade,70,13417,2"
        },
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


[Back to Top](#top)

*Last Modified: {{ site.time }}*