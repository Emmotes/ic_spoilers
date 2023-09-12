[Back to Main](index.md)

# Index

* [Season 6](#season-6)
* [Theme](#theme)
* [Changes](#changes)
* [Zorbu](#zorbu)
* [Nrakk](#nrakk)
* [Korth](#korth)
* [Sisaspia](#sisaspia)
* [Warden](#warden)
* [Dungeon Master](#dungeon-master)
<br />

# Season 6

Season 6 is guesstimated to start on 08 November 2023.

# Theme

![Zorbu Season Portrait](images/season_6/zorbu.png)![Nrakk Season Portrait](images/season_6/nrakk.png)![Korth Season Portrait](images/season_6/korth.png)![Sisaspia Season Portrait](images/season_6/sisaspia.png)![Warden Season Portrait](images/season_6/warden.png)![Dungeon Master Season Portrait](images/season_6/dm.png)

We believe the six seasonal champions this time around are likely to be Zorbu, Nrakk, Korth, Sisaspia, Warden and Dungeon Master.

# Changes

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - or specialisations might not be marked as such - etc..

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. Making assumptions on how the champions will turn out based on this information would be premature.

# Zorbu

![Zorbu Portrait](images/season_6/zorbu.png)

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
> Zorbu's damage is increased by an amount equal to 10% of his base Know Your Enemy buffs.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "off_when_benched": true,
        "effect_string": "hero_dps_mult_percent_lifelong_enemies,10"
    }],
    "requirements": "",
    "description": {"desc": "Zorbu's damage is increased by an amount equal to $(amount)% of his base Know Your Enemy buffs."},
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
        "effect_string": "hero_dps_multiplier_mult,500",
        "filter_targets": [{
            "score": 14,
            "stat": "dex",
            "check": "greater_than",
            "type": "stat_score"
        }],
        "targets": [{
            "distance": 1,
            "self": false,
            "type": "distance"
        }]
    }],
    "requirements": "",
    "description": {"desc": "Increases the damage of champions adjacent to Zorbu with a DEX score of 15 or higher by $(amount)%."},
    "id": 1696,
    "flavour_text": "",
    "graphic_id": 2422,
    "properties": {"is_formation_ability": true}
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
        "amount_expr": "upgrade_amount(12991,0)",
        "off_when_benched": true,
        "show_bonus": true,
        "effect_string": "hero_dps_multiplier_mult,0"
    }],
    "requirements": "",
    "description": {"desc": "Zorbu's damage is increased by the bonus provided by Hunter's Pack."},
    "id": 1697,
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
**Unknown** (Guess)
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

# Nrakk

![Nrakk Portrait](images/season_6/nrakk.png)

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
    "graphic_id": 0,
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
        "stun_time": 3,
        "debuff_effect": {
            "stacks_multiply": true,
            "amount_func": "mult",
            "stack_func": "per_nrakk_ki_points",
            "active_graphic_y": -60,
            "active_graphic_id": 1,
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
        "desc": "When Nrakk has at least 1 Ki Point before he attacks, consume 1 Ki Point and stun all enemies Nrakk hits for $(stun_time) seconds. Affected enemies take $(amount)% more damage for each Ki Point Nrakk currently has, stacking multiplicatively. This debuff does not stack and lasts until the affected enemy is killed or Nrakk has no Ki Points remaining."
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
> Every third attack is a wide AoE cleave.
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
    "description": {"desc": "Every third attack is a wide AoE cleave."},
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
> Increases the potency of most Positional Formations Abilities of adjacent Champions with a Wisdom (WIS) score of 14 or higher by 50%.
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
        "targets": ["adj"]
    }],
    "requirements": "",
    "description": {"desc": "Increases the potency of most Positional Formations Abilities of adjacent Champions with a Wisdom (WIS) score of 14 or higher by $(amount)%."},
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
**Unknown** (Guess)
> Increases the potency of most Positional Formations Abilities of adjacent Champions with a Dexterity (DEX) score of 16 or higher by 50%.
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
        "targets": ["adj"]
    }],
    "requirements": "",
    "description": {"desc": "Increases the potency of most Positional Formations Abilities of adjacent Champions with a Dexterity (DEX) score of 16 or higher by $(amount)%."},
    "id": 1706,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {"is_formation_ability": true}
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

# Korth

![Korth Portrait](images/season_6/korth.png)

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
    "damage_modifier": 1,
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
    "graphic_id": 0,
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
            "effect_string": "increase_monster_damage,0"
        },
        "effect_string": "korth_lizardfolk_tactics_v2,100"
    }],
    "requirements": "",
    "description": {"desc": "Enemies Korth attacks become Marked until they are defeated. Marked enemies take $(amount)% more damage from all attacks."},
    "id": 1714,
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
            "amount_func": "mult",
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
        "resurrection_priority": 500,
        "recharge_time": 60,
        "off_when_benched": true,
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
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Unknown** (Guess)
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
    "graphic_id": 0,
    "properties": {"is_formation_ability": true}
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Unknown** (Guess)
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
    "graphic_id": 0,
    "properties": {"is_formation_ability": true}
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Unknown** (Guess)
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
    "graphic_id": 0,
    "properties": {"is_formation_ability": true}
}
</pre>
</p>
</details>
</div></div>

# Sisaspia

![Sisaspia Portrait](images/season_6/sisaspia.png)

No changes as of yet.

# Warden

![Warden Portrait](images/season_6/warden.png)

No changes as of yet.

# Dungeon Master

![Dungeon Master Portrait](images/season_6/dm.png)

No changes as of yet.


[Back to Top](#top)

*Last Modified: {{ site.time }}*