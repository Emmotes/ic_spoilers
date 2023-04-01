[Back to Main](index.md)

![PC Portrait](images/portrait_antrius.png)

# Antrius

Antrius is your classic fantasy Bard - he's a lover, not a fighter. After his supportive parents paid his way through Bard College, Antrius is out on the road trying to make a name for himself. With a glorious mane of hair and his lute, he is ready to charm anyone who gets in the party's way, friend or foe. His golden pipes bring inspiration to all who hear his song!

# Basic Information

Antrius will be the new champion in the Greengrass event on 12 April 2023.

* Seat: 4
* Race: Human
* Class: Bard
* Roles: Support / Healing
* Age: 45
* Gender: Male
* Alignment: Chaotic Good
* Affiliation: Awful Ones

| Stat | Value | Day 1 Trials | Patrons |
|---|---|---|---|
| Strength | 10 | Yes | Mirt |
| Dexterity | 14 | Yes | Vajra (with Feat) |
| Constitution | 13 | Yes | - |
| Intelligence | 10 | Yes | Zariel |
| Wisdom | 12 | Yes | |
| Charisma | 18 | Yes | |

# Formation

![Formation Layout](images/formation_antrius.png)

# Abilities

**Base Attack: Vicious Mockery** (Magic)
> Antrius attacks the enemy with the most health, causing it to take +100% damage until he attacks again.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Antrius attacks the enemy with the most health, causing it to take +100% damage until he attacks again.",
    "long_description": "",
    "damage_modifier": 1,
    "damage_types": ["magic"],
    "graphic_id": 0,
    "target": "highest_health",
    "aoe_radius": 0,
    "tags": ["ranged"],
    "num_targets": 1,
    "animations": [{
        "hit_sound": 133,
        "shoot_sound": 159,
        "projectile_graphic_id": 1,
        "type": "ranged_attack",
        "projectile": "song_of_pain",
        "shoot_frame": 9
    }],
    "name": "Vicious Mockery",
    "cooldown": 6,
    "id": 614
}
</pre>
</p>
</details>
<br />

**Ultimate Attack: Cloud of Daggers** (Level: 350)
> Antrius takes a hand mirror out and smiles into it, causing it to shatter. Shards of glass fly out towards the enemy with the most health forming a cloud upon reaching the target. The cloud deals ongoing damage for 10 seconds.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Antrius smiles into a mirror causing it to shatter. The shards create a cloud dealing damage to all enemies within it.",
    "long_description": "Antrius takes a hand mirror out and smiles into it, causing it to shatter. Shards of glass fly out towards the enemy with the most health forming a cloud upon reaching the target. The cloud deals ongoing damage for 10 seconds.",
    "damage_modifier": 0.03,
    "damage_types": ["melee"],
    "graphic_id": 18689,
    "target": "highest_health",
    "aoe_radius": 0,
    "tags": [
        "melee",
        "ultimate"
    ],
    "num_targets": 1,
    "animations": [{
        "duration": 10,
        "projectile_data": {
            "projectile_details": {
                "trail": {
                    "scale_lerp": [
                        {
                            "x": 1,
                            "y": 1
                        },
                        {
                            "x": 0,
                            "y": 0
                        }
                    ],
                    "lifespan": 0.3,
                    "initial_velocity": {
                        "x": "250",
                        "y": "0"
                    },
                    "alpha_lerp": {
                        "0": 0,
                        "1": 0,
                        "0.1": 0.75
                    },
                    "tint": {
                        "a": 1,
                        "r": 1,
                        "b": 1,
                        "g": 1
                    },
                    "spawn_rate": 160,
                    "particle_graphic_ids": [
                        7693,
                        18554
                    ],
                    "velocity_jitter": {
                        "x": "100",
                        "y": "100"
                    }
                },
                "percent_height_offset": 0,
                "projectile_graphic_id": 18554,
                "projectile_speed": 1511,
                "rotation_speed": 0
            },
            "hit_sound": 133,
            "shoot_offset_y": -62.5,
            "shoot_offset_x": 90,
            "shoot_sound": 149,
            "type": "ranged_attack",
            "projectile": "pd_generic_projectile",
            "shoot_frame": 55
        },
        "ultimate": "antrius",
        "type": "ultimate_attack",
        "num_damage_ticks": 20,
        "aoe_radius": 160
    }],
    "name": "Cloud of Daggers",
    "cooldown": 120,
    "id": 615
}
</pre>
</p>
</details>
<br />

