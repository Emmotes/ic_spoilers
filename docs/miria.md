[Back to Main](index.md)

![PC Portrait](images/portrait_miria.png)

# Miria

Miria Elithren is a Shadar Kai Silvanesti Elf from the world of Krynn. Born under an ill-omen of the Dark Moon, Nuitari, she had an unhappy childhood that caused her to flee her homeland and seek tutelage in advanced magical arts beyond Elven lands. After passing the Test of High Sorcery, she briefly allied with Lord Soth until he tried to turn Miria into an undead creature subservient to his will. Miria escaped Soth's trap at the cost of the flesh and muscle of her right arm. Pursued by Soth for her arcane knowledge, Miria seeks to escape Krynn.

# Basic Information

Miria will be the new champion in the Festival of Fools event on 15 March 2023.

* Seat: 12
* Race: Elf (Shadar-kai)
* Class: Wizard
* Roles: Support / Tanking
* Age: 347
* Gender: Female
* Alignment: Lawful Evil

| Stat | Value | Day 1 Trials | Patrons |
|---|---|---|---|
| Strength | 10 | Yes | Mirt |
| Dexterity | 16 | Yes | Vajra |
| Constitution | 14 | Yes | Strahd |
| Intelligence | 20 | Yes | Zariel (with Feat) |
| Wisdom | 13 | Yes | |
| Charisma | 12 | Yes | |

# Formation

![Formation Layout](images/formation_miria.png)

# Abilities

