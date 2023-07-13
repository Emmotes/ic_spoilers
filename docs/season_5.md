[Back to Main](index.md)

# Index

* [Season 5](#season-5)
* [Theme](#theme)
* [Changes](#changes)
* [Jim](#jim)
* [Evelyn](#evelyn)
* [Strix](#strix)
* [Omin](#omin)
* [Vi](#vi)
<br />

# Season 5

Season 5 is guesstimated to start on 20 September 2023 with the preview week arriving one week prior on 13 September 2023.

# Theme

![Jim Season Portrait](images/season_5/jim.png)![Evelyn Season Portrait](images/season_5/evelyn.png)![Strix Season Portrait](images/season_5/strix.png)![Omin Season Portrait](images/season_5/omin.png)![Vi Season Portrait](images/season_5/vi.png)

We believe the five seasonal champions this time around are likely to be Jim, Evelyn, Strix, Omin and Vi.

# Changes

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. Making assumptions on how the champions will turn out based on this information would be premature.

# Jim

![Jim Portrait](images/season_5/jim.png)

**Base Attack: Wand of Wonder**
> Jim uses his Wand of Wonder, applying a random effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Jim uses his Wand of Wonder, applying a random effect.",
    "long_description": "",
    "damage_modifier": 0,
    "damage_types": ["magic"],
    "graphic_id": 0,
    "target": "random_nonboss_nonstatic_normal_hp",
    "aoe_radius": 0,
    "tags": ["ranged"],
    "num_targets": 1,
    "animations": [{
        "projectile_count": 1,
        "hit_sound": 133,
        "shoot_sound": 149,
        "type": "ranged_attack",
        "projectile": "rainbow_missile",
        "shoot_frame": 3
    }],
    "name": "Wand of Wonder",
    "cooldown": 4.75,
    "id": 659
}
</pre>
</p>
</details>
<br />

**Base Attack: Wand of Wonder**
> Jim uses his Wand of Wonder, applying a random effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Jim uses his Wand of Wonder, applying a random effect.",
    "long_description": "",
    "damage_modifier": 0,
    "damage_types": ["magic"],
    "graphic_id": 0,
    "target": "random",
    "aoe_radius": 0,
    "tags": ["ranged"],
    "num_targets": 1,
    "animations": [{
        "projectile_count": 1,
        "hit_sound": 133,
        "shoot_sound": 149,
        "type": "ranged_attack",
        "projectile": "rainbow_missile",
        "shoot_frame": 3
    }],
    "name": "Wand of Wonder",
    "cooldown": 4.75,
    "id": 660
}
</pre>
</p>
</details>
<br />

**Base Attack: Wand of Wonder**
> Jim uses his Wand of Wonder, applying a random effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Jim uses his Wand of Wonder, applying a random effect.",
    "long_description": "",
    "damage_modifier": 1,
    "damage_types": ["magic"],
    "graphic_id": 0,
    "target": "random",
    "aoe_radius": 0,
    "tags": ["ranged"],
    "num_targets": 1,
    "animations": [{
        "projectile_details": {
            "projectile_hit_graphic_id": 5843,
            "trail": {
                "scale_lerp": {
                    "0": {
                        "x": 1,
                        "y": 1
                    },
                    "1": {
                        "x": 0,
                        "y": 0
                    },
                    "0.5": {
                        "x": 0.75,
                        "y": 0.75
                    }
                },
                "lifespan": 2,
                "rotation_jitter": 45,
                "initial_velocity": {
                    "x": 0,
                    "y": 0
                },
                "alpha_lerp": [
                    1,
                    0
                ],
                "particle_graphic_ids": [69],
                "spawn_rate": 150,
                "velocity_jitter": {
                    "x": 20,
                    "y": 20
                }
            },
            "line_thickness": 200,
            "projectile_speed": 2200,
            "hit_monsters_moved_through": true,
            "hash": "72c47553b139e5be883fcb69832db798",
            "move_across_entire_screen": true
        },
        "hit_sound": 133,
        "shoot_offset_y": -60,
        "shoot_offset_x": -80,
        "shoot_sound": 149,
        "type": "ranged_attack",
        "projectile": "wand_of_wonder_coins",
        "shoot_frame": 1
    }],
    "name": "Wand of Wonder",
    "cooldown": 4.75,
    "id": 661
}
</pre>
</p>
</details>
<br />

**Ultimate: Jim's Magical Maelstrom**
> Jim attacks all enemies with a showy shower of sparks and energizes his Fan Club for 15 seconds.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Jim attacks all enemies with a showy shower of sparks.",
    "long_description": "Jim attacks all enemies with a showy shower of sparks and energizes his Fan Club for 15 seconds.",
    "damage_modifier": 0.03,
    "damage_types": ["magic"],
    "graphic_id": 6117,
    "target": "all",
    "aoe_radius": 0,
    "tags": [
        "ranged",
        "aoe",
        "ultimate"
    ],
    "num_targets": 1,
    "animations": [{
        "hit_sound": 133,
        "projectile_id": 6093,
        "firework_id": 6092,
        "shoot_sound": 149,
        "jimtext_id": 6091,
        "buff_effect_string": "buff_upgrade,400,12128",
        "animation_sequence": 4,
        "type": "jim_ult_v2",
        "shoot_frame": 18,
        "buff_time": 15
    }],
    "name": "Jim's Magical Maelstrom",
    "cooldown": 180,
    "id": 658
}
</pre>
</p>
</details>
<br />

**Hidey-Box** (Guess)
> Whenever the formation is under attack, Jim hides in a small protective box and fires twice as many Magic Missiles when he attacks.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "in_anim": 7,
        "out_anim": 8,
        "off_when_benched": true,
        "effect_string": "transform_while_attacked,6090,225"
    }],
    "requirements": [],
    "description": {"desc": "Whenever the formation is under attack, Jim hides in a small protective box and fires twice as many Magic Missiles when he attacks."},
    "id": 1606,
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
<br />

**Fan Club** (Guess)
> Increases the damage of Jim and everyone in the columns in front of and behind him by `$(not_buffed amount)%` for each affected Champion, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "amount_updated_listeners": [
            "slot_changed",
            "upgrade_unlocked"
        ],
        "stacks_multiply": true,
        "off_when_benched": true,
        "show_bonus": true,
        "amount_func": "mult",
        "use_computed_amount_for_description": true,
        "stack_func": "per_upgrade_targets",
        "effect_string": "hero_dps_multiplier_mult,200",
        "stack_func_data": {
            "only_slots_with_heroes": true,
            "upgrade_id": 12128
        },
        "targets": ["self_and_behind_and_ahead"]
    }],
    "requirements": [],
    "description": {"desc": "Increases the damage of Jim and everyone in the columns in front of and behind him by $(not_buffed amount)% for each affected Champion, stacking multiplicatively."},
    "id": 1607,
    "flavour_text": "",
    "graphic_id": 6099,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<br />