**Inspiring Song** (Level: 40)
> Antrius inspires each adjacent Champion giving them 10 temporary hit points every 5 seconds and increasing their damage by 100%. Any Champion with a Charisma score of 17 or higher further inspires all unaffected adjacent Champions, and this continues to cascade. Antrius' song is so inspiring that he also inspires himself. The total shield amount on each Champion is limited to 10 times the Champion's max health.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "static_dps_mult": null,
    "required_level": 40,
    "effect": "effect_def,1462",
    "tip_text": "Antrius protects and buffs adjacent Champions.",
    "name": "Inspiring Song",
    "id": 10794,
    "hero_id": 122,
    "upgrade_type": "unlock_ability",
    "default_enabled": 1,
    "required_upgrade_id": 0
}
{
    "effect_keys": [
        {
            "overlay_location": "slot",
            "bottom": true,
            "active_graphic_id": 18661,
            "effect_string": "hero_dps_multiplier_mult,100",
            "sort_offset": -1,
            "targets": [{
                "type": "cascade",
                "cascade_target_filter": {
                    "score": 17,
                    "stat": "cha",
                    "check": ">=",
                    "type": "stat_score"
                },
                "cascade_type": "self_and_adj"
            }]
        },
        {
            "target_self": true,
            "effect_string": "grant_temporary_hp_with_cooldown,10,5,0,1000",
            "override_key_desc": "$target is granted $amount temporary HP every $(interval) seconds. The total temporary HP can only grant up to $optional_percent_limit% of $target's max HP",
            "targets": [{
                "type": "cascade",
                "cascade_target_filter": {
                    "score": 17,
                    "stat": "cha",
                    "check": ">=",
                    "type": "stat_score"
                },
                "cascade_type": "self_and_adj"
            }],
            "apply_temp_hp_regardless_of_health": true
        },
        {
            "overlay_location": "slot",
            "bottom": true,
            "active_graphic_id": 18553,
            "effect_string": "do_nothing",
            "sort_offset": 0,
            "filter_targets": [{
                "score": 17,
                "stat": "cha",
                "check": ">=",
                "type": "stat_score"
            }],
            "targets": [{
                "type": "cascade",
                "cascade_target_filter": {
                    "score": 17,
                    "stat": "cha",
                    "check": ">=",
                    "type": "stat_score"
                },
                "cascade_type": "self_and_adj"
            }]
        }
    ],
    "requirements": "",
    "description": {"desc": "$(source_hero) inspires each adjacent Champion giving them $(amount___2) temporary hit points every $(interval___2) seconds and increasing their damage by $(amount)%. Any Champion with a Charisma score of 17 or higher further inspires all unaffected adjacent Champions, and this continues to cascade. $(source_hero)' song is so inspiring that he also inspires himself. The total shield amount on each Champion is limited to 10 times the Champion's max health."},
    "id": 1462,
    "flavour_text": "",
    "graphic_id": 18683,
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

**The Hardiest, Bardiest Bard** (Level: 110)
> Antrius increases Inspiring Song's temporary hit point bonus by 100% for each Champion affected by it, stacking additively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "static_dps_mult": null,
    "required_level": 110,
    "effect": "effect_def,1463",
    "tip_text": "Inspiring Song is buffed based on the number of Champions affected by it. Use Charismatic champions to spread and buff it.",
    "name": "The Hardiest, Bardiest Bard",
    "id": 10795,
    "hero_id": 122,
    "upgrade_type": "unlock_ability",
    "default_enabled": 1,
    "required_upgrade_id": 0
}
{
    "effect_keys": [{
        "stack_title": "Affected Champions",
        "amount_updated_listeners": ["slot_changed"],
        "show_bonus": true,
        "amount_func": "add",
        "stack_func": "per_crusader",
        "effect_string": "buff_upgrade,100,10794,1",
        "stack_func_data": {"ekh_filter": {
            "upgrade_id": 10794,
            "type": "affected_by_upgrade"
        }}
    }],
    "requirements": "",
    "description": {"desc": "$(source_hero) increases $(upgrade_name id)'s temporary hit point bonus by $(amount)% for each Champion affected by it, stacking additively."},
    "id": 1463,
    "flavour_text": "",
    "graphic_id": 18685,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<br />

**Suave and Sophisticated** (Level: 160)
> Antrius increases Inspiring Song's damage bonus by 100% for each Champion affected by it, stacking multiplicatively. Buffs apply to the pre-stack value.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "static_dps_mult": null,
    "required_level": 160,
    "effect": "effect_def,1464",
    "name": "Suave and Sophisticated",
    "id": 10796,
    "hero_id": 122,
    "upgrade_type": "unlock_ability",
    "default_enabled": 1,
    "required_upgrade_id": 0
}
{
    "effect_keys": [
        {"effect_string": "pre_stack_amount,100"},
        {
            "amount_expr": "upgrade_amount(10796,0)",
            "stack_title": "Affected Champions",
            "amount_updated_listeners": ["slot_changed"],
            "show_bonus": true,
            "amount_func": "mult",
            "stack_func": "per_crusader",
            "effect_string": "buff_upgrade,0,10794,0",
            "stack_func_data": {"ekh_filter": {
                "upgrade_id": 10794,
                "type": "affected_by_upgrade"
            }}
        }
    ],
    "requirements": "",
    "description": {"desc": "$(source_hero) increases $(upgrade_name id___2)'s damage bonus by $(amount)% for each Champion affected by it, stacking multiplicatively. Buffs apply to the pre-stack value."},
    "id": 1464,
    "flavour_text": "",
    "graphic_id": 18684,
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

**Can't be De-Feat-ed** (Level: 200)
> Antrius increases Inspiring Song's damage bonus by 10% for each feat your Champions have unlocked, stacking additively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "static_dps_mult": null,
    "required_level": 200,
    "effect": "effect_def,1465",
    "name": "Can't be De-Feat-ed",
    "id": 10797,
    "hero_id": 122,
    "upgrade_type": "unlock_ability",
    "default_enabled": 1,
    "required_upgrade_id": 0
}
{
    "effect_keys": [{
        "stack_title": "Unlocked Feats",
        "amount_updated_listeners": ["feat_changed"],
        "show_bonus": true,
        "amount_func": "add",
        "stack_func": "per_feat",
        "effect_string": "buff_upgrade,10,10794,0"
    }],
    "requirements": "",
    "description": {"desc": "$(source_hero) increases $(upgrade_name id)'s damage bonus by $(amount)% for each feat your Champions have unlocked, stacking additively."},
    "id": 1465,
    "flavour_text": "",
    "graphic_id": 18682,
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

**Bard College** (Level: 300)
> Antrius increases Inspiring Song's damage bonus by 200% for each Bard in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "static_dps_mult": null,
    "specialization_name": "Bard College",
    "required_level": 300,
    "effect": "effect_def,1466",
    "name": "Bard College",
    "specialization_graphic_id": 18686,
    "id": 10798,
    "hero_id": 122,
    "upgrade_type": "unlock_ability",
    "default_enabled": 1,
    "required_upgrade_id": 0,
    "specialization_description": "Antrius focuses on his fellow bards to power his song."
}
{
    "effect_keys": [{
        "stacks_multiply": true,
        "off_when_benched": true,
        "effect_string": "buff_upgrade_per_any_tagged_crusader_mult,200,10794,bard"
    }],
    "requirements": "",
    "description": {"desc": "$(source_hero) increases $(upgrade_name id)'s damage bonus by $(not_buffed amount)% for each Bard in the formation, stacking multiplicatively."},
    "id": 1466,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "spec_option_post_apply_info": "Bard Champions: $num_stacks",
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
<br />

**The "A" In Chaotic Is For Antrius** (Level: 300)
> Antrius increases Inspiring Song's damage bonus by 100% for each Chaotic Champion in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "static_dps_mult": null,
    "specialization_name": "The \"A\" In Chaotic Is For Antrius",
    "required_level": 300,
    "effect": "effect_def,1468",
    "name": "The \"A\" In Chaotic Is For Antrius",
    "specialization_graphic_id": 18687,
    "id": 10800,
    "hero_id": 122,
    "upgrade_type": "unlock_ability",
    "default_enabled": 1,
    "required_upgrade_id": 0,
    "specialization_description": "Antrius focuses on Chaotic Champions to power his song."
}
{
    "effect_keys": [{
        "stacks_multiply": true,
        "off_when_benched": true,
        "effect_string": "buff_upgrade_per_any_tagged_crusader_mult,100,10794,chaotic"
    }],
    "requirements": "",
    "description": {"desc": "$(source_hero) increases $(upgrade_name id)'s damage bonus by $(not_buffed amount)% for each Chaotic Champion in the formation, stacking multiplicatively."},
    "id": 1468,
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

**Truly Awful Stats** (Level: 300)
> Antrius increases Inspiring Song's damage bonus by 150% for each Champion in the formation with a total ability score of 78 or lower, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "static_dps_mult": null,
    "specialization_name": "Truly Awful Stats",
    "required_level": 300,
    "effect": "effect_def,1467",
    "name": "Truly Awful Stats",
    "specialization_graphic_id": 18688,
    "id": 10799,
    "hero_id": 122,
    "upgrade_type": "unlock_ability",
    "default_enabled": 1,
    "required_upgrade_id": 0,
    "specialization_description": "Antrius focuses on other Champions with awful stats to power his song."
}
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
        "effect_string": "buff_upgrade,150,10794,0",
        "stack_func_data": {"target_filters": [{
            "stat": "total_ability_score",
            "comparison": "<=",
            "type": "stat",
            "value": 78
        }]}
    }],
    "requirements": "",
    "description": {"desc": "$(source_hero) increases $(upgrade_name id)'s damage bonus by $(not_buffed amount)% for each Champion in the formation with a total ability score of 78 or lower, stacking multiplicatively."},
    "id": 1467,
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

