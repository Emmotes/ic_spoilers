[Back to Main](index.md)

# Index

* [Season 6](#season-6)
* [Theme](#theme)
* [Changes](#changes)
* [Modron: Dexterous Core](#modron-dexterous-core)
* [Zorbu](#zorbu)
* [Nrakk](#nrakk)
* [Korth](#korth)
* [Warden](#warden)
* [Sisaspia](#sisaspia)
* [Season Chest Icons](#season-chest-icons)
<br />

![Season 6 Icon](images/season_6/icon.png)

# Season 6

![Season 6 Banner](images/season_6/banner.png)

Season 6 will be called `Elemental Rebirth` and is expected to start on 08 November 2023.

# Theme

![Zorbu Season Portrait](images/season_6/zorbu.png)![Nrakk Season Portrait](images/season_6/nrakk.png)![Korth Season Portrait](images/season_6/korth.png)![Warden Season Portrait](images/season_6/warden.png)![Sisaspia Season Portrait](images/season_6/sisaspia.png)

The five seasonal champions this time around will be Zorbu Warden Sisaspia Nrakk and Korth. We know this because the seasonal chest will be `Gold Elemental Rebirth Chest` and it contains loot for those champions.

This means the theme this season is (or seems to be) high dexterity CNE originals.

### Currency Icon

![Season 6 Currency](images/season_6/currency.png)

![Season 6 Ad Panel](images/season_6/adpanel.png)

# Changes

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.


# Modron: Dexterous Core

![Modron Icon](images/season_6/modron_icon.png)

This core is designed for Dexterity 15+ champions. It also has Automation at level 1.

As you'll be able to see in the picture - it comes with some new nodes.

Dexterous Support: (dexSup in picture)

> Increase the damage of all Champions by X% for each DEX 15+ Champion in the formation.

Dexterous DPS: (dex15 in picture)

> Increase the damage of all DEX 15+ champions by X%.

### Bonus Breakdown

These tables are assuming that every node that can be supercharged is fully supercharged at 500% (which is possible). The left group are based on using a champion with 15+ Dexterity - the right group are using a dps champion that has less than 15 Dexterity.

| With 15+ Dex DPS<br />Num 15+ Dex in Formation | Bonus |   | With 14- Dex DPS<br />Num 15+ Dex in Formation | Bonus |
|--:|--:|---|--:|--:|
| 1 | 1.15e49% |   | 0 | 8.01e28% |
| 2 | 1.74e50% |   | 1 | 1.39e35% |
| 3 | 8.63e50% |   | 2 | 2.10e36% |
| 4 | 2.70e51% |   | 3 | 1.04e37% |
| 5 | 6.56e51% |   | 4 | 3.27e37% |
| 6 | 1.35e52% |   | 5 | 7.93e37% |
| 7 | 2.50e52% |   | 6 | 1.64e38% |
| 8 | 4.26e52% |   | 7 | 3.03e38% |
| 9 | 6.81e52% |   | 8 | 5.15e38% |
| 10 | 1.04e53% |   | 9 | 8.24e38% |

### Level 1

![Dexterous Core Core Level 1](images/season_6/modron_1.png)

### Level 15

![Dexterous Core Core Level 15](images/season_6/modron_15.png)

# Zorbu

![Zorbu Portrait](images/season_6/zorbu.png)
<br /><span class="formationTooltip">[formation]
    <span class="formationTooltipContents">
        ![Formation Layout for Zorbu](images/season_6/zorbu_formation.png)
    </span>
</span>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ultimate: Mechanical Squirrel**
> Zorbu winds up a small mechanical squirrel and sends it skittering towards a random enemy. When it reaches them, it detonates a hidden vial of Alchemist's fire inside, dealing damage to (and stunning) all nearby enemies.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Zorbu winds up a small mechanical squirrel and sends it skittering towards a random enemy.",
    "long_description": "Zorbu winds up a small mechanical squirrel and sends it skittering towards a random enemy. When it reaches them, it detonates a hidden vial of Alchemist's fire inside, dealing damage to (and stunning) all nearby enemies.",
    "damage_modifier": 0.014,
    "damage_types": ["ranged"],
    "graphic_id": 2430,
    "target": "random",
    "aoe_radius": 200,
    "tags": [
        "ranged",
        "ultimate"
    ],
    "num_targets": 1,
    "animations": [{
        "shoot_offset_y": 51,
        "shoot_offset_x": 43,
        "effect_on_monsters": {"effect_string": "monster_stun,5,1509"},
        "type": "ranged_attack",
        "projectile": "squirrel",
        "shoot_frame": 35
    }],
    "name": "Mechanical Squirrel",
    "cooldown": 240,
    "id": 689
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Know your Enemy** (Guess)
> Humanoids, beasts, undead, and aberrations are Zorbu's Favored Foes. He tracks the number of each type that he has killed and gains a 0.01% damage bonus against that type for each kill, stacking additively. If an enemy has multiple types, they count for each type and the damage bonuses stack multiplicatively. These bonuses persist through resets.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "zorbu_lifelong_enemies,0.01,humanoid,beast,undead,aberration"
        },
        {
            "off_when_benched": true,
            "effect_string": "favored_foe,humanoid"
        },
        {
            "off_when_benched": true,
            "effect_string": "favored_foe,beast"
        },
        {
            "off_when_benched": true,
            "effect_string": "favored_foe,undead"
        },
        {
            "off_when_benched": true,
            "effect_string": "favored_foe,aberration"
        }
    ],
    "requirements": "",
    "description": {
        "post": {"conditions": [{
            "condition": "not static_desc",
            "desc": "^^$zorbu_lifelong_enemies_desc"
        }]},
        "desc": "Humanoids, beasts, undead, and aberrations are Zorbu's Favored Foes. He tracks the number of each type that he has killed and gains a $(amount)% damage bonus against that type for each kill, stacking additively. If an enemy has multiple types, they count for each type and the damage bonuses stack multiplicatively. These bonuses persist through resets."
    },
    "id": 1694,
    "flavour_text": "",
    "graphic_id": 5890,
    "properties": {
        "use_outgoing_description": true,
        "is_formation_ability": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Seething Hatred** (Guess)
> Zorbu's damage is increased by an amount equal to 10% of the sum of his base Know Your Enemy buffs.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "off_when_benched": true,
        "effect_string": "hero_dps_mult_percent_lifelong_enemies,10"
    }],
    "requirements": "",
    "description": {"desc": "Zorbu's damage is increased by an amount equal to $(amount)% of the sum of his base Know Your Enemy buffs."},
    "id": 1695,
    "flavour_text": "",
    "graphic_id": 5892,
    "properties": {
        "use_outgoing_description": true,
        "is_formation_ability": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Hunter's Pack** (Guess)
> Increases the damage of champions adjacent to Zorbu with a DEX score of 15 or higher by 500%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "off_when_benched": true,
        "use_computed_amount_for_description": true,
        "effect_string": "hero_dps_multiplier_mult,500",
        "filter_targets": [{
            "score": 14,
            "stat": "dex",
            "check": "greater_than",
            "type": "stat_score"
        }],
        "targets": ["adj"]
    }],
    "requirements": "",
    "description": {"desc": "Increases the damage of champions adjacent to Zorbu with a DEX score of 15 or higher by $(amount)%."},
    "id": 1696,
    "flavour_text": "",
    "graphic_id": 2422,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Focused Fury** (Guess)
> Zorbu's damage is increased by the bonus provided by Hunter's Pack.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "data": {"targets": ["self_and_adj"]},
        "off_when_benched": true,
        "effect_string": "change_upgrade_data,12991"
    }],
    "requirements": "",
    "description": {"desc": "Zorbu's damage is increased by the bonus provided by Hunter's Pack."},
    "id": 1697,
    "flavour_text": "",
    "graphic_id": 21478,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Expert Hunter** (Guess)
> Increases Hunter's Pack by the bonus provided by Focused Fury.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "amount_expr": "upgrade_amount(12990,dps_update)",
        "off_when_benched": true,
        "show_bonus": true,
        "effect_string": "buff_upgrade,0,12991"
    }],
    "requirements": "",
    "description": {"desc": "Increases Hunter's Pack by the bonus provided by Focused Fury."},
    "id": 1698,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "spec_option_post_apply_info": "Focused Fury Bonus: $sample_amount%",
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Hunting Partners** (Guess)
> The Know Your Enemy counters additionally increment once for each Champion in the formation affected by Hunter's Pack each time a valid enemy is killed.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "off_when_benched": true,
        "amount_func": "set",
        "stack_func": "per_upgrade_targets",
        "effect_string": "additional_lifelong_enemies_count,0",
        "stack_func_data": {
            "only_slots_with_heroes": true,
            "upgrade_id": 12991
        }
    }],
    "requirements": "",
    "description": {"desc": "The Know Your Enemy counters additionally increment once for each Champion in the formation affected by Hunter's Pack each time a valid enemy is killed."},
    "id": 1699,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "use_outgoing_description": true,
        "is_formation_ability": true,
        "spec_option_post_apply_info": "Hunter's Pack Champions: $num_stacks",
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Wolf Pack** (Guess)
> Increases the effect of Hunter's Pack by 400% and the DEX score of adjacent Champions by 1.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {"effect_string": "buff_upgrade,400,12991"},
        {
            "effect_string": "increase_ability_score,dex,1",
            "targets": ["adj"]
        }
    ],
    "requirements": "",
    "description": {"desc": "Increases the effect of Hunter's Pack by $(amount)% and the DEX score of adjacent Champions by $(amount___2)."},
    "id": 1750,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "indexed_effect_properties": true,
        "effect_name": "Wolf Pack"
    }
}
</pre>
</p>
</details>
</div></div>

