[Back to Main](index.md)

# Season 4

{% comment %}
![Season Icon](images/s4_icon.png)
{% endcomment %}

Season 3 will end on 24 May 2023 and there's usually a 2-4 week gap between seasons. This means the current guesstimate start for season 4 is early-mid June.

Given the appearance of skins for Companions of the Hall - all called `Mythic` on 14 June 2023 (a date very close to where I would expect new season skins to appear) - it seems likely that they'll be the focus of season 4. If this is true - that will mean the start date for the season will be 21 June 2023.

# Theme

![Season 4 Portrait](images/portrait_s4.png)

It appears the season will be based around the Companions of the Hall - and peripherally related champions. Specifically Regis Artemis Pwent Catti-brie and Wulfgar.

{% comment %}
![Season 4 Ad Panel](images/s4_adpanel.png)
{% endcomment %}

# Changes

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. Making assumptions on how the champions will turn out based on this information would be premature.

# Catti-brie

![Catti-brie Portrait](images/season_catti-brie.png)

**Grievous Wounds** (Guess)
> When an enemy that is Marked is critically hit by any Champion, they are stunned for `$(stun_time)` seconds and the damage bonus of their Mark is increased by `$(amount)%`. This effect can only occur every `$(cooldown_time)` seconds, and the damage bonus increase can stack multiplicatively up to `$(max_stacks)` times.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "cooldown_time": 10,
        "stun_time": 5,
        "effect_string": "cattibrie_grievous_wounds_v2,100",
        "max_stacks": 10
    }],
    "requirements": "",
    "description": {"desc": "When an enemy that is Marked is critically hit by any Champion, they are stunned for $(stun_time) seconds and the damage bonus of their Mark is increased by $(amount)%. This effect can only occur every $(cooldown_time) seconds, and the damage bonus increase can stack multiplicatively up to $(max_stacks) times."},
    "id": 1499,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<br />

**Death March** (Guess)
> `$source increases the damage of herself and all Champions in front of her in the formation by ``$(not_buffed amount)%` each time she gets a critical hit, stacking multiplicatively up to `$(max_stacks)` times and resetting when she changes areas.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stacks_multiply": true,
        "show_bonus": true,
        "effect_string": "hero_dps_multiplier_mult,50",
        "max_stacks": 25,
        "more_triggers": [{
            "action": {"type": "reset"},
            "trigger": "area_changed"
        }],
        "targets": ["ahead"],
        "stacks_on_trigger": "owner_attack"
    }],
    "requirements": "",
    "description": {"desc": "$source increases the damage of herself and all Champions in front of her in the formation by $(not_buffed amount)% each time she gets a critical hit, stacking multiplicatively up to $(max_stacks) times and resetting when she changes areas."},
    "id": 1500,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<br />

[Back to Top](#top)

*Last Modified: {{ site.time }}*