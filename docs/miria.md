[Back to Main](index.md)

![PC Portrait](images/portrait_miria.png)

# Miria

I know even less about this champion than I do about Solaak.

# Basic Information

Miria will be the new champion in the Festival of Fools event on 15 March 2023.

* Seat: Unknown
* Race: Unknown
* Class: Wizard (Guess)
* Roles: Unknown
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

**Clone**
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "p": 0,
    "v": 2,
    "id": 18260,
    "export_params": {"uses": ["icon"]},
    "type": 1,
    "graphic": "Icons/Events/2018FestivalofFools/FestivalofFools_Y6/Icon_Formation_MiriaClone",
    "fs": 0
}
</pre>
</p>
</details>
<br />

**Life Transference**
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "p": 0,
    "v": 2,
    "id": 18261,
    "export_params": {"uses": ["icon"]},
    "type": 1,
    "graphic": "Icons/Events/2018FestivalofFools/FestivalofFools_Y6/Icon_Formation_MiriaLifeTransference",
    "fs": 0
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

**Soul Cage**
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "p": 0,
    "v": 2,
    "id": 18263,
    "export_params": {"uses": ["icon"]},
    "type": 1,
    "graphic": "Icons/Events/2018FestivalofFools/FestivalofFools_Y6/Icon_Formation_MiriaSoulCage",
    "fs": 0
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
        }
    }],
    "requirements": "",
    "description": {"desc": "While $(source_hero) is alive, a Zombie Bodyguard that shares hit points with $(source_hero) appears in front of each Champion in the front-most column of the formation. When a Champion in that column takes damage, the Zombie Bodyguard takes $(amount)% of the damage instead, while the original target takes the remaining $(remaining_amount)%."},
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

# Specialisations

**Independent**
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "p": 0,
    "v": 2,
    "id": 18265,
    "export_params": {"uses": ["icon"]},
    "type": 1,
    "graphic": "Icons/Events/2018FestivalofFools/FestivalofFools_Y6/Icon_Specialization_MiriaIndependent",
    "fs": 0
}
</pre>
</p>
</details>
<br />

**Intellectual**
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "p": 0,
    "v": 2,
    "id": 18266,
    "export_params": {"uses": ["icon"]},
    "type": 1,
    "graphic": "Icons/Events/2018FestivalofFools/FestivalofFools_Y6/Icon_Specialization_MiriaIntellectual",
    "fs": 0
}
</pre>
</p>
</details>
<br />

**Methodical**
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "p": 0,
    "v": 2,
    "id": 18267,
    "export_params": {"uses": ["icon"]},
    "type": 1,
    "graphic": "Icons/Events/2018FestivalofFools/FestivalofFools_Y6/Icon_Specialization_MiriaMethodical",
    "fs": 0
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