# Nrakk

![Nrakk Portrait](images/season_6/nrakk.png)
<br /><span class="formationTooltip">[formation]
    <span class="formationTooltipContents">
        ![Formation Layout for Nrakk](images/season_6/nrakk_formation.png)
    </span>
</span>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ultimate: Ki Blast**
> Nrakk blasts a random enemy and gains Ki Points. Reactivate this ultimate when prompted to quickly blast another enemy.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Nrakk blasts a random enemy and gains Ki Points.",
    "long_description": "Nrakk blasts a random enemy and gains Ki Points. Reactivate this ultimate when prompted to quickly blast another enemy.",
    "damage_modifier": 1,
    "damage_types": ["ranged"],
    "graphic_id": 0,
    "target": "random",
    "aoe_radius": 0,
    "tags": [
        "ranged",
        "ultimate"
    ],
    "num_targets": 1,
    "animations": [],
    "name": "Ki Blast",
    "cooldown": 260,
    "id": 690
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ultimate: Ki Blast**
> Nrakk blasts a random enemy and gains Ki Points. Reactivate this ultimate when prompted to quickly blast another enemy.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Nrakk blasts a random enemy and gains Ki Points",
    "long_description": "Nrakk blasts a random enemy and gains Ki Points. Reactivate this ultimate when prompted to quickly blast another enemy.",
    "damage_modifier": 1,
    "damage_types": ["magic"],
    "graphic_id": 2690,
    "target": "none",
    "aoe_radius": 0,
    "tags": [
        "ranged",
        "ultimate"
    ],
    "num_targets": 1,
    "animations": [{
        "ultimate": "nrakk_v2",
        "type": "ultimate_attack"
    }],
    "name": "Ki Blast",
    "cooldown": 260,
    "id": 704
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> Nrakk increases the damage of all Champions in the columns in front of and behind him by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "off_when_benched": true,
        "effect_string": "hero_dps_multiplier_mult,100",
        "targets": ["prev_and_next_col"]
    }],
    "requirements": "",
    "description": {"desc": "Nrakk increases the damage of all Champions in the columns in front of and behind him by $(amount)%."},
    "id": 1700,
    "flavour_text": "",
    "graphic_id": 21474,
    "properties": {"is_formation_ability": true}
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> Based on the maximum number of Ki Points Nrakk has had at one time during this adventure, Way of the Kensei is increased by 100% for each of those Ki Points, stacking multiplicatively. Nrakk can have at most 60 Ki Points at once.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability might be prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {"effect_string": "pre_stack_amount,100"},
        {
            "amount_expr": "upgrade_amount(13001,0)",
            "stack_title": "Max. Ki Points This Adventure",
            "amount_updated_listeners": ["stat_changed,nrakk_maximum_ki_points"],
            "stacks_multiply": true,
            "stat": "nrakk_maximum_ki_points",
            "off_when_benched": true,
            "show_bonus": true,
            "amount_func": "mult",
            "instance_stat": true,
            "stack_func": "get_stat",
            "effect_string": "buff_upgrade,0,12999"
        }
    ],
    "requirements": "",
    "description": {"desc": "Based on the maximum number of Ki Points Nrakk has had at one time during this adventure, Way of the Kensei is increased by $(amount)% for each of those Ki Points, stacking multiplicatively. Nrakk can have at most 60 Ki Points at once."},
    "id": 1701,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "indexed_effect_properties": true,
        "use_outgoing_description": true,
        "is_formation_ability": true,
        "default_bonus_index": 0,
        "formation_circle_icon": false,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> When Nrakk has at least 1 Ki Point before he attacks, consume 1 Ki Point and stun all enemies Nrakk hits for 3 seconds. Affected enemies take 50% more damage for each Ki Point Nrakk currently has, stacking multiplicatively. This debuff does not stack and lasts until the affected enemy is killed or Nrakk has no Ki Points remaining.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "off_when_benched": true,
        "stun_time": 3,
        "debuff_effect": {
            "stacks_multiply": true,
            "amount_func": "mult",
            "stack_func": "per_nrakk_ki_points",
            "active_graphic_y": -60,
            "active_graphic_id": 21554,
            "effect_string": "increase_monster_damage,0"
        },
        "effect_string": "nrakk_stunning_strike,50"
    }],
    "requirements": "",
    "description": {
        "post": {"conditions": [{
            "condition": "not static_desc",
            "desc": "^^$nrakk_current_ki_points"
        }]},
        "desc": "When Nrakk has at least 1 Ki Point before he attacks, consume 1 Ki Point and stun all enemies Nrakk hits for $(stun_time) seconds. Affected enemies take $(not_buffed amount)% more damage for each Ki Point Nrakk currently has, stacking multiplicatively. This debuff does not stack and lasts until the affected enemy is killed or Nrakk has no Ki Points remaining."
    },
    "id": 1702,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "use_outgoing_description": true,
        "is_formation_ability": true,
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> Every third attack, Nrakk cleaves multiple enemies dealing damage in an area.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "alternate_attack_sequence": "attack_b",
        "off_when_benched": true,
        "effect_string": "add_attack_aoe_targets_every,100,150,3,97"
    }],
    "requirements": "",
    "description": {"desc": "Every third attack, Nrakk cleaves multiple enemies dealing damage in an area."},
    "id": 1703,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "use_outgoing_description": true,
        "is_formation_ability": true,
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> While Nrakk has no Ki Points he reduces his ultimate cooldown by 1 second each time he attacks, and an additional 4 seconds each time he hits a boss creature.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "cooldown_reduction": 1,
        "off_when_benched": true,
        "cooldown_reduction_boss": 4,
        "effect_string": "nrakk_perfect_self"
    }],
    "requirements": "",
    "description": {
        "post": {"conditions": [{
            "condition": "not static_desc",
            "desc": "^^$nrakk_current_ki_points"
        }]},
        "desc": "While Nrakk has no Ki Points he reduces his ultimate cooldown by $(cooldown_reduction) second each time he attacks, and an additional $(cooldown_reduction_boss) seconds each time he hits a boss creature."
    },
    "id": 1704,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "use_outgoing_description": true,
        "is_formation_ability": true,
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> Increases the effect of Nrakk's specializations by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{"effect_string": "buff_upgrades,100,13005,13006"}],
    "requirements": "",
    "description": {"desc": "Increases the effect of Nrakk's specializations by $(amount)%."},
    "id": 1707,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": []
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Unknown** (Guess)
> Increases the potency of most Positional Formation Abilities of adjacent Champions with a Wisdom (WIS) score of 14 or higher by 50%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "off_when_benched": true,
        "effect_string": "buff_positional_formation_abilities,50",
        "filter_targets": [{
            "score": 14,
            "stat": "wis",
            "check": ">=",
            "type": "stat_score"
        }],
        "targets": ["adj"],
        "override_key_desc": "Increases the potency of $target's Positional Formation Abilities by $amount%"
    }],
    "requirements": "",
    "description": {"desc": "Increases the potency of most Positional Formation Abilities of adjacent Champions with a Wisdom (WIS) score of 14 or higher by $(amount)%."},
    "id": 1705,
    "flavour_text": "",
    "graphic_id": 5866,
    "properties": {"is_formation_ability": true}
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Githzerai Agility** (Guess)
> Increases the potency of most Positional Formation Abilities of adjacent Champions with a Dexterity (DEX) score of 16 or higher by 50%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "off_when_benched": true,
        "effect_string": "buff_positional_formation_abilities,50",
        "filter_targets": [{
            "score": 16,
            "stat": "dex",
            "check": ">=",
            "type": "stat_score"
        }],
        "targets": ["adj"],
        "override_key_desc": "Increases the potency of $target's Positional Formation Abilities by $amount%"
    }],
    "requirements": "",
    "description": {"desc": "Increases the potency of most Positional Formation Abilities of adjacent Champions with a Dexterity (DEX) score of 16 or higher by $(amount)%."},
    "id": 1706,
    "flavour_text": "",
    "graphic_id": 5868,
    "properties": {"is_formation_ability": true}
}
</pre>
</p>
</details>
</div></div>

