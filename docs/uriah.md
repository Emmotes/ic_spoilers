[Back to Main](index.md)

![Profile Picture](images/portrait_uriah.png)

# Uriah

Brother Uriah Macawber is a native of Ravenloft, born in in the domain of Darkon under the iron rule of the wizard-king Azalin Rex. Like many benighted residents of the Domains of Dread, he and his family sought succor in the arms of the Church of Ezra. He joined the priesthood of the Lady of the Mists upon coming of age, seeking to offer Her divine grace and protection to those in need.

[https://black-dice-society.fandom.com/wiki/Characters](https://black-dice-society.fandom.com/wiki/Characters)

# Basic Information

Uriah will be the new champion in the Grand Revel event on 1 February 2023.

* Seat: Unknown
* Race: Human
* Class: Cleric
* Roles: Support / Healing (Guess)
* Gender: Male
* Alignment: Unknown
* Affiliation: Black Dice Society
* Stats: Unknown

# Formation

![Formation Layout](images/formation_uriah.png)

# Abilities

**Base Attack: Toll the Dead**
> Uriah points at a random enemy and deals damage. Prefers enemies that are already damaged.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Uriah points at a random enemy and deals damage. Prefers enemies that are already damaged.",
    "long_description": "",
    "damage_modifier": 1,
    "damage_types": ["magic"],
    "graphic_id": 0,
    "target": "damaged_random",
    "aoe_radius": 0,
    "tags": ["ranged"],
    "num_targets": 1,
    "animations": [{
        "projectile_details": {
            "projectile_hit_graphic_id": 17722,
            "impact_offset_y": -130,
            "projectile_speed": 10000
        },
        "hit_sound": 133,
        "shoot_sound": 149,
        "type": "ranged_attack",
        "projectile": "pd_generic_projectile",
        "shoot_frame": 8
    }],
    "name": "Toll the Dead",
    "cooldown": 4.75,
    "id": 585
}
</pre>
</p>
</details>
<br />

**Ultimate Attack: Blade Barrier**
> Brother Uriah creates a wall of whirling, razor-sharp blades of magical energy to appear in front of the formation, quickly slides across the screen, ending close to where enemies are spawned. Each enemy that passes through the barrier takes one hit of ultimate damage. The barrier lasts for 10 seconds after it reaches its final location. If an enemy passes through it a second time they take another hit.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Brother Uriah creates a wall of magical blades that damages enemies for 10 seconds. ",
    "long_description": "Brother Uriah creates a wall of whirling, razor-sharp blades of magical energy to appear in front of the formation, quickly slide across the area stopping at the edge of the area. Each enemy that passes through the barrier takes one hit of ultimate damage. The barrier lasts for 10 seconds after it reaches its final location. If an enemy passes through it a second time they take another hit.",
    "damage_modifier": 0.03,
    "damage_types": ["melee"],
    "graphic_id": 17761,
    "target": "random",
    "aoe_radius": 0,
    "tags": ["melee"],
    "num_targets": 1,
    "animations": [{
        "barrier_duration": 10,
        "ultimate": "uriah",
        "type": "ultimate_attack",
        "blade_graphic_id": 17723
    }],
    "name": "Blade Barrier",
    "cooldown": 200,
    "id": 586
}
</pre>
</p>
</details>
<br />

**Unknown Name**
> Uriah increases the damage of all Champions in his column and the column behind him by `$(amount)%`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "effect_string": "hero_dps_multiplier_mult,100",
        "targets": ["col_and_prev_col"]
    }],
    "requirements": "",
    "description": {"desc": "$(source_hero) increases the damage of all Champions in his column and the column behind him by $(amount)%."},
    "id": 1370,
    "flavour_text": "",
    "graphic_id": 17756,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<br />