**Wand of Wonder** (Guess)
> Every `$(trigger_every)` attacks, Jim uses his Wand of Wonder. It provides one of five random effects:  
>   
> - Turns a random enemy into a Large Warty Toad, stunning it for 5 seconds and then slowing it for 10 seconds after the stun wears off. It maintains its pre-transformation health.  
> - Turns a random enemy into an Abyssal Chicken, reducing its max health by 5 orders of magnitude to a minimum of 10.  
> - Turns a random enemy into a Mimic with 5 armored hit points that drops 10x normal gold when killed.  
> - A random ally is assigned one of their skins at random until you change areas.  
> - Jim shoots a line of gold coins out across the field, dealing damage to all enemies in a line and dropping one enemy's worth of gold.  
>   
> Note: Transformations don't effect bosses or special enemies.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "toad_ek_idx": 1,
            "chicken_ek_idx": 2,
            "effect_string": "jim_wand_of_wonder",
            "trigger_every": 10,
            "gold_ek_idx": 5,
            "mimic_ek_idx": 3,
            "skin_ek_idx": 4
        },
        {
            "monster_id": 2029,
            "stun_time": 5,
            "effect_string": "change_base_attack,659",
            "slow_time": 10,
            "slow_effect_data": {
                "for_time": 10,
                "active_graphic_y": -50,
                "active_graphic_id": 6548,
                "effect_string": "monster_speed_reduce,50"
            },
            "apply_manually": true
        },
        {
            "monster_id": 2030,
            "min_health": 10,
            "effect_string": "change_base_attack,659",
            "reduce_health_orders_of_mag": 5,
            "apply_manually": true
        },
        {
            "monster_id": 1006,
            "effect_string": "change_base_attack,659",
            "apply_manually": true
        },
        {
            "effect_graphic_id": 6092,
            "effect_string": "change_base_attack,660",
            "apply_manually": true
        },
        {
            "effect_string": "change_base_attack,661",
            "apply_manually": true
        }
    ],
    "requirements": [],
    "description": {"desc": "Every $(trigger_every) attacks, Jim uses his Wand of Wonder. It provides one of five random effects:^^- Turns a random enemy into a Large Warty Toad, stunning it for 5 seconds and then slowing it for 10 seconds after the stun wears off. It maintains its pre-transformation health.^- Turns a random enemy into an Abyssal Chicken, reducing its max health by 5 orders of magnitude to a minimum of 10.^- Turns a random enemy into a Mimic with 5 armored hit points that drops 10x normal gold when killed.^- A random ally is assigned one of their skins at random until you change areas.^- Jim shoots a line of gold coins out across the field, dealing damage to all enemies in a line and dropping one enemy's worth of gold.^^Note: Transformations don't effect bosses or special enemies."},
    "id": 1608,
    "flavour_text": "",
    "graphic_id": 6100,
    "properties": {
        "retain_on_slot_changed": true,
        "indexed_effect_properties": true,
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "show_outgoing_desc_when_benched": false
    }
}
</pre>
</p>
</details>
<br />

**Magical Mystery Tour** (Guess)
> The effect of Fan Club is increased by `$(not_buffed amount)%` each time an enemy, ally, or ally's equipment is polymorphed or transformed in some way, stacking multiplicatively up to `$(max_stacks)` times. Stacks reset when changing areas.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "stacks_multiply": true,
            "off_when_benched": true,
            "show_bonus": true,
            "effect_string": "buff_upgrade,4,12128",
            "max_stacks": 100,
            "more_triggers": [{
                "action": {"type": "reset"},
                "trigger": "area_changed"
            }],
            "stacks_on_trigger": "things_transformed"
        },
        {
            "off_when_benched": true,
            "effect_string": "jim_mmt_visual",
            "graphic_id": 6092
        }
    ],
    "requirements": [],
    "description": {"desc": "The effect of Fan Club is increased by $(not_buffed amount)% each time an enemy, ally, or ally's equipment is polymorphed or transformed in some way, stacking multiplicatively up to $(max_stacks) times. Stacks reset when changing areas."},
    "id": 1609,
    "flavour_text": "",
    "graphic_id": 20465,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<br />

**Fashion Week** (Guess)
> The effect of Fan Club is increased by `$(amount)%` for each Champion with a non-base skin equipped in the formation, stacking additively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "amount_updated_listeners": [
            "slot_changed",
            "skin_changed"
        ],
        "stacks_multiply": false,
        "off_when_benched": true,
        "show_bonus": true,
        "amount_func": "add",
        "stack_func": "per_skin",
        "effect_string": "buff_upgrade,400,12128"
    }],
    "requirements": [],
    "description": {"desc": "The effect of Fan Club is increased by $(amount)% for each Champion with a non-base skin equipped in the formation, stacking additively."},
    "id": 1610,
    "flavour_text": "",
    "graphic_id": 20464,
    "properties": {"is_formation_ability": true}
}
</pre>
</p>
</details>
<br />

**Unknown** (Guess)
> Increases the effect of Jim's specializations by `$(amount)%`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{"effect_string": "buff_upgrades,100,12132,12133,12134"}],
    "requirements": [],
    "description": {"desc": "Increases the effect of Jim's specializations by $(amount)%"},
    "id": 1614,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": []
}
</pre>
</p>
</details>
<br />

**Specialisation: Darkmagic Cheer Squad** (Guess)
> Increases the effect of Fan Club by `$(amount)%`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "off_when_benched": true,
        "effect_string": "buff_upgrade,400,12128"
    }],
    "requirements": [],
    "description": {"desc": "Increases the effect of Fan Club by $(amount)%"},
    "id": 1611,
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
<br />

