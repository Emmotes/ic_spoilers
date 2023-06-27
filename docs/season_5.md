[Back to Main](index.md)

# Index

* [Season 5](#season-5)
* [Theme](#theme)
* [Changes](#changes)
* [Jim](#jim)
* [Evelyn](#evelyn)
<br />

# Season 5

Season 5 is guesstimated to start on 20 September 2023 with the preview week arriving one week prior on 13 September 2023.

# Theme

![Jim Season Portrait](images/season_5/jim.png)![Evelyn Season Portrait](images/season_5/evelyn.png)![Unknown Season Champion Portrait](images/unknown_season_champion.png)![Unknown Season Champion Portrait](images/unknown_season_champion.png)![Unknown Season Champion Portrait](images/unknown_season_champion.png)

We only have data for two seasonal champions so far. They are Jim and Evelyn. The rest are as yet unknown.

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
    "target": "random",
    "aoe_radius": 0,
    "tags": ["ranged"],
    "num_targets": 1,
    "animations": [{
        "projectile_count": 1,
        "hit_sound": 133,
        "shoot_sound": 149,
        "type": "ranged_attack",
        "projectile": "wand_of_wonder",
        "shoot_frame": 3
    }],
    "name": "Wand of Wonder",
    "cooldown": 1,
    "id": 659
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

**Wand of Wonder** (Guess)
> 
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "change_base_attack_every,0,659,10"
        },
        {
            "off_when_benched": true,
            "wand_of_wonder_attack_id": 659,
            "effect_string": "jim_wand_of_wonder"
        }
    ],
    "requirements": [],
    "description": [],
    "id": 1608,
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

**Together, We Might Survive** (Guess)
> 
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "effect_string": "disable_hero_properties,1,0,0,0",
            "targets": ["non_col"]
        },
        {
            "effect_string": "hero_dps_multiplier_reduce,100",
            "targets": ["non_col"],
            "skip_effect_key_desc": true
        }
    ],
    "requirements": "",
    "description": {"desc": ""},
    "id": 1615,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "debuff": true,
        "effect_name": "Together, We Might Survive"
    }
}
</pre>
</p>
</details>
<br />

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


[Back to Top](#top)

*Last Modified: {{ site.time }}*