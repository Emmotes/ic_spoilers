[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsImage">
        ![PC Portrait for Karlach](images/karlach/portrait.png)Portait
    </span>
    <span class="championPortraitsImage">
        ![Model GIF of Karlach](images/karlach/model.gif)Base Model
    </span>
    <span class="championPortraitsImage">
        ![Alternate Model GIF of Karlach: Rage](images/karlach/model-rage.gif)Rage Model
    </span>
</span>

# Karlach

Karlach was a citizen of the Lower City of Baldur's Gate before being taken prisoner and forced to fight in the Blood War, the eternal conflict between demons and devils. She was a prisoner and champion of Zariel, Archdevil and ruler of Avernus, the first layer of the Nine Hells. Taking a risky chance on escape, Karlach boarded a hostile Mind Flayer ship when it appeared in the sky of Avernus. Using it, she made her escape from the Hells but was infected with a Mind Flayer Tadpole in the process. Now hunted, Karlach is a fugitive on the run from Zariel's forces, who seeks to have her warrior returned to her, and punished.

[Karlach - Baldur's Gate 3 Wiki](https://bg3.wiki/wiki/Karlach)

# Basic Information

Karlach will be the new champion in the Midwinter event on 10 January 2024.

<span class="champStatsTableColumn">
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Seat**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Unknown</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Race**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Tiefling (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Class**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Barbarian (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Roles**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Tanking / DPS / Support / Healing (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Age**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Unknown</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Gender**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Female (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Alignment**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Unknown</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Affiliation**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Absolute Adversaries (Guess)</span>
        </span>
    </span>
</span>

# Formation

Unknown.
{% comment %}
<span class="formationBorder">
    ![Formation Layout](images/karlach/formation.png)
</span>
{% endcomment %}

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Greataxe Cleave** (Melee)
> Karlach attacks the closest enemies with a swing of her greataxe.  
> Cooldown: 6s (Cap 1.5s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Karlach attacks the closest enemies with a swing of her greataxe.",
    "long_description": "",
    "damage_modifier": 1,
    "damage_types": ["melee"],
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
        "type": "melee_attack"
    }],
    "name": "Greataxe Cleave",
    "cooldown": 6,
    "id": 713
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ultimate Attack: Soul Coin**
> Karlach absorbs the energy of a soul coin, increasing her rage cap to 100 stacks and her Infernal Engine's BUD-based damage by 100%.  
> Cooldown: 30s (Cap 7.5s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Karlach increases her rage cap to 100 stacks and her Infernal Engine's damage by 100%.",
    "long_description": "Karlach absorbs the energy of a soul coin, increasing her rage cap to 100 stacks and her Infernal Engine's BUD-based damage by 100%.",
    "damage_modifier": 1,
    "damage_types": ["melee"],
    "graphic_id": 21828,
    "target": "none",
    "aoe_radius": 0,
    "tags": [
        "melee",
        "ultimate"
    ],
    "num_targets": 1,
    "animations": [{
        "ultimate": "karlach",
        "type": "ultimate_attack",
        "no_damage_display": true
    }],
    "name": "Soul Coin",
    "cooldown": 30,
    "id": 714
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> As a Champion of Zariel, Karlach can be used in any Zariel Patron adventure or variant, even if she would not normally be available to be used due to variant or patron restrictions.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{"effect_string": "do_nothing"}],
    "requirements": "",
    "description": {"desc": "As a Champion of Zariel, Karlach can be used in any Zariel Patron adventure or variant, even if she would not normally be available to be used due to variant or patron restrictions."},
    "id": 1810,
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
**Fury of Avernus** (Guess)
> Karlach increases the damage of all Champions (including herself) in her column and the column behind her by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "effect_string": "hero_dps_multiplier_mult,100",
        "targets": ["col_and_prev_col"]
    }],
    "requirements": "",
    "description": {"desc": "Karlach increases the damage of all Champions (including herself) in her column and the column behind her by $(amount)%."},
    "id": 1811,
    "flavour_text": "",
    "graphic_id": 21822,
    "properties": {"is_formation_ability": true}
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ceremorphosis** (Guess)
> Your formation gains one Ceremorphosis stack due to the mind flayer tadpole in Karlach's brain. Karlach increases the health of all other Champions by 20% of her max health, plus 2% for each Ceremorphosis stack the formation has, stacking additively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "stack_title": "Total Ceremorphosis Stacks",
            "amount_updated_listeners": [
                "upgrade_unlocked",
                "slot_changed",
                "feat_changed"
            ],
            "total_title": "Total Bonus",
            "off_when_benched": true,
            "show_bonus": true,
            "amount_func": "add",
            "stack_func": "per_ceremorphosis_stacks",
            "effect_string": "do_nothing,2",
            "desc_forced_order": 2,
            "listen_for_computed_changes": true
        },
        {
            "stack_title": "Karlach Ceremorphosis Stacks",
            "manual_stacking": true,
            "stacks_multiply": false,
            "off_when_benched": true,
            "outgoing_buffs": false,
            "effect_string": "karlach_ceremorphosis_stacks,1",
            "show_stacks": true,
            "desc_forced_order": 1
        },
        {
            "off_when_benched": true,
            "effect_string": "do_nothing,20",
            "skip_effect_key_desc": true
        },
        {
            "amount_expr": "upgrade_amount(13722,2)+max_upgrade_amount(13722,0)",
            "off_when_benched": true,
            "effect_string": "increase_health_by_source_percent,0",
            "desc_forced_order": 3,
            "targets": ["other"]
        }
    ],
    "requirements": "",
    "description": {"desc": "Your formation gains one Ceremorphosis stack due to the mind flayer tadpole in Karlach's brain. Karlach increases the health of all other Champions by $(not_buffed amount___3)% of her max health, plus $(not_buffed amount)% for each Ceremorphosis stack the formation has, stacking additively."},
    "id": 1812,
    "flavour_text": "",
    "graphic_id": 21820,
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
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Rage** (Guess)
> When Karlach attacks or is attacked, she gains a Rage stack, capped at 50 stacks. Karlach increases the effect of The Fury of Avernus by 25% for each Rage stack, stacking multiplicatively. Stacks are reduced by 60% when changing areas.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "stack_title": "Rage stacks",
            "stacks_multiply": true,
            "manual_stacking": true,
            "show_bonus": true,
            "effect_string": "buff_upgrade,25,13721"
        },
        {
            "default_reduce_percent": 60,
            "default_max_stacks": 50,
            "effect_string": "karlach_rage"
        }
    ],
    "requirements": "",
    "description": {"desc": "When Karlach attacks or is attacked, she gains a Rage stack, capped at $(karlach_rage_max_stacks) stacks. Karlach increases the effect of The Fury of Avernus by $(not_buffed amount)% for each Rage stack, stacking multiplicatively. Stacks are reduced by $(karlach_rage_reduce_percent)% when changing areas."},
    "id": 1813,
    "flavour_text": "",
    "graphic_id": 21824,
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
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Infernal Engine** (Guess)
> While Karlach has 20 or more Rage stacks, she ignites on fire dealing 0.1 second of BUD-based damage for each Rage stack to any enemy that attacks her. (Stacking additively).

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability might be prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {"effect_string": "pre_stack_amount,0.1"},
        {
            "per_other_stack_count_effect_key_index": 0,
            "amount_updated_listeners": ["stacks_changed"],
            "stacks_multiply": false,
            "returned_damage_hit_graphic_id": 849,
            "total_title": "Seconds of BUD",
            "per_other_stack_count_upgrade_id": 13723,
            "other_stack_count_expr": "clamp(floor(stack_count/min_rage_stacks),0,1)*stack_count",
            "amount_func": "add",
            "stack_func": "per_other_stack_count",
            "effect_string": "deal_bud_damage_when_hit,0",
            "amount_expr": "upgrade_amount(13724,0)",
            "stack_title": "Effective Rage stacks",
            "min_rage_stacks": 20,
            "show_bonus": true,
            "percent_values": false
        },
        {
            "per_other_stack_count_effect_key_index": 0,
            "amount_updated_listeners": ["stacks_changed"],
            "stacks_multiply": false,
            "per_other_stack_count_upgrade_id": 13723,
            "other_stack_count_expr": "clamp(floor(stack_count/min_rage_stacks),0,1)",
            "min_rage_stacks": 20,
            "amount_func": "add",
            "stack_func": "per_other_stack_count",
            "effect_string": "karlach_infernal_engine",
            "listen_for_computed_changes": true
        }
    ],
    "requirements": "",
    "description": {"desc": "While Karlach has $(min_rage_stacks___2) or more Rage stacks, she ignites on fire dealing $(not_buffed amount) second of BUD-based damage for each Rage stack to any enemy that attacks her. (Stacking additively)"},
    "id": 1814,
    "flavour_text": "",
    "graphic_id": 21823,
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
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Experienced Gladiator** (Guess)
> Karlach increases the effect of The Fury of Avernus by 10% for each Zariel Patron variant you have completed, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stack_title": "Zariel Patron Variants Complete",
        "patron_id": 4,
        "show_bonus": true,
        "amount_func": "mult",
        "stack_func": "per_patron_variant_complete",
        "effect_string": "buff_upgrade,10,13721"
    }],
    "requirements": "",
    "description": {"desc": "Karlach increases the effect of The Fury of Avernus by $(not_buffed amount)% for each Zariel Patron variant you have completed, stacking multiplicatively."},
    "id": 1815,
    "flavour_text": "",
    "graphic_id": 21821,
    "properties": {
        "use_outgoing_description": true,
        "is_formation_ability": true
    }
}
</pre>
</p>
</details>
</div></div>

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Berserker** (Guess)
> While Karlach has 20 or more Rage stacks, she increases her damage by 25% for each Rage stack she has, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stack_title": "Effective Rage stacks",
        "per_other_stack_count_effect_key_index": 0,
        "amount_updated_listeners": ["stacks_changed"],
        "stacks_multiply": true,
        "total_title": "Bonus Damage",
        "per_other_stack_count_upgrade_id": 13723,
        "other_stack_count_expr": "clamp(floor(stack_count/min_rage_stacks),0,1)*stack_count",
        "min_rage_stacks": 20,
        "show_bonus": true,
        "amount_func": "mult",
        "stack_func": "per_other_stack_count",
        "effect_string": "hero_dps_multiplier_mult,25"
    }],
    "requirements": "",
    "description": {"desc": "While Karlach has $(min_rage_stacks) or more Rage stacks, she increases her damage by $(not_buffed amount)% for each Rage stack she has, stacking multiplicatively."},
    "id": 1816,
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
**Specialisation: Wildheart** (Guess)
> While Karlach has 20 or more Rage stacks, she heals 10% of her max health every second.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "per_other_stack_count_effect_key_index": 0,
        "amount_updated_listeners": ["stacks_changed"],
        "stacks_multiply": false,
        "per_other_stack_count_upgrade_id": 13723,
        "other_stack_count_expr": "clamp(floor(stack_count/min_rage_stacks),0,1)",
        "min_rage_stacks": 20,
        "use_percent": true,
        "amount_func": "add",
        "stack_func": "per_other_stack_count",
        "effect_string": "heal,10",
        "use_computed_heal_value": true
    }],
    "requirements": "",
    "description": {"desc": "While Karlach has $(min_rage_stacks) or more Rage stacks, she heals $(amount)% of her max health every second."},
    "id": 1817,
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
**Specialisation: Wild Magic** (Guess)
> While Karlach has 20 or more Rage stacks, she increases the effect of The Fury of Avernus by 100% for each stack of Ceremorphosis, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stack_title": "Effective Rage stacks",
        "per_other_stack_count_effect_key_index": 0,
        "amount_updated_listeners": ["stacks_changed"],
        "stacks_multiply": true,
        "total_title": "Bonus Damage",
        "per_other_stack_count_upgrade_id": 13723,
        "other_stack_count_expr": "clamp(floor(stack_count/min_rage_stacks),0,1)*stack_count",
        "min_rage_stacks": 20,
        "show_bonus": true,
        "amount_func": "mult",
        "stack_func": "per_other_stack_count",
        "effect_string": "buff_upgrade,100,13721"
    }],
    "requirements": "",
    "description": {"desc": "While Karlach has $(min_rage_stacks) or more Rage stacks, she increases the effect of The Fury of Avernus by $(not_buffed amount)% for each stack of Ceremorphosis, stacking multiplicatively."},
    "id": 1818,
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

