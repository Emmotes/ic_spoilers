[Back to Main](index.md)

# Index

* [Season 4](#season-4)
* [Theme](#theme)
* [Changes](#changes)
* [Regis](#regis)
* [Catti-brie](#catti-brie)
* [Wulfgar](#wulfgar)
* [Pwent](#pwent)
* [Artemis](#artemis)
* [Bruenor](#bruenor)
* [Drizzt](#drizzt)
* [Season Chest Icons](#season-chest-icons)
<br />

![Season 4 Icon](images/season_4/icon.png)

# Season 4

![Season 4 Banner](images/season_4/banner.png)

Season 4 will be called `Legends of Mithral Hall` and is expected to start on 21 June 2023 with the preview week arriving one week prior on 14 June 2023.

# Theme

![Regis Season Portrait](images/season_4/regis.png)![Catti-brie Season Portrait](images/season_4/catti-brie.png)![Wulfgar Season Portrait](images/season_4/wulfgar.png)![Pwent Season Portrait](images/season_4/pwent.png)![Artemis Season Portrait](images/season_4/artemis.png)

The five seasonal champions this time around will be Regis Catti-brie Wulfgar Pwent and Artemis. We know this because the seasonal chest will be `Legends of Mithral Hall Chest` and it contains loot for those champions.

This means the theme this season is Companions of the Hall and peripherally related champions.

![Season 4 Ad Panel](images/season_4/adpanel.png)

# Changes

Most of the champions have seen changes so far though we have yet to see any for Artemis.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. Making assumptions on how the champions will turn out based on this information would be premature.

# Regis

![Regis Portrait](images/season_4/regis.png)

**Base Attack: Reluctant Stab**
> Regis reluctantly stabs the nearest enemy with his dagger.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Regis reluctantly stabs the nearest enemy with his dagger.",
    "long_description": "",
    "damage_modifier": 1,
    "damage_types": ["melee"],
    "graphic_id": 0,
    "target": "front",
    "aoe_radius": 0,
    "tags": ["melee"],
    "num_targets": 1,
    "animations": [{
        "hit_frames": [2],
        "damage_frame": 12,
        "jump_sound": 30,
        "sound_frames": {"2": 154},
        "target_offset_x": -40,
        "type": "melee_attack"
    }],
    "name": "Reluctant Stab",
    "cooldown": 3.8,
    "id": 636
}
</pre>
</p>
</details>
<br />

**Ultimate: Ruby Brilliance**
> Regis holds his ruby pendant up, damaging all enemies and stunning them for 5 seconds. Additionally, the effect of Ruby Encouragement is increased by 200% for 15 seconds.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Regis attacks using the power of his ruby pendant.",
    "long_description": "Regis holds his ruby pendant up, damaging all enemies and stunning them for 5 seconds. Additionally, the effect of Ruby Encouragement is increased by 200% for 15 seconds.",
    "damage_modifier": 0.01,
    "damage_types": ["magic"],
    "graphic_id": 2002,
    "target": "all",
    "aoe_radius": 0,
    "tags": [
        "ranged",
        "ultimate"
    ],
    "num_targets": 1,
    "animations": [{
        "effect_frames": {"projectile": {
            "for_time": 15,
            "effect_string": "buff_upgrades,200,11530,11531"
        }},
        "sound_frames": {"39": 174},
        "effect_on_monsters": {"effect_string": "monster_stun,5,1509"},
        "type": "ranged_attack",
        "projectile": "empty",
        "shoot_frame": 31
    }],
    "name": "Ruby Brilliance",
    "cooldown": 300,
    "id": 637
}
</pre>
</p>
</details>
<br />

**Unknown**
> Regis' base chance to Critical Hit is `$amount%`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{"effect_string": "set_base_crit_chance,20"}],
    "requirements": [],
    "description": {"desc": "Regis' base chance to Critical Hit is $amount%."},
    "id": 1532,
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

**Bounty of the Hall**
> Your formation gains `$(amount___2)` Mithral Hall stack. Regis increases your gold find bonus by `$(not_buffed amount)%` for each Mithral Hall stack you have, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "stack_title": "Total Mithral Hall Stacks",
            "stacks_multiply": true,
            "total_title": "Total Bonus",
            "off_when_benched": true,
            "show_bonus": true,
            "amount_func": "mult",
            "stack_func": "per_mithral_hall_stacks",
            "effect_string": "gold_multiplier_mult,100",
            "desc_forced_order": 2
        },
        {
            "stack_title": "Regis Mithral Hall Stacks",
            "manual_stacking": true,
            "stacks_multiply": false,
            "off_when_benched": true,
            "outgoing_buffs": false,
            "effect_string": "regis_mithral_hall_stacks,1",
            "show_stacks": true,
            "desc_forced_order": 1
        }
    ],
    "requirements": [],
    "description": {"desc": "Your formation gains $(amount___2) Mithral Hall stack. Regis increases your gold find bonus by $(not_buffed amount)% for each Mithral Hall stack you have, stacking multiplicatively."},
    "id": 1533,
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
<br />

**Unknown**
> When Regis scores a Critical Hit, his Ruby Pendant pulses and heals all Champions in the formation for `$(not_buffed amount)` for each Mithral Hall stack the formation has.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "crit_effect": {
            "target_global": true,
            "effect_string": "heal_targets_by_amount,$amount",
            "targets": ["all"]
        },
        "stack_title": "Mithral Hall Stacks",
        "stacks_multiply": false,
        "total_title": "Total Healing",
        "off_when_benched": true,
        "show_bonus": true,
        "amount_func": "add",
        "stack_func": "per_mithral_hall_stacks",
        "effect_string": "add_crit_effect,10",
        "percent_values": false,
        "show_stack_type": false
    }],
    "requirements": [],
    "description": {"desc": "When Regis scores a Critical Hit, his Ruby Pendant pulses and heals all Champions in the formation for $(not_buffed amount) for each Mithral Hall stack the formation has."},
    "id": 1535,
    "flavour_text": "",
    "graphic_id": 19646,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<br />

**Unknown**
> Increases the effect of Ruby Encouragement by `$(not_buffed amount)%` when Regis scores a Critical Hit. This effect can stack up to `$max_stacks times `(multiplicatively). Stacks reset when changing areas.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stacks_multiply": true,
        "off_when_benched": true,
        "show_bonus": true,
        "effect_string": "buff_upgrades,400,11530,11531",
        "max_stacks": 10,
        "more_triggers": [{
            "action": {"type": "reset"},
            "trigger": "area_changed"
        }],
        "stacks_on_trigger": "pre_owner_attack_crit"
    }],
    "requirements": [],
    "description": {"desc": "Increases the effect of Ruby Encouragement by $(not_buffed amount)% when Regis scores a Critical Hit. This effect can stack up to $max_stacks times (multiplicatively). Stacks reset when changing areas."},
    "id": 1536,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {"is_formation_ability": true}
}
</pre>
</p>
</details>
<br />

**Unknown**
> Whenever a Champion in the formation is critically hit by an enemy, Regis stores up one charge of Ruby Invigoration. While he has at least one charge, his chance to Critical Hit is increased by `$(amount___2)%`, and whenever he scores a Critical Hit a charge is consumed. He can store up to `$max_charges charges`.
>  
> - `$(ruby_invigoration_desc)`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "max_charges": 5,
            "effect_string": "ruby_invigoration"
        },
        {
            "effect_string": "buff_base_crit_chance_mult,250",
            "apply_manually": true
        }
    ],
    "requirements": [],
    "description": {
        "post": {"conditions": [{
            "condition": "not static_desc",
            "desc": "^^$(ruby_invigoration_desc)"
        }]},
        "desc": "Whenever a Champion in the formation is critically hit by an enemy, Regis stores up one charge of Ruby Invigoration. While he has at least one charge, his chance to Critical Hit is increased by $(amount___2)%, and whenever he scores a Critical Hit a charge is consumed. He can store up to $max_charges charges."
    },
    "id": 1537,
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
<br />