# Items

| Slot | Epic Name | Type |
|---|---|---|
| 1 | `Dazzling Blade` | All Champion Damage |
| 2 | `Strings of Harmony` | Inspiring Song |
| 3 | `Bardic Pin-Up` | Suave and Sophisticated |
| 4 | `Bracers of Boldness` | Can't be De-Feat-ed |
| 5 | `Performer's Gilet` | Ultimate Damage |
| 6 | `Full-Length Mirror` | Ultimate Cooldown Reduction |

<details><summary><em>Item Names and Descriptions</em></summary>
<p>
<pre>
Slot 1:
       Trusty Sword: It's no vicious mockery, but it's good in a pinch.
  Weapon of Defense: When it hits metal armor, it makes a perfect D-flat.
    Polished Rapier: Swords are more Evandra's thing. But it does complete the outfit.
     Dazzling Blade: Sharp as my wit! Cutting as my words!

Slot 2:
  Beginner's Guitar: They hand these out in bard college.
    Damaged Strings: Really, I should have used the sword to hit that goblin.
        Dulcet Lute: I'm the star they regard as the bard spittin' bars!
 Strings of Harmony: Just to be clear, the rest of you are singing back-up.

Slot 3:
 Unflattering Image: This is a travesty.
      Wanted Poster: You could say I'm wanted most everywhere.
   Perfect Portrait: Who shall I make it out to?
      Bardic Pin-Up: It would look great on your mantlepiece. For those lonely nights.

