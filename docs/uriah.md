[Back to Main](index.md)


![Profile Picture](images/portrait_uriah.png)

# Brother Uriah

Brother Uriah Macawber is a native of Ravenloft, born in the dread domain of Darkon under the iron rule of Azalin Rex. After a horrifying childhood encounter at the Carnival with the demonic entity known as The Caller, Uriah would embrace the worship of the goddess Ezra, Lady of the Mists, offering protection from the forces of darkness to all those in need. Upon joining with the other future members of The Black Dice Society at the infamous House of Lament, Uriah would go on to find true love with his teammate, the undead Aasimar, Nahara... and would eventually discover the dark truth of both the nature of his deity and his mysterious connection to his former liege, the lich-king Azalin Rex.

# Basic Information

Brother Uriah will be the new champion in the Grand Revel event on 1 February 2023.

* Seat: 9
* Race: Human
* Class: Cleric
* Roles: Support / Healing
* Gender: Male
* Alignment: Lawful Good
* Affiliation: Black Dice Society

| Stat | Value | Day 1 Trials | Patrons |
|---|---|---|---|
| Strength | 10 | Yes | Mirt |
| Dexterity | 10 | - | - |
| Constitution | 12 | Yes | - |
| Intelligence | 12 | Yes | Zariel |
| Wisdom | 22 | Yes | |
| Charisma | 15 | Yes | |

# Formation

![Formation Layout](images/formation_uriah.png)

# Abilities

**Base Attack: Toll the Dead**
> Uriah points at a random enemy and deals damage, preferring enemies that are already damaged.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Uriah points at a random enemy and deals damage, preferring enemies that are already damaged.",
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

**Ultimate Attack: Blade Barrier (Level: 0)**
> Brother Uriah creates a wall of whirling, razor-sharp blades of magical energy and sends them flying across the area. The blades come to a stop a short distance in front of the formation forming a barrier that lasts for 10 seconds. Each time an enemy passes through the barrier, they take ultimate damage.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Brother Uriah creates a wall of magical blades that damages enemies for 10 seconds.",
    "long_description": "Brother Uriah creates a wall of whirling, razor-sharp blades of magical energy and sends them flying across the area. The blades come to a stop a short distance in front of the formation forming a barrier that lasts for 10 seconds. Each time an enemy passes through the barrier, they take ultimate damage.",
    "damage_modifier": 0.029999999999999999,
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