# Catti-brie

![Catti-brie Portrait](images/season_4/catti-brie.png)

**Base Attack: Long Shot**
> Catti-brie shoots the farthest enemy with her bow.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Catti-brie shoots the farthest enemy with her bow",
    "long_description": "",
    "damage_modifier": 1,
    "damage_types": ["ranged"],
    "graphic_id": 0,
    "target": "back",
    "aoe_radius": 0,
    "tags": ["ranged"],
    "num_targets": 1,
    "animations": [{
        "shoot_offset_y": -45,
        "shoot_offset_x": 30,
        "type": "ranged_attack",
        "projectile": "catti_brie_arrow",
        "shoot_frame": 9
    }],
    "name": "Long Shot",
    "cooldown": 5.3,
    "id": 629
}
</pre>
</p>
</details>
<br />

**Base Attack: Long Shot - Piercing Arrow**
> Catti-brie shoots the farthest enemy with her bow, hitting all enemies along the arrows path.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Catti-brie shoots the farthest enemy with her bow, hitting all enemies along the arrows path",
    "long_description": "",
    "damage_modifier": 1,
    "damage_types": ["ranged"],
    "graphic_id": 0,
    "target": "back",
    "aoe_radius": 0,
    "tags": ["ranged"],
    "num_targets": 1,
    "animations": [{
        "line_damage_distance": 60,
        "shoot_offset_y": -45,
        "shoot_offset_x": 30,
        "line_damage_stop_at_target": true,
        "type": "ranged_attack",
        "projectile": "catti_brie_arrow",
        "shoot_frame": 9
    }],
    "name": "Long Shot - Piercing Arrow",
    "cooldown": 5.3,
    "id": 630
}
</pre>
</p>
</details>
<br />

