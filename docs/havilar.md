[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Havilar](images/havilar/portrait.png)
        </span>
        <span>
        Portrait
        </span>
    </span>
</span>

# Havilar

Havilar's twin sister Farideh has always been 'the smart one' and 'the responsible one'-but that's all right, Havilar is definitely 'the tough one,' 'the funny one' and the 'pretty one' (despite being identical twins). Plus, Havilar has a hellhound! Even if it means she's a sort-of-but-not-quite Chosen of Asmodeus, too, not that anyone asked Havi about that. But he should know her glaive is as good as her right hand, and she can slice a devil just as well as an orc, a zombie, or any other villain!

# Changes

Havilar will be a reworked champion in the Feast of the Moon event and delayed until 12 November 2025.

Only abilities that have seen some changes will be displayed here - and be aware that there's a lot of guesswork involved. Some abilities may not have names - some may have the *wrong* names - or specialisations might not be marked as such - etc.. Focus on the effect data itself.

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. That and we don't have access to any upgrade data prior to release. Making assumptions on how the champions will turn out based on this information would be premature.

# Attacks

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Fire of Asmodeus** (Guess)
> Each summoned Imp attacks a random enemy with a fireball, dealing 4.3 seconds of BUD-based damage in a small area. If one of the Imps has been sacrificed, only the remaining Imp attacks.  
> Cooldown: 4.3s (Cap 1.075s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 909,
    "name": "Fire of Asmodeus",
    "description": "Each summoned Imp attacks a random enemy with a fireball, dealing a large amount of area damage.",
    "long_description": "Each summoned Imp attacks a random enemy with a fireball, dealing 4.3 seconds of BUD-based damage in a small area. If one of the Imps has been sacrificed, only the remaining Imp attacks.",
    "graphic_id": 0,
    "target": "random",
    "num_targets": 1,
    "aoe_radius": 0,
    "damage_modifier": 1,
    "cooldown": 4.3,
    "animations": [
        {
            "type": "ranged_attack",
            "projectile_graphic_id": 1,
            "projectile": "fireball",
            "projectile_details": {
                "screen_shake": false
            },
            "shoot_frame": 14,
            "sound_frames": {
                "1": 153
            },
            "hit_sound": 142,
            "shoot_offset_x": 40,
            "shoot_offset_y": 0
        }
    ],
    "tags": [
        "ranged"
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
**Leadership Summit** (Guess)
> Havilar increases the damage of all Champions in the 2 columns behind her by 400%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2495,
    "flavour_text": "",
    "description": {
        "desc": "Havilar increases the damage of all Champions in the 2 columns behind her by 400%."
    },
    "effect_keys": [
        {
            "effect_string": "hero_dps_multiplier_mult,400",
            "off_when_benched": true,
            "targets": [
                "prev_two_col"
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
**Fiendish Resolve** (Guess)
> When any Fiend enemies are on-screen, Havilar focuses less on her own attacks and more on buffing her party.. Her base attack cooldown is doubled, but the effect of Leadership Summit is increased by 100% for each Fiend that has appeared in the current area, stacking multiplicatively and capping at 25. Demon bosses count 15 times.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2496,
    "flavour_text": "",
    "description": {
        "desc": "When any Fiend enemies are on-screen, Havilar focuses less on her own attacks and more on buffing her party.. Her base attack cooldown is doubled, but the effect of Leadership Summit is increased by 100% for each Fiend that has appeared in the current area, stacking multiplicatively and capping at 25. Demon bosses count 15 times."
    },
    "effect_keys": [
        {
            "effect_string": "havilar_fiendish_vigor",
            "off_when_benched": true
        },
        {
            "effect_string": "base_attack_speed_decrease_if_tagged_monster,50,fiend",
            "off_when_benched": true
        },
        {
            "effect_string": "pre_stack,100",
            "skip_effect_key_desc": true
        },
        {
            "effect_string": "buff_upgrade_if_tagged_monster,100,18036,fiend",
            "off_when_benched": true,
            "stacks_on_trigger": "will_stack_manually",
            "stacks_multiply": true,
            "max_stacks": 25,
            "show_bonus": true
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
**Mott** (Guess)
> Havilar gains Mot as her first Imp companion. Havilar's Imps attack random enemies with Fire of Asmodeus every 4.3 seconds. Mot increases the effect of Leadership Summit by 100% for each Tiefling Champion in the formation, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2497,
    "flavour_text": "",
    "description": {
        "desc": "Havilar gains Mot as her first Imp companion. Havilar's Imps attack random enemies with Fire of Asmodeus every 4.3 seconds. Mot increases the effect of Leadership Summit by 100% for each Tiefling Champion in the formation, stacking multiplicatively."
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
**Infernal Fortitude** (Guess)
> Havilar increases the health of all other Champions by %amount% of her max health, and healing effects on all Champions are increased by 25%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2498,
    "flavour_text": "",
    "description": {
        "desc": "Havilar increases the health of all other Champions by %amount% of her max health, and healing effects on all Champions are increased by $amount___2%."
    },
    "effect_keys": [
        {
            "effect_string": "increase_health_by_source_percent,25",
            "targets": [
                "other"
            ],
            "off_when_benched": true
        },
        {
            "effect_string": "healing_add_mult,25",
            "off_when_benched": true,
            "targets": [
                "all"
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
**Unknown** (Guess)
> Champions affected by Havilar's Leadership Summit gain the Control role (if they didn't already have it) and have a 25% chance for enemies they attack to go berserk for 8 seconds. Berserked enemies move 50% faster, attack twice as often, but deal 90% less damage.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2499,
    "flavour_text": "",
    "description": {
        "desc": "Champions affected by Havilar's Leadership Summit gain the Control role (if they didn't already have it) and have a 25% chance for enemies they attack to go berserk for 8 seconds. Berserked enemies move 50% faster, attack twice as often, but deal 90% less damage."
    },
    "effect_keys": [
        {
            "effect_string": "add_hero_tags,0,control",
            "off_when_benched": true,
            "targets": [
                "all"
            ],
            "filter_targets": [
                {
                    "type": "affected_by_upgrade",
                    "upgrade_id": 18036
                }
            ]
        },
        {
            "effect_string": "havilar_battle_master_handler_v2",
            "berserk_effect": {
                "effect_string": "effect_def,2472",
                "for_time": 8
            }
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
**Unknown** (Guess)
> Increase the effect of Leadership Summit by 500% when Farideh is in the formation. Additionally, whenever Farideh's Hellish Rebuke is triggered, Havilar heals for up to 2.5% of her maximum health. This can trigger at most 400 times in a single area.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2500,
    "flavour_text": "",
    "description": {
        "desc": "Increase the effect of Leadership Summit by $amount% when Farideh is in the formation. Additionally, whenever Farideh's Hellish Rebuke is triggered, Havilar heals for up to 2.5% of her maximum health. This can trigger at most 400 times in a single area."
    },
    "effect_keys": [
        {
            "effect_string": "buff_upgrade,500,18036",
            "stack_func": "per_hero_attribute",
            "amount_func": "mult",
            "per_hero_expr": "hero_id == 33",
            "off_when_benched": true,
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
**Speed Demon** (Guess)
> Fiend enemies have a 50% chance of dropping two quest items or counting for two kills when killed.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2501,
    "flavour_text": "",
    "description": {
        "desc": "Fiend enemies have a $amount% chance of dropping two quest items or counting for two kills when killed."
    },
    "effect_keys": [
        {
            "effect_string": "chance_multiply_tagged_monster_quest_rewards,50,2,fiend"
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
**Unlock Ultimate** (Guess)
> The Imp that isn't Mot flings itself at a random enemy and explodes, dealing massive damage in a large area and increasing the Imp's buffs by 400% for 60 seconds. The imp's buffs do not go away when it is sacrificed, and the Imp is automatically resummoned next to Havilar after 20 seconds.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2505,
    "flavour_text": "",
    "description": {
        "desc": "The Imp that isn't Mot flings itself at a random enemy and explodes, dealing massive damage in a large area and increasing the Imp's buffs by 400% for 60 seconds. The imp's buffs do not go away when it is sacrificed, and the Imp is automatically resummoned next to Havilar after 20 seconds."
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
**Specialisation: Dembo** (Guess)
> Havilar gains Dembo as an Imp companion. Dembo increases the effect of Leadership Summit by 200% and if Mehen is in the formation, he gains 2 additional Grumpy stacks (he doesn't like Dembo).
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2502,
    "flavour_text": "",
    "description": {
        "desc": "Havilar gains Dembo as an Imp companion. Dembo increases the effect of Leadership Summit by 200% and if Mehen is in the formation, he gains 2 additional Grumpy stacks (he doesn't like Dembo)."
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
**Specialisation: Ola** (Guess)
> Havilar gains Olla as an Imp companion. Olla increases the effect of Leadership Summit by 10% for each unique enemy Havilar has tanked in the current area, stacking multiplicatively and capping at 100. Additionally, when Havilar or either of her Imps attack an enemy, the enemy is taunted to attack Havilar.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2503,
    "flavour_text": "",
    "description": {
        "desc": "Havilar gains Olla as an Imp companion. Olla increases the effect of Leadership Summit by 10% for each unique enemy Havilar has tanked in the current area, stacking multiplicatively and capping at 100. Additionally, when Havilar or either of her Imps attack an enemy, the enemy is taunted to attack Havilar."
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
**Specialisation: Bosh** (Guess)
> Havilar gains Bosh as an Imp companion. Bosh increases the effect of Leadership Summit by 50% for each enemy or boss enrage stack active, stacking multiplicatively up to 100 stacks, and also increases Havilar's maximum health by 50%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2504,
    "flavour_text": "",
    "description": {
        "desc": "Havilar gains Bosh as an Imp companion. Bosh increases the effect of Leadership Summit by 50% for each enemy or boss enrage stack active, stacking multiplicatively up to 100 stacks, and also increases Havilar's maximum health by 50%."
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

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unlock Adventure: The Missing Merchants (Havilar)** (Complete Area 50)
> Discover the fate of some merchants in the jungles of Chult.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Odd Ones Out Icon](images/havilar/7110.png) **Variant 1: Odd Ones Out** (Complete Area 75)
> Only every second bench seat can be used. The odd ones are right out!
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Diamonds Are Forever Icon](images/havilar/7111.png) **Variant 2: Diamonds Are Forever** (Complete Area 125)
> Diamond Golems attack the formation at random. They can not be damaged and must be tanked until the area is beaten.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Nightmare Scenario Icon](images/havilar/7112.png) **Variant 3: Nightmare Scenario** (Complete Area 175)
> Havilar starts in the formation and can not be swapped, moved, or removed from the formation. Half of the enemies that spawn in non-boss areas are replaced with random demons that have more health and move more quickly than normal monsters.
</div></div>

# Formation

<span class="formationBorder">
    <svg xmlns="http://www.w3.org/2000/svg" id="Havilar" fill="#aaa" data-formationName="Havilar" data-campaignName="Grand Revel" width="300" height="140"><circle cx="175" cy="65" r="15"/><circle cx="135" cy="45" r="15"/><circle cx="135" cy="85" r="15"/><circle cx="95" cy="25" r="15"/><circle cx="95" cy="65" r="15"/><circle cx="95" cy="105" r="15"/><circle cx="55" cy="85" r="15"/><circle cx="55" cy="125" r="15"/><circle cx="15" cy="25" r="15"/><circle cx="15" cy="65" r="15"/><text x="205" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Havilar</text><text x="205" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Grand Revel</text></svg>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*