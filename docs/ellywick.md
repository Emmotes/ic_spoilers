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
**Unknown** (Guess)
> Ellywick increases the damage of Champions in the column behind her by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2027,
    "flavour_text": "",
    "description": {
        "desc": "$(source_hero) increases the damage of Champions in the column behind her by 100%."
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "hero_dps_multiplier_mult,100",
            "targets": [
                "prev_col"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
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
> Gold Find is increased by 50%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2028,
    "flavour_text": "",
    "description": {
        "desc": "Gold Find is increased by 50%"
    },
    "effect_keys": [
        {
            "off_when_benched": true,
            "effect_string": "gold_multiplier_mult,50",
            "targets": [
                "active_campaign"
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
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
> Ellywick draws a random card from the Deck of Many Things after every 25th enemy kill or after 60 seconds, whichever comes first. She can draw up to 5 cards at once and most duplicate card effects stack multiplicatively. Cards are discarded when she uses her ultimate ability, Call Of The Feywild.

<span style="font-size:1.2em;">ⓘ</span> *Note: This ability is prestack.*
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2029,
    "flavour_text": "",
    "description": {
        "desc": "Ellywick draws a random card from the Deck of Many Things after every 25th enemy kill or after 60 seconds, whichever comes first. She can draw up to 5 cards at once and most duplicate card effects stack multiplicatively. Cards are discarded when she uses her ultimate ability, Call Of The Feywild.^^$ellywick_deck_of_many_things_desc"
    },
    "effect_keys": [
        {
            "effect_string": "pre_stack_amount,100"
        },
        {
            "effect_string": "ellywick_deck_of_many_things",
            "off_when_benched": true,
            "cards": [
                {
                    "type": "Knight",
                    "effect_key_index": 2
                },
                {
                    "type": "Moon",
                    "effect_key_index": 3
                },
                {
                    "type": "Gem",
                    "effect_key_index": 4
                },
                {
                    "type": "The_Fates",
                    "effect_key_index": 5
                },
                {
                    "type": "Flames",
                    "effect_key_index": 6
                }
            ]
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
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
            "effect_string": "do_nothing,0"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
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
**Specialisation: Unknown** (Guess)
> Additively increases the odds of Knight cards by 20% to 40% (reducing the odds of each other card by 5%).
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2031,
    "flavour_text": "",
    "description": {
        "desc": "Additively increases the odds of Knight cards by 20% to 40% (reducing the odds of each other card by 5%)"
    },
    "effect_keys": [
        {
            "effect_string": "do_nothing,0"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
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
**Specialisation: Unknown** (Guess)
> Additively increases the odds of Moon cards by 20% to 40% (reducing the odds of each other card by 5%).
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2032,
    "flavour_text": "",
    "description": {
        "desc": "Additively increases the odds of Moon cards by 20% to 40% (reducing the odds of each other card by 5%)"
    },
    "effect_keys": [
        {
            "effect_string": "do_nothing,0"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
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
**Specialisation: Unknown** (Guess)
> Additively increases the odds of Gem cards by 20% to 40% (reducing the odds of each other card by 5%).
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "id": 2033,
    "flavour_text": "",
    "description": {
        "desc": "Additively increases the odds of Gem cards by 20% to 40% (reducing the odds of each other card by 5%)"
    },
    "effect_keys": [
        {
            "effect_string": "do_nothing,0"
        }
    ],
    "requirements": "",
    "graphic_id": 0,
    "large_graphic_id": 0,
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
    <svg xmlns="http://www.w3.org/2000/svg" id="Ellywick" fill="#aaa" data-formationName="Ellywick" data-campaignName="Midsummer" width="308" height="140"><circle cx="175" cy="45" r="15"/><circle cx="175" cy="85" r="15"/><circle cx="175" cy="125" r="15"/><circle cx="135" cy="25" r="15"/><circle cx="95" cy="45" r="15"/><circle cx="95" cy="85" r="15"/><circle cx="55" cy="25" r="15"/><circle cx="15" cy="45" r="15"/><circle cx="15" cy="85" r="15"/><circle cx="15" cy="125" r="15"/><text x="205" y="25" fill="#dcdcdc" font-size="25" font-family="Arial" font-weight="bold">Ellywick</text><text x="205" y="65" fill="#dcdcdc" font-size="15" font-family="Arial" font-weight="bold">Midsummer</text></svg>
</span>

[Back to Top](#top)

*Last Modified: {{ site.time }}*