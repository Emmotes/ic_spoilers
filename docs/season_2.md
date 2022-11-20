[Back to Main](index.md)

# Season 2
Season 2's speculative release date will be 21 December 2022.

# Theme
The theme for Season 2 will be Baldur's Gate - with Nerys Shandie Krydle Jaheira and Viconia being the target champions.

![Season 2 Profile](images/portrait_s2.png)

# Changes

The information below is raw data on the "new" abilities that the champions will be getting. Some may be complete reworks - some may look copy-paste from old abilities that haven't seen reworks yet (and might not get reworked).

Please do me a favour and don't get all melodramatic about what you find here. I - and CNE - don't appreciate it. These are spoilers and will almost certainly change before release - likely multiple times. Making assumptions on how the champions will turn out based on this information would be premature.

Please also note that most ability names are unknown at this point - and I'm naming them as best as I'm able to. Some look obviously like their old abilities and so I've chosen to keep their old names. Some abilities are new and could be called anything. I've added `(Guess)` where I'm really unsure. But honestly - the vast majority are guesses.

## Krydle

**Reverse Pickpocket**
> Krydle attacks a random enemy with his daggers. While doing so, he reverse pick-pockets a smokepowder bomb onto their person, which explodes for which deals 3 seconds of BUD damage in a small radius after 3 seconds if the enemy is not killed in the meantime.

**From the Shadows**
> Increase the damage of all Champions in the back two columns of the formation by `$(amount)%`.

**Charismatic Leader?** (Guess)
> Krydle increases the effect of From The Shadows by `$(not_buffed amount)%` for each Champion with the Heroes of Baldur's Gate affiliation or a CHA score of 15 or higher, stacking multiplicatively.

**New Ability: Evasion?** (Guess)
> Krydle begins every area with stacks of Evasion equal to his Overwhelm. When Krydle gets attacked, as long as he has at least one stack of Evasion left, he dodges the attack completely and uses up one stack of Evasion. Krydle restores 2 stacks of Evasion every second for each Healing Champion in the formation. Number of stacks can not surpass his Overwhelm. If a boss or enemies are enraged, max stacks are divided by the enrage multiplier, rounded down.

**New Ability: Overwhelm?** (Guess)
> Krydle gains `$(not_buffed amount)` Overwhelm for each Heroes of Baldur's Gate Champion in the formation.

**New Ability: No Idea?** (Guess)
> Krydle reduces the damage taken by other Champions in the formation by `$(amount)%`, assuming he has at least one stack of Evasion and is in the front-most column of the formation.

**Unknown**
> Increase the effect of Charismatic Leader by `$(amount)%`.

**New Ability: Health Share** (Guess)
> Krydle's base max health is increased by `$(not_buffed amount)%` for every 50 areas completed, up to area 600.

## Jaheira

**Tangling Scimitar**
> Jaheira attacks the nearest enemy with her scimitar and then summons roots to hold them in place for 3 seconds. The roots also damage and root other nearby enemies.

**Specialisation: Class Warfare - Spellslingers**
> Jaheira increases the damage of Clerics, Wizards, Sorcerers, and Warlocks by `$(amount)%`.

**Specialisation: Class Warfare - Bruisers**
> Jaheira increases the damage of Barbarians, Fighters, Rogues and Monks by `$(amount)%`.

**Specialisation: Class Warfare - Hybrids**
> Jaheira increases the damage of Paladins, Rangers, Druids, and Bards by `$(amount)%`.

**New Specialisation: Class Warfare - HoBG?** (Guess)
> Jaheira increases the damage of Champions from the Heroes of Baldur's Gate affiliation by `$(amount)%`.

**Fierce Hunter?** (Guess pre-spec)
> Beast enemies are Jaheira's Favored Foe. When a Beast enemy dies, Jaheira gains a Hunter stack. This increases her damage by 400% and increases the effect of Class Act by 200% per stack, stacking additively. Maximum 10 stacks. Stacks are reset when you change areas.

