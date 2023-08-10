[Back to Main](index.md)

![PC Portrait](images/astarion/portrait.png)

# Astarion

Another Baldur's Gate 3 champion.

Info from a wiki.
> Astarion prowled the night as a vampire spawn for centuries, serving a sadistic master until he was snatched away. Now he can walk in the light, but can he leave his wicked past behind?

[Wiki Link](https://baldursgate3.wiki.fextralife.com/Astarion)

# Basic Information

Astarion will be the new champion in the Brightswords event on 6 September 2023.

<span class="champStatsTableColumn">
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Seat**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">10 (Guess) (Spoiled by Justin on DI)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Race**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Elf (High) (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Class**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Rogue (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Roles**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Unknown</span>
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
            <span style="margin-left:8px;">Male (Guess)</span>
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

<span class="formationBorder">
    ![Formation Layout](images/astarion/formation.png)
</span>

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Sneak Attack** (Ranged)
> Astarion attacks a random target, dealing massive damage if the enemy was recently attacked.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Astarion attacks a random target, dealing massive damage if the enemy was recently attacked.",
    "long_description": "",
    "damage_modifier": 1,
    "damage_types": ["ranged"],
    "graphic_id": 0,
    "target": "random",
    "aoe_radius": 0,
    "tags": ["ranged"],
    "num_targets": 1,
    "animations": [{
        "projectile_details": {
            "percent_height_offset": 10,
            "projectile_graphic_id": 20375,
            "projectile_speed": 1750,
            "hash": "ecac999b510d089e10f4e6a0edf92483",
            "rotation_speed": 720
        },
        "bonus_seconds_of_bud": 1,
        "teleport_sequence_name": "charge",
        "special_melee": "astarion",
        "shoot_offset": {
            "x": 50,
            "y": -125
        },
        "bud_override_upgrade_id": 12497,
        "type": "melee_attack",
        "shoot_sequence_name": "attack",
        "shoot_sound_id": 180,
        "shoot_frame": 5,
        "bonus_bud_threshold": 3
    }],
    "name": "Sneak Attack",
    "cooldown": 6,
    "id": 677
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ultimate Attack: Sanguine Hunger**
> Astarion viciously attacks the enemy with the most health with a vampiric bite and heals to full health.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Astarion viciously attacks the enemy with the most health and heals to full health.",
    "long_description": "Astarion viciously attacks the enemy with the most health with a vampiric bite and heals to full health.",
    "damage_modifier": 0.03,
    "damage_types": ["melee"],
    "graphic_id": 20430,
    "target": "highest_health",
    "aoe_radius": 0,
    "tags": [
        "melee",
        "ultimate"
    ],
    "num_targets": 1,
    "animations": [{
        "damage_frame": 18,
        "teleport_sequence_name": "charge",
        "ultimate": "astarion",
        "melee_sequence_name": "ultimate",
        "type": "ultimate_attack"
    }],
    "name": "Sanguine Hunger",
    "cooldown": 60,
    "id": 678
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown**
> Astarion counts as "dead" for the purposes of effects that care about dead Champions, but "alive" for all other purposes.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{"effect_string": "do_nothing"}],
    "requirements": "",
    "description": {"desc": "Astarion counts as \"dead\" for the purposes of effects that care about dead Champions, but \"alive\" for all other purposes."},
    "id": 1663,
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
**Ceremorphosis**
> Your formation gains one Ceremorphosis stack due to the mind flayer tadpole in Astarion's brain. Astarion increases the effect of Outflank by `$(amount)%` for each Ceremorphosis stack, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability might be prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {"effect_string": "pre_stack_amount,100"},
        {
            "amount_expr": "upgrade_amount(12489,0)",
            "stack_title": "Total Ceremorphosis Stacks",
            "amount_updated_listeners": ["slot_changed"],
            "stacks_multiply": true,
            "total_title": "Total Bonus",
            "off_when_benched": true,
            "show_bonus": true,
            "amount_func": "mult",
            "stack_func": "per_ceremorphosis_stacks",
            "effect_string": "buff_upgrades,0,12493,12494",
            "desc_forced_order": 2
        },
        {
            "stack_title": "Astarion Ceremorphosis Stacks",
            "manual_stacking": true,
            "stacks_multiply": false,
            "off_when_benched": true,
            "outgoing_buffs": false,
            "effect_string": "astarion_ceremorphosis_stacks,1",
            "show_stacks": true,
            "desc_forced_order": 1
        }
    ],
    "requirements": "",
    "description": {"desc": "Your formation gains one Ceremorphosis stack due to the mind flayer tadpole in Astarion's brain. Astarion increases the effect of Outflank by $(amount)% for each Ceremorphosis stack, stacking multiplicatively."},
    "id": 1664,
    "flavour_text": "",
    "graphic_id": 20421,
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
**Generational Wealth**
> Astarion increases the gold find of the formation by `$(amount)%` multiplied by the total age of all Champions in the formation.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stack_title": "Total Age",
        "amount_updated_listeners": ["slot_changed"],
        "stacks_multiply": false,
        "off_when_benched": true,
        "show_bonus": true,
        "amount_func": "add",
        "stack_func": "per_hero_attribute",
        "per_hero_expr": "age",
        "effect_string": "gold_multiplier_mult,1"
    }],
    "requirements": "",
    "description": {"desc": "Astarion increases the gold find of the formation by $(amount)% multiplied by the total age of all Champions in the formation."},
    "id": 1665,
    "flavour_text": "",
    "graphic_id": 20422,
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
**Well Fed**
> After using his Sanguine Hunger ultimate, Astarion's Outflank is increased by `$(amount)%`. This effect can stack (multiplicatively) up to 5 times, with stacks resetting when changing areas.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability might be prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {"effect_string": "pre_stack_amount,400"},
        {
            "amount_expr": "upgrade_amount(12491,0)",
            "stack_title": "Well Fed Stacks",
            "stacks_multiply": true,
            "show_bonus": true,
            "effect_string": "buff_upgrades,0,12493,12494",
            "max_stacks": 5,
            "more_triggers": [{
                "action": {"type": "reset"},
                "trigger": "area_changed"
            }],
            "stacks_on_trigger": "owner_ultimate_attack"
        }
    ],
    "requirements": "",
    "description": {"desc": "After using his Sanguine Hunger ultimate, Astarion's Outflank is increased by $(amount)%. This effect can stack (multiplicatively) up to 5 times, with stacks resetting when changing areas."},
    "id": 1666,
    "flavour_text": "",
    "graphic_id": 20424,
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
**Ultimate Outflank**
> If Astarion is buffed by his own Outflank ability, when he uses his Sanguine Hunger Ultimate attack, he reduces the active ultimate cooldown of all other Champions in the formation by `$(amount)%`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "effect_string": "astarion_the_ultimate_outflake,10",
        "hero_id_blacklist": [43]
    }],
    "requirements": "",
    "description": {"desc": "If Astarion is buffed by his own Outflank ability, when he uses his Sanguine Hunger Ultimate attack, he reduces the active ultimate cooldown of all other Champions in the formation by $(amount)%."},
    "id": 1667,
    "flavour_text": "",
    "graphic_id": 20423,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Outflank Top** (Guess)