# Items

<span class="itemTableColumn">
    <span class="itemTableRowHeader">
        <span class="itemTableIcon" style="align-items:center;">
            <span style="margin-left:8px;">**Icons**</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">**Name**</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Camp Stuff Icon](images/karlach/21839.png)</span><span class="itemTableIcon2">![Camp Stuff Icon](images/karlach/21839.png)</span><span class="itemTableIcon3">![Camp Stuff Icon](images/karlach/21840.png)</span><span class="itemTableIcon4">![Camp Stuff Icon](images/karlach/21841.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Camp Stuff</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Clothes Icon](images/karlach/21842.png)</span><span class="itemTableIcon2">![Clothes Icon](images/karlach/21842.png)</span><span class="itemTableIcon3">![Clothes Icon](images/karlach/21843.png)</span><span class="itemTableIcon4">![Clothes Icon](images/karlach/21844.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Clothes</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Engine Icon](images/karlach/21845.png)</span><span class="itemTableIcon2">![Engine Icon](images/karlach/21845.png)</span><span class="itemTableIcon3">![Engine Icon](images/karlach/21846.png)</span><span class="itemTableIcon4">![Engine Icon](images/karlach/21847.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Engine</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Greataxe Icon](images/karlach/21848.png)</span><span class="itemTableIcon2">![Greataxe Icon](images/karlach/21848.png)</span><span class="itemTableIcon3">![Greataxe Icon](images/karlach/21849.png)</span><span class="itemTableIcon4">![Greataxe Icon](images/karlach/21850.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Greataxe</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Soul Coin Icon](images/karlach/21851.png)</span><span class="itemTableIcon2">![Soul Coin Icon](images/karlach/21851.png)</span><span class="itemTableIcon3">![Soul Coin Icon](images/karlach/21852.png)</span><span class="itemTableIcon4">![Soul Coin Icon](images/karlach/21853.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Soul Coin</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Tattoos Icon](images/karlach/21854.png)</span><span class="itemTableIcon2">![Tattoos Icon](images/karlach/21854.png)</span><span class="itemTableIcon3">![Tattoos Icon](images/karlach/21855.png)</span><span class="itemTableIcon4">![Tattoos Icon](images/karlach/21856.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Tattoos</span>
        </span>
    </span>
</span>

# Feats

Unknown.

# Legendaries

Unknown.

# Other Champion Images

<span class="championImagesColumn">
    <span class="championImagesRow">
        <span class="championImagesPortrait">
            ![Karlach Console Portrait](images/karlach/console.png)Console Portait
        </span>
    </span>
    <span class="championImagesRow">
        <span class="championImagesChests">
            ![Karlach Gold Chest Icon](images/karlach/chest_gold.png)Gold Chest Icon
        </span>
        <span class="championImagesChests">
            ![Karlach Silver Chest Icon](images/karlach/chest_silver.png)Silver Chest Icon
        </span>
    </span>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*