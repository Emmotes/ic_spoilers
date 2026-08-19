[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Brig](images/brig/portrait.png)
        </span>
        <span>
            Portrait
        </span>
    </span>
</span>

# Brig

Harbinger of mayhem and music, Brig Hellclaw causes mischief anywhere he goes.  As a member of The Sirens of the Realms, he's always on the lookout for the next place to perform.  He prefers singing over combat, but when fighting is inevitable, he's all in!  Together with his Almiraj pet Spikey, when Brig's on the loose you never know what to expect!  His trusty wand of wonder could bring a curse or a boon, but it's all in another day's work for Brig!

# Changes

Brig will be a reworked champion in the Liars' Night event on 7 October 2026.

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Hype** (Guess)
> Brig increases the damage of everyone in the formation by 100%. For each Hype stack the buff is increased by 50%, stacking multiplicatively and then applying multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2939,
    "flavour_text": "",
    "description": {
        "desc": "Brig increases the damage of everyone in the formation by $(not_buffed amount)%. For each Hype stack the buff is increased by $(not_buffed amount___2)%, stacking multiplicatively and then applying multiplicatively."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "brig_hype_base_bonus,100"
        },
        {
            "off_when_benched": true,
            "effect_string": "brig_hype_stack_bonus,50",
            "manual_stacking": true,
            "stacks_multiply": true,
            "stack_title": "Hype Stacks",
            "total_title": "Hype Bonus",
            "show_bonus": true,
            "desc_forced_order": 0
        },
        {
            "off_when_benched": true,
            "effect_string": "hero_dps_multiplier_mult,0",
            "targets": [
                "all"
            ],
            "amount_expr": "upgrade_amount(20708,0)+upgrade_amount(20708,1)",
            "show_bonus_multiplier": true,
            "prepend_line_break": false,
            "show_bonus": true,
            "desc_forced_order": 1
        },
        {
            "off_when_benched": true,
            "effect_string": "brig_hype_handler_v2",
            "index": 1
        }
    ],
    "requirements": "",
    "graphic_id": 11851,
    "large_graphic_id": 11846,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "indexed_effect_properties": true,
        "per_effect_index_bonuses": true,
        "default_bonus_index": 2,
        "retain_on_slot_changed": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Volume Up** (Guess)
