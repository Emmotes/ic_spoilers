[Back to Main](index.md)

# Index

* [Season 5](#season-5)
* [Theme](#theme)
* [Changes](#changes)
* [Jim](#jim)
<br />

# Season 5

Season 5 is guesstimated to start on 13 September 2023 with the preview week arriving one week prior on 06 September 2023.

# Theme

![Jim Season Portrait](images/season_5/jim.png)![Unknown Season Champion Portrait](images/unknown_season_champion.png)![Unknown Season Champion Portrait](images/unknown_season_champion.png)![Unknown Season Champion Portrait](images/unknown_season_champion.png)![Unknown Season Champion Portrait](images/unknown_season_champion.png)

We believe the one seasonal champion this time around is likely to be Jim. The rest are as yet unknown.

# Changes

Only one champion has seen changes so far.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. Making assumptions on how the champions will turn out based on this information would be premature.

# Jim

![Jim Portrait](images/season_5/jim.png)

**Ultimate: Jim's Magical Maelstrom**
> Jim attacks all enemies with a showy shower of sparks and energizes his Fan Club for 15 seconds.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Jim attacks all enemies with a showy shower of sparks.",
    "long_description": "Jim attacks all enemies with a showy shower of sparks and energizes his Fan Club for 15 seconds.",
    "damage_modifier": 0.03,
    "damage_types": ["magic"],
    "graphic_id": 6117,
    "target": "all",
    "aoe_radius": 0,
    "tags": [
        "ranged",
        "aoe",
        "ultimate"
    ],
    "num_targets": 1,
    "animations": [{
        "hit_sound": 133,
        "projectile_id": 6093,
        "firework_id": 6092,
        "shoot_sound": 149,
        "jimtext_id": 6091,
        "buff_effect_string": "buff_upgrade,400,12128",
        "animation_sequence": 4,
        "type": "jim_ult_v2",
        "shoot_frame": 18,
        "buff_time": 15
    }],
    "name": "Jim's Magical Maelstrom",
    "cooldown": 180,
    "id": 658
}
</pre>
</p>
</details>
<br />

**Hidey-Box** (Guess)
> Whenever the formation is under attack, Jim hides in a small protective box and fires twice as many Magic Missiles when he attacks.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "in_anim": 7,
        "out_anim": 8,
        "off_when_benched": true,
        "effect_string": "transform_while_attacked,6090,225"
    }],
    "requirements": [],
    "description": {"desc": "Whenever the formation is under attack, Jim hides in a small protective box and fires twice as many Magic Missiles when he attacks."},
    "id": 1606,
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

**Fan Club** (Guess)
> Increases the damage of Jim and everyone in the columns in front of and behind him by `$(not_buffed amount)%` for each affected Champion, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "amount_updated_listeners": [
            "slot_changed",
            "upgrade_unlocked"
        ],
        "stacks_multiply": true,
        "off_when_benched": true,
        "show_bonus": true,
        "amount_func": "mult",
        "use_computed_amount_for_description": true,
        "stack_func": "per_upgrade_targets",
        "effect_string": "hero_dps_multiplier_mult,200",
        "stack_func_data": {
            "only_slots_with_heroes": true,
            "upgrade_id": 12128
        },
        "targets": ["self_and_behind_and_ahead"]
    }],
    "requirements": [],
    "description": {"desc": "Increases the damage of Jim and everyone in the columns in front of and behind him by $(not_buffed amount)% for each affected Champion, stacking multiplicatively."},
    "id": 1607,
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

**Wand of Wonder** (Guess)
> 
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{"off_when_benched": true}],
    "requirements": [],
    "description": [],
    "id": 1608,
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