**Fierce Hunter?** (Guess post-spec)
> `$(text_key tag___3)` enemies are Jaheira's Favored Foe. When an enemy of her Favored Foe type is attacked (by any Champion), Jaheira gains a Hunter stack. This increases her damage by `$(not_buffed amount)%` per stack and increases the effect of Class Act by `$(not_buffed amount___2)%` per stack, stacking additively. Maximum `$(max_stacks)` stacks. Stacks are reset when you change areas.

**New Ability: Battle Focus** (Guess)
> After `$(favored_foes_kills_to_trigger)` of Jaheira's Favored Foes have been killed, this ability activates and she becomes more focused, increasing the effects of Fierce Hunter by `$(not_buffed amount)%` until you change areas.

**New Ability: Persistent Focus?** (Guess)
> Jaheira gains `$(time_stack)` stack of Persistent Focus every `$(stack_time)` seconds while Battle Focus is active, and `$(expire_stack)` stack when it expires. This increases the damage of all Champions, including herself, by `$(not_buffed amount)%` per stack, stacking additively.

**Specialisation: Protective - Nature**
> Jaheira continues to be a Fierce Hunter of Beast creatures.

**Specialisation: Protective - Twisted Creatures**
> Fiends are Jaheira's new Favored Foe. Jaheira's Fierce Hunter and Battle Focus ability now trigger off of Fiend creatures instead of Beasts.

**Specialisation: Protective - Civilisation**
> Humanoids are Jaheira's new Favored Foe. Jaheira's Fierce Hunter and Battle Focus ability now trigger off of Humanoid creatures instead of Beasts.

**New Specialisation: Protective - Undead?** (Guess)
> Undead are Jaheira's new Favored Foe. Jaheira's Fierce Hunter and Battle Focus ability now trigger off of Undead creatures instead of Beasts.

**Unity**
> Increase the effect of Class Act by `$(not_buffed amount)%` for each Champion affected by it, stacking multiplicatively.

## Nerys

**Dash and Slash**
> Nerys cleaves all targets near the closest enemy. Undead enemies take an additional 5 seconds worth of BUD damage.

**Unholy?** (Guess)
> Undead enemies become Nerys' Favored Foe and take `$(amount)%` increased damage from all Champions.

**Spiritual Weapon**
> Nerys calls her Spiritual Weapon to her side. It attacks on her attack timer, dealing `$(amount)%` of Nerys' damage. Spiritual Weapon attacks can set BUD (crediting Nerys).  

**Follow My Friend**
> Nerys' Spiritual Weapon follows the Champion with the highest damage instead of her. It attacks on that Champions attack timer, dealing damage based on their damage instead of Nerys'. If those attacks are BUD-setting, then the Champion it is following gets credit for setting the BUD.

**War Healing**
> When Nerys' Spiritual Weapon attacks, Nerys targets the column with the most damaged Champion and heals all the Champions in it for `$(amount)` health.

**Specialisation: Dig In**
> Increases the effect of War Healing by `$(amount)%`.

**Specialisation: Kelemvor's Will**
> Increases the damage bonus of Spiritual Weapon by `$(amount)%`.

**New Specialisation? (Guess)**
> Increases the damage of Spiritual Weapon against all Favored Foes by `$(amount)%`.

## Shandie

**Agile Allies**
> Increases the damage of Champions within 2 slots of Shandie by `$(amount)%` for each Champion adjacent to Shandie with a DEX of 15 or higher.

**Dash**
> Increases the game speed by 25% when the formation hasn't been under attack for 30 seconds.

**Explosive Arrow**
> When the formation is under attack, Shandie attacks with explosive arrows. The damage of all Champions is increased by `$(amount)%` times the largest number of enemies Shandie has hit with a single Explosive Arrow in the current area.

**Specialisation: Criminal Contacts**
> The base effect of Agile Allies is additively increased by 100% for each Neutral/Evil Champion adjacent to Shandie.

**New Specialisation? (Guess)**
> The base effect of Agile Allies is additively increased by `$(amount)%` for each Heroes' of Baldur's Gate affiliated Champion in the formation.

