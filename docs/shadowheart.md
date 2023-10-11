[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsImage">
        ![PC Portrait for Shadowheart](images/shadowheart/portrait.png)Portait
    </span>
    <span class="championPortraitsImage">
        ![Model GIF of Shadowheart](images/shadowheart/model.gif)Model
    </span>
</span>

# Shadowheart

A loyal cleric of Shar, Shadowheart is the sole survivor of a holy mission undertaken on the Mistress of the Night's behest. She alone must deliver a relic of immense power to her coven in Baldur's Gate, while threatened by a strange new magic that is burgeoning from within.

[Shadowheart - Baldur's Gate 3 Wiki](https://bg3.wiki/wiki/Shadowheart)

# Basic Information

Shadowheart will be the new champion in the Simril event on 29 November 2023.

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
            <span style="margin-left:8px;">Half-Elf (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Class**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Cleric (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Roles**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Support / Healing (Guess)</span>
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
            <span style="margin-left:8px;">Female (Guess)</span>
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
            <span style="margin-left:8px;">Absolute Adversaries (Guess)</span>
        </span>
    </span>
</span>

# Formation

<span class="formationBorder">
    ![Formation Layout](images/shadowheart/formation.png)
</span>

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Sacred Flame** (Magic)
> Shadowheart casts Sacred Flame on a random enemy, dealing 1 hit.  
> Cooldown: 6s (Cap 1.5s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Shadowheart casts Sacred Flame on a random enemy, dealing 1 hit.",
    "long_description": "",
    "damage_modifier": 1,
    "damage_types": ["magic"],
    "graphic_id": 0,
    "target": "random",
    "aoe_radius": 0,
    "tags": ["ranged"],
    "num_targets": 1,
    "animations": [{
        "projectile_details": {
            "projectile_hit_graphic_id": 21569,
            "projectile_speed": 10000,
            "hash": "220b7624ef8bba01663706bfc0b44e70"
        },
        "hit_sound": 133,
        "shoot_sound": 164,
        "type": "ranged_attack",
        "projectile": "pd_generic_projectile",
        "shoot_frame": 10
    }],
    "name": "Sacred Flame",
    "cooldown": 6,
    "id": 701
}
</pre>
</p>
</details>
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Base Attack: Guidance** (Magic)
> Shadowheart casts Guidance on your BUD-setting Champion, increasing their next attack's damage.  
> Cooldown: 6s (Cap 1.5s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "Shadowheart casts Guidance on your BUD-setting Champion, increasing their next attack's damage.",
    "long_description": "",
    "damage_modifier": 1,
    "damage_types": ["magic"],
    "graphic_id": 0,
    "target": "none",
    "aoe_radius": 0,
    "tags": ["ranged"],
    "num_targets": 0,
    "animations": [{
        "no_cooldown_display": false,
        "no_jump": true,
        "animation_sequence_name": "attack_b",
        "type": "melee_attack",
        "no_damage_display": true
    }],
    "name": "Guidance",
    "cooldown": 6,
    "id": 702
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ultimate Attack: Absolute Sanctuary**
> Unknown effect.  
> Cooldown: 300s (Cap 75s)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "description": "",
    "long_description": "",
    "damage_modifier": 1,
    "damage_types": ["magic"],
    "graphic_id": 21370,
    "target": "all",
    "aoe_radius": 0,
    "tags": [
        "ranged",
        "ultimate"
    ],
    "num_targets": 0,
    "animations": [{
        "ultimate": "shadowheart",
        "type": "ultimate_attack"
    }],
    "name": "Absolute Sanctuary",
    "cooldown": 300,
    "id": 703
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Twilight Trickery**
> Shadowheart increases the damage of Champions within two slots of her by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "effect_string": "hero_dps_multiplier_mult,100",
        "targets": [{
            "distance": 2,
            "type": "distance"
        }]
    }],
    "requirements": "",
    "description": {"desc": "Shadowheart increases the damage of Champions within two slots of her by $(amount)%."},
    "id": 1754,
    "flavour_text": "",
    "graphic_id": 21366,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Ceremorphosis**
> Your formation gains one Ceremorphosis stack due to the mind flayer tadpole in Shadowheart's brain. Shadowheart increases the effect of Twilight Trickery by 100% for each Ceremorphosis stack, stacking multiplicatively.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability might be prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {"effect_string": "pre_stack_amount,100"},
        {
            "amount_expr": "upgrade_amount(13276,0)",
            "stack_title": "Total Ceremorphosis Stacks",
            "amount_updated_listeners": ["slot_changed"],
            "stacks_multiply": true,
            "total_title": "Total Bonus",
            "off_when_benched": true,
            "show_bonus": true,
            "amount_func": "mult",
            "stack_func": "per_ceremorphosis_stacks",
            "effect_string": "buff_upgrade,0,13275",
            "desc_forced_order": 2
        },
        {
            "stack_title": "Shadowheart Ceremorphosis Stacks",
            "manual_stacking": true,
            "stacks_multiply": false,
            "off_when_benched": true,
            "outgoing_buffs": false,
            "effect_string": "shadowheart_ceremorphosis_stacks,1",
            "show_stacks": true,
            "desc_forced_order": 1
        }
    ],
    "requirements": "",
    "description": {"desc": "Your formation gains one Ceremorphosis stack due to the mind flayer tadpole in Shadowheart's brain. Shadowheart increases the effect of Twilight Trickery by $(amount)% for each Ceremorphosis stack, stacking multiplicatively."},
    "id": 1755,
    "flavour_text": "",
    "graphic_id": 21363,
    "properties": {
        "indexed_effect_properties": true,
        "retain_on_slot_changed": true,
        "is_formation_ability": true,
        "default_bonus_index": 0,
        "owner_use_outgoing_description": true,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Light in the Dark**
> Shadowheart heals Champions in the two columns ahead of her for 10 every second.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "effect_string": "heal,10",
        "targets": ["next_two_col"]
    }],
    "requirements": "",
    "description": {"desc": "Shadowheart heals Champions in the two columns ahead of her for $(amount) every second."},
    "id": 1756,
    "flavour_text": "",
    "graphic_id": 21365,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Invoke Duplicity**
> Shadowheart creates an illusory duplicate of herself which hides in the formation and applies Twilight Trickery and Light in the Dark to Champions relative to itself with half the range as normal. The duplicate positions itself in the same formation slot as the Champion in the formation with the highest DEX score. Ties go to the Champion in the highest bench seat.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "shadowheart_invoke_duplicity",
            "targets": ["self_slot"],
            "skip_effect_key_desc": true
        },
        {
            "amount_expr": "upgrade_amount(13275,0)",
            "off_when_benched": true,
            "effect_string": "hero_dps_multiplier_mult,0",
            "override_key_desc": "Twilight Trickery - Increases the damage of $target by $amount%",
            "targets": [{
                "distance": 1,
                "type": "distance"
            }]
        },
        {
            "amount_expr": "upgrade_amount(13277,0)",
            "off_when_benched": true,
            "effect_string": "heal,0",
            "override_key_desc": "Light In The Dark - Heals $target for $amount every second",
            "targets": ["next_col"]
        }
    ],
    "requirements": "",
    "description": {"desc": "Shadowheart creates an illusory duplicate of herself which hides in the formation and applies Twilight Trickery and Light in the Dark to Champions relative to itself with half the range as normal. The duplicate positions itself in the same formation slot as the Champion in the formation with the highest DEX score. Ties go to the Champion in the highest bench seat."},
    "id": 1757,
    "flavour_text": "",
    "graphic_id": 21364,
    "properties": {
        "indexed_effect_properties": true,
        "is_formation_ability": true,
        "use_owner_override": true,
        "owner_use_outgoing_description": false,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
</div></div>

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Guidance** (Guess)
> Shadowheart base attack is replaced by Guidance. When she casts Guidance, she increases the damage of your BUD-setting Champion's next attack by 200%. Stacks multiplicatively up to 5 times.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [
        {
            "stack_title": "Guidance Stacks",
            "stacks_multiply": true,
            "show_bonus": true,
            "effect_string": "do_nothing,200",
            "more_triggers": [{
                "action": {"type": "reset_stacks"},
                "trigger": "on_broadcast_stacks,shadowheart_guidance_trigger"
            }],
            "max_stacks": 5,
            "stacks_on_trigger": "owner_base_attack"
        },
        {"effect_string": "change_base_attack,702"},
        {
            "amount_expr": "upgrade_amount(13279,0)",
            "off_when_benched": true,
            "active_graphic_id": 21571,
            "effect_string": "hero_dps_multiplier_mult,0",
            "active_graphic_sort": "bottom",
            "targets": ["bud_setter"]
        },
        {
            "effect_string": "broadcast_on_trigger,shadowheart_guidance_trigger,pre_target_attack",
            "targets": ["bud_setter"],
            "skip_effect_key_desc": true
        }
    ],
    "requirements": "",
    "description": {"desc": "Shadowheart base attack is replaced by Guidance. When she casts Guidance, she increases the damage of your BUD-setting Champion's next attack by $(not_buffed amount)%. Stacks multiplicatively up to $(max_stacks) times."},
    "id": 1758,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "indexed_effect_properties": true,
        "retain_on_slot_changed": true,
        "is_formation_ability": true,
        "default_bonus_index": 0,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": false,
        "per_effect_index_bonuses": true
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Find Yourself** (Guess)
> If Shadowheart's Illusory Duplicate is placed in the same slot as she is, increase the effect of Twilight Trickery by 400%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{"effect_string": "buff_upgrade,400,13275"}],
    "requirements": [{"requirement": "shadowheart_is_duplicity_target"}],
    "description": {"desc": "If Shadowheart's Illusory Duplicate is placed in the same slot as she is, increase the effect of Twilight Trickery by $(amount)%."},
    "id": 1759,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Specialisation: Sister of Darkness** (Guess)