# Korth

![Korth Portrait](images/season_6/korth.png)
<br /><span class="formationTooltip">[formation]
    <span class="formationTooltipContents">
        ![Formation Layout for Korth](images/season_6/korth_formation.png)
    </span>
</span>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Samurai Slice**
> Korth charges out and attacks the nearest non-marked enemy with his samurai sword.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Korth charges out and attacks the nearest non-marked enemy with his samurai sword.",
    "long_description": "",
    "damage_modifier": 1,
    "damage_types": ["melee"],
    "graphic_id": 0,
    "target": "korth_front_prefer_non_marked",
    "aoe_radius": 0,
    "tags": ["melee"],
    "num_targets": 1,
    "animations": [{
        "damage_frame": 3,
        "target_offset_x": -50,
        "type": "melee_attack"
    }],
    "name": "Samurai Slice",
    "cooldown": 5.5,
    "id": 696
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ultimate: Hungry Jaws**
> Korth leaps to the nearest enemy and ferociously bites them, causing massive damage and a bleed for 5x the base damage over 5 seconds.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Korth leaps to the nearest enemy and ferociously bites them.",
    "long_description": "Korth leaps to the nearest enemy and ferociously bites them, causing massive damage and a bleed for 5x the base damage over 5 seconds.",
    "damage_modifier": 0.03,
    "damage_types": ["melee"],
    "graphic_id": 5731,
    "target": "front",
    "aoe_radius": 0,
    "tags": [
        "melee",
        "ultimate"
    ],
    "num_targets": 1,
    "animations": [{
        "damage_frame": 30,
        "shake_on_hit": 0.1,
        "damage_over_time": {
            "tick_time": 0.2,
            "pop_damage": true,
            "damage_is_additional": true,
            "time": 5,
            "percent": 5
        },
        "target_offset_y": 30,
        "target_offset_x": -80,
        "start_frame": 23,
        "jump_height": 180,
        "jump_back_sequence": {
            "end_frame": 53,
            "start_frame": 46
        },
        "type": "melee_attack",
        "end_frame": 45,
        "jump_back_speed": 4000,
        "cooldown_sequence": {
            "end_frame": 59,
            "start_frame": 54
        },
        "power_up_sequence": {
            "end_frame": 13,
            "start_frame": 0
        },
        "jump_out_sequence": {
            "end_frame": 22,
            "start_frame": 14
        }
    }],
    "name": "Hungry Jaws",
    "cooldown": 160,
    "id": 695
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Rapid Training** (Guess)
> Korth increases the damage of all Champions with a DEX score of 16+ by 100% and reduces their normal attack cooldown by 0.5 seconds.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "formation_arrows_for_effected_only": true,
            "ability_score_change_updates_targets": true,
            "off_when_benched": true,
            "slot_change_updates_targets": true,
            "effect_string": "hero_dps_multiplier_mult,100",
            "filter_targets": [{
                "score": 16,
                "stat": "dex",
                "check": ">=",
                "type": "stat_score"
            }],
            "targets": ["all"]
        },
        {
            "formation_arrows_for_effected_only": true,
            "ability_score_change_updates_targets": true,
            "off_when_benched": true,
            "slot_change_updates_targets": true,
            "effect_string": "reduce_attack_cooldown,0.5",
            "filter_targets": [{
                "score": 16,
                "stat": "dex",
                "check": ">=",
                "type": "stat_score"
            }],
            "targets": ["all"]
        }
    ],
    "requirements": "",
    "description": {"desc": "Korth increases the damage of all Champions with a DEX score of 16+ by $(amount)% and reduces their normal attack cooldown by $(amount___2) seconds."},
    "id": 1713,
    "flavour_text": "",
    "graphic_id": 21475,
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
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Lizardfolk Tactics** (Guess)
> Enemies Korth attacks become Marked until they are defeated. Marked enemies take 100% more damage from all attacks.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "off_when_benched": true,
        "marked_effect_data": {
            "active_graphic_y": -60,
            "active_graphic_id": 5733,
            "effect_string": "increase_monster_damage,100"
        },
        "effect_string": "korth_lizardfolk_tactics_v2,100"
    }],
    "requirements": "",
    "description": {"desc": "Enemies Korth attacks become Marked until they are defeated. Marked enemies take $(amount)% more damage from all attacks."},
    "id": 1714,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "retain_on_slot_changed": true,
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Fighting Spirit** (Guess)
> Whenever a Champion attacks any enemy that is Marked, they gain 25 temporary hit points. This effect is increased by 100% on Champions with the Tanking role. This effect can only occur for each Champion once every 7.5 seconds.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "tank_bonus_percent": 100,
        "off_when_benched": true,
        "cooldown_seconds": 7.5,
        "effect_string": "korth_fighting_spirit_v2,25"
    }],
    "requirements": "",
    "description": {"desc": "Whenever a Champion attacks any enemy that is Marked, they gain $(amount) temporary hit points. This effect is increased by $(tank_bonus_percent)% on Champions with the Tanking role. This effect can only occur for each Champion once every $(cooldown_seconds) seconds."},
    "id": 1715,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> Korth sums up the total Dexterity scores of all Champions in the formation and increases the effect of Rapid Training by 15% for each point, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stack_title": "Total Dexterity",
        "amount_updated_listeners": [
            "ability_score_changed",
            "slot_changed"
        ],
        "stacks_multiply": true,
        "off_when_benched": true,
        "show_bonus": true,
        "amount_func": "mult",
        "stack_func": "per_hero_attribute",
        "per_hero_expr": "dex",
        "effect_string": "buff_upgrade,15,13034"
    }],
    "requirements": "",
    "description": {"desc": "Korth sums up the total Dexterity scores of all Champions in the formation and increases the effect of Rapid Training by $(not_buffed amount)% for each point, stacking multiplicatively."},
    "id": 1716,
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
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Group Tactics** (Guess)
> Korth tracks the highest number of enemies that he has simultaneously Marked in the current area, and he increases the damage bonus of Rapid Training by 20% for each of those enemies, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "stack_title": "Max. Enemies Marked",
            "stacks_multiply": true,
            "manual_stacking": true,
            "off_when_benched": true,
            "show_bonus": true,
            "effect_string": "buff_upgrade,20,13034"
        },
        {
            "off_when_benched": true,
            "effect_string": "korth_group_tactics"
        }
    ],
    "requirements": "",
    "description": {"desc": "Korth tracks the highest number of enemies that he has simultaneously Marked in the current area, and he increases the damage bonus of Rapid Training by $(not_buffed amount)% for each of those enemies, stacking multiplicatively."},
    "id": 1717,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "indexed_effect_properties": true,
        "is_formation_ability": true,
        "default_bonus_index": 0,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": false,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Strength Before Death** (Guess)
