[Back to Main](index.md)

![PC Portrait](images/commodorekrux/portrait.png)

# Commodore Krux

This evergreen champion is going to release with a Xaryxis content drop. It is assumed he'll arrive with the [2 August 2023 content drop](contentdrops.md#xaryxis-5---2-august-2023) (assuming that date is correct for that content drop which it might not be).

> The giff Commodore Krux of the Second Wind met a group of adventurers in the Happy Beholder to recruit them to fight against the astral elves of the Xaryxian Empire.

[Wiki](https://forgottenrealms.fandom.com/wiki/Happy_Beholder)

# Basic Information

Commodore Krux will be an upcoming Evergreen champion.

* Seat: Unknown
* Race: Giff (Guess)
* Class: Unknown
* Roles: Unknown
* Age: Unknown
* Gender: Male (Guess)
* Alignment: Unknown
* Affiliation: Unknown
* Stats: Unknown

# Formation

Unknown.
{% comment %}
![Formation Layout](images/commodorekrux/formation.png)
{% endcomment %}

# Abilities

**Base Attack: Flintlock Pistols** (Ranged)
> Commodore Krux fires a pistol at random targets, dealing one hit.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Commodore Krux fires a pistol at random targets, dealing one hit.",
    "long_description": "",
    "damage_modifier": 1,
    "damage_types": ["ranged"],
    "graphic_id": 0,
    "target": "random",
    "aoe_radius": 0,
    "tags": ["ranged"],
    "num_targets": 1,
    "animations": [{
        "projectile_count": 1,
        "projectile_details": {
            "has_trail": false,
            "extend_line": true,
            "projectile_graphic_id": 5395,
            "projectile_speed": 2400
        },
        "shoot_offset_y": -53,
        "shoot_offset_x": 80,
        "animation_sequence_name": "attack",
        "effects_on_monsters": [{
            "after_damage": true,
            "effect_string": "effect_def,1576"
        }],
        "type": "ranged_attack",
        "projectile": "generic",
        "shoot_frame": 6
    }],
    "name": "Flintlock Pistols",
    "cooldown": 3,
    "id": 643
}
</pre>
</p>
</details>
<br />

**Ultimate Attack: Force Grenade**
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "",
    "long_description": "",
    "damage_modifier": 1,
    "damage_types": ["ranged"],
    "graphic_id": 19891,
    "target": "highest_health",
    "aoe_radius": 0,
    "tags": [
        "ultimate",
        "ranged"
    ],
    "num_targets": 0,
    "animations": [],
    "name": "Force Grenade",
    "cooldown": 90,
    "id": 645
}
</pre>
</p>
</details>
<br />

**All Hands on Deck**
> Commodore Krux increases the damage of all Champions in his column and the rear-most column of the formation by `$(amount)%`. This does not apply twice if that is the same column.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "effect_string": "hero_dps_multiplier_mult,100",
        "targets": ["col_and_back"]
    }],
    "requirements": [],
    "description": {"desc": "Commodore Krux increases the damage of all Champions in his column and the rear-most column of the formation by $(amount)%. This does not apply twice if that is the same column."},
    "id": 1560,
    "flavour_text": "",
    "graphic_id": 19883,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<br />

**Battle Stations**
> Commodore Krux increases the damage bonus of All Hands On Deck! by `$(amount)%` for each second the Champions are in the current area, stacking multiplicatively up to a maximum of `$(max_stacks)` stacks.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stacks_multiply": true,
        "show_bonus": true,
        "effect_string": "buff_upgrade,20,11653",
        "max_stacks": 100,
        "more_triggers": [{
            "action": {"type": "reset"},
            "trigger": "area_changed"
        }],
        "stacks_on_trigger": "on_timer,1"
    }],
    "requirements": [],
    "description": {"desc": "Commodore Krux increases the damage bonus of All Hands On Deck! by $(amount)% for each second the Champions are in the current area, stacking multiplicatively up to a maximum of $(max_stacks) stacks."},
    "id": 1561,
    "flavour_text": "",
    "graphic_id": 19885,
    "properties": {"is_formation_ability": true}
}
</pre>
</p>
</details>
<br />

**Batten Hatches**
> Commodore Krux increases the health of all other Champions by `$(amount)%` of his max health for each adventure, variant, and Patron variant you have completed in the Light of Xaryxis campaign, stacking additively. Any healing effect on those Champions is increased by the same amount.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [],
    "requirements": [],
    "description": {"desc": "Commodore Krux increases the health of all other Champions by $(amount)% of his max health for each adventure, variant, and Patron variant you have completed in the Light of Xaryxis campaign, stacking additively. Any healing effect on those Champions is increased by the same amount."},
    "id": 1562,
    "flavour_text": "",
    "graphic_id": 19884,
    "properties": {"is_formation_ability": true}
}
</pre>
</p>
</details>
<br />