**Specialisation: Magic magic magic** (Guess)
> Increases the damage of all Champions whose base attacks are magic by `$(not_buffed amount)%` for each Champion whose base attacks are magic in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "amount_updated_listeners": [
            "slot_changed",
            "attack_changed"
        ],
        "stacks_multiply": true,
        "off_when_benched": true,
        "show_bonus": true,
        "amount_func": "mult",
        "use_computed_amount_for_description": true,
        "stack_func": "per_crusader",
        "effect_string": "hero_dps_multiplier_mult,100",
        "filter_targets": [{
            "attacks": ["magic"],
            "type": "attack_type"
        }],
        "stack_func_data": {"target_filters": [{
            "attacks": ["magic"],
            "type": "attack_type"
        }]},
        "targets": ["all"]
    }],
    "requirements": [],
    "description": {"desc": "Increases the damage of all Champions whose base attacks are magic by $(not_buffed amount)% for each Champion whose base attacks are magic in the formation, stacking multiplicatively."},
    "id": 1612,
    "flavour_text": "",
    "graphic_id": 6101,
    "properties": {
        "is_formation_ability": true,
        "spec_option_post_apply_info": "Champions in Formation Targeted: $num_targets",
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<br />

**Specialisation: Unpaid Extras** (Guess)
> Increases the effect of Fan Club by `$(amount)%`. All members of Acquisitions Incorporated and The "C" Team in the formation join Jim's Fan Club, regardless of their position in the formation.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,100,12128"
        },
        {
            "amount_updated_listeners": ["slot_changed"],
            "off_when_benched": true,
            "add_targets": [{
                "type": "by_tags",
                "tags": "acqinc|cteam"
            }],
            "effect_string": "add_target_to_upgrade,,12128"
        }
    ],
    "requirements": [],
    "description": {"desc": "Increases the effect of Fan Club by $(amount)%. All members of Acquisitions Incorporated and The \"C\" Team in the formation join Jim's Fan Club, regardless of their position in the formation."},
    "id": 1613,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "indexed_effect_properties": true,
        "is_formation_ability": true,
        "default_bonus_index": 0,
        "formation_circle_icon": false,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
<br />

# Evelyn

![Evelyn Portrait](images/season_5/evelyn.png)

**Divine Prayer** (Guess)
> Evelyn increases the damage of everyone behind her in the formation by `$(amount)%`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "active_graphic_owner_only": true,
        "active_graphic_y": -180,
        "active_graphic_id": 3034,
        "effect_string": "hero_dps_multiplier_mult,200",
        "targets": ["behind"]
    }],
    "requirements": "",
    "description": {"desc": "$source increases the damage of everyone behind her in the formation by $(amount)%"},
    "id": 1616,
    "flavour_text": "",
    "graphic_id": 3039,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<br />

**Channel Divinity** (Guess)
> After Evelyn attacks an enemy, `$(upgrade_name id)` is buffed by `$(not_buffed amount)%` for `$(buff_duration___3)` seconds. If the enemy had a debuff affecting them, the effect is increased by `$(amount___2)%`. Does not stack.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "default_stacks": 1,
            "active_graphic_sort_offset": 2,
            "show_bonus": true,
            "active_graphic_y": -180,
            "active_graphic_id": 3035,
            "effect_string": "buff_upgrade,100,12205",
            "show_advanced_info": false,
            "active_graphic_frame": 1,
            "max_stacks": 1,
            "stacks_on_trigger": "will_manually_stack",
            "active_graphic_unique": 1,
            "apply_manually": true
        },
        {
            "effect_string": "buff_upgrade,300,12206,0",
            "apply_manually": true
        },
        {
            "target_hero": true,
            "base_buff_index": 0,
            "buff_duration": 15,
            "active_graphic_sort_offset": 1,
            "active_graphic_y": -180,
            "active_graphic_id": 3035,
            "effect_string": "evelyn_channel_divinity_controller",
            "active_graphic_frame": 0,
            "debuff_buff_index": 1,
            "active_graphic_unique": 0
        }
    ],
    "requirements": "",
    "description": {
        "pre": "After Evelyn attacks an enemy, $(upgrade_name id) is buffed by $(not_buffed amount)% for $(buff_duration___3) seconds. If the enemy had a debuff affecting them, the effect is increased by $(amount___2)%. Does not stack.",
        "conditions": [{
            "condition": "not static_desc",
            "desc": "^^Seconds Remaining: $(evelyn_channel_divinity_time_remaining)"
        }]
    },
    "id": 1617,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "indexed_effect_properties": true,
        "retain_on_slot_changed": true,
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

**Steadfast Might** (Guess)
> Increases the effect of `$(upgrade_name id)` by `$(amount)%` times the highest number of enemies that Evelyn has tanked at once in the current area plus the highest enemy enrage stack in the current area.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "stack_title": "Steadfast Stacks",
            "manual_stacking": true,
            "stacks_multiply": false,
            "active_graphic_sort_offset": 3,
            "show_bonus": true,
            "active_graphic_y": -180,
            "active_graphic_id": 3036,
            "effect_string": "buff_upgrade,100,12205",
            "active_graphic_any_amount_frame": 1
        },
        {"effect_string": "evelyn_steadfast_might_stacker,0"}
    ],
    "requirements": "",
    "description": {"desc": "Increases the effect of $(upgrade_name id) by $(amount)% times the highest number of enemies that $source has tanked at once in the current area plus the highest enemy enrage stack in the current area."},
    "id": 1618,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "indexed_effect_properties": true,
        "retain_on_slot_changed": true,
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

**Unknown** (Guess)
> After an ally effectively heals Evelyn, Divine Prayer is buffed by `$amount%` for 15 seconds.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "active_graphic_sort_offset": 4,
        "active_graphic_y": -180,
        "active_graphic_id": 3037,
        "effect_string": "add_ally_effective_heal_effects,100",
        "active_graphic_frame": 0,
        "heal_effect": {"effect_string": "effect_def,1627"},
        "active_graphic_unique": 0
    }],
    "requirements": "",
    "description": {"desc": "After an ally effectively heals $source, Divine Prayer is buffed by $amount% for 15 seconds."},
    "id": 1619,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<br />

**Unknown** (Guess)
> After an ally of Evelyn is attacked by an enemy, Divine Prayer is buffed by `$amount%` for 15 seconds.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "active_graphic_owner_only": true,
        "active_graphic_sort_offset": 6,
        "active_graphic_y": -180,
        "active_graphic_id": 3038,
        "effect_string": "add_hit_effect_to_source,300",
        "active_graphic_frame": 0,
        "hit_effect": {"effect_string": "effect_def,1625"},
        "targets": ["other"],
        "active_graphic_unique": 0
    }],
    "requirements": "",
    "description": {"desc": "After an ally of $source is attacked by an enemy, Divine Prayer is buffed by $amount% for 15 seconds."},
    "id": 1621,
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
<br />

