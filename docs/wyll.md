[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsImage">
        ![PC Portrait for Wyll](images/wyll/portrait.png)Portait
    </span>
    <span class="championPortraitsImage">
        ![Model GIF of Wyll](images/wyll/model.gif)Base Model
    </span>
    <span class="championPortraitsImage">
        ![Alternate Model GIF of Wyll: Mizora](images/wyll/model-mizora.gif)Mizora Model
    </span>
</span>

# Wyll

The son of Grand Duke Ulder Ravengard, Wyll observed many of the political inner workings of Baldur's Gate while growing up. His mother died in childbirth, and he spent a largely happy childhood being trained by his father, who came from a working-class background and taught Wyll practical skills, including swordplay.

[Wyll - Baldur's Gate 3 Wiki](https://bg3.wiki/wiki/Wyll)

# Basic Information

Wyll will be the new champion in the Wintershield event on 20 December 2023.

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
            <span style="margin-left:8px;">Human (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Class**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Warlock (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Roles**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Support (Guess)</span>
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

Unknown.
{% comment %}
<span class="formationBorder">
    ![Formation Layout](images/wyll/formation.png)
</span>
{% endcomment %}

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Blade & Blast** (Melee and Magic)
> Wyll stabs the closest foe, then casts Eldritch Blast on the most damaged foe.  
> Cooldown: 5s (Cap 1.25s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Wyll stabs the closest foe, then casts Eldritch Blast on the most damaged foe.",
    "long_description": "",
    "damage_modifier": 1,
    "damage_types": [
        "melee",
        "magic"
    ],
    "graphic_id": 0,
    "target": "front",
    "aoe_radius": 0,
    "tags": [
        "melee",
        "ranged"
    ],
    "num_targets": 1,
    "animations": [{
        "target_offset": [
            -250,
            0
        ],
        "special_melee": "wyll",
        "type": "melee_attack"
    }],
    "name": "Blade & Blast",
    "cooldown": 5,
    "id": 708
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ultimate Attack: Mizora**
> Wyll's patron Mizora appears behind him for 15 seconds, increasing his damage and attack rate for the duration.  
> Cooldown: 5s (Cap 1.25s)

<span style="font-size:1.2em;">ⓘ</span> *Note: Very short ultimate cooldowns are almost always for testing purposes and are likely to be increased later.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Mizora increases Wyll's damage and attack rate for 15 seconds.",
    "long_description": "Wyll's patron Mizora appears behind him for 15 seconds, increasing his damage and attack rate for the duration.",
    "damage_modifier": 1,
    "damage_types": ["magic"],
    "graphic_id": 0,
    "target": "none",
    "aoe_radius": 0,
    "tags": ["ultimate"],
    "num_targets": 0,
    "animations": [{
        "percent_to_formation_start": 0,
        "type": "warden_ultimate"
    }],
    "name": "Mizora",
    "cooldown": 5,
    "id": 709
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Bravado** (Guess)
> Wyll increases the damage of all Champions that belong to the most represented race, class, or affiliation(s) in the formation by 100%. If there is a tie, all tied groups gain the buff, and Champions who are part of several groups can gain multiple stacks of the buff (up to a max of 4 stacks), stacking multiplicatively. Buffs apply to the pre-stack value.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability might be prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "effect_string": "pre_stack_amount,100",
            "skip_effect_key_desc": true
        },
        {
            "amount_updated_listeners": [
                "slot_changed",
                "feat_changed"
            ],
            "show_bonus_on_receiver_only": true,
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "use_computed_amount_for_description": true,
            "effect_string": "hero_dps_multiplier_mult,0",
            "show_stacks": true,
            "targets": ["all"],
            "post_process_expr": "min(input,max_stacks)",
            "amount_expr": "upgrade_amount(13429,0)",
            "show_stats_on_owner": false,
            "off_when_benched": true,
            "per_hero_targets": ["effect_key_slot"],
            "per_hero_expr": "get_num_most_common_affiliations() + get_num_most_common_races() + get_num_most_common_classes()",
            "show_stats_on_receiver": true,
            "max_stacks": 4
        }
    ],
    "requirements": "",
    "description": {"desc": "Wyll increases the damage of all Champions that belong to the most represented race, class, or affiliation(s) in the formation by $(amount)%. If there is a tie, all tied groups gain the buff, and Champions who are part of several groups can gain multiple stacks of the buff (up to a max of $(max_stacks___2) stacks), stacking multiplicatively. Buffs apply to the pre-stack value."},
    "id": 1792,
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
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ceremorphosis** (Guess)
> Your formation gains one Ceremorphosis stack due to the mind flayer tadpole in Wyll's brain. Wyll increases the effect of `$(upgrade_name id___2: 13429)` by 100% for each Ceremorphosis stack, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability might be prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {"effect_string": "pre_stack_amount,100"},
        {
            "amount_expr": "upgrade_amount(13430,0)",
            "stack_title": "Total Ceremorphosis Stacks",
            "amount_updated_listeners": ["slot_changed"],
            "stacks_multiply": true,
            "total_title": "Total Bonus",
            "off_when_benched": true,
            "show_bonus": true,
            "amount_func": "mult",
            "stack_func": "per_ceremorphosis_stacks",
            "effect_string": "buff_upgrade,0,13429",
            "desc_forced_order": 2
        },
        {
            "stack_title": "Wyll Ceremorphosis Stacks",
            "manual_stacking": true,
            "stacks_multiply": false,
            "off_when_benched": true,
            "outgoing_buffs": false,
            "effect_string": "wyll_ceremorphosis_stacks,1",
            "show_stacks": true,
            "desc_forced_order": 1
        }
    ],
    "requirements": "",
    "description": {"desc": "Your formation gains one Ceremorphosis stack due to the mind flayer tadpole in Wyll's brain. Wyll increases the effect of $(upgrade_name id___2) by $(amount)% for each Ceremorphosis stack, stacking multiplicatively."},
    "id": 1793,
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
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Folk Hero** (Guess)
> Fiends are Wyll's Favored Foes. All Champions deal 400% more damage against Wyll's Favored Foes.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "increase_damage_against_monster_tag,400,fiend",
            "targets": ["all"]
        },
        {
            "off_when_benched": true,
            "effect_string": "favored_foe,fiend"
        }
    ],
    "requirements": "",
    "description": {"desc": "Fiends are Wyll's Favored Foes. All Champions deal $(amount)% more damage against Wyll's Favored Foes."},
    "id": 1794,
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
**Heartless Contract** (Guess)
> Each time an enemy or distraction is defeated, Wyll increases the effect of `$(upgrade_name id: 13429)` by 25%, stacking multiplicatively up to 10 times, until the area changes.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stacks_multiply": true,
        "show_bonus": true,
        "effect_string": "buff_upgrade,25,13429",
        "max_stacks": 10,
        "more_triggers": [
            {
                "action": {"type": "add_stack"},
                "trigger": "monster_killed"
            },
            {
                "action": {"type": "add_stack"},
                "trigger": "distraction_clicked"
            },
            {
                "action": {"type": "reset_stacks"},
                "trigger": "area_changed"
            }
        ]
    }],
    "requirements": "",
    "description": {"desc": "Each time an enemy or distraction is defeated, Wyll increases the effect of $(upgrade_name id) by $(not_buffed amount)%, stacking multiplicatively up to $(max_stacks) times, until the area changes."},
    "id": 1795,
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
</div></div>

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Pact of the Blade** (Guess)
> Wyll increases the effect of 13429 by 200% on Champions with a Melee base attack.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "amount_updated_listeners": [
            "slot_changed",
            "attack_changed"
        ],
        "off_when_benched": true,
        "effect_string": "buff_incoming_upgrade,200,13429",
        "filter_targets": [
            {
                "upgrade_id": 13429,
                "type": "affected_by_upgrade"
            },
            {
                "attack": "melee",
                "type": "attack_type"
            }
        ],
        "targets": ["all"]
    }],
    "requirements": "",
    "description": {"desc": "Wyll increases the effect of $(upgrade_name upgrade_id) by $(amount)% on Champions with a Melee base attack."},
    "id": 1796,
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
**Specialisation: Pact of the Chain** (Guess)
> Wyll increases the effect of Folk Hero by 10% for each Familiar assigned to his party, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "amount_updated_listeners": ["familiar_changed"],
        "stacks_multiply": true,
        "off_when_benched": true,
        "show_bonus": true,
        "amount_func": "mult",
        "stack_func": "per_familiar_in_play",
        "effect_string": "buff_upgrade,10,13429"
    }],
    "requirements": "",
    "description": {"desc": "Wyll increases the effect of Folk Hero by $(amount)% for each Familiar assigned to his party, stacking multiplicatively."},
    "id": 1797,
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
**Specialisation: Pact of the Tome** (Guess)
> Wyll increases the effect of Folk Hero by 25% for each Champion in the formation with a Magic base attack, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "amount_updated_listeners": [
            "slot_changed",
            "feat_changed",
            "attack_changed"
        ],
        "off_when_benched": true,
        "show_bonus": true,
        "per_hero_targets": ["all"],
        "amount_func": "mult",
        "stack_func": "per_hero_attribute",
        "use_computed_amount_for_description": true,
        "per_hero_expr": "has_base_attack_dmg_type_magic",
        "effect_string": "buff_upgrade,25,13429"
    }],
    "requirements": "",
    "description": {"desc": "Wyll increases the effect of Folk Hero by $(amount)% for each Champion in the formation with a Magic base attack, stacking multiplicatively."},
    "id": 1798,
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
            <span class="itemTableIcon1">![Armor Icon](images/wyll/21742.png)</span><span class="itemTableIcon2">![Armor Icon](images/wyll/21742.png)</span><span class="itemTableIcon3">![Armor Icon](images/wyll/21743.png)</span><span class="itemTableIcon4">![Armor Icon](images/wyll/21744.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Armor</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Blades Icon](images/wyll/21745.png)</span><span class="itemTableIcon2">![Blades Icon](images/wyll/21745.png)</span><span class="itemTableIcon3">![Blades Icon](images/wyll/21746.png)</span><span class="itemTableIcon4">![Blades Icon](images/wyll/21747.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Blades</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Camp Comforts Icon](images/wyll/21748.png)</span><span class="itemTableIcon2">![Camp Comforts Icon](images/wyll/21748.png)</span><span class="itemTableIcon3">![Camp Comforts Icon](images/wyll/21749.png)</span><span class="itemTableIcon4">![Camp Comforts Icon](images/wyll/21750.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Camp Comforts</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Fiend Clues Icon](images/wyll/21751.png)</span><span class="itemTableIcon2">![Fiend Clues Icon](images/wyll/21751.png)</span><span class="itemTableIcon3">![Fiend Clues Icon](images/wyll/21752.png)</span><span class="itemTableIcon4">![Fiend Clues Icon](images/wyll/21753.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Fiend Clues</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Folk Hero Stuff Icon](images/wyll/21754.png)</span><span class="itemTableIcon2">![Folk Hero Stuff Icon](images/wyll/21754.png)</span><span class="itemTableIcon3">![Folk Hero Stuff Icon](images/wyll/21755.png)</span><span class="itemTableIcon4">![Folk Hero Stuff Icon](images/wyll/21756.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Folk Hero Stuff</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Pact Items Icon](images/wyll/21757.png)</span><span class="itemTableIcon2">![Pact Items Icon](images/wyll/21757.png)</span><span class="itemTableIcon3">![Pact Items Icon](images/wyll/21758.png)</span><span class="itemTableIcon4">![Pact Items Icon](images/wyll/21759.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Pact Items</span>
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
            ![Wyll Console Portrait](images/wyll/console.png)Console Portait
        </span>
    </span>
    <span class="championImagesRow">
        <span class="championImagesChests">
            ![Wyll Gold Chest Icon](images/wyll/chest_gold.png)Gold Chest Icon
        </span>
        <span class="championImagesChests">
            ![Wyll Silver Chest Icon](images/wyll/chest_silver.png)Silver Chest Icon
        </span>
    </span>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*