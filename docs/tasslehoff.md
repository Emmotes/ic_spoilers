[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Tasslehoff](images/tasslehoff/portrait.png)
        </span>
        <span>
            Portrait
        </span>
    </span>
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![Model WebP of Tasslehoff](images/tasslehoff/model.webp)
        </span>
        <span>
            Model
        </span>
    </span>
</span>

# Tasslehoff

Tasslehoff Burrfoot was born the son of unknown parents, but does have a little sister. Tas grew up with his parents and sister until 341 AC, when at the age of sixteen, he got the Wanderlust itch. He had a cousin Latchlifter Furrfoot, Uncle Remo Lockpick, an Uncle Bertie, and an Uncle Wilfre. He may have had an Uncle Trapspringer Furrfoot, but many kender claim relation to Uncle Trapspringer so this might not be true.

[Dragonlace Fandom Wiki](https://dragonlance.fandom.com/wiki/Tasslehoff_Burrfoot/){:target="_blank"}

# Basic Information

Tasslehoff will be a new champion in the Festival of Fools event on 1 April 2026.

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
            <span style="margin-left:8px;">Kender (Guess)</span>
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
            <span style="margin-left:8px;">Support / Speed / Control (Guess)</span>
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
            <span style="margin-left:8px;">Heroes of the Lance (Guess)</span>
        </span>
    </span>
</span>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Tasslehoff" fill="#aaa" data-formationName="Tasslehoff" data-campaignName="Festival of Fools" width="294" height="160"><circle cx="135" cy="85" r="15"/><circle cx="135" cy="125" r="15"/><circle cx="95" cy="25" r="15"/><circle cx="95" cy="65" r="15"/><circle cx="95" cy="105" r="15"/><circle cx="95" cy="145" r="15"/><circle cx="55" cy="45" r="15"/><circle cx="55" cy="85" r="15"/><circle cx="55" cy="125" r="15"/><circle cx="15" cy="65" r="15"/><text x="165" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Tasslehoff</text><text x="165" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Festival of Fools</text></svg>
</span>

# Attacks

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Hoopak** (Ranged)
> Tasslehoff fires a stone at the closest enemy, dealing one hit.  
> Cooldown: 3.5s (Cap 0.875s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 960,
    "name": "Hoopak",
    "description": "Tasslehoff fires a stone at the closest enemy, dealing one hit.",
    "long_description": "",
    "graphic_id": 0,
    "target": "front",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 3.5,
    "animations": [
        {
            "type": "ranged_attack",
            "projectile": "pd_generic_projectile",
            "shoot_offset_x": 48,
            "shoot_offset_y": -115,
            "shoot_frame": 31,
            "shoot_sound": 149,
            "hit_sound": 133,
            "projectile_details": {
                "hash": "hoopak",
                "projectile_speed": 1500,
                "rotation_speed": 467,
                "percent_height_offset": 12,
                "projectile_graphic_id": 28671,
                "__projectile_hit_graphic_id": 750,
                "trail": {
                    "lifespan": 0.2,
                    "spawn_rate": 367,
                    "particle_graphic_ids": [
                        12485
                    ],
                    "initial_velocity": {
                        "x": "0",
                        "y": "0"
                    },
                    "velocity_jitter": {
                        "x": "50",
                        "y": "50"
                    },
                    "alpha_lerp": {
                        "0": 0,
                        "0.1": 0.75,
                        "1": 0
                    },
                    "scale_lerp": [
                        {
                            "x": 0.25,
                            "y": 0.25
                        },
                        {
                            "x": 0,
                            "y": 0
                        }
                    ],
                    "tint": {
                        "r": 1,
                        "g": 1,
                        "b": 1,
                        "a": 1
                    }
                }
            }
        }
    ],
    "tags": [
        "ranged"
    ],
    "damage_types": [
        "ranged"
    ]
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ultimate Attack: I'm Not the Hero** (Guess)
> Tasslehoff encourages the next Champion to use their ultimate to deal 400% more damage with that ultimate.  
> Cooldown: 3.5s (Cap 0.875s)

<span style="font-size:1.2em;">ⓘ</span> *Note: Very short ultimate cooldowns are almost always for testing purposes and are likely to be increased later.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 961,
    "name": "I'm Not the Hero",
    "description": "Tasslehoff causes the next ultimate used to deal 400% more damage with that ultimate.",
    "long_description": "Tasslehoff encourages the next Champion to use their ultimate to deal 400% more damage with that ultimate.",
    "graphic_id": 28640,
    "target": "none",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 3.5,
    "animations": [
        {
            "content_set_id": 10,
            "type": "ultimate_attack",
            "ultimate": "dm",
            "no_damage_display": true,
            "no_cooldown_display": true,
            "hero_reset_blacklist": [],
            "shoot_offset_x": 50,
            "shoot_offset_y": -25,
            "shoot_frame": 8,
            "bonus_half_time_effect": {
                "effect_string": "global_dps_multiplier_mult,400"
            }
        }
    ],
    "tags": [
        "ranged"
    ],
    "damage_types": [
        "ranged"
    ]
}
</pre>
</p>
</details>
</div></div>

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> Tasslehoff is immune to being Stunned.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2642,
    "flavour_text": "",
    "description": {
        "desc": "Tasslehoff is immune to being Stunned."
    },
    "effect_keys": [
        {
            "effect_string": "hero_stun_immunity"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Diversion** (Guess)
> Tasslehoff prevents any Champion-sourced non-healing positional formation abilities from targeting his slot or adjacent slots. For each prevented ability per slot, he gains a Diversion stack. Tasslehoff increases the effect of his Map Collector specialization by 10% for each Diversion stack, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2643,
    "flavour_text": "",
    "description": {
        "desc": "Tasslehoff prevents any Champion-sourced non-healing positional formation abilities from targeting his slot or adjacent slots. For each prevented ability per slot, he gains a Diversion stack. Tasslehoff increases the effect of his Map Collector specialization by $amount% for each Diversion stack, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,10"
        },
        {
            "effect_string": "buff_upgrades,0,19240,19241,19242",
            "amount_expr": "upgrade_amount(19245,0)",
            "stacks_on_trigger": "will_stack_manually",
            "stacks_multiply": true,
            "show_bonus": true,
            "off_when_benched": true,
            "stack_title": "Blocked Abilities"
        },
        {
            "effect_string": "tasslehoff_diversion",
            "buff_effect_key_index": 1,
            "overlay": {
                "manual_graphic": "tasslehoff_diversion",
                "y": -40
            },
            "off_when_benched": true
        }
    ],
    "requirements": "",
    "graphic_id": 28632,
    "large_graphic_id": 28629,
    "properties": {
        "is_formation_ability": true,
        "is_positional_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": true,
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
**Borrower** (Guess)
> Each time the party completes an area and moves to the next one, Tasslehoff somehow comes into possession of some future quest items, setting his Found Item stacks to 7. When Tasslehoff attacks an enemy that can drop quest items, there is a 10% chance he spends a Found Item stack and adds a quest item to the party's quest progress.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2644,
    "flavour_text": "",
    "description": {
        "desc": "Each time the party completes an area and moves to the next one, Tasslehoff somehow comes into possession of some future quest items, setting his Found Item stacks to 7. When Tasslehoff attacks an enemy that can drop quest items, there is a $amount% chance he spends a Found Item stack and adds a quest item to the party's quest progress."
    },
    "effect_keys": [
        {
            "effect_string": "tasslehoff_borrower,10"
        },
        {
            "effect_string": "do_nothing,0",
            "manual_stacking": true,
            "stack_title": "Found Items",
            "show_stacks": true,
            "show_bonus": false
        }
    ],
    "requirements": "",
    "graphic_id": 28631,
    "large_graphic_id": 28628,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": true,
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
**Wanderlust** (Guess)
> Tasslehoff grows impatient if he remains in the same area for a long time. Tasslehoff increases the effect of his Map Collector specialization by 100% for every 10 seconds the party is in an area, stacking multiplicatively up to 12 times and resetting when changing areas.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2645,
    "flavour_text": "",
    "description": {
        "desc": "Tasslehoff grows impatient if he remains in the same area for a long time. Tasslehoff increases the effect of his Map Collector specialization by $(not_buffed amount)% for every 10 seconds the party is in an area, stacking multiplicatively up to $max_stacks times and resetting when changing areas."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrades,100,19240,19241,19242",
            "stacks_on_trigger": "on_timer,10",
            "max_stacks": 12,
            "area_change_resets_stacks": true,
            "off_when_benched": true,
            "clear_stacks_on_deactivate": false,
            "show_bonus": true,
            "stacks_multiply": true,
            "time_per_stack": 10
        },
        {
            "effect_string": "tasslehoff_wanderlust",
            "buff_index": 0
        }
    ],
    "requirements": "",
    "graphic_id": 28633,
    "large_graphic_id": 28630,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": true
    }
}
</pre>
</p>
</details>
</div></div>

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Map Collector: Pre-Cataclysm** (Guess)
> Tasslehoff increases the damage of Champions in the rear-most column by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2646,
    "flavour_text": "",
    "description": {
        "desc": "Tasslehoff increases the damage of Champions in the rear-most column by $amount%."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "hero_dps_multiplier_mult,100",
            "targets": [
                {
                    "type": "col_num",
                    "start_from_back": true,
                    "column": 0
                }
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 28635,
    "large_graphic_id": 28635,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Map Collector: Time of Darkness** (Guess)
> Tasslehoff increases the damage of Champions in the second to rear-most column by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2647,
    "flavour_text": "",
    "description": {
        "desc": "Tasslehoff increases the damage of Champions in the second to rear-most column by $amount%"
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "hero_dps_multiplier_mult,100",
            "targets": [
                {
                    "type": "col_num",
                    "start_from_back": true,
                    "column": 1
                }
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 28636,
    "large_graphic_id": 28636,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Map Collector: War of the Lance** (Guess)
> Tasslehoff increases the damage of Champions in the third to rear-most column by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2648,
    "flavour_text": "",
    "description": {
        "desc": "Tasslehoff increases the damage of Champions in the third to rear-most column by $amount%"
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "hero_dps_multiplier_mult,100",
            "targets": [
                {
                    "type": "col_num",
                    "start_from_back": true,
                    "column": 2
                }
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 28637,
    "large_graphic_id": 28637,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Old Friends** (Guess)
> Tasslehoff increases the effect of his Map Collector specialization by 100% for each Hero of the Lance and Champions that are 38 years and older in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2649,
    "flavour_text": "",
    "description": {
        "desc": "Tasslehoff increases the effect of his Map Collector specialization by $(not_buffed amount)% for each Hero of the Lance and Champions that are 38 years and older in the formation, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrades,100,19240,19241,19242",
            "amount_func": "mult",
            "stacks_multiply": true,
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "age>=38 || HasTag(`heroeslance`)",
            "amount_updated_listeners": [
                "slot_changed"
            ],
            "stack_title": "Old Friends",
            "show_bonus": true
        }
    ],
    "requirements": "",
    "graphic_id": 28638,
    "large_graphic_id": 28638,
    "properties": {
        "is_formation_ability": true,
        "spec_option_post_apply_info": "Qualified Champions: $num_stacks"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Fast Friends** (Guess)
> Tasslehoff increases the effect of his Map Collector specialization by 100% for each Speed Champion and/or Champion with a Dexterity of 16 or higher in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2650,
    "flavour_text": "",
    "description": {
        "desc": "Tasslehoff increases the effect of his Map Collector specialization by $(not_buffed amount)% for each Speed Champion and/or Champion with a Dexterity of 16 or higher in the formation, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrades,100,19240,19241,19242",
            "amount_func": "mult",
            "stacks_multiply": true,
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "GetStat(`dex`) >= 16 || HasTag(`speed`)",
            "amount_updated_listeners": [
                "slot_changed"
            ],
            "stack_title": "Fast Friends",
            "show_bonus": true
        }
    ],
    "requirements": "",
    "graphic_id": 28634,
    "large_graphic_id": 28634,
    "properties": {
        "is_formation_ability": true,
        "spec_option_post_apply_info": "Qualified Champions: $num_stacks"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Small Friends** (Guess)
> Tasslehoff increases the effect of his Map Collector specialization by 100% for each dwarf, fairy, gnome, goblin, halfling, kender, kobold, and/or plasmoid Champion in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2651,
    "flavour_text": "",
    "description": {
        "desc": "Tasslehoff increases the effect of his Map Collector specialization by $(not_buffed amount)% for each dwarf, fairy, gnome, goblin, halfling, kender, kobold, and/or plasmoid Champion in the formation, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrades,100,19240,19241,19242",
            "amount_func": "mult",
            "stacks_multiply": true,
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasTag(`dwarf`) || HasTag(`fairy`) || HasTag(`gnome`) || HasTag(`goblin`) || HasTag(`halfling`) || HasTag(`kender`) || HasTag(`kobold`) || HasTag(`plasmoid`)",
            "amount_updated_listeners": [
                "slot_changed"
            ],
            "stack_title": "Small Friends",
            "show_bonus": true
        }
    ],
    "requirements": "",
    "graphic_id": 28639,
    "large_graphic_id": 28639,
    "properties": {
        "is_formation_ability": true,
        "spec_option_post_apply_info": "Qualified Champions: $num_stacks"
    }
}
</pre>
</p>
</details>
</div></div>

# Items

Unknown.

# Feats

Unknown.

# Legendaries

Unknown.

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unlock Adventure: A Fool's Errand (Tasslehoff)** (Complete Area 50)
> Save the village from a foolish prank gone wrong.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Did I Ever Tell You About...? Icon](images/tasslehoff/28625.png) **Variant 1: Did I Ever Tell You About...?** (Complete Area 75)
> Tasslehoff starts in the formation. He can be moved, but not removed.  
> Only Tasslehoff and Champions in the 3 rear-most columns can deal damage.  
> Champions next to Tasslehoff attack slower due to his stories. Their base attack cooldowns are increased by 2 seconds.  
> 1-2 Bozak Draconians spawn with each wave. They don't drop gold nor count towards quest progress.  
> <b>Getting to Know Tasslehoff:</b> Tasslehoff's buff can be set to one of the three columns in the back of the formation. Place your damage dealers to take advantage of this!
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Fizban's Fabulous Friendship Icon](images/tasslehoff/28626.png) **Variant 2: Fizban's Fabulous Friendship** (Complete Area 125)
> Tasslehoff starts in the formation. He can be moved, but not removed.  
> Fizban joins the formation. Champions in Fizban's column deal 1000% additional damage. This bonus counts as a positional formation ability.  
> You may only use Champions that have positional formation abilities.  
> Only Tasslehoff and Champions not next to him can deal damage.  
> 1-2 Baaz Draconians spawn with each wave. They don't drop gold nor count towards quest progress.  
> In each boss area, a Sivak Draconian boss spawns as part of the first wave. (Monster ID 2335) It must also be defeated to progress.  
> <b>Getting to Know Tasslehoff:</b> Tasslehoff's Diversion ability turns off positional formation buffs affecting his slot and neighboring slots, but his buff increases in power each time that happens. Place your damage dealer away from Tasslehoff to get the most of this!
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![A Loyal Friend Icon](images/tasslehoff/28627.png) **Variant 3: A Loyal Friend** (Complete Area 175)
> Tasslehoff starts in the formation. He can be moved, but not removed.  
> You may only use Champions that count for any of Tasslehoff's second specialization choices.  
> Only Tasslehoff and Champions not next to him can deal damage.  
> The enemy/boss enrage bar starts out on the screen and begins to fill immediately. When one or more Monstrosity enemies are alive, the bar fills four times faster.  
> 1-2 Kapak Draconians spawn with each wave. They don't drop gold nor count towards quest progress.  
> In each boss area, an Aurak Draconian boss spawns as part of the first wave. It must also be defeated to progress.  
> <b>Getting to Know Tasslehoff:</b> Tasslehoff's second specialization choice determines which Champions he works best with. Who will you choose?
</div></div>

# Other Champion Images

<span class="championImagesColumn">
    <span class="championImagesRow">
        <span class="championImagesPortrait">
            ![Tasslehoff Console Portrait](images/tasslehoff/console.png)Console Portrait
        </span>
    </span>
    <span class="championImagesRow">
        <span class="championImagesChests">
            ![Tasslehoff Gold Chest Icon](images/tasslehoff/chest_gold.png)Gold Chest Icon
        </span>
        <span class="championImagesChests">
            ![Tasslehoff Silver Chest Icon](images/tasslehoff/chest_silver.png)Silver Chest Icon
        </span>
    </span>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*