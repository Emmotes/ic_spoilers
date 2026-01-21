[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Kyre](images/kyre/portrait.png)
        </span>
        <span>
            Portrait
        </span>
    </span>
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![Model GIF of Kyre](images/kyre/model.gif)
        </span>
        <span>
            Model
        </span>
    </span>
</span>

# Kyre

Kyre has been confirmed as a new CNE original.

# Basic Information

Kyre will be a new champion in the Grand Revel event on 4 February 2026.

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
            <span style="margin-left:8px;">Human</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Class**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Monk</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Roles**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Support / Control (Guess)</span>
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
            <span style="margin-left:8px;">Non-binary (Guess)</span>
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
    <svg xmlns="http://www.w3.org/2000/svg" id="Kyre" fill="#aaa" data-formationName="Kyre" data-campaignName="Grand Revel" width="260" height="140"><circle cx="135" cy="45" r="15"/><circle cx="135" cy="85" r="15"/><circle cx="95" cy="25" r="15"/><circle cx="95" cy="65" r="15"/><circle cx="95" cy="105" r="15"/><circle cx="55" cy="45" r="15"/><circle cx="55" cy="85" r="15"/><circle cx="55" cy="125" r="15"/><circle cx="15" cy="65" r="15"/><circle cx="15" cy="105" r="15"/><text x="165" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Kyre</text><text x="165" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Grand Revel</text></svg>
</span>

