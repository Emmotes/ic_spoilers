[Back to Main](index.md)

![PC Portrait](images/portrait_miria.png)

# Miria

I know even less about this champion than I do about Solaak.

# Basic Information

Miria will be the new champion in the Festival of Fools event on 15 March 2023.

* Seat: Unknown
* Race: Unknown
* Class: Wizard (Guess)
* Roles: Support / Tank (Guesses)
* Gender: Female (Guess)
* Alignment: Unknown
* Affiliation: Unknown
* Stats: Unknown

# Formation

Unknown.
<!-- ![Formation Layout](images/formation_miria.png) -->

# Abilities

**Base Attack: Ray of Sickness** (Magic)
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
            "description": "",
            "long_description": "",
            "damage_modifier": 1,
            "damage_types": ["magic"],
            "graphic_id": 0,
            "target": "front",
            "aoe_radius": 0,
            "tags": ["ranged"],
            "num_targets": 1,
            "animations": [{
                "sound_frames": {"1": 184},
                "hit_sound": -1,
                "shoot_offset_y": 0,
                "shoot_offset_x": 0,
                "always_new_targets": true,
                "projectile_graphic_id": 1,
                "type": "ranged_attack",
                "projectile": "ray_of_sickness",
                "shoot_frame": 12
            }],
            "name": "Ray of Sickness",
            "cooldown": 6,
            "id": 601
        }
</pre>
</p>
</details>
<br />

**Ultimate Attack: Danse Macabre**
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "",
    "long_description": "",
    "damage_modifier": 1,
    "damage_types": ["magic"],
    "graphic_id": 0,
    "target": "none",
    "aoe_radius": 0,
    "tags": [
        "ranged",
        "aoe"
    ],
    "num_targets": 0,
    "animations": [{
        "ultimate": "miria",
        "type": "ultimate_attack"
    }],
    "name": "Danse Macabre",
    "cooldown": 5,
    "id": 602
}
</pre>
</p>
</details>
<br />

**Soul Cage**
> > When an enemy is defeated, Miria can capture its soul and gain a Soul Cage stack. Her maximum number of Soul Cage stacks is 1 for every 20 areas completed in the current adventure, rounded up. Miria increases the damage bonus of `$(upgrade_name id)` by `$(not_buffed amount)%` for each Soul Cage stack she has, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "stack_title": "Soul Cage Stacks",
            "stacks_multiply": true,
            "show_bonus": true,
            "effect_string": "buff_upgrade,100,10665",
            "max_stacks": 0,
            "stacks_on_trigger": "monster_killed"
        },
        {
            "num_stacks": 1,
            "rounding_mode": "ceil",
            "effect_string": "stacks_max_stack_expr,0,(highest_available_area-1)/20",
            "num_areas": 20
        },
        {
            "is_instanced_stat": true,
            "use_stat_defs": true,
            "effect_string": "stacks_data_binder_safe,0,miria_soul_cage_stacks"
        }
    ],
    "requirements": "",
    "description": {"desc": "When an enemy is defeated, $(source_hero) can capture its soul and gain a Soul Cage stack. Her maximum number of Soul Cage stacks is $(num_stacks___2) for every $(num_areas___2) areas completed in the current adventure, rounded up. $(source_hero) increases the damage bonus of $(upgrade_name id) by $(not_buffed amount)% for each Soul Cage stack she has, stacking multiplicatively."},
    "id": 1419,
    "flavour_text": "",
    "graphic_id": 18263,
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

**Zombie Bodyguards**
> While Miria is alive, a Zombie Bodyguard that shares hit points with Miria appears in front of each Champion in the front-most column of the formation. When a Champion in that column takes damage, the Zombie Bodyguard takes 90% of the damage instead, while the original target takes the remaining 10%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "off_when_benched": true,
        "effect_string": "miria_zombie_bodyguards,90",
        "targets": ["front_column"],
        "zombie_sequences": {
            "koed": 2,
            "idle": 0,
            "gethit": 3,
            "ultimate": 2,
            "walk": 1
        },
        "override_key_desc": "A Zombie Bodyguard defends $target by redirecting $amount% of incoming damage to $(source_hero) instead"
    }],
    "requirements": "",
    "description": {"desc": "While $(source_hero) is alive, a Zombie Bodyguard that shares hit points with $(source_hero) appears in front of each Champion in the front-most column of the formation. When a Champion in that column takes damage, the Zombie Bodyguard takes $(amount)% of the damage instead, while the original target takes the remaining $(miria_zombie_bodyguards_remaining_amount)%."},
    "id": 1420,
    "flavour_text": "",
    "graphic_id": 18264,
    "properties": {
        "retain_on_slot_changed": true,
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<br />

**Clone**
> Miria maintains a stash of clones in her Inner Sanctum with a count equal to her Soul Cage stacks. If Miria is defeated, a clone immediately appears and takes her place at full health. This does not reduce the number of Soul Cage stacks she has. Her stash of clones are regenerated when the party changes areas. For each clone summoned in the current area, the effect of `$(upgrade_name id)` is increased by `$(not_buffed amount)%`, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "stack_title": "Summoned Clones",
            "stacks_multiply": true,
            "show_bonus": true,
            "effect_string": "buff_upgrade,100,10665",
            "desc_forced_order": 1,
            "stacks_on_trigger": "will_manually_stack"
        },
        {
            "stack_title": "Available Clones",
            "manual_stacking": true,
            "soul_cage_upgrade_id": 10666,
            "effect_string": "miria_clone",
            "buff_index": 0,
            "show_stacks": true,
            "desc_forced_order": 0
        }
    ],
    "requirements": "",
    "description": {"desc": "$(source_hero) maintains a stash of clones in her Inner Sanctum with a count equal to her Soul Cage stacks. If $(source_hero) is defeated, a clone immediately appears and takes her place at full health. This does not reduce the number of Soul Cage stacks she has. Her stash of clones are regenerated when the party changes areas. For each clone summoned in the current area, the effect of $(upgrade_name id) is increased by $(not_buffed amount)%, stacking multiplicatively."},
    "id": 1421,
    "flavour_text": "",
    "graphic_id": 18260,
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