> Astarion increases the damage of all Champions at the top of each column by `$(amount)%`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "off_when_benched": true,
        "effect_string": "hero_dps_multiplier_mult,100",
        "targets": ["top_row_of_each_column"]
    }],
    "requirements": "",
    "description": {"desc": "Astarion increases the damage of all Champions at the top of each column by $(amount)%."},
    "id": 1668,
    "flavour_text": "",
    "graphic_id": 20759,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "tracking_name": "outflank"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Outflank Bottom** (Guess)
> Astarion increases the damage of all Champions at the bottom of each column by `$(amount)%`.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "off_when_benched": true,
        "effect_string": "hero_dps_multiplier_mult,100",
        "targets": ["bottom_row_of_each_column"]
    }],
    "requirements": "",
    "description": {"desc": "Astarion increases the damage of all Champions at the bottom of each column by $(amount)%"},
    "id": 1669,
    "flavour_text": "",
    "graphic_id": 20758,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "tracking_name": "outflank"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Thief** (Guess)
> Astarion increases the gold find of the party by `$(amount)%` for each gold find Champion in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{"effect_string": "gold_mult_per_tagged_crusader_mult,100,gold"}],
    "requirements": "",
    "description": {"desc": "Astarion increases the gold find of the party by $(amount)% for each gold find Champion in the formation, stacking multiplicatively."},
    "id": 1670,
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
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Arcane Trickster** (Guess)
> Astarion increases the damage bonus of his Outflank specialization by `$(amount)%` for each Champion in the formation that is a Rogue, Wizard, or Absolute Adversaries affiliation member, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stack_title": "Qualified Champions",
        "amount_updated_listeners": [
            "hero_tags_changed",
            "slot_changed"
        ],
        "show_bonus": true,
        "amount_func": "mult",
        "stack_func": "per_hero",
        "effect_string": "buff_upgrades,100,12493,12494",
        "tag": "absoluteadversaries|rogue|wizard"
    }],
    "requirements": "",
    "description": {"desc": "Astarion increases the damage bonus of his Outflank specialization by $(amount)% for each Champion in the formation that is a Rogue, Wizard, or Absolute Adversaries affiliation member, stacking multiplicatively."},
    "id": 1671,
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
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Assassin** (Guess)
> Increases the bonus BUD-based damage Astarion's Sneak Attack deals to `$(amount)` seconds worth.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{"effect_string": "do_nothing,5"}],
    "requirements": "",
    "description": {"desc": "Increases the bonus BUD-based damage Astarion's Sneak Attack deals to $(amount) seconds worth."},
    "id": 1672,
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
</div></div>