**Ultimate: Empty the Quiver**
> Catti-Brie shoots six arrows at once from her bow. Each enemy hit by her arrows have a higher chance of being crit, and take more crit damage based on Catti-brie's crit chance and damage for 30 seconds.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Catti-Brie shoots six arrows at once from her bow, making each enemy hit more vulnerable for 30 seconds.",
    "long_description": "Catti-Brie shoots six arrows at once from her bow. Each enemy hit by her arrows have a higher chance of being crit, and take more crit damage based on Catti-brie's crit chance and damage for 30 seconds.",
    "damage_modifier": 0.04,
    "damage_types": ["ranged"],
    "graphic_id": 2845,
    "target": "random",
    "aoe_radius": 0,
    "tags": [
        "ranged",
        "ultimate"
    ],
    "num_targets": 6,
    "animations": [{
        "projectile_count": 6,
        "shoot_offset_y": -45,
        "shoot_offset_x": 30,
        "effects_on_monsters": [{"effect_string": "add_monster_crit_chance_and_damage_debuff_from_source,30,2875"}],
        "type": "ranged_attack",
        "projectile": "catti_brie_arrow",
        "projectile_delay": 0.03,
        "shoot_frame": 26
    }],
    "name": "Empty the Quiver",
    "cooldown": 340,
    "id": 631
}
</pre>
</p>
</details>
<br />

**Ultimate: Empty the Quiver - Piercing Arrow**
> Catti-Brie shoots six arrows at once from her bow, hitting all enemies along the arrows paths. Each enemy hit by her arrows have a higher chance of being crit, and take more crit damage based on Catti-brie's crit chance and damage for 30 seconds.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Catti-Brie shoots six arrows at once from her bow, hitting all enemies along the arrows paths, making each enemy hit more vulnerable for 30 seconds.",
    "long_description": "Catti-Brie shoots six arrows at once from her bow, hitting all enemies along the arrows paths. Each enemy hit by her arrows have a higher chance of being crit, and take more crit damage based on Catti-brie's crit chance and damage for 30 seconds.",
    "damage_modifier": 0.04,
    "damage_types": ["ranged"],
    "graphic_id": 2845,
    "target": "random",
    "aoe_radius": 0,
    "tags": [
        "ranged",
        "ultimate"
    ],
    "num_targets": 6,
    "animations": [{
        "projectile_count": 6,
        "line_damage_distance": 60,
        "shoot_offset_y": -45,
        "shoot_offset_x": 30,
        "line_damage_stop_at_target": true,
        "effects_on_monsters": [{"effect_string": "add_monster_crit_chance_and_damage_debuff_from_source,30,2875"}],
        "type": "ranged_attack",
        "projectile": "catti_brie_arrow",
        "projectile_delay": 0.03,
        "shoot_frame": 26
    }],
    "name": "Empty the Quiver - Piercing Arrow",
    "cooldown": 340,
    "id": 632
}
</pre>
</p>
</details>
<br />

**Powerful Draw** (Guess)
> Catti-brie deals additional damage to enemies the farther they are from the formation, from 0% bonus at `$start_percent%` away from the formation to `$amount%` bonus at the spawn point.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "effect_string": "bonus_damage_monster_percent_from_party_range,1000,20,100",
        "separate_popup": false
    }],
    "requirements": "",
    "description": {"desc": "$source deals additional damage to enemies the farther they are from the formation, from 0% bonus at $start_percent% away from the formation to $amount% bonus at the spawn point."},
    "id": 1497,
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

**Mark for Death** (Guess)
> Enemies hit by Catti-brie's arrows are Marked and take additional damage equal to Catti-brie's critical hit damage bonus until the enemy is defeated.
>  
> - Base Damage Bonus: `$(cattibrie_mark_for_death_debuff_amount)%`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "debuff_effects": [{
            "effect_string": "increase_monster_damage,0",
            "use_collection_source": true
        }],
        "effect_string": "cattibrie_mark_for_death_v2",
        "debuffing_attack_ids": [
            629,
            630,
            631,
            632
        ]
    }],
    "requirements": "",
    "description": {
        "post": {"conditions": [{
            "condition": "not static_desc",
            "desc": "^^Base Damage Bonus: $(cattibrie_mark_for_death_debuff_amount)%"
        }]},
        "desc": "Enemies hit by $source's arrows are Marked and take additional damage equal to $source's critical hit damage bonus until the enemy is defeated."
    },
    "id": 1498,
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

**Grievous Wounds** (Guess)
> When an enemy that is Marked is critically hit by any Champion, they are stunned for `$(stun_time)` seconds and the damage bonus of their Mark is increased by `$(amount)%`. This effect can only occur every `$(cooldown_time)` seconds, and the damage bonus increase can stack multiplicatively up to `$(max_stacks)` times.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "cooldown_time": 10,
        "stun_time": 5,
        "effect_string": "cattibrie_grievous_wounds_v2,100",
        "max_stacks": 10
    }],
    "requirements": "",
    "description": {"desc": "When an enemy that is Marked is critically hit by any Champion, they are stunned for $(stun_time) seconds and the damage bonus of their Mark is increased by $(amount)%. This effect can only occur every $(cooldown_time) seconds, and the damage bonus increase can stack multiplicatively up to $(max_stacks) times."},
    "id": 1499,
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

**Death March** (Guess)
> Catti-brie increases the damage of herself and all Champions in front of her in the formation by `$(not_buffed amount)%` each time she gets a critical hit, stacking multiplicatively up to `$(max_stacks)` times and resetting when she changes areas.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stacks_multiply": true,
        "show_bonus": true,
        "effect_string": "hero_dps_multiplier_mult,50",
        "max_stacks": 25,
        "more_triggers": [{
            "action": {"type": "reset"},
            "trigger": "area_changed"
        }],
        "targets": ["self_and_ahead"],
        "stacks_on_trigger": "pre_owner_attack_crit"
    }],
    "requirements": "",
    "description": {"desc": "$source increases the damage of herself and all Champions in front of her in the formation by $(not_buffed amount)% each time she gets a critical hit, stacking multiplicatively up to $(max_stacks) times and resetting when she changes areas."},
    "id": 1500,
    "flavour_text": "",
    "graphic_id": 5854,
    "properties": {"is_formation_ability": true}
}
</pre>
</p>
</details>
<br />

