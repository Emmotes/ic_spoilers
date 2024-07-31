[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsImage">
        ![PC Portrait for Kas](images/kas/portrait.png)Portrait
    </span>
    <span class="championPortraitsImage">
        ![Model GIF of Kas](images/kas/model.gif)Model
    </span>
</span>

# Kas

Kas, also known as Kas of Tycheron, Kas the Terrible, Kas the Bloody-Handed, Kas the Betrayer, Kas the Hateful, and Kas the Destroyer, was the most trusted lieutenant of the despotic arch-lich Vecna. He wielded the Sword of Kas in his master's name.

[Kas - Greyhawk Wiki](https://ghwiki.greyparticle.com/index.php/Kas)

# Basic Information

Kas will be a new champion in the Liars' Night event on 2 October 2024.

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
            <span style="margin-left:8px;">Human / Vampire (Guess)</span>
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
            <span style="margin-left:8px;">DPS / Healing (Guess)</span>
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
            <span style="margin-left:8px;">Lawful Evil (Guess)</span>
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

Unknown.
{% comment %}
<span class="formationBorder">
    ![Formation Layout](images/kas/formation.png)
</span>
{% endcomment %}

# Attacks

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Vengeful Swing** (Melee)
> Kas moves up to the closest enemy and swings his sword, dealing one hit to all enemies in a small area.  
> Cooldown: 5s (Cap 1.25s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 802,
    "name": "Vengeful Swing",
    "description": "Kas attacks the closest enemy and other nearby foes with a sweep of his sword.",
    "long_description": "Kas moves up to the closest enemy and swings his sword, dealing one hit to all enemies in a small area.",
    "graphic_id": 0,
    "target": "front",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 5,
    "animations": [
        {
            "type": "melee_attack",
            "damage_frame": 8,
            "target_offset_x": -40,
            "jump_sound": 30,
            "sound_frames": {
                "14": 154
            }
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

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ultimate Attack: Rise, Fallen Soldier!**
> Kas summons two specters that move towards enemies, dealing ultimate damage each second for 15 seconds.  
> Cooldown: 3s (Cap 0.75s)

<span style="font-size:1.2em;">ⓘ</span> *Note: Very short ultimate cooldowns are almost always for testing purposes and are likely to be increased later.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 803,
    "name": "Rise, Fallen Soldier!",
    "description": "Kas summons two specters that deal ultimate damage each second for 15 seconds.",
    "long_description": "Kas summons two specters that move towards enemies, dealing ultimate damage each second for 15 seconds.",
    "graphic_id": 24585,
    "target": "random",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 0.033,
    "cooldown": 3,
    "animations": [
        {
            "type": "melee_attack",
            "damage_frame": 8,
            "target_offset_x": -40,
            "jump_sound": 30,
            "sound_frames": {
                "14": 154
            }
        }
    ],
    "tags": [
        "melee",
        "ultimate"
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
**Unknown** (Guess)
> Kas is Undead and counts as "dead" for the purposes of effects that care about dead Champions, but "alive" for all other purposes. Via his abilities, Kas may cause one or more other Champions in the formation to become his Vampire Spawns, which are also Undead.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2080,
    "flavour_text": "",
    "description": {
        "desc": "Kas is Undead and counts as \"dead\" for the purposes of effects that care about dead Champions, but \"alive\" for all other purposes. Via his abilities, Kas may cause one or more other Champions in the formation to become his Vampire Spawns, which are also Undead."
    },
    "effect_keys": [
        {
            "effect_string": "appear_dead"
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

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Born Into Evil** (Guess)
> Kas increases his damage by 100% for each Evil Champion in the formation, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2081,
    "flavour_text": "",
    "description": {
        "desc": "Kas increases his damage by $(amount)% for each Evil Champion in the formation, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,100",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "hero_dps_multiplier_mult,0",
            "amount_expr": "upgrade_amount(15619,0)",
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasTag(`evil`)",
            "show_bonus": true,
            "stack_title": "Evil Champions",
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 24573,
    "large_graphic_id": 24567,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": true,
        "owner_use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Mortal Pawns** (Guess)
> Every time an area is completed, Kas gains Pawn stacks equal to the number of Champions in the formation that are not one of his Vampire Spawns. Each Pawn stack increases the effect of Born Into Evil by 1%, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2082,
    "flavour_text": "",
    "description": {
        "desc": "Every time an area is completed, Kas gains Pawn stacks equal to the number of Champions in the formation that are not one of his Vampire Spawns. Each Pawn stack increases the effect of Born Into Evil by $(amount___2)%, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "expression_on_trigger,area_complete",
            "per_trigger_expr": "AppendToSaveStat(`kas_mortal_pawn_stacks`, true, trigger_count*as_int(per_hero_count))",
            "per_hero_expr": "!is_undead"
        },
        {
            "effect_string": "pre_stack,1",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "buff_upgrade,0,15619,1",
            "amount_expr": "upgrade_amount(15620,1)",
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "post_process_expr": "GetSaveStat(`kas_mortal_pawn_stacks`, true)",
            "stack_title": "Pawn Stacks",
            "show_bonus": true,
            "use_computed_amount_for_description": true
        },
        {
            "effect_string": "abcd,100",
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "is_undead",
            "skip_effect_key_desc": true
        }
    ],
    "requirements": "",
    "graphic_id": 24575,
    "large_graphic_id": 24569,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
        "owner_use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Life Drain** (Guess)
> When an Undead Champion in the formation attacks, they regain $(amount) Hit Points.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2083,
    "flavour_text": "",
    "description": {
        "desc": "When an Undead Champion in the formation attacks, they regain $(amount) Hit Points."
    },
    "effect_keys": [
        {
            "effect_string": "effect_action_on_attack",
            "target_self": true,
            "hero_expr": "is_undead",
            "effects": [
                {
                    "effect_string": "heal_targets_by_amount,50",
                    "targets": [
                        "self"
                    ]
                }
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 24574,
    "large_graphic_id": 24568,
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
**Sword of Kas** (Guess)
> When a Champion that is not already Undead dies, they immediately resurrect at full health as a Vampire Spawn, counting as Undead for the rest of the adventure. The effect of Born Into Evil is increased by $(amount)% for each Undead Champion in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2084,
    "flavour_text": "",
    "description": {
        "desc": "When a Champion that is not already Undead dies, they immediately resurrect at full health as a Vampire Spawn, counting as Undead for the rest of the adventure. The effect of Born Into Evil is increased by $(amount)% for each Undead Champion in the formation, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "kas_spawn_of_kas",
            "resurrection_priority": -50
        }
    ],
    "requirements": "",
    "graphic_id": 24576,
    "large_graphic_id": 24570,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": false,
        "owner_use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0
    }
}
</pre>
</p>
</details>
</div></div>

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Kas the Destroyer** (Guess)
> Kas increases the effect of Life Drain by $(amount)% and evil Champions attack faster as their base attack cooldown is reduced by 0.5 seconds.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2085,
    "flavour_text": "",
    "description": {
        "desc": "Kas increases the effect of Life Drain by $(amount)% and evil Champions attack faster as their base attack cooldown is reduced by 0.5 seconds."
    },
    "effect_keys": [
        {
            "effect_string": "do_nothing"
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

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Kas the Bloody Handed** (Guess)
> Kas's damage against Boss enemies is increased by $(amount)%, and the effect of Born Into Evil is increased by $(amount)% for each Undead Champion in the formation.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2086,
    "flavour_text": "",
    "description": {
        "desc": "Kas's damage against Boss enemies is increased by $(amount)%, and the effect of Born Into Evil is increased by $(amount)% for each Undead Champion in the formation."
    },
    "effect_keys": [
        {
            "effect_string": "do_nothing"
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

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Kas the Betrayer** (Guess)
> Increase the effect of Born Into Evil by $(amount)%. In addition, Champions adjacent to Kas gain the Evil tag. This does not affect their other alignment tags, and doesn't affect whether they are eligible for the adventure.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2087,
    "flavour_text": "",
    "description": {
        "desc": "Increase the effect of Born Into Evil by $(amount)%. In addition, Champions adjacent to Kas gain the Evil tag. This does not affect their other alignment tags, and doesn't affect whether they are eligible for the adventure."
    },
    "effect_keys": [
        {
            "effect_string": "do_nothing"
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
            <span class="itemTableIcon1">![Legandof Icon](images/kas/24540.png)</span><span class="itemTableIcon2">![Legandof Icon](images/kas/24540.png)</span><span class="itemTableIcon3">![Legandof Icon](images/kas/24541.png)</span><span class="itemTableIcon4">![Legandof Icon](images/kas/24542.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Legandof
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Powers Icon](images/kas/24543.png)</span><span class="itemTableIcon2">![Powers Icon](images/kas/24543.png)</span><span class="itemTableIcon3">![Powers Icon](images/kas/24544.png)</span><span class="itemTableIcon4">![Powers Icon](images/kas/24545.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Powers
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Rodof Seven Parts Icon](images/kas/24546.png)</span><span class="itemTableIcon2">![Rodof Seven Parts Icon](images/kas/24546.png)</span><span class="itemTableIcon3">![Rodof Seven Parts Icon](images/kas/24547.png)</span><span class="itemTableIcon4">![Rodof Seven Parts Icon](images/kas/24548.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Rodof Seven Parts
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Swords Icon](images/kas/24549.png)</span><span class="itemTableIcon2">![Swords Icon](images/kas/24549.png)</span><span class="itemTableIcon3">![Swords Icon](images/kas/24550.png)</span><span class="itemTableIcon4">![Swords Icon](images/kas/24551.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Swords
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Vampire Connections Icon](images/kas/24552.png)</span><span class="itemTableIcon2">![Vampire Connections Icon](images/kas/24552.png)</span><span class="itemTableIcon3">![Vampire Connections Icon](images/kas/24553.png)</span><span class="itemTableIcon4">![Vampire Connections Icon](images/kas/24554.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Vampire Connections
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Vecna Spoils Icon](images/kas/24555.png)</span><span class="itemTableIcon2">![Vecna Spoils Icon](images/kas/24555.png)</span><span class="itemTableIcon3">![Vecna Spoils Icon](images/kas/24556.png)</span><span class="itemTableIcon4">![Vecna Spoils Icon](images/kas/24557.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Vecna Spoils
        </span>
    </span>
</span>

# Feats

Unknown.

# Legendaries

Unknown.

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unlock Adventure: The Trickster's Delight (Kas)** (Complete Area 50)
> Chase down a masked man who has performed a daring heist.
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
            ![Kas Console Portrait](images/kas/console.png)Console Portrait
        </span>
    </span>
    <span class="championImagesRow">
        <span class="championImagesChests">
            ![Kas Gold Chest Icon](images/kas/chest_gold.png)Gold Chest Icon
        </span>
        <span class="championImagesChests">
            ![Kas Silver Chest Icon](images/kas/chest_silver.png)Silver Chest Icon
        </span>
    </span>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*