> Whenever any Champion is about to be killed and this ability is available, Korth prevents the death. The Champion stays at 1HP, gains the Fighting Spirit shield, and is invulnerable for 5 seconds. Then, Korth immediately makes an ultimate attack against the enemy that tried to kill the Champion. This ability has up to 3 charges and regenerates 1 charge every 1 minute.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "max_charges": 3,
        "resurrection_priority": 1100,
        "recharge_time": 60,
        "effect_string": "korth_strength_before_death",
        "invulnerable_effect_data": {
            "for_time": 5,
            "active_graphic_id": 873,
            "effect_string": "damage_reduction,100"
        },
        "overlay_graphic_id": 5702,
        "invulnerable_time": 5
    }],
    "requirements": "",
    "description": {
        "post": {"conditions": [{
            "condition": "not static_desc",
            "desc": "^^$korth_sbd_charges"
        }]},
        "desc": "Whenever any Champion is about to be killed and this ability is available, Korth prevents the death. The Champion stays at 1HP, gains the Fighting Spirit shield, and is invulnerable for $(invulnerable_time) seconds. Then, Korth immediately makes an ultimate attack against the enemy that tried to kill the Champion. This ability has up to $(max_charges) charges and regenerates 1 charge every 1 minute."
    },
    "id": 1718,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": false,
        "show_outgoing_desc_when_benched": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> Increases the base Dexterity score buff provided by Samurai Training by 1.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {"effect_string": "buff_upgrade_add_flat_amount,1,13041"},
        {"effect_string": "buff_upgrade_add_flat_amount,1,13042"},
        {"effect_string": "buff_upgrade_add_flat_amount,1,13043"}
    ],
    "requirements": "",
    "description": {"desc": "Increases the base Dexterity score buff provided by Samurai Training by 1"},
    "id": 1753,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": []
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Samurai Training (Back)** (Guess)
> Korth increases the base Dexterity scores of the Champions in the two slots directly behind him to 16, if they weren't already 16 or higher.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "off_when_benched": true,
        "retarget_when_any_hero_slot_changed": true,
        "effect_string": "increase_base_ability_score,dex,16",
        "targets": ["adj_behind"]
    }],
    "requirements": "",
    "description": {"desc": "Korth increases the base Dexterity scores of the Champions in the two slots directly behind him to $(amount), if they weren't already $(amount) or higher."},
    "id": 1719,
    "flavour_text": "",
    "graphic_id": 5725,
    "properties": {
        "is_formation_ability": true,
        "type": "upgrade"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Samurai Training (Front)** (Guess)
> Korth increases the base Dexterity scores of the Champions in the two slots directly in front of him to 16, if they weren't already 16 or higher.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "off_when_benched": true,
        "retarget_when_any_hero_slot_changed": true,
        "effect_string": "increase_base_ability_score,dex,16",
        "targets": ["adj_ahead"]
    }],
    "requirements": "",
    "description": {"desc": "Korth increases the base Dexterity scores of the Champions in the two slots directly in front of him to $(amount), if they weren't already $(amount) or higher."},
    "id": 1720,
    "flavour_text": "",
    "graphic_id": 5725,
    "properties": {
        "is_formation_ability": true,
        "type": "upgrade"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Samurai Training (Beside)** (Guess)
> Korth increases the base Dexterity scores of the Champions in the two slots directly above and below him to 16, if they weren't already 16 or higher.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "off_when_benched": true,
        "retarget_when_any_hero_slot_changed": true,
        "effect_string": "increase_base_ability_score,dex,16",
        "targets": ["adj_above_and_below"]
    }],
    "requirements": "",
    "description": {"desc": "Korth increases the base Dexterity scores of the Champions in the two slots directly above and below him to $(amount), if they weren't already $(amount) or higher."},
    "id": 1721,
    "flavour_text": "",
    "graphic_id": 5725,
    "properties": {
        "is_formation_ability": true,
        "type": "upgrade"
    }
}
</pre>
</p>
</details>
</div></div>