**Mark of the Hall** (Guess)
> Your formation gains one Mithral Hall stack. Catti-brie increases the damage bonus of `$(upgrade_name id)` by `$(not_buffed amount)%` for each Mithral Hall stack you have, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "stack_title": "Total Mithral Hall Stacks",
            "stacks_multiply": true,
            "total_title": "Total Bonus",
            "off_when_benched": true,
            "show_bonus": true,
            "amount_func": "mult",
            "stack_func": "per_mithral_hall_stacks",
            "effect_string": "buff_upgrade,100,11308",
            "desc_forced_order": 2
        },
        {
            "stack_title": "Catti-brie Mithral Hall Stacks",
            "manual_stacking": true,
            "stacks_multiply": false,
            "off_when_benched": true,
            "outgoing_buffs": false,
            "effect_string": "catti_mithral_hall_stacks,1",
            "show_stacks": true,
            "desc_forced_order": 1
        }
    ],
    "requirements": "",
    "description": {"desc": "Your formation gains one Mithral Hall stack. $source increases the damage bonus of $(upgrade_name id) by $(not_buffed amount)% for each Mithral Hall stack you have, stacking multiplicatively."},
    "id": 1501,
    "flavour_text": "",
    "graphic_id": 19581,
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

**Specialisation: Piercing Arrow** (Guess)
> Catti-brie's damage is increased by `$(amount)%` and her arrows hit all enemies on their way to their target. Each enemy hit has a separate chance of being a critical hit.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {"effect_string": "hero_dps_multiplier_mult,400"},
        {"effect_string": "change_base_attack,630"},
        {
            "effect_string": "set_ultimate_attack,632",
            "override_ultimate": true
        }
    ],
    "requirements": "",
    "description": {"desc": "$source's damage is increased by $(amount)% and her arrows hit all enemies on their way to their target. Each enemy hit has a separate chance of being a critical hit."},
    "id": 1502,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
<br />

**Specialisation: Big Push** (Guess)
> Increases the base effect of `$(upgrade_name id)` to `$(amt)%` per stack and Catti-brie only loses half of her existing stacks when changing areas instead of all of them.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "data": {
            "amount": 60,
            "more_triggers": [{
                "action": {
                    "type": "reduce_percent",
                    "percent": 50
                },
                "trigger": "area_changed"
            }]
        },
        "effect_string": "change_upgrade_data,11310,0",
        "amt": 60
    }],
    "requirements": "",
    "description": {"desc": "Increases the base effect of $(upgrade_name id) to $(amt)% per stack and $source only loses half of her existing stacks when changing areas instead of all of them."},
    "id": 1503,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
<br />

**Specialisation: Critical Family** (Guess)
> Additively increases the critical hit chance of all Companions of the Hall Champions by `$(amount)%`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "off_when_benched": true,
        "effect_string": "buff_base_crit_chance_add,20",
        "filter_targets": [{
            "type": "by_tags",
            "tags": "companion"
        }],
        "targets": ["all"]
    }],
    "requirements": "",
    "description": {"desc": "Additively increases the critical hit chance of all Companions of the Hall Champions by $(amount)%."},
    "id": 1504,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
<br />

# Wulfgar

![Wulfgar Portrait](images/season_4/wulfgar.png)

**Base Attack: Tempus Strike**
> Wulfgar smashes the nearest group of enemies with his warhammer.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Wulfgar smashes the nearest group of enemies with his warhammer.",
    "long_description": "",
    "damage_modifier": 1,
    "damage_types": ["melee"],
    "graphic_id": 0,
    "target": "front",
    "aoe_radius": 100,
    "tags": ["melee"],
    "num_targets": 1,
    "animations": [{
        "power_up_sequence": {
            "end_frame": 11,
            "start_frame": 0
        },
        "type": "melee_attack",
        "sequences": [{
            "damage_frame": 18,
            "target_offset_x": -90,
            "end_frame": 35,
            "start_frame": 12
        }]
    }],
    "name": "Tempus Strike",
    "cooldown": 4.5,
    "id": 633
}
</pre>
</p>
</details>
<br />