**Base Attack: Ray of Sickness** (Magic)
> Miria fires an energy ray at the nearest enemy, dealing one hit of damage, and reducing its damage by 50% for 6 seconds. Does not stack.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Miria fires an energy ray at the nearest enemy, dealing one hit of damage, and reducing its damage by 50% for 6 seconds. Does not stack.",
    "long_description": "",
    "damage_modifier": 1,
    "damage_types": ["magic"],
    "graphic_id": 0,
    "target": "front",
    "aoe_radius": 0,
    "tags": ["ranged"],
    "num_targets": 1,
    "animations": [{
        "effect_frames": {"projectile": {
            "effect_string": "effect_def,1448",
            "apply_to_hit_monsters": true
        }},
        "sound_frames": {"1": 184},
        "hit_sound": -1,
        "shoot_offset_y": -20,
        "shoot_offset_x": 70,
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

**Ultimate Attack: Danse Macabre** (Level: 190)
> Miria summons 5 skeletons to the battlefield. The skeletons deal 15 attacks to the enemies before vanishing. All enemies are slowed by 50% for the duration due to the confusion on the battlefield.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Miria summons skeletons to fight for her. All enemies are slowed due to the confusion on the battlefield.",
    "long_description": "Miria summons 5 skeletons to the battlefield. The skeletons deal 15 attacks to the enemies before vanishing. All enemies are slowed by 50% for the duration due to the confusion on the battlefield.",
    "damage_modifier": 0.03,
    "damage_types": ["melee"],
    "graphic_id": 18268,
    "target": "none",
    "aoe_radius": 0,
    "tags": [
        "ultimate",
        "ranged"
    ],
    "num_targets": 0,
    "animations": [{
        "skeletons": [
            {
                "damage_frame": 7,
                "graphic_id": 1443
            },
            {
                "damage_frame": 7,
                "graphic_id": 1283
            },
            {
                "damage_frame": 7,
                "graphic_id": 1284
            },
            {
                "damage_frame": 7,
                "graphic_id": 1285
            },
            {
                "damage_frame": 7,
                "graphic_id": 7342
            }
        ],
        "confusion_of_battle_effects": [{"effect_string": "monster_speed_reduce,50"}],
        "ultimate": "miria",
        "type": "ultimate_attack"
    }],
    "name": "Danse Macabre",
    "cooldown": 240,
    "id": 602
}
</pre>
</p>
</details>
<br />

**Mage of High Sorcery** (Level: 10)
> Miria increases the damage of all adjacent Champions by `$(amount)`%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "static_dps_mult": null,
    "required_level": 10,
    "effect": "effect_def,1418",
    "tip_text": "Miria increases the damage of Champions adjacent to her, keep her next to your highest damage dealing champions.",
    "name": "Mage of High Sorcery",
    "id": 10665,
    "hero_id": 121,
    "upgrade_type": "unlock_ability",
    "default_enabled": 1,
    "required_upgrade_id": 0
}
{
    "effect_keys": [{
        "off_when_benched": true,
        "effect_string": "hero_dps_multiplier_mult,400",
        "targets": ["adj"]
    }],
    "requirements": "",
    "description": {"desc": "$(source_hero) increases the damage of all adjacent Champions by $(amount)%."},
    "id": 1418,
    "flavour_text": "",
    "graphic_id": 18262,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<br />

**Zombie Bodyguards** (Level: 30)
> While Miria is alive, a Zombie Bodyguard that shares hit points with Miria appears in front of each Champion in the front-most column of the formation. When a Champion in that column takes damage, the Zombie Bodyguard takes `$(amount)`% of the damage instead, while the original target takes the remaining 10%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "static_dps_mult": null,
    "required_level": 30,
    "effect": "effect_def,1420",
    "tip_text": "Miria protects the formation by summoning Zombie Bodyguards to protect the frontmost Champions. She does not need to be in the front column to be effective.",
    "name": "Zombie Bodyguards",
    "id": 10667,
    "hero_id": 121,
    "upgrade_type": "unlock_ability",
    "default_enabled": 1,
    "required_upgrade_id": 0
}
{
    "effect_keys": [{
        "zombie_graphic_ids": [
            18233,
            18234,
            18235
        ],
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

**Soul Cage** (Level: 60)
> When an enemy is defeated, Miria can capture its soul and gain a Soul Cage stack. Her maximum number of Soul Cage stacks is 1 for every 20 areas completed in the current adventure, rounded up. Miria increases the damage bonus of Mage of High Sorcery by 25% for each Soul Cage stack she has, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "static_dps_mult": null,
    "required_level": 60,
    "effect": "effect_def,1419",
    "name": "Soul Cage",
    "id": 10666,
    "hero_id": 121,
    "upgrade_type": "unlock_ability",
    "default_enabled": 1,
    "required_upgrade_id": 0
}
{
    "effect_keys": [
        {
            "stack_title": "Soul Cage Stacks",
            "stacks_multiply": true,
            "show_bonus": true,
            "effect_string": "buff_upgrade,25,10665",
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

**Clone** (Level: 100)
> Miria maintains a stash of clones in her Inner Sanctum with a count equal to her Soul Cage stacks. If Miria is defeated, a clone immediately appears and takes her place at full health. This does not reduce the number of Soul Cage stacks she has. Her stash of clones are regenerated when the party changes areas. For each clone summoned in the current area, the effect of Mage of High Sorcery is increased by 25%, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "static_dps_mult": null,
    "required_level": 100,
    "effect": "effect_def,1421",
    "name": "Clone",
    "id": 10668,
    "hero_id": 121,
    "upgrade_type": "unlock_ability",
    "default_enabled": 1,
    "required_upgrade_id": 0
}
{
    "effect_keys": [
        {
            "stack_title": "Summoned Clones",
            "stacks_multiply": true,
            "show_bonus": true,
            "effect_string": "buff_upgrade,25,10665",
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

**Life Transference** (Level: 130)
> Miria increases the health of all other Champions by `$(amount)`% of her max health for each Soul Cage stack she has, stacking additively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "static_dps_mult": null,
    "required_level": 130,
    "effect": "effect_def,1422",
    "name": "Life Transference",
    "id": 10669,
    "hero_id": 121,
    "upgrade_type": "unlock_ability",
    "default_enabled": 1,
    "required_upgrade_id": 0
}
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

# Specialisations

**Independent** (Level: 80)
> Miria increases the attack bonus of Mage of High Sorcery by `$(amount)`% for each Unaffiliated Champion in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "static_dps_mult": null,
    "specialization_name": "Independent",
    "required_level": 80,
    "effect": "effect_def,1425",
    "name": "Independent",
    "specialization_graphic_id": 18265,
    "id": 10672,
    "hero_id": 121,
    "upgrade_type": "unlock_ability",
    "default_enabled": 1,
    "required_upgrade_id": 0,
    "specialization_description": "Miria prefers the lone wolves."
}
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
    "description": {"desc": "$(source_hero) increases the attack bonus of $(upgrade_name id___2) by $(amount)% for each Unaffiliated Champion in the formation, stacking multiplicatively."},
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

**Intellectual** (Level: 80)
> Miria increases the attack bonus of Mage of High Sorcery by `$(amount)`% for each Champion with an INT score of 15+ in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "static_dps_mult": null,
    "specialization_name": "Intellectual",
    "required_level": 80,
    "effect": "effect_def,1424",
    "name": "Intellectual",
    "specialization_graphic_id": 18266,
    "id": 10671,
    "hero_id": 121,
    "upgrade_type": "unlock_ability",
    "default_enabled": 1,
    "required_upgrade_id": 0,
    "specialization_description": "Miria prefers the smarter crowd."
}
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

**Methodical** (Level: 80)
> Miria increases the attack bonus of Mage of High Sorcery by `$(amount)`% for each Lawful Champion in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "static_dps_mult": null,
    "specialization_name": "Methodical",
    "required_level": 80,
    "effect": "effect_def,1423",
    "name": "Methodical",
    "specialization_graphic_id": 18267,
    "id": 10670,
    "hero_id": 121,
    "upgrade_type": "unlock_ability",
    "default_enabled": 1,
    "required_upgrade_id": 0,
    "specialization_description": "Miria prefers those who follow the rules."
}
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

# Items

| Slot | Epic Name | Type |
|---|---|---|
| 1 | `Enhanced Force Cube` | All Champion Damage |
| 2 | `High Sorcery Robes` | Mage of High Sorcery |
| 3 | `Ancient Soul Cage` | Soul Cage |
| 4 | `Star of Another World` | All Specialisations |
| 5 | `Krynn Hoard` | Ultimate Damage |
| 6 | `Encrusted Jewelry` | Ultimate Cooldown Reduction |

<details><summary><em>Item Names and Descriptions</em></summary>
<p>
<pre>
Slot 1:
         Trinket Cube: Oh this? It's merely a play thing, pay it no heed.
         Warding Cube: Don't worry, darling, this isn't my first undead incursion.
        Cube of Force: I decide what's going to happen next, not you.
  Enhanced Force Cube: You might not want to tou -- well, I warned you, didn't I?

Slot 2:
    Frumpled Clothing: I'm not above a little undercover work.
       Initiate Robes: They thought they could break me by treating me like dirt, but it only
                       made my ambition stronger.
          Black Robes: I have been guided by Nuitari since my birth.
   High Sorcery Robes: A mark of the respect and station I deserve.

Slot 3:
           Chain Ball: Something I kept from a former employer, I'll turn it to my own needs.
           Metal Cage: What could it hold? Come closer and find out, darling.
            Soul Cage: This one owes me some answers.
    Ancient Soul Cage: I prefer not to meddle with the soul of others, but if you really make
                       me mad... I might make an exception.

Slot 4:
           Ornate Box: It will eventually house a Starjewel.
        Starjewel Box: Starjewels? Oh, they are quite important to my people.
 Silvanesti Starjewel: It creates a bond with my betrothed, whom I've only met in a dream.
Star of Another World: My betrothed is not of this world. I need to travel to another world to
                       find them.

Slot 5:
       Azure Gemstone: It's not grave robbing if they asked me to keep it.
    Blue Maw Necklace: Stare at it long enough and it might SNAP!
          Battle Gear: You wield armor, I wield prestige. We'll see who survives the day.
          Krynn Hoard: My collection will help me gain influence once I reach my next world.

Slot 6:
      Skeleton Chique: Sprinkle these around the edge of our camp. That should warn the bandits
                       away.
    Makeshift Servant: Oh, do sit darling. I'll have my servant get us some tea.
        Fear Ensemble: Death is nothing to fear, it is inevitible after all. One day you too
                       shall be nothing but unwanted bones in the ground.
    Encrusted Jewelry: Fit for a queen, I think. Or an Empress perhaps? Very fitting.
</pre>
</p>
</details>
<br />

# Feats

This list will only show feats that are going to be available on the release of this champion. The separate [Feats](feats.md) page may show others that could be available later if they exist.

| Feat | Effect | Source |
|---|---|---|
| `Selflessness` | 10% All Champion Damage | Free |
| `Inspiring Leader` | 25% All Champion Damage | Gold Chest |
| `Tough` | 15% Health | Free |
| `Resilient` | 30% Health | 12,500 Gems |
| `Adept of the Black Robes` | 20% Mage of High Sorcery | Free |
| `Test of High Sorcery` | 40% Mage of High Sorcery | 12,500 Gems |
| `Soth's Right Hand` | 80% Mage of High Sorcery | 50,000 Gems |
| `Soul Flame` | 40% Soul Cage | Gold Chest |
| `The Black Rose's Influence` | Stat: +1 Charisma | Gold Chest |

# Legendaries

* Increases the damage of all Champions by 100%.
* Increases the damage of all Female Champions by 125%.
* Increases the damage of all Elf Champions by 150%.
* Increases the damage of all Champions by 20% for each Champion with a WIS score of 11 or higher in the formation.
* Increases the damage of all Champions with a DEX score of 15 or higher by 200%.
* Increases the damage of all Champions by 30% for each Magic Champion in the formation.

<details><summary><em>DPS Applicable</em></summary>
<p>
<pre>
     Arkhan: 3 / 6
    Artemis: 4 / 6
    Asharra: 4 / 6
      Azaka: 4 / 6
     Binwin: 3 / 6
   Birdsong: 5 / 6
Black Viper: 5 / 6
 Catti-brie: 5 / 6
     D'hani: 5 / 6
     Delina: 6 / 6
    Dhadius: 3 / 6
     Drizzt: 5 / 6
    Farideh: 4 / 6
        Fen: 5 / 6
      Grimm: 3 / 6
     Gromma: 4 / 6
       Ishi: 5 / 6
    Jaheira: 4 / 6
    Jamilah: 4 / 6
   Jarlaxle: 5 / 6
        Jim: 3 / 6
       Kent: 4 / 6
      Krond: 3 / 6
     Lucius: 4 / 6
      Makos: 3 / 6
      Minsc: 3 / 6
      NERDS: 3 / 6
     Nahara: 5 / 6
      Nrakk: 4 / 6
     Orisha: 4 / 6
   Prudence: 4 / 6
      Rosie: 5 / 6
      Strix: 4 / 6
    Torogar: 4 / 6
     Warden: 4 / 6
    Warduke: 3 / 6
     Yorven: 3 / 6
      Zorbu: 4 / 6
</pre>
</p>
</details>
<br />

# Console Portrait

![Console Portrait](images/console_miria.png)

[Back to Top](#top)

*Last Modified: {{ site.time }}*