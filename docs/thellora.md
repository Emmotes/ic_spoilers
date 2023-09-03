[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsImage">
        ![PC Portrait for Thellora](images/thellora/portrait.png)Portait
    </span>
    <span class="championPortraitsImage">
        ![Model GIF of Thellora](images/thellora/model.gif)Model
    </span>
</span>

# Thellora

We currently know very little about this champion. They've been confirmed to be part of the next (and sixth) Idle Champions Presents: `Fatebreaker` - and from the model we can tell that they'll be a Centaur. But that's about it.

# Basic Information

Thellora will be the new champion in the Liars' Night event on 18 October 2023.

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
            <span style="margin-left:8px;">Centaur (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Class**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Paladin (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Roles**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Tanking / Support / Speed (Guess)</span>
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
            <span style="margin-left:8px;">Unknown</span>
        </span>
    </span>
</span>

# Formation

<span class="formationBorder">
    ![Formation Layout](images/thellora/formation.png)
</span>

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Windsong's Strike** (Melee)
> Thellora strikes an enemy with her hooves, and another with her blade.  
> Cooldown: 8s (Cap 2s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Thellora strikes an enemy with her hooves, and another with her blade.",
    "long_description": "",
    "damage_modifier": 1,
    "damage_types": ["melee"],
    "graphic_id": 0,
    "target": "front",
    "aoe_radius": 0,
    "tags": ["melee"],
    "num_targets": 1,
    "animations": [{
        "target_offset": [
            -75,
            0
        ],
        "special_melee": "thellora",
        "type": "melee_attack"
    }],
    "name": "Windsong's Strike",
    "cooldown": 8,
    "id": 687
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ultimate Attack: The Light of Mount Tura**
> Thellora charges through the enemies dealing 1 massive hit to enemies in a wide path, and then increases the damage of all champions by 400% for 15 seconds.  
> Cooldown: 10s (Cap 2.5s)

<span style="font-size:1.2em;">ⓘ</span> *Note: Very short ultimate cooldowns are almost always for testing purposes and are likely to be increased later.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Thellora charges through the enemies, and then increases the damage of all champions for a short while.",
    "long_description": "Thellora charges through the enemies dealing 1 massive hit to enemies in a wide path, and then increases the damage of all champions by 400% for 15 seconds.",
    "damage_modifier": 1,
    "damage_types": ["melee"],
    "graphic_id": 20868,
    "target": "all",
    "aoe_radius": 0,
    "tags": [
        "melee",
        "ultimate"
    ],
    "num_targets": 0,
    "animations": [{
        "target_offset": [
            -75,
            0
        ],
        "ultimate": "thellora",
        "type": "ultimate_attack"
    }],
    "name": "The Light of Mount Tura",
    "cooldown": 10,
    "id": 688
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Plateaus of Unicorn** (Guess)
> Thellora gains a Rush stack for every 10 areas she completes in an adventure, and these stacks persist through resets. Thellora's Rush Target is equal to her number of Rush stacks or the current campaign's favor exponent, whichever is smaller. When Thellora kills her first enemy in an adventure, she spends all her Rush stacks and skips to the first area past her Rush Target. Thellora gathers all the rewards (including gold) from bosses skipped in this fashion, but nothing from normal monsters.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {"effect_string": "thellora_plateaus_of_unicorn_run,10"},
        {"effect_string": "max_exponent_mult,100"}
    ],
    "requirements": "",
    "description": {
        "pre": "Thellora gains a Rush stack for every $(amount) areas she completes in an adventure, and these stacks persist through resets. Thellora's Rush Target is equal to her number of Rush stacks or the current campaign's favor exponent, whichever is smaller. When Thellora kills her first enemy in an adventure, she spends all her Rush stacks and skips to the first area past her Rush Target. Thellora gathers all the rewards (including gold) from bosses skipped in this fashion, but nothing from normal monsters.",
        "conditions": [{
            "condition": "not static_desc",
            "desc": "^^$thellora_plateaus_of_unicorn_run_desc"
        }]
    },
    "id": 1685,
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
**Strength of the Luma**
> Thellora increases the damage of Champions in the column behind her by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "effect_string": "hero_dps_multiplier_mult,100",
        "targets": ["prev_col"]
    }],
    "requirements": "",
    "description": {"desc": "Thellora increases the damage of Champions in the column behind her by $(amount)%."},
    "id": 1686,
    "flavour_text": "",
    "graphic_id": 20864,
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
**Radiance of the Sky Cents**
> Thellora increases the health of all other Champions by 25% of her max health and any healing effect on those Champions is increased by 25%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "increase_health_by_source_percent,25",
            "targets": ["other"]
        },
        {
            "off_when_benched": true,
            "effect_string": "healing_add_mult,25",
            "targets": ["all"]
        }
    ],
    "requirements": "",
    "description": {"desc": "Thellora increases the health of all other Champions by $(amount)% of her max health and any healing effect on those Champions is increased by $(amount___2)%."},
    "id": 1687,
    "flavour_text": "",
    "graphic_id": 20863,
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
**Paladin's Resolve**
> Each time Thellora attacks and doesn't kill an enemy, she increases the effect of Strength of the Luma by 20% until the area changes, stacking multiplicatively and capped at 100 stacks.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "stack_title": "Stacks",
        "stacks_multiply": true,
        "total_title": "Stack Bonus",
        "off_when_benched": true,
        "show_bonus": true,
        "effect_string": "buff_upgrade,20,12978",
        "more_triggers": [{
            "action": {"type": "reset_stacks"},
            "trigger": "area_changed"
        }],
        "max_stacks": 100,
        "stacks_on_trigger": "hero_attack_ended_no_kill"
    }],
    "requirements": "",
    "description": {"desc": "Each time Thellora attacks and doesn't kill an enemy, she increases the effect of Strength of the Luma by $(not_buffed amount)% until the area changes, stacking multiplicatively and capped at $(max_stacks) stacks."},
    "id": 1688,
    "flavour_text": "",
    "graphic_id": 20862,
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
**Feats to Spare**
> The effects of feats assigned to Thellora also apply to all adjacent Champions. Note that feats that buff her formation abilities have no effect when applied to other Champions.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "off_when_benched": true,
        "effect_string": "apply_feats_positionally",
        "targets": ["adj"]
    }],
    "requirements": "",
    "description": {
        "pre": "The effects of feats assigned to Thellora also apply to all adjacent Champions. Note that feats that buff her formation abilities have no effect when applied to other Champions.",
        "conditions": [{
            "condition": "not static_desc",
            "desc": "^^$apply_feats_positionally"
        }]
    },
    "id": 1689,
    "flavour_text": "",
    "graphic_id": 20861,
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
**Specialisation: Defender of the Meek** (Guess)
> Thellora increases the damage of Champions with a STR of 12 or less by 60% for each Champion in the formation with a STR of 12 or less, stacking multiplicatively. Buffs apply to the pre-stack value.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability might be prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "pre_stack_amount,60",
            "skip_effect_key_desc": true
        },
        {
            "amount_updated_listeners": [
                "slot_changed",
                "feat_changed"
            ],
            "stacks_multiply": true,
            "formation_arrows_for_effected_only": true,
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "use_computed_amount_for_description": true,
            "effect_string": "hero_dps_multiplier_mult,0",
            "targets": ["all_slots"],
            "amount_expr": "upgrade_amount(12982,0)",
            "off_when_benched": true,
            "show_bonus": true,
            "min_stat_amount": 12,
            "per_hero_expr": "clamp(min_stat_amount-str,0,1)",
            "filter_targets": [{
                "expr": "STR<=12",
                "type": "stat_score"
            }]
        }
    ],
    "requirements": "",
    "description": {"desc": "Thellora increases the damage of Champions with a STR of $(min_stat_amount___2) or less by $(amount)% for each Champion in the formation with a STR of $(min_stat_amount___2) or less, stacking multiplicatively. Buffs apply to the pre-stack value."},
    "id": 1690,
    "flavour_text": "",
    "graphic_id": 21002,
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
**Specialisation: Vanguard of the Quick** (Guess)
> Thellora increases the damage of Speed Champions by 50% for each Speed Champion in the formation, stacking multiplicatively. Buffs apply to the pre-stack value.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability might be prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "pre_stack_amount,50",
            "skip_effect_key_desc": true
        },
        {
            "amount_updated_listeners": [
                "slot_changed",
                "feat_changed"
            ],
            "stacks_multiply": true,
            "formation_arrows_for_effected_only": true,
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "use_computed_amount_for_description": true,
            "effect_string": "hero_dps_multiplier_mult,0",
            "targets": ["all_slots"],
            "amount_expr": "upgrade_amount(12983,0)",
            "off_when_benched": true,
            "show_bonus": true,
            "per_hero_expr": "has_tag_speed",
            "filter_targets": [{
                "type": "by_tags",
                "tags": "speed"
            }]
        }
    ],
    "requirements": "",
    "description": {"desc": "Thellora increases the damage of Speed Champions by $(amount)% for each Speed Champion in the formation, stacking multiplicatively. Buffs apply to the pre-stack value."},
    "id": 1691,
    "flavour_text": "",
    "graphic_id": 21003,
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
**Specialisation: Callessas Blessed** (Guess)
> Thellora increases the damage of Female and Non-Binary Champions by 50% for each Female and Non-Binary Champion in the formation, stacking multiplicatively. Buffs apply to the pre-stack value.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability might be prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "pre_stack_amount,50",
            "skip_effect_key_desc": true
        },
        {
            "amount_updated_listeners": [
                "slot_changed",
                "feat_changed"
            ],
            "stacks_multiply": true,
            "formation_arrows_for_effected_only": true,
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "use_computed_amount_for_description": true,
            "effect_string": "hero_dps_multiplier_mult,0",
            "targets": ["all_slots"],
            "amount_expr": "upgrade_amount(12984,0)",
            "off_when_benched": true,
            "show_bonus": true,
            "per_hero_expr": "has_tag_female||(!has_tag_female&&!has_tag_male)",
            "filter_targets": [{
                "type": "by_tags",
                "tags": "female|(!female^!male)"
            }]
        }
    ],
    "requirements": "",
    "description": {"desc": "Thellora increases the damage of Female and Non-Binary Champions by $(amount)% for each Female and Non-Binary Champion in the formation, stacking multiplicatively. Buffs apply to the pre-stack value."},
    "id": 1692,
    "flavour_text": "",
    "graphic_id": 21001,
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
            <span class="itemTableIcon1">![Armor Icon](images/thellora/20881.png)</span><span class="itemTableIcon2">![Armor Icon](images/thellora/20881.png)</span><span class="itemTableIcon3">![Armor Icon](images/thellora/20882.png)</span><span class="itemTableIcon4">![Armor Icon](images/thellora/20883.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Armor</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Helmet Icon](images/thellora/20884.png)</span><span class="itemTableIcon2">![Helmet Icon](images/thellora/20884.png)</span><span class="itemTableIcon3">![Helmet Icon](images/thellora/20885.png)</span><span class="itemTableIcon4">![Helmet Icon](images/thellora/20886.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Helmet</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Shield Icon](images/thellora/20887.png)</span><span class="itemTableIcon2">![Shield Icon](images/thellora/20887.png)</span><span class="itemTableIcon3">![Shield Icon](images/thellora/20888.png)</span><span class="itemTableIcon4">![Shield Icon](images/thellora/20889.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Shield</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Spear Icon](images/thellora/20890.png)</span><span class="itemTableIcon2">![Spear Icon](images/thellora/20890.png)</span><span class="itemTableIcon3">![Spear Icon](images/thellora/20891.png)</span><span class="itemTableIcon4">![Spear Icon](images/thellora/20892.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Spear</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Sword Icon](images/thellora/20893.png)</span><span class="itemTableIcon2">![Sword Icon](images/thellora/20893.png)</span><span class="itemTableIcon3">![Sword Icon](images/thellora/20894.png)</span><span class="itemTableIcon4">![Sword Icon](images/thellora/20895.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Sword</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Trinket Icon](images/thellora/20896.png)</span><span class="itemTableIcon2">![Trinket Icon](images/thellora/20896.png)</span><span class="itemTableIcon3">![Trinket Icon](images/thellora/20897.png)</span><span class="itemTableIcon4">![Trinket Icon](images/thellora/20898.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Trinket</span>
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
            ![Thellora Console Portrait](images/thellora/console.png)Console Portait
        </span>
    </span>
    <span class="championImagesRow">
        <span class="championImagesChests">
            ![Thellora Gold Chest Icon](images/thellora/chest_gold.png)Gold Chest Icon
        </span>
        <span class="championImagesChests">
            ![Thellora Silver Chest Icon](images/thellora/chest_silver.png)Silver Chest Icon
        </span>
    </span>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*