> The effects of Twilight Trickery and Light In The Dark from Shadowheart's Illusory Duplicate are increased by 100% for each formation slot away from Shadowheart the duplicate is (following the shortest path), stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "effect_keys": [{
        "amount_updated_listeners": [
            "slot_changed",
            "ability_score_changed"
        ],
        "stacks_multiply": true,
        "show_bonus": true,
        "amount_func": "mult",
        "stack_func": "shadowheart_invoke_duplicity_dist",
        "effect_string": "buff_upgrade,100,13278"
    }],
    "requirements": "",
    "description": {"desc": "The effects of Twilight Trickery and Light In The Dark from Shadowheart's Illusory Duplicate are increased by $(not_buffed amount)% for each formation slot away from Shadowheart the duplicate is (following the shortest path), stacking multiplicatively."},
    "id": 1760,
    "flavour_text": "",
    "graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true,
        "formation_circle_icon": false
    }
}
</pre>
</p>
</details>
</div></div>

# Items

<span class="itemTableColumn">
    <span class="itemTableRowHeader">
        <span class="itemTableIcon" style="align-items:center;">
            <span style="margin-left:8px;">**Icons**</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">**Name**</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Armor Icon](images/shadowheart/21336.png)</span><span class="itemTableIcon2">![Armor Icon](images/shadowheart/21336.png)</span><span class="itemTableIcon3">![Armor Icon](images/shadowheart/21337.png)</span><span class="itemTableIcon4">![Armor Icon](images/shadowheart/21338.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Armor</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Headgear Icon](images/shadowheart/21339.png)</span><span class="itemTableIcon2">![Headgear Icon](images/shadowheart/21339.png)</span><span class="itemTableIcon3">![Headgear Icon](images/shadowheart/21340.png)</span><span class="itemTableIcon4">![Headgear Icon](images/shadowheart/21341.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Headgear</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Mysterious Artefact Icon](images/shadowheart/21342.png)</span><span class="itemTableIcon2">![Mysterious Artefact Icon](images/shadowheart/21342.png)</span><span class="itemTableIcon3">![Mysterious Artefact Icon](images/shadowheart/21343.png)</span><span class="itemTableIcon4">![Mysterious Artefact Icon](images/shadowheart/21344.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Mysterious Artefact</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Shar Stuff Icon](images/shadowheart/21345.png)</span><span class="itemTableIcon2">![Shar Stuff Icon](images/shadowheart/21345.png)</span><span class="itemTableIcon3">![Shar Stuff Icon](images/shadowheart/21346.png)</span><span class="itemTableIcon4">![Shar Stuff Icon](images/shadowheart/21347.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Shar Stuff</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Shield Icon](images/shadowheart/21348.png)</span><span class="itemTableIcon2">![Shield Icon](images/shadowheart/21348.png)</span><span class="itemTableIcon3">![Shield Icon](images/shadowheart/21349.png)</span><span class="itemTableIcon4">![Shield Icon](images/shadowheart/21350.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Shield</span>
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon" style="align-items:center;">
            <span class="itemTableIcon1">![Weapon Icon](images/shadowheart/21351.png)</span><span class="itemTableIcon2">![Weapon Icon](images/shadowheart/21351.png)</span><span class="itemTableIcon3">![Weapon Icon](images/shadowheart/21352.png)</span><span class="itemTableIcon4">![Weapon Icon](images/shadowheart/21353.png)</span>
        </span>
        <span class="itemTableNameSmall">
            <span style="margin-left: 8px;">Weapon</span>
        </span>
    </span>
</span>

# Feats

Unknown.

# Legendaries

Unknown.

# Other Champion Images

<span class="championImagesColumn">
    <span class="championImagesRow">
        <span class="championImagesPortrait">
            ![Shadowheart Console Portrait](images/shadowheart/console.png)Console Portait
        </span>
    </span>
    <span class="championImagesRow">
        <span class="championImagesChests">
            ![Shadowheart Gold Chest Icon](images/shadowheart/chest_gold.png)Gold Chest Icon
        </span>
        <span class="championImagesChests">
            ![Shadowheart Silver Chest Icon](images/shadowheart/chest_silver.png)Silver Chest Icon
        </span>
    </span>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*