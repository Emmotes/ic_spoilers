[Back to Main](index.md)

![Profile Picture](images/profile_egbert.png)
# Egbert
Clumsy but well-meaning, Egbert the Dragonborn Paladin was summarily booted out of his Paladin order after a terrible incident he doesn't like to talk about. Setting out on his quest for atonement with a new deity in tow, La Vache Mauve, he falls in with the Oxventurers Guild and, by his reckoning, questing with them offers as good a chance as any of guiding him towards absolution. Often impulsive, he very rarely plans beyond his initial moment of 'inspiration' but his heart's in the right place. Well, at least until he next rushes into battle, trips into a spike pit and ends up kebabbed on a skewer...

# Basic Information
Egbert will be the new champion in the High Harvestide event on 28 September 2022.

* Seat: 7
* Race: Dragonborn
* Class: Paladin
* Roles: Tanking Support Healing Gold
* Gender: Male
* Alignment: Chaotic Good
* Affiliation: Oxventurers Guild
* Stats:
  * Str: 18
  * Dex: 14
  * Con: 14
  * Int: 10
  * Wis:  8
  * Cha: 18
* Patrons:
  * Mirt
  * Vajra
  * Zariel

# Formation
![Formation Layout](images/formation_egbert.png)

# Abilities

Homemade Bombs (Base Attack)
> Egbert throws a bomb at the nearest enemy, dealing damage and knocking back enemies in a small area.

La Vache Mauve (Ultimate)
> Clouds come down from the top of the screen and part, revealing the head of La Vache Mauve. Radiant light shines out from behind La Vache Mauve's head and illuminates the area. Enemies take ultimate damage, and the Champions deal 1000% more damage for 20 seconds.

Atone for the Past
> Egbert has a number of Atonement points equal to the number of Lawful Champions in the formation minus the number of Chaotic Champions in the formation, not including Egbert himself. Egbert increases the damage of all Champions behind him by `$(not_buffed amount___2)%` multiplied by  the number of Atonement points he has squared.

Lay on Hands
> After Egbert makes a base attack, if there is a Champion below `$(health_precent_threshold)%` hit points (including himself), he heals the most damaged Champion for `$(base_heal)` multiplied by the absolute value of the number of Atonement points he has.

Friendly Protection
> Egbert increases the health of all other Champions by `$(amount)%` of his max health multiplied by the absolute value of the number of Atonement points he has.

More the Merrier
> Egbert increases the effect of Atone for the Past by `$(amount)%` for each enemy on the screen and each point of enemy/boss enrage, stacking additively and then applying multiplicatively.

Golden Scales
> Egbert increases the global gold find by `$(not_buffed amount)%` multiplied by the absolute value of the number of Atonement points he has.

# Specialisations

Atonement Begins with an Apology (First Spec)
> The number of Neutral (Lawful/Chaotic axis) Champions in the formation is added to Egbert's Atonement points.

Team Chaos Team (First Spec)
> The number of Neutral (Lawful/Chaotic axis) Champions in the formation is subtracted from Egbert's Atonement points.

Smoky Bombs (Second Spec)
> Egbert's bombs now also create smoke clouds that last for `$(duration)` seconds. Enemies in one or more smoke clouds take an additional `$(amount)%` damage from attacks, and have a `$(miss_chance)%` chance to miss with their attack.

Health Kick (Second Spec)
> Egbert's Lay on Hands targets the two most damaged Champions and the amount of healing is increased by `$(amount)%`.

Oxventure Capitalism (Second Spec)
> Egbert increases the effect of Golden Scales by `$(not_buffed amount)%` for each Oxventures affiliation member in the formation, stacking multiplicatively.

# Items

1. Bomb - All Champion Damage
2. Find Steed - Gold Find
3. Food - Health
4. Mace - Atone for the Past
5. Pamphlet - All Second Specialisations
6. Shield - Ultimate Cooldown Reduction

# Feats

| Feat | Effect | Source |
|---|---|---|
| `Selflessness` | 10% All Champion Damage | Free |
| `Inspiring Leader` | 25% All Champion Damage | 12,500 Gems |
| `Tough` | 15% Health | Free |
| `Resilient` | 30% Health | Gold Chest |
| `Lucky` | 25% Gold | 12,500 Gems |
| `Mauve Blessings` | 40% Atone for the Past | Gold Chest |
| `Holy Touch` | 80% Atone for the Past | 50,000 Gems |
| `Unnecessary Apology` | 20% Lay On Hands | Free |
| `Let's Do This Thing` | 40% Lay On Hands | Gold Chest |
| `Gainful Employment` | 40% All Second Specialisations | Gold Chest |
| `Defensive Duelist` | 5 Overwhelm | Free |
| `Calm Under Pressure` | 10 Overwhelm | 12,500 Gems |

# Legendaries

* Increases the damage of all Champions by 10.0% for each Champion in the formation.
* Increases the damage of all Male Champions by 125.0%.
* Increases the damage of all Dragonborn Champions by 150.0%.
* Increases the damage of all Champions by 40.0% for each Champion with a STR score of 15 or higher in the formation.
* Increases the damage of all Champions with a CON score of 13 or higher by 150.0%.
* Increases the damage of all Good Champions by 150.0%.

[Back to Top](#top)

*Last Modified: {{ site.time }}*