**Magical Mystery Tour** (Guess)
> The effect of Fan Club is increased by `$(not_buffed amount)%` each time an enemy, ally, or ally's equipment is polymorphed or transformed in some way, stacking multiplicatively up to `$(max_stacks)` times. Stacks reset when changing areas.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{"off_when_benched": true}],
    "requirements": [],
    "description": {"desc": "The effect of Fan Club is increased by $(not_buffed amount)% each time an enemy, ally, or ally's equipment is polymorphed or transformed in some way, stacking multiplicatively up to $(max_stacks) times. Stacks reset when changing areas."},
    "id": 1609,
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

**Fashion Week** (Guess)
> The effect of Fan Club is increased by `$(amount)%` for each Champion with a non-base skin equipped in the formation, stacking additively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "amount_updated_listeners": [
            "slot_changed",
            "skin_changed"
        ],
        "stacks_multiply": false,
        "off_when_benched": true,
        "show_bonus": true,
        "amount_func": "add",
        "stack_func": "per_skin",
        "effect_string": "buff_upgrade,400,12128"
    }],
    "requirements": [],
    "description": {"desc": "The effect of Fan Club is increased by $(amount)% for each Champion with a non-base skin equipped in the formation, stacking additively."},
    "id": 1610,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {"is_formation_ability": true}
}
</pre>
</p>
</details>
<br />

**Unknown** (Guess)
> Increases the effect of Jim's specializations by `$(amount)%`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{"effect_string": "buff_upgrades,100,12132,12133,12134"}],
    "requirements": [],
    "description": {"desc": "Increases the effect of Jim's specializations by $(amount)%"},
    "id": 1614,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": []
}
</pre>
</p>
</details>
<br />

**Specialisation: Darkmagic Cheer Squad** (Guess)
> Increases the effect of Fan Club by `$(amount)%`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "off_when_benched": true,
        "effect_string": "buff_upgrade,400,12128"
    }],
    "requirements": [],
    "description": {"desc": "Increases the effect of Fan Club by $(amount)%"},
    "id": 1611,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {"is_formation_ability": true}
}
</pre>
</p>
</details>
<br />

**Specialisation: Magic magic magic** (Guess)
> Increases the damage of all Champions whose base attacks are magic by `$(not_buffed amount)%` for each Champion whose base attacks are magic in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "amount_updated_listeners": [
            "slot_changed",
            "attack_changed"
        ],
        "stacks_multiply": true,
        "off_when_benched": true,
        "show_bonus": true,
        "amount_func": "mult",
        "use_computed_amount_for_description": true,
        "stack_func": "per_crusader",
        "effect_string": "hero_dps_multiplier_mult,100",
        "filter_targets": [{
            "attacks": ["magic"],
            "type": "attack_type"
        }],
        "stack_func_data": {"target_filters": [{
            "attacks": ["magic"],
            "type": "attack_type"
        }]},
        "targets": ["all"]
    }],
    "requirements": [],
    "description": {"desc": "Increases the damage of all Champions whose base attacks are magic by $(not_buffed amount)% for each Champion whose base attacks are magic in the formation, stacking multiplicatively."},
    "id": 1612,
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

**Specialisation: Unpaid Extras** (Guess)
> Increases the effect of Fan Club by `$(amount)%`. All members of Acquisitions Incorporated and The "C" Team in the formation join Jim's Fan Club, regardless of their position in the formation.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,100,12128"
        },
        {
            "amount_updated_listeners": ["slot_changed"],
            "off_when_benched": true,
            "add_targets": [{
                "type": "by_tags",
                "tags": "acqinc|cteam"
            }],
            "effect_string": "add_target_to_upgrade,,12128"
        }
    ],
    "requirements": [],
    "description": {"desc": "Increases the effect of Fan Club by $(amount)%. All members of Acquisitions Incorporated and The \"C\" Team in the formation join Jim's Fan Club, regardless of their position in the formation."},
    "id": 1613,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "indexed_effect_properties": true,
        "is_formation_ability": true,
        "default_bonus_index": 0,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
<br />


[Back to Top](#top)

*Last Modified: {{ site.time }}*