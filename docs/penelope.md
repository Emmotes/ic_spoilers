[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Penelope](images/penelope/portrait.png)
        </span>
        <span>
            Portrait
        </span>
    </span>
</span>

# Penelope

Penelope 'Half-Pint' is a halfling who just wants to be everyone's best friend, even if they are evil, or a plant, or a rock. With friends that already include a treant named Neverember, and a clan of chwinga that have adopted her, Penelope is ready for anything! She has the heart of a true hero and will always stand by her friends, until she goes into shrub mode of course.

# Changes

Penelope will be a reworked champion in the Feast of the Moon event on 4 November 2026.

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Have You Met My Friends** (Guess)
> Whenever Penelope attacks an enemy and doesn't kill it, all Champions deal 500% additional damage against them. This effect can stack multiplicatively up to 3 times, with buffs applying to the post-stack damage.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2988,
    "flavour_text": "",
    "description": {
        "desc": "Whenever Penelope attacks an enemy and doesn't kill it, all Champions deal $amount% additional damage against them. This effect can stack multiplicatively up to 3 times, with buffs applying to the post-stack damage."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "penelope_have_you_met_my_friends_v2,500",
            "debuffing_attack_ids": [
                334
            ],
            "debuff_effects": [
                {
                    "effect_string": "increase_monster_damage,$amount",
                    "stack_count_debug": true,
                    "default_stacks": 1,
                    "active_graphic_id": 664,
                    "manual_stacking": true,
                    "active_graphic_x": 0,
                    "active_graphic_y": -40,
                    "stacks_on_reapply": true,
                    "stacks_multiply": true,
                    "max_stacks": 3,
                    "stack_across_effects": false,
                    "use_collection_source": true
                }
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 9105,
    "large_graphic_id": 9104,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "retain_on_slot_changed": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Chwinga Mask** (Guess)
> When any enemy enters one of Penelope's Insect Swarms, Penelope dons her chwinga mask, calling an elemental friend to her aid. It sits on her shoulder while her mask is on. All Champions adjacent to Penelope gain the following charm(s) based on their tags. Charms last until the party changes areas.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2989,
    "flavour_text": "",
    "description": {
        "pre": "When any enemy enters one of Penelope's Insect Swarms, Penelope dons her chwinga mask, calling an elemental friend to her aid. It sits on her shoulder while her mask is on. All Champions adjacent to Penelope gain the following charm(s) based on their tags. Charms last until the party changes areas.",
        "post": {
            "conditions": [
                {
                    "condition": "not short_form",
                    "desc": "^^Healing Charm: Penelope heals affected Champions for $(amount___2) HP every second.^^Tools for the Job Charm: Penelope increases the damage of all Champions by $(not_buffed amount___3)% for each Champion affected by this charm. This effect stacks multiplicatively."
                }
            ]
        }
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,400",
            "skip_effect_key_desc": true
        },
        {
            "show_description": false,
            "effect_string": "penelope_chwinga_mask_v2",
            "buff_indicies": [
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9
            ]
        },
        {
            "apply_manually": true,
            "effect_string": "heal,100",
            "targets": [
                "adj"
            ],
            "filter_targets": [
                {
                    "type": "hero_expr",
                    "hero_expr": "HasTag(`tanking`)"
                }
            ],
            "amount_updated_listeners": [
                "slot_changed"
            ],
            "override_key_desc": "Healing Charm - Penelope heals $target for $amount every second"
        },
        {
            "apply_manually": true,
            "effect_string": "hero_dps_multiplier_mult,0",
            "amount_expr": "upgrade_amount(21235,0)",
            "targets": [
                "all"
            ],
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasTag(`healing`) || HasTag(`support`) || HasTag(`gold`)",
            "per_hero_targets": [
                "adj"
            ],
            "amount_updated_listeners": [
                "slot_changed"
            ],
            "show_bonus": true,
            "stack_title": "Tools for the Job Stacks",
            "total_title": "Tools for the Job Damage Bonus",
            "use_computed_amount_for_description": true,
            "override_key_desc": "Tools for the Job Charm - Penelope increases the damage of all Champions by $amount%"
        },
        {
            "apply_manually": true,
            "effect_string": "do_nothing",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasTag(`healing`) || HasTag(`support`) || HasTag(`gold`)",
            "per_hero_targets": [
                "adj"
            ]
        },
        {
            "apply_manually": true,
            "show_description": false,
            "effect_string": "do_nothing",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasTag(`tanking`)",
            "per_hero_targets": [
                "adj"
            ]
        },
        {
            "apply_manually": true,
            "show_description": false,
            "effect_string": "expression_on_trigger,slot_changed",
            "triggers": [
                {
                    "name": "on_broadcast_trigger",
                    "params": [
                        "penelope_chwinga_applied"
                    ]
                }
            ],
            "per_trigger_expr": "BroadcastTrigger(`penelope_support_trigger`, GetUpgradeStacks(21235, 4)) && BroadcastTrigger(`penelope_tanking_trigger`, GetUpgradeStacks(21235, 5))"
        },
        {
            "apply_manually": true,
            "show_description": false,
            "effect_string": "do_nothing",
            "active_graphic_id": 9098,
            "active_graphic_y": -40,
            "max_stacks": 6,
            "active_graphic_frame_from_stacks": true,
            "more_triggers": [
                {
                    "trigger": "on_broadcast_stacks,penelope_support_trigger",
                    "action": {
                        "type": "set_stacks"
                    }
                }
            ]
        },
        {
            "apply_manually": true,
            "show_description": false,
            "effect_string": "do_nothing",
            "active_graphic_id": 9097,
            "active_graphic_y": -40,
            "max_stacks": 6,
            "active_graphic_frame_from_stacks": true,
            "more_triggers": [
                {
                    "trigger": "on_broadcast_stacks,penelope_tanking_trigger",
                    "action": {
                        "type": "set_stacks"
                    }
                }
            ]
        },
        {
            "apply_manually": true,
            "show_description": false,
            "effect_string": "hero_graphic_override",
            "skin_property_prefix": "chwinga",
            "override_graphic_id": 9095,
            "active_graphic_id": 9096,
            "active_graphic_y": -40
        }
    ],
    "requirements": "",
    "graphic_id": 9107,
    "large_graphic_id": 9106,
    "properties": {
        "is_formation_ability": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "retain_on_slot_changed": true
    }
}
</pre>
</p>
</details>
</div></div>

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unlock Adventure: The Crypt of Legends (Penelope)** (Complete Area 50)
> Pay respects to the heroes of olde during the Feast of the Moon.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Half-Empty Crypts Icon](images/penelope/9112.png) **Variant 1: Half-Empty Crypts** (Complete Area 75)
> Grave Robbers spawn in each area While any Grave Robber remains alive, undead creatures move faster and deal more damage
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Half-Full Outlook Icon](images/penelope/9113.png) **Variant 2: Half-Full Outlook** (Complete Area 125)
> Awakened Cleaning Supplies spawn with each wave These magical cleaning supplies deal more damage and have hits-based health. Penelope can one-shot the cleaning supplies, and thus starts in the formation to help out (she can't be removed)
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Half-Pint Friends Icon](images/penelope/9114.png) **Variant 3: Half-Pint Friends** (Complete Area 175)
> Penelope starts in the formation and can not be moved or removed. Penelope attacks a bit faster because she's very excited to make new friends. Only Good Champions can be used.
</div></div>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Penelope" fill="#aaa" data-formationName="Penelope" data-campaignName="Feast of the Moon" width="338" height="140"><circle cx="175" cy="85" r="15"/><circle cx="135" cy="25" r="15"/><circle cx="135" cy="65" r="15"/><circle cx="135" cy="105" r="15"/><circle cx="95" cy="45" r="15"/><circle cx="95" cy="85" r="15"/><circle cx="95" cy="125" r="15"/><circle cx="55" cy="65" r="15"/><circle cx="55" cy="105" r="15"/><circle cx="15" cy="85" r="15"/><text x="205" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Penelope</text><text x="205" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Feast of the Moon</text></svg>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*