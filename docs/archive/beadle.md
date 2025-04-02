[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Beadle](images/beadle/portrait.png)
        </span>
        <span>
        Portrait
        </span>
    </span>
</span>

# Beadle

Beadle and Grimm have been best friends & adventuring partners their entire lives. Together, they have faced the most dangerous foes their realm had to offer and built a respite alongside the frozen north's harsh realities: The Giant's Bane Tavern.

# Changes

Beadle will be a reworked champion in the Festival of Fools event on 2 April 2025.

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Attacks

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ultimate: Arcane Blast** (Guess)
> Beadle teleports and blasts all enemies with arcane magic, dealing ultimate damage and stunning them.  
> Cooldown: 300s (Cap 75s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 840,
    "name": "Arcane Strike",
    "description": "Beadle attacks all enemies, dealing ultimate damage and stunning them.",
    "long_description": "Beadle teleports and blasts all enemies with arcane magic, dealing ultimate damage and stunning them.",
    "graphic_id": 8181,
    "target": "all",
    "num_targets": 0,
    "aoe_radius": 0,
    "damage_modifier": 0.03,
    "cooldown": 300,
    "animations": [
        {
            "type": "beadle_ultimate_v2",
            "damage_frame": 8,
            "right_blast_offset_x": 40,
            "left_blast_offset_x": -40,
            "blast_offset_y": -40,
            "arcane_blast": {
                "graphic_id": 7699,
                "move_speed": 500,
                "max_scale": 2,
                "min_scale": 0.2,
                "min_scale_distance": 500
            },
            "hit_effect": "stun,5,none,0,1509"
        }
    ],
    "tags": [
        "ultimate"
    ],
    "damage_types": [
        "magic"
    ]
}
</pre>
</p>
</details>
</div></div>

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Inseparable** (Guess)
> Beadle & Grimm are so inseparable that if either one qualifies for an adventure restriction based on their tags, ages, ability scores, etc., then both can be used.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2240,
    "flavour_text": "",
    "description": {
        "desc": "Beadle & Grimm are so inseparable that if either one qualifies for an adventure restriction based on their tags, ages, ability scores, etc., then both can be used."
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
        "show_in_owner_outgoing": true,
        "effect_name": "Inseparable",
        "use_outgoing_description": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Brothers In Armors** (Guess)
> If Grimm is in the formation, all of Beadle's equipment item levels are increased by Grimm's base average item level.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2247,
    "flavour_text": "",
    "description": {
        "desc": "If Grimm is in the formation, all of Beadle's equipment item levels are increased by Grimm's base average item level."
    },
    "effect_keys": [
        {
            "off_when_benched": false,
            "effect_string": "item_levels_add,0",
            "targets": [
                "self"
            ],
            "use_computed_amount_for_description": true,
            "current_value_bonus_desc": "Total Bonus: $(bonus) Item Levels",
            "amount_updated_listeners": [
                "loot_changed",
                "slot_changed"
            ]
        },
        {
            "off_when_benched": false,
            "effect_string": "buff_upgrade_add_flat_amount,1,16721",
            "amount_func": "add",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "AverageILevels()",
            "per_hero_targets": [
                {
                    "type": "heroes",
                    "hero_ids": [
                        161
                    ]
                }
            ],
            "amount_updated_listeners": [
                "loot_changed",
                "slot_changed"
            ]
        }
    ],
    "requirements": [
        {
            "requirement": "hero_in_formation",
            "target_hero_id": 161
        }
    ],
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "show_outgoing_description": true,
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
**In The Shadows** (Guess)
> Beadle increases the damage of Champions within 2 slots of himself by 100%, and enemies that hit targets affected by this have a 20% chance to miss.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2241,
    "flavour_text": "",
    "description": {
        "conditions": [
            {
                "condition": "feat_assigned 2125",
                "desc": "Beadle increases the damage of Champions within 3 slots of himself by $amount%, and enemies that hit targets affected by this have a $amount___2% chance to miss."
            },
            {
                "desc": "Beadle increases the damage of Champions within 2 slots of himself by $amount%, and enemies that hit targets affected by this have a $amount___2% chance to miss."
            }
        ]
    },
    "effect_keys": [
        {
            "effect_string": "hero_dps_multiplier_mult,100",
            "targets": [
                {
                    "type": "distance",
                    "distance": 2
                }
            ],
            "amount_updated_listeners": [
                "loot_changed",
                "slot_changed"
            ]
        },
        {
            "effect_string": "evade_damage_change,20",
            "targets": [
                {
                    "type": "distance",
                    "distance": 2
                }
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 25984,
    "large_graphic_id": 25975,
    "properties": {
        "is_formation_ability": true,
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
**Sticky Fingers** (Guess)
> Whenever Beadle attacks an enemy he causes it to immediately drop 20% of the gold it would award on death. The enemy then stops and checks its pockets, stunning it for 2 seconds. This can only occur to each enemy 5 times.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2242,
    "flavour_text": "",
    "description": {
        "desc": "Whenever Beadle attacks an enemy he causes it to immediately drop $amount% of the gold it would award on death. The enemy then stops and checks its pockets, stunning it for 2 seconds. This can only occur to each enemy 5 times."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "beadle_sticky_fingers,20",
            "graphic": 25993,
            "stun_time": 2,
            "limit_per_enemy": 5
        }
    ],
    "requirements": "",
    "graphic_id": 25986,
    "large_graphic_id": 25977,
    "properties": {
        "is_formation_ability": true,
        "show_outgoing_description": true,
        "show_incoming": false,
        "use_outgoing_description": true,
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
**Share the Glory** (Guess)
> Most positional formation abilities that affect Beadle also affect Grimm if he is in the formation. If Grimm is already affected by the same ability, Beadle instead increases the effect of In The Shadows by 400%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2243,
    "flavour_text": "",
    "description": {
        "desc": "Most positional formation abilities that affect Beadle also affect Grimm if he is in the formation. If Grimm is already affected by the same ability, Beadle instead increases the effect of In The Shadows by 400%."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "beadle_share_the_glory,400,161,16722",
            "buff_effect_key_index": 1,
            "effect_scale_title": "Duplicated",
            "effect_scale_description": "Duplicated by"
        },
        {
            "effect_string": "buff_upgrade,400,16722",
            "stacks_on_trigger": "will_stack_manually",
            "stacks_multiply": true,
            "show_bonus": true,
            "stack_title": "In The Shadows buff stacks",
            "apply_manually": true
        }
    ],
    "requirements": [
        {
            "requirement": "hero_in_formation",
            "target_hero_id": 161
        }
    ],
    "graphic_id": 25985,
    "large_graphic_id": 25976,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "retain_on_slot_changed": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 1
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ultimate Tag Team** (Guess)
> When Beadle uses his ultimate ability in the same party as Grimm, Grimm's ultimate ability goes on cooldown and he gains one Tag Team stack. For each Tag Team stack Grimm has, his ultimate cooldown is reduced by 5 seconds, and his next ultimate attack deals 200% more damage, stacking multiplicatively. Tag Team stacks cap at 10 and reset when Grimm uses his ultimate ability.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2254,
    "flavour_text": "",
    "description": {
        "desc": "When Beadle uses his ultimate ability in the same party as Grimm, Grimm's ultimate ability goes on cooldown and he gains one Tag Team stack. For each Tag Team stack Grimm has, his ultimate cooldown is reduced by 5 seconds, and his next ultimate attack deals $amount% more damage, stacking multiplicatively. Tag Team stacks cap at 10 and reset when Grimm uses his ultimate ability."
    },
    "effect_keys": [
        {
            "off_when_benched": false,
            "effect_string": "ultimate_tag_team,200",
            "source_hero_id": 161,
            "target_hero_id": 108,
            "stack_max": 10,
            "cooldown_decrease": 5,
            "buff_effect_key_index": 1,
            "stat": "grimm_tag_team_stacks",
            "override_key_desc": "For each Tag Team stack Grimm has, his ultimate cooldown is reduced by 5 seconds, and his next ultimate attack deals $amount% more damage, stacking multiplicatively",
            "achievement_stat_name": "grimm_tag_team_max"
        },
        {
            "effect_string": "do_nothing,200",
            "stacks_on_trigger": "will_stack_manually",
            "stacks_multiply": true,
            "show_bonus": true,
            "apply_manually": true
        },
        {
            "effect_string": "stacks_data_binder_safe",
            "index": 0,
            "stat_name": "GrimmTagTeamStacks",
            "is_instanced_stat": true,
            "use_stat_defs": true,
            "skip_effect_key_desc": true
        }
    ],
    "requirements": "",
    "graphic_id": 25992,
    "large_graphic_id": 25983,
    "properties": {
        "is_formation_ability": true,
        "show_outgoing_description": true,
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

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Epic Equipment** (Guess)
> The effect of In The Shadows is increased by 20% for each piece of Epic or better equipment on Champions in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2248,
    "flavour_text": "",
    "description": {
        "desc": "The effect of In The Shadows is increased by $(not_buffed amount)% for each piece of Epic or better equipment on Champions in the formation, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,20,16722",
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "max_stacks": 60,
            "per_hero_expr": "NumEquipmentWithMinimumRarity(`Epic`)",
            "amount_updated_listeners": [
                "loot_changed",
                "slot_changed"
            ],
            "stacks_multiply": true,
            "show_bonus": true
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 25994,
    "properties": {
        "is_formation_ability": true,
        "show_outgoing_description": true,
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
**Specialisation: Premium Gear** (Guess)
> The effect of In The Shadows is increased by 0.075% for every item level on your formation's Champions' equipment, stacking multiplicatively. Each individual Champion can contribute at most 1,800 stacks.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2249,
    "flavour_text": "",
    "description": {
        "desc": "The effect of In The Shadows is increased by $(not_buffed amount)% for every item level on your formation's Champions' equipment, stacking multiplicatively. Each individual Champion can contribute at most 1,800 stacks."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,0.075,16722",
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "NumILevelsMax(1800)",
            "amount_updated_listeners": [
                "loot_changed",
                "slot_changed"
            ],
            "stacks_multiply": true,
            "show_bonus": true
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 25995,
    "properties": {
        "is_formation_ability": true,
        "show_outgoing_description": true,
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
**Specialisation: Shiniest Loot** (Guess)
> The effect of In The Shadows is increased by 30% for each piece of Shiny or Golden equipment on Champions in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2250,
    "flavour_text": "",
    "description": {
        "desc": "The effect of In The Shadows is increased by $(not_buffed amount)% for each piece of Shiny or Golden equipment on Champions in the formation, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,30,16722",
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "max_stacks": 60,
            "per_hero_expr": "NumEquipmentWithMinimumShininess(`Shiny`)",
            "amount_updated_listeners": [
                "loot_changed",
                "slot_changed"
            ],
            "stacks_multiply": true,
            "show_bonus": true
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 25996,
    "properties": {
        "is_formation_ability": true,
        "show_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0
    }
}
</pre>
</p>
</details>
</div></div>

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unlock Adventure: The Missing Lord (Beadle)** (Complete Area 50)
> Search for the absent Open Lord of Waterdeep.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Arvaiss' Next Trap Icon](images/beadle/8192.png) **Variant 1: Arvaiss' Next Trap** (Complete Area 75)
> Beadle starts in the formation. He can be moved, but not removed.  
> Only Champions within 2 slots of Beadle can deal damage.  
> Various creatures attack your formation, each with different abilities. See the buff icon for details.  
> Getting to Know Beadle: Beadle's In The Shadows ability buffs the damage of Champions within two slots of him.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Showoffs Icon](images/beadle/8193.png) **Variant 2: Showoffs** (Complete Area 125)
> Beadle takes up a slot in your formation. Only Champions with DEX of 14 or higher can be used.  
> Getting to Know Beadle (& Grimm!): While Grimm wouldn't normally be eligible for this adventure due to his low Dexterity, he can still be added to the formation due to the two of them being Inseparable.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![The Best Treasure Icon](images/beadle/8194.png) **Variant 3: The Best Treasure** (Complete Area 175)
> Beadle starts in the formation. He can be moved, but not removed.  
> Other than Beadle & Grimm, you may only use Champions that have at least one piece of Epic rarity, Shiny, or Golden equipment.  
> Enemies have 300% more health and attack twice as often.  
> Getting to know Beadle: Beadle's specialization choice improves his buffs based on the gear your Champions have. Choose the best specialization for your formation!
</div></div>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Beadle & Grimm" fill="#aaa" data-formationName="Beadle & Grimm" data-campaignName="Ahghairon's Day" width="362" height="160"><circle cx="135" cy="85" r="15"/><circle cx="135" cy="125" r="15"/><circle cx="95" cy="25" r="15"/><circle cx="95" cy="65" r="15"/><circle cx="95" cy="105" r="15"/><circle cx="95" cy="145" r="15"/><circle cx="55" cy="45" r="15"/><circle cx="55" cy="85" r="15"/><circle cx="15" cy="65" r="15"/><circle cx="15" cy="105" r="15"/><text x="165" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Beadle & Grimm</text><text x="165" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Ahghairon's Day</text></svg>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*