[Back to Main](index.md)


![Profile Picture](images/portrait_warduke.png)

# Warduke

Warduke's services as a remorseless killer-for-hire can be easily bought. The evil swordsman isn't terribly bright, which is why he leaves the plotting and scheming to others. He just likes to hit things with his sword.

# Basic Information

Warduke will be the new champion in the Simril event on 30 November 2022.

* Seat: 8
* Race: Human
* Class: Fighter
* Roles: Dps / Tanking
* Gender: Male
* Alignment: Chaotic Evil
* Affiliation: None
* Stats:
  * Str: 19
  * Dex: 11
  * Con: 17
  * Int: 9
  * Wis: 11
  * Cha: 11
* Patrons:
  * Mirt
  * Vajra
  * Zariel (with Feat)

# Formation

![Formation Layout](images/formation_warduke.png)

# Abilities

Base Attack: Nightwind
> Warduke moves up to the closest enemy and swings his sword, dealing one hit to all nearby enemies with a melee attack.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Warduke moves up to the closest enemy and swings his sword, dealing one hit to all nearby enemies with a melee attack.",
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
        "damage_frame": 2,
        "jump_sound": 30,
        "sound_frames": {"2": 194},
        "target_offset_x": -34,
        "type": "melee_attack"
    }],
    "name": "Nightwind",
    "cooldown": 5,
    "id": 574
}
</pre>
</p>
</details>
<br />
<br />

Ultimate Attack: Flame Tongue Sword (Level: 110)
> Warduke's sword Nightwind ignites in flames for 30 seconds. For the duration, Warduke deals an additional 1000% damage with his normal attacks and he takes half damage from all sources. If Warduke activates his ultimate again before its effect expires the duration is refreshed.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Warduke's sword ignites in flames for 30 seconds. Warduke deals additional damage and takes half damage.",
    "long_description": "Warduke's sword Nightwind ignites in flames for 30 seconds. For the duration, Warduke deals an additional 1000% damage with his normal attacks and he takes half damage from all sources. If Warduke activates his ultimate again before its effect expires the duration is refreshed.",
    "damage_modifier": 1,
    "damage_types": ["magic"],
    "graphic_id": 16906,
    "target": "none",
    "aoe_radius": 0,
    "tags": ["ultimate"],
    "num_targets": 0,
    "animations": [{
        "duration": 30,
        "ultimate": "warduke",
        "animation_sequence_name": "ultimate",
        "type": "ultimate_attack",
        "no_damage_display": true
    }],
    "name": "Flame Tongue Sword",
    "cooldown": 120,
    "id": 575
}
</pre>
</p>
</details>
<br />
<br />

A Trained Killer (Level: 50)
> Each time Warduke attacks or is damaged, he gains a Remorseless stack. Warduke increases his damage by `$(amount)%` for each Remorseless stack he has, stacking additively. Stacks are reset when traveling to a new area.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "static_dps_mult": null,
    "required_level": 50,
    "effect": "effect_def,1269",
    "tip_text": "Every time warduke attacks or is damaged, he deals more damage on his next attack. This bonus resets when changing areas.",
    "name": "A Trained Killer",
    "id": 9615,
    "hero_id": 116,
    "upgrade_type": "unlock_ability",
    "default_enabled": 1,
    "required_upgrade_id": 0
}
</pre>
</p>
</details>
<br />
<br />

Bodyguard for the Highest Bidder (Level: 100)
> Increase the health of all Champions by `$(amount)%` of Warduke's max health.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "static_dps_mult": null,
    "required_level": 100,
    "effect": "effect_def,1270",
    "name": "Bodyguard for the Highest Bidder",
    "id": 9616,
    "hero_id": 116,
    "upgrade_type": "unlock_ability",
    "default_enabled": 1,
    "required_upgrade_id": 0
}
</pre>
</p>
</details>
<br />
<br />

Chaotic Inversion (Level: 130)
> Most positional formation abilities' targets are inverted.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "static_dps_mult": null,
    "required_level": 130,
    "effect": "effect_def,1271",
    "tip_text": "Warduke inverts the targets of many postional formation abilities, opepning up completely new formations.",
    "name": "Chaotic Inversion",
    "id": 9617,
    "hero_id": 116,
    "upgrade_type": "unlock_ability",
    "default_enabled": 1,
    "required_upgrade_id": 0
}
</pre>
</p>
</details>
<br />
<br />

