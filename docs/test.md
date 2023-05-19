![Evil Overlord Icon](images/bbeg/icon_eviloverlord.png) **Evil Overlord** (Level: 20)
> BBEG increases the damage of all Champions with an Intelligence of 12 or less by 100%.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "static_dps_mult": null,
    "required_level": 20,
    "effect": "effect_def,1539",
    "tip_text": "BBEG increases the damage of all Champions with an INT score of 12 or less.",
    "name": "Evil Overlord",
    "id": 11539,
    "hero_id": 125,
    "upgrade_type": "unlock_ability",
    "default_enabled": 1,
    "required_upgrade_id": 0
}
{
    "effect_keys": [{
        "formation_arrows_for_effected_only": true,
        "off_when_benched": true,
        "effect_string": "hero_dps_multiplier_mult,100",
        "targets": [{
            "stat": "int",
            "comparison": "<=",
            "type": "stat",
            "value": 12
        }]
    }],
    "requirements": "",
    "description": {"desc": "$source increases the damage of all Champions with an Intelligence of 12 or less by $(amount)%."},
    "id": 1539,
    "flavour_text": "",
    "graphic_id": 19507,
    "properties": {"is_formation_ability": true}
}
</pre>
</p>
</details>
<details><summary><em>Upgrade Data</em></summary>
<p>
<pre>
Upgrades:
      180: 100%
      500: 100%
      750: 100%
    1,000: 100%
    1,250: 100%
    1,500: 100%
    1,800: 100%
    2,000: 100%
    2,200: 100%
    2,400: 100%
    2,600: 100%
    2,800: 100%
    2,900: 100%
    3,100: 100%
    3,300: 100%
    3,500: 100%
    3,700: 100%

    Total Upgrade Bonus: 1.31e07%
</pre>
</p>
</details>
<br />

![Homebrew Icon](images/bbeg/icon_homebrew.png) **Homebrew** (Level: 100)
> BBEG increases the damage bonus of Evil Overlord by 100% for each active potion, stacking multiplicatively.
<details><summary><em>Raw Data</em></summary>
<p>
<pre>
{
    "static_dps_mult": null,
    "required_level": 100,
    "effect": "effect_def,1540",
    "name": "Homebrew",
    "id": 11540,
    "hero_id": 125,
    "upgrade_type": "unlock_ability",
    "default_enabled": 1,
    "required_upgrade_id": 0
}
{
    "effect_keys": [{
        "stack_title": "Active Potions",
        "amount_updated_listeners": [
            "slot_changed",
            "active_potions_changed"
        ],
        "stacks_multiply": true,
        "show_bonus": true,
        "amount_func": "mult",
        "stack_func": "per_active_potion",
        "effect_string": "buff_upgrade,100,11539"
    }],
    "requirements": "",
    "description": {"desc": "$source increases the damage bonus of $(upgrade_name id) by $(not_buffed amount)% for each active potion, stacking multiplicatively."},
    "id": 1540,
    "flavour_text": "",
    "graphic_id": 19508,
    "properties": {
        "is_formation_ability": true,
        "owner_use_outgoing_description": true
    }
}
</pre>
</p>
</details>
<details><summary><em>Upgrade Data</em></summary>
<p>
<pre>
Upgrades:
      550: 100%
    1,010: 100%
    1,450: 100%
    1,900: 100%
    2,350: 100%
    2,780: 100%
    3,250: 100%
    3,800: 100%

    Total Upgrade Bonus: 2.55e04%
</pre>
</p>
</details>
<br />