**Life Transference** (Guess)
> Miria increases the health of all other Champions by `$(amount)%` of her max health for each Soul Cage stack she has, stacking additively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "amount_updated_listeners": [
            "max_health_changed",
            "slot_changed",
            "stacks_changed"
        ],
        "per_other_stack_count_effect_key_index": 0,
        "stacks_multiply": false,
        "total_title": "Bonus Health",
        "per_other_stack_count_upgrade_id": 10666,
        "amount_func": "source_percent_health_add",
        "stack_func": "per_other_stack_count",
        "use_computed_amount_for_description": true,
        "effect_string": "increase_health_by_source_percent,1",
        "targets": ["other"],
        "stack_title": "Soul Cage stacks",
        "off_when_benched": true,
        "show_bonus": true,
        "percent_values": false,
        "show_current_value_bonus_desc": false,
        "override_key_desc": "Increases the Health of $target by $amount",
        "round_bonus_value": true
    }],
    "requirements": "",
    "description": {"desc": "$(source_hero) increases the health of all other Champions by $(amount)% of her max health for each Soul Cage stack she has, stacking additively."},
    "id": 1422,
    "flavour_text": "",
    "graphic_id": 18261,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<br />

**Mage of High Society**
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "p": 0,
    "v": 2,
    "id": 18262,
    "export_params": {"uses": ["icon"]},
    "type": 1,
    "graphic": "Icons/Events/2018FestivalofFools/FestivalofFools_Y6/Icon_Formation_MiriaMageofHighSociety",
    "fs": 0
}
</pre>
</p>
</details>
<br />

# Specialisations

**Methodical**
> Miria increases the attack bonus of `$(upgrade_name id___2)` by `$(amount)%` for each Lawful Champion in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {"effect_string": "pre_stack_amount,25"},
        {
            "amount_expr": "upgrade_amount(10670,0)",
            "stacks_multiply": true,
            "off_when_benched": true,
            "effect_string": "buff_upgrade_per_any_tagged_crusader_mult,0,10665,lawful"
        }
    ],
    "requirements": "",
    "description": {"desc": "$(source_hero) increases the attack bonus of $(upgrade_name id___2) by $(amount)% for each Lawful Champion in the formation, stacking multiplicatively."},
    "id": 1423,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "indexed_effect_properties": true,
        "is_formation_ability": true,
        "spec_option_post_apply_info": "Lawful Champions: $num_stacks___2",
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

**Intellectual**
> Miria increases the attack bonus of `$(upgrade_name id___2)` by `$(amount)%` for each Champion with an INT score of 15+ in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {"effect_string": "pre_stack_amount,25"},
        {
            "amount_expr": "upgrade_amount(10671,0)",
            "stacks_multiply": true,
            "off_when_benched": true,
            "effect_string": "buff_upgrade_per_any_crusader_where_mult,0,10665,int,>=,15"
        }
    ],
    "requirements": "",
    "description": {"desc": "$(source_hero) increases the attack bonus of $(upgrade_name id___2) by $(amount)% for each Champion with an INT score of 15+ in the formation, stacking multiplicatively."},
    "id": 1424,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "indexed_effect_properties": true,
        "is_formation_ability": true,
        "spec_option_post_apply_info": "INT 15+ Champions: $num_stacks___2",
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

**Independent**
> Miria increases the attack bonus of `$(upgrade_name id___2)` by `$(amount)%` for each Unaffiliated Champion in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {"effect_string": "pre_stack_amount,25"},
        {
            "amount_expr": "upgrade_amount(10672,0)",
            "stacks_multiply": true,
            "off_when_benched": true,
            "effect_string": "buff_upgrade_per_any_tagged_crusader_mult,0,10665,!has_affiliation"
        }
    ],
    "requirements": "",
    "description": {"desc": "$(source_hero) increases the attack bonus of $(upgrade_name id___2) by $(amount)% for each Unaffiliated Champion in the formation, stacking multiplicatively. "},
    "id": 1425,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "indexed_effect_properties": true,
        "is_formation_ability": true,
        "spec_option_post_apply_info": "Unaffiliated Champions: $num_stacks___2",
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

| Slot | Name | Type |
|---|---|---|
| 1 | `Black Robes` | Unknown |
| 2 | `Cube of Force` | Unknown |
| 3 | `Fashionable Jewellery` | Unknown |
| 4 | `Necromancy Fashion` | Unknown |
| 5 | `Soul Cage` | Unknown |
| 6 | `Star Jewel` | Unknown |

# Feats

Unknown.

# Legendaries

Unknown.

# Console Portrait

![Console Portrait](images/console_miria.png)

[Back to Top](#top)

*Last Modified: {{ site.time }}*