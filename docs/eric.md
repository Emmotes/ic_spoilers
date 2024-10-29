[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Eric](images/eric/portrait.png)
        </span>
        <span>
        Portrait
        </span>
    </span>
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![Model GIF of Eric](images/eric/model.gif)
        </span>
        <span>
        Model
        </span>
    </span>
</span>

# Eric

Eric, the Cavalier at the age of 15, is the spoiled child, originating from a rich home. On the surface, Eric is a big-mouthed comic relief coward. Eric has a heroic core, and frequently saves his friends from danger with his magical griffin shield, which can project a force field. Despite his aloofness and several instances of selfishness, Eric shares the common camaraderie of the group, and occasionally steps to the fore as a substitute leader in Hank's absence.

[D&D (TV Series) - Wikipedia](https://en.wikipedia.org/wiki/Dungeons_%26_Dragons_(TV_series))

# Basic Information

Eric will be a new champion in the Wintershield event on 1 January 2025.

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
            <span style="margin-right:4px;">**Species**:</span>
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
            <span style="margin-left:8px;">Fighter (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Roles**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Tanking / Support / Gold (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Age**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">15 (Guess)</span>
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
            <span style="margin-left:8px;">Saturday Morning Squad (Guess)</span>
        </span>
    </span>
</span>

# Formation

Unknown.
{% comment %}
<span class="formationBorder">
    ![Formation Layout](images/eric/formation.png)
</span>
{% endcomment %}

# Attacks

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Forceful Bash** (Melee)
> Eric hits the closest enemy with his shield, dealing one hit and knocking them back a short distance.  
> Cooldown: 6.5s (Cap 1.625s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 824,
    "name": "Forceful Bash",
    "description": "Eric hits the closest enemy with his shield, dealing one hit and knocking them back a short distance.",
    "long_description": "",
    "graphic_id": 0,
    "target": "front",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 6.5,
    "animations": [
        {
            "type": "melee_attack",
            "target_offset_x": -45,
            "damage_frame": 10,
            "jump_sound": 30,
            "sound_frames": {
                "10": 154
            },
            "effects_on_monsters": [
                {
                    "effect_string": "push_back_monster,10",
                    "animation": "hit",
                    "after_damage": true
                }
            ]
        }
    ],
    "tags": [
        "melee"
    ],
    "damage_types": [
        "melee"
    ]
}
</pre>
</p>
</details>
</div></div>

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Cavalier's Code** (Guess)
> Eric increases the effect of his Trait specialization choice and the party's Gold Find by 20% for each enemy that has spawned in the current area, stacking multiplicatively up to 100 enemies. Boss enemies count as 25 enemies for this ability.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2159,
    "flavour_text": "",
    "description": {
        "desc": "Eric increases the effect of his Trait specialization choice and the party's Gold Find by $(not_buffed amount)% for each enemy that has spawned in the current area, stacking multiplicatively up to $max_stacks enemies. Boss enemies count as 25 enemies for this ability."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrades,20,16134,16135,16136",
            "show_bonus": true,
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "post_process_expr": "normal_monsters_spawned + 25*boss_monsters_spawned",
            "limit": 100,
            "max_stacks": 100,
            "amount_updated_listeners": [
                "monster_spawned"
            ]
        },
        {
            "off_when_benched": true,
            "effect_string": "gold_multiplier_mult,20",
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "post_process_expr": "normal_monsters_spawned + 25*boss_monsters_spawned",
            "limit": 100,
            "max_stacks": 100,
            "amount_updated_listeners": [
                "monster_spawned"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 25257,
    "large_graphic_id": 25253,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Shield of the Cavalier** (Guess)
> Eric increases the health of all other Champions by 25% of his max health, and when any Champion in the formation gains temporary health, the amount gained is increased by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2160,
    "flavour_text": "",
    "description": {
        "desc": "Eric increases the health of all other Champions by $amount% of his max health, and when any Champion in the formation gains temporary health, the amount gained is increased by $(amount___2)%."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "increase_health_by_source_percent,25",
            "targets": [
                "other"
            ]
        },
        {
            "off_when_benched": true,
            "effect_string": "temp_health_mult,100",
            "targets": [
                "all"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 25260,
    "large_graphic_id": 25256,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "default_bonus_index": 1,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Preferred Target** (Guess)
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2161,
    "flavour_text": "",
    "description": "",
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "do_nothing,0"
        }
    ],
    "requirements": "",
    "graphic_id": 25259,
    "large_graphic_id": 25255,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Keep Away** (Guess)
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2162,
    "flavour_text": "",
    "description": "",
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "do_nothing,0"
        }
    ],
    "requirements": "",
    "graphic_id": 25258,
    "large_graphic_id": 25254,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2163,
    "flavour_text": "",
    "description": "",
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "do_nothing,0"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Trait: Brave** (Guess)
> Eric increases the damage of all Champions by 100%, increased by 100% for each column they are in front of him, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2164,
    "flavour_text": "",
    "description": {
        "desc": "Eric increases the damage of all Champions by $(amount)%, increased by $(amount___2)% for each column they are in front of him, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "base_amount,100"
        },
        {
            "off_when_benched": true,
            "effect_string": "additional_amount,100"
        },
        {
            "off_when_benched": true,
            "effect_string": "hero_dps_multiplier_mult,0",
            "amount_func": "eric_trait",
            "base_amount_idx": 0,
            "additional_amount_idx": 1,
            "additional_per_column": "ahead",
            "targets": [
                "all"
            ],
            "use_computed_amount_for_description": true
        }
    ],
    "requirements": "",
    "graphic_id": 25262,
    "large_graphic_id": 25262,
    "properties": {
        "is_formation_ability": true,
        "default_bonus_index": 0,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Trait: Cautious** (Guess)
> Eric increases the damage of all Champions by 100%, increased by 100% for each column they are behind him, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2165,
    "flavour_text": "",
    "description": {
        "desc": "Eric increases the damage of all Champions by $(amount)%, increased by $(amount___2)% for each column they are behind him, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "base_amount,100"
        },
        {
            "off_when_benched": true,
            "effect_string": "additional_amount,100"
        },
        {
            "off_when_benched": true,
            "effect_string": "hero_dps_multiplier_mult,0",
            "amount_func": "eric_trait",
            "base_amount_idx": 0,
            "additional_amount_idx": 1,
            "additional_per_column": "behind",
            "targets": [
                "all"
            ],
            "use_computed_amount_for_description": true
        }
    ],
    "requirements": "",
    "graphic_id": 25261,
    "large_graphic_id": 25261,
    "properties": {
        "is_formation_ability": true,
        "default_bonus_index": 0,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Trait: Sarcastic** (Guess)
> Eric increases the damage of adjacent Champions by 600%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2166,
    "flavour_text": "",
    "description": {
        "desc": "Eric increases the damage of adjacent Champions by $amount%."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "hero_dps_multiplier_mult,600",
            "targets": [
                "adj"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 25263,
    "large_graphic_id": 25263,
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
**Unassuming Force** (Guess)
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2167,
    "flavour_text": "",
    "description": "",
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "do_nothing,0"
        }
    ],
    "requirements": "",
    "graphic_id": 25265,
    "large_graphic_id": 25265,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Youthful Valor** (Guess)
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2168,
    "flavour_text": "",
    "description": "",
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "do_nothing,0"
        }
    ],
    "requirements": "",
    "graphic_id": 25266,
    "large_graphic_id": 25266,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Treasure Hunters** (Guess)
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2169,
    "flavour_text": "",
    "description": "",
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "do_nothing,0"
        }
    ],
    "requirements": "",
    "graphic_id": 25264,
    "large_graphic_id": 25264,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
        "owner_use_outgoing_description": true
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
            **Name**
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Armor Icon](images/eric/25228.png)</span><span class="itemTableIcon2">![Armor Icon](images/eric/25228.png)</span><span class="itemTableIcon3">![Armor Icon](images/eric/25229.png)</span><span class="itemTableIcon4">![Armor Icon](images/eric/25230.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Armor
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Belt Icon](images/eric/25231.png)</span><span class="itemTableIcon2">![Belt Icon](images/eric/25231.png)</span><span class="itemTableIcon3">![Belt Icon](images/eric/25232.png)</span><span class="itemTableIcon4">![Belt Icon](images/eric/25233.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Belt
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Cape Icon](images/eric/25234.png)</span><span class="itemTableIcon2">![Cape Icon](images/eric/25234.png)</span><span class="itemTableIcon3">![Cape Icon](images/eric/25235.png)</span><span class="itemTableIcon4">![Cape Icon](images/eric/25236.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Cape
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Clothing Icon](images/eric/25237.png)</span><span class="itemTableIcon2">![Clothing Icon](images/eric/25237.png)</span><span class="itemTableIcon3">![Clothing Icon](images/eric/25238.png)</span><span class="itemTableIcon4">![Clothing Icon](images/eric/25239.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Clothing
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Shield Icon](images/eric/25240.png)</span><span class="itemTableIcon2">![Shield Icon](images/eric/25240.png)</span><span class="itemTableIcon3">![Shield Icon](images/eric/25241.png)</span><span class="itemTableIcon4">![Shield Icon](images/eric/25242.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Shield
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Wealth Icon](images/eric/25243.png)</span><span class="itemTableIcon2">![Wealth Icon](images/eric/25243.png)</span><span class="itemTableIcon3">![Wealth Icon](images/eric/25244.png)</span><span class="itemTableIcon4">![Wealth Icon](images/eric/25245.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Wealth
        </span>
    </span>
</span>

# Feats

Unknown.

# Legendaries

Unknown.

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unlock Adventure: The Merry Map Misadventure (???)** (Complete Area 50)
> Help a poor map find its way home for the holidays.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Variant 1: TBD** (Complete Area 75)
> 
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Variant 2: TBD** (Complete Area 125)
> 
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Variant 3: TBD** (Complete Area 175)
> 
</div></div>

# Other Champion Images

<span class="championImagesColumn">
    <span class="championImagesRow">
        <span class="championImagesPortrait">
            ![Eric Console Portrait](images/eric/console.png)Console Portrait
        </span>
    </span>
    <span class="championImagesRow">
        <span class="championImagesChests">
            ![Eric Gold Chest Icon](images/eric/chest_gold.png)Gold Chest Icon
        </span>
        <span class="championImagesChests">
            ![Eric Silver Chest Icon](images/eric/chest_silver.png)Silver Chest Icon
        </span>
    </span>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*