> Increase the damage bonus of Hype based on the highest number of Hype stacks that Brig has ever had at once. The increase is 100% for every 3 Hype stack, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2940,
    "flavour_text": "",
    "description": {
        "desc": "Increase the damage bonus of Hype based on the highest number of Hype stacks that Brig has ever had at once. The increase is $amount% for every $per_hype_stack___2 Hype stack, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack,100",
            "skip_effect_key_desc": true
        },
        {
            "off_when_benched": true,
            "effect_string": "brig_volume_up,0",
            "per_hype_stack": 3
        },
        {
            "off_when_benched": true,
            "effect_string": "buff_upgrade,100,20708,2",
            "amount_expr": "upgrade_amount(20712,0)",
            "stacks_multiply": true,
            "show_bonus": true,
            "manual_stacking": true
        }
    ],
    "requirements": "",
    "graphic_id": 11854,
    "large_graphic_id": 11849,
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

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Siren's Chant** (Guess)
> Increases the effect of Brig's Hype by 200% for each Champion in the formation who is a Bard, has a CHA score of 16 or higher, or is part of the Sirens of the Realms affiliation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2941,
    "flavour_text": "",
    "description": {
        "desc": "Increases the effect of Brig's Hype by $(not_buffed amount)% for each Champion in the formation who is a Bard, has a CHA score of 16 or higher, or is part of the Sirens of the Realms affiliation, stacking multiplicatively."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,200,20708,2",
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "HasTag(`bard`) || GetStat(`cha`) >= 16 || HasTag(`sirensreal`)",
            "show_bonus": true,
            "stack_title": "Qualified Champions",
            "amount_updated_listeners": [
                "slot_changed",
                "hero_tags_changed",
                "stats_changed"
            ]
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
        "default_bonus_index": 0
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Rallying Chord** (Guess)
> Brig's Hype is increased by 5 while at least one enemy has been defeated within the last 10 seconds. If no enemy has been defeated in the last 20 seconds, Brig gains 1 Hype stack each time a unique Champion attacks, up to a maximum of 10 Hype stacks.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2942,
    "flavour_text": "",
    "description": {
        "pre": "Brig's Hype is increased by 5 while at least one enemy has been defeated within the last 10 seconds. If no enemy has been defeated in the last 20 seconds, Brig gains 1 Hype stack each time a unique Champion attacks, up to a maximum of 10 Hype stacks.",
        "post": {
            "conditions": [
                {
                    "condition": "not static_desc",
                    "desc": "^^Seconds Since Last Enemy Defeated: $(brig_rally_chord_seconds_since_last_kill_v2)^Rallying Chord Hype Stacks: $(brig_rally_chord_stacks_v2)"
                }
            ]
        }
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "brig_rallying_chord,0"
        }
    ],
    "requirements": "",
    "graphic_id": 11853,
    "large_graphic_id": 11848,
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
**Inspired Bard** (Guess)
> Brig gains 1 Hype stack for each adjacent Champion. He gains an additional Hype stack for each adjacent Champion whose listed attack damage is higher than his.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2943,
    "flavour_text": "",
    "description": {
        "pre": "Brig gains 1 Hype stack for each adjacent Champion. He gains an additional Hype stack for each adjacent Champion whose listed attack damage is higher than his.",
        "post": {
            "conditions": [
                {
                    "condition": "not static_desc",
                    "desc": "^^Inspired Bard Hype Stacks: $(brig_inspired_bard_stacks_v2)"
                }
            ]
        }
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "brig_inspired_bard,0"
        }
    ],
    "requirements": "",
    "graphic_id": 11852,
    "large_graphic_id": 11847,
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
**Critical Moment** (Guess)
> Brig gains 1 Hype stack for every 5 enemies on the screen, rounded up. He gains an additional 10 Hype stacks whenever a boss enemy is on the screen.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2944,
    "flavour_text": "",
    "description": {
        "pre": "Brig gains 1 Hype stack for every 5 enemies on the screen, rounded up. He gains an additional 10 Hype stacks whenever a boss enemy is on the screen.",
        "post": {
            "conditions": [
                {
                    "condition": "not static_desc",
                    "desc": "^^Enemies On Screen: $(brig_critical_moment_num_monsters_on_screen_v2)^Critical Moment Hype Stacks: $(brig_critical_moment_stacks_v2)"
                }
            ]
        }
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "brig_critical_moment,0"
        }
    ],
    "requirements": "",
    "graphic_id": 11850,
    "large_graphic_id": 11845,
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
**Specialisation: "Back"-Up Singer** (Guess)
> Brig gains 2 Hype stacks for each Champion in front of him in the formation.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2945,
    "flavour_text": "",
    "description": {
        "pre": "Brig gains 2 Hype stacks for each Champion in front of him in the formation.",
        "post": {
            "conditions": [
                {
                    "condition": "not static_desc",
                    "desc": "^^\"Back\"-Up Singer Stacks: $(brig_backup_singer_stacks_v2)"
                }
            ]
        }
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "brig_backup_singer,0"
        }
    ],
    "requirements": "",
    "graphic_id": 11855,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "type": "upgrade"
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Cream of the Crop** (Guess)
> Brig gains 2 Hype stacks for each Champion in the formation whose listed attack damage is lower than himself.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2946,
    "flavour_text": "",
    "description": {
        "pre": "Brig gains 2 Hype stacks for each Champion in the formation whose listed attack damage is lower than himself.",
        "post": {
            "conditions": [
                {
                    "condition": "not static_desc",
                    "desc": "^^Cream of the Crop Stacks: $(brig_cream_of_the_crop_stacks_v2)"
                }
            ]
        }
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "brig_cream_of_the_crop,0"
        }
    ],
    "requirements": "",
    "graphic_id": 11856,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "type": "upgrade"
    }
}
</pre>
</p>
</details>
</div></div>

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unlock Adventure: The Trickster's Delight (Brig)** (Complete Area 50)
> Chase down a masked man who has performed a daring heist.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Dueling Bards Icon](images/brig/11860.png) **Variant 1: Dueling Bards** (Complete Area 75)
> Brig starts in the formation. He can be moved, but not removed.  
> In each area, a duergar bard appears. The bard can only be damaged by other bards.   
> Bard Champions deal 100% additional damage.   
> Getting to know Brig Hellclaw - Brig wants to maximize his hype stacks. Keep him surrounded by other Champions that are dealing more damage to maximize his hype stacks from his Inspired Bard ability.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Discordant Melodies Icon](images/brig/11861.png) **Variant 2: Discordant Melodies** (Complete Area 125)
> A goblin bard joins the formation attempting to try out for the Champions, but they practiced the wrong song! Whenever they play their instrument, each Champions adjacent to them has a 50% chance to be stunned for 2 seconds.   
> Enemies deal 200% additional damage.   
> Gold Find and Champion Damage is reduced by 99%.  
> Getting to know Brig Hellclaw - If Brig is one of your higher damage dealers, choose his Cream of the Crop Specialization. If not, choose 'Back'-Up Singer and place him in the rear of your formation to maximize his hype stacks!
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Musical Accompaniment Icon](images/brig/11862.png) **Variant 3: Musical Accompaniment** (Complete Area 175)
> An elf bard appears in each area with the Masked Man.  
> Until the elf bard is destroyed, the Masked Man is invulnerable. Every time the elf bard attacks, the damage of the Masked Man is increased by 100%.   
>   
> Getting to know Brig Hellclaw: Brig's Critical Moment ability helps turn up the volume when you're at your wall, or in a boss area. Make sure he's ready to play when the Masked Man arrives!
</div></div>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Brig" fill="#aaa" data-formationName="Brig" data-campaignName="Liar's Night" width="291" height="160"><circle cx="175" cy="25" r="15"/><circle cx="175" cy="65" r="15"/><circle cx="135" cy="85" r="15"/><circle cx="135" cy="125" r="15"/><circle cx="95" cy="65" r="15"/><circle cx="95" cy="105" r="15"/><circle cx="95" cy="145" r="15"/><circle cx="55" cy="85" r="15"/><circle cx="55" cy="125" r="15"/><circle cx="15" cy="105" r="15"/><text x="205" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Brig</text><text x="205" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Liar's Night</text></svg>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*