# Warden

![Warden Portrait](images/season_6/warden.png)
<br /><span class="formationTooltip">[formation]
    <span class="formationTooltipContents">
        ![Formation Layout for Warden](images/season_6/warden_formation.png)
    </span>
</span>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Hex Weapon Armblade**
> Warden leaps to a random enemy and attacks them with their armblade.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Warden leaps to a random enemy and attacks them with their armblade.",
    "long_description": "",
    "damage_modifier": 1,
    "damage_types": ["melee"],
    "graphic_id": 0,
    "target": "random",
    "aoe_radius": 0,
    "tags": ["melee"],
    "num_targets": 1,
    "animations": [{
        "type": "melee_attack",
        "sequences": [
            {
                "damage_frame": 5,
                "target_offset_x": -45,
                "end_frame": 14,
                "start_frame": 0
            },
            {
                "damage_frame": 19,
                "target_offset_x": -45,
                "end_frame": 24,
                "start_frame": 15,
                "type": "melee_attack"
            },
            {
                "damage_frame": 38,
                "target_offset_x": -60,
                "end_frame": 51,
                "start_frame": 25,
                "type": "melee_attack"
            }
        ],
        "animation": "split_sequence_multi_target"
    }],
    "name": "Hex Weapon Armblade",
    "cooldown": 5.2,
    "id": 706
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ultimate: Hunger of Hadar**
> Warden opens a rift to the void, damaging and momentarily stunning all enemies and pulling them and all active specters to a position slightly in front of the formation.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Warden opens a rift to the void, pulling all enemies and specters to one spot on the screen.",
    "long_description": "Warden opens a rift to the void, damaging and momentarily stunning all enemies and pulling them and all active specters to a position slightly in front of the formation.",
    "damage_modifier": 0.04,
    "damage_types": ["magic"],
    "graphic_id": 4498,
    "target": "none",
    "aoe_radius": 0,
    "tags": [
        "ranged",
        "ultimate"
    ],
    "num_targets": 0,
    "animations": [{
        "percent_to_formation_start": 0,
        "type": "warden_ultimate"
    }],
    "name": "Hunger of Hadar",
    "cooldown": 240,
    "id": 707
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> Warden curses their target enemy before attacking it, applying 1 stack of Hex. Enemies take 100% more damage for each Hex stack afflicting them, stacking multiplicatively. Initially, each enemy can only have 1 Hex stack at a time.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "off_when_benched": true,
        "effect_string": "warden_hex_handler,100",
        "hex": {"effect_string": "effect_def,1726"}
    }],
    "requirements": [],
    "description": {"conditions": [
        {
            "condition": "upgrade_purchased 13243",
            "desc": "Warden curses their target enemy before attacking it, applying 1 stack of Hex. Enemies take $amount% more damage for each Hex stack afflicting them, stacking multiplicatively. Each enemy can have up to 4 Hex stacks at a time."
        },
        {"desc": "Warden curses their target enemy before attacking it, applying 1 stack of Hex. Enemies take $amount% more damage for each Hex stack afflicting them, stacking multiplicatively. Initially, each enemy can only have 1 Hex stack at a time."}
    ]},
    "id": 1723,
    "flavour_text": "",
    "graphic_id": 4494,
    "properties": {
        "indexed_effect_properties": true,
        "use_outgoing_description": true,
        "is_formation_ability": true,
        "default_bonus_index": 0,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> Enemies that die while cursed by Warden spawn Accursed Specters, which increase the damage taken by nearby enemies by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "off_when_benched": true,
        "debuff": {
            "manual_stacking": true,
            "stacks_multiply": true,
            "effect_string": "increase_monster_damage,100"
        },
        "effect_string": "warden_accursed_specter,100",
        "hex": {"effect_string": "effect_def,1726"}
    }],
    "requirements": [],
    "description": {"desc": "Enemies that die while cursed by Warden spawn Accursed Specters, which increase the damage taken by nearby enemies by $amount%"},
    "id": 1724,
    "flavour_text": "",
    "graphic_id": 4495,
    "properties": {
        "retain_on_slot_changed": true,
        "indexed_effect_properties": true,
        "use_outgoing_description": true,
        "is_formation_ability": true,
        "default_bonus_index": 0,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> When Warden attacks, all active Accursed Specters rush toward the location of their target prior to them hitting it.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{"effect_string": "warden_specter_rush"}],
    "requirements": [],
    "description": {"desc": "When Warden attacks, all active Accursed Specters rush toward the location of their target prior to them hitting it."},
    "id": 1725,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "use_outgoing_description": true,
        "is_formation_ability": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> 
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "stack_title": "Hex Stacks",
            "manual_stacking": true,
            "is_warden_hex": true,
            "stacks_multiply": true,
            "active_graphic_sequence_offset": 1,
            "stacks_are_bonus": false,
            "amount_func": "mult",
            "active_graphic_y": -35,
            "active_graphic_id": 4500,
            "effect_string": "increase_monster_damage,100",
            "active_graphic_use_count": true
        },
        {"effect_string": "warden_hex"}
    ],
    "requirements": [],
    "description": {"desc": ""},
    "id": 1726,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "indexed_effect_properties": true,
        "use_outgoing_description": true,
        "is_formation_ability": true,
        "default_bonus_index": 0,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> Hex can now stack up to 4 times on each enemy.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{"effect_string": "increase_max_hex_stacks,3"}],
    "requirements": [],
    "description": {"desc": "Hex can now stack up to 4 times on each enemy."},
    "id": 1727,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "use_outgoing_description": true,
        "is_formation_ability": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> Whenever a Champion kills an enemy near an Accursed Specter, the Specter reacts violently, applying 1 Hex stack to all enemies in its radius.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{"effect_string": "warden_master_of_hexes,1"}],
    "requirements": [],
    "description": {"desc": "Whenever a Champion kills an enemy near an Accursed Specter, the Specter reacts violently, applying $amount Hex stack to all enemies in its radius."},
    "id": 1728,
    "flavour_text": "",
    "graphic_id": 4497,
    "properties": {
        "use_outgoing_description": true,
        "is_formation_ability": true,
        "effect_name": "Master of Hexes"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> Warden's attacks also deal area damage in a small radius around them equal to 25% times the highest number of active Hex stacks that there has been in the current area. This effect does not apply any additional Hex stacks.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {"effect_string": "cloak_of_flies_base,25"},
        {"effect_string": "warden_cloak_of_flies,100"}
    ],
    "requirements": [],
    "description": {
        "post": {"conditions": [{
            "condition": "not static_desc",
            "desc": "^$cloak_of_flies_description"
        }]},
        "desc": "Warden's attacks also deal area damage in a small radius around them equal to $amount% times the highest number of active Hex stacks that there has been in the current area. This effect does not apply any additional Hex stacks."
    },
    "id": 1729,
    "flavour_text": "",
    "graphic_id": 4497,
    "properties": {
        "indexed_effect_properties": true,
        "use_outgoing_description": true,
        "is_formation_ability": true,
        "effect_name": "Cloak of Flies",
        "default_bonus_index": 0,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: The Dark Hunger** (Guess)
> The maximum number of Accursed Specters that can be active at once is equal to the number of Evil aligned Champions in the formation.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "default_stacks": -1,
        "stack_title": "Evil Champions",
        "amount_updated_listeners": ["slot_changed"],
        "stacks_multiply": false,
        "off_when_benched": true,
        "show_bonus": true,
        "amount_func": "add",
        "stack_func": "per_crusader",
        "effect_string": "increase_warden_specter_max,1",
        "percent_values": false,
        "tag": "evil"
    }],
    "requirements": [],
    "description": {"desc": "The maximum number of Accursed Specters that can be active at once is equal to the number of Evil aligned Champions in the formation."},
    "id": 1730,
    "flavour_text": "",
    "graphic_id": 4496,
    "properties": {
        "use_outgoing_description": true,
        "is_formation_ability": true,
        "spec_option_post_apply_info": "Evil Champions in the formation: $num_stacks",
        "effect_name": "The Dark Hunger"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Shadows in the Night** (Guess)
> The maximum number of Accursed Specters that can be active at once is equal to the number of Champions with a DEX score of 16 or higher in the formation.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "default_stacks": -1,
        "stack_title": "High Dex Champions",
        "amount_updated_listeners": ["slot_changed"],
        "stacks_multiply": false,
        "off_when_benched": true,
        "show_bonus": true,
        "amount_func": "add",
        "stack_func": "per_crusader",
        "effect_string": "increase_warden_specter_max,1",
        "percent_values": false,
        "target_filters": [{
            "stat": "dex",
            "comparison": ">=",
            "type": "stat",
            "value": 16
        }]
    }],
    "requirements": [],
    "description": {"desc": "The maximum number of Accursed Specters that can be active at once is equal to the number of Champions with a DEX score of 16 or higher in the formation."},
    "id": 1731,
    "flavour_text": "",
    "graphic_id": 4496,
    "properties": {
        "use_outgoing_description": true,
        "is_formation_ability": true,
        "spec_option_post_apply_info": "Champions in Formation Targeted: $num_stacks",
        "effect_name": "Shadows in the Night"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Charm of the Fallen** (Guess)
> The maximum number of Accursed Specters that can be active at once is equal to the number of Champions with Charisma as their highest ability score in the formation.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "default_stacks": -1,
        "stack_title": "Charismatic Champions",
        "amount_updated_listeners": ["slot_changed"],
        "stacks_multiply": false,
        "off_when_benched": true,
        "show_bonus": true,
        "amount_func": "add",
        "stack_func": "per_crusader",
        "effect_string": "increase_warden_specter_max,1",
        "percent_values": false,
        "target_filters": [{
            "stat": "cha",
            "highest": true,
            "type": "edge_stat"
        }]
    }],
    "requirements": [],
    "description": {"desc": "The maximum number of Accursed Specters that can be active at once is equal to the number of Champions with Charisma as their highest ability score in the formation."},
    "id": 1732,
    "flavour_text": "",
    "graphic_id": 4496,
    "properties": {
        "use_outgoing_description": true,
        "is_formation_ability": true,
        "spec_option_post_apply_info": "Champions in Formation Targeted: $num_stacks",
        "effect_name": "Charm of the Fallen"
    }
}
</pre>
</p>
</details>
</div></div>