**Ultimate: Aegis-fang**
> Shouting the name of his deity, Wulfgar tosses his warhammer, Aegis-fang, at the most distant enemy, dealing damage to and stunning all enemies in a line for 10 seconds.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Shouting the name of his deity, Wulfgar tosses his warhammer, Aegis-fang, at the most distant enemy, dealing damage to and stunning all enemies in a line for 10 seconds.",
    "long_description": "Shouting the name of his deity, Wulfgar tosses his warhammer, Aegis-fang, at the most distant enemy, dealing damage to and stunning all enemies in a line for 10 seconds.",
    "damage_modifier": 0.045,
    "damage_types": ["ranged"],
    "graphic_id": 3955,
    "target": "back",
    "aoe_radius": 0,
    "tags": [
        "ranged",
        "ultimate"
    ],
    "num_targets": 1,
    "animations": [{
        "line_damage_distance": 100,
        "projectile_details": {"projectile_graphic_id": 3908},
        "shoot_offset_y": -30,
        "shoot_offset_x": 20,
        "damage_tanked_monsters": true,
        "stun_on_hit": 10,
        "hold_for_projectiles_frame": 35,
        "type": "ranged_attack",
        "projectile": "wulfgar_hammer",
        "shoot_frame": 20,
        "stun_graphic": 1509
    }],
    "name": "Aegis-fang",
    "cooldown": 340,
    "id": 634
}
</pre>
</p>
</details>
<br />

**Unknown**
> Wulfgar's base chance to Critical Hit is `$(amount)%` and his Critical Hits also stun all affected enemies for `$(duration___2)` seconds.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {"effect_string": "set_base_crit_chance,20"},
        {"effect_string": "stun_on_crit,5,1509"}
    ],
    "requirements": [],
    "description": {
        "pre": "Wulfgar's base chance to Critical Hit is $(amount)% and his Critical Hits also stun all affected enemies for $(duration___2) seconds.",
        "desc": {
            "pre": "^^",
            "desc": "Additionally, Wulfgar can be used in any Icewind Dale campaign adventure or variant, even if he would not normally be available to be used due to variant or patron restrictions."
        }
    },
    "id": 1520,
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
<br />

**Clangeddin's Will** (Guess)
> Anytime an enemy is stunned, Wulfgar increases the damage of all Champions in the formation by `$(not_buffed amount)%`, stacking multiplicatively, capping at `$max_stacks stacks`, and lasting until the area is changed.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stacks_multiply": true,
        "off_when_benched": true,
        "show_bonus": true,
        "effect_string": "global_dps_multiplier_mult,50",
        "max_stacks": 50,
        "more_triggers": [{
            "action": {"type": "reset"},
            "trigger": "area_changed"
        }],
        "stacks_on_trigger": "monster_stunned"
    }],
    "requirements": [],
    "description": {"conditions": [
        {
            "condition": "upgrade_purchased 11509",
            "desc": "Anytime an enemy is stunned, Wulfgar increases the damage of all Champions in the formation by $(not_buffed amount)%, stacking multiplicatively and capping at $max_stacks stacks. When changing areas, 50% of the stacks are lost."
        },
        {"desc": "Anytime an enemy is stunned, Wulfgar increases the damage of all Champions in the formation by $(not_buffed amount)%, stacking multiplicatively, capping at $max_stacks stacks, and lasting until the area is changed."}
    ]},
    "id": 1521,
    "flavour_text": "",
    "graphic_id": 5882,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<br />

**Hammer of the Hall**
> Your formation gains `$(amount___2)` Mithral Hall stack. Wulfgar increases the damage bonus of Clangeddin's Will by `$(not_buffed amount)%` for each Mithral Hall stack you have, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "stack_title": "Total Mithral Hall Stacks",
            "stacks_multiply": true,
            "total_title": "Total Bonus",
            "off_when_benched": true,
            "show_bonus": true,
            "amount_func": "mult",
            "stack_func": "per_mithral_hall_stacks",
            "effect_string": "buff_upgrade,100,11503",
            "desc_forced_order": 2
        },
        {
            "stack_title": "Wulfgar Mithral Hall Stacks",
            "manual_stacking": true,
            "stacks_multiply": false,
            "off_when_benched": true,
            "outgoing_buffs": false,
            "effect_string": "wulfgar_mithral_hall_stacks,1",
            "show_stacks": true,
            "desc_forced_order": 1
        }
    ],
    "requirements": [],
    "description": {"desc": "Your formation gains $(amount___2) Mithral Hall stack. Wulfgar increases the damage bonus of Clangeddin's Will by $(not_buffed amount)% for each Mithral Hall stack you have, stacking multiplicatively."},
    "id": 1522,
    "flavour_text": "",
    "graphic_id": 19583,
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

**Unknown**
> If Wulfgar attacks an armor-based enemy but doesn't remove a piece of the armor, he increases the damage of all champions in the formation by `$(not_buffed amount)%` stacking multiplicatively up to `$max_stacks times`. Stacks reset on area change.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stacks_multiply": true,
        "off_when_benched": true,
        "show_bonus": true,
        "effect_string": "global_dps_multiplier_mult,200",
        "max_stacks": 5,
        "more_triggers": [{
            "action": {"type": "reset"},
            "trigger": "area_changed"
        }],
        "stacks_on_trigger": "owner_attack_failed_break_armor"
    }],
    "requirements": [],
    "description": {"desc": "If Wulfgar attacks an armor-based enemy but doesn't remove a piece of the armor, he increases the damage of all champions in the formation by $(not_buffed amount)% stacking multiplicatively up to $max_stacks times. Stacks reset on area change."},
    "id": 1523,
    "flavour_text": "",
    "graphic_id": 5886,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<br />