**Unknown** (Guess)
> After Evelyn attacks an Enemy that has recently attacked them, Divine Prayer is buffed by `$amount%` for 15 seconds.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "reqs": ["already_attacked"],
        "target_hero": true,
        "active_graphic_sort_offset": 6,
        "monster_effect": {"effect_string": "effect_def,1626"},
        "active_graphic_y": -180,
        "active_graphic_id": 3038,
        "effect_string": "add_monster_hit_effects,300,102,103",
        "active_graphic_frame": 0,
        "active_graphic_unique": 0
    }],
    "requirements": "",
    "description": {"desc": "After $source attacks an Enemy that has recently attacked them, Divine Prayer is buffed by $amount% for 15 seconds"},
    "id": 1622,
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
<br />

**Divinity** (Guess)
> Increases the effect of `$(upgrade_name id)` by `$amount%` for 15 seconds.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stack_across_effects": true,
        "active_graphic_sort_offset": 2,
        "for_time": 15,
        "time_stack_type": "time_reset",
        "active_graphic_y": -180,
        "active_graphic_id": 3035,
        "effect_string": "buff_upgrade,0,12205",
        "active_graphic_frame": 1,
        "active_graphic_unique": 1
    }],
    "requirements": "",
    "description": {"desc": "Increases the effect of $(upgrade_name id) by $amount% for 15 seconds"},
    "id": 1624,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "use_outgoing_description": true,
        "is_formation_ability": false,
        "show_in_owner_outgoing": true,
        "effect_name": "Divinity",
        "individual_target_timers_desc": true
    }
}
</pre>
</p>
</details>
<br />

**Protection** (Guess)
> Increases the effect of `$(upgrade_name id)` by `$amount%` for 15 seconds.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stack_across_effects": true,
        "active_graphic_sort_offset": 7,
        "for_time": 15,
        "time_stack_type": "time_reset",
        "active_graphic_y": -180,
        "active_graphic_id": 3038,
        "effect_string": "buff_upgrade,0,12205",
        "active_graphic_frame": 1,
        "active_graphic_unique": 1
    }],
    "requirements": "",
    "description": {"desc": "Increases the effect of $(upgrade_name id) by $amount% for 15 seconds"},
    "id": 1625,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": false,
        "effect_name": "Protection",
        "individual_target_timers_desc": true
    }
}
</pre>
</p>
</details>
<br />

**Duel** (Guess)
> Increases the effect of `$(upgrade_name id)` by `$amount%` for 15 seconds.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stack_across_effects": true,
        "active_graphic_sort_offset": 7,
        "for_time": 15,
        "time_stack_type": "time_reset",
        "active_graphic_y": -180,
        "active_graphic_id": 3038,
        "effect_string": "buff_upgrade,0,12205",
        "active_graphic_frame": 1,
        "active_graphic_unique": 1
    }],
    "requirements": "",
    "description": {"desc": "Increases the effect of $(upgrade_name id) by $amount% for 15 seconds"},
    "id": 1626,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": false,
        "effect_name": "Duel",
        "individual_target_timers_desc": true
    }
}
</pre>
</p>
</details>
<br />

**Conduit of the Light** (Guess)
> Increases the effect of `$(upgrade_name id)` by `$amount%` for 15 seconds.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stack_across_effects": true,
        "active_graphic_sort_offset": 5,
        "for_time": 15,
        "time_stack_type": "time_reset",
        "active_graphic_y": -180,
        "active_graphic_id": 3037,
        "effect_string": "buff_upgrade,0,12205",
        "active_graphic_frame": 1,
        "active_graphic_unique": 1
    }],
    "requirements": "",
    "description": {"desc": "Increases the effect of $(upgrade_name id) by $amount% for 15 seconds"},
    "id": 1627,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": false,
        "effect_name": "Conduit of the Light",
        "individual_target_timers_desc": true
    }
}
</pre>
</p>
</details>
<br />

# Strix

![Strix Portrait](images/season_5/strix.png)

**Base Attack: Fireball**
> Strix throws a fireball at a random enemy, dealing a small amount of aoe damage.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Strix throws a fireball at a random enemy, dealing a small amount of aoe damage.",
    "long_description": "",
    "damage_modifier": 1,
    "damage_types": ["magic"],
    "graphic_id": 0,
    "target": "random",
    "aoe_radius": 150,
    "tags": [
        "ranged",
        "aoe"
    ],
    "num_targets": 1,
    "animations": [{
        "sound_frames": {"1": 153},
        "hit_sound": 142,
        "type": "ranged_attack",
        "projectile": "green_fireball",
        "shoot_frame": 10
    }],
    "name": "Fireball",
    "cooldown": 5,
    "id": 662
}
</pre>
</p>
</details>
<br />

**Ultimate: Polymorph Staff**
> Strix's staff polymorphs into a pie plate, an owlbear plushy, or a flying broom, and changes her base attack for a brief period of time.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Strix's staff polymorphs into a random object, changing the way she attacks for a brief period.",
    "long_description": "Strix's staff polymorphs into a pie plate, an owlbear plushy, or a flying broom, and changes her base attack for a brief period of time.",
    "damage_modifier": 0.03,
    "damage_types": ["magic"],
    "graphic_id": 2606,
    "target": "none",
    "aoe_radius": 0,
    "tags": ["ultimate"],
    "num_targets": 0,
    "animations": [{
        "options": [
            {
                "duration": 30,
                "character_graphic": 2612,
                "effect_id": 1651
            },
            {
                "spawn_waffles": true,
                "num_attacks": 5,
                "character_graphic": 2611,
                "attack_effect": "increase_damage_monster_target_by_bud_mult,100",
                "effect_id": 1652
            },
            {
                "duration": 30,
                "character_graphic": 2610,
                "effect_id": 1653
            }
        ],
        "type": "strix_ultimate",
        "no_damage_display": true
    }],
    "name": "Polymorph Staff",
    "cooldown": 270,
    "id": 663
}
</pre>
</p>
</details>
<br />