**Doomed in Darkon (Level: 20)**
> Brother Uriah increases the damage of all Champions in his column and the column behind him by `$(amount)%`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "static_dps_mult": null,
    "required_level": 20,
    "effect": "effect_def,1370",
    "tip_text": "Brother Uriah increases the damage of Champons in his column and the column behind.",
    "name": "Doomed in Darkon",
    "id": 9770,
    "hero_id": 119,
    "upgrade_type": "unlock_ability",
    "default_enabled": 1,
    "required_upgrade_id": 0
}
{
    "effect_keys": [{
        "effect_string": "hero_dps_multiplier_mult,400",
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

**Ezra's Embrace (Level: 40)**
> Brother Uriah heals all champions within two slots for `$(not_buffed amount)` health per second. This effect is increased by `$(amount___2)%` for each formation slot containing a dead champion or an escort, stacking additively and applying multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "static_dps_mult": null,
    "required_level": 40,
    "effect": "effect_def,1371",
    "tip_text": "Brother Uriah heals all Champions within 2 slots of him.",
    "name": "Ezra's Embrace",
    "id": 9771,
    "hero_id": 119,
    "upgrade_type": "unlock_ability",
    "default_enabled": 1,
    "required_upgrade_id": 0
}
{
    "effect_keys": [
        {
            "effect_string": "heal,10",
            "targets": [{
                "comparison": "<=",
                "distance": 2,
                "type": "distance"
            }]
        },
        {
            "stack_title": "Escorts and Dead Champions",
            "amount_updated_listeners": [
                "slot_changed",
                "hero_appears_dead",
                "hero_killed",
                "area_changed"
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

**In the Grip of Azalin Rex (Level: 100)**
> After `$(attack_count)` normal attacks by Champions in the formation, Azalin Rex takes over Brother Uriah for `$(seconds_plural amount)`. While controlled by Azalin Rex, Brother Uriah increases the damage of Nahara and all evil Champions by `$(amount___2)%`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "static_dps_mult": null,
    "required_level": 100,
    "effect": "effect_def,1372",
    "name": "In the Grip of Azalin Rex",
    "id": 9772,
    "hero_id": 119,
    "upgrade_type": "unlock_ability",
    "default_enabled": 1,
    "required_upgrade_id": 0
}
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
    "graphic_id": 17758,
    "properties": {
        "indexed_effect_properties": true,
        "retain_on_slot_changed": true,
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

**Book of Exalted Deeds (Level: 150)**
> Brother Uriah reads from the Book of Exalted Deeds, making Undead and Fiends his Favored Foes and all Champions deal an additional `$(amount)%` damage to them.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "static_dps_mult": null,
    "specialization_name": "Book of Exalted Deeds",
    "required_level": 150,
    "effect": "effect_def,1373",
    "name": "Book of Exalted Deeds",
    "specialization_graphic_id": 17759,
    "id": 9773,
    "hero_id": 119,
    "upgrade_type": "unlock_ability",
    "default_enabled": 1,
    "required_upgrade_id": 0,
    "specialization_description": "Brother Uriah fights his evil connection, helping champions defeat the Undead and Fiends."
}
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
        },
        {
            "skin_property_prefix": "spec_1_overlay",
            "effect_string": "animation_synced_overlay,17719",
            "sort_bottom": true
        }
    ],
    "requirements": "",
    "description": {"desc": "$(source_hero) reads from the Book of Exalted Deeds, making Undead and Fiends his Favored Foes and all Champions deal an additional $(amount)% damage to them."},
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

**Book of Vile Darkness (Level: 150)**
> Azalin reads from the Book of Vile Darkness, increasing the effect of In the Grip of Azalin Rex by `$(amount)%`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "static_dps_mult": null,
    "specialization_name": "Book of Vile Darkness",
    "required_level": 150,
    "effect": "effect_def,1374",
    "name": "Book of Vile Darkness",
    "specialization_graphic_id": 17760,
    "id": 9774,
    "hero_id": 119,
    "upgrade_type": "unlock_ability",
    "default_enabled": 1,
    "required_upgrade_id": 0,
    "specialization_description": "Brother Uriah embraces his evil connection, helping evil champions deal even more damage."
}
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

| Slot | Epic Name | Type |
|---|---|---|
| 1 | `Uriah's Really Nice Hat` | All Champion Damage |
| 2 | `Weapon of Faith` | Doomed in Darkon |
| 3 | `Dual Goddess Protector` | Ezra's Embrace |
| 4 | `Wedding Ring` | In the Grip of Azalin Rex |
| 5 | `Book of Exalted Deeds` | All Specialisations |
| 6 | `Uriah and Van Richten: BFFs!` | Ultimate Cooldown Reduction |

# Feats

This list will only show feats that are going to be available on the release of this champion. The separate [Feats](feats.md) page may show others that could be available later if they exist.

| Feat | Effect | Source |
|---|---|---|
| `Selflessness` | 10% All Champion Damage | Free |
| `Inspiring Leader` | 25% All Champion Damage | Gold Chest |
| `Dread Realm Traveler` | 20% Doomed in Darkon | Free |
| `Into the Mistlands` | 40% Doomed in Darkon | Gold Chest |
| `Guardian in the Mists` | 15% Ezra's Embrace | Free |
| `Shadow of the Raven` | 30% Ezra's Embrace | 12,500 Gems |
| `Dire Fate` | 40% In the Grip of Azalin Rex | Gold Chest |
| `Soul's Purpose` | 50% In the Grip of Azalin Rex | 12,500 Gems |
| `The Hour of Ascension` | 100% In the Grip of Azalin Rex | 50,000 Gems |

# Legendaries

* Increases the damage of all Champions by 100%.
* Increases the damage of all Female Champions by 125%.
* Increases the damage of all Champions by 30% for each Human Champion in the formation.
* Increases the damage of all Champions by 40% for each Champion with a WIS score of 15 or higher in the formation.
* Increases the damage of all Champions with a INT score of 11 or higher by 100%.
* Increases the damage of all Good Champions by 150%.

[Back to Top](#top)

*Last Modified: {{ site.time }}*