**Unknown**
> Increases the Health of all other Champions by `$amount%` of Wulfgar's Max Health.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "off_when_benched": true,
        "effect_string": "increase_health_by_source_percent,25",
        "targets": ["all"]
    }],
    "requirements": [],
    "description": {"desc": "Increases the Health of all other Champions by $amount% of Wulfgar's Max Health"},
    "id": 1524,
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

**Specialisation: Unknown** (Guess)
> Additively increases all Champions' critical hit chances by `$amount%`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "off_when_benched": true,
        "effect_string": "buff_base_crit_chance_add,10",
        "targets": ["all"]
    }],
    "requirements": [],
    "description": {"desc": "Additively increases all Champions' critical hit chances by $amount%."},
    "id": 1525,
    "flavour_text": "",
    "graphic_id": 5886,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<br />

**Specialisation: Unknown** (Guess)
> Increases the effect of Clangeddin's Will by `$amount%` and only 50% of the stacks are lost on area change.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,100,11503"
        },
        {
            "data": {"more_triggers": [{
                "action": {
                    "type": "reduce_percent",
                    "percent": 50
                },
                "trigger": "area_changed"
            }]},
            "off_when_benched": true,
            "effect_string": "change_upgrade_data,11503"
        }
    ],
    "requirements": [],
    "description": {"desc": "Increases the effect of Clangeddin's Will by $amount% and only 50% of the stacks are lost on area change."},
    "id": 1526,
    "flavour_text": "",
    "graphic_id": 3932,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<br />

**Specialisation: Unknown** (Guess)
> Increases the damage of the Companions of the Hall Champions by `$amount%`, and all of the Companions of the Hall Champions are available to be used if Icewind Dale is the current campaign, even if they do not currently qualify based on variant or patron restrictions.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "hero_dps_multiplier_mult,100",
            "targets": [{
                "type": "tags",
                "tags": "companion"
            }]
        },
        {
            "off_when_benched": true,
            "valid_for_campaign_ids": [24],
            "effect_string": "force_allow_hero_by_tag,companion"
        }
    ],
    "requirements": [],
    "description": {"desc": "Increases the damage of the Companions of the Hall Champions by $amount%, and all of the Companions of the Hall Champions are available to be used if Icewind Dale is the current campaign, even if they do not currently qualify based on variant or patron restrictions."},
    "id": 1527,
    "flavour_text": "",
    "graphic_id": 5888,
    "properties": {
        "retain_on_slot_changed": true,
        "is_formation_ability": true,
        "spec_option_post_apply_info": "Champions in Formation Targeted: $num_targets",
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<br />

# Pwent

![Pwent Portrait](images/season_4/pwent.png)

**Base Attack: Spiked Hug**
> Pwent lowers his head and rushes to a random enemy, using his armor as a weapon to cut & injure the enemy.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Pwent lowers his head and rushes to a random enemy, using his armor as a weapon to cut & injure the enemy.",
    "long_description": "",
    "damage_modifier": 1,
    "damage_types": ["melee"],
    "graphic_id": 0,
    "target": "random",
    "aoe_radius": 0,
    "tags": ["melee"],
    "num_targets": 1,
    "animations": [{
        "damage_frame": 8,
        "target_offset_x": -80,
        "type": "melee_attack"
    }],
    "name": "Spiked Hug",
    "cooldown": 5,
    "id": 635
}
</pre>
</p>
</details>
<br />

**Unknown**
> When Pwent attacks he causes all enemies he damages to Bleed, taking `$(amount)` seconds worth of BUD damage every second for the next `$(total_seconds)` seconds. While an enemy is bleeding, attacks that target them have a `$(amount___2)%` higher chance to critical hit (additively). If Pwent attacks an enemy that is already bleeding the duration is reset.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "total_seconds": 20,
            "debuff_effects": [{
                "stack_across_effects": true,
                "overlay_play_mode": "stopped",
                "total_ticks": 9999,
                "for_time": "$total_seconds",
                "time_stack_type": "time_reset",
                "active_graphic_y": -75,
                "active_graphic_id": 6343,
                "effect_string": "bud_dot,$seconds_of_bud",
                "tick_rate": 1,
                "use_collection_source": true
            }],
            "effect_string": "pwent_bleed_dot,0.5",
            "debuff_before_damage": true,
            "seconds_of_bud": 0.5,
            "debuffing_attack_ids": [
                635,
                229
            ]
        },
        {
            "total_seconds": 20,
            "additional_crit_chance": 20,
            "debuff_effects": [{
                "stack_across_effects": true,
                "for_time": "$total_seconds",
                "time_stack_type": "time_reset",
                "effect_string": "buff_incoming_crit_chance_add,$additional_crit_chance"
            }],
            "effect_string": "pwent_bleed_crit,20",
            "debuff_before_damage": true,
            "debuffing_attack_ids": [
                635,
                229
            ]
        }
    ],
    "requirements": "",
    "description": {"pre": {"conditions": [
        {
            "condition": "not static_desc",
            "desc": "When $source attacks he causes all enemies he damages to Bleed, taking $(amount) seconds worth of BUD damage every second for the next $(total_seconds) seconds. While an enemy is bleeding, attacks that target them have a $(pwent_bleed_crit_amount)% higher chance to critical hit (additively). If $source attacks an enemy that is already bleeding the duration is reset."
        },
        {"desc": "When $source attacks he causes all enemies he damages to Bleed, taking $(amount) seconds worth of BUD damage every second for the next $(total_seconds) seconds. While an enemy is bleeding, attacks that target them have a $(amount___2)% higher chance to critical hit (additively). If $source attacks an enemy that is already bleeding the duration is reset."}
    ]}},
    "id": 1511,
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
<br />

