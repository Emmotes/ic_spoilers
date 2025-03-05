[Back to Main](index.md)

# Apothecary / Notary System

The presumed date for this system is on 12 March 2025 with the release of Sheila - though it could come out before then.

Very little is known about this system at present. We have a few references in the definitions - but most of what we "know" is from Dev Insights.

## Currency

We know from Sheila that this system will have its own unique currency called Potion Reagents because Sheila will scavenge them from bosses. There's no data to tell us how they'll be attained otherwise - though Justin did mention it on DI recently - see the Info From Dev Insights list below.

There is also another currency because there's a text define called `legendary_vessels` (just like there's one for `potion_reagents`). The suspicion is that they will be required to make the Legendary potions below.

## Legendary Grade Potions

There'll be legendary potions from this system (not to be confused with legendary potions).

<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
### Legendary Potion of Giant's Strength  

A transparent potion in which floats the sliver of a giant's fingernail.  
Duration: 1 Day

> 1500% All Champion Damage & +15% to All Basic Potions

<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2164,
    "name": "Legendary Potion of Giant's Strength",
    "description": "A transparent potion in which floats the sliver of a giant's fingernail.",
    "effect": "effect_def,2264",
    "rarity": 5,
    "duration": 86400,
    "graphic_id": 26151,
    "odds": 0,
    "properties": {
        "keep_on_reset": true,
        "inventory_graphic_id": 26152,
        "name_plural": "Legendary Potions of Giant's Strength",
        "override_base_effect_key": "global_dps_multiplier_mult"
    },
    "tags": [
        "duration",
        "potion",
        "_dps"
    ],
    "inventory_order": "45"
}
</pre>
</p>
</details>
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
### Legendary Potion of Clairvoyance  

An eyeball bobs in this yellowish potion.  
Duration: 1 Day

> 500% Gold & +15% to All Basic Potions

<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2165,
    "name": "Legendary Potion of Clairvoyance",
    "description": "An eyeball bobs in this yellowish potion.",
    "effect": "effect_def,2265",
    "rarity": 5,
    "duration": 86400,
    "graphic_id": 26147,
    "odds": 0,
    "properties": {
        "keep_on_reset": true,
        "inventory_graphic_id": 26148,
        "name_plural": "Legendary Potions of Clairvoyance",
        "override_base_effect_key": "gold_multiplier_mult"
    },
    "tags": [
        "duration",
        "potion",
        "_gold"
    ],
    "inventory_order": "85"
}
</pre>
</p>
</details>
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
### Legendary Potion of Heroism  

The blue liquid in this potion bubbles and steams as if boiling.  
Duration: 1 Day

> 400% Health & +15% to All Basic Potions

<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2166,
    "name": "Legendary Potion of Heroism",
    "description": "The blue liquid in this potion bubbles and steams as if boiling.",
    "effect": "effect_def,2266",
    "rarity": 5,
    "duration": 86400,
    "graphic_id": 26153,
    "odds": 0,
    "properties": {
        "keep_on_reset": true,
        "inventory_graphic_id": 26154,
        "name_plural": "Legendary Potions of Heroism",
        "override_base_effect_key": "health_mult"
    },
    "tags": [
        "duration",
        "potion",
        "_health"
    ],
    "inventory_order": "165"
}
</pre>
</p>
</details>
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
### Legendary Fire Breath Potion  

The orange liquid in this vial flickers and smoke fills the top of the container.  
Duration: 1 Day

> Click Damage Deals 900s of BUD & +15% to All Basic Potions

<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2167,
    "name": "Legendary Fire Breath Potion",
    "description": "The orange liquid in this vial flickers and smoke fills the top of the container.",
    "effect": "effect_def,2267",
    "rarity": 5,
    "duration": 86400,
    "graphic_id": 26149,
    "odds": 0,
    "properties": {
        "keep_on_reset": true,
        "inventory_graphic_id": 26150,
        "name_plural": "Legendary Fire Breath Potions",
        "override_base_effect_key": "click_damage_seconds_global_dps"
    },
    "tags": [
        "duration",
        "potion",
        "_click_damage"
    ],
    "inventory_order": "405"
}
</pre>
</p>
</details>
</div></div>
<div markdown="1" class="abilityBorder"><div markdown="1" class="abilityBorderInner">
### Legendary Potion of Speed  

This potion's yellow fluid is streaked with black and swirls on its own.  
Duration: 1 Day

> Multiplies Game Speed by 3.25 & +15% to All Basic Potions & +5% to Max Game Speed Cap Per Active Speed Potion

<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2168,
    "name": "Legendary Potion of Speed",
    "description": "This potion's yellow fluid is streaked with black and swirls on its own.",
    "effect": "effect_def,2268",
    "rarity": 5,
    "duration": 86400,
    "graphic_id": 26155,
    "odds": 0,
    "properties": {
        "keep_on_reset": true,
        "inventory_graphic_id": 26156,
        "name_plural": "Legendary Potions of Speed",
        "override_base_effect_key": "time_scale"
    },
    "tags": [
        "duration",
        "potion",
        "_speed"
    ],
    "inventory_order": "775"
}
</pre>
</p>
</details>
</div></div>

## Icons

Some art assets just got added:

### Currencies

| Reagents | Legendary Vessels | Gold Chest | Silver Chest
|---|---|---|---|
| ![Apothecary Reagents Icon](images/apothecary_notary/reagents.png) | ![Legendary Vessels Icon](images/apothecary_notary/legendary_vessel.png) | ![Gold Chest for Gems Icon](images/apothecary_notary/gemchest_gold.png) | ![Silver Chest for Gems Icon](images/apothecary_notary/gemchest_silver.png) |

### Legendary Potions

| Strength | Clairvoyance | Heroism | Fire Breath | Speed |
|---|---|---|---|---|
| ![Legendary Potion of Giant's Strength Icon](images/apothecary_notary/leg_pot_str.png) | ![Legendary Potion of Clairvoyance Icon](images/apothecary_notary/leg_pot_gold.png) | ![Legendary Potion of Heroism Icon](images/apothecary_notary/leg_pot_hp.png) | ![Legendary Fire Breath Potion Icon](images/apothecary_notary/leg_pot_fb.png) | ![Legendary Potion of Speed Icon](images/apothecary_notary/leg_pot_spd.png) |

## Info From Dev Insights

We've been told a few things over the past few months/years about potential features for this system - so we don't really know which ones are still true or will be true when it releases. So - as ever - take this all with a significantly sized pile of salt.

- We will be able to combine/split potions and potentially also contracts to increase/decrease their rarity. If this is true we could finally consolidate all our green bounty contracts up to epic for ease of use. We've been told that this will not require the currency item.
- We will be able to convert potion types to other types. For example - Firebreath to Speed. We've been told this will require the currency item.
- We will be able to purchase the contents of chests directly with gems - skipping the buying of chests and then the opening of said chests. Apparently this will also automatically convert any bounty contracts we would have gotten directly into tokens. We don't know how well this will play with the auto-spend when an event ends.
- This system will not interact with legendary potions (not to be confused with legendary potions).
- We will get apothecary reagents by dismantling normal potions. We will then be able to use them to craft other potions. Apparently we'll be able to dismantle 7 day duration potions but not create them.

[Back to Top](#top)

*Last Modified: {{ site.time }}*