**Base Attack: Pie Plate Punch**
> Strix attacks with her Flame Blade pie plate dealing 5x the damage of her regular attacking, and hitting a nearby enemy with that same damage as well.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Strix attacks with her Flame Blade pie plate, hitting a nearby enemy as well",
    "long_description": "Strix attacks with her Flame Blade pie plate dealing 5x the damage of her regular attacking, and hitting a nearby enemy with that same damage as well",
    "damage_modifier": 1,
    "damage_types": [
        "melee",
        "magic"
    ],
    "graphic_id": 0,
    "target": "front",
    "aoe_radius": 0,
    "tags": ["melee"],
    "num_targets": 1,
    "animations": [{
        "damage_frame": 2,
        "jump_sound": 30,
        "sound_frames": {"2": 154},
        "target_offset_x": -34,
        "effect_on_monsters": {
            "damage_mult": 20,
            "after_damage": true,
            "effect_string": "damage_monster_target_by_bud",
            "hit_monsters": true
        },
        "type": "melee_attack"
    }],
    "name": "Pie Plate Punch",
    "cooldown": 6.5,
    "id": 666
}
</pre>
</p>
</details>
<br />

**Base Attack: Waffles Whack**
> Strix's Owlbear companion, Waffles, attacks in her stead. Waffles starts doing 3x Strix's damage, and does 2x the damage each attack for 5 attacks.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Waffles attacks in Strix's stead, become more enraged with each attack",
    "long_description": "Strix's Owlbear companion, Waffles, attacks in her stead. Waffles starts doing 3x Strix's damage, and does 2x the damage each attack for 5 attacks.",
    "damage_modifier": 1,
    "damage_types": [
        "melee",
        "magic"
    ],
    "graphic_id": 0,
    "target": "front",
    "aoe_radius": 0,
    "tags": ["melee"],
    "num_targets": 1,
    "animations": [{
        "damage_frame": 2,
        "jump_sound": 218,
        "hit_frames": [2],
        "sound_frames": {"2": 148},
        "character": "companion",
        "shake_on_hit": 0.1,
        "target_offset_x": -100,
        "effect_on_monsters": {
            "damage_mult": 5,
            "after_damage": true,
            "effect_string": "damage_monster_target_by_bud",
            "hit_monsters": true
        },
        "type": "melee_attack",
        "both_characters_animate": true
    }],
    "name": "Waffles Whack",
    "cooldown": 6,
    "id": 667
}
</pre>
</p>
</details>
<br />

**Base Attack: Flying Fireball**
> Strix throws a fireball at a random enemy, dealing a small amount of aoe damage.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Strix throws a fireball at a random enemy, dealing a small amount of aoe damage.",
    "long_description": "",
    "damage_modifier": 1,
    "damage_types": ["magic"],
    "graphic_id": 0,
    "target": "random",
    "aoe_radius": 150,
    "tags": [
        "ranged",
        "aoe"
    ],
    "num_targets": 1,
    "animations": [{
        "sound_frames": {"1": 153},
        "hit_sound": 142,
        "effect_on_monsters": {
            "damage_mult": 10,
            "after_damage": true,
            "effect_string": "damage_monster_target_by_bud",
            "hit_monsters": true
        },
        "type": "ranged_attack",
        "projectile": "green_fireball",
        "shoot_frame": 10
    }],
    "name": "Flying Fireball",
    "cooldown": 6.5,
    "id": 668
}
</pre>
</p>
</details>
<br />

**Unknown** (Guess)
> Increases the damage of all Champions that are not adjacent to Strix by `$(amount)%`. Increase damage dealt by Strix by `$amount%` for each Champion affected, stacking additively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "effect_string": "hero_dps_multiplier_mult,100",
            "targets": ["non_adj"]
        },
        {
            "effect_string": "hero_dps_mult_per_target_crusader,100,non_adj",
            "targets": ["self"]
        }
    ],
    "requirements": "",
    "description": {"desc": "Increases the damage of all Champions that are not adjacent to $source by $(amount)%. Increase damage dealt by $source by $amount% for each Champion affected, stacking additively"},
    "id": 1628,
    "flavour_text": "",
    "graphic_id": 20468,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<br />

**Unknown** (Guess)
> If a Champion within 2 slots of Strix is about to be killed, Strix revives them at `$gain_percent%` of their max health, and takes `$lose_percent%` of her max health in damage (if she can take that much damage without dying, can only fire once every `$wait_time seconds`).
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "hide_observed_description": true,
            "cooldown_effects": [{"effect_string": "buff_upgrade,400,12285"}],
            "effect_string": "revive_with_health_transfer,50,50,30",
            "targets": [{
                "distance": 2,
                "self": false,
                "type": "distance"
            }]
        },
        {
            "effect_string": "strix_death_ward",
            "effects_on_revive": [{
                "for_time": 10,
                "effect_string": "block_monster_damage"
            }]
        }
    ],
    "requirements": [],
    "description": {"desc": "If a Champion within 2 slots of Strix is about to be killed, Strix revives them at $gain_percent% of their max health, and takes $lose_percent% of her max health in damage (if she can take that much damage without dying, can only fire once every $wait_time seconds)"},
    "id": 1629,
    "flavour_text": "",
    "graphic_id": 2601,
    "properties": {"use_outgoing_description": true}
}
</pre>
</p>
</details>
<br />

**Haunted** (Guess)
> Increases the damage of all Champions by `$(not_buffed amount)%` for every Champion death in the formation while Strix is in it, with stacks persisting until you reset.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{"effect_string": "global_dps_multiplier_strix_haunted,100"}],
    "requirements": [],
    "description": {"desc": "Increases the damage of all Champions by $(not_buffed amount)% for every Champion death in the formation while Strix is in it, with stacks persisting until you reset"},
    "id": 1630,
    "flavour_text": "",
    "graphic_id": 2602,
    "properties": {
        "use_outgoing_description": true,
        "is_formation_ability": true
    }
}
</pre>
</p>
</details>
<br />