Drawn to Power (Level: 200)
> Warduke's damage is increased by `$(amount)%` for each positional formation ability affecting him, stacking multiplicatively. Buffs apply to the pre-stack multiplier.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "static_dps_mult": null,
    "required_level": 200,
    "effect": "effect_def,1272",
    "name": "Drawn to Power",
    "id": 9618,
    "hero_id": 116,
    "upgrade_type": "unlock_ability",
    "default_enabled": 1,
    "required_upgrade_id": 0
}
</pre>
</p>
</details>
<br />
<br />

# Specialisations

Chaos Reigns (Level: 250)
> Warduke's damage is increased by `$(not_buffed amount)%` for each Chaotic Champion in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "static_dps_mult": null,
    "specialization_name": "Chaos Reigns",
    "required_level": 250,
    "effect": "effect_def,1273",
    "name": "Chaos Reigns",
    "specialization_graphic_id": 17036,
    "id": 9619,
    "hero_id": 116,
    "upgrade_type": "unlock_ability",
    "default_enabled": 1,
    "required_upgrade_id": 0,
    "specialization_description": "Warduke focuses on Chaos, increasing his damage."
}
</pre>
</p>
</details>
<br />
<br />

Mercenary for Hire (Level: 250)
> Warduke's damage is increased by `$(not_buffed amount)%` for each Gold Find Champion in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "static_dps_mult": null,
    "specialization_name": "Mercenary for Hire",
    "required_level": 250,
    "effect": "effect_def,1274",
    "name": "Mercenary for Hire",
    "specialization_graphic_id": 16905,
    "id": 9620,
    "hero_id": 116,
    "upgrade_type": "unlock_ability",
    "default_enabled": 1,
    "required_upgrade_id": 0,
    "specialization_description": "Warduke focuses on gold, increasing his damage."
}
</pre>
</p>
</details>
<br />
<br />

League of Malevolence (Level: 250)
> Warduke's damage is increased by `$(not_buffed amount)%` for each Evil Champion in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "static_dps_mult": null,
    "specialization_name": "League of Malevolence",
    "required_level": 250,
    "effect": "effect_def,1275",
    "name": "League of Malevolence",
    "specialization_graphic_id": 16904,
    "id": 9621,
    "hero_id": 116,
    "upgrade_type": "unlock_ability",
    "default_enabled": 1,
    "required_upgrade_id": 0,
    "specialization_description": "Warduke focuses on evil, increasing his damage."
}
</pre>
</p>
</details>
<br />
<br />

# Items

1. Dagger of Malevolence - Self DPS
2. Amulet of the Heartstone - A Trained Killer
3. Helm of the Hierarch - Drawn to Power
4. Shield of the Unnameable - ???: buff_upgrades,275,9619,9620,9621
5. Indomitable Armor - Health
6. Nightwind, the Flametongue - Ultimate Cooldown Reduction

# Feats

| Feat | Effect | Source |
|---|---|---|
| `Tavern Brawler` | 30% Self DPS | Free |
| `Grappler` | 60% Self DPS | 12,500 Gems |
| `Tough` | 15% Health | Free |
| `Resilient` | 30% Health | 12,500 Gems |
| `Defensive Duelist` | 5 Overwhelm | Free |
| `Calm Under Pressure` | 10 Overwhelm | Gold Chest |
| `Never Skip Leg Day` | ???: buff_upgrades,40,9619,9620,9621 | 12,500 Gems |
| `A Skilled Swordsman` | 40% A Trained Killer | Gold Chest |
| `Trusty Lieutenant` | 40% Drawn to Power | Gold Chest |
| `A New Leaf` | Stat: +2 Charisma | 50,000 Gems |

# Legendaries

* Increases the damage of all Human Champions by 150%.
* Increases the damage of all Champions by 10% for each Champion in the formation.
* Increases the damage of all Champions by 20% for each Male Champion in the formation.
* Increases the damage of all Champions by 30% for each Champion with a CON score of 13 or higher in the formation.
* Increases the damage of all Champions by 20% for each Champion with a WIS score of 11 or higher in the formation.
* Increases the damage of all Champions by 40% for each Champion in the formation with a EVIL alignment.

[Back to Top](#top)

*Last Modified: {{ site.time }}*