[Back to Main](index.md)

# New Campaign - Vecna: Eve of Ruin

A new campaign was recently added to the defines: `Vecna: Eve of Ruin`. The guesstimated date of release is 22 May 2024 as per the [Content Drops](contentdrops.md) page. This lines up very well with the release of the official WoTC adventure module of the same name on 21 May 2024.

# Reduced Gold

The campaign formation currently has the exact same reduced gold effect that Fortune's Wheel has. It's even using the exact same values for `gold_reduction_ratio` and `gold_reduction_per_area` that FW does.

# Blessings

Some effects made it into the definitions that look suspiciously like blessings. Can't be certain though of course.

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
**Local** (Guess)
> Increases the damage of all Lawful Champions by 100%
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1964,
    "flavour_text": "",
    "description": {
        "desc": "Increases the damage of all Lawful Champions by 100%"
    },
    "effect_keys": [
        {
            "effect_string": "hero_dps_multiplier_mult,$replace",
            "targets": [
                {
                    "type": "by_tags",
                    "tags": [
                        "lawful"
                    ]
                }
            ]
        }
    ],
    "requirements": "",
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
**Local** (Guess)
> Increases your gold find by 8.33% for each piece of epic or better gear on Champions in your formation, stacking additively
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1965,
    "flavour_text": "",
    "description": {
        "desc": "Increases your gold find by 8.33% for each piece of epic or better gear on Champions in your formation, stacking additively"
    },
    "effect_keys": [
        {
            "effect_string": "gold_multiplier_mult,$replace",
            "amount_func": "add",
            "stack_func": "per_hero_attribute",
            "per_hero_expr": "NumEquipmentWithMinimumRarity(`Epic`)",
            "amount_updated_listeners": [
                "loot_changed"
            ]
        }
    ],
    "requirements": "",
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
**Local** (Guess)
> Increases the damage of all Champions whose base attack is melee by 100%
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1966,
    "flavour_text": "",
    "description": {
        "desc": "Increases the damage of all Champions whose base attack is melee by 100%"
    },
    "effect_keys": [
        {
            "effect_string": "hero_dps_multiplier_mult,$replace",
            "targets": [
                "all"
            ],
            "filter_targets": [
                {
                    "type": "attack_type",
                    "attack": "melee"
                }
            ]
        }
    ],
    "requirements": "",
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
**Global** (Guess)
> Increases the damage of all Champions by 100% for each piece of the Rod of Seven Parts you have collected (stacking multiplicatively)
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 1967,
    "flavour_text": "",
    "description": {
        "desc": "Increases the damage of all Champions by 100% for each piece of the Rod of Seven Parts you have collected (stacking multiplicatively)"
    },
    "effect_keys": [
        {
            "effect_string": "hero_dps_multiplier_mult,$replace",
            "targets": [
                "all"
            ],
            "amount_func": "mult",
            "stack_func": "per_hero_attribute",
            "post_process_expr": "GetSaveStat(`vecna_rod_of_seven_parts`)"
        }
    ],
    "requirements": "",
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


# Rod of Seven Parts

As you can probably see from the assumed Global blessing - there are some things called the `Rod of Seven Parts`. This appears to be something we will be able collect as we do more adventures in the campaign.

We know that a piece of the Rod of Seven Parts will come from a static armoured boss monster called `Hertilod` from one of the Vecna adventures.

> The Hertilod swallows a Champion for 10 seconds unless they succeed on a STR saving throw.  
> A swallowed Champion takes damage every second.  
> When the Hertilod takes damage there is a 10% chance the swallowed Champion is expelled. When the Hertilod expells a Champion there is a 15% chance of it also expelling a piece of the rod. This chance increases each time it does not expell a piece of the rod. The Hertilod cannot be killed until the piece of the rod has been expelled.  
> While a Champion is swallowed the Hertilod will attack with its claws.

| Part 1 | Part 2 |
|---|---|
| ![Vecna: Eve of Ruin Rod of Seven Parts - Part 1 Icon](images/campaign_vecna/rod1.png) | ![Vecna: Eve of Ruin Rod of Seven Parts - Part 1 Icon](images/campaign_vecna/rod2.png) |

## Other Icons and Logos

| Logo | Campaign Button | Favour Icon | Hertilod |
|---|---|
| ![Vecna: Eve of Ruin Campaign Logo](images/campaign_vecna/logo.png) | ![Vecna: Eve of Ruin Campaign Button Icon](images/campaign_vecna/campaign_button.png) | ![Vecna: Eve of Ruin Favour Icon](images/campaign_vecna/favour.png) | ![Vecna: Eve of Ruin Hertilod Portrait](images/campaign_vecna/hertilod.png) |

## Formation

<span class="formationBorder">
![Vecna: Eve of Ruin Formation](images/campaign_vecna/formation.png)
</span>

## Map

![Vecna: Eve of Ruin Map](images/campaign_vecna/map.png)

[Back to Top](#top)

*Last Modified: {{ site.time }}*