**Poor Hygiene** (Guess)
> Enemies approaching your formation take `$amount%` more damage due to Strix's unique odour.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "active_graphic_id": 2654,
            "effect_string": "increase_incoming_monster_damage_within_range,100"
        },
        {"effect_string": "increase_incoming_monster_damage_range,50"}
    ],
    "requirements": [],
    "description": {"desc": "Enemies approaching your formation take $amount% more damage due to $source's unique odour"},
    "id": 1631,
    "flavour_text": "",
    "graphic_id": 2603,
    "properties": {
        "indexed_effect_properties": true,
        "is_formation_ability": true,
        "show_incoming": false,
        "owner_use_outgoing_description": true,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
<br />

**Unknown** (Guess)
> The radius of Poor Hygiene is increased by `$(amount___3)%` (stacking additively and then applying multiplicatively) and the damage bonus is increased by `$(amount)%` (stacking multiplicatively) for each other Acquisitions Incorporated, "C" - Team, or Wafflecrew Champion in the formation.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {"effect_string": "pre_stack_amount,400"},
        {
            "amount_expr": "upgrade_amount(12289,0)",
            "amount_updated_listeners": ["slot_changed"],
            "exclude_self": true,
            "amount_func": "mult",
            "stack_func": "per_tagged_crusader_mult",
            "effect_string": "buff_upgrade,0,12288,0",
            "tag": "wafflecrew|cteam|acqinc",
            "targets": "all_slots"
        },
        {
            "amount_updated_listeners": ["slot_changed"],
            "exclude_self": true,
            "amount_func": "add",
            "stack_func": "per_tagged_crusader_mult",
            "effect_string": "buff_upgrade,20,12288,1",
            "tag": "wafflecrew|cteam|acqinc",
            "targets": "all_slots"
        }
    ],
    "requirements": "",
    "description": {"desc": "The radius of Poor Hygiene is increased by $(amount___3)% (stacking additively and then applying multiplicatively) and the damage bonus is increased by $(amount)% (stacking multiplicatively) for each other Acquisitions Incorporated, \"C\" - Team, or Wafflecrew Champion in the formation."},
    "id": 1632,
    "flavour_text": "",
    "graphic_id": 20469,
    "properties": {
        "indexed_effect_properties": true,
        "is_formation_ability": true,
        "show_incoming": false,
        "owner_use_outgoing_description": true,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
<br />

**Specialisation: Unknown** (Guess)
> The base damage bonus effect of The Power of Friendship (and Nose Plugs) is increased by `$(amount)%`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{"effect_string": "buff_upgrade_add_flat_amount,100,12289,0"}],
    "requirements": "",
    "description": {"desc": "The base damage bonus effect of The Power of Friendship (and Nose Plugs) is increased by $(amount)%."},
    "id": 1633,
    "flavour_text": "",
    "graphic_id": 20476,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<br />

**Specialisation: Scent of Brimstone** (Guess)
> Buff Aura of Unclean by `$(not_buffed amount)%` for each Tiefling in the formation.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stacks_multiply": true,
        "exclude_self": false,
        "show_bonus": true,
        "effect_string": "buff_upgrade_by_tag_mult,200,tiefling,12285"
    }],
    "requirements": "",
    "description": {"desc": "Buff Aura of Unclean by $(not_buffed amount)% for each Tiefling in the formation"},
    "id": 1634,
    "flavour_text": "",
    "graphic_id": 20477,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<br />

# Omin

![Omin Portrait](images/season_5/omin.png)

**Ultimate: Spirit Guardian**
> Omin summons 15 Spirit Guardians which explode every 2 seconds, damaging all monsters in a large area. The duration of Champion of Tymora is doubled as long as a Spirit remains.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Omin summons 15 Spirit Guardians which damage a random area every 2 seconds.",
    "long_description": "Omin summons 15 Spirit Guardians which explode every 2 seconds, damaging all monsters in a large area. The duration of Champion of Tymora is doubled as long as a Spirit remains.",
    "damage_modifier": 0.03,
    "damage_types": ["magic"],
    "graphic_id": 8390,
    "target": "none",
    "aoe_radius": 0,
    "tags": ["ultimate"],
    "num_targets": 0,
    "animations": [{"type": "omin_ultimate_v2"}],
    "name": "Spirit Guardian",
    "cooldown": 360,
    "id": 664
}
</pre>
</p>
</details>
<br />

**Light of Tymora** (Guess)
> Omin recruits all adjacent Champions to be Champions of Tymora. Champions of Tymora have their damage increased by `$(amount)%`. Omin himself is also a Champion of Tymora.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "hero_dps_multiplier_mult,100",
            "targets": ["self_and_adj"]
        },
        {
            "underlay_graphic_id": 20479,
            "off_when_benched": true,
            "effect_string": "champion_of_tymora_v2",
            "known_associates_upg_id": 12301,
            "skip_effect_key_desc": true
        }
    ],
    "requirements": [],
    "description": {"conditions": [
        {
            "condition": "upgrade_purchased 12301",
            "desc": "Omin recruits adjacent Champions, Champions affiliated with Acquisitions Incorporated and/or The \"C\" Team, and Champions adjacent to an Acquisitions Incorporated or \"C\" Team member to be Champions of Tymora. Champions of Tymora have their damage increased by $(amount)%. Omin himself is also a Champion of Tymora."
        },
        {"desc": "Omin recruits all adjacent Champions to be Champions of Tymora. Champions of Tymora have their damage increased by $(amount)%. Omin himself is also a Champion of Tymora."}
    ]},
    "id": 1636,
    "flavour_text": "",
    "graphic_id": 20466,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<br />

**Unknown** (Guess)
> Omin increases the party's gold find by `$(amount)%` each time a Champion of Tymora attacks an enemy, stacking additively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "stacks_multiply": false,
            "off_when_benched": true,
            "show_bonus": true,
            "effect_string": "gold_multiplier_mult,1",
            "stacks_on_trigger": "champion_affected_by_upg_attacked,12299"
        },
        {
            "off_when_benched": true,
            "is_instanced_stat": true,
            "use_stat_defs": true,
            "effect_string": "stacks_data_binder_safe,0,omin_adventuring_capital_stacks",
            "skip_effect_key_desc": true
        },
        {
            "effect_index": 0,
            "coins_graphic_id": 8365,
            "effect_string": "omin_adventuring_capital",
            "upgrade_id": 12300,
            "trigger_every": 100
        }
    ],
    "requirements": [],
    "description": {"desc": "Omin increases the party's gold find by $(amount)% each time a Champion of Tymora attacks an enemy, stacking additively."},
    "id": 1637,
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
<br />

**Unknown** (Guess)
> Champions who are affiliated with Acquisitions Incorporated and/or The "C" Team also become Champions of Tymora, and recruit Champions adjacent to them as well.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "amount_updated_listeners": ["slot_changed"],
        "off_when_benched": true,
        "add_targets": [
            {
                "type": "by_tags",
                "tags": "acqinc|cteam"
            },
            {
                "type": "has_neighbour_with_tag",
                "tags": "acqinc|cteam"
            }
        ],
        "effect_string": "add_target_to_upgrade,,12299"
    }],
    "requirements": [],
    "description": {"desc": "Champions who are affiliated with Acquisitions Incorporated and/or The \"C\" Team also become Champions of Tymora, and recruit Champions adjacent to them as well."},
    "id": 1638,
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
<br />