**Unknown Name**
> Uriah heals all champions within two slots for `$(not_buffed amount)` health per second. This effect is increased by `$(amount___2)%` for each formation slot containing a dead champion or an escort, stacking additively and applying multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "effect_string": "heal,5",
            "targets": [{
                "distance": 2,
                "type": "distance"
            }]
        },
        {
            "stack_title": "Escorts and Dead Champions",
            "amount_updated_listeners": [
                "slot_changed",
                "hero_appears_dead"
            ],
            "show_bonus": true,
            "amount_func": "add",
            "stack_func": "per_hero",
            "use_computed_amount_for_description": true,
            "effect_string": "buff_upgrade,25,9771,0",
            "show_stats_on_receiver": false,
            "stack_func_data": {
                "dead_or_escort": true,
                "is_owned": false
            }
        }
    ],
    "requirements": "",
    "description": {
        "pre": "$(source_hero) heals all champions within two slots for $(not_buffed amount) health per second. This effect is increased by $(amount___2)% for each formation slot containing a dead champion or an escort, stacking additively and applying multiplicatively.",
        "conditions": [{
            "condition": "not static_desc",
            "desc": "^^Total Heal Amount: $(amount)"
        }]
    },
    "id": 1371,
    "flavour_text": "",
    "graphic_id": 17757,
    "properties": {
        "indexed_effect_properties": true,
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

**Unknown Name**
> After `$(attack_count)` normal attacks by Champions in the formation, Azalin Rex takes over Uriah for `$(seconds_plural amount)`. While controlled by Azalin Rex, Uriah increases the damage of Nahara and all evil Champions by `$(amount___2)%`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "azalin_effect_key_indexes": [1],
            "effect_string": "in_the_grip_of_azalin_rex,20,100"
        },
        {
            "formation_arrows_for_effected_only": true,
            "off_when_benched": true,
            "effect_string": "hero_dps_multiplier_mult,1000",
            "targets": [{
                "type": "by_tags",
                "tags": ["evil|hero_102"]
            }],
            "apply_manually": true
        }
    ],
    "requirements": "",
    "description": {
        "pre": "After $(attack_count) normal attacks by Champions in the formation, Azalin Rex takes over $(source_hero) for $(seconds_plural amount). While controlled by Azalin Rex, $(source_hero) increases the damage of Nahara and all evil Champions by $(amount___2)%.",
        "conditions": [
            {
                "condition": "(not static_desc)^(uriah_azalin_rex_active)",
                "desc": "^^Time Remaining: $(uriah_azalin_duration) second(s)"
            },
            {
                "condition": "(not static_desc)",
                "desc": "^^Attack Count: $(uriah_current_attack_count) / $(attack_count)"
            }
        ]
    },
    "id": 1372,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "indexed_effect_properties": true,
        "retain_on_slot_changed": false,
        "is_formation_ability": true,
        "default_bonus_index": 1,
        "owner_use_outgoing_description": true,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
<br />

# Specialisations

**Book of Exalted Deeds**
> Uriah reads from the Book of Exalted Deeds, making Undead and Fiends his Favored Foes and all Champions deal `$(amount)%` damage to them.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {"effect_string": "increase_monster_with_tags_damage,200,undead|fiend"},
        {
            "off_when_benched": true,
            "effect_string": "favored_foe,undead"
        },
        {
            "off_when_benched": true,
            "effect_string": "favored_foe,fiend"
        }
    ],
    "requirements": "",
    "description": {"desc": "$(source_hero) reads from the Book of Exalted Deeds, making Undead and Fiends his Favored Foes and all Champions deal $(amount)% damage to them."},
    "id": 1373,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "indexed_effect_properties": true,
        "is_formation_ability": true,
        "default_bonus_index": 0,
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "formation_circle_icon": false,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
<br />

**Book of Vile Darkness**
> Azalin reads from the Book of Vile Darkness, increasing the effect of `$(upgrade_name id)` by `$(amount)%`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {"effect_string": "buff_upgrade,100,9772"},
        {
            "skin_property_prefix": "spec_2_overlay",
            "effect_string": "animation_synced_overlay,17718",
            "sort_bottom": true
        }
    ],
    "requirements": "",
    "description": {"desc": "Azalin reads from the Book of Vile Darkness, increasing the effect of $(upgrade_name id) by $(amount)%."},
    "id": 1374,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "indexed_effect_properties": true,
        "is_formation_ability": true,
        "default_bonus_index": 0,
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "formation_circle_icon": false,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
<br />

# Items

1. Books
2. Mace
3. Nahara Links
4. NPC Links
5. Shield
6. Tricorn

# Feats

Unknown.

# Legendaries

Unknown.

[Back to Top](#top)

*Last Modified: {{ site.time }}*