# Attacks

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Radiant Sun Bolt** (Magic)
> Kyre attacks the enemy with the most remaining health with a searing bolt of magical radiance, dealing 1 hit.  
> Cooldown: 3.5s (Cap 0.875s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 935,
    "name": "Radiant Sun Bolt",
    "description": "Kyre attacks the toughest enemy for 1 hit.",
    "long_description": "Kyre attacks the enemy with the most remaining health with a searing bolt of magical radiance, dealing 1 hit.",
    "graphic_id": 0,
    "target": "highest_health",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 3.5,
    "animations": [
        {
            "type": "ranged_attack",
            "projectile": "pd_generic_projectile",
            "shoot_offset_y": -63,
            "shoot_offset_x": 100,
            "shoot_frame": 14,
            "shoot_sound": 149,
            "hit_sound": 133,
            "projectile_details": {
                "hash": "3991cd5b5876b1b70359d7edd687cf5f",
                "target_offset_y": 0,
                "projectile_speed": 2250,
                "projectile_graphic_id": 28290
            }
        }
    ],
    "tags": [
        "ranged",
        "magic"
    ],
    "damage_types": [
        "magic"
    ]
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Radiant Sun Bolt** (Magic)
> Kyre attacks the two enemies with the most remaining health with a searing bolt of magical radiance, dealing 1 hit to each target. (If only one target remains, deal 2 hits to that target.)  
> Cooldown: 3.5s (Cap 0.875s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 936,
    "name": "Radiant Sun Bolt",
    "description": "Kyre attacks the two toughest enemies for 1 hit each.",
    "long_description": "Kyre attacks the two enemies with the most remaining health with a searing bolt of magical radiance, dealing 1 hit to each target. (If only one target remains, deal 2 hits to that target.)",
    "graphic_id": 0,
    "target": "highest_health",
    "num_targets": 2,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 3.5,
    "animations": [
        {
            "type": "ranged_attack",
            "projectile": "pd_generic_projectile",
            "shoot_offset_y": -63,
            "shoot_offset_x": 100,
            "shoot_frame": 14,
            "shoot_sound": 149,
            "hit_sound": 133,
            "projectile_details": {
                "hash": "3991cd5b5876b1b70359d7edd687cf5f",
                "target_offset_y": 0,
                "projectile_speed": 2250,
                "projectile_graphic_id": 28290
            }
        }
    ],
    "tags": [
        "ranged",
        "magic",
        "multitarget"
    ],
    "damage_types": [
        "magic"
    ]
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ultimate Attack: Unknown**
> Kyre creates a wave of radiant light and fire, dealing 1 ultimate hit to enemies it envelopes.  
> Cooldown: 150s (Cap 37.5s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 937,
    "name": "Searing Arc Strike",
    "description": "Kyre creates an energy wave, dealing 1 ultimate hit to affected enemies.",
    "long_description": "Kyre creates a wave of radiant light and fire, dealing 1 ultimate hit to enemies it envelopes.",
    "graphic_id": 28335,
    "target": "front",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 0.03,
    "cooldown": 150,
    "animations": [
        {
            "type": "kyre_ultimate",
            "jump_to_target": true,
            "target_offset_x": -300
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
**Radiant Soul** (Guess)
> Kyre increases the damage of all Champions adjacent to them by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2593,
    "flavour_text": "",
    "description": {
        "desc": "Kyre increases the damage of all Champions adjacent to them by $amount%."
    },
    "effect_keys": [
        {
            "effect_string": "hero_dps_multiplier_mult,100",
            "targets": [
                "adj"
            ],
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 28322,
    "large_graphic_id": 28318,
    "properties": {
        "is_formation_ability": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Stunning Strike** (Guess)
> Kyre's normal attacks have a 100% chance to stun their target for 10 seconds. This chance is multiplicatively reduced by 25% each time they stun an enemy with this ability, but resets back to full when changing areas.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2594,
    "flavour_text": "",
    "description": {
        "desc": "Kyre's normal attacks have a $base_chance% chance to stun their $(if feat_assigned 2237)targets$(else)target$(fi) for $duration seconds. This chance is multiplicatively reduced by 25% each time they stun an enemy with this ability, but resets back to full when changing areas."
    },
    "effect_keys": [
        {
            "off_when_benched": false,
            "effect_string": "add_attack_stun,0",
            "base_chance": 100,
            "duration": 10,
            "graphic": 1509,
            "manual_stacking": true,
            "more_triggers": [
                {
                    "trigger": "monster_stunned_by_owner",
                    "action": {
                        "type": "add_stack"
                    }
                }
            ],
            "stack_title": "Stuns This Area",
            "show_stacks": true,
            "use_computed_amount_for_description": true,
            "amount_updated_listeners": [
                "area_changed",
                "owner_attack_ended"
            ]
        },
        {
            "off_when_benched": false,
            "effect_string": "stacks_data_binder_safe,0,kyre_max_stunned_in_single_area",
            "is_instanced_stat": false,
            "only_take_max": true,
            "use_stat_defs": true,
            "skip_effect_key_desc": true
        },
        {
            "off_when_benched": false,
            "effect_string": "kyre_stunning_strike",
            "attack_stun_index": 0,
            "base_chance": 100
        }
    ],
    "requirements": "",
    "graphic_id": 28323,
    "large_graphic_id": 28319,
    "properties": {
        "is_formation_ability": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "owner_use_outgoing_description": true,
        "show_incoming": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Invigorating Radiance** (Guess)
> Each time any Champion in the formation attacks a stunned enemy, Kyre gains a Radiance stack. Kyre increases the effect of Radiant Soul by 10% for each Radiance stack, stacking multiplicatively up to 25 stacks and resetting when changing areas.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2595,
    "flavour_text": "",
    "description": {
        "desc": "Each time any Champion in the formation attacks a stunned enemy, Kyre gains a Radiance stack. Kyre increases the effect of Radiant Soul by $amount% for each Radiance stack, stacking multiplicatively up to $(max_stacks___2) stacks and resetting when changing areas."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,10",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "buff_upgrade,0,18667",
            "stacks_multiply": true,
            "amount_expr": "upgrade_amount(18669,0)",
            "max_stacks": 25,
            "manual_stacking": true,
            "stack_title": "Radiance Stacks",
            "more_triggers": [
                {
                    "trigger": "area_changed",
                    "action": {
                        "type": "reset"
                    }
                },
                {
                    "trigger": "monster_attacked",
                    "action": {
                        "type": "add_stack",
                        "stunned_only": true
                    }
                }
            ],
            "show_bonus": true,
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 28321,
    "large_graphic_id": 28317,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "show_incoming": false,
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
**Flawless Strike** (Guess)
> Champions that attack a stunned enemy have a 20% additively increased chance to critically hit that enemy and deal 100% more critical damage.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2596,
    "flavour_text": "",
    "description": {
        "desc": "Champions that attack a stunned enemy have a $amount% additively increased chance to critically hit that enemy and deal $amount___2% more critical damage."
    },
    "effect_keys": [
        {
            "effect_string": "if_stunned_buff_base_crit_chance_add,20",
            "targets": [
                "all"
            ],
            "off_when_benched": true,
            "slot_change_updates_targets": true,
            "description": ""
        },
        {
            "effect_string": "increase_crit_damage_when_monster_stunned,100",
            "targets": [
                "all"
            ],
            "off_when_benched": true,
            "slot_change_updates_targets": true,
            "description": ""
        }
    ],
    "requirements": "",
    "graphic_id": 28320,
    "large_graphic_id": 28316,
    "properties": {
        "is_formation_ability": true,
        "use_outgoing_description": false,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "show_incoming": false,
        "default_bonus_index": 1
    }
}
</pre>
</p>
</details>
</div></div>

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Complete Control** (Guess)
> Increases the effect of Radiant Soul by 100% for each Champion in the formation with the Control role, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2597,
    "flavour_text": "",
    "description": {
        "desc": "Increases the effect of Radiant Soul by $amount% for each Champion in the formation with the Control role, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,100",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "buff_upgrade,100,18667",
            "stack_func": "per_hero_attribute",
            "amount_func": "mult",
            "amount_expr": "upgrade_amount(18671,0)",
            "amount_updated_listeners": [
                "slot_changed",
                "upgrade_unlocked",
                "feat_changed"
            ],
            "per_hero_expr": "HasTag(`control`)",
            "off_when_benched": true,
            "show_bonus": true
        }
    ],
    "requirements": "",
    "graphic_id": 28330,
    "large_graphic_id": 28330,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": true,
        "spec_option_post_apply_info": "Control Champions: $num_stacks___2",
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Faster Than Light** (Guess)
> Increases the effect of Radiant Soul by 100% for each Champion with a Dexterity of 16 or higher in the formation, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2598,
    "flavour_text": "",
    "description": {
        "desc": "Increases the effect of Radiant Soul by $amount% for each Champion with a Dexterity of 16 or higher in the formation, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,100",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "buff_upgrade,100,18667",
            "stack_func": "per_hero_attribute",
            "amount_func": "mult",
            "amount_expr": "upgrade_amount(18672,0)",
            "amount_updated_listeners": [
                "slot_changed",
                "upgrade_unlocked",
                "feat_changed"
            ],
            "per_hero_expr": "GetStat(`dex`) >= 16",
            "off_when_benched": true,
            "show_bonus": true
        }
    ],
    "requirements": "",
    "graphic_id": 28331,
    "large_graphic_id": 28331,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": true,
        "spec_option_post_apply_info": "DEX 16+ Champions: $num_stacks___2",
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Pure of Soul** (Guess)
> Increases the effect of Radiant Soul by 100% for each Good Champion in the formation, stacking multiplicatively. In addition, Champions adjacent to Kyre gain the Good tag. This does not affect their other alignment tags, and doesn't affect whether they are eligible for the adventure.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2599,
    "flavour_text": "",
    "description": {
        "desc": "Increases the effect of Radiant Soul by $amount% for each Good Champion in the formation, stacking multiplicatively. In addition, Champions adjacent to Kyre gain the Good tag. This does not affect their other alignment tags, and doesn't affect whether they are eligible for the adventure."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,100",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "buff_upgrade,100,18667",
            "stack_func": "per_hero_attribute",
            "amount_func": "mult",
            "amount_expr": "upgrade_amount(18673,0)",
            "amount_updated_listeners": [
                "slot_changed",
                "upgrade_unlocked",
                "feat_changed"
            ],
            "per_hero_expr": "HasTag(`good`)",
            "off_when_benched": true,
            "show_bonus": true
        },
        {
            "off_when_benched": true,
            "effect_string": "add_hero_tags,0,good",
            "targets": [
                "adj"
            ],
            "hide_amount_rate": true
        }
    ],
    "requirements": "",
    "graphic_id": 28332,
    "large_graphic_id": 28332,
    "properties": {
        "is_formation_ability": true,
        "formation_circle_icon": true,
        "spec_option_post_apply_info": "Qualifying Champions: $num_stacks___2",
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
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
        <span class="itemTableIcon" style="justify-content:flex-start">
            <span style="margin-left:8px;">**Icons**</span>
        </span>
        <span class="itemTableNameSmall">
            **Name**
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Accessories Icon](images/kyre/28230.png)</span><span class="itemTableIcon2">![Accessories Icon](images/kyre/28230.png)</span><span class="itemTableIcon3">![Accessories Icon](images/kyre/28231.png)</span><span class="itemTableIcon4">![Accessories Icon](images/kyre/28232.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Accessories
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Clothing Icon](images/kyre/28233.png)</span><span class="itemTableIcon2">![Clothing Icon](images/kyre/28233.png)</span><span class="itemTableIcon3">![Clothing Icon](images/kyre/28234.png)</span><span class="itemTableIcon4">![Clothing Icon](images/kyre/28235.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Clothing
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Mementos Icon](images/kyre/28236.png)</span><span class="itemTableIcon2">![Mementos Icon](images/kyre/28236.png)</span><span class="itemTableIcon3">![Mementos Icon](images/kyre/28237.png)</span><span class="itemTableIcon4">![Mementos Icon](images/kyre/28238.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Mementos
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Pilgrimage Icon](images/kyre/28239.png)</span><span class="itemTableIcon2">![Pilgrimage Icon](images/kyre/28239.png)</span><span class="itemTableIcon3">![Pilgrimage Icon](images/kyre/28240.png)</span><span class="itemTableIcon4">![Pilgrimage Icon](images/kyre/28241.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Pilgrimage
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Tattoos Icon](images/kyre/28242.png)</span><span class="itemTableIcon2">![Tattoos Icon](images/kyre/28242.png)</span><span class="itemTableIcon3">![Tattoos Icon](images/kyre/28243.png)</span><span class="itemTableIcon4">![Tattoos Icon](images/kyre/28244.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Tattoos
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Worship Icon](images/kyre/28245.png)</span><span class="itemTableIcon2">![Worship Icon](images/kyre/28245.png)</span><span class="itemTableIcon3">![Worship Icon](images/kyre/28246.png)</span><span class="itemTableIcon4">![Worship Icon](images/kyre/28247.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Worship
        </span>
    </span>
</span>

# Feats

Unknown.

# Legendaries

Unknown.

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unlock Adventure: The Missing Merchants (Kyre)** (Complete Area 50)
> Discover the fate of some merchants in the jungles of Chult.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![The Crawling Dark Icon](images/kyre/28324.png) **Variant 1: The Crawling Dark** (Complete Area 75)
> Kyre starts in the formation. They can't be moved or removed.   
> Only Kyre and Champions next to them can deal damage.  
> 1-2 Shadowy Rats spawn with each wave. They don't drop gold nor count towards quest progress.  
> <b>Getting to Know Kyre:</b> Kyre increases the damage of Champions next to them. Place your damage dealer to take the best advantage of these buffs!
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Absolutely Stunning Icon](images/kyre/28325.png) **Variant 2: Absolutely Stunning** (Complete Area 125)
> Kyre starts in the formation. They can't be moved or removed.   
> Champions deal 1% damage to enemies that are not stunned.  
> A Monk joins the formation. Champions adjacent to the Monk have a 10% chance to stun enemies they attack for 5 seconds.  
> 1-2 Shadow Goblins spawn with each wave. They don't drop gold nor count towards quest progress.  
> <b>Getting to Know Kyre:</b> Kyre can stun enemies and increase damage against them. Use them and other Champions that stun to get through these foes!
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Critical Allies Icon](images/kyre/28326.png) **Variant 3: Critical Allies** (Complete Area 175)
> Kyre starts in the formation. They can be moved, but not removed.   
> You may only use Good Champions, Control Champions, or Champions with a Dexterity of 16 or higher.  
> After area 50, bosses spawn with a segmented special shield with 5 hits which must be destroyed before their regular hit points appear. To destroy a special shield segment, an enemy must be hit with a critical hit.  
> 1-2 Shadows spawn with each wave. They don't drop gold nor count towards quest progress.  
> <b>Getting to Know Kyre:</b> Kyre's specialization choice determines which Champions they work best with. Who will you add to the formation?
</div></div>

# Other Champion Images

<span class="championImagesColumn">
    <span class="championImagesRow">
        <span class="championImagesPortrait">
            ![Kyre Console Portrait](images/kyre/console.png)Console Portrait
        </span>
    </span>
    <span class="championImagesRow">
        <span class="championImagesChests">
            ![Kyre Gold Chest Icon](images/kyre/chest_gold.png)Gold Chest Icon
        </span>
        <span class="championImagesChests">
            ![Kyre Silver Chest Icon](images/kyre/chest_silver.png)Silver Chest Icon
        </span>
    </span>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*