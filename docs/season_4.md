[Back to Main](index.md)

# Season 4

{% comment %}
![Season Icon](images/s4_icon.png)
{% endcomment %}

Season 3 will end on 24 May 2023 and there's usually a 2-4 week gap between seasons. This means the current guesstimate start for season 4 is early-mid June.

Given the appearance of skins for Companions of the Hall - most called `Mythic` on 14 June 2023 (a date very close to where I would expect new season skins to appear) - it seems likely that they'll be the focus of season 4. If this is true - that will mean the start date for the season will be 21 June 2023.

# Theme

![Season 4 Portrait](images/portrait_s4.png)

It appears the season will be based around the Companions of the Hall - and peripherally related champions. Specifically Regis Artemis Pwent Catti-brie and Wulfgar.

{% comment %}
![Season 4 Ad Panel](images/s4_adpanel.png)
{% endcomment %}

# Changes

Drizzt Catti-brie Regis Wulfgar and Bruenor are all getting Mithril Hall stacks - though not all are in the data yet.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. Making assumptions on how the champions will turn out based on this information would be premature.

# Catti-brie

![Catti-brie Portrait](images/season_catti-brie.png)

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
        "debuffing_attack_ids": [629]
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
        "owner_use_outgoing_description": true
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
        "owner_use_outgoing_description": true
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
    "graphic_id": 0,
    "properties": {"is_formation_ability": true}
}
</pre>
</p>
</details>
<br />

**Mithral Hall** (Guess)
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
            "effect_string": "catti_mithral_hall_stacks,1",
            "show_stacks": true,
            "desc_forced_order": 1
        }
    ],
    "requirements": "",
    "description": {"desc": "Your formation gains one Mithral Hall stack. $source increases the damage bonus of $(upgrade_name id) by $(not_buffed amount)% for each Mithral Hall stack you have, stacking multiplicatively."},
    "id": 1501,
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

**Specialisation: Unknown** (Guess)
> Increase the base effect of `$(upgrade_name id)` to `$(amt)%` per stack and you only lose half of your existing stacks when changing areas instead of all of them.
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
    "description": {"desc": "Increase the base effect of $(upgrade_name id) to $(amt)% per stack and you only lose half of your existing stacks when changing areas instead of all of them."},
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

**Specialisation: Unknown** (Guess)
> Additively increase the critical hit chance of all Companions of the Hall Champions by `$(amount)%`.
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
    "description": {"desc": "Additively increase the critical hit chance of all Companions of the Hall Champions by $(amount)%."},
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

[Back to Top](#top)

*Last Modified: {{ site.time }}*