**Starfarers Spyglass**
> Upon completing a new area, Commodore Krux raises a spyglass to his eye and spots an enemy from the next area. All enemies of that type become his Favored Foe (until another area is completed) and take `$(amount)%` more damage from all sources.
>  
> - `$(krux_starfarers_spyglass)`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "effect_string": "krux_starfarers_spyglass,100",
        "valid_monster_types": [
            "aberration",
            "beast",
            "celestial",
            "construct",
            "dragon",
            "elemental",
            "fey",
            "fiend",
            "giant",
            "humanoid",
            "monstrosity",
            "ooze",
            "plant",
            "undead"
        ]
    }],
    "requirements": [],
    "description": {
        "post": {"conditions": [{
            "condition": "not static_desc",
            "desc": "^^$(krux_starfarers_spyglass)"
        }]},
        "desc": "Upon completing a new area, Commodore Krux raises a spyglass to his eye and spots an enemy from the next area. All enemies of that type become his Favored Foe (until another area is completed) and take $(amount)% more damage from all sources."
    },
    "id": 1563,
    "flavour_text": "",
    "graphic_id": 19887,
    "properties": {"is_formation_ability": true}
}
</pre>
</p>
</details>
<br />

**Experienced Sailor**
> Commodore Krux increases the effect of All Hands On Deck! by `$(amount)%` for each adventure, variant, and Patron variant you have completed in the Light of Xaryxis campaign, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stacks_multiply": true,
        "show_bonus": true,
        "effect_string": "buff_upgrade,20,11653"
    }],
    "requirements": [],
    "description": {"desc": "Commodore Krux increases the effect of All Hands On Deck! by $(amount)% for each adventure, variant, and Patron variant you have completed in the Light of Xaryxis campaign, stacking multiplicatively."},
    "id": 1564,
    "flavour_text": "",
    "graphic_id": 19886,
    "properties": {"is_formation_ability": true}
}
</pre>
</p>
</details>
<br />

**Unknown**
> Commodore Krux can be used in any Light of Xaryxis campaign adventure or variant, even if he would not normally be available to be used due to variant or patron restrictions.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [],
    "requirements": [],
    "description": {"desc": "Commodore Krux can be used in any Light of Xaryxis campaign adventure or variant, even if he would not normally be available to be used due to variant or patron restrictions."},
    "id": 1559,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
<br />

# Specialisations

**Specialisation: Nautical Knockback** (Guess)
> Commodore Krux increases the effect of All Hands On Deck! by `$(amount)%` and his base attack knocks back his targets a short distance.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{"effect_string": "buff_upgrade,200,11653"}],
    "requirements": [],
    "description": {"desc": "Commodore Krux increases the effect of All Hands On Deck! by $(amount)% and his base attack knocks back his targets a short distance."},
    "id": 1565,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
<br />

**Specialisation: Take the Helm** (Guess)
> Commander Krux increases the damage of Champions with a magic base attack by `$(amount)%`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "effect_string": "hero_dps_multiplier_mult,400",
        "filter_targets": [{
            "attacks": ["magic"],
            "type": "attack_type"
        }],
        "targets": ["all"]
    }],
    "requirements": [],
    "description": {"desc": "Commander Krux increases the damage of Champions with a magic base attack by $(amount)%."},
    "id": 1566,
    "flavour_text": "",
    "graphic_id": 19890,
    "properties": {"is_formation_ability": true}
}
</pre>
</p>
</details>
<br />

**Specialisation: Foe of Xaryxis** (Guess)
> Each time any favored foe is defeated, Commodore Krux increases the damage of All Hands On Deck! by `$(amount)%`, stacking additively up to `$(max_stacks)` times, until the area is changed.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stacks_multiply": false,
        "show_bonus": true,
        "effect_string": "buff_upgrade,25,11653",
        "max_stacks": 25,
        "more_triggers": [{
            "action": {"type": "reset"},
            "trigger": "area_changed"
        }],
        "stacks_on_trigger": "monster_killed_with_tag,favored_foe"
    }],
    "requirements": [],
    "description": {"desc": "Each time any favored foe is defeated, Commodore Krux increases the damage of All Hands On Deck! by $(amount)%, stacking additively up to $(max_stacks) times, until the area is changed."},
    "id": 1567,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
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
| 1 | `Coin Pouch` | Unknown |
| 2 | `Flintlock Pistols` | Unknown |
| 3 | `Giff Uniform` | Unknown |
| 4 | `Hat` | Unknown |
| 5 | `Memento` | Unknown |
| 6 | `Navigation Gear` | Unknown |

# Feats

Unknown.

# Legendaries

Unknown.

# Console Portrait

![Console Portrait](images/commodorekrux/console.png)

# Chests

| Gold |
|---|
| ![Gold Chest](images/commodorekrux/chest_gold.png) |

[Back to Top](#top)

*Last Modified: {{ site.time }}*