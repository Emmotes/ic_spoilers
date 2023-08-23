[Back to Main](index.md)

# Index

* [Season 6](#season-6)
* [Theme](#theme)
* [Changes](#changes)
* [Dungeon Master](#dungeon-master)
* [Korth](#korth)
* [Nrakk](#nrakk)
* [Sisaspia](#sisaspia)
* [Warden](#warden)
* [Zorbu](#zorbu)
<br />

# Season 6

Season 6 is guesstimated to start on 15 November 2023 with the preview week (and the data changes) arriving one week prior on 08 November 2023.

# Theme

![Dungeon Master Season Portrait](images/season_6/dm.png)![Korth Season Portrait](images/season_6/korth.png)![Nrakk Season Portrait](images/season_6/nrakk.png)![Sisaspia Season Portrait](images/season_6/sisaspia.png)![Warden Season Portrait](images/season_6/warden.png)![Zorbu Season Portrait](images/season_6/zorbu.png)

We believe the six seasonal champions this time around are likely to be Dungeon Master, Korth, Nrakk, Sisaspia, Warden and Zorbu.

# Changes

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - or specialisations might not be marked as such - etc..

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. Making assumptions on how the champions will turn out based on this information would be premature.

# Dungeon Master

![Dungeon Master Portrait](images/season_6/dm.png)

No changes as of yet.

# Korth

![Korth Portrait](images/season_6/korth.png)

No changes as of yet.

# Nrakk

![Nrakk Portrait](images/season_6/nrakk.png)

No changes as of yet.

# Sisaspia

![Sisaspia Portrait](images/season_6/sisaspia.png)

No changes as of yet.

# Warden

![Warden Portrait](images/season_6/warden.png)

No changes as of yet.

# Zorbu

![Zorbu Portrait](images/season_6/zorbu.png)

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Seething Hatred** (Guess)
> Zorbu's damage is increased by an amount equal to `$(amount)%` of his base Know Your Enemy buffs.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{"effect_string": "hero_dps_mult_percent_lifelong_enemies,10"}],
    "requirements": "",
    "description": {"desc": "Zorbu's damage is increased by an amount equal to $(amount)% of his base Know Your Enemy buffs."},
    "id": 1695,
    "flavour_text": "",
    "graphic_id": 5892,
    "properties": {
        "use_outgoing_description": true,
        "is_formation_ability": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Hunter's Pack** (Guess)
> Increases the damage of champions adjacent to Zorbu with a DEX score of 15 or higher by `$(amount)%`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "effect_string": "hero_dps_multiplier_mult,500",
        "filter_targets": [{
            "score": 14,
            "stat": "dex",
            "check": "greater_than",
            "type": "stat_score"
        }],
        "targets": [{
            "distance": 1,
            "self": false,
            "type": "distance"
        }]
    }],
    "requirements": "",
    "description": {"desc": "Increases the damage of champions adjacent to Zorbu with a DEX score of 15 or higher by $(amount)%."},
    "id": 1696,
    "flavour_text": "",
    "graphic_id": 2422,
    "properties": {"is_formation_ability": true}
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Focused Fury** (Guess)
> Zorbu's damage is increased by the bonus provided by Hunter's Pack.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "amount_expr": "upgrade_amount(12991,0)",
        "show_bonus": true,
        "effect_string": "hero_dps_multiplier_mult,0"
    }],
    "requirements": "",
    "description": {"desc": "Zorbu's damage is increased by the bonus provided by Hunter's Pack."},
    "id": 1697,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "use_outgoing_description": true,
        "is_formation_ability": true,
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> Increases Hunter's Pack by the bonus provided by Focused Fury.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "amount_expr": "upgrade_amount(12990,dps_update)",
        "show_bonus": true,
        "effect_string": "buff_upgrade,0,12991"
    }],
    "requirements": "",
    "description": {"desc": "Increases Hunter's Pack by the bonus provided by Focused Fury."},
    "id": 1698,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "spec_option_post_apply_info": "Hunter's Pack Bonus: $sample_amount%",
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> The Know Your Enemy counters additionally increment once for each Champion in the formation affected by Hunter's Pack each time a valid enemy is killed.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stacks_multiply": false,
        "stack_func": "per_upgrade_targets",
        "effect_string": "additional_lifelong_enemies_count,1",
        "stack_func_data": {"upgrade_id": 12991}
    }],
    "requirements": "",
    "description": {"desc": "The Know Your Enemy counters additionally increment once for each Champion in the formation affected by Hunter's Pack each time a valid enemy is killed."},
    "id": 1699,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "spec_option_post_apply_info": "Hunter's Pack Champions: $num_stacks",
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
</div></div>


[Back to Top](#top)

*Last Modified: {{ site.time }}*