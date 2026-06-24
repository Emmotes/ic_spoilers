[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Jim](images/jim/portrait.png)
        </span>
        <span>
            Portrait
        </span>
    </span>
</span>

# Jim

James Winifred Darkmagic III is the scion of a mysterious, multiplanar wizarding family. As an entertainer and purveyor of the 'Jim Darkmagic Experience,' the legendary mage can often be found in markets and town squares performing feats of mundane legerdemain. The renown he has earned for these feats is nearly equaled by the reputation that follows him as a Chief Arcanist (and occasional arsonist) for Acquisitions Incorporated.

# Changes

Jim will be a reworked champion in the Ahghairon's Day event on 5 August 2026.

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Fan Club** (Guess)
> Increases the damage of Jim and everyone in the columns in front of and behind him by 400% for each affected Champion, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2821,
    "flavour_text": "",
    "description": {
        "desc": "Increases the damage of Jim and everyone in the columns in front of and behind him by $(amount)% for each affected Champion, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "skip_effect_key_desc": true,
            "effect_string": "pre_stack_amount,400"
        },
        {
            "off_when_benched": true,
            "effect_string": "hero_dps_multiplier_mult,0",
            "amount_expr": "upgrade_amount(20143,0)",
            "targets": [
                "self_and_behind_and_ahead"
            ],
            "use_computed_amount_for_description": true,
            "amount_func": "mult",
            "stacks_multiply": true,
            "stack_func": "per_upgrade_targets",
            "stack_func_data": {
                "upgrade_id": 20143,
                "upgrade_index": 1,
                "only_slots_with_heroes": true
            },
            "amount_updated_listeners": [
                "slot_changed",
                "upgrade_unlocked"
            ],
            "show_bonus": true
        }
    ],
    "requirements": [],
    "graphic_id": 6099,
    "large_graphic_id": 6103,
    "properties": {
        "is_formation_ability": true,
        "use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 1,
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Magical Mystery Tour** (Guess)
> The effect of Fan Club is increased by 50% each time an enemy, ally, or ally's equipment is polymorphed or transformed in some way, stacking multiplicatively up to 100 times. Stacks reset when changing areas. 20% of the stacks are lost when changing areas.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2822,
    "flavour_text": "",
    "description": {
        "desc": "The effect of Fan Club is increased by $(not_buffed amount)% each time an enemy, ally, or ally's equipment is polymorphed or transformed in some way, stacking multiplicatively up to $(max_stacks) times. Stacks reset when changing areas. 20% of the stacks are lost when changing areas"
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,50,20143",
            "stacks_multiply": true,
            "show_bonus": true,
            "max_stacks": 100,
            "stacks_on_trigger": "things_transformed",
            "more_triggers": [
                {
                    "trigger": "area_changed",
                    "action": {
                        "type": "reduce_percent",
                        "percent": 20
                    }
                }
            ]
        },
        {
            "off_when_benched": true,
            "effect_string": "jim_magical_mystery_tour",
            "graphic_id": 6092,
            "stacks_gained_per_offline_area_completed": 5
        }
    ],
    "requirements": [],
    "graphic_id": 20465,
    "large_graphic_id": 20457,
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
**Fashion Week** (Guess)
> The effect of Fan Club is increased by 200% for each Champion with a non-base skin equipped in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2823,
    "flavour_text": "",
    "description": {
        "desc": "The effect of Fan Club is increased by $(not_buffed amount)% for each Champion with a non-base skin equipped in the formation, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,200,20143",
            "amount_func": "mult",
            "stack_func": "per_skin",
            "stacks_multiply": true,
            "amount_updated_listeners": [
                "slot_changed",
                "skin_changed"
            ],
            "show_bonus": true
        }
    ],
    "requirements": [],
    "graphic_id": 20464,
    "large_graphic_id": 20456,
    "properties": {
        "is_formation_ability": true
    }
}
</pre>
</p>
</details>
</div></div>

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Darkmagic Cheer Squad** (Guess)
> Increases the effect of Fan Club by 400%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2824,
    "flavour_text": "",
    "description": {
        "desc": "Increases the effect of Fan Club by $(amount)%"
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,400,20143"
        }
    ],
    "requirements": [],
    "graphic_id": 0,
    "large_graphic_id": 0,
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
**Specialisation: Unpaid Extras** (Guess)
> Increases the effect of Fan Club by 100%. All members of Acquisitions Incorporated and The "C" Team in the formation join Jim's Fan Club, regardless of their position in the formation.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2825,
    "flavour_text": "",
    "description": {
        "desc": "Increases the effect of Fan Club by $(amount)%. All members of Acquisitions Incorporated and The \"C\" Team in the formation join Jim's Fan Club, regardless of their position in the formation."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,100,20143"
        },
        {
            "off_when_benched": true,
            "effect_string": "add_target_to_upgrade,,20143",
            "add_targets": [
                {
                    "type": "by_tags",
                    "tags": "acqinc|cteam"
                }
            ],
            "amount_updated_listeners": [
                "slot_changed"
            ]
        },
        {
            "dev_note": "this effect key is just for getting the number of champions targetted in the formation for the spec option post apply info",
            "effect_string": "do_nothing,0",
            "stack_func": "per_hero",
            "tag": "acqinc|cteam"
        }
    ],
    "requirements": [],
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 0,
        "formation_circle_icon": false,
        "spec_option_post_apply_info": "Acq. Inc. and \"C\" Team Champions in Formation: $num_stacks___3"
    }
}
</pre>
</p>
</details>
</div></div>

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unlock Adventure: Reclaiming the Past (Jim)** (Complete Area 50)
> Help Laeral Silverhand track down a retired Open Lord.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Spelling "Bee" Icon](images/jim/6106.png) **Variant 1: Spelling "Bee"** (Complete Area 75)
> The Champions continue to struggle to spell/pronounce "Ahghairon's Day," so spelling "Bees" spawn at random. Whenever a bee is killed, it decreases the damage of whoever killed it by 90% for 20 seconds. The effect stacks multiplicatively and the cooldown resets if they kill another bee before it expires.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Magical Misadventure Icon](images/jim/6107.png) **Variant 2: Magical Misadventure** (Complete Area 125)
> Only Champions whose base attacks are magic can be used.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Center of the Multiverse Icon](images/jim/6108.png) **Variant 3: Center of the Multiverse** (Complete Area 175)
> Jim starts out in the formation and can't be moved. Only formation slots which Jim narrowly considers useful to himself can be used.
</div></div>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Jim" fill="#aaa" data-formationName="Jim" data-campaignName="Ahghairon's Day" width="324" height="160"><circle cx="175" cy="85" r="15"/><circle cx="135" cy="25" r="15"/><circle cx="135" cy="65" r="15"/><circle cx="135" cy="105" r="15"/><circle cx="135" cy="145" r="15"/><circle cx="95" cy="85" r="15"/><circle cx="55" cy="65" r="15"/><circle cx="55" cy="105" r="15"/><circle cx="15" cy="45" r="15"/><circle cx="15" cy="125" r="15"/><text x="205" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Jim</text><text x="205" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Ahghairon's Day</text></svg>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*