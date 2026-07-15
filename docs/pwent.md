[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Pwent](images/pwent/portrait.png)
        </span>
        <span>
            Portrait
        </span>
    </span>
</span>

# Pwent

Despite a reputation as a loud, gruff, and stinky dwarf who hates bathing, Thibbledorf Pwent is a loyal and beloved member of Clan Battlehammer. Known as 'Pwent' to his friends, he leads the Gutbusters of Mithral Hall, a dwarven battlerager squad focused on direct combat with little regard for their own safety. He wears armor completely covered in spikes to help rend the flesh of his enemies, and in the midst of battle Pwent often falls into a bloodrage, doing anything to protect his allies. While not an official member of the Companions of the Hall, Pwent will always aid his King when possible -- even beyond death...

# Changes

Pwent will be a reworked champion in the Highharvestide event on 2 September 2026.

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Can You SMELL That?** (Guess)
> Increases the damage of Champions not adjacent to Pwent by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2876,
    "flavour_text": "",
    "description": {
        "desc": "Increases the damage of Champions not adjacent to $source by $(amount)%."
    },
    "effect_keys": [
        {
            "effect_string": "hero_dps_multiplier_mult,100",
            "targets": [
                "non_adj"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 6357,
    "large_graphic_id": 6356,
    "properties": {
        "is_formation_ability": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Gutbuster Recruits** (Guess)
> When a Champion adjacent to Pwent scores a critical hit, Pwent increases the effect of $(upgrade_name id) by 50%. This can multiplicatively stack up to 50 times, with the stacks being reduced by 50% on area change.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2877,
    "flavour_text": "",
    "description": {
        "conditions": [
            {
                "condition": "upgrade_purchased 20273",
                "desc": "When a Dwarf Champion or a Champion not adjacent to $source scores a critical hit, $source increases the effect of $(upgrade_name id) by $(not_buffed amount)%. This can multiplicatively stack up to $(max_stacks) times, with the stacks reduced by 50% on area change."
            },
            {
                "desc": "When a Champion adjacent to $source scores a critical hit, $source increases the effect of $(upgrade_name id) by $(not_buffed amount)%. This can multiplicatively stack up to $(max_stacks) times, with the stacks being reduced by 50% on area change."
            }
        ]
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,50,20269",
            "max_stacks": 50,
            "stack_title": "Gutbuster Stacks",
            "stacks_multiply": true,
            "show_bonus": true,
            "stacks_on_trigger": "on_broadcast_stacks,pwent_gutbuster_trigger",
            "more_triggers": [
                {
                    "trigger": "area_changed",
                    "action": {
                        "type": "reduce_percent_down",
                        "percent": 50
                    }
                }
            ]
        },
        {
            "effect_string": "broadcast_on_trigger,pwent_gutbuster_trigger,pre_target_attack_crit",
            "targets": [
                "adj"
            ],
            "override_key_desc": "Each time $target deals a Critical Hit, they contribute a Gutbuster stack to $(source_hero)"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Bruenor, Me King!** (Guess)
> While not a member of the Companions of the Hall, Pwent fully supports them in their quests. Your formation gains one Mithral Hall stack. Pwent increases the damage bonus of 100 by 100% for each Mithral Hall stack you have, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2878,
    "flavour_text": "",
    "description": {
        "desc": "While not a member of the Companions of the Hall, $source fully supports them in their quests. Your formation gains one Mithral Hall stack. $source increases the damage bonus of $(upgrade_name id) by $(amount)% for each Mithral Hall stack you have, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,100"
        },
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,0,20269",
            "amount_expr": "upgrade_amount(20272,0)",
            "stack_func": "per_mithral_hall_stacks",
            "amount_func": "mult",
            "stacks_multiply": true,
            "show_bonus": true,
            "stack_title": "Total Mithral Hall Stacks",
            "total_title": "Total Bonus",
            "desc_forced_order": 2
        },
        {
            "off_when_benched": true,
            "outgoing_buffs": false,
            "effect_string": "pwent_mithral_hall_stacks,1",
            "manual_stacking": true,
            "stacks_multiply": false,
            "show_stacks": true,
            "stack_title": "Pwent Mithral Hall Stacks",
            "desc_forced_order": 1
        }
    ],
    "requirements": "",
    "graphic_id": 19580,
    "large_graphic_id": 19576,
    "properties": {
        "is_formation_ability": true,
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
**Specialisation: Recruiting Drive** (Guess)
> $(upgrade_name id) now triggers when non-adjacent Champions score critical hits, instead of adjacent Champions, but will also always trigger for any Dwarf Champions in the formation.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2879,
    "flavour_text": "",
    "description": {
        "desc": "$(upgrade_name id) now triggers when non-adjacent Champions score critical hits, instead of adjacent Champions, but will also always trigger for any Dwarf Champions in the formation."
    },
    "effect_keys": [
        {
            "effect_string": "change_upgrade_targets,20271",
            "new_targets": "non_adj",
            "effect_index": 1
        },
        {
            "off_when_benched": true,
            "effect_string": "add_target_to_upgrade,,20271",
            "add_targets": [
                {
                    "type": "by_tags",
                    "tags": "dwarf"
                }
            ],
            "amount_updated_listeners": [
                "slot_changed"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
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

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Scents of Mithral Hall** (Guess)
> Increases the effect of $(upgrade_name id) by 200% for each Dwarf Champion in the formation, stacking multiplicatively and including himself.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2880,
    "flavour_text": "",
    "description": {
        "desc": "Increases the effect of $(upgrade_name id) by $(not_buffed amount)% for each Dwarf Champion in the formation, stacking multiplicatively and including himself."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade_per_any_tagged_crusader_mult,200,20269,dwarf",
            "stacks_multiply": true
        }
    ],
    "requirements": "",
    "graphic_id": 19581,
    "large_graphic_id": 19577,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "type": "upgrade",
        "formation_circle_icon": false,
        "spec_option_post_apply_info": "Dwarf Champions: $num_stacks"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Critical Wound** (Guess)
> Attacks targeting enemies that Pwent has caused to Bleed have a 40% additive chance to be a critical hit, up from 20%. This effect is doubled for Dwarves.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2881,
    "flavour_text": "",
    "description": {
        "desc": "Attacks targeting enemies that $source has caused to Bleed have a $(total_bonus_crit_chance)% additive chance to be a critical hit, up from $(base_crit_chance)%. This effect is doubled for Dwarves."
    },
    "effect_keys": [
        {
            "effect_string": "pwent_bleed_crit_spec,20",
            "total_seconds": 20,
            "base_crit_chance": 20,
            "additional_crit_chance": 20,
            "total_bonus_crit_chance": 40,
            "debuffing_attack_ids": [
                635,
                229
            ],
            "debuff_before_damage": true,
            "debuff_effects": [
                {
                    "effect_string": "buff_incoming_crit_chance_add,$additional_crit_chance",
                    "for_time": "$total_seconds",
                    "time_stack_type": "time_reset",
                    "stack_across_effects": true
                },
                {
                    "effect_string": "crit_chance_if_source_has_tag,$additional_crit_chance",
                    "tag": "dwarf",
                    "for_time": "$total_seconds",
                    "time_stack_type": "time_reset",
                    "stack_across_effects": true
                }
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
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

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unlock Adventure: The Bandit's Harvest (Pwent)** (Complete Area 50)
> Bandits are attempting to pilfer the harvest during Highharvestide and must be stopped.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Underdark Reinforcements Icon](images/pwent/6364.png) **Variant 1: Underdark Reinforcements** (Complete Area 75)
> Extra strong Drow Cultists spawn in each area. The additional Drow cannot be damaged until they have been bled by Pwent. Pwent starts in the formation but can be moved or swapped out normally if you wish.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![The Plague Cometh Icon](images/pwent/6365.png) **Variant 2: The Plague Cometh** (Complete Area 125)
> Cursed cows spawn in each area. If they hit a Champion, the Champion contracts a Curse. Cursed Champions deal no damage and have their max health reduced by 50%. Every 5 seconds the Curse spreads to adjacent Champions. It is only removed by changing areas.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Somebody's Poisoned The Well! Icon](images/pwent/6366.png) **Variant 3: Somebody's Poisoned The Well!** (Complete Area 175)
> Pwent starts out in the formation and can not be moved, removed, or swapped out. Champions take damage equal to 20% of their maximum health every time they attack due to the poison. Pwent is immune to this poison.
</div></div>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Pwent" fill="#aaa" data-formationName="Pwent" data-campaignName="Highharvestide" width="319" height="100"><circle cx="175" cy="25" r="15"/><circle cx="175" cy="65" r="15"/><circle cx="135" cy="45" r="15"/><circle cx="135" cy="85" r="15"/><circle cx="95" cy="25" r="15"/><circle cx="95" cy="65" r="15"/><circle cx="55" cy="45" r="15"/><circle cx="55" cy="85" r="15"/><circle cx="15" cy="25" r="15"/><circle cx="15" cy="65" r="15"/><text x="205" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Pwent</text><text x="205" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Highharvestide</text></svg>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*