**Unknown** (Guess)
> Champions of Tymora are healed for `$(amount)` health per second.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "formation_arrows_for_effected_only": true,
        "off_when_benched": true,
        "retarget_when_any_hero_slot_changed": true,
        "effect_string": "heal,10",
        "filter_targets": [{
            "upgrade_id": 12299,
            "type": "affected_by_upgrade"
        }],
        "targets": ["all"]
    }],
    "requirements": [],
    "description": {"desc": "Champions of Tymora are healed for $(amount) health per second."},
    "id": 1639,
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
<br />

**Well Funded** (Guess)
> The effect of Champion of Tymora is increased by `$(amount)%` for each order of magnitude of Gold you have collected in the current adventure, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "amount_updated_listeners": ["stat_changed,GoldGained"],
        "stacks_multiply": true,
        "off_when_benched": true,
        "show_bonus": true,
        "amount_func": "mult",
        "stack_func": "per_gold_gained",
        "orders_of_magnitude": true,
        "effect_string": "buff_upgrade,20,12299"
    }],
    "requirements": [],
    "description": {"desc": "The effect of Champion of Tymora is increased by $(amount)% for each order of magnitude of Gold you have collected in the current adventure, stacking multiplicatively."},
    "id": 1640,
    "flavour_text": "",
    "graphic_id": 20467,
    "properties": {"is_formation_ability": true}
}
</pre>
</p>
</details>
<br />

**Unknown** (Guess)
> Omin increases the effect of Champion of Tymora by `$(amount)%` for each Champion of Tymora in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stack_title": "Champions of Tymora",
        "amount_updated_listeners": ["slot_changed"],
        "stacks_multiply": true,
        "off_when_benched": true,
        "show_bonus": true,
        "amount_func": "mult",
        "stack_func": "per_hero",
        "effect_string": "buff_upgrade,50,12299",
        "stack_func_data": {"ekh_filter": {
            "upgrade_id": 12299,
            "type": "affected_by_upgrade"
        }}
    }],
    "requirements": [],
    "description": {"desc": "Omin increases the effect of Champion of Tymora by $(amount)% for each Champion of Tymora in the formation, stacking multiplicatively."},
    "id": 1641,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "spec_option_post_apply_info": "Champions of Tymora in Formation: $num_stacks",
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
<br />

**Unknown** (Guess)
> Omin increases the effect of Champion of Tymora by `$(amount)%` for each Acquisitions Incorporated and/or The "C" Team champion in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stack_title": "Acquisitions Inc. and \"C\" Team Champions",
        "stacks_multiply": true,
        "off_when_benched": true,
        "show_bonus": true,
        "amount_func": "mult",
        "stack_func": "per_hero",
        "effect_string": "buff_upgrade,100,12299",
        "stack_func_data": {"tag": "acqinc|cteam"}
    }],
    "requirements": [],
    "description": {"desc": "Omin increases the effect of Champion of Tymora by $(amount)% for each Acquisitions Incorporated and/or The \"C\" Team champion in the formation, stacking multiplicatively."},
    "id": 1642,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "spec_option_post_apply_info": "Acq. Inc. and \"C\" Team Champions in Formation: $num_stacks",
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
<br />

**Unknown** (Guess)
> Omin increases the effect of Champion of Tymora by `$(amount)%` for each Acquisitions Incorporated and/or The "C" Team champion in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stack_title": "Acquisitions Inc. and \"C\" Team Champions",
        "stacks_multiply": true,
        "off_when_benched": true,
        "show_bonus": true,
        "amount_func": "mult",
        "stack_func": "per_hero",
        "effect_string": "buff_upgrade,100,12299",
        "stack_func_data": {"tag": "acqinc|cteam"}
    }],
    "requirements": [],
    "description": {"desc": "Omin increases the effect of Champion of Tymora by $(amount)% for each Acquisitions Incorporated and/or The \"C\" Team champion in the formation, stacking multiplicatively."},
    "id": 1642,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "spec_option_post_apply_info": "Acq. Inc. and \"C\" Team Champions in Formation: $num_stacks",
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
<br />

# Vi

![Vi Portrait](images/season_5/vi.png)

**Base Attack: Blunderbuss**
> 
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "",
    "long_description": "",
    "damage_modifier": 1,
    "damage_types": ["ranged"],
    "graphic_id": 0,
    "target": "random",
    "aoe_radius": 0,
    "tags": ["ranged"],
    "num_targets": 1,
    "animations": [{
        "sound_frames": {"4": 84},
        "projectile_details": {"speed": 1700},
        "hit_sound": 69,
        "shoot_offset_y": -10,
        "shoot_offset_x": 50,
        "animation_sequence_name": "attack_b",
        "effects_on_monsters": [{
            "effect_string": "transform_monster,2044",
            "fire_thing_transformed": true
        }],
        "type": "ranged_attack",
        "jump_from_target": true,
        "projectile": "firebolt",
        "shoot_frame": 8
    }],
    "name": "Blunderbuss",
    "cooldown": 1,
    "id": 665
}
</pre>
</p>
</details>
<br />

**Ultimate: Arcane Cannon**
> The first time the ultimate button is hit, a metal Cockatrice appears next to her and starts dealing ultimate damage to the closest enemy every second for 30 seconds. The second time the ultimate button is hit, the Cockatrice flies to the middle of a swarm of enemies and explodes, dealing 1000% ultimate damage to all enemies in an area attack.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Vi's Cockatrice starts attacking the nearest enemy. Trigger again to dive bomb the enemies.",
    "long_description": "The first time the ultimate button is hit, a metal Cockatrice appears next to her and starts dealing ultimate damage to the closest enemy every second for 30 seconds. The second time the ultimate button is hit, the Cockatrice flies to the middle of a swarm of enemies and explodes, dealing 1000% ultimate damage to all enemies in an area attack.",
    "damage_modifier": 1,
    "damage_types": ["ranged"],
    "graphic_id": 12907,
    "target": "front",
    "aoe_radius": 0,
    "tags": [
        "ranged",
        "ultimate"
    ],
    "num_targets": 1,
    "animations": [{
        "timer": 30,
        "character": "companion",
        "explosion_dmg_mult": 1000,
        "ultimate": "vi",
        "type": "ultimate_attack"
    }],
    "name": "Arcane Cannon",
    "cooldown": 340,
    "id": 669
}
</pre>
</p>
</details>
<br />

