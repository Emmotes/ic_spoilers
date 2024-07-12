[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsImage">
        ![PC Portrait for Ellywick](images/ellywick/portrait.png)Portrait
    </span>
</span>

# Ellywick

Ellywick Tumblestrum has created music of such stirring quality that she was once invited to the Feywild where she played for the Summer Queen and the Queen of Air and Darkness. So moved were the two queens that they gifted the bard with her instrument, Morningmist. Tumblestrum's affinity for the Feywild brought her and her frog companion, Groak, to the Witchlight Carnival, where she spins tales and sings songs about the Plane of Faerie.

# Changes

Ellywick is potentially a reworked champion in the Ahghairon's Day event on 7 August 2024.

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ultimate: Call Of The Feywild** (Guess)
> Ellywick discards her current hand and six feywild creatures run to Ellywick, damaging enemies as they come, and then again as they run away.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 786,
    "name": "Call Of The Feywild",
    "description": "Ellywick discards her current hand and six feywild creatures run around damaging enemies.",
    "long_description": "Ellywick discards her current hand and six feywild creatures run to Ellywick, damaging enemies as they come, and then again as they run away.",
    "graphic_id": 11256,
    "target": "none",
    "num_targets": 0,
    "aoe_radius": 0,
    "damage_modifier": 0.03,
    "cooldown": 600,
    "animations": [
        {
            "type": "ultimate_attack",
            "ultimate": "ellywick",
            "no_damage_display": true,
            "short_riff_sequence": 3
        }
    ],
    "tags": [
        "ranged",
        "multitarget",
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

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Powerful Following** (Guess)
> Ellywick increases the damage of Champions in the column behind her by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2027,
    "flavour_text": "",
    "description": {
        "desc": "$(source_hero) increases the damage of Champions in the column behind her by $(amount)%."
    },
    "effect_keys": [
        {
            "effect_string": "hero_dps_multiplier_mult,100",
            "off_when_benched": true,
            "show_bonus": true,
            "targets": [
                "prev_col"
            ],
            "amount_updated_listeners": [
                "slot_changed",
                "stacks_changed",
                "stat_changed,ellywick_cards_drawn_this_adventure"
            ],
            "changing_stack_upgade_ids": [
                15229
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 11251,
    "large_graphic_id": 11247,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": false,
        "formation_circle_icon": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Fortunate Soul** (Guess)
> Gold Find is increased by 50%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2028,
    "flavour_text": "",
    "description": {
        "desc": "Gold Find is increased by $(amount)%"
    },
    "effect_keys": [
        {
            "effect_string": "gold_multiplier_mult,50",
            "off_when_benched": true,
            "targets": [
                "active_campaign"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 11249,
    "large_graphic_id": 11245,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": false,
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Deck of Many Things** (Guess)
> Ellywick draws a random card from the Deck of Many Things after every 25th enemy kill or after 60 seconds, whichever comes first. She can draw up to 5 cards at once and most duplicate card effects stack multiplicatively. Cards are discarded when she uses her ultimate ability, Call Of The Feywild.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2029,
    "flavour_text": "",
    "description": {
        "desc": "Ellywick draws a random card from the Deck of Many Things after every 25th enemy kill or after 60 seconds, whichever comes first. She can draw up to 5 cards at once and most duplicate card effects stack multiplicatively. Cards are discarded when she uses her ultimate ability, Call Of The Feywild.",
        "post": {
            "conditions": [
                {
                    "condition": "not static_desc",
                    "desc": "^^$ellywick_deck_of_many_things_desc"
                }
            ]
        }
    },
    "effect_keys": [
        {
            "effect_string": "ellywick_deck_of_many_things",
            "off_when_benched": true,
            "card_draw_cooldown": 60,
            "monster_kills_for_card_draw": 25,
            "card_origin": [
                0,
                -82.5
            ],
            "overlay": {
                "manual_graphic": "ellywick_deck_of_many_things",
                "y": -65
            },
            "cards": [
                {
                    "type": "Knight",
                    "effect_key_index": 3,
                    "graphic_id": 24163,
                    "ellywick_graphic_id": 10916,
                    "is_debuff": true,
                    "ult_debuff": {
                        "effect_string": "increase_monster_damage,500",
                        "active_graphic_id": 24163,
                        "active_graphic_x": -20,
                        "active_graphic_y": -120,
                        "use_stack_as_frame": true,
                        "stack_as_frame_offset": -1,
                        "overlay_play_mode": "stopped",
                        "bottom": false,
                        "stacks_on_reapply": true,
                        "manual_stacking": true,
                        "max_stacks": 5,
                        "stacks_multiply": true,
                        "use_collection_source": false,
                        "stack_across_effects": false
                    }
                },
                {
                    "type": "Moon",
                    "effect_key_index": 5,
                    "graphic_id": 24164,
                    "ellywick_graphic_id": 10917,
                    "is_debuff": true,
                    "ult_base_amount": 10,
                    "ult_debuff": {
                        "effect_string": "monster_drop_gold,10",
                        "stacks_multiply": true,
                        "stacks_on_reapply": true,
                        "manual_stacking": true,
                        "use_collection_source": false,
                        "stack_across_effects": false
                    }
                },
                {
                    "type": "The_Fates",
                    "effect_key_index": 7,
                    "graphic_id": 24165,
                    "ellywick_graphic_id": 10913,
                    "is_debuff": false,
                    "ult_base_amount": 50,
                    "ult_debuff": {
                        "effect_string": "do_nothing,0"
                    }
                },
                {
                    "type": "Flames",
                    "effect_key_index": 9,
                    "graphic_id": 24166,
                    "ellywick_graphic_id": 10914,
                    "is_debuff": true,
                    "ult_debuff": {
                        "effect_string": "monster_speed_and_damage_decrease,50",
                        "active_graphic_id": 24166,
                        "active_graphic_x": 20,
                        "active_graphic_y": -120,
                        "use_stack_as_frame": true,
                        "stack_as_frame_offset": -1,
                        "overlay_play_mode": "stopped",
                        "bottom": false,
                        "stacks_on_reapply": true,
                        "manual_stacking": true,
                        "max_stacks": 5,
                        "stacks_multiply": true,
                        "use_collection_source": false,
                        "stack_across_effects": false
                    }
                },
                {
                    "type": "Gem",
                    "effect_key_index": 12,
                    "graphic_id": 24162,
                    "ellywick_graphic_id": 10915,
                    "is_debuff": false,
                    "ult_base_amount": 1,
                    "ult_debuff": {
                        "effect_string": "monster_health_decrease_by_tag,50,boss",
                        "only_affects_bosses": true
                    }
                }
            ],
            "knight_odds": 20,
            "moon_odds": 20,
            "gem_odds": 20,
            "the_fates_odds": 20,
            "flames_odds": 20,
            "knight_prioritized": false,
            "moon_prioritized": false,
            "gem_prioritized": false,
            "the_fates_prioritized": false,
            "flames_prioritized": false,
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "pre_stack_multiplier_from_fate_card,100",
            "dev_note": "The Fates card buffs all other cards pre-stack, so all other cards have their amount_expr use this upgrade_amount as well",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "pre_stack_knight,100",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "buff_upgrade,0,15227",
            "amount_expr": "upgrade_amount(15229,2)*upgrade_amount(15229,1)*0.01",
            "stacks_multiply": true,
            "manual_stacking": true,
            "show_bonus": true,
            "desc_forced_order": 1,
            "stack_label": "Knight Cards",
            "stack_title": "Card Count",
            "total_title": "Total Powerful Following Bonus"
        },
        {
            "effect_string": "pre_stack_moon,100",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "buff_upgrade,0,15228",
            "amount_expr": "upgrade_amount(15229,4)*upgrade_amount(15229,1)*0.01",
            "stacks_multiply": true,
            "manual_stacking": true,
            "show_bonus": true,
            "desc_forced_order": 2,
            "stack_label": "Moon Cards",
            "stack_title": "Card Count",
            "total_title": "Total Fortunate Soul Bonus"
        },
        {
            "effect_string": "pre_stack_fates,5",
            "effect_cap": 50,
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "buff_upgrade,0,15229,1",
            "amount_expr": "upgrade_amount(15229,6)",
            "stacks_multiply": true,
            "manual_stacking": true,
            "show_bonus": true,
            "desc_forced_order": 3,
            "stack_label": "Fate Cards",
            "stack_title": "Card Count",
            "total_title": "Total Other Cards Bonus"
        },
        {
            "effect_string": "pre_stack_flames,100",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "monster_speed_and_damage_increase,0",
            "amount_expr": "upgrade_amount(15229,8)",
            "stacks_multiply": true,
            "manual_stacking": true,
            "show_bonus": true,
            "desc_forced_order": 4,
            "stack_label": "Flame Cards",
            "stack_title": "Card Count",
            "total_title": "Total Monster Speed and Damage Bonus"
        },
        {
            "effect_string": "pre_stack_gems,10",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "pre_stack_gem_amount,0",
            "amount_expr": "upgrade_amount(15229,10)*upgrade_amount(15229,1)*0.01",
            "effect_cap": 100
        },
        {
            "effect_string": "increase_boss_gems_percent,0",
            "amount_expr": "upgrade_amount(15229,11)",
            "manual_stacking": true,
            "stacks_multiply": false,
            "show_bonus": true,
            "desc_forced_order": 5,
            "stack_label": "Gem Cards",
            "stack_title": "Card Count",
            "total_title": "Total Gem Drop Bonus"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": false,
        "show_incoming": false,
        "formation_circle_icon": false,
        "retain_on_slot_changed": true,
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
**Greatest Song in the Multiverse** (Guess)
> Ellywick counts the total number of cards she has drawn in the adventure. She increases the effect of Powerful Following by 3% for each card she has drawn, stacking multiplicatively and capping at 1,000 cards.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2030,
    "flavour_text": "",
    "description": {
        "desc": "Ellywick counts the total number of cards she has drawn in the adventure. She increases the effect of Powerful Following by 3% for each card she has drawn, stacking multiplicatively and capping at 1,000 cards."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,3,15227",
            "stacks_multiply": true,
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "post_process_expr": "min(GetSaveStat(`ellywick_cards_drawn_this_adventure`,true),1000)",
            "max_stacks": 1000,
            "show_bonus": true,
            "amount_updated_listeners": [
                "slot_changed",
                "stacks_changed",
                "stat_changed,ellywick_cards_drawn_this_adventure"
            ],
            "changing_stack_upgade_ids": [
                15229
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 11250,
    "large_graphic_id": 11246,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": false,
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> Ellywick unlocks her ultimate ability and, when she uses it, discards her current hand of cards. There is an instant effect based on each card discarded:  
>   
> Knight - All enemies currently spawned take 500% more damage from all attacks (stacks multiplicatively)  
> Moon - Instantly drop 10% of the gold from all currently spawned enemies (stacks multiplicatively)  
> Fates - Champions gain temporary hit points for 50% of their max health (stacks additively)  
> Flames - All currently spawned enemies move 50% slower and deal 50% less damage (stacks multiplicatively)  
> Gems - The next X bosses you fight have their max health reduced by 50% (X = # of cards).
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2034,
    "flavour_text": "",
    "description": {
        "desc": "Ellywick unlocks her ultimate ability and, when she uses it, discards her current hand of cards. There is an instant effect based on each card discarded:^^Knight - All enemies currently spawned take 500% more damage from all attacks (stacks multiplicatively)^Moon - Instantly drop 10% of the gold from all currently spawned enemies (stacks multiplicatively)^Fates - Champions gain temporary hit points for 50% of their max health (stacks additively)^Flames - All currently spawned enemies move 50% slower and deal 50% less damage (stacks multiplicatively)^Gems - The next X bosses you fight have their max health reduced by 50% (X = # of cards)"
    },
    "effect_keys": [
        {
            "effect_string": "ellywick_call_of_the_feywild",
            "off_when_benched": true,
            "short_riff_sequence": 4,
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "set_ultimate_attack"
        }
    ],
    "requirements": "",
    "graphic_id": 24160,
    "large_graphic_id": 24159,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": false,
        "formation_circle_icon": false,
        "show_incoming": false,
        "retain_on_slot_changed": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: For the Fans** (Guess)
> Additively increases the odds of Knight cards being drawn by 20% (additively reducing the odds of each other card by 5%).
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2031,
    "flavour_text": "",
    "description": {
        "desc": "Additively increases the odds of Knight cards being drawn by 20% (additively reducing the odds of each other card by 5%)"
    },
    "effect_keys": [
        {
            "effect_string": "change_upgrade_data,15229,0",
            "data": {
                "knight_odds": 40,
                "moon_odds": 15,
                "gem_odds": 15,
                "the_fates_odds": 15,
                "flames_odds": 15
            }
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": false,
        "formation_circle_icon": false,
        "show_incoming": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Faster Tempo** (Guess)
> Additively increases the odds of Moon cards being drawn by 20% (additively reducing the odds of each other card by 5%).
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2032,
    "flavour_text": "",
    "description": {
        "desc": "Additively increases the odds of Moon cards being drawn by 20% (additively reducing the odds of each other card by 5%)"
    },
    "effect_keys": [
        {
            "effect_string": "change_upgrade_data,15229,0",
            "data": {
                "knight_odds": 15,
                "moon_odds": 40,
                "gem_odds": 15,
                "the_fates_odds": 15,
                "flames_odds": 15
            }
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": false,
        "formation_circle_icon": false,
        "show_incoming": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: All That Sparkles** (Guess)
> Additively increases the odds of Gem cards being drawn by 20% (additively reducing the odds of each other card by 5%).
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2033,
    "flavour_text": "",
    "description": {
        "desc": "Additively increases the odds of Gem cards being drawn by 20% (additively reducing the odds of each other card by 5%)"
    },
    "effect_keys": [
        {
            "effect_string": "change_upgrade_data,15229,0",
            "data": {
                "knight_odds": 15,
                "moon_odds": 15,
                "gem_odds": 40,
                "the_fates_odds": 15,
                "flames_odds": 15
            }
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": false,
        "formation_circle_icon": false,
        "show_incoming": false
    }
}
</pre>
</p>
</details>
</div></div>

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![The Missing Lord (Ellywick) Icon](images/ellywick/3557.png) **Unlock Adventure: The Missing Lord (Ellywick)** (Complete Area 50)
> Search for the absent Open Lord of Waterdeep.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Pixie Trickery Icon](images/ellywick/11258.png) **Variant 1: Pixie Trickery** (Complete Area 75)
> A slot is taken up in the formation by a Pixie riding an intellect devourer, who is along to watch Ellywick do her thing.   
> Each time a boss arrives on screen, all Champions are stunned for 5 seconds. If Ellywick is in the formation, the stun does not take effect.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Fey Harmonies Icon](images/ellywick/11259.png) **Variant 2: Fey Harmonies** (Complete Area 125)
> Ellywick starts in your formation. She can be moved.   
> Every area, 2 Satyrs arrive to harmonize . While any Satyrs are on screen, all enemies can only be damaged by bards.  
> Only Champions with CHA 14 or higher can be used.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Draconic Dissonance Icon](images/ellywick/11260.png) **Variant 3: Draconic Dissonance** (Complete Area 175)
> Every area, 5 random chromatic Dragon Wyrmlings spawn with the second wave. Each type of Dragon buffs the Dragons on screen in a unique way. Buffs combine additively if multiples of the same dragon are spawned.   
> - White - When a Dragon attacks, it heals 20% of its health.  
> - Blue - Increase the normal attack cooldown of Champions by 0.5 seconds.  
> - Black - When a non-boss Dragon dies, there's a 25% chance that it immediately respawns.   
> - Red - Dragons move 100% faster.  
> - Green - Dragons deal 100% additional damage.   
> If Ellywick is in the formation, one fewer Wyrmling spawns in each area.
</div></div>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Ellywick" fill="#aaa" data-formationName="Ellywick" data-campaignName="Ahghairon's Day" width="324" height="140"><circle cx="175" cy="45" r="15"/><circle cx="175" cy="85" r="15"/><circle cx="175" cy="125" r="15"/><circle cx="135" cy="25" r="15"/><circle cx="95" cy="45" r="15"/><circle cx="95" cy="85" r="15"/><circle cx="55" cy="25" r="15"/><circle cx="15" cy="45" r="15"/><circle cx="15" cy="85" r="15"/><circle cx="15" cy="125" r="15"/><text x="205" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Ellywick</text><text x="205" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Ahghairon's Day</text></svg>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*