**Unknown** (Guess)
> Increases the damage of Champions not adjacent to Pwent by `$(amount)%`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "effect_string": "hero_dps_multiplier_mult,100",
        "targets": ["non_adj"]
    }],
    "requirements": "",
    "description": {"desc": "Increases the damage of Champions not adjacent to $source by $(amount)%."},
    "id": 1512,
    "flavour_text": "",
    "graphic_id": 6357,
    "properties": {"is_formation_ability": true}
}
</pre>
</p>
</details>
<br />

**Battlerager** (Guess)
> When Pwent attacks, if he attacks an enemy that has already been affected by his Bleed effect, there is a `$(amount)%` chance that his attack cooldown will instantly reset.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{"effect_string": "pwent_battlerager,80"}],
    "requirements": "",
    "description": {"desc": "When $source attacks, if he attacks an enemy that has already been affected by his Bleed effect, there is a $(amount)% chance that his attack cooldown will instantly reset."},
    "id": 1513,
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

**Gutbuster** (Guess)
> When a Champion adjacent to Pwent scores a critical hit, Pwent increases the effect of `$(upgrade_name id)` by `$(amount)%`. This can multiplicatively stack up to `$(max_stacks)` times, with the stacks being reset on area change.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "stack_title": "Gutbuster Stacks",
            "stacks_multiply": true,
            "show_bonus": true,
            "effect_string": "buff_upgrade,50,11492",
            "max_stacks": 50,
            "more_triggers": [{
                "action": {"type": "reset"},
                "trigger": "area_changed"
            }],
            "stacks_on_trigger": "on_broadcast_stacks,pwent_gutbuster_trigger"
        },
        {
            "effect_string": "broadcast_on_trigger,pwent_gutbuster_trigger,pre_target_attack_crit",
            "targets": ["adj"],
            "override_key_desc": "Each time $target deals a Critical Hit, they contribute a Gutbuster stack to $(source_hero)"
        }
    ],
    "requirements": "",
    "description": {"conditions": [
        {
            "condition": "upgrade_purchased 11496",
            "desc": "When a Champion not adjacent to $source scores a critical hit, $source increases the effect of $(upgrade_name id) by $(amount)%. This can multiplicatively stack up to $(max_stacks) times, with the stacks being reset on area change."
        },
        {"desc": "When a Champion adjacent to $source scores a critical hit, $source increases the effect of $(upgrade_name id) by $(amount)%. This can multiplicatively stack up to $(max_stacks) times, with the stacks being reset on area change."}
    ]},
    "id": 1514,
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
<br />

**Unknown** (Guess)
> While not a member of the Companions of the Hall, Pwent fully supports them in their quests. Your formation gains one Mithral Hall stack. Pwent increases the damage bonus of `$(upgrade_name id)` by `$(amount)%` for each Mithral Hall stack you have, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "stack_title": "Total Mithral Hall Stacks",
            "stacks_multiply": true,
            "total_title": "Total Bonus",
            "off_when_benched": true,
            "show_bonus": true,
            "amount_func": "mult",
            "stack_func": "per_mithral_hall_stacks",
            "effect_string": "buff_upgrade,100,11492",
            "desc_forced_order": 2
        },
        {
            "stack_title": "Pwent Mithral Hall Stacks",
            "manual_stacking": true,
            "stacks_multiply": false,
            "off_when_benched": true,
            "outgoing_buffs": false,
            "effect_string": "pwent_mithral_hall_stacks,1",
            "show_stacks": true,
            "desc_forced_order": 1
        }
    ],
    "requirements": "",
    "description": {"desc": "While not a member of the Companions of the Hall, $source fully supports them in their quests. Your formation gains one Mithral Hall stack. $source increases the damage bonus of $(upgrade_name id) by $(amount)% for each Mithral Hall stack you have, stacking multiplicatively."},
    "id": 1515,
    "flavour_text": "",
    "graphic_id": 19580,
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

**Specialisation: Recruiting Drive** (Guess)
> `$(upgrade_name id)` now triggers when non-adjacent Champions score critical hits, instead of adjacent Champions.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "effect_index": 1,
        "effect_string": "change_upgrade_targets,11494",
        "new_targets": "non_adj"
    }],
    "requirements": "",
    "description": {"desc": "$(upgrade_name id) now triggers when non-adjacent Champions score critical hits, instead of adjacent Champions."},
    "id": 1516,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
<br />