# Items

<span class="itemTableColumn">
    <span class="itemTableRowHeader">
        <span class="itemTableIcon">
            <span style="margin-left:8px;">**Icons**</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">**Name**</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Baldurs Gate Things Icon](images/astarion/20436.png)</span><span class="itemTableIcon2">![Baldurs Gate Things Icon](images/astarion/20436.png)</span><span class="itemTableIcon3">![Baldurs Gate Things Icon](images/astarion/20437.png)</span><span class="itemTableIcon4">![Baldurs Gate Things Icon](images/astarion/20438.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Baldurs Gate Things</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Magic Items Icon](images/astarion/20439.png)</span><span class="itemTableIcon2">![Magic Items Icon](images/astarion/20439.png)</span><span class="itemTableIcon3">![Magic Items Icon](images/astarion/20440.png)</span><span class="itemTableIcon4">![Magic Items Icon](images/astarion/20441.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Magic Items</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Melee Weapons Icon](images/astarion/20442.png)</span><span class="itemTableIcon2">![Melee Weapons Icon](images/astarion/20442.png)</span><span class="itemTableIcon3">![Melee Weapons Icon](images/astarion/20443.png)</span><span class="itemTableIcon4">![Melee Weapons Icon](images/astarion/20444.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Melee Weapons</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Mind Flayer Research Icon](images/astarion/20445.png)</span><span class="itemTableIcon2">![Mind Flayer Research Icon](images/astarion/20445.png)</span><span class="itemTableIcon3">![Mind Flayer Research Icon](images/astarion/20446.png)</span><span class="itemTableIcon4">![Mind Flayer Research Icon](images/astarion/20447.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Mind Flayer Research</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Ranged Weapons Icon](images/astarion/20448.png)</span><span class="itemTableIcon2">![Ranged Weapons Icon](images/astarion/20448.png)</span><span class="itemTableIcon3">![Ranged Weapons Icon](images/astarion/20449.png)</span><span class="itemTableIcon4">![Ranged Weapons Icon](images/astarion/20450.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Ranged Weapons</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Vampire Links Icon](images/astarion/20451.png)</span><span class="itemTableIcon2">![Vampire Links Icon](images/astarion/20451.png)</span><span class="itemTableIcon3">![Vampire Links Icon](images/astarion/20452.png)</span><span class="itemTableIcon4">![Vampire Links Icon](images/astarion/20453.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Vampire Links</span>
        </span>
    </span>
</span>

# Feats

Unknown.

# Legendaries

Unknown.

# Champion Images

<span class="championImagesColumn">
    <span class="championImagesRow">
        <span class="championImagesPortrait">
            ![Astarion Console Portrait](images/astarion/console.png)Console Portait
        </span>
    </span>
    <span class="championImagesRow">
        <span class="championImagesChests">
            ![Astarion Gold Chest Icon](images/astarion/chest_gold.png)Gold Chest Icon
        </span>
        <span class="championImagesChests">
            ![Astarion Silver Chest Icon](images/astarion/chest_silver.png)Silver Chest Icon
        </span>
    </span>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*