Slot 4:
       Beaten Armor: They stop attacks, but they don't look great.
Defensive Coverings: Always wear protection.
  Decorated Bracers: Sturdy and stylish.
Bracers of Boldness: Prepare to be dazzled.

Slot 5:
  Adventurer's Vest: Every bard needs a look.
   Bardic Waistcoat: I like to wear it open at the neck.
     Ruffled Blouse: Some fancier frills to draw the eye...
  Performer's Gilet: How could you possibly take your eyes off me?

Slot 6:
        Hand Mirror: One moment, I need to check my smile.
      Compact Glass: I still look fantastic.
  Silver Reflection: Well, hello handsome.
 Full-Length Mirror: Alllll of me! Why not take allllll of me!
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
| `Stirring Lyrics` | 15% Inspiring Song | Free |
| `I Bring Salvation` | 30% Inspiring Song | 12,500 Gems |
| `Heartbreaker` | 20% Inspiring Song | Free |
| `My Mockery is Vicious` | 40% Inspiring Song | 12,500 Gems |
| `I'm a Star` | 40% Suave and Sophisticated | 12,500 Gems |
| `Charming and in Charge` | 80% Suave and Sophisticated | 50,000 Gems |
| `Durable` | Stat: +1 Constitution | Gold Chest |

# Legendaries

* Increases the damage of all Champions by 100%.
* Increases the damage of all Female Champions by 125%.
* Increases the damage of all Champions by 30% for each Human Champion in the formation.
* Increases the damage of all Champions by 30% for each Champion with a DEX score of 13 or higher in the formation.
* Increases the damage of all Champions with a CHA score of 15 or higher by 200%.
* Increases the damage of all Chaotic Champions by 150%.

<details><summary><em>DPS Applicable</em></summary>
<p>
<pre>
     Arkhan: 4 / 6
    Artemis: 3 / 6
    Asharra: 4 / 6
      Azaka: 4 / 6
     Binwin: 3 / 6
   Birdsong: 5 / 6
Black Viper: 6 / 6
 Catti-brie: 5 / 6
     D'hani: 5 / 6
     Delina: 6 / 6
    Dhadius: 4 / 6
     Drizzt: 3 / 6
    Farideh: 5 / 6
        Fen: 5 / 6
      Grimm: 4 / 6
     Gromma: 4 / 6
    Jaheira: 5 / 6
    Jamilah: 4 / 6
        Jim: 4 / 6
      Krond: 4 / 6
     Lucius: 4 / 6
      Makos: 4 / 6
      Minsc: 4 / 6
      NERDS: 4 / 6
     Nahara: 6 / 6
      Nrakk: 3 / 6
     Orisha: 5 / 6
   Prudence: 6 / 6
      Rosie: 5 / 6
      Strix: 6 / 6
    Torogar: 4 / 6
     Warden: 5 / 6
    Warduke: 4 / 6
     Yorven: 4 / 6
      Zorbu: 4 / 6
</pre>
</p>
</details>
<br />

# Console Portrait

![Console Portrait](images/console_antrius.png)

# Chests

| Gold | Silver |
|---|---|
| ![Gold Chest](images/chest_antrius_gold.png) | ![Silver Chest](images/chest_antrius_silver.png) |

[Back to Top](#top)

*Last Modified: {{ site.time }}*