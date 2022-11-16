[Back to Main](index.md)

![Profile Picture](images/portrait_fen.png)

# Fen

Fen is a Drow, with her father contributing her Dhampir ancestry. As she grew up and showed signs of her bitey nature, she left the only family she'd known, driven out by those that feared what she would turn into as she aged.  She's come to resent that side of her bloodline, and her life has been interesting since she was sent to the surface.

[https://black-dice-society.fandom.com/wiki/Characters](https://black-dice-society.fandom.com/wiki/Characters)

# Basic Information

Fen will be the new champion in the Midwinter event on 11 January 2023.

* Seat: Unknown
* Race: Drow Dhampir (Guess)
* Class: Warlock (Guess)
* Roles: DPS / Support (Both Guess)
* Gender: Female
* Alignment: Unknown
* Affiliation: Black Dice Society
* Stats: Unknown

# Formation

![Formation Layout](images/formation_fen.png)

# Abilities

**Base Attack: Pact Blade**
> Fen darts out to the closest enemy and slashes with her longsword, hitting all nearby enemies.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Fen darts out to the closest enemy and slashes with her longsword, hitting all nearby enemies.",
    "long_description": "",
    "damage_modifier": 1,
    "damage_types": ["melee"],
    "graphic_id": 0,
    "target": "front",
    "aoe_radius": 150,
    "tags": [
        "melee",
        "aoe"
    ],
    "num_targets": 1,
    "animations": [{
        "damage_frame": 4,
        "jump_sound": 30,
        "sound_frames": {"2": 154},
        "target_offset_x": -34,
        "type": "melee_attack"
    }],
    "name": "Pact Blade",
    "cooldown": 6.5,
    "id": 582
}
</pre>
</p>
</details>
<br />

**Ultimate Attack: Form of Dread**
> Fen transforms into her dread form. She sprouts wings, leaps into the air, and charges directly across the area, dealing one hit of ultimate damage to all enemies she passes and knocking them back a short distance.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Fen sprouts wings and charges, dealing damage to all enemies and knocking them back.",
    "long_description": "Fen transforms into her dread form. She sprouts wings, leaps into the air, and charges directly across the area, dealing one hit of ultimate damage to all enemies she passes and knocking them back a short distance.",
    "damage_modifier": 0.03,
    "damage_types": ["melee"],
    "graphic_id": 17463,
    "target": "all",
    "aoe_radius": 0,
    "tags": [
        "ultimate",
        "melee"
    ],
    "num_targets": 1,
    "animations": [{
        "pushback": 150,
        "seqs": {
            "attack": 4,
            "start": 7,
            "finish": 8
        },
        "ultimate": "fen",
        "type": "ultimate_attack"
    }],
    "name": "Form of Dread",
    "cooldown": 60,
    "id": 583
}
</pre>
</p>
</details>
<br />

**Mischievous, but Dangerous** (Guess)
> Fen increases the damage of all Champions in her column by `$(amount)%`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "effect_string": "hero_dps_multiplier_mult,100",
        "targets": ["col"]
    }],
    "requirements": "",
    "description": {"desc": "$(source_hero) increases the damage of all Champions in her column by $(amount)%."},
    "id": 1363,
    "flavour_text": "",
    "graphic_id": 17458,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<br />

**Warlock Pact**
> Fen reduces the normal attack speed of all Warlocks in the formation by 0.1s for each point of Wisdom an adjacent Champion has above 10.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "manual_stacking": true,
            "stacks_multiply": false,
            "formation_arrows_for_effected_only": true,
            "off_when_benched": true,
            "show_bonus": true,
            "effect_string": "reduce_attack_cooldown,0.1",
            "filter_targets": [{
                "type": "by_tags",
                "tags": "warlock"
            }],
            "targets": ["all"]
        },
        {
            "overlay": {
                "manual_graphic": "fen_warlock_pack",
                "y": -65
            },
            "stats": ["wis"],
            "subtract_from_stat": 10,
            "effect_string": "fen_warlock_pack",
            "count_on": "adj"
        }
    ],
    "requirements": "",
    "description": {"desc": "$(source_hero) reduces the normal attack speed of all Warlocks in the formation by $(seconds_plural amount) for each point of Wisdom an adjacent Champion has above $(subtract_from_stat___2)."},
    "id": 1364,
    "flavour_text": "",
    "graphic_id": 17460,
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

**I've Got You, Friends** (Guess)
> Fen increases the effect of Mischievous, but Dangerous by `$(amount)%` for each Champion in the formation that is either a Black Dice Society affiliation member or has a WIS of 15+, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stack_title": "Relevant Champions",
        "amount_updated_listeners": ["slot_changed"],
        "off_when_benched": true,
        "show_bonus": true,
        "amount_func": "mult",
        "stack_func": "per_crusader",
        "effect_string": "buff_upgrade,100,9757,0",
        "stack_func_data": {"target_filters_or": [
            {
                "stat": "wis",
                "comparison": "gte",
                "check": 15,
                "type": "stat"
            },
            {
                "type": "tags",
                "tags": "blackdicesociety"
            }
        ]}
    }],
    "requirements": "",
    "description": {"desc": "$(source_hero) increases the effect of Mischievous, but Dangerous by $(amount)% for each Champion in the formation that is either a Black Dice Society affiliation member or has a WIS of 15+, stacking multiplicatively."},
    "id": 1365,
    "flavour_text": "",
    "graphic_id": 17457,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<br />

**Patron Pact** (Guess)
> While Fen is in the formation and you are in a patron variant or free play, patron challenge progress made by her party is increased by `$(amount)%`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "off_when_benched": true,
        "effect_string": "buff_patron_challenge_progress,100"
    }],
    "requirements": "",
    "description": {"desc": "While $(source_hero) is in the formation and you are in a patron variant or free play, patron challenge progress made by her party is increased by $(amount)%."},
    "id": 1366,
    "flavour_text": "",
    "graphic_id": 17459,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<br />

# Specialisations

**Shadows of the Underdark**
> Fen imbues her blade with eldritch energy, increasing the effect of Mischievous, but Dangerous by `$(amount)%` and causing her normal attack to deal an additional 5 seconds of BUD based damage with each hit.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {"effect_string": "buff_upgrade,100,9757"},
        {
            "skin_property_prefix": "spec_1_overlay",
            "effect_string": "animation_synced_overlay,17499"
        },
        {"effect_string": "change_base_attack,584"}
    ],
    "requirements": "",
    "description": {"desc": "$(source_hero) imbues her blade with eldritch energy, increasing the effect of $(upgrade_name id) by $(amount)% and causing her normal attack to deal an additional 5 seconds of BUD based damage with each hit."},
    "id": 1367,
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

**Curse of the Dhampir**
> Fen embraces her Dhampir heritage and increases her damage by `$(amount)%`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {"effect_string": "hero_dps_multiplier_mult,1000"},
        {
            "skin_property_prefix": "spec_2_overlay",
            "effect_string": "animation_synced_overlay,17498"
        }
    ],
    "requirements": "",
    "description": {"desc": "$(source_hero) embraces her Dhampir heritage and increases her damage by $(amount)%."},
    "id": 1368,
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

1. Armor Pieces
2. Coat
3. Isolde Items
4. Snacks
5. Sword
6. Thieves' Tools

# Feats

Unknown.

# Legendaries

Unknown.

[Back to Top](#top)

*Last Modified: {{ site.time }}*