For those worried about the lack of Ranger Training specialisation here. Don't. It may simply not be getting modified and so won't appear here - or what's more likely is that it could be getting removed and replaced by a feat like what happened with Sentry and her speed.

## Viconia

**Yesterday's Undead** (Guess)
> Whenever a non-boss, non-static, non-undead enemy spawns there is a `$(amount)%` chance that it spawns as an undead version of itself while also retaining its original tags.

# Other Heroes of Baldur's Gate

Some of the other HoBG champions are also receiving very tiny reworks to make them fit better into the new HoBG theme as a whole - which seems to primarily be Favored Foes.

## Delina

**Spell Bombardment**
> Increase the damage of Delina by `$(not_buffed amount)%` for each Champion in front of them in the formation, and by an additional `$(not_buffed amount)%` for each Heroes of Baldur's Gate Champion in the formation, stacking multiplicatively.

## Minsc

**Boastful**
> Whenever a non-boss enemy wave spawns, there is a `$(desc_chance_for_one)%` chance of an extra enemy spawning, and a `$(desc_chance_for_two)%` chance of 2 extra enemies spawning. These enemies will always be Minsc's Favored Foe.

## Baeloth

**Morbid Excitement**
> All Champions in the column in front or behind Baeloth do `$amount___2%` more damage per Morbid Excitement stack. Morbid Excitement loses 10% of stacks every 10 seconds and stacks cap at `$max_stacks___2`.  
> Stacks are earned for the following:  
> - A favored foe is defeated: +1 Stack  
> - An enemy drops more gold due to Paid Partially with Pain: +1 Stack  
> - An enemy explodes in confetti due to Cause for Celebration: +2 Stacks  
> - A chain reaction kills an enemy due to Cause for Celebration: +3 Stacks  
> - A Champion in any column in front of Baeloth takes damage: +5 Stacks  
> - A Champion dies: +100 Stacks

# Other Unrelated Champions

Some other champions - with favored-foe-like abilities - are also getting reworks to give them actual favored foe abilities - so they'll work more nicely with Imoen.

Most of these abilities that make enemies become favored foes make those enemies take 300% more damage - with current numbers.

## Ezmerelda

**Specialisation: Fiendish Stature**
> Fiend enemies become Ezmerelda's new Favored Foe. The Devil's Playthings and Threat Tracking now track & trigger vs fiends instead of undead for the remainder of the adventure. She will retain her previous tracking totals.

**Specialisation: The Devil Wears Many Masks**
> Humanoid enemies become Ezmerelda's new Favored Foe. The Devil's Playthings and Threat Tracking now track & trigger vs humanoids instead of undead for the remainder of the adventure. She will retain her previous tracking totals.

**Specialisation: Monststrous Intentions**
> Monstrosity enemies become Ezmerelda's new Favored Foe. The Devil's Playthings and Threat Tracking now track & trigger vs monstrosities instead of undead for the remainder of the adventure. She will retain her previous tracking totals.

**Specialisation: Stay on Target**
> Undead enemies remain Ezmerelda's Favored Foe. The Devil's Playthings and Threat Tracking continue to track & trigger vs undead.

## Reya

**New Ability?** (Guess)
> Fiends become Reya's Favored Foe and take `$(amount)%` more damage from Reya and adjacent champions.

**Searing Radiance**
> Reya imbues adjacent Champions with her Searing Radiance, causing their attacks to deal `$(amount)%` more damage.

## Turiel

**Unflinching Hatred**
> Fiends are Turiel's Favored Foe. After attacking a fiend-type enemy, Embodiment of the Law is increased by `$amount%` for 30 seconds. When Order's Demand redirects the attack of a fiend-type enemy, its effect is increased by `$amount%` for 30 seconds.

## Zorbu

**New Ability?** (Guess)
> Humanoid, beast, undead, and drow enemies become Zorbu's Favored Foes and take `$(amount)%` more damage from him.

[Back to Top](#top)

*Last Modified: {{ site.time }}*