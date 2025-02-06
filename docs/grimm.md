[Back to Main](index.md)

<span class="championPortraitsRow">
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![PC Portrait for Grimm](images/grimm/portrait.png)
        </span>
        <span>
        Portrait
        </span>
    </span>
    <span class="championPortraitsColumn">
        <span class="championPortraitsImage">
            ![Model GIF of Grimm](images/grimm/model.gif)
        </span>
        <span>
        Model
        </span>
    </span>
</span>

# Grimm

Beadle & Grimm will be getting separated soon - and Grimm gets to be the "new" champion. The primary reason for this is their tech debt - being two champions in one. The code for them is different from every other champion.

[Idle Champions Wiki](https://idlechampions.fandom.com/wiki/Beadle_%26_Grimm)

# Basic Information

Grimm will be a new champion in the Festival of Fools event on 2 April 2025.

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
            <span style="margin-left:8px;">Human (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Class**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Barbarian (Guess)</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Roles**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">Unknown</span>
        </span>
    </span>
    <span class="champStatsTableRow">
        <span class="champStatsTableInfoHeader">
            <span style="margin-right:4px;">**Age**:</span>
        </span>
        <span class="champStatsTableInfoSmall">
            <span style="margin-left:8px;">26 (Guess)</span>
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
            <span style="margin-left:8px;">Chaotic Good (Guess)</span>
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

Unknown.
{% comment %}
<span class="formationBorder">
    ![Formation Layout](images/grimm/formation.png)
</span>
{% endcomment %}

# Attacks

Unknown.

# Abilities

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Tag Team** (Guess)
> When Grimm uses his ultimate ability in the same party as Beadle, Beadle's ultimate ability goes on cooldown and he gains one Tag Team stack. For each Tag Team stack Beadle has, his ultimate cooldown is reduced by 5 seconds, and his next ultimate attack deals 200% more damage, stacking multiplicatively. Tag Team stacks cap at 10 and reset when Beadle uses his ultimate ability.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2245,
    "flavour_text": "",
    "description": {
        "desc": "When Grimm uses his ultimate ability in the same party as Beadle, Beadle's ultimate ability goes on cooldown and he gains one Tag Team stack. For each Tag Team stack Beadle has, his ultimate cooldown is reduced by 5 seconds, and his next ultimate attack deals $amount% more damage, stacking multiplicatively. Tag Team stacks cap at 10 and reset when Beadle uses his ultimate ability."
    },
    "effect_keys": [
        {
            "off_when_benched": false,
            "effect_string": "ultimate_tag_team,200",
            "source_hero_id": 108,
            "target_hero_id": 161,
            "stack_max": 10,
            "cooldown_decrease": 5,
            "buff_effect_key_index": 1,
            "stat": "beadle_tag_team_stacks"
        },
        {
            "effect_string": "do_nothing,200",
            "stacks_on_trigger": "will_stack_manually",
            "stacks_multiply": true,
            "show_bonus": true,
            "apply_manually": true
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
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

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unknown** (Guess)
> If Beadle is in the formation, all of Grimm's equipment item levels are increased by Beadle's base average item level.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2253,
    "flavour_text": "",
    "description": {
        "desc": "If Beadle is in the formation, all of Grimm's equipment item levels are increased by Beadle's base average item level."
    },
    "effect_keys": [
        {
            "off_when_benched": false,
            "effect_string": "item_levels_add,0",
            "targets": [
                "self"
            ],
            "use_computed_amount_for_description": true
        },
        {
            "off_when_benched": false,
            "effect_string": "buff_upgrade_add_flat_amount,1,16730",
            "amount_func": "add",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "AverageILevels()",
            "per_hero_targets": [
                {
                    "type": "heroes",
                    "hero_ids": [
                        108
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
            "target_hero_id": 108
        }
    ],
    "graphic_id": 0,
    "large_graphic_id": 0,
    "properties": {
        "is_formation_ability": true,
        "show_outgoing_description": false,
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
**Barbarian's Protection** (Guess)
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 25988,
    "graphic": "Icons/Events/2018FestivalofFools/FestivalofFools_Y8/Icon_Formation_Grimm_BarbariansProtection",
    "v": 2,
    "fs": 0,
    "p": 0,
    "type": 1,
    "export_params": {
        "uses": [
            "icon"
        ]
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Break Their Will** (Guess)
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 25989,
    "graphic": "Icons/Events/2018FestivalofFools/FestivalofFools_Y8/Icon_Formation_Grimm_BreakTheirWill",
    "v": 2,
    "fs": 0,
    "p": 0,
    "type": 1,
    "export_params": {
        "uses": [
            "icon"
        ]
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Get Buff** (Guess)
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 25990,
    "graphic": "Icons/Events/2018FestivalofFools/FestivalofFools_Y8/Icon_Formation_Grimm_GetBuff",
    "v": 2,
    "fs": 0,
    "p": 0,
    "type": 1,
    "export_params": {
        "uses": [
            "icon"
        ]
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Moving Right Along** (Guess)
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 25991,
    "graphic": "Icons/Events/2018FestivalofFools/FestivalofFools_Y8/Icon_Formation_Grimm_MovingRightAlong",
    "v": 2,
    "fs": 0,
    "p": 0,
    "type": 1,
    "export_params": {
        "uses": [
            "icon"
        ]
    }
}
</pre>
</p>
</details>
</div></div>

# Specialisations

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Giant Hunter** (Guess)
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 25997,
    "graphic": "Icons/Events/2018FestivalofFools/FestivalofFools_Y8/Icon_Specialization_Grimm_GiantHunter",
    "v": 2,
    "fs": 0,
    "p": 0,
    "type": 1,
    "export_params": {
        "uses": [
            "icon"
        ]
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Giant Profits** (Guess)
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 25998,
    "graphic": "Icons/Events/2018FestivalofFools/FestivalofFools_Y8/Icon_Specialization_Grimm_GiantProfits",
    "v": 2,
    "fs": 0,
    "p": 0,
    "type": 1,
    "export_params": {
        "uses": [
            "icon"
        ]
    }
}
</pre>
</p>
</details>
</div></div>

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Giant Taunter** (Guess)
> Unknown effect.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 25999,
    "graphic": "Icons/Events/2018FestivalofFools/FestivalofFools_Y8/Icon_Specialization_Grimm_GiantTaunter",
    "v": 2,
    "fs": 0,
    "p": 0,
    "type": 1,
    "export_params": {
        "uses": [
            "icon"
        ]
    }
}
</pre>
</p>
</details>
</div></div>

# Items

<span class="itemTableColumn">
    <span class="itemTableRowHeader">
        <span class="itemTableIcon">
            <span style="margin-left:8px;">**Icons**</span>
        </span>
        <span class="itemTableNameSmall">
            **Name**
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Beadle Armor Icon](images/grimm/26000.png)</span><span class="itemTableIcon2">![Beadle Armor Icon](images/grimm/26000.png)</span><span class="itemTableIcon3">![Beadle Armor Icon](images/grimm/26001.png)</span><span class="itemTableIcon4">![Beadle Armor Icon](images/grimm/26002.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Beadle Armor
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Beadle Storyof Trask Icon](images/grimm/26003.png)</span><span class="itemTableIcon2">![Beadle Storyof Trask Icon](images/grimm/26003.png)</span><span class="itemTableIcon3">![Beadle Storyof Trask Icon](images/grimm/26004.png)</span><span class="itemTableIcon4">![Beadle Storyof Trask Icon](images/grimm/26005.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Beadle Storyof Trask
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Beadle Icon Euipment Beadle Gear Icon](images/grimm/26006.png)</span><span class="itemTableIcon2">![Beadle Icon Euipment Beadle Gear Icon](images/grimm/26006.png)</span><span class="itemTableIcon3">![Beadle Icon Euipment Beadle Gear Icon](images/grimm/26007.png)</span><span class="itemTableIcon4">![Beadle Icon Euipment Beadle Gear Icon](images/grimm/26008.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Beadle Icon Euipment Beadle Gear
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Beadle Icon Euipment Beadle Rapier Icon](images/grimm/26009.png)</span><span class="itemTableIcon2">![Beadle Icon Euipment Beadle Rapier Icon](images/grimm/26009.png)</span><span class="itemTableIcon3">![Beadle Icon Euipment Beadle Rapier Icon](images/grimm/26010.png)</span><span class="itemTableIcon4">![Beadle Icon Euipment Beadle Rapier Icon](images/grimm/26011.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Beadle Icon Euipment Beadle Rapier
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Beadle Icon Euipment Beadle Rogue Stuff Icon](images/grimm/26012.png)</span><span class="itemTableIcon2">![Beadle Icon Euipment Beadle Rogue Stuff Icon](images/grimm/26012.png)</span><span class="itemTableIcon3">![Beadle Icon Euipment Beadle Rogue Stuff Icon](images/grimm/26013.png)</span><span class="itemTableIcon4">![Beadle Icon Euipment Beadle Rogue Stuff Icon](images/grimm/26014.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Beadle Icon Euipment Beadle Rogue Stuff
        </span>
    </span>
    <span class="itemTableRow">
        <span class="itemTableIcon">
            <span class="itemTableIcon1">![Beadle Icon Euipment Beadle Wizard Stuff Icon](images/grimm/26015.png)</span><span class="itemTableIcon2">![Beadle Icon Euipment Beadle Wizard Stuff Icon](images/grimm/26015.png)</span><span class="itemTableIcon3">![Beadle Icon Euipment Beadle Wizard Stuff Icon](images/grimm/26016.png)</span><span class="itemTableIcon4">![Beadle Icon Euipment Beadle Wizard Stuff Icon](images/grimm/26017.png)</span>
        </span>
        <span class="itemTableNameSmall">
            Beadle Icon Euipment Beadle Wizard Stuff
        </span>
    </span>
</span>

# Feats

Unknown.

# Legendaries

Unknown.

# Adventures and Variants

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Unlock Adventure: The Missing Lord (Beadle & Grimm)** (Complete Area 50)
> Search for the absent Open Lord of Waterdeep.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Arvaiss' Next Trap Icon](images/grimm/8192.png) **Variant 1: Arvaiss' Next Trap** (Complete Area 75)
> Various creatures attack your formation, each with different abilities. See the buff icon for details.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![Showoffs Icon](images/grimm/8193.png) **Variant 2: Showoffs** (Complete Area 125)
> Beadle & Grimm take up a slot in your formation. Only Champions with a STR of 18 or higher, DEX of 17 or higher, or INT of 16 or higher can be used.
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
![A Contest, You Say? Icon](images/grimm/8194.png) **Variant 3: A Contest, You Say?** (Complete Area 175)
> Enemies have 300% more health and attack twice as often. When a Champion kills an enemy, all Champions with that same attack type (melee, ranged, or magic) deal 2% less damage, and all Champions with other attack types deal 1% more damage.
</div></div>

# Other Champion Images

<span class="championImagesColumn">
    <span class="championImagesRow">
        <span class="championImagesPortrait">
            ![Grimm Console Portrait](images/grimm/console.png)Console Portrait
        </span>
    </span>
    <span class="championImagesRow">
        <span class="championImagesChests">
            ![Grimm Gold Chest Icon](images/grimm/chest_gold.png)Gold Chest Icon
        </span>
        <span class="championImagesChests">
            ![Grimm Silver Chest Icon](images/grimm/chest_silver.png)Silver Chest Icon
        </span>
    </span>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*