**Unknown** (Guess)
> Neutral (Good/Evil axis) Champions' damage is increased by `$(not_buffed amount)%` for each Good, Acquisitions Incorporated, or "C" Team Champion in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "amount_updated_listeners": ["slot_changed"],
        "formation_arrows_for_effected_only": true,
        "off_when_benched": true,
        "show_bonus": true,
        "amount_func": "mult",
        "stack_func": "per_hero",
        "retarget_when_any_hero_slot_changed": true,
        "effect_string": "hero_dps_multiplier_mult,400",
        "filter_targets": [{
            "type": "by_tags",
            "tags": "geneutral"
        }],
        "stack_func_data": {"tag": "good|acqinc|cteam"},
        "targets": ["all"]
    }],
    "requirements": [],
    "description": {"conditions": [
        {
            "condition": "upgrade_purchased 12316",
            "desc": "Evil and Neutral (Good/Evil axis) Champions' damage is increased by $(not_buffed amount)% for each Good, Acquisitions Incorporated, or \"C\" Team Champion in the formation, stacking multiplicatively."
        },
        {
            "condition": "upgrade_purchased 12317",
            "desc": "Good and Neutral (Good/Evil axis) Champions' damage is increased by $(not_buffed amount)% for each Good, Acquisitions Incorporated, or \"C\" Team Champion in the formation, stacking multiplicatively."
        },
        {"desc": "Neutral (Good/Evil axis) Champions' damage is increased by $(not_buffed amount)% for each Good, Acquisitions Incorporated, or \"C\" Team Champion in the formation, stacking multiplicatively."}
    ]},
    "id": 1644,
    "flavour_text": "",
    "graphic_id": 12899,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<br />

**Unknown** (Guess)
> Instead of a base attack with her pistol, there is a `$(amount)%` chance Vi takes out her comically oversized blunderbuss and fires it at a random normal enemy. This instantaneously transforms the enemy into a small glowing crystal sphere that has 1% of a normal enemy's health and is worth an additional `$(amount___2)%` gold when defeated. When changing areas, any remaining spheres are automatically killed and the gold from them is collected.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "filter_attack_targets_by_tags": "!vi_creation^!boss^!armor_based^!hits_based^!static",
            "effect_string": "chance_to_change_base_attack,10,665,488",
            "show_outgoing_desc_when_benched": false
        },
        {
            "effect_string": "increase_monster_with_tags_gold,1000,vi_creation",
            "show_outgoing_desc_when_benched": false
        }
    ],
    "requirements": [],
    "description": {"desc": "Instead of a base attack with her pistol, there is a $(amount)% chance Vi takes out her comically oversized blunderbuss and fires it at a random normal enemy. This instantaneously transforms the enemy into a small glowing crystal sphere that has 1% of a normal enemy's health and is worth an additional $(amount___2)% gold when defeated. When changing areas, any remaining spheres are automatically killed and the gold from them is collected."},
    "id": 1645,
    "flavour_text": "",
    "graphic_id": 12900,
    "properties": {
        "indexed_effect_properties": true,
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

**Unknown** (Guess)
> If there are `$(max_monsters)` or fewer enemies on screen, Vi waits impatiently instead of attacking with her base attack, and there is a `$(amount)%` chance that the second monster in each wave will spawn alongside the first one.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "off_when_benched": true,
            "max_monsters": 5,
            "effect_string": "vi_im_too_old_for_this_v2,25",
            "sassisfaction_upg_id": 12315
        },
        {
            "effect_string": "change_base_attack,491",
            "apply_manually": true
        },
        {
            "amount_expr": "upgrade_amount(12314,0)",
            "effect_string": "simultaneous_monster_spawn_chance_mult,0",
            "apply_manually": true
        }
    ],
    "requirements": [],
    "description": {"desc": "If there are $(max_monsters) or fewer enemies on screen, Vi waits impatiently instead of attacking with her base attack, and there is a $(amount)% chance that the second monster in each wave will spawn alongside the first one."},
    "id": 1646,
    "flavour_text": "",
    "graphic_id": 12901,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<br />

**Unknown** (Guess)
> Vi gains `$(stacks_per_second)` Sass stack for each second she spends impatiently waiting. A Good Example is increased by `$(amount)%` for each Sass stack, stacking multiplicatively. Sass stacks are capped at `$(max_stack_mult___2)` times the highest area unlocked in the current adventure.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "stack_title": "Sass stacks",
            "manual_stacking": true,
            "off_when_benched": true,
            "show_bonus": true,
            "amount_func": "mult",
            "effect_string": "buff_upgrade,0.5,12312",
            "stacks_per_second": 1
        },
        {
            "off_when_benched": true,
            "max_stack_mult": 10,
            "effect_string": "stacks_max_stack_expr,0,highest_available_area*10",
            "skip_effect_key_desc": true
        },
        {
            "off_when_benched": true,
            "is_instanced_stat": true,
            "use_stat_defs": true,
            "effect_string": "stacks_data_binder_safe,0,vi_sassisfaction_stacks",
            "skip_effect_key_desc": true
        }
    ],
    "requirements": [],
    "description": {"desc": "Vi gains $(stacks_per_second) Sass stack for each second she spends impatiently waiting. A Good Example is increased by $(amount)% for each Sass stack, stacking multiplicatively. Sass stacks are capped at $(max_stack_mult___2) times the highest area unlocked in the current adventure."},
    "id": 1647,
    "flavour_text": "",
    "graphic_id": 20470,
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

**Specialisation: Unknown** (Guess)
> Evil Champions also benefit from A Good Example's damage increase.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "data": {"filter_targets": [{
            "type": "by_tags",
            "tags": "evil|geneutral"
        }]},
        "off_when_benched": true,
        "effect_string": "change_upgrade_data,12312,0"
    }],
    "requirements": [],
    "description": {"desc": "Evil Champions also benefit from A Good Example's damage increase."},
    "id": 1648,
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
<br />

**Specialisation: Unknown** (Guess)
> Good Champions also benefit from A Good Example's damage increase.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "data": {"filter_targets": [{
            "type": "by_tags",
            "tags": "good|geneutral"
        }]},
        "off_when_benched": true,
        "effect_string": "change_upgrade_data,12312,0"
    }],
    "requirements": [],
    "description": {"desc": "Good Champions also benefit from A Good Example's damage increase."},
    "id": 1649,
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
<br />

**Specialisation: Unknown** (Guess)
> Increase the effect of A Good Example by `$(amount)%`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "off_when_benched": true,
        "effect_string": "buff_upgrade,200,12312"
    }],
    "requirements": [],
    "description": {"desc": "Increase the effect of A Good Example by $(amount)%."},
    "id": 1650,
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
<br />


[Back to Top](#top)

*Last Modified: {{ site.time }}*