**Specialisation: Scents of Mithral Hall** (Guess)
> Increases the effect of `$(upgrade_name id)` by `$(not_buffed amount)%` for each Dwarf Champion in the formation, stacking multiplicatively and including himself.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stacks_multiply": true,
        "effect_string": "buff_upgrade_per_any_tagged_crusader_mult,200,11492,dwarf"
    }],
    "requirements": "",
    "description": {"desc": "Increases the effect of $(upgrade_name id) by $(not_buffed amount)% for each Dwarf Champion in the formation, stacking multiplicatively and including himself."},
    "id": 1517,
    "flavour_text": "",
    "graphic_id": 19581,
    "properties": {
        "is_formation_ability": true,
        "spec_option_post_apply_info": "Dwarf Champions: $num_stacks",
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
<br />

**Specialisation: Critical Wounds** (Guess)
> Attacks targeting enemies that Pwent has caused to Bleed have a `$(total_bonus_crit_chance)%` additive chance to be a critical hit, up from `$(base_crit_chance)%`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "total_seconds": 20,
        "additional_crit_chance": 20,
        "debuff_effects": [{
            "stack_across_effects": true,
            "for_time": "$total_seconds",
            "time_stack_type": "time_reset",
            "effect_string": "buff_incoming_crit_chance_add,$additional_crit_chance"
        }],
        "effect_string": "pwent_bleed_crit_spec,20",
        "total_bonus_crit_chance": 40,
        "base_crit_chance": 20,
        "debuff_before_damage": true,
        "debuffing_attack_ids": [
            635,
            229
        ]
    }],
    "requirements": "",
    "description": {"desc": "Attacks targeting enemies that $source has caused to Bleed have a $(total_bonus_crit_chance)% additive chance to be a critical hit, up from $(base_crit_chance)%."},
    "id": 1518,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
<br />

# Artemis

![Artemis Portrait](images/season_4/artemis.png)

No changes as of yet.

# Bruenor

![Bruenor Portrait](images/season_4/bruenor.png)

**King of the Hall**
> Your formation gains one Mithral Hall stack. Bruenor increases the effect of Rally by `$(not_buffed amount)%` for each Mithral Hall stack you have, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "stack_title": "Total Mithral Hall Stacks",
            "stacks_multiply": true,
            "total_title": "Total Bonus",
            "off_when_benched": true,
            "show_bonus": true,
            "amount_func": "mult",
            "stack_func": "per_mithral_hall_stacks",
            "effect_string": "buff_upgrade,100,4",
            "desc_forced_order": 2
        },
        {
            "stack_title": "Bruenor Mithral Hall Stacks",
            "manual_stacking": true,
            "stacks_multiply": false,
            "off_when_benched": true,
            "outgoing_buffs": false,
            "effect_string": "bruenor_mithral_hall_stacks,1",
            "show_stacks": true,
            "desc_forced_order": 1
        }
    ],
    "requirements": [],
    "description": {"desc": "Your formation gains one Mithral Hall stack. Bruenor increases the effect of Rally by $(not_buffed amount)% for each Mithral Hall stack you have, stacking multiplicatively."},
    "id": 1528,
    "flavour_text": "",
    "graphic_id": 0,
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

# Drizzt

![Drizzt Portrait](images/season_4/drizzt.png)

**Leader of the Companions**
> Increase Drizzt's damage by `$amount%` for each Companions of the Hall Champion in the formation.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{"effect_string": "hero_dps_mult_per_tagged_crusader_mult,200,companion"}],
    "requirements": [],
    "description": {"desc": "Increase Drizzt's damage by $amount% for each Companions of the Hall Champion in the formation."},
    "id": 1530,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "spec_option_post_apply_info": "Companions of the Hall: $num_stacks",
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
<br />

**Companions of the Hall**
> Your formation gains one Mithral Hall stack. Increase Drizzt's damage by `$(not_buffed amount)%` for each Mithral Hall stack you have, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "stack_title": "Total Mithral Hall Stacks",
            "stacks_multiply": true,
            "total_title": "Total Bonus",
            "off_when_benched": true,
            "show_bonus": true,
            "amount_func": "mult",
            "stack_func": "per_mithral_hall_stacks",
            "effect_string": "hero_dps_multiplier_mult,400",
            "desc_forced_order": 2,
            "targets": ["self"]
        },
        {
            "stack_title": "Drizzt Mithral Hall Stacks",
            "manual_stacking": true,
            "stacks_multiply": false,
            "off_when_benched": true,
            "outgoing_buffs": false,
            "effect_string": "drizzt_mithral_hall_stacks,1",
            "show_stacks": true,
            "desc_forced_order": 1
        }
    ],
    "requirements": [],
    "description": {"desc": "Your formation gains one Mithral Hall stack. Increase Drizzt's damage by $(not_buffed amount)% for each Mithral Hall stack you have, stacking multiplicatively."},
    "id": 1529,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "indexed_effect_properties": true,
        "default_bonus_index": 0,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
<br />

**Specialisation: Drow Stalker**
> Increase Drizzt's damage by `$amount%` for each Drow Champion in the formation.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{"effect_string": "hero_dps_mult_per_tagged_crusader_mult,200,drow"}],
    "requirements": [],
    "description": {"desc": "Increase Drizzt's damage by $amount% for each Drow Champion in the formation."},
    "id": 1531,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "spec_option_post_apply_info": "Drow Champions: $num_stacks",
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
<br />

# Season Chest Icons

| Shop | Inventory |
|---|---|
| ![Shop Season Chest Icon](images/season_4/chest.png) | ![Inventory Season Chest Icon](images/season_4/chestInv.png) |

[Back to Top](#top)

*Last Modified: {{ site.time }}*