[Back to Main](index.md)

{% comment %}
![PC Portrait](images/portrait_nixie.png)
{% endcomment %}

# Nixie

Nixie is a "tiefling sorcerer and pyromaniac" from the 1 For All sketch show.

[https://tvtropes.org/pmwiki/pmwiki.php/Characters/OneForAll](https://tvtropes.org/pmwiki/pmwiki.php/Characters/OneForAll)

# Basic Information

Nixie will be the new champion in the The Running event on 3 May 2023.

* Seat: Unknown
* Race: Tiefling (Guess)
* Class: Sorcerer (Guess)
* Roles: DPS / Support (Guess)
* Age: Unknown
* Gender: Female (Guess)
* Alignment: Unknown
* Affiliation: Awful Ones (Guess)
* Stats: Unknown

# Formation

Unknown.
{% comment %}
![Formation Layout](images/formation_nixie.png)
{% endcomment %}

# Abilities

**Base Attack: Unknown**
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
</pre>
</p>
</details>
<br />

**Ultimate Attack: Unknown**
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
</pre>
</p>
</details>
<br />

**Unknown**
> Nixie increases the damage of all Champions with a Charisma of 17+ by `$(amount)%`, including herself.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "effect_string": "hero_dps_multiplier_mult,100",
        "filter_targets": [{
            "score": 17,
            "stat": "cha",
            "check": ">=",
            "type": "stat_score"
        }],
        "targets": ["all"]
    }],
    "requirements": "",
    "description": {"desc": "$(source_hero) increases the damage of all Champions with a Charisma of 17+ by $(amount)%, including herself."},
    "id": 1473,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {"is_formation_ability": true}
}
</pre>
</p>
</details>
<br />

**Wild Magic Surge** (Guess)
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {"effect_string": "nixie_wild_magic_surge"},
        {
            "probability": 20,
            "effect_string": "nixie_no_effect",
            "apply_manually": true
        },
        {
            "probability": 20,
            "effect_string": "nixie_engulfing_flames",
            "apply_manually": true
        },
        {
            "probability": 10,
            "effect_string": "nixie_potted_punch",
            "apply_manually": true
        },
        {
            "probability": 10,
            "effect_string": "nixie_coin_cascade",
            "apply_manually": true
        },
        {
            "probability": 10,
            "effect_string": "nixie_shockwave",
            "apply_manually": true
        },
        {
            "probability": 10,
            "effect_string": "nixie_feeling_blue",
            "apply_manually": true
        },
        {
            "probability": 10,
            "effect_string": "nixie_eldritch_entourage",
            "apply_manually": true
        },
        {
            "probability": 10,
            "effect_string": "nixie_enlarge",
            "apply_manually": true
        }
    ],
    "requirements": "",
    "description": {"desc": ""},
    "id": 1474,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "default_bonus_index": 0,
        "owner_use_outgoing_description": true,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
<br />

# Specialisations

**Specialisation: Unknown**
> Nixie increases the damage bonus of `$(upgrade_name id)` by `$(amount)%` for each Tiefling champion in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stacks_multiply": true,
        "off_when_benched": true,
        "effect_string": "buff_upgrade_per_any_tagged_crusader_mult,200,10887,tiefling"
    }],
    "requirements": "",
    "description": {"desc": "$(source_hero) increases the damage bonus of $(upgrade_name id) by $(amount)% for each Tiefling champion in the formation, stacking multiplicatively."},
    "id": 1476,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "spec_option_post_apply_info": "Tiefling Champions: $num_stacks",
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
<br />

**Specialisation: Unknown**
> Nixie increases the damage bonus of `$(upgrade_name id)` by `$(amount)%` for each Champion with a total ability score of 78 or less in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stack_title": "Affected Champions",
        "amount_updated_listeners": [
            "slot_changed",
            "feat_changed"
        ],
        "show_bonus": true,
        "amount_func": "mult",
        "stack_func": "per_crusader",
        "effect_string": "buff_upgrade,150,10887",
        "stack_func_data": {"target_filters": [{
            "stat": "total_ability_score",
            "comparison": "<=",
            "type": "stat",
            "value": 78
        }]}
    }],
    "requirements": "",
    "description": {"desc": "$(source_hero) increases the damage bonus of $(upgrade_name id) by $(amount)% for each Champion with a total ability score of 78 or less in the formation, stacking multiplicatively."},
    "id": 1477,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "spec_option_post_apply_info": "Qualified Champions: $num_stacks",
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
<br />

**Specialisation: Unknown**
> Nixie increases the damage bonus of `$(upgrade_name id)` by `$(amount)%` for each Chaotic champion in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stacks_multiply": true,
        "off_when_benched": true,
        "effect_string": "buff_upgrade_per_any_tagged_crusader_mult,100,10887,chaotic"
    }],
    "requirements": "",
    "description": {"desc": "$(source_hero) increases the damage bonus of $(upgrade_name id) by $(amount)% for each Chaotic champion in the formation, stacking multiplicatively."},
    "id": 1478,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "spec_option_post_apply_info": "Chaotic Champions: $num_stacks",
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
<br />

# Items

| Slot | Name | Type |
|---|---|---|
| 1 | `Unknown` | Unknown |
| 2 | `Unknown` | Unknown |
| 3 | `Unknown` | Unknown |
| 4 | `Unknown` | Unknown |
| 5 | `Unknown` | Unknown |
| 6 | `Unknown` | Unknown |

# Feats

Unknown.

# Legendaries

Unknown.

{% comment %}
# Console Portrait

![Console Portrait](images/console_nixie.png)
{% endcomment %}

[Back to Top](#top)

*Last Modified: {{ site.time }}*