# Sisaspia

![Sisaspia Portrait](images/season_6/sisaspia.png)
<br /><span class="formationTooltip">[formation]
    <span class="formationTooltipContents">
        ![Formation Layout for Sisaspia](images/season_6/sisaspia_formation.png)
    </span>
</span>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> Sisaspia is surrounded by a torus of necrotic spores. Every second, one of the spores shoots out and attaches itself to an enemy that is near the formation. When enemies are damaged, they take 400% additional damage over 5 seconds for each spore affecting them. Normal enemies can only be affected by 4 spores, while bosses can be affected by 10 spores. Sisaspia regenerates a spore every 4 seconds and can have up to 20 spores in her reserve.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {"effect_string": "post_stack_buff,100"},
        {
            "max_monster_spores": 4,
            "remove_spores_on_ult": false,
            "max_boss_spores": 10,
            "effect_string": "sisaspia_spore,400",
            "damage_is_multiplicative": true,
            "ult_base_multiplier": 1,
            "dot_time": 5,
            "dot_tick": 1
        }
    ],
    "requirements": [],
    "description": {"conditions": [
        {
            "condition": "short_form",
            "desc": "Sisaspia is surrounded by a torus of necrotic spores that cause enemies to take additional damage over time when attached to them."
        },
        {
            "condition": "upgrade_purchased 13254",
            "desc": "Sisaspia is surrounded by a torus of necrotic spores. Every second, one of the spores shoots out and attaches itself to an enemy that is near the formation. When enemies are damaged, they take $(amount___2)% additional damage over 5 seconds for each spore affecting them. Normal enemies can only be affected by 4 spores, while bosses can be affected by 10 spores. Sisaspia regenerates a spore every 3 seconds and can have up to 30 spores in her reserve.^^$halo_of_spores_description2"
        },
        {"desc": "Sisaspia is surrounded by a torus of necrotic spores. Every second, one of the spores shoots out and attaches itself to an enemy that is near the formation. When enemies are damaged, they take $(amount___2)% additional damage over 5 seconds for each spore affecting them. Normal enemies can only be affected by 4 spores, while bosses can be affected by 10 spores. Sisaspia regenerates a spore every 4 seconds and can have up to 20 spores in her reserve.^^$halo_of_spores_description2"}
    ]},
    "id": 1742,
    "flavour_text": "",
    "graphic_id": 7200,
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
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> Good sporet! This just has properties for the spores.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{"effect_string": "do_nothing"}],
    "requirements": [],
    "description": {"desc": "Good sporet! This just has properties for the spores"},
    "id": 1743,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "dot_time": 5,
        "dot_tick": 1
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> Sisaspia uses her reserve of necrotic spores to empower a subtle infection she maintains upon her "companions", goading them forward and hopefully assisting her in her own selfish goals. This infection increases the damage of all Champions within 2 slots of herself by 25% for each spore she has used in the current area, stacking multiplicatively, up to a maximum equal to her maximum spore reserve.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "amount_updated_listeners": [
            "slot_changed",
            "sisaspia_spores_used_changed"
        ],
        "show_bonus": true,
        "amount_func": "mult",
        "stack_func": "per_sisaspia_spore_used",
        "use_computed_amount_for_description": true,
        "effect_string": "hero_dps_multiplier_mult,25",
        "targets": [{
            "distance": 2,
            "type": "distance"
        }]
    }],
    "requirements": [],
    "description": {"desc": "Sisaspia uses her reserve of necrotic spores to empower a subtle infection she maintains upon her \"companions\", goading them forward and hopefully assisting her in her own selfish goals. This infection increases the damage of all Champions within 2 slots of herself by 25% for each spore she has used in the current area, stacking multiplicatively, up to a maximum equal to her maximum spore reserve."},
    "id": 1744,
    "flavour_text": "",
    "graphic_id": 7202,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> Sisaspia's subtle infection heals damaged Champions within 2 slots of herself for 1 per second for each spore she has used in the current area, up to a maximum equal to her maximum spore reserve.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "amount_updated_listeners": [
            "slot_changed",
            "sisaspia_spores_used_changed"
        ],
        "show_stack_post_amounts": true,
        "total_title": "Total Healing",
        "target_self": true,
        "show_bonus": true,
        "use_computed_amount_for_description": true,
        "total_max_decimals": 2,
        "effect_string": "heal_per_sisaspia_spore_used,1",
        "percent_values": false,
        "targets": [{
            "distance": 2,
            "self": true,
            "type": "distance"
        }]
    }],
    "requirements": [],
    "description": {"desc": "Sisaspia's subtle infection heals damaged Champions within 2 slots of herself for $(amount) per second for each spore she has used in the current area, up to a maximum equal to her maximum spore reserve."},
    "id": 1745,
    "flavour_text": "",
    "graphic_id": 7201,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Unknown** (Guess)
> Halo of Spores now generates a new spore every 3 seconds, and Sisaspia's maximum reserve spore count is increased by 3___2.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {"effect_string": "sisaspia_spore_spawn_cooldown_override,3"},
        {"effect_string": "increase_sisaspia_reserve_spore_max,10"}
    ],
    "requirements": [],
    "description": {"desc": "Halo of Spores now generates a new spore every $amount seconds, and Sisaspia's maximum reserve spore count is increased by $amount___2."},
    "id": 1746,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "indexed_effect_properties": true,
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Unknown** (Guess)
> The effects of Symbiotic Infection and Symbiotic Healing are increased by 400% after Sisaspia has used at least 30 spores in the current area.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "amount_updated_listeners": ["sisaspia_spores_used_changed"],
            "off_when_benched": true,
            "amount_func": "if",
            "stack_func": "per_sisaspia_spore_used",
            "effect_string": "buff_upgrade,400,13251",
            "if_amount": 30
        },
        {
            "amount_updated_listeners": ["sisaspia_spores_used_changed"],
            "off_when_benched": true,
            "amount_func": "if",
            "stack_func": "per_sisaspia_spore_used",
            "effect_string": "buff_upgrade,400,13252",
            "if_amount": 30
        }
    ],
    "requirements": [],
    "description": {"desc": "The effects of Symbiotic Infection and Symbiotic Healing are increased by $amount% after Sisaspia has used at least 30 spores in the current area.^^$sisaspia_spores_used"},
    "id": 1747,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": []
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Unknown** (Guess)
> Sisaspia's maximum spore reserve is increased by the average DEX score of the formation, rounded down. Additionally, if the average DEX score is 16 or higher, the range of Halo of Spores is additively increased by 12.5% for each full point above 15.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "stack_title": "Average Dex",
            "amount_updated_listeners": [
                "slot_changed",
                "stat_changed",
                "ability_score_changed"
            ],
            "stat": "dex",
            "stacks_multiply": false,
            "off_when_benched": true,
            "show_bonus": true,
            "amount_func": "add",
            "stack_func": "per_party_stat_average",
            "effect_string": "increase_sisaspia_reserve_spore_max,1",
            "percent_values": false,
            "show_stack_type": false
        },
        {
            "stack_title": "Average Dex Over 15",
            "amount_updated_listeners": [
                "slot_changed",
                "stat_changed",
                "ability_score_changed"
            ],
            "stat": "dex",
            "stacks_multiply": false,
            "off_when_benched": true,
            "show_bonus": true,
            "amount_func": "add",
            "stack_func": "per_average_stat_above_value",
            "effect_string": "sisaspia_spore_range_add,12.5",
            "show_stack_type": false,
            "value": 15
        }
    ],
    "requirements": [],
    "description": {"desc": "Sisaspia's maximum spore reserve is increased by the average DEX score of the formation, rounded down. Additionally, if the average DEX score is 16 or higher, the range of Halo of Spores is additively increased by 12.5% for each full point above 15."},
    "id": 1748,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {"owner_use_outgoing_description": true}
}
</pre>
</p>
</details>
</div></div>

# Season Chest Icons

| Shop | Inventory |
|---|---|
| ![Shop Season Chest Icon](images/season_6/chest.png) | ![Inventory Season Chest Icon](images/season_6/chestInv.png) |

[Back to Top](#